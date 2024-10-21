function fetchdata(){
    return new Promise(()=>{
  setTimeout(()=>{
    let data = {id:1,name:"rahul",city:"Ghaziabad"};
    resolve(data);
  },4000);
    });
}
fetchdata()
.then((data)=>console.log(data))
.catch((error)=>{
    console.log(error);
});