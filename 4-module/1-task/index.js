function makeFriendsList(friends) {
  let list = document.createElement('ul');

  for (const friend of friends) {
    let item = document.createElement('li');
    item.textContent = `${friend['firstName']} ${friend['lastName']}`;
    list.append(item);
  }

  return list;
}
