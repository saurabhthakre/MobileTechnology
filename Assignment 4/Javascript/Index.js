var x = 0;
function Submit() {
  if (document.getElementById("searchbar").value.length == 0) {
    alert("Search box is Empty! Please enter the name of city.");
    return false;
  }

  var req = new XMLHttpRequest();
  var urlSend = "http://api.openweathermap.org/data/2.5/weather?q=" + document.getElementById("searchbar").value + "&units=metric&appid=a4c7a609f9bd74196d02abb7d6529cc5";
  req.open("GET", urlSend, true);

  req.addEventListener("load", () => {
    if (req.status >= 200 && req.status < 400) {
      var response = JSON.parse(req.responseText);
      console.log(response);

      var temp = response.main.temp + " °C";
      var city = response.name;
      var des = response.weather[0].description;
      var img = response.weather[0].icon;

      var imageURL = "http://openweathermap.org/img/wn/" + img + "@2x.png";

      document.getElementById("location").textContent = city;
      document.getElementById("temp").textContent = temp;

      var img = document.createElement("img");
      img.src = imageURL;

      var item = document.getElementById("image");
      if (x != 0) {
        item.removeChild(item.childNodes[0]);
      }
      item.appendChild(img);
      x = x + 1;

      document.getElementById("description").textContent = des;
    } else {
      console.log("Error in network request: " + req.statusText);
    }

  });
  req.send(null);
}
