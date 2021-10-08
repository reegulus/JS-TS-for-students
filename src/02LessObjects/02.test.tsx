import {CityType} from "./02_test02";

let city: CityType

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
                buildedAt: 2012,
                repaired: false,
                adress: {
                    number: 100,
                    street: {
                    title: "White street"
                    }
                }
                },
            {
                buildedAt: 2008,
                repaired: false,
                adress: {
                    number: 200,
                    street: {
                    title: "Happy street"
                    }
                }
                },
            {
                buildedAt: 2022,
                repaired: false,
                adress: {
                    number: 205,
                    street: {
                        title: "Happy street"
                    }
                },


            },
        ],
        governmentBuilding: [],
        cityzensNumber: 1000000
    }
})


    test("test city should contains 3 houses", () => {
        expect(city.houses.length).toBe(3)

        expect(city.houses[0].buildedAt).toBe(2012)
        expect(city.houses[0].repaired).toBe(false)
        expect(city.houses[0].adress.number).toBe(100)
        expect(city.houses[0].adress.street.title).toBe("White street")

        expect(city.houses[1].buildedAt).toBe(2008)
        expect(city.houses[1].repaired).toBe(false)
        expect(city.houses[1].adress.number).toBe(200)
        expect(city.houses[1].adress.street.title).toBe("Happy street")

        expect(city.houses[2].buildedAt).toBe(2022)
        expect(city.houses[2].repaired).toBe(false)
        expect(city.houses[2].adress.number).toBe(205)
        expect(city.houses[2].adress.street.title).toBe("Happy street")


    })

    test.skip("test city should contains hospital andd fire station", () => {

    })