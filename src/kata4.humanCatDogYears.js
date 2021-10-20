const humanCatDogYears = number => {
    catYears = 0
    dogYears = 0
    for(let i = 1; i <= number;i++) {
        if(i < 2){
            catYears += 15
            dogYears += 15
        }
        else if (i === 2) {
            catYears += 9
            dogYears += 9
        } else if(i > 2 ) {
            catYears += 4
            dogYears += 4
        }
    }
    return [number, catYears, dogYears]
};

module.exports = humanCatDogYears;
