



const task = new Promise((resolve,reject)=>{

    //do some work
    setTimeout(()=>
        {
            console.log("Do hard work!!!");
        },4000);
        
    //if success - resolve();
    //if error - reject();
    if(Math.random()> 0.5)
        resolve();
    else
        reject();
});

task.then(()=>{
    console.log("Everything is good!");
}).catch(()=>{
    console.log("Something went wrong!");
})




console.log("Continue work!!!");

const gitHubUsersAPI = "https://api.github.com/users";

fetch(gitHubUsersAPI).then((response)=>
{
    console.log(response.status);
    return response.json();
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})