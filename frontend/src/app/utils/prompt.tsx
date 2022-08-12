/**
 * These hooks re-implement the now removed useBlocker and usePrompt hooks in 'react-router-dom'.
 * Thanks for the idea @piecyk https://github.com/remix-run/react-router/issues/8139#issuecomment-953816315
 * Source: https://github.com/remix-run/react-router/commit/256cad70d3fd4500b1abcfea66f3ee622fb90874#diff-b60f1a2d4276b2a605c05e19816634111de2e8a4186fe9dd7de8e344b65ed4d3L344-L381
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { useContext, useEffect, useCallback } from 'react';
import { Blocker, History } from 'history';
import {
    UNSAFE_NavigationContext as NavigationContext,
    Navigator,
} from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

import ExitDialog from './ExitDialog';
import theme from '../../config/theme';

/**
 * Blocks all navigation attempts. This is useful for preventing the page from
 * changing until some condition is met, like saving form data.
 *
 * @param  blocker
 * @param  when
 * @see https://reactrouter.com/api/useBlocker
 */
export function useBlocker(blocker: Blocker, when = true) {
    const { navigator } = useContext(NavigationContext);

    useEffect(() => {
        if (!when) return;

        const unblock = (navigator as Navigator & Pick<History, 'block'>).block(
            tx => {
                const autoUnblockingTx = {
                    ...tx,
                    retry() {
                        // Automatically unblock the transition so it can play all the way
                        // through before retrying it. TODO: Figure out how to re-enable
                        // this block if the transition is cancelled for some reason.
                        unblock();
                        tx.retry();
                    },
                };

                blocker(autoUnblockingTx);
            }
        );

        return unblock;
    }, [navigator, blocker, when]);
}
/**
 * Prompts the user with an Alert before they leave the current screen.
 *
 * @param  message
 * @param  when
 */
export function usePrompt(message: string, when = true) {
    const blocker = useCallback(
        (tx:any) => {
            const element = document.createElement('div');
            element.setAttribute('id', 'prompt-dialog-container');
            element.setAttribute('aria-hidden', 'true');

            const closePrompt = (state: boolean) => {
                if (element) {
                    ReactDOM.unmountComponentAtNode(element);
                }
                if (!state) {
                    document.body.removeChild(element);
                } else {
                    tx.retry();
                }
            };

            document.body.appendChild(element);
            ReactDOM.render(
                <ThemeProvider theme={theme}>
                    <ExitDialog
                        open={!!message}
                        message={message}
                        onClose={() => closePrompt(false)}
                        onConfirm={() => closePrompt(true)}
                    />
                </ThemeProvider>,
                element
            );
        },
        [message]
    );

    useBlocker(blocker, when);
}
