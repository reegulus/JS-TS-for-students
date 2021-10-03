import {multi, splitIntoWords, sum} from "./01";

test('sum should be correct', () => {
    let a = 1
    let b = 2
    let c = 3

    let result = sum(a,b)
    let result1 = sum(b,c)

    expect(result).toBe(3)
    expect(result1).toBe(5)
})

test('multiply should be correct', () => {
    let a = 1
    let b = 2
    let c = 3

    let result = multi(a,b)
    let result1 = multi(b,c)

    expect(result).toBe(2)
    expect(result1).toBe(6)
})

test('splitting into words should be correct', () => {

    let sent = "Hello my Friend!"
    let sent1 = "JavaScript the best programming language"

    let result = splitIntoWords(sent)
    let result1 = splitIntoWords(sent1)

    expect(result.length).toBe(3)
    expect(result[0]).toBe('hello')
    expect(result[1]).toBe('my')
    expect(result[2]).toBe('friend')

    expect(result1.length).toBe(5)
    expect(result1[0]).toBe('javascript')
    expect(result1[1]).toBe('the')
    expect(result1[2]).toBe('best')
    expect(result1[3]).toBe('programming')
    expect(result1[4]).toBe('language')
})