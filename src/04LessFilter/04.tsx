export const ages = [18,20, 22, 1, 100, 14]

export const predicate = (age: number) => {
    return age>90
}
const oldAges = [100]
type CourseType = {
    title: string
    price: number
}

export const courses = [
    {title: "CSS", price: 110},
    {title: "JS", price: 210},
    {title: "HTML", price: 150}
]

export const chipPredicate = (courses: CourseType) => {
    return courses.price < 160
}

export const chipCourses = [
    {title: "CSS", price: 110},
    {title: "HTML", price: 150},
]