import {CityType} from "../02LessObjects/02_test02";
import {addMoneyToBudget, createMessage, repairedHouse, toFireStaff, toHireStaff} from "./03Func";
import {create} from "domain";

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

test("Budget should be changed for Hospital", () => {
        addMoneyToBudget(city.governmentBuilding[0], 100000)

    expect(city.governmentBuilding[0].budget).toBe(300000)
})
test("Budget should be changed for Fire-Station", () => {
    addMoneyToBudget(city.governmentBuilding[1], -100000)

    expect(city.governmentBuilding[1].budget).toBe(400000)
})
// test.skip("Houses should be destroyed", () => {
//     demolishHouseOnTheStreet(city, "Happy street")
//
//     expect(city.governmentBuilding.length).toBe(1)
//     expect(city.governmentBuilding[0].id).toBe(1)
// })
test("House should be repaired", () => {
    repairedHouse(city.houses[1])

    expect(city.houses[1].repaired).toBeTruthy()
})
test("staff should be increased", () => {
    toFireStaff(city.governmentBuilding[0], 20)

    expect(city.governmentBuilding[0].staffCount).toBe(180)
})
test("staff should be repaired", () => {
    toHireStaff(city.governmentBuilding[1], 20)

    expect(city.governmentBuilding[1].staffCount).toBe(2020)
})
test("Greet message should be correct for city", () => {
   const message = createMessage(city)

    expect(message).toBe("Hello New York")
})