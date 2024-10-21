function task(message,delay){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(message);
            resolve();
        },delay);
    });
}
task("first Task completed",1000)
.then(()=>task("Second task is completed",2000))
.then(()=>task("thisrd task is completed",3000))
.then(()=>task("forth",4000));