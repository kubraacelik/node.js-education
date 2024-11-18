const events = require("events");

const eventEmitter = new events.EventEmitter();

const startListener = (data) => {
  console.log("start", data);
};

eventEmitter.addListener("forLoopStart", startListener);

eventEmitter.addListener("forLoopStart", (data) => {
  console.log("data", data);
});

eventEmitter.on("forLoopEnd", (data) => {
  console.log("end", data);
});

// yalnızca bir kez tetiklenir
eventEmitter.once("forLoopStart", (d) => {
  console.log("d", d);
});

const forLoop = () => {
  eventEmitter.emit("forLoopStart", Date.now());
  for (let index = 0; index < 500; index++) {}
  eventEmitter.emit("forLoopEnd", Date.now());
};

eventEmitter.emit("forLoopStart", Date.now());

eventEmitter.setMaxListeners(2);

forLoop();
