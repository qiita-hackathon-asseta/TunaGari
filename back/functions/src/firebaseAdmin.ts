const admin = require("firebase-admin");
admin.initializeApp();
// adminをexportする
module.exports = {
  admin,
};
