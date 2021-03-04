

// 1. Populate Table

// From data.js
var tableData = data;

// Get a referece to the table body
var tbody = d3.select("tbody");

// Console.log the data from data.js
console.log(data);

// Append table row for each datapoint
data.forEach(function(oneDatapoint) {
  // Create a new row
  var tr = tbody.append('tr');
  // Append table data for each table row
  Object.keys(oneDatapoint).forEach(
    function(key) {
      tr.append('td').text(oneDatapoint[key]);
    }
  )
})


// 2. Event Handler 
// **UFO-level-1** : date/time input

// grab references to the input element and the output div
var input_element = d3.select('#form-control');
var output_element = d3.select('.ufo-table');

// // Function to filter from user input
// function filterto(date) {
//   return date.
// };

// // Function to handle input change
// function handleChange(event) {
//   // grab the value of the input field
//   var inputtext = input_element.node().value;

//   // clear the existing output
//   output_div.text("");

//   // filter to row

//   // Set the output text 

// }

// // Attach an event to detect changes to the input field. 
// input_element.on("change", handleChange);

// **UFO-level-2** : multiple criteria input



  