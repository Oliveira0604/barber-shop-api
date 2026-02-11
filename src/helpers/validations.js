export const validateDatas = (datas) => {

    // check if the datas are empty
    if (!datas.name || datas.name.trim() === "") {
        throw new Error('O nome não pode estar vázio!')
    }

    if (!datas.email || datas.email.trim() === "") {
        throw new Error('O email não pode estar vázio.')
    }

    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(datas.email)) {
        throw new Error('O email não está no formato correto.')
    }

    if (!datas.cellphone || datas.cellphone.trim() === "") {
        throw new Error('O número do celular não pode estar vázio!')
    }

    if (!datas.password || datas.password.trim() === "") {
        throw new Error('A senha não pode estar vázia!')
    }

    if (!datas.confirmPassword || datas.confirmPassword.trim() === "") {
        throw new Error('A confirmação de senha não pode estar vázia!')
    }


    // check if the password and the confirm password field have the same value
    if (datas.password !== datas.confirmPassword) {
        throw new Error('As senhas não conhecidem.')
    }
    

    // check if the datas follow the patterns
    if (/[^a-zA-ZÀ-ÿ\s]/.test(datas.name)) {
        throw new Error('O nome não pode conter símbolos ou número.')
    }


    if (!/^\d{11}$/.test(datas.cellphone)) {
        throw new Error('O número de celular não segue o padrão correto.')
    }
    
    if (!/[!@#$%^&*(),.?":{}|<>_\-+=~`[\]\\\/]/.test(datas.password)) {
        throw new Error('A senha precisa conter símbolos.')
    }

    if (datas.password.length < 8) {
        throw new Error('A senha precisa ter 8 caracteres ou mais.')
    }

    if (!/[A-Z]/.test(datas.password)) {
        throw new Error('A senha precisa ter pelo menos 1 letra maiúscula.')
    }

    if (!/[a-z]/.test(datas.password)) {
        throw new Error('A senha precisa ter pelo menos 1 letra minúscula.')
    }

    return null
}