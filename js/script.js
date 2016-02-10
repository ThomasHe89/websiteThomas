/*
These are actually just two click functions (one for the 'back' button, one for the 'forward' button) that each do three things:
  1. increase/decrease count
  2. change band image
  3. change band name
Text is changed using <span>, image is changed by changing the 'src' attribute of the <img>. 
This code is somewhat more efficient than the first draft, since I use arrays to store the data that I want to update. The first part of the click function updates the number, then the function 'updateEverything' takes this updated number as input parameter and updates the 3 variable elements on the screen accordingly. 
*/
var lat_ctr = 44.790243; 
var lon_ctr = -51.394095;

var ctr = [lat_ctr, lon_ctr];

var bandName = [
'Godspeed You! Black Emperor',
'The Hirsch Effekt',
'The Fall of Troy',
'Tera Melos',
'Colour Haze'
];

var bandImage = [
'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQZ4TPa8PmJvCXeOS4qGTXhRAe3w4UzWvb3lXGJbHXxgwXpeBXtiw',
'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTLNKbGbuDHxU7bF2hM94EXAtc7rhGOtd7tp9uPofBWwy9igkoeYw',
'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRfpqgJtxXlC0aUDhJ-g_cLwF9uWNCcVnW9qLA5A6YwsYrd8IR9',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwleE5SDmM_7uMrvwFGztNkxbv00ZTTM44LGzsEwBqwWbnZ6LM',
'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRkI8OUlHervdYtk7Etk3pH1zIP8MK5ntWbG66yZW3VJWOqdKbh'
];

var bandVideo = [
'https://www.youtube.com/embed/PZwQeZh6rP0',
'https://www.youtube.com/embed/YTxhttb-cm4',
'https://www.youtube.com/embed/mM7FEFdBCm4',
'https://www.youtube.com/embed/S2QsZ75ESuk',
'https://www.youtube.com/embed/YWDzCol3jYk'
];

var bandLat = [
45.5017, 
52.3667, 
47.5458,
38.5556, 
48.1333
];

var bandLng = [
-73.5673,
9.7167,
-122.1811,
-121.4689,
11.5667
];

var bandLoc = [
'Montreal, CAN',
'Hannover, GER',
'Mukilteo/WA, USA',
'Sacramento/CA, USA',
'Munich, GER'
];

var myNumber = 1;

// update function that will be called within click functions 
// (foward and back)
// careful: indexing is zero-based like in Python!

function updateEverything(currentNumber) {
  $('#bandImage').attr('src',bandImage[currentNumber-1]);
  $('#bandVideo').attr('src',bandVideo[currentNumber-1]);
  $('#bandName').text(bandName[currentNumber-1]);
  $('#myNumber').text(currentNumber);
}

$('#forward').click( function() {
  if (myNumber < bandName.length) {
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
    myNumber = bandName.length;
  }
  $('#myNumber').text(myNumber);
    updateEverything(myNumber)
});


