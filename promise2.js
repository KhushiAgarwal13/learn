const promise =new Promise((resolve,reject)=>{
// do an asyn task
// db calls , cryptography, network

setTimeout(()=>{
     console.log('Async task is completed')

     resolve();
},2000)

})

promise.then(()=>{
    console.log("promise consumed")
})

new Promise((resolve,reject)=>{
    setTimeout(()=>{
console.log("another task completed")
resolve()
    },2000)

}).then(()=>{ 
    console.log("another promise consumed")
})

const promise3=new Promise((resolve,reject)=>{
  setTimeout(()=>{
        console.log("3rd task")
        resolve({user:"khushi",email:"agarwalkhushi@gmail.com"})
  },1000)
}) 

promise3.then((user)=>{
console.log(user)
})





let is_shop_open = true;

let order = ()=>{
    return new Promise((resolve,reject)=>{
if(){
    resolve()
}
else{
    reject()
}
    })
}

async function order(){
  try{
    await abc
  }
  catch(error){
    console.log("abc doens't exist",error)
  }

  finally{
    console.log("runs code anywas")
  }
}

order();
await();
  