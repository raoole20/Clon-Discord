export const validateLoginForm = (email:string, password:string) =>  {
    const isMailValid = validateEmail(email)
    const isPasswordValid = validatePassword(password)

    return isMailValid && isPasswordValid
}
export const validateRegister = (email:string, password:string, userName:string) => {
    return validateEmail(email) && validatePassword(password) && validateUserName(userName)
}

const validatePassword = (password:string) => {
    return password.length > 6 && password.length < 12
}

const validateUserName = (userName:string) => {
    return userName.length > 2 && userName.length < 12
}

export const validateEmail = (email:string) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
}