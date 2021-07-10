// const promise = fetch('https://jsonplaceholder.typicode.com/todos/1');

// promise
// .then((res)=>{return res.json()})
// .then((data)=>{console.log("👨‍🔧 " + data.title)})
// .catch((err)=>{console.error("no way man")});

// console.log("👨‍💻 Async code");



// async await 

const getFruit = async (name)=> {
   const fruits = {
       pineapple : "🍍",
       peach : "🍑",
       strawberry : "🍓"
   }

   await setTimeout(()=>{},1000);

   return fruits[name];
};


const makeSmoothie = async ()=> {

    try {
        const a =  getFruit('pineapple');
        const b =  getFruit('strawberry');
        const smoothie = await Promise.all([a,b]);

        throw 'borken';
        return smoothie;
    }
    catch (err) {
        console.log(err);
        return "relax every thing will be fine";
    } 
   
};

makeSmoothie()
.then(console.log)
.catch(console.log);
