//create a promise   
const mypromise=new Promise((resolve,reject)=>{
    let success= false;
    setTimeout(()=>{
    if(success){
         resolve("data send successfully")
    }
    else{
        reject("data not Send");
    }
     },5000);
});
mypromise.then((message)=>{console.log("data:" +message);
})
.catch((error)=>{
    console.log(error);
});