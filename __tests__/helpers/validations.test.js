import { validateDatas } from '../../src/helpers/validations';

describe('validations.js', () => {
    test("shold stop if name is empty", () => {
        const invalidDatas = { name: "" }
        expect(() => { validateDatas(invalidDatas) }).toThrow('O nome não pode estar vázio!')
    })

    test("shold stop if email is empty", () => {
        const invalidDatas = { 
            name: "Nathan",
            email: ""
         }
        expect(() => { validateDatas(invalidDatas) }).toThrow('O email não pode estar vázio.')
    })

    test("shold stop if the email is not in the correct format", () => {
        const invalidDatas = { 
            name: "Nathan",
            email: "@ol"
         }
        expect(() => { validateDatas(invalidDatas) }).toThrow('O email não está no formato correto.')
    })

    test("should stop if the cellphone is empty", () => {
        const invalidDatas = {
            name: "Nathan",
            email: "nathan@email.com",
            cellphone: ""
        }
        expect(() => { validateDatas(invalidDatas) }).toThrow('O número do celular não pode estar vázio!')
    })

    test("should stop if the password is empty", () => {
        const invalidDatas = {
            name: "Nathan",
            email: "nathan@email.com",
            cellphone: "99999999",
            password: ""
        }
        expect(() => { validateDatas(invalidDatas) }).toThrow('A senha não pode estar vázia!')
    })

    test("should stop if the confirm password is empty", () => {
        const invalidDatas = {
            name: "Nathan",
            email: "nathan@email.com",
            cellphone: "99999999",
            password: "123",
            confirmPassword: ""
        }
        expect(() => { validateDatas(invalidDatas) }).toThrow('A confirmação de senha não pode estar vázia!')
    })

    test("should stop if the password and confirm password are different", () => {
        const invalidDatas = {
            name: "Nathan",
            email: "nathan@email.com",
            cellphone: "99999999",
            password: "123",
            confirmPassword: "321"
        }
        expect(() => { validateDatas(invalidDatas) }).toThrow('As senhas não conhecidem.')
    })

    test("should stop if there is symbol in the name", () => {
        const invalidDatas = {
            name: "Nathan@",
            email: "nathan@email.com",
            cellphone: "99999999",
            password: "123",
            confirmPassword: "123"
        }
        expect(() => { validateDatas(invalidDatas) }).toThrow('O nome não pode conter símbolos ou número.')
    })

    test("should stop if there is symbol or letter in the cellphone number", () => {
        const invalidDatas = {
            name: "Nathan",
            email: "nathan@email.com",
            cellphone: "99999999lo",
            password: "123",
            confirmPassword: "123"
        }
        expect(() => { validateDatas(invalidDatas) }).toThrow('O número de celular não segue o padrão correto.')
    })

    // password validations 
    test("should stop if there is not symbol in the password", () => {
        const invalidDatas = {
            name: "Nathan",
            email: "nathan@email.com",
            cellphone: "99999999999",
            password: "123",
            confirmPassword: "123"
        }
        expect(() => { validateDatas(invalidDatas) }).toThrow('A senha precisa conter símbolos.')
    })

    test("should stop if the password is smaller than 8 caracters", () => {
        const invalidDatas = {
            name: "Nathan",
            email: "nathan@email.com",
            cellphone: "99999999999",
            password: "123@",
            confirmPassword: "123@"
        }
        expect(() => { validateDatas(invalidDatas) }).toThrow('A senha precisa ter 8 caracteres ou mais.')
    })

    test("should stop if the password doesn't have an Upper caracter", () => {
        const invalidDatas = {
            name: "Nathan",
            email: "nathan@email.com",
            cellphone: "99999999999",
            password: "123@llll",
            confirmPassword: "123@llll"
        }
        expect(() => { validateDatas(invalidDatas) }).toThrow('A senha precisa ter pelo menos 1 letra maiúscula.')
    })

    test("should stop if the password doesn't have a lower caracter", () => {
        const invalidDatas = {
            name: "Nathan",
            email: "nathan@email.com",
            cellphone: "99999999999",
            password: "123@LLLL",
            confirmPassword: "123@LLLL"
        }
        expect(() => { validateDatas(invalidDatas) }).toThrow('A senha precisa ter pelo menos 1 letra minúscula.')
    })
})