console.log("Hello students again!!")

// let a=5;
// const b=78;
// var c=34;

// console.log(a, b, c)

// let a=56;
// a=878
// let c;
// c=678

// const b=34;
// // b=345 //cannot be changed
// // const d; //you have to initialise at the same time
// // d=345;

// var d=675 //❌
// d=1212
// var e;
// e=4564
// console.log(a, b, c, d, e)


// {  //for loop , if block 
//     var g=567   //global scope 
//     let f=243  //block scoped variable
//     const a=3454  //block scope
// }
// console.log(g)
// // console.log(f)
// // console.log(i)
// // console.log(i)
// var h=345
// let i=3466


// let sample=354
// let sample=34545

// var sample2=345
// var sample2=3454

// let str="Hello welcome to Javascript"
// console.log(str)
// console.log(str.length)
// console.log(str.trim().length)
// console.log(str.toUpperCase())
// console.log(str.toLowerCase())
// console.log(str.slice(-1, -3))
// console.log(str.charAt(6))
// console.log(str.replace("Javascript","HTML"))
// console.log(str.split(" "))
// console.log(str.concat(" ","hello ", "students"))
// console.log(str.substring(6,13))

//  let num=23432.1;
//  console.log(num)
// console.log(num.toFixed(2))
// console.log(Math.floor(num))
// console.log(Math.ceil(num))
// console.log(Math.round(num))
// console.log(parseFloat(num))
// console.log(Math.max(1,2,3,5,67,3,-13,45))\
// console.log(Math.ceil(Math.random()*6))

// let name="Alex"
// let age=34
// let salary=56745443

// let Alexdata={
//     name:"alex",
//     age:34,
//     salary:564542
// }
// let Johndata={
//     name:"john",
//     age:34,
//     salary:564542
// }
// console.log(Johndata.age)
// console.log(Johndata["age"])

/* let arr=["a", "b", "c","d"]

console.log(arr[2])*/


// function add(a,b){
//     let sum=a+b;
//     console.log(sum)
// }

// add(12,56)
// add(234,675)
// add(345,678)

// let num="3434";
// num+=10 //num=num+10
// num-=40 //num=num-40
// console.log(num)

// console.log(num%10)
// console.log(num!==3434)
// 

// console.log(4<5)

// console.log(5===6 || 4>5 )
// console.log(!false)

// let a=11
// let b=12
// if(a>b){
//     console.log("A is greater")
// }else if(a===b){
//     console.log("Both are equal")
// }
// else{
//     console.log("B is greater")
// }

// let grade="B"

// switch(grade){
//     case "A":
//         console.log("Excellent")
//         break;
//     case "B":
//         console.log("Good")
//         break;
//     case "C":
//         console.log("Average")
//         break
//     case "D":
//         console.log("Poor")
//         break
//     default:
//         console.log("Fail")
// }


// console.log(2) //2*1
// console.log(4) //2*2
// console.log(6) //2*3
// console.log(8) 
// console.log(10)
// console.log("..")

// let i=1;
// for(i=1;i<=10 ;i=i+1){   //starting point; condition; update
//     console.log(2*i)
// }

// console.log(i)

// while(i<=10){
//     console.log(2*i)
//     i=i+1;
// }


// let str="Hello welcome to the javascript"
// let i=0
// while(str[i]){
//     if(str[i]==="v") break;
//     console.log(str[i])
//     i=i+1
// }

// for (let index = 0; index < 10; index++) {
//     if(index===5) continue;
//     console.log(index)
    
// }

// function print(a,b){  //1. Function Declaration
//     console.log("Sample")
// }

// const print= function(a,b){  //1. Function Expression
// //     console.log("Sample")
// // }

// const print= (a,b)=> {
//     return a+b
//     // console.log("Sample")
//     // console.log("object")
// }
//3. Arrow Function


// console.log(print(12, 13))
// print(345,234)




//Hoisting

// var a;    //declaration
// console.log(b)  //hoisted means that variable's declaration is moved to the top of the code
// var a=23452  //initialization  
// let b=54634  // move to Temporal dead zone , hoisted
// const c=345345  //hoisted

// hello()

// const hello=function (){  //hoisted
//     console.log("Hello")
// }

// function print(name="Welcome"){
//     console.log(name)
// }

// print("Hello")
// print()

// let sample="sdfsdf"

// {
//     console.log(sample)
// function print(){
//     var a=3453   //function scoped
//     let sample="Hello"
//     const c=34534

//     console.log(a, sample, c)
// }
// console.log(a)

// print()


// {  //for /if
//     var a=3453  //
//     let sample="Hello"  //block scope
//     const c=34534  //block scope

//     // console.log(a, sample, c)
// }

// console.log(a)


// function outer(){
//     let count=0

//     function inner(){
//         count=count+1
//         console.log(count)
//     }

//     return inner
// }

// const fn=outer()
// fn()
// fn()
// fn()


// function callback(name){  //callback fn
//     console.log("Hello World", name)
// }

// function sample(callback){  //higher order fn
//     //code 
//     let name="Hello"

//     callback(name)
// }

// sample(callback)

// let a=[1,2,4,6,35,567,"Hello"]
// a[6]="Welcome"
// console.log(a.length)

// console.log(a)
// // a.push("Abc")
// // a.pop()
// // a.unshift(453)
// // a.shift()


// console.log(a.slice(2, 6))

// // a.splice(2, 1, 10, 20, 30)
// console.log(a)

let arr=[1,2,3,4,5,6,7]

console.log(arr)
// const newarr=arr.map((ele)=>{
//     return ele*2
// })
// console.log(newarr)
// const filteredData=arr.filter((ele)=>{
//     return ele>4;
// })
// const filteredData=arr.filter(ele=> ele>4);
// console.log(filteredData)

const sum=arr.reduce((acc, curr)=>{
    return acc+curr
}, 0)
console.log(sum)