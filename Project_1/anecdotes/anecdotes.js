const myAPIEndpoint = 'https://wildside-nu.herokuapp.com/anecdotes';
const addVote = (ev) => {
    // 1. get user-generated data:
    const anecdote = document.querySelector('#anecdote').value;
    const date = document.querySelector('#date').value;;

fetch(myAPIEndpoint, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "anecdote": anecdote,
        "date": date



    })
})
.then(response => response.json())
.then(data => {
    // 3. print the results to the screen
    console.log(data);
});
ev.preventDefault();
};

// 4. attach function to button:
document.querySelector('#saveForm').onclick = addVote;
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
