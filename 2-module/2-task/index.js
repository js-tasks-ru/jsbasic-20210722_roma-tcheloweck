function isEmpty(obj) {

  for (const key in obj) {
    if (key) {
      return false;
    }
  }
  
  return true;
}
