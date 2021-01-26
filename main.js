const body = document.body; 

const divs = body.querySelectorAll('div');
const last = divs[divs.length-1];

// 1
console.log(last.firstElementChild); 

// 2
console.log(last.lastElementChild);

// 3
const p1 = last.getElementsByTagName('p')[0]; 
console.log(p1.getElementsByTagName('i')[0]);

// 4
const p2 = last.lastElementChild; 
console.log(p2.getElementsByTagName('b')[0]); 

// 5
console.log(p1.getElementsByTagName('i')[0].parentElement); // nodeName pour p

// 6 
console.log(p2.getElementsByTagName('b')[0].parentNode); 

// 7 

console.log( last.firstElementChild.nextElementSibling ); 




