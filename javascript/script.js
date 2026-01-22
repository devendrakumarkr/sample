// let obj={
//     name:"Devendra",
//     age:"13",
//     address:"GGN"
// }


// console.log(obj.name)

// obj.age=24

// console.log(obj)

// const para=document.getElementsByClassName("para")
// para[0].textContent="This is updated para"
// para[1].style.color="red"
// console.info(para)


// let obj={
//     name:"yash",
//     section:"FSDB",
//     phone:8675754645
// }

// let obj2={
//     name:"alex",
//     section:"FSDB",
//     phone:8675754645
// }

// obj.name="Aditya"
// console.log(obj)

// console.log(document)

// const para=document.getElementById("para")
// para.textContent="This is updated one"
// para.style.color="green"
// console.log(para)

// const para2=document.getElementsByClassName("para") //return HTMLCollection
// para[0].textContent="This is updated one"
// para[1].style.color="green"
// console.log(para2)

// const para=document.querySelector(".para")
// para.innerText="This is updated one"
// para.style.color="green"
// console.log(para)

// const para=document.querySelectorAll(".para") //return NodeList 
// para[0].textContent="This is updated one"
// para[1].style.color="green"
// console.log(para)

// let arr=[234,345,456,2342,346]

// const newArrr=arr.map(function(ele){
//     return ele*2
// })
// console.log(newArrr)
// arr.forEach(function(ele){
//     console.log(ele)

// })

// const container=document.querySelector(".container")
// container.innerHTML="<h1>This is a heading</h1>"
// console.log(container)

// const button=document.querySelector("button")
// button.classList.add("btn")
// button.classList.add("btn2")
// // button.classList.remove("btn2")


// function show(event){
//     console.log(event)
//     alert("You have clicked the button")
// }

// button.addEventListener('click',show)
// button.removeEventListener('click',show)

// const btn=document.querySelector("#btn")
// const stop=document.querySelector("#stop")


// btn.addEventListener('keydown',(event)=>{
//     console.log(event.key)
// })
// btn.addEventListener('keyup',(event)=>{
//     console.log(event.key)
// })
// stop.addEventListener('click',function(){
//     btn.removeEventListener('click',show)
// })

const form=document.querySelector("form")
form.addEventListener('submit',(event)=>{
    event.preventDefault()
    console.log(event.target[0].value)
    console.log(event.target[1].value)
    console.log(event)
    console.log("button Clicked")
})

console.log("Updated code")