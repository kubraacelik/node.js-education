// alan adlarının IP adreslerini çözmek gibi işlemleri yapar
const dns = require("dns");
const os = require("os");

dns.lookup("google.com", (err, address, family) => {
  console.log(address, family);
});

dns.resolve("google.com", (err, address) => {
  console.log("address", address);
});

console.log("localIP", dns.getServers());

dns.lookup(os.hostname(), (err, add, fm) => {
  console.log("add", add);
  console.log("fm", fm);
});
