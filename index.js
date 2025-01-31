
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



 function add (first,second){
let c=first+second
return c
 }


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



function checkGreatest(first,second){
    if(first>second){
        return  first
    }
    else{
        return second
    }
}


let greatest=checkGreatest(5,8)


console.log("greatest is ",greatest)