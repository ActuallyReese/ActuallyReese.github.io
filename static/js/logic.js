// Add console.log to check to see if the code is working.
console.log("working");

function json(url) {
    return fetch(url).then(res => res.json());
  }
  
  let locations = document.querySelector("h2");
  let apiKey = API_KEY;
  json(`https://api.ipdata.co?api-key=${apiKey}`).then(data => {
    // console.log(data.ip);
    console.log(data.city);
    locations.innerText = (data.city + ", " + data.region);

});