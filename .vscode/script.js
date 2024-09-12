'use strict';



// 'use strict';

// let newObj = {
//     name: 'Mehrdad',
//     family: 'Dadkhah',
//     get age() {
//         return this.userAge;
//     },
//     set age(uAge) {
//         if(uAge < 10) {
//             throw new Error('Access denied!');
//         }

//         this.userAge = uAge;
//     }
// }

// console.log(newObj);

// newObj.age = 15;
// console.log(newObj.age);

// function secondObj(pname) {
//     let userPassword = "csacassaxsaxcas";

//     this.name = pname;
//     this.family = "Sadeghi";

//     this.printer = function() {
//         console.log(userPassword);
//     }

//     Object.defineProperties(this, {
//         age: {
//             get: function() {
//                 return this.userAge;
//             },
//             set: function(uAge) {
//                 if (uAge < 10) {
//                     throw new Error('Access denied!');
//                 }

//                 this.userAge = uAge;

//                 console.log('in setter');
//             }
//         }
//     })
// }

// let new2 = new secondObj('Mehrdad');
// new2.age = 45;
// // console.log(new2.userPassword);

// // let copyN = newObj;
// // copyN.name = "test";
// // console.log(newObj);

// let copyN = {};
// Object.assign(copyN, newObj, new2);
// // copyN.name = "test name";
// console.log(copyN);


