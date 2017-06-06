function iterativeLog(array) {
  array.forEach((element, i, array) => {
    console.log(`${i}: ${element}`)
  })
}

function iterate(callback) {
  var cities = ["NYC", "Philly", "Chicago"];
  cities.forEach(callback);
  return cities
}

function doToArray(array, callback) {
  array.forEach(callback)
}
