
// 1. Populate Table

// From data.js
var tableData = data;

// Get a referece to the table body
var tbody = d3.select("tbody");

// Console.log the data from data.js
console.log(data);

// Append table row for each datapoint
tableData.forEach(function(oneDatapoint) {
  // Create a new row
  var tr = tbody.append('tr');
  // Append table data for each table row
  Object.keys(oneDatapoint).forEach(
    function(key) {
      tr.append('td').text(oneDatapoint[key]);
    }
  )
})

// Clear table before re-rendering


// 2. Event Handlers

// grab references to the input element and the output div

var button = d3.select("#filter-btn");


// Use D3 `.on` to attach a click handler for the upvote
button.on("click", function() {
  // retreive datetime
  var inputDate = d3.select("#datetime").property('value');
  var dateCalled = data.filter( selectedData => selectedData.datetime === inputDate);
  tbody.html("");

  dateCalled.forEach(function(selectedDatePoint) {
    var tr = tbody.append('tr');
    // Append table data for each table row
    Object.keys(selectedDatePoint).forEach(
      function(key) {
        tr.append('td').text(selectedDatePoint[key]);
  }) 
  console.log(inputDate)
}); 
});

