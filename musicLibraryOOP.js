
// A Library has a name and a creator (both strings)
// These are the only things required in order to create a music library
// A Library has many playlists (starts as an empty array)
// Playlist objects can be added to an instance of a library

function Library(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
  this.playlist = function(playlist){
    this.playlists.push(playlist)
  }
}

// Each Playlist has a name which is required upon creation
// A Playlist also has many tracks
// Each Playlist also has a totalDuration function which will sum the duration of all of its tracks
// Each Playlist also has an overallRating function which will calculate
// the rating by averaging the rating of its tracks
function Playlist(name) {
  this.name = name;
  this.tracks = [];
  this.track = function(track){
    this.tracks.push(track)
  }
  this.playlistDuration = function(){
    let totalDurationInSeconds = 0;
      for (const track of this.tracks){
        totalDurationInSeconds += track.length;
      }
    this.playlistDuration = totalDurationInSeconds;
  }
  this.overallRating = function(){
    let overall = 0;
    let counter = 0;
      for (const track of this.tracks){
        overall += track.rating;
        counter += 1;
      }
    const avg = overall / counter;
    this.overallRating = Math.round(avg * 100) / 100;
  }
}


// A Track has a title, a rating (an integer from 1 to 5) and a length (integer in seconds)
// all of which are required when creating a new track
function Track(title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
}

// Once defined, your code should use new to instantiate these functions to create instances 
// of one library and then add new tracks and playlists to the library.

//Library
const libraryJorgeLuiz = new Library("My Library", "jorgeLuiz");

//Playlists
const playlist70 = new Playlist("Songs from 1970");
const playlist80 = new Playlist("Songs from 1980");
const playlist90 = new Playlist("Songs from 1990");
const playlist00 = new Playlist("Songs from 2000");

//Tracks
const track1 = new Track("Hello", 5, 360);
const track2 = new Track("Billie Jean", 4, 320);
const track3 = new Track("Like a Prayer", 3, 315);
const track4 = new Track("Smells Like Teen Spirit", 2, 278);
const track5 = new Track("Run", 1, 382);
const track6 = new Track("Thank U", 5, 260);
const track7 = new Track("Californication", 4, 300);
const track8 = new Track("All of Me", 3, 285);
const track9 = new Track("Somewhere Over The Rainbow", 2, 220);
const track10 = new Track("Say Something", 1, 392);

//Inserting tracks in playlists
playlist70.track(track1);
playlist80.track(track2);
playlist90.track(track3);
playlist00.track(track4);
playlist80.track(track5);
playlist90.track(track6);
playlist70.track(track7);
playlist80.track(track8);
playlist90.track(track9);
playlist00.track(track10);

//Playlists in seconds
playlist70.playlistDuration();
playlist80.playlistDuration();
playlist90.playlistDuration();
playlist00.playlistDuration();

//Playlists rating by averaging
playlist70.overallRating();
playlist80.overallRating();
playlist90.overallRating();
playlist00.overallRating();

//Insertin playlists to library
libraryJorgeLuiz.playlist(playlist70);
libraryJorgeLuiz.playlist(playlist80);
libraryJorgeLuiz.playlist(playlist90);
libraryJorgeLuiz.playlist(playlist00);

//console.log(playlist80);
// console.log(libraryJorgeLuiz);
