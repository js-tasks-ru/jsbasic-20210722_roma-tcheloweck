function getMinMax(str) {
  let arr = str.split(' ');

  let filteredStrings = arr.filter(elem => isFinite(elem));
  let filteredNumbers = filteredStrings.map(elem => +elem);

  arr = null;
  filteredStrings = null;

  let object = {};
  
  if (filteredNumbers.length > 0) {
    object = {
      min: filteredNumbers[0],
      max: filteredNumbers[0],
    };
  }
  
  for (const elem of filteredNumbers) {
    if (object.min > elem) {
      object.min = elem;
    }
    if (object.max < elem) {
      object.max = elem;
    }
  }

  return object;
}