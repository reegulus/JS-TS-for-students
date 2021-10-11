import {StudentType} from "../02LessObjects/02";
import {GovernmentType} from "../02LessObjects/02_test02";

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

export const livesStudentCountry = (s: StudentType, countri: string) => {
    return s.adress.countriTitle === countri
}

export const addMoneyToBudget = (building: GovernmentType , budget: number) => {
   building.budget += budget
}
