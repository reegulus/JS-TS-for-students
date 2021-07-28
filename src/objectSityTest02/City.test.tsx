import {CityType} from "./City";

let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
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
                    number: 100,
                    street: {
                        title: "Happy street"
                    }
                }
            },
            {
                buildedAt: 2020,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "Lucky street"
                    }
                }
            }
        ],
        governmentBuilding: [
            {
                types: "Hospital",
                budget: 200000,
                staffCount: 200,
                address: {
                    street: {
                        title: "Sount Str"
                    }
                }
            },
            {
                types: "Fire-Stattion",
                budget: 500000,
                staffCount: 2000,
                address: {
                    street: {
                        title: "Central Str"
                    }
                }
            },
            {
                types: "Police",
                budget: 4500000,
                staffCount: 2340,
                address: {
                    street: {
                        title: "Sunny Str"
                    }
                }
            },
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
    expect(city.houses[1].address.number).toBe(100)
    expect(city.houses[1].address.street.title).toBe("Happy street")

    expect(city.houses[2].buildedAt).toBe(2020)
    expect(city.houses[2].repaired).toBe(false)
    expect(city.houses[2].address.number).toBe(100)
    expect(city.houses[2].address.street.title).toBe("Lucky street")
})

test("test city should contains hospital and fire station", () => {
    expect(city.governmentBuilding.length).toBe(3)

    expect(city.governmentBuilding[0].types).toBe("Hospital")
    expect(city.governmentBuilding[0].budget).toBe(200000)
    expect(city.governmentBuilding[0].staffCount).toBe(200)
    expect(city.governmentBuilding[0].address.street.title).toBe("Sount Str")

    expect(city.governmentBuilding[1].types).toBe("Fire-Stattion")
    expect(city.governmentBuilding[1].budget).toBe(500000)
    expect(city.governmentBuilding[1].staffCount).toBe(2000)
    expect(city.governmentBuilding[1].address.street.title).toBe("Central Str")

    expect(city.governmentBuilding[2].types).toBe("Police")
    expect(city.governmentBuilding[2].budget).toBe(4500000)
    expect(city.governmentBuilding[2].staffCount).toBe(2340)
    expect(city.governmentBuilding[2].address.street.title).toBe("Sunny Str")
})