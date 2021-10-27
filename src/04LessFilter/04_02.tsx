import {CityType, GovernmentType} from "../02LessObjects/02_test02";

export function demolishHousesOnTheStreet(city: CityType, happyStreet: string) {
    city.houses = city.houses.filter(h => h.address.street.title !== happyStreet)
}

export function getStreetsTitlesOfGovermentsBuildings(city: Array<GovernmentType>, number: number) {
    return city.filter(b => b.staffCount > number)
}