export type StreetType = {
    title: string
}
export type AddressType = {
    number: number
    street: StreetType
}
export type HouseType = {
    buildedAt: number
    repaired: boolean
    address: AddressType
}
export type TitleType = {
    title: string
}
export type AddressTitleType = {
    street: TitleType
}
export type BuildingType = {
    types: string
    budget: number
    staffCount: number
    address: AddressTitleType

}
export type CityType = {
    title: string
    houses: Array<HouseType>
    governmentBuilding: Array<BuildingType>
    cityZensNumber: number
}

export function addMoneyToBudget(buildingType: BuildingType, budget: number) {
    buildingType.budget += budget
}

export function repairHouse(houseType: HouseType) {
    houseType.repaired = true
}

export function toFireStaff(buildingType: BuildingType, staffCount: number) {
    buildingType.staffCount -= staffCount
}

export function toHireStaff(buildingType: BuildingType, staffCount: number) {
    buildingType.staffCount += staffCount
}

export function createMessage(city: CityType) {
    // return "Hello " + city.title + " city. I want you be happy. All " + city.cityZensNumber
    return `Hello ${city.title} city. I want you be happy. All ${city.cityZensNumber}`
}


