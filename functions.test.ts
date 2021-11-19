const {shuffleArray} = require('./utils')

let arr = [1,2,3,4,5]


describe('shuffleArray should', () => {
    test ("test to see that shuffleArray length is same as input length of input array", () => {
        expect(shuffleArray(arr).length).toBe(5)
    })

    test ("test to see if array contents are in the new output array", () => {
        expect(shuffleArray(arr)).toContain(1)
    })

})

