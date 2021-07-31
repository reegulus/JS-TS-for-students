import {student, StudentType} from "../objects02/Objects";

export const sum = (a: number, b: number) => {
    return a + b
}

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive (student: StudentType) {
    student.active = true
}

export function doesStudentLiveIn (student: StudentType, cityName: string) {
   return student.address.city.title === cityName
}