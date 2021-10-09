import {CityType} from "./02_test02";

let city: CityType

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
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


    test("test city should contains 3 houses", () => {
        expect(city.houses.length).toBe(3)

        expect(city.houses[0].buildedAt).toBe(2012)
        expect(city.houses[0].repaired).toBe(false)
        expect(city.houses[0].address.number).toBe(100)
        expect(city.houses[0].address.street.title).toBe("White street")

        expect(city.houses[1].buildedAt).toBe(2008)
        expect(city.houses[1].repaired).toBe(false)
        expect(city.houses[1].address.number).toBe(200)
        expect(city.houses[1].address.street.title).toBe("Happy street")

        expect(city.houses[2].buildedAt).toBe(2022)
        expect(city.houses[2].repaired).toBe(false)
        expect(city.houses[2].address.number).toBe(205)
        expect(city.houses[2].address.street.title).toBe("Happy street")


    })

    test("test city should contains hospital andd fire station", () => {
        expect(city.governmentBuilding.length).toBe(2)

        expect(city.governmentBuilding[0].type).toBe("Hospital")
        expect(city.governmentBuilding[0].budget).toBe(200000)
        expect(city.governmentBuilding[0].staffCount).toBe(200)
        expect(city.governmentBuilding[0].address.street.title).toBe("Central Str")

        expect(city.governmentBuilding[1].type).toBe("Fire=Station")
        expect(city.governmentBuilding[1].budget).toBe(500000)
        expect(city.governmentBuilding[1].staffCount).toBe(2000)
        expect(city.governmentBuilding[1].address.street.title).toBe("South Str")
    })