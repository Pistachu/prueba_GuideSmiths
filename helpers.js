const INPUT_DATA = `${__dirname}/input/input.txt`;
const OUTPUT_DATA = `${__dirname}/output/output.txt`;
const ORIENTATION = ['N', 'E', 'S', 'W'];
const INSTRUCTIONS = ['F', 'L', 'R'];
const MAX_COORDINATE = 50;
const MAX_INSTRUCTIONS = 100;

const correctMarsValues = (values) => {
    if (values.length != 2) {
        return false;
    }
    for (const value of values) {
        if (isNaN(value) || !Number.isInteger(Number(value)) || value <= 0 || value > MAX_COORDINATE) {
            return false;
        }
    }
    return true;
}

const correctRobotPosition = (line, mars) => {

    line = line.split('');

    if (line.length != 3) {
        return false;
    }
    if (!Number.isInteger(Number(line[0])) || line[0] < 0 || line[0] > mars.getWidth()) {
        return false;
    }
    if (!Number.isInteger(Number(line[1])) || line[1] < 0 || line[1] > mars.getHeight()) {
        return false;
    }
    if (ORIENTATION.indexOf(line[2]) === -1) {
        return false;
    }
    return true;
}
const correctRobotInstructions = (line) => {

    line = line.replace(/ /g, '').toUpperCase().split('');

    for (const move of line) {
        if (INSTRUCTIONS.indexOf(move) === -1) {
            return false;
        }
    }
    return true;
}

const calculateNextPosition = (robot) => {
    const facing = robot.getDirection();
    let cordX = robot.getCordX();
    let cordY = robot.getCordY();
    switch (facing) {
        case 'N':
            cordY += 1;
            break;
        case 'E':
            cordX += 1;
            break;
        case 'S':
            cordY -= 1;
            break;
        case 'W':
            cordX -= 1;
            break;
    }
    return { cordX, cordY };
}

module.exports = {
    INPUT_DATA,
    OUTPUT_DATA,
    ORIENTATION,
    INSTRUCTIONS,
    MAX_COORDINATE,
    MAX_INSTRUCTIONS,
    correctMarsValues,
    correctRobotPosition,
    correctRobotInstructions,
    calculateNextPosition
}