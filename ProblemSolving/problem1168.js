const input = require('fs').readFileSync('./input', 'utf8');
const lines = input.split('\n');

const len = lines[0];

function count(props) {
    let sum = 0
    for (let i = 0; i < props.length; i++) {
        // console.log(props[i])
        // let index = props[i]
        if (1 === parseInt(props[i])) {
            sum = sum + 2
        }
        else if (2 === parseInt(props[i])) {
            sum = sum + 5
        }
        else if (3 === parseInt(props[i])) {
            sum = sum + 5
        }
        else if (4 === parseInt(props[i])) {
            sum = sum + 4
        }
        else if (5 === parseInt(props[i])) {
            sum = sum + 5
        }
        else if (6 === parseInt(props[i])) {
            sum = sum + 6
        }
        else if (7 === parseInt(props[i])) {
            sum = sum + 3
        }
        else if (8 === parseInt(props[i])) {
            sum = sum + 7
        }
        else if (9 === parseInt(props[i])) {
            sum = sum + 6
        }
        else {
            sum = sum + 6
        }
    }
    return sum
}
for (let index = 1; index <= len; index++) {

    console.log(count(lines[index])+ " leds")
}
// const result = count(mainValue)
// console.log(result + " leds")





// const num = parseInt(lines)
// const num = lines
// console.log(lines)
// console.log(lines[0].length)
// const numLength = lines[0].length