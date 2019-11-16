
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
  let x = document.getElementById("patchcollection")

  for (let i = 0; i < data.length; i++) {
    let button = document.createElement("button");
    button.setAttribute("id", "patchbtn");
    let btnimg = document.createElement("img");
    btnimg.setAttribute("src", data[i].links.mission_patch_small);
    button.appendChild(btnimg);
    button.setAttribute("onclick", showDetails(data[i]));

    let divc = document.createElement("div");
    divc.setAttribute("id", "divcontainer");
    divc.appendChild(button);

    x.appendChild(divc);
  }
}

/****************************** ROCKETS *******************************/
const rocketsURL = "https://api.spacexdata.com/v3/rockets";

fetch(rocketsURL)
  .then(response => response.json())
  .then(data => {
    rocketsDetails(data)
  })

  .catch(function(error) {
    console.log(error);
  });

function rocketsDetails(data) {
  for (rocket in data) {
    
  }
}

function showDetails(data) {
  let modal = document.getElementById("myModal");
  let btn = document.getElementById("patchbtn");
  let span = document.getElementsByClassName("close")[0];

  btn.onclick = function() {
    modal.style.display = "block";
    let flightnum = document.getElementsById("flightnum");
    let ltext = document.createTextNode(data.flight_number);
    flightnum.appendChild(ltext);
  }

  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

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
  else if (x.innerHTML === fact1){
    x.innerHTML = fact2;
  }
  else {
    x.innerHTML = "SpaceX was founded in 2002 and employs over 6,000 people."
  }
}