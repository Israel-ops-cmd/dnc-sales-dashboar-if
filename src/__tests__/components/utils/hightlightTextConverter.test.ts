import { hightlightTextConverter } from "@/utils"

describe('hightlightTextConverter', () => {
    it('should return the correct text for "alert"', () => {
        expect(hightlightTextConverter('alert')).toBe('* Meta longe de ser batida')
    })

    it('should return the correct text for "success"', () => {
        expect(hightlightTextConverter('success')).toBe('A meta foi batida! Parabéns!')
    })

    it('should return the correct text for "warning"', () => {
        expect(hightlightTextConverter('warning')).toBe('Falta pouco, vamos lá!')
    })

    it('should return the default for unknown input', () => {
        expect(hightlightTextConverter('un')).toBe('Sem dados no momento')
    })
})