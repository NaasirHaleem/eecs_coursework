const search = (ev) => {
// console.log(document.querySelector('input').value;
let food = document.querySelector('input').value;
let url = `https://www.apitutor.org/yelp/simple/v3/businesses/search?location=${food}`;

fetch(url)
  .then(response => response.json())
  .then(displayResults);
};

const displayResults = (data) => {
  // for (item of data){
    // let template = `<p>`
    // document.querySelector('#output').innerHTML = JSON.stringify(data, null, 4);
    for (item of data){
      let template ="<div class = card> <div class = photo style = background-image:url(${ " +data.image_url + "})> </div> <p>${"+ data.name +"}</p> </div>";
        document.querySelector('#output').innerHTML += template;

    }
};

document.querySelector('#search').onclick = search;

// <p>${data}</p>
