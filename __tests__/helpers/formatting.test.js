import { formatName, formatCellphoneNumber } from '../../src/helpers/formatting.js'

describe('formatting.js', () => {
    test('should return a formmated name with Upper caracter in the beginning of the string', () => {
        const name = 'nathan de oliveira'
        expect(formatName(name)).toBe('Nathan De Oliveira')
    })

    test('should return a formmated cellphone number without symbols', () => {
        const cellphone = '(11)999999999'
        const formattedCellphoneNumber = formatCellphoneNumber(cellphone)
        expect(formattedCellphoneNumber).toBe('11999999999')
    })
})