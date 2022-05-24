// Add console.log to check to see if our code is working.
console.log("working");

function json(url) {
    return fetch(url).then(res => res.json());
  }
  
  
  let apiKey = API_KEY;
  json(`https://api.ipdata.co?api-key=${apiKey}`).then(data => {
    console.log(data.ip);
    console.log(data.city);
    alert(data.ip + ", " + data.city + ", " + data.region);

   
});


function showLocation() {
    json(`https://api.ipdata.co?api-key=${apiKey}`).then(data => {
    alert(data.ip + ", " + data.city + ", " + data.region);
})};