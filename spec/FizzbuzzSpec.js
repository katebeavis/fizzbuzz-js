describe("Fizzbuzz", function() {

  // var fizzbuzz;
  beforeEach(function() {
  	fizzbuzz = new Fizzbuzz();
  });

  describe("should know when a number is divisible", function() {

    it("by 3", function() {
      expect(fizzbuzz.isDivisibleByThree(3)).toEqual(true)
    });

    it("by 5", function() {
      expect(fizzbuzz.isDivisibleByFive(5)).toEqual(true)
    });

    it("by 15", function() {
    	expect(fizzbuzz.isDivisibleByFifteen(15)).toEqual(true)
    });

  });

  describe("should know when a number is not divisible", function() {

    it("by 3", function() {
      expect(fizzbuzz.isDivisibleByThree(4)).toEqual(false)
    });

    it("by 5", function() {
    	expect(fizzbuzz.isDivisibleByFive(6)).toEqual(false)
    });

  });

});








// describe("Player", function() {
//   var player;
//   var song;

//   beforeEach(function() {
//     player = new Player();
//     song = new Song();
//   });

//   it("should be able to play a Song", function() {
//     player.play(song);
//     expect(player.currentlyPlayingSong).toEqual(song);

//     //demonstrates use of custom matcher
//     expect(player).toBePlaying(song);
//   });

//   describe("when song has been paused", function() {
//     beforeEach(function() {
//       player.play(song);
//       player.pause();
//     });

//     it("should indicate that the song is currently paused", function() {
//       expect(player.isPlaying).toBeFalsy();

//       // demonstrates use of 'not' with a custom matcher
//       expect(player).not.toBePlaying(song);
//     });

//     it("should be possible to resume", function() {
//       player.resume();
//       expect(player.isPlaying).toBeTruthy();
//       expect(player.currentlyPlayingSong).toEqual(song);
//     });
//   });

//   // demonstrates use of spies to intercept and test method calls
//   it("tells the current song if the user has made it a favorite", function() {
//     spyOn(song, 'persistFavoriteStatus');

//     player.play(song);
//     player.makeFavorite();

//     expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
//   });

//   //demonstrates use of expected exceptions
//   describe("#resume", function() {
//     it("should throw an exception if song is already playing", function() {
//       player.play(song);

//       expect(function() {
//         player.resume();
//       }).toThrowError("song is already playing");
//     });
//   });
// });
