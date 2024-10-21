let a=()=>{
    console.log("Arrow function:1")
};
a();
let b=()=>{ console.log("Arrow function:2")};
b();
let x=5;
let y=6;
let fun=(x,y)=>{
return x+y;
}
let c=fun(x,y);
console.log(typeof(c));
console.log(c);
function display(){
    //let p1=document.querySelector("p");
    let p1=document.querySelectorAll("p");
    p1[0].innerHTML="i am a in parra";
    p1[0].style.backgroundColor="red";
    p1[1].innerHTML="i am a in 2 parra";
    p1[1].style.backgroundColor="blue";
  
}
let changeheader=()=>{
    let header=document.querySelector("h1");
    header.textContent="change the text";
    let a1=document.querySelector("a");
    a1.setAttribute("href","https://exams.aktu.ac.in/studentlogin.aspx");
    a1.innerHTML="Aktu Website";
}
let changediv=()=>{
    //let newdiv=document.querySelector("div");
    //newdiv.textContent="this is a new div";
    const newdiv=document.createElement("div");
    newdiv.textContent="this is a new div";
    const body =document.querySelector('body');
    body.appendChild(newdiv)
    
}