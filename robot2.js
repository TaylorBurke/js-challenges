// This robot roams around a 2D grid. It starts at (0, 0) facing North. After each time it moves,
// the robot rotates 90 degrees clockwise. Given the amount the robot has moved each time,
// you have to calculate the robot's final position.

// To illustrate, if the robot is given the movements 20, 30, 10, 40 then it will move:

//     20 steps North, now at (0, 20)
//     30 steps East, now at (30, 20)
//     10 steps South. now at (30, 10)
//     40 steps West, now at (-10, 10)

// ...and will end up at coordinates (-10, 10).

// https://edabit.com/challenge/jfpfpH6w42tZeRo2T

const trackRobot = (...steps) => {
  let xAxis = 0;
  let yAxis = 0;
  let dir = 0;
  for (let step = 0; step < steps.length; step++) {
    switch (dir) {
      case 0:
        yAxis += steps[step];
        dir++;
        break;
      case 1:
        xAxis += steps[step];
        dir++;
        break;
      case 2:
        yAxis -= steps[step];
        dir++;
        break;
      case 3:
        xAxis -= steps[step];
        dir = 0;
        break;
    }
  }
  return [xAxis, yAxis];
};

console.log(trackRobot(20, 30, 10, 40));
