// promises with store into variable.

let res = new Promise((resolve,reject)=> {
  let a = 1;
  let b = '1';
  if (a == b) {
    resolve()
  }else
  {
    reject()
  }
})

res.then(()=>{
        console.log('Success');
    }).
    catch(()=>{
        console.log('Failed');
    });



// promises with function 


async function print(){
  return new Promise((resolve,reject)=>{
    let a= 1;
    let b = '112';
    if (a==b) {
      resolve('Success')
    }else{
      reject('Failed')
    }
  })
}

print().
    then((dd)=>{
        console.log(dd);
    }).
    catch((err)=>{
        console.log(err);
    });
