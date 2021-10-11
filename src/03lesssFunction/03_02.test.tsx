import {CityType} from "../02LessObjects/02_test02";
import {addMoneyToBudget} from "./03Func";

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