import {mult, splitIntoWords, sum} from "./Testing-01"

test("correct summation result\n", () => {
    const a = 1
    const b = 2
    const c = 3

    const result1 = sum(a, b)
    const result2 = sum(a, c)

    expect(result1).toBe(3)
    expect(result2).toBe(4)
})

test("mult should be correct summation result\n", () => {
    const a = 1
    const b = 2
    const c = 3

    const result1 = mult(a, b)
    const result2 = mult(a, c)

    expect(result1).toBe(2)
    expect(result2).toBe(3)
})
test("splitting into words should correct", () => {

    const sent1 = "Hello my friends"
    const sent2 = "JS - programming language"

    const result1 = splitIntoWords(sent1)
    const result2 = splitIntoWords(sent2)

    expect(result1.length).toBe(3)
    expect(result1[0]).toBe("hello")
    expect(result1[1]).toBe("my")
    expect(result1[2]).toBe("friends")

    expect(result2[0]).toBe("js")
    expect(result2[1]).toBe("-")
    expect(result2[2]).toBe("programming")
    expect(result2[3]).toBe("language")
})
