import {StudentType} from "../objects02/Objects";
import {addSkill, makeStudentActive} from "./function03";

let student: StudentType
beforeEach(() => {
    student = {
        name: "Jon",
        age: 25,
        active: false,
        address: {
            streetTitle: "Surganova 2",
            city: {
                title: "Minsk",
                countryTitle: "Belarus"
            }
        },
        technologies: [
            {id: 1, title: "HTML"},
            {id: 2, title: "React"},
            {id: 3, title: "Css"},
        ]
    }
})

test("new tech skill should be added student", () => {
    expect(student.technologies.length).toBe(3)


    addSkill(student, "TS")

    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe("TS")
    expect(student.technologies[3].id).toBeDefined()


})

test("student should be made active", () => {
    expect(student.active).toBe(false)
    makeStudentActive(student)

    expect(student.active).toBe(true)
})