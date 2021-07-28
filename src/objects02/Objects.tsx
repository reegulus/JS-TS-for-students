
type AddressType = {
    streetTitle: string
    city: CityTitleType
}
type CityTitleType = {
    title: string
    countryTitle: string
}
type TechnologiesType = {
    id: number
    title: string
}
type StudentType = {
    name: string
    age :number
    active: boolean
    address: AddressType
    technologies: Array<TechnologiesType>
}

const student: StudentType = {
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