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
      // let template ="<div class = card> <div class = photo style = background-image:url(${" +data.image_url + "})> </div> <p>${"+ data.name +"}</p> </div>";

      let template =
      `<div class = "card"> <div class = "photo" style = background-image:url(${item.image_url})> </div>
      <p class = "area1">${item.name}</p>
      <p class = "area2">Rating:${item.rating}</p>
      <p class = "area3">Address:${item.display_address}</p>
      <p class = "area4">Price:${item.price}</p>
      </div>`;
        document.querySelector('#output').innerHTML += template;

    }
    console.log(data);
};

document.querySelector('#search').onclick = search;

// <p>${data}</p>

// let template =
// `"<div class = card> <div class = photo style = background-image:url(${data.url})> </div>
// <p>${data.title}</p>
// </div>"`;
