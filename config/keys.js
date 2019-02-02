if (process.env.NODE_ENV === "production") {
  module.exports = {
    googleProjectID: process.env.GOOGLE_PROJECT_ID,
    dialogFlowSessionID: process.env.DIALOG_FLOW_SESSION_ID,
    dialogFlorSessionLanguageCode:
      process.env.DIALOG_FLOW_SESSION_LANGUAGE_CODE,
    googleClientEmail: process.env.GOOGLE_CLIENT_EMAIL,
    googlePrivateKey: process.env.GOOGLE_PRIVATE_KEY
  };
} else {
  const dialogflow = require("./development.json");
  const {
    googleProjectID,
    dialogFlowSessionID,
    dialogFlowSessionLanguageCode,
    private_key,
    client_email
  } = dialogflow;

  module.exports = {
    googleProjectID,
    dialogFlowSessionID,
    dialogFlowSessionLanguageCode,
    private_key,
    client_email
  };
}

//in case this thing breaks, make a dialogflow_keys.json file with the reactpageagnet file in it
