const myModule = {
  add(s1, s2) {
    return s1 + s2;
  },
  LogToConsole(text) {
    console.log(text);
  },
};

const myname = "kubra";

const getData = () => {
  return new Date();
};

module.exports = {
  myModule,
  myname,
  getData,
};
