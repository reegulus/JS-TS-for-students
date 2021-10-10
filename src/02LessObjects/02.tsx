type TechnologiesType = {
    id: number
    title: string
}
type AdressTitleType = {
    countriTitle :string
    city: string
    streetTitle: string
}
type UniversityType = {
    title: string
    adressTitle: AdressTitleType

}
export type AdressType = {
    city: string
    countriTitle: string
}
export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    adress: AdressType
    university: UniversityType
    technologies: Array<TechnologiesType>

}

const student: StudentType = {
    id: 1,
    name: "Egor",
    age: 33,
    isActive: true,
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
        },{
            id: 2,
            title: "Css"
        },{
            id: 3,
            title: "React"
        }

    ]
}

console.log(student.technologies[2].title)