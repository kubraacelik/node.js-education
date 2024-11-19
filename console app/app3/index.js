const qrcode = require("qrcode-terminal");
const readline = require("readline");
const process = require("process");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("QR ne için oluşturulsun? \r\n", (answer) => {
  qrcode.generate(answer, { small: true });
  rl.close();
});
