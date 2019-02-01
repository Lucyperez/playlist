/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = [];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above

var songs = ["Without Me", "Oceans", "Sorry","Hold On"];
var lengths = ["3:26","9:00", "3.41", "3:21"];
var links = ["https://www.youtube.com/watch?v=pdDE1CzeYXg", "https://www.youtube.com/watch?v=FBJJJkiRukY", "https://www.youtube.com/watch?v=tEnCoocmPQM", "https://www.youtube.com/watch?v=8ofCZObsnOo"];
var artists = ["Halsey", "Hillsong United", "Halsey","Chord Overstreet"];
var images = ["https://i.ytimg.com/vi/4xks41TtOyQ/hqdefault.jpg", "https://i.etsystatic.com/14523022/c/2833/2250/95/0/il/067e83/1569221456/il_340x270.1569221456_gm7g.jpg","https://i.ytimg.com/vi/9ky6HfTioqY/maxresdefault.jpg", "https://img.youtube.com/vi/8ofCZObsnOo/0.jpg"];


function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div
    songs.forEach(function (song)
    {
      $("#songs").append("<p>" + song + "</p>");  
    });
    
    lengths.forEach(function (length)
    {
      $("#lengths").append("<p>" + length + "</p>");  
    });
    
    links.forEach(function (link)
    {
      $("#links").append("<a href= '" + link + "'> Listen </a>");  
    });
    
    artists.forEach(function (artist)
    {
      $("#artists").append("<p> By: " + artist + "</p>");  
    });
    
    images.forEach(function (image)
    {
      $("#images").append(" <img src='" + image + "'>");  
    });
    
    
    
}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs
    $("#songs").empty();
    $("#lengths").empty();
    $("#links").empty();
    $("#artists").empty();
    $("#images").empty();
}

$("#add").click(function()
{
    var songName = $("#song").val();
    var imageUrl = $("#image").val();
    var artistName = $("#artist").val();
    var songLength = $("#length").val();
    var link = $("#links").val();
    
    songs.push(songName);
    artists.push(artistName);
    images.push(imageUrl);
    lengths.push(songLength);
    links.push(link);
    
    
     emptySongInfo();
    displaySongInfo();
});

displaySongInfo();
