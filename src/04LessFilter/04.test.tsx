import {ages, chipPredicate, courses, predicate} from "./04";

test("should take old men older then 90", () => {

    /*const predicate = (age: number) => {
        return age>90
    }*/
    // const predicate = (age: number) => age>90
    const ages = [18,20, 22, 1, 100, 14]
    const oldAges = ages.filter(predicate)
    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)
})
test("should take chip courses 160", () => {

    const chipCourses = courses.filter(chipPredicate)


    expect(chipCourses.length).toBe(2)
    expect(chipCourses[0].title).toBe("CSS")
    expect(chipCourses[1].title).toBe("HTML")
})


test("get only completed tasks", () => {
    const tasks= [
        {id: 1, title: "bread", isDone: false},
        {id: 2, title: "milk", isDone: true},
        {id: 3, title: "cookies", isDone: false},
        {id: 4, title: "sol", isDone: false},
        {id: 5, title: "chocolate", isDone: true},
    ]
    const completedTasks =tasks.filter(task => task.isDone)

    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].id).toBe(2)
    expect(completedTasks[1].id).toBe(5)

})