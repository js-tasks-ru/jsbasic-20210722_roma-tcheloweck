function showSalary(users, age) {
  let filtered = users.filter(user => user.age <= age);

  let message = '';
  
  for (const elem of filtered) {
    message += `${elem['name']}, ${elem['balance']}\n`;
  }

  return message.slice(-1);
}
