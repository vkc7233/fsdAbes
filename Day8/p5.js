async function orderFood(name,time){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(name,+"Prepaid");
        },time);
    });
}
async function restaurant(){
    console.log("task");
    let pizza=await orderFood("pizza",1000);
    console.log(pizza);
    const burger=await orderFood("burger",2000);
    console.log(burger);
}
restaurant();