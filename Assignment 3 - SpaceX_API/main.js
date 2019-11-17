

function openPage(pageName) {
  let i;
  let x = document.getElementsByClassName("menuPage");

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(pageName).style.display = "block";  
}

function Didyouknow() {
  let fact1 = "SpaceX has gained worldwide attention for a series of historic milestones. It is the only private company capable of returning a spacecraft from low Earth orbit, which it first accomplished in 2010. The company made history again in 2012 when its Dragon spacecraft became the first commercial spacecraft to deliver cargo to and from the International Space Station.";
  let fact2 = "SpaceX successfully achieved the historic first reflight of an orbital class rocket in 2017, and the company now regularly launches flight-proven rockets. In 2018, SpaceX began launching Falcon Heavy, the world’s most powerful operational rocket by a factor of two.";

  let x = document.getElementById("funfact");
  if (x.innerHTML === "SpaceX was founded in 2002 and employs over 6,000 people.") {
    x.innerHTML = fact1;    
  }
  else if (x.innerHTML === fact1) {
    x.innerHTML = fact2;
  }
  else {
    x.innerHTML = "SpaceX was founded in 2002 and employs over 6,000 people."
  }
} 


/****************************** NEXT LAUNCH *******************************/
const nextURL = "https://api.spacexdata.com/v3/launches/next";

fetch(nextURL)
  .then(response => response.json())
  .then(data => {
    nextLaunches(data)
  })

  .catch(function(error) {
    console.log(error);
  });

function nextLaunches(data) {
  let table = document.getElementById("nexttable");
  let r = table.insertRow(-1);

  //ROCKET
  let rocketName = r.insertCell(-1);
  rocketName.innerHTML = data.rocket.rocket_name;
  
  //MISSION
  let missionName = r.insertCell(-1);
  missionName.innerHTML = data.mission_name;
  
  //FLIGHT NUMBER
  let flightNumber = r.insertCell(-1);
  flightNumber.innerHTML = data.flight_number;
  
  //LAUNCH SITE
  let launchSite = r.insertCell(-1);
  launchSite.innerHTML = data.launch_site.site_name;
  
  //DATE(UTC)
  let dateUTC = r.insertCell(-1);
  dateUTC.innerHTML = data.launch_date_utc;  
}


/****************************** UPCOMING LAUNCHES *******************************/
const upcomingURL = "https://api.spacexdata.com/v3/launches/upcoming";

fetch(upcomingURL)
  .then(response => response.json())
  .then(data => {
    upcomingLaunches(data)
  })

  .catch(function(error) {
    console.log(error);
  });

function upcomingLaunches(data) {
  data.shift();

  for (rInfo of data) {
    let table = document.getElementById("upcomingtable");
    let r = table.insertRow(-1);
  
    //ROCKET
    let rocketName = r.insertCell(-1);
    rocketName.innerHTML = rInfo.rocket.rocket_name;

    //MISSION
    let missionName = r.insertCell(-1);
    missionName.innerHTML = rInfo.mission_name;

    //FLIGHT NUMBER
    let flightNumber = r.insertCell(-1);
    flightNumber.innerHTML = rInfo.flight_number;

    //LAUNCH SITE
    let launchSite = r.insertCell(-1);
    launchSite.innerHTML = rInfo.launch_site.site_name;

    //DATE(UTC)
    let dateUTC = r.insertCell(-1);
    dateUTC.innerHTML = rInfo.launch_date_utc;
  }
}

/****************************** PAST LAUNCHES *******************************/
const pastURL = "https://api.spacexdata.com/v3/launches/past";

fetch(pastURL)
  .then(response => response.json())
  .then(data => {
    pastLaunches(data)
  })

  .catch(function(error) {
    console.log(error);
  });

function pastLaunches(data) {
  let x = document.getElementById("Launches");

  // Get the modal
  let modal = document.getElementById("myModal");
  
  // Get the <span> element that closes the modal
  let span = document.getElementsByClassName("close")[0];
   
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  for (let i = 0; i < data.length; i++) {
    let button = document.createElement("button");
    button.setAttribute("id", "myBtn");
    let btnimg = document.createElement("img");
    btnimg.setAttribute("src", data[i].links.mission_patch_small);
    
    button.appendChild(btnimg);
    x.appendChild(button);

    // When the user clicks the button, open the modal 
    button.onclick = function() {
      modal.style.display = "block";
      document.getElementById("patchBtn").setAttribute("src", data[i].links.mission_patch_small);
      
      //FLIGHT NUMBER
      document.getElementById("flightnum").innerHTML = "Flight Number: " + data[i].flight_number;

      //LAUNCH YEAR
      document.getElementById("launchyear").innerHTML = "Year: " + data[i].launch_year;

      //SITE
      document.getElementById("site").innerHTML = "Site: " + data[i].launch_site.site_name;

      //LAUNCH SUCCESSFUL
      document.getElementById("success").innerHTML = "Launch Successful: " + data[i].launch_success;

      //REPORT
      document.getElementById("report").innerHTML = "Report: " + data[i].details;

      //ROCKETNAME
      document.getElementById("rocketname").innerHTML = "Name: " + data[i].rocket.rocket_name;

      //ROCKET ID
      document.getElementById("rocketid").innerHTML = "Rocket ID: " + data[i].rocket.rocket_id;

      //ROCKET TYPE
      document.getElementById("rockettype").innerHTML = "Rocket Type: " + data[i].rocket.rocket_type;
    }
  }

 
}

/****************************** ROCKETS *******************************/
const rocketsURL = "https://api.spacexdata.com/v3/rockets";

fetch(rocketsURL)
  .then(response => response.json())
  .then(data => {
    rocketsDetails(data);
  })

  .catch(function(error) {
    console.log(error);
  });

function rocketsDetails(data) {
  let rocketsMain = document.getElementById("rocketsContainer");
  let x = document.getElementById("Rockets")

  // Get the modal
  let modal = document.getElementById("rocketsModal");

  // Get the <span> element that closes the modal
  let span = document.getElementById("rocketspan");

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  for (let i = 0; i < data.length; i++) {
    let button = document.createElement("button");
    button.setAttribute("id", "rocketBtn")
    button.setAttribute("class", "button")
    let btntxt = document.createTextNode(data[i].rocket_name);

    button.appendChild(btntxt);
    rocketsMain.appendChild(button);
    x.appendChild(rocketsMain);

    // When the user clicks the button, open the modal 
    button.onclick = function() {
      modal.style.display = "block";
      //ROCKET NAME
      document.getElementById("rname").innerHTML = data[i].rocket_name;

      //COUNTRY
      document.getElementById("country").innerHTML = "Country: " + data[i].country;
      
      //FIRST FLIGHT
      document.getElementById("firstflight").innerHTML = "First Flight: " + data[i].first_flight;
      
      //SUCCESS RATE 
      document.getElementById("successrate").innerHTML = "Success Rate: " + data[i].success_rate_pct + "%";
      
      //COST PER LAUNCH
      document.getElementById("costperlaunch").innerHTML = "Cost per Launch: $" + data[i].cost_per_launch;
      
      //DESCRIPTION
      document.getElementById("description").innerHTML = "Description: " + data[i].description;
    }    
  }
}