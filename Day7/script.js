let num=[1,2,3,4,45,5,45]
// let newnum=num.map(x=>x*2)
// console.log(newnum)
// newarray=num.filter(x=>x%2==0)
// console.log(newarray)
// let sum=num.reduce((x,y)=>x+y);
// console.log(sum);
// let m=num.reduce((x,y)=>x*y,1);
// console.log(m);
// const students=[
//     {name:'Alice',score:50},
//     {name:'Bob',score:65},
//     {name:'Charlie',score:75},
//     {name:'david',score:45},
//     {name:'Rahul',score:50}
// ];
// let scores=students.filter((x)=>x.score>60).map((x)=>x.score+10).reduce((x,y)=>x+y,0);
// //let sum=scores.reduce((x,y)=>x+y,0);
// console.log(scores)
// num.forEach((x)=>console.log(x*3));
// sayhello=()=>{
//     console.log("I am in helo function");
// };
console.log("start");
setTimeout(()=>{
    console.log("first");
    setTimeout(()=>{
        console.log("Second");
        setTimeout(()=>{
            console.log("third");
            setTimeout(() => {
                console.log("fourth")
            }, 4000);
        },3000);
    },2000);
},1000);
console.log("end");

