// "use strict"
// // Task 1
// const arr = [
//     {
//         firstName: 'Vlad',
//         lastName: 'Shaitan',
//         age: 38,
//         gender: 'cat'
//     },
//     {
//         firstName: 'Alex',
//         lastName: 'Puluev',
//         age: 10,
//         gender: 'female'
//     },
//     {
//         firstName: 'Ivan',
//         lastName: 'Peanuts',
//         age: 10,
//         gender: 'male'
//     },
//     {
//         firstName: 'Ann',
//         lastName: 'Shaitan',
//         age: 38,
//         gender: 'dog'
//     },
// ];

// const input = document.querySelector('#search');

// input.addEventListener('keyup', e => {
//     let str = e.target.value;

//     let results = [];
//     let div = document.createElement('div');

//     arr.forEach(item => {
//         for (let key in item) {
        
//         if (item[key].toString().indexOf(str) !== -1) {
//                 results.push(item);
//                 break;
//             }
//         }
//     });    
    
//     document.body.append(div);
//     console.log(results);
// });

// //Task 2

// let arr = [1, 2, 3, 4, [1.1, 1.2, 1.3], 5, 6, 7, [1.4, 1.5, [2.1, 2.2, [3.1, [4.1, 4.2, [5.1, 5.2,[6.1, 6.2]]], 3.3]]]];


// function generateList(arr) {

//     let ol = document.createElement('ol'); // creating ordered list

//     for (let item of arr) { // checking each element of array  

//         let li = document.createElement('li'); // creating list items

//         if (Array.isArray(item) === false) li.innerHTML = item;  // if elem is not array - we fulfill it with elem value        
            
//         else {             // else we create inner ordered list and use recursion 
//             let childrenOl = generateList(item);
            
//             if (childrenOl) li.appendChild(childrenOl);
            
//             ol.appendChild(li); 
//         }

//         ol.append(li);
//     }      

//     return ol;

// }
// console.log(generateList(arr));









