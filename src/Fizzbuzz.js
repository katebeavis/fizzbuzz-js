 var Fizzbuzz = function() {
};

Fizzbuzz.prototype.isDivisibleByThree = function(number) {
	return number % 3 === 0;
};

Fizzbuzz.prototype.isDivisibleByFive = function(number) {
	return number % 5 === 0;
};

Fizzbuzz.prototype.isDivisibleByFifteen = function(number) {
	return number % 15 === 0;
};

Fizzbuzz.prototype.play = function(number) {
  if (this.isDivisibleByFifteen(number)) {
  	return "fizzbuzz";
  } else if (this.isDivisibleByFive(number)) {
  	return "buzz";
  } else {
  	return "fizz";
  }
};






// function Player() {
// }
// Player.prototype.play = function(song) {
//   this.currentlyPlayingSong = song;
//   this.isPlaying = true;
// };

// Player.prototype.pause = function() {
//   this.isPlaying = false;
// };

// Player.prototype.resume = function() {
//   if (this.isPlaying) {
//     throw new Error("song is already playing");
//   }

//   this.isPlaying = true;
// };

// Player.prototype.makeFavorite = function() {
//   this.currentlyPlayingSong.persistFavoriteStatus(true);
// };