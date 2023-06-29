// TODO: add code here
window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then( function(json) {
            const div = document.getElementById("container");
            // Add HTML that includes the JSON data
            div.innerHTML = ""
            for (index = 0; index < 8; index++) {
                div.innerHTML += `
                <div class = "astronaut">
                 <h3>${json[index].firstName} ${json[index].lastName}</h3>
                 <ul>
                    <li>Hours in space: ${json[index].hoursInSpace}</li>
                    <li>Active: ${json[index].active}</li>
                     <li>Skills: ${json[index].skills}</li>
                </ul>
                <img class="avatar" src=${json[index].picture}>
                </div>
            `
         }
     });
    });

 } );
