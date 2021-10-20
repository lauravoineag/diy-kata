const reachDestination = (distance, speed) => {
    let timeToDestination = distance / speed;
    let roundedTime = Math.round(timeToDestination*2)/2
    return "I should be there in " + roundedTime + " hours"
};

module.exports = reachDestination;
