import { createTheme } from '@mui/material';

// Theme for defining custom base properties (spacing, colors, etc)
const baseTheme = createTheme({});

// Complete theme used to override component props, variants and styles
// using baseTheme as helper (e.g, ComponentX -> margin: baseTheme.spacing())
const theme = createTheme({}, baseTheme);

export default theme;
