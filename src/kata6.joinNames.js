const joinNames = namesObj => {
    const resultNames = [];
    for (let i=0; i < namesObj.length; i++) {
      resultNames.push(namesObj[i].name)
    }
    return resultNames.join(", ");
};

module.exports = joinNames;
