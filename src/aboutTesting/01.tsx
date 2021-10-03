export function sum(a: number, b: number) {
    return a + b
}
export function multi(a: number, b: number) {
    return a * b
}

export function splitIntoWords(sentens: string) {
    return sentens.toLowerCase().split(' ')
        .map(w => w.replace("!", ""))
}