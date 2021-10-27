import {CityType} from "../02LessObjects/02_test02";
import {demolishHousesOnTheStreet, getStreetsTitlesOfGovermentsBuildings} from "./04_02";

let city: CityType

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
                id: 1,
                buildedAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "White street"
                    }
                }
            },
            {
                id: 2,
                buildedAt: 2008,
                repaired: false,
                address: {
                    number: 200,
                    street: {
                        title: "Happy street"
                    }
                }
            },
            {
                id: 3,
                buildedAt: 2022,
                repaired: false,
                address: {
                    number: 205,
                    street: {
                        title: "Happy street"
                    }
                },


            },
        ],
        governmentBuilding: [
            {
                type: "Hospital",
                budget: 200000,
                staffCount: 200,
                address: {
                    street: {
                        title: "Central Str"
                    }
                }
            },
            {
                type: "Fire=Station",
                budget: 500000,
                staffCount: 2000,
                address: {
                    street: {
                        title: "South Str"
                    }
                }
            }
        ],
        cityzensNumber: 1000000
    }
})


test("House should be destroyed", () => {
    demolishHousesOnTheStreet(city, "Happy street")

    expect(city.houses.length).toBe(1)
    expect(city.houses[0].id).toBe(1)

})

test.skip("buildings with correct staff count", () => {

    let building = getStreetsTitlesOfGovermentsBuildings(
        city.governmentBuilding, 500
    )
    expect(building.length).toBe(1)
    expect(building[0]).toBe("Central Str")

})