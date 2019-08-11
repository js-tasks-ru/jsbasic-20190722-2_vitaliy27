/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  let ul = document.createElement('ul');
   
  for (let friend of friends) {
    let li = document.createElement('li');
    ul.append(li);
    let text = document.createTextNode(friend.firstName + " " + friend.lastName);
    li.append(text);
  }

  return ul;
}
