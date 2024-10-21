function fetchdata(){
    return new Promise((resolve , reject)=>{
  setTimeout(()=>{
    const students=[
            {name:'Alice',score:50},
            {name:'Bob',score:65},
            {name:'Charlie',score:75},
            {name:'david',score:45},
            {name:'Rahul',score:50}
        ];
        // let scores=students.filter((x)=>x.score>60).map((x)=>x.score+10).reduce((x,y)=>x+y,0);
        // let sum=scores.reduce((x,y)=>x+y,0);
    resolve(students);
  },4000);
    });
}
fetchdata()
.then((data)=>{
let sum=0;
data.forEach((element)=>{
sum+=element.score;
});
console.log(sum);
})
.catch((error)=>{
    console.log(error);
});


//async/await is a modern js feature introduced in es2017 that allows for writing asynchronous code in a more synchronous 
 