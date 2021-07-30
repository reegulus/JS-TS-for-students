
export type AddressType = {
    streetTitle: string
    city: CityTitleType
}
export type CityTitleType = {
    title: string
    countryTitle: string
}
export type TechnologiesType = {
    id: number
    title: string
}
export type StudentType = {
    name: string
    age :number
    active: boolean
    address: AddressType
    technologies: Array<TechnologiesType>
}

export const student: StudentType = {
    name: "Jon",
    age: 25,
    active: true,
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

console.log(student.age)
console.log(student.name)
console.log(student.address.city)
console.log(student.technologies[0].title)


const school = {
    name: "IT-Inc",
    mentor: "Dimych"
}