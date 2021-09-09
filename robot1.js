// A robot has been given a list of movement instructions. Each instruction is either left, right, up or down, followed by a distance to move. The robot starts at [0, 0]. You want to calculate where the robot will end up and return its final position as an array.

// To illustrate, if the robot is given the following instructions:

// ["right 10", "up 50", "left 30", "down 10"]

// It will end up 20 left and 40 up from where it started, so we return [-20, 40].

// https://edabit.com/challenge/t3iJRARc9K9x9AAdr

function trackRobot(instructions) {
  let xAxis = 0;
  let yAxis = 0;

  for (let i = 0; i < instructions.length; i++) {
    let arr = instructions[i].split(" ");
    switch (arr[0]) {
      case "left":
        xAxis -= arr[1];
        break;
      case "right":
        xAxis += +arr[1];
        break;
      case "up":
        yAxis += +arr[1];
        break;
      case "down":
        yAxis -= arr[1];
    }
  }
  return [xAxis, yAxis];
}

console.log(trackRobot(["right 10", "up 50", "left 30", "down 10"]));
