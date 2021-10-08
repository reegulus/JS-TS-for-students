export type StreetType = {
    title: string
}
export type AdressType = {
    number: number
    street: StreetType
}
export type HouseType = {
    buildedAt: number
    repaired: boolean
    adress: AdressType
}
export type CityType = {
    title: string
    houses: Array<HouseType>
    governmentBuilding: Array<string>
    cityzensNumber: number

}