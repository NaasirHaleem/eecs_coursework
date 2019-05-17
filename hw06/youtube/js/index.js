const search = (ev) => {
    // console.log(document.querySelector('input').value);
    let movie = document.querySelector('input').value;

    let url = `https://www.apitutor.org/youtube/simple/?q=${movie}+&type=video`;
    fetch(url)
        .then(response => response.json())
        .then(displayResults);
};

const displayResults = (data) => {
    for (item of data){
      let template =
      `<div class = "card"> <div class = "id" (${item.videoId})> </div>
      <p class = "area1">${item.title}</p>
      <p class = "area2"><iframe src=https://www.youtube.com/embed/${item.videoId}" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></p>
      </div>`;
        document.querySelector('#output').innerHTML += template;

    }
    console.log(data);
};

document.querySelector('#search').onclick = search;
