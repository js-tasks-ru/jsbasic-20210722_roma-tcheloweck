function sumSalary(salaries) {
  let result = 0;

  for (const key in salaries) {
    if (key && isFinite(salaries[key])) {
      result += salaries[key];
    }
  }
  
  return result;
}
