import {addMoneyToBudget, CityType, createMessage, repairHouse, toFireStaff, toHireStaff} from "./FunctonCity-03-02";

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
                types: "Fire-Station",
                budget: 500000,
                staffCount: 2000,
                address: {
                    street: {
                        title: "Central Str"
                    }
                }
            }
        ],
        cityZensNumber: 1000000
    }
})

test("Budget should be changed for Hospital", () => {
    addMoneyToBudget(city.governmentBuilding[0], 100000)

    expect(city.governmentBuilding[0].budget).toBe(300000)

})

test("Budget should be changed for Fire Station", () => {
    addMoneyToBudget(city.governmentBuilding[1], -100000)

    expect(city.governmentBuilding[1].budget).toBe(400000)
})

test("House should be repared", () => {
    repairHouse(city.houses[1])

    expect(city.houses[1].repaired).toBeTruthy()
})

test("Staff should be increased", () => {
    toFireStaff(city.governmentBuilding[0], 20)
    toFireStaff(city.governmentBuilding[1], 20)

    expect(city.governmentBuilding[0].staffCount).toBe(180)
    expect(city.governmentBuilding[1].staffCount).toBe(1980)
})
//отремонтировать
test("Staff should be repared", () => {
    toHireStaff(city.governmentBuilding[0], 20)
    toHireStaff(city.governmentBuilding[1], 20)

    expect(city.governmentBuilding[0].staffCount).toBe(220)
    expect(city.governmentBuilding[1].staffCount).toBe(2020)
})

test("Greeting should be correct for city", () => {
    const message = createMessage(city)

    expect(message).toBe("Hello New York city. I want you be happy. All 1000000")
})



