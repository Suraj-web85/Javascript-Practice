
const userCardTemplate = document.querySelector('[data-user-template]');
const userCardsContainer = document.querySelector('.user-cards')
const searchInput = document.querySelector('#search')


let users = [];







fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
.then((data) => {
 users = data.map(user => {
  const card = userCardTemplate.content.cloneNode(true).children[0]
  const header = card.querySelector('.header')
  const mailid = card.querySelector('.mailid')
  header.textContent = user.name;
  mailid.textContent = user.email;
  console.log(card);
  console.log(data);
  userCardsContainer.append(card)
  return {name : user.name , email:user.email, element:card}
 });
})

searchInput.addEventListener('input', (e) => {
  const value = e.target.value.toLowerCase();
  console.log(value)
  users.forEach(user => {
    const isVisible = user.name.toLowerCase().includes(value) || user.email.toLowerCase().includes(value)

    user.element.classList.toggle('hide',!isVisible)
  })
})