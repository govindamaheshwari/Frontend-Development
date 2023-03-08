console.log("person1:show ticket")
console.log("person2:show ticket")
const preMovie =async()=>{
    const promiseWifeBringingTicks=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('ticket')
        },2000)
    })
    const getPopcorn=new Promise((resolve,reject)=>resolve("popcorn"))
    const getButter =new Promise((resolve,reject)=>resolve('butter'))
    const getColddrink=new Promise((resolve,reject)=>resolve("colddrink"))
    let ticket= await promiseWifeBringingTicks
    
    console.log('wife:i am hungry')
    console.log('husband:we should go in ')
    console.log("wife:no i am hungry")
    let popcorn=await getPopcorn
    console.log("husband:i got some popcorn")
    console.log('husband:we should go in')
    console.log("wife:i need buter  on my popcorn")
  
    //let butter=await getButter
    console.log('husband:i got some butter on popcorn')
    console.log("husband :we should go in ")
    console.log('wif:i need a colddrink')
    let colddrink=await getColddrink
    console.log('husband:i got colddrink')
    console.log("husband : anything else darling")
    console.log('wif:lets go')
    console.log("husband:thanks")
    
    return ticket
    
    
    
    
}
preMovie().then((m)=>console.log(m))



