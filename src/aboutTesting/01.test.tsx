import {multi, sum} from "./01";

test('sum should be correct', () => {
    let a = 1
    let b = 2
    let c = 3

    let result = sum(a,b)
    let result1 = sum(b,c)

    expect(result).toBe(3)
    expect(result1).toBe(5)
})

test('sum should be correct', () => {
    let a = 1
    let b = 2
    let c = 3

    let result = sum(a,b)
    let result1 = sum(b,c)

    expect(result).toBe(3)
    expect(result1).toBe(5)
})