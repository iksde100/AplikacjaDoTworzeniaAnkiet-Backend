const success = () => {
  console.log("------------------------");
  console.log("\x1b[32m%s\x1b[0m", "✓ | Connected");
  console.log("------------------------");
};

const error = (error) => {
  console.log("------------------------");
  console.log("\x1b[31m%s\x1b[0m", "✗ | Connection Failed");
  console.log("------------------------");
  console.log(error);
  console.log("------------------------");
};

module.exports = {
  success,
  error,
};
