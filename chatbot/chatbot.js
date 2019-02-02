"use strict";
const dialogflow = require("dialogflow");
const structjson = require("./structjson.js");
const config = require("../config/keys.js");
const dialogflow = require("dialogflow");

const {
  client_email,
  private_key,
  googleProjectID,
  dialogFlowSessionID,
  dialogFlowSessionLanguageCode
} = config;

const credentials = {
  client_email,
  private_key
};

const sessionClient = new dialogflow.SessionsClient({
  googleProjectID,
  credentials
});
const sessionPath = sessionClient.sessionPath(
  googleProjectID,
  dialogFlowSessionID
);
module.exports = {
  textQuery: async function(text, parameters) {
    let self = module.exports;
    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          text: text,
          languageCode: dialogFlowSessionLanguageCode
        }
      },
      queryParams: {
        payload: {
          data: parameters
        }
      }
    };
    let responses = await sessionClient.detectIntent(request);
    responses = await self.handleAction(responses);
    return responses;
  },

  eventQuery: async function(event, parameters) {
    let self = module.exports;
    const request = {
      session: sessionPath,
      queryInput: {
        event: {
          name: event,
          parameters: structjson.jsonToStructProto(parameters),
          languageCode: config.dialogFlowSessionLanguageCode
        }
      }
    };
    let responses = await sessionClient.detectIntent(request);
    responses = await self.handleAction(responses);
    return responses;
  },

  handleAction: function(responses) {
    return responses;
  }
};
