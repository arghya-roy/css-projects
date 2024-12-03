// // // const now = new Date();

// // // hour =now.getHours();
// // // console.log(hour)
// // // if ( hour > 0 && hour < 12) {
// // //  alert("Good morning")
// // // }
// // // else if ( hour > 13 && hour < 18 ) {
// // //  alert("Good afternoon")
// // // }
// // // else if ( hour > 18 && hour < 24 ) {
// // //     alert("Good night")
// // // }

// // btn = document.querySelector("button")

// // let count = localStorage.getItem('count') || 0;
// // btn.innerHTML = count;

// // function btnclick() {
// //     count++;
// //     btn.innerHTML = count;
// //     if (count % 2 == 0) {
// //         btn.classList.add('even')
// //         btn.classList.remove('odd')
// //     }
// //     else  {
// //         btn.classList.add('odd')
// //         btn.classList.remove('even')
// //     }
// //     localStorage.setItem('count', count)
// // }

// let arr1 = [5,6]
// arr1.unshift(4)
// arr1.push(7)

// console.log(arr1)
// function returnvalue (number) {
//     console.log(arr1[number])
// }
// returnvalue(0)

// console.log(arr1)
// let arr2 = arr1.slice(1,4)
// console.log(arr2)

// let multiply = function(num1,num2) {
//     return num1 * num2
// }
// console.log(sol=multiply(5,6))

// let sum_multi = (num1, num2, num3, multi) => {
//     sum = num1 + num2
//     return  multi(num3,sum)
// }

// console.log(sum_multi(2,3,4,multiply))

// let test = info => info;



// let arghya = test(5)
// console.log(arghya)


// let doublefun = () => {
//     btn = document.querySelector("button")

//     btn.classList.add('double')
// }

// btn = document.querySelector("button");
// btn.addEventListener('click',setTimeout(doublefun, 2000))


// let test = (num1, num2)=> {
//    return console.log(num1 + num2)
// }
// setInterval(() => test(5,6),2000)

// let arr = [5,6,3,2,1]
// let sum =0;
// arr.forEach(function(num) {
// sum = sum + num
// })

// console.log(sum)

let arr = [5,6,3,2,1]

// let arr2 = arr.map(num =>  {
//    return num*4
// })

// console.log(arr2)

let arr2 = arr.filter((num,index) =>  {
    return index > 2
 })
 
 console.log(arr2)

