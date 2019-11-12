const url = "https://api.spacexdata.com/v3/";

fetch(url)
  .then(response => response.json())
  .then(data => {
    doStuff(data)
  })

  .catch(function(error) {
    console.log(error);
  });

function doStuff(data) {
  console.log(data);
}

function openPage(pageName) {
  let i;
  let x = document.getElementsByClassName("menuPage");

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(pageName).style.display = "block";  
}