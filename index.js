
// value 
// String, number ,Boolean

// variable
//  empty space to store value
//  we can create variable by using aplbets
 

// var firstNumber=5
// var secondNumber=6

// var ans=firstNumber+secondNumber


// console.log("answer of addition",ans)


// operators
//  arithematic operators
//             + - * / \ %
//   assignmen operator
//    =

// comparetive operator
//     < > <= >= == != it gives up boolean value


// task
// wap to add , subtract, multiply and divide two number
// wap to find the remainder when divided
//  let a=6
//  let b=2
 
// if (a<b){
// console.log("a is smaller")
// }else{
// console.log(b," is smaller than",a)
// }


// wap to determine positive or not

// let number =5


// function declaration



//  function add (first,second){
// let c=first+second
// return c
//  }


//  function subtract (first,second){
//     let c=first-second
//     console.log(c)
//      }


     
//  function multiply(first,second){
//     let c=first*second
//     console.log(c)
//      }




//      add(80,90)

//      subtract(80,1)

//      add (90,1)


// function checkpositive(number){

// if(number== 0){
//     console.log("Zero")
// }else if(number<0){
//     console.log("negative")
// }else{
//     console.log("Positive")
// }
//  return 65
// }



// let value=checkpositive(0)
// let sum=add(9,8)

// // console.log("return value",value)
// console.log(sum)



// function covertTosecond(min){
//  let sec= min*60

//  return sec
// }




// let second=covertTosecond(8)


// console.log("converted to second",covertTosecond(10))



// create a function that takes two different numbers and return the greatest among them



// function checkGreatest(first,second){
//     if(first>second){
//         return  first
//     }
//     else{
//         return second
//     }
// }


// let greatest=checkGreatest(5,8)


// console.log("greatest is ",greatest)



// wap to checksmallest 

// function checkSmallest (first,second){
// if(first<second)
// {
//     return first
// }else{
//     return second
// }
// }


// let smallest=checkSmallest(5,9)
// console.log("smallest is ",smallest)





// loop

// . for 
 
// . while 


// postincreament

//  initial value: represent by i
// condition : which give booleann value
// increamet/ decreament


// write a program to console your name ten times using for loop
//  let name="Arjun"
// for (i=1;i<=10;i++){
//     console.log(name)
// }


// wap to console 1 to 20 even number uisng for loop


// for(i=3;i<20; i=i+1){
//     if(i%2==0){
//         console.log(i)
//     }

//     // console.log(i)

// // }

// let numer=1452

// output=2541



// number / eg let num=8
// string / eg let name="luky"


// let name="skillspark"

// // console.log(name.at(6))

// let firstname="skill"
// let secondname="spark"


// console.log(firstname.toUpperCase().concat(secondname.toUpperCase()))



// Number,string,Boolean,null,unkown,NaN\
//  Array,Object

// collection same type data
// eg ["arjn","ganes","nsnf"]

// let names=['ganes','bishal']

// names.push('aditya')
// // names.shift()
// console.log(names.length)   

// for (i=0;i<=names.length-1;i++){
// console.log(names[i])
// }

// object

// const userdetails={
//     name:"Arjun",
//     age:25,
//     phone:"9841424",
//     address:"maitidevi",
//     email:"arjun@gmail.com"
// }


// array of bojects

// const details=[
//     {
//         name:"Arjun",
//         age:25,
//         phone:"9841424",
//         address:"maitidevi",
//         email:"arjun@gmail.com"
//     }
//     ,{
//         name:"Ram",
//         age:25,
//         phone:"9841424",
//         address:"maitidevi",
//         email:"arjun@gmail.com"
//     },
//     {
//         name:"shyam",
//         age:25,
//         phone:"9841424",
//         address:"maitidevi",
//         email:"arjun@gmail.com"
//     }
    
    
// ]




// create a datalist for restro menu

// let menu=[
//     {
//         title:'drinks',
//         items:[
//             {
//                 name:"cococola",
//                 price:200,

//             },{
//                 name:"pepsi",

//             }
//         ]
//     },{
//         title:"snacks",
//         items:[
//             {
//                 name:"momo",
//                 price:120
//             },{
//              name:"chaumin",
//              price:80   
//             }
//         ]
//     },


// ]



// console.log(menu)
// document.getElementById("container").innerHTML="Hello world"


// let name="arjun"
// let detail= `my name is ${name}`




// let todo=["weakup","brush"]
// let container=document.getElementById("container")
// container.innerHTML= `${todo[0]} <br> ${todo[1]}`
// container.style.backgroundColor="blue"
// container.style.color="white"


// let numbers=[
//     1,5,8,9,2,5,12,6,0,10,62
// ]

// for (number of numbers){
// console.log("number is",number)
// }

// arrow function
// callback function , annonomus functtion
// const addtwonumbr=(a,b)=>{
// return a+b
// }
 
// console.log(addtwonumbr(4,6))

// let data=''

// numbers.forEach((el)=>{
//     console.log(el)
//  el.toString()
//  data=data+'<br>'+el

//    document.getElementById("container").innerHTML=data
// })


const todo=[]



function addTask(event){
    event.preventDefault();
    let task=event.target.task.value
    todo.push(task)
    // localStorage.setItem("todo",todo)
    display()

}


let container=document.getElementById("container")

function display(){
    document.getElementById("container").innerHTML=""
    todo.forEach((el,index)=>{
        let li=document.createElement("li")
        let remove=document.createElement("button")
        let edit=document.createElement("button")
        edit.textContent="Edit"
        edit.addEventListener("click",()=>editTask(index))
        remove.textContent="Delete"
        li.textContent=el
        remove.addEventListener("click",()=>deteleteTask(index))
       li.appendChild(remove)
       li.appendChild(edit)
       container.appendChild(li)
     
    })
}


function deteleteTask(index){
    
todo.splice(index,1)
display()
}


function editTask(index){
        let input=document.getElementById("task")
        input.value=todo[index]
        deteleteTask(index)
}


// let numbers=[
//     1,5,8,9,2,5,12,6,0,10,62
// ]


// let removeditme=numbers.splice(3,1)
// console.log(numbers)
// console.log(removeditme)