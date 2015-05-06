describe("Fizzbuzz", function() {

  var fizzbuzz;
  beforeEach(function() {
  	fizzbuzz = new Fizzbuzz();
  });

  describe("should know when a number is divisible", function() {

    it("by 3", function() {
      expect(fizzbuzz.isDivisibleByThree(3)).toEqual(true);
    });

    it("by 5", function() {
      expect(fizzbuzz.isDivisibleByFive(5)).toEqual(true);
    });

    it("by 15", function() {
    	expect(fizzbuzz.isDivisibleByFifteen(15)).toEqual(true);
    });

  });

  describe("should know when a number is not divisible", function() {

    it("by 3", function() {
      expect(fizzbuzz.isDivisibleByThree(4)).toEqual(false);
    });

    it("by 5", function() {
    	expect(fizzbuzz.isDivisibleByFive(6)).toEqual(false);
    });

    it("by 15", function() {
      expect(fizzbuzz.isDivisibleByFifteen(16)).toEqual(false);
    });

  });

  describe("should return a string when given a number", function() {

    it("returns 'fizz' when given a number divisible by 3", function() {
      expect(fizzbuzz.play(3)).toEqual("fizz");
    });

    it("returns 'buzz' when given a number divisible by 5", function() {
    	expect(fizzbuzz.play(5)).toEqual("buzz");
    });

    it("returns 'fizzbuzz' when given a number divisible by 15", function() {
    	expect(fizzbuzz.play(15)).toEqual("fizzbuzz");
    });

    it("returns the number given if not divisible by 3 or 5", function() {
      expect(fizzbuzz.play(2)).toEqual("2");
    });
  });

});
