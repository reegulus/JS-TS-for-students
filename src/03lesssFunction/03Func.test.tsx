import {StudentType} from '../02LessObjects/02'
import {addSkill, livesStudentCountry, madeStudentActive} from "./03Func";

let student: StudentType

beforeEach(() => {
    student = {
        id: 1,
        name: "Egor",
        age: 33,
        isActive: false,
        adress: {
            city: "Minsk",
            countriTitle: "Belarus"
        },
        university: {
            title: "It-incubator",
            adressTitle: {
                countriTitle: "Belarus",
                city: "Minsk",
                streetTitle: "Surganova 2",
            },
        },
        technologies: [
            {
                id: 1,
                title: "HTML"
            }, {
                id: 2,
                title: "Css"
            }, {
                id: 3,
                title: "React"
            }

        ]
    }
})

test("new tech skill should be added to student", () => {
    expect(student.technologies.length).toBe(3)
    addSkill(student, "JavaScript")


    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe("JavaScript")
    expect(student.technologies[3].id).toBeDefined()

})
test("student should be made active", () => {
    expect(student.isActive).toBe(false)
    madeStudentActive(student)
    expect(student.isActive).toBe(true)
})
test("student should be lives in the country", () => {
    let res1 = livesStudentCountry(student, "Moscow")
    let res2 = livesStudentCountry(student, "Belarus")
    expect(res1).toBe(false)
    expect(res2).toBe(true)
})
