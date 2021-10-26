test("should take old men older then 90", () => {

    const predicate = (age: number) => {
        return age>90
    }
    const ages = [18,20, 22, 1, 100, 14]
      const oldAges = ages.filter(predicate )
    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)
})

test("should take ", () => {

    const predicate = (age: number) => {
        return age>90
    }
    const ages = [18,20, 22, 1, 100, 14]
      const oldAges = ages.filter(predicate )
    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)
})