import {StudentType} from "../02LessObjects/02";

export const sum = (a: number, b: number) => {
        return a + b
    }

    export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
    }

    export const madeStudentActive = (s: StudentType) => {
    s.isActive = true
    }

