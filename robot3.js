// A robot moves around a 2D grid. At the start, it is at [0, 0], facing east.
// It is controlled by a sequence of instructions:

//     . means take one step forwards in the current direction.
//     < means turn 90 degrees anticlockwise.
//     > means turn 90 degrees clockwise.

// Your job is to process the instructions and return the final position of the robot.

// https://edabit.com/challenge/WRB33HsHBFDEfx4EA

function trackRobot(steps) {
  let cords = [0, 0];
  let dir = 0;
  let stepsArr = steps.split("");
  for (step in stepsArr) {
    switch (stepsArr[step]) {
      case ".":
        switch (dir % 4) {
          case 0:
            cords[0]++;
            break;
          case 1:
            cords[1]--;
            break;
          case 2:
            cords[0]--;
            break;
          case 3:
            cords[1]++;
            break;
        }
        break;
      case ">":
        dir++;
        break;
      case "<":
        dir = dir + 3;
        break;
    }
  }
  return cords;
}

console.log(trackRobot("..<.<."));
