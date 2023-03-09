const app = require("./app");

const PORT = process.env.PORT || 8080;

app.listen(PORT, function () {
  console.log(`<🚗/> BOOKS LIBRARY SERVER IS RUNNING ON PORT : ${PORT}`);
});
