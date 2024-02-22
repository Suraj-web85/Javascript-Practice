// DOM Manipulation 
//getElementById
// const title = document.getElementById('main-heading');

// console.log(title);

// getElementsByClassName
// const listItems = document.getElementsByClassName('list-items');
// console.log(listItems);

//getElementsByTagName
// const tagName = document.getElementsByTagName('li');
// console.log(tagName);

//querySelector
// const container = document.querySelector('.box');
// console.log(container.);

//querySelectorAll
// const twoContainers = document.querySelectorAll('.box');
// console.log(twoContainers);


//Styling the elements

// const heading = document.querySelector('#main-heading');
// heading.style.color = 'red';

// const listItems = document.querySelectorAll('.list-items');
// for (let i = 0; i < listItems.length; i++) {
//   listItems[i].style.fontSize ='32px';
// }

//Creating the element
// const ul = document.querySelector('ul');
// const li = document.createElement('li');

// ul.append(li);
// li.innerText = "Kung Fu Panda";

// const firstListItem = document.querySelector('.list-items');

// console.log(firstListItem.innerText);
// li.setAttribute('class' ,'list-items');
// li.removeAttribute('class');
// li.classList.add('list-items');
// console.log(li.classList.contains('list-items'));
// console.log(li.hasAttribute('class'));
// console.log(li.hasAttribute('id'));


//user innerText in most of the cases
// console.log(firstListItem.innerHTML);
// console.log(firstListItem.textContent);
// firstListItem.setAttribute('id','main-heading');
// firstListItem.removeAttribute('id');
// const secondListItem = document.getElementsByClassName('list-items')[1];
// secondListItem.setAttribute('class','background-black');



// const thirdListItem = document.getElementsByClassName('list-items')[2];
// thirdListItem.setAttribute('class','background-black');

// console.log(thirdListItem)

// const title = document.querySelector('#main-heading');
// console.log(title.getAttribute('id'));

// const box = document.querySelector('.box');
// console.log(box.getAttribute('class'));
// const mainHeading= document.getElementById('main-heading');
// console.log(mainHeading)
// mainHeading.setAttribute('class','background-black');



//Traversing the DOM

//Parent Node Traversal
// let ul = document.querySelector('ul');
// console.log(ul);
// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement.parentElement);

// const html = document.documentElement;
// console.log(html);
// console.log(html.parentNode);
// console.log(html.parentElement);
// console.log(ul.childNodes);
// console.log(ul.childElementCount);
// console.log(ul.firstElementChild.textContent);
// console.log(ul.lastElementChild.textContent);
// console.log(ul.textContent)
// console.log(ul.previousElementSibling)
// console.log(ul.nextSibling);
// console.log(ul.previousSibling)
// console.log(ul.nextElementSibling);
// console.log(ul.children[0].textContent)
// console.log(ul.children[1].textContent)
// console.log(ul.children[4].innerHTML)
// console.log(ul.children[4].innerText)
// console.log(ul.children[4].textContent)
// console.log(ul.innerHTML)
// console.log(ul.innerText)
// console.log(ul.textContent)

// console.log(ul.childNodes[0].textContent)
// console.log(ul.childNodes[1].textContent)

