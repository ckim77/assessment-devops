const {shuffleArray} = require('./utils')

let arr = [1,2,3,4,5]


describe('shuffleArray should', () => {
    test ("test to see that shuffleArray length is same as input length of input array", () => {
        expect(shuffleArray(arr).length).toBe(5)
    })

    test ("test to see if array contents are in the new output array", () => {
        expect(shuffleArray(arr)).toContain(1)
    })

    // review tests

    test ("make sure function returns an array", () => {
        expect(Array.isArray(shuffleArray(arr))).toBe(true);
    })

    test ("make sure that both arrays contain the same values", () => {
        expect(shuffleArray(arr)).toEqual(expect.arrayContaining(arr))
    })

    test ("make sure the items have been shuffled", () => {
        expect(shuffleArray(arr).join()).not.toEqual(arr.join());
    })

})

