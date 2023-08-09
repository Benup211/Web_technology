
function fetchData() {
    var user=document.getElementById("loginid").value;
    console.log(user);
    if(user==""){
        alert("Please enter a GitHub ID");
    }
    else{
        fetch(`https://api.github.com/users/${user}`)
        .then(response => response.json())
        .then(data => {
            if(data.message=="Not Found"){
                alert("GitHub ID not found! Try Again");
            }
            else{
                const avatarUrl = data.avatar_url;
                const name = data.name;
                const createdAt = data.created_at;
                const login = data.login;
                const bio = data.bio;
                const repos = data.public_repos;
                const followers = data.followers;
                const following = data.following;
                const location = data.location;
                const twitter = data.twitter_username;
                const company = data.company;

                const imgElements = document.getElementsByClassName('gitavatar');
                for (let i = 0; i < imgElements.length; i++) {
                    imgElements[i].src = avatarUrl;
                }
                document.getElementById("gitname").innerHTML=name;
                document.getElementById("creationdate").innerHTML=createdAt;
                document.getElementById("login").innerHTML=login;
                document.getElementById("bio").innerHTML=bio;
                document.getElementById("rval").innerHTML=repos;
                document.getElementById("fval").innerHTML=followers;
                document.getElementById("foval").innerHTML=following;
                if(location!=null)
                {
                    document.getElementById("locval").innerHTML=location;
                }
                else
                {
                    document.getElementById("locval").innerHTML="not avaliable";
                }
                var tw=document.getElementById("twlink");
                if(twitter!=null)
                {
                    tw.innerHTML=twitter;
                    tw.href="https://twitter.com/"+twitter;
                }
                else
                {
                    twitter="#";
                    tw.innerHTML=twitter;
                    tw.href="https://twitter.com/"+twitter;
                }
                var gt=document.getElementById("gtlink");
                gt.innerHTML=login;
                gt.href="https://github.com/"+login;
                if(company!=null)
                {
                    document.getElementById("ogval").innerHTML=company;
                }
                else
                {
                    document.getElementById("ogval").innerHTML="not working";
                }
            }
        })
        .catch(error => { 
            console.log("Server Error! Try Again");
        });
    }
  }