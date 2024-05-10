
/*
class Samuari {
    constructor(name){
      this.name =name
    }
    hello(){
      console.log(this.name)
    }
  }
  let shogun = new Samuari("Armen")
  console.log(shogun.__proto__.__proto__ === Function.prototype.__proto__)
  //console.log(shogun.__proto__.constructor.__proto__ ===???)
  console.log(shogun.__proto__.__proto__.__proto__===Function.prototype.__proto__.__proto__)
  */
/*
const iceCreams = [
  { flavor: 'pineapple', color: 'white' },
  { flavor: 'strawberry', color: 'red' },
  { flavor: 'watermelon', color: 'red' },
  { flavor: 'kiwi', color: 'green' },
  { flavor: 'mango', color: 'yellow' },
  { flavor: 'pear', color: 'green' }
]
const elements = iceCreams.filter(item => {
  return item.color === "red"
})
console.log(elements)
*/

/*
const iceCreams = [
  { flavor: 'pineapple', color: 'white' },
  { flavor: 'strawberry', color: 'red' },
  { flavor: 'watermelon', color: 'red' },
  { flavor: 'kiwi', color: 'green' },
  { flavor: 'mango', color: 'yellow' },
  { flavor: 'pear', color: 'green' }
]
let x = 0;
const newIceCreams = iceCreams.map(elem =>
  (x++,{ id: x, ...elem }))
console.log(newIceCreams)
*/
/*

const arr = [10,20,30,45,100]
const result = arr.reduce((accumulator,elem) =>{
  return accumulator + elem
},0)
console.log(result)
*/


/*
//es chem uxarkum
const iceCreams = [
  { flavor: 'pineapple', color: 'white' },
  { flavor: 'strawberry', color: 'red' },
  { flavor: 'watermelon', color: 'red' },
  { flavor: 'kiwi', color: 'green' },
  { flavor: 'mango', color: 'yellow' },
  { flavor: 'pear', color: 'green' }
]
let x = 1
iceCreams.map(elem => {
 x++
  elem.id =x
  
})
console.log(iceCreams)
*/
/*
const students = [
  { name: 'Ani', age: 17, gender: 'female' },
  { name: 'Alex', age: 24, gender: 'male' },
  { name: 'John', age: 16, gender: 'male' },
  { name: 'Sofa', age: 20, gender: 'female' },
]
const newStudents = students.filter(elem => {
if(elem.age >=18){
  return true
}
})
console.log(newStudents)
 
const result = newStudents.every(elem =>{
  return elem.gender == "male"
})
console.log(result)
*/


/*
const iceCreams = [
  { user: 'John', comment: 'hey dude' },
  { user: 'Sam', color: 'hey, how are you?' },
  { user: 'John', comment: 'great, what about you?' },
  { user: 'Sam', color: 'great either' },
  { user: 'John', color: 'I wanted to ask a question'},
  { user: 'Sam', color: 'go on :D' }
]
const newIceCreams = iceCreams.map((elem,index)=>{
  if(index == iceCreams.length - 1){
    elem.lastComment = true;
   }
  return elem
})
console.log(newIceCreams)*/

const iceCreams = [
  { flavor: 'pineapple', color: 'white' },
  { flavor: 'strawberry', color: 'red' },
  { flavor: 'watermelon', color: 'red' },
  { flavor: 'kiwi', color: 'green' },
{ flavor: 'mango', color: 'yellow' },
{ flavor: 'pear', color: 'green' }
]
const newIceCreams = iceCreams.filter(elem =>{
  
    return elem.color === "red"
  
})
console.log(newIceCreams)
const result = newIceCreams.map(elem =>{
  return elem.flavor
})
console.log(result)
