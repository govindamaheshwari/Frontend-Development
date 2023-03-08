console.log("person1:show ticket")
console.log("person2:show ticket")
const promiseWifeBringingTicks=new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        resolve("ticket")
    },3000)
});
promiseWifeBringingTicks.then((t)=>{
    console.log(`person3:shows ${t}`)
})

const getPopcorn=promiseWifeBringingTicks.then((t)=>{
    console.log('husband:we should go in')
    console.log("wife:i am hungry")
    return new Promise((resolve,reject)=>resolve(`${t} popcorn`));
})
getPopcorn.then((x)=>{
    console.log(x)
})
const getButter=getPopcorn.then((x)=>{
    console.log('husband:we should go in')
    console.log("wife:i need buter  on my popcorn")
    return new Promise((resolve,reject)=>resolve(`${x} butter`))
})
getButter.then((x)=>{
    console.log(x)
})


