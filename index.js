// Code your solution in this file!

/* function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
  }

function distanceFromHqInFeet(someValue) {
    distanceFromHqInBlocks(someValue);
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
  }

function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
  }

function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
  } */

  //distance from HQ in blocks
  let distanceFromHqInBlocks = function (destination) {
    return Math.abs(destination - 42);
  };

  //distance fro HQ in fett
  let distanceFromHqInFeet = function (destination) {
    return distanceFromHqInBlocks(destination) * 264;
  };

  //distance travelled in feet
  let distanceTravelledInFeet = function (start, destination) {
    return Math.abs(distanceFromHqInFeet(start) - distanceFromHqInFeet(destination));
  };

  //calculating fare prices
  let calculatesFarePrice = function (start, destination) {
    let distanceInFeet = distanceTravelledInFeet(start, destination);
  
    if (distanceInFeet <= 400) {
      return 0;
    } else if (distanceInFeet <= 2000) {
      return (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet <= 2500) {
      return 25;
    } else {
      return 'The ride cannot be more than 2500 feet.';
    }
  };
