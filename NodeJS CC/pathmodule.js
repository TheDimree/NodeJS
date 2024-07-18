const path = require('node:path');

const a1 = path.basename('C:\\temp\\myfile.html');
console.log(a1);

const a2 = path.dirname('C:\\temp\\myfile.html');
console.log(a2)

console.log("Extension of file = ",path.extname('index.html'));