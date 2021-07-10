const posts = [
    {title: "Post One",body:"This is post one"},
    {title: "Post Two",body:"This is post two"}

];

const getPosts=()=>{
   setTimeout(()=>{
     let output='';
     posts.forEach((post,index)=>{
         output+=`<li>${post.title}</li>`;
     });
     document.body.innerHTML=output;
   },1000);
};

const createPost=(post)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            
            const error=false;;
            if(!error)
            {
                resolve();
            }
            else{
                reject('Error : something went wrong');
            }
          },2000);
    });
}
// Async await

const init = async ()=> {
   let res = await fetch('https://jsonplaceholder.typicode.com/todos/');
   let data = await res.json();
   console.log(data);
};


init();



// createPost({title:"post three",body:"this is mark"})
// .then(getPosts)
// .catch((err)=>{
//     console.log(err);
// });

 

