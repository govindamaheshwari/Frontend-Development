const blogs =[];
async function Blogs() {
    let blog1 = await new Promise( (resolve, reject) => {
        setTimeout( () => {
            blogs.push({title: 'BLOG1'});
            resolve();
        }, 3000)
    }) 
    let blog2 = await new Promise( (resolve, reject) => {
        setTimeout( () => {
            blogs.push({title: 'BLOG2'});
            resolve()
        },2000)
    }) 

    try{
        let deletes=await new Promise( (resolve, reject) => {
            setTimeout( () => {
                if (blogs.length>0){
                    const poppedElement=blogs.pop();
                    resolve(poppedElement.title)
                }
                else{
                    reject('ERROR:ARRAY IS EMPTY')
                }
            }, 1000)
        })
        console.log(deletes)
    }catch(err){
        console.log("error")
    }
    try{
        let deletes=await new Promise( (resolve, reject) => {
            setTimeout( () => {
                if (blogs.length>0){
                    const poppedElement=blogs.pop();
                    console.log(poppedElement.title)
                    resolve()
                }
                else{
                    reject('ERROR:ARRAY IS EMPTY')
                }
            }, 1000)
        })
        console.log(deletes)
    }catch(err){
        console.log("error")
    }
    try{
        let deletes=await new Promise( (resolve, reject) => {
            setTimeout( () => {
                if (blogs.length>0){
                    const poppedElement=blogs.pop();
                    resolve(poppedElement.title)
                }
                else{
                    reject('ERROR:ARRAY IS EMPTY')
                }
            }, 1000)
        })
        console.log(deletes)
    }catch(err){
        console.log("error")
    }

}
Blogs()