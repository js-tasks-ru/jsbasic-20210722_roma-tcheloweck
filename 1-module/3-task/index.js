function ucFirst(str) {
  let result = str.toUpperCase();
  if (str.length > 1) {
    result = str.slice(0, 1).toUpperCase() + str.slice(1);
  }
  return result;
}
