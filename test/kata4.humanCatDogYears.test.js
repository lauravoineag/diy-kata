const { humanCatDogYears } = require("../src");

describe("humanCatDogYears" , () => {
    it("return an array with 3 results, 1st element is human years, 2nd element is cat tears, 3rd element is dog years " , () => {
        expect(humanCatDogYears(3)).toStrictEqual([3,28,28]);
    });
});