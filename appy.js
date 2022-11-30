//mengimport function dari file function.js
const func = require("./function1.js");
const yargs = require("yargs");
const { describe } = require("yargs");

//add
yargs.command({
  command: "add",
  describe: "add new contact",
  builder: {
    name: {
      describe: "Contact Name",
      demandOption: true,
      type: "string",
    },
    email: {
      describe: "contact email",
      demandOption: false,
      type: "string",
    },

    mobile: {
      describe: "contact mobile phone number",
      demandOption: true,
      type: "string",
    },
  },

  //menerima input yargs dibagikan ke object masing"
  handler(argv) {
    const contact = {
      name: argv.name,
      email: argv.email,
      mobile: argv.mobile,
    };

    //input data ke JSON
    func.saveContact(argv.name, argv.email, argv.mobile);
  },
});

yargs.command({
  command: "tampil",
  describe: "Contact List",
  handler() {
    func.tampil();
  },
});

yargs.parse();
