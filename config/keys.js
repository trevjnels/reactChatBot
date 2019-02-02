// prettier-ignore

if(process.env.NODE_ENV === 'production'){
  module.exports = require("./prod")
} else {
  module.exports = require('./dev')
}
//
//
// if (process.env.NODE_ENV === "production") {
//   module.exports = {
//     googleProjectID: process.env.GOOGLE_PROJECT_ID,
//     dialogFlowSessionID: process.env.DIALOG_FLOW_SESSION_ID,
//     dialogFlorSessionLanguageCode: process.env.DIALOG_FLOW_SESSION_LANGUAGE_CODE,
//     client_email: process.env.GOOGLE_CLIENT_EMAIL,
//     private_key: process.env.GOOGLE_PRIVATE_KEY
//   };
// } else {
//   const keyObj = require("./development.json");
//   const {
//     googleProjectID,
//     dialogFlowSessionID,
//     dialogFlowSessionLanguageCode,
//     private_key,
//     client_email
//   } = keyObj;
//
//   module.exports = {
//     googleProjectID,
//     dialogFlowSessionID,
//     dialogFlowSessionLanguageCode,
//     private_key,
//     client_email
//   };
// }
