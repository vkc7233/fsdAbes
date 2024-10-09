/*"use strict";
let a=12;
let $=1/3;
let _=2;
let c="hello";
let e={
    name:"Arun",
    id:12,
}
let f=true;
function display(){
    console.log(a)
}
display();
console.log($)
console.log(typeof _)
console.log(typeof $)
console.log(typeof c)
console.log(typeof e)
console.log(typeof f)
let x="12"/"6";
console.log(x)
let bol=true;
let str=String(bol)
console.log(str)
console.log(str.charAt(1))*/
// let str="12";
// let num=Boolean(str);
// console.log(typeof num)
// console.log(num)
//Iteraction:  alert ,prompt ,confirm
// function display(){
//    let x= confirm("Are you Sure");
//    alert("user selects",x);
// }
// function display(){
//     let x= prompt("Enter your name","Vineet");
//     alert(x);
//  }
// let a="12";
// let b=12.0;
// console.log(a===b)// it check value as well as data type

function validate(){
    let user=document.getElementById("login").value;
    let pass=document.getElementById("pass").value;
    let p1=document.getElementById("result");
    if(user=="admin" && pass=="admin"){
         p1.innerText= "login success" ;
    }
    else{
        p1.innerText = "Login Failed";
    }
    return false;
}