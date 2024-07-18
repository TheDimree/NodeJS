// function sum(a, b) {
//     return a + b;
// }

// function sub(a, b) {
//     return (a>b) ? (a-b) : (b-a)
// }

// // module.exports = sum 
// // module.exports = sub    //override the value 'sum'

// module.exports = {
//     add: sum, 
//     sub
// }



exports.add = (a,b) => {
    return a + b;
}

exports.sub = (a,b) => a - b;


