//membuat fungsi contact
const dataPath = "./data/contacts.json";

const fs = require("fs");

if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

const saveContact = (name, email, mobile) => {
  const contact = { name, email, mobile };

  const file = fs.readFileSync("data/contacts.json", "utf8");
  const contacts = JSON.parse(file);

  //cek duplikat
  const duplicate = contacts.find(function (contact) {
    return contact.name === name;
  });
  if (duplicate) {
    console.log(`name ${name} already exist`);
    return false;
  }

  contacts.push(contact);
  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
  console.log("Terimakasih");
};

//menampilkan list kontak yang ada di JSON
const tampil = (name) => {
  const file = fs.readFileSync("data/contacts.json", "utf8");
  const contacts = JSON.parse(file);

  //mencari nama kontak yang sudah terdaftar di JSON
  const duplicate = contacts.find(function (contact) {
    return contact.name === name;
  });

  if (duplicate) {
    console.log(`
    Nama : ${duplicate.name}
    Email : ${duplicate.email}
    Mobile : ${duplicate.mobile}`);
  } else {
    console.log("Tidak Ada");
  }
};

const del = (name) => {
  const file = fs.readFileSync("data/contacts.json", "utf8");
  const contacts = JSON.parse(file);
  const fil = contacts.filter(function (contact) {
    return contact.name !== name;
  });

  console.log(fil);
  fs.writeFileSync("data/contacts.json", JSON.stringify(fil));
  console.log("ok");

  // if (fil) {
  //   console.log(del);
  //   fs.writeFileSync("./data/contacts.json", JSON.stringify(fil));
  // }
};
//   const duplicate = contacts.find(function(contact) {
//       contact.name === name);
//   }

//   if (duplicate) {
//     console.log("Kontak nama Sudah terrecord, pakai yang lain.");
//     return false;

// };

module.exports = { saveContact, tampil, del };
