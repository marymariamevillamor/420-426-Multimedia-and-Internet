
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


function openPage(pageName) {
  let i;
  let x = document.getElementsByClassName("menuPage");

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(pageName).style.display = "block";  
}