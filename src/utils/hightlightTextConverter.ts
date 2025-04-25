/**
 * Convert text
 * @param text - Number to be converted
 * @return Converted text
 */

export function hightlightTextConverter(text: string): string {
    switch(text) {
        case 'alert':
            return "* Meta longe de ser batida"
        case 'success':
            return "A meta foi batida! Parabéns!"
        case 'warning':
            return "Falta pouco, vamos lá!"
        default:
            return "Sem dados no momento"
    }
}