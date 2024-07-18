const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('WaterFull', () => {
  console.log('Please turn off the motor');
  setTimeout(()=> {
    console.log("Reminder: Turn off the motor.")
  }, 3000)
});

console.log("Script is running...")

myEmitter.emit('WaterFull');    //Triggering the event

console.log("Script is still running...")
