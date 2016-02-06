/*
These are actually just two click functions (one for the 'back' button, one for the 'forward' button) that each do three things:
  1. increase/decrease count
  2. change band image
  3. change band name
Text is changed using <span>, image is changed by changing the 'src' attribute of the <img>. 
This code is somewhat more efficient than the first draft, since I use arrays to store the data that I want to update. The first part of the click function updates the number, then the function 'updateEverything' takes this updated number as input parameter and updates the 3 variable elements on the screen accordingly. 
*/

var myNumber = 1;
var bandNames = [
'Godspeed You! Black Emperor',
'The Hirsch Effekt',
'Tera Melos',
'Colour Haze',
'Speedy Ortiz'
];
var bandImages = [
'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSE9HNFUDi5qkUse9vhBJUC4ffS8T-QXn14SnOOXoYEUvxH-NXc',
'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTLNKbGbuDHxU7bF2hM94EXAtc7rhGOtd7tp9uPofBWwy9igkoeYw',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwleE5SDmM_7uMrvwFGztNkxbv00ZTTM44LGzsEwBqwWbnZ6LM',
'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRkI8OUlHervdYtk7Etk3pH1zIP8MK5ntWbG66yZW3VJWOqdKbh',
'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTLS0JWSdTRHkbxT6cBF7ZoZ1GZBhamofgteNpXrJw5wMFVG7tm'
];

var bandLat = [
45.5017, 
52.3667, 
38.5556, 
48.1333, 
40.7127
];

var bandLng = [
-73.5673,
9.7167,
-121.4689,
11.5667,
-74.0059
];

var bandLoc = [
'Montreal, CAN',
'Hannover, GER',
'Sacramento/CA, USA',
'Munich, GER',
'New York City/NY, USA'
];

// update function that will be called within click functions 
// (foward and back)
// carefule: indexing is zero-based like in Python!
function updateEverything(currentNumber) {
  $('#bandImage').attr('src',bandImages[currentNumber-1]);
  $('#bandName').text(bandNames[currentNumber-1]);
  $('#myNumber').text(currentNumber);
}

$('#forward').click( function() {
  if (myNumber < 5) {
    myNumber = myNumber + 1;
  } else {
    myNumber = 1;
  }
  updateEverything(myNumber)
});

$('#back').click( function() {
  if (myNumber > 1) {
    myNumber = myNumber - 1;
  } else {
    myNumber = 5;
  }
  $('#myNumber').text(myNumber);
    updateEverything(myNumber)
});


