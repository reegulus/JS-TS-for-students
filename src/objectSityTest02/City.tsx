
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
    cityzensNumber: number
}