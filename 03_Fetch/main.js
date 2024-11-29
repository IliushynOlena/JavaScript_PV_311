
const gitHubUsersAPI = "https://api.github.com/users";
const privateAPI = "https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5";

const avatarImg = document.getElementById('avatar-img');

async function showGitHubUserAvatar(login)
{
    const responce = await fetch(gitHubUsersAPI + "/" + login);
    console.log("Status responce " + responce.status);
    const result =  await responce.json()
    avatarImg.src = result.avatar_url;
}
//showGitHubUserAvatar("IliushynOlena");
//showGitHubUserAvatar("SergiyIslandShag");
//showGitHubUserAvatar("mrgumor2017");
showGitHubUserAvatar("Nikita37373");
async function showApiResult(api)
{
    const responce = await fetch(api);
    console.log("Status responce " + responce.status);
     const json =  await responce.json()
    console.log(json);   
}

//showApiResult(privateAPI)

async function showGitHubUsers()
{
    const responce = await fetch(gitHubUsersAPI);
    console.log("Status responce " + responce.status);
     const json =  await responce.json()
    console.log(json);
    console.log(json[0].login);
    console.log(json[0].id);
}

//showGitHubUsers();