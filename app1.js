const func = require("./function");
const main = async () => {
  const name = await func.questions("What is your name?");
  const email = await func.questions("What is your email?");
  const phone = await func.questions("What is your phone?");
  func.savedata(name, email, phone);
};

main();
