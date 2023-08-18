function fetchData() {
    var user=document.getElementById("loginid").value;
    console.log(user);
    if(user==""){
        alert("Please enter a GitHub ID");
    }
    else{
        fetch(`https://api.github.com/users/${user}`)
        .then(response => {
            if(response.status === 403){
                throw new Error("API rate limit exceeded");
            }
            return response.json();
        })
        .then(data => {
            if(data.message=="Not Found"){
                alert("GitHub ID not found! Try Again");
            }
            else{
                var avatarUrl = data.avatar_url;
                var name = data.name;
                var createdAt = data.created_at;
                var login = data.login;
                var bio = data.bio;
                var repos = data.public_repos;
                var followers = data.followers;
                var following = data.following;
                var location = data.location;
                var twitter = data.twitter_username;
                var company = data.company;

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
                    document.getElementById("locval").innerHTML="not available";
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
                    tw.innerHTML="not available";
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
                    document.getElementById("ogval").innerHTML="not available";
                }
            }
        })
        .catch(error => { 
            if (error.message === "API rate limit exceeded") {
                alert("API rate limit exceeded. Please try again later.");
            } else {
                console.log("Server Error! Try Again");
            }
        });
    }
}