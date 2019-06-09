const myAPIEndpoint = 'https://wildside-nu.herokuapp.com/votes';
const addVote = (ev) => {
    // 1. get user-generated data:
    const student_id = document.querySelector('#student_id').value;
    let vote = null;
    const radios = document.getElementsByName('Field5');
    for (radio of radios) {
      if (radio.checked) {
        vote = radio.value
        break;
      }
    }
    alert(vote);


    // 2. post it to the endpoint:
    fetch(myAPIEndpoint, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "student_id": student_id,
            "vote": vote



        })
    })
    .then(response => response.json())
    .then(data => {
        // 3. print the results to the screen
        console.log(data);
        getVotes();
    });
    ev.preventDefault();
};

// 4. attach function to button:
document.querySelector('#saveForm').onclick = addVote;






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

const getVotes = () => {
  const vote_dictionary = {}
  fetch('https://wildside-nu.herokuapp.com/votes')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        for (item of data) {
          if (vote_dictionary[item.vote]){
            vote_dictionary[item.vote] += 1
          }
          else {
            vote_dictionary[item.vote] = 1
          }
        }
        console.log(vote_dictionary);
        loadChart(vote_dictionary);
    });
};


// Votes Bar Chart

const loadChart = (counts) => {

  var chart = new CanvasJS.Chart("chartContainer", {
  	animationEnabled: true,
  	theme: "light2", // "light1", "light2", "dark1", "dark2"
  	title:{
  		text: "Votes"
  	},
  	axisY: {
  		title: "Votes"
  	},
  	data: [{
  		type: "column",
  		showInLegend: true,
  		legendMarkerColor: "grey",
  		legendText: "Votes",
  		dataPoints: [
  			{ y: counts['A'], label: "A" },
  			{ y: counts['B'],  label: "B" },
  			{ y: counts['C'],  label: "C" },
  		]
  	}]
  });
  chart.render();

};


// Votes Database
// fetch('https://wildside-nu.herokuapp.com/votes', {
//     method: 'POST',
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         "student_id": studentID,
//         "vote": vote,
//     })

    // .then(response => response.json())
    // .then(data => {
    //     // 3. print the results to the screen
    //     console.log(data);
    // });
    // };
getVotes();
