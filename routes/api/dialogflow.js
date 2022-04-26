// Import the packages we need
const dialogflow = require('@google-cloud/dialogflow');
require('dotenv').config();
const express = require('express');
const  Opinion  = require('../../models/Opinion');

const router = express.Router();

// Your credentials
const CREDENTIALS = ({
    "type": "service_account",
    "project_id": "mychatbot-348400",
    "private_key_id": "911b0e47f82b85b9a289f4703686e46a56a37eaf",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC/RZ6BfK1C2hgG\nA7dmquD9UX9TD0wdvYVwkF+ZxUI3TV/KTVomh9bgL07VURyTlxbxUYHCrIUJ+StJ\njbe+zpW23oJaMLoL6g4X91falYPnBbFIPkfbSBXeH2+OtPRh1HJv7CXl3lAFviLM\nONLwLownSUjaRJ1PBpYcl/dJx3jiICt3JMixaOaVtiQ4guW629WezKah+GmmWdfC\naNMk0z6Ia+IETyWzWPznGfJMC7lAdiA7ln/ukiwt/ztcKLzYkmcsrLxdNq5tYKw0\nclUK79eQbN4EBBMB/a3UGKOeh9qFqWY6ENvHycfQzZ4n/Aqg9hLo/sGPtzL5fYOa\nTz2I8Ht1AgMBAAECggEAA4By9ZxCkHSYDQAjau9E8uOmPkSLmF3LDskDNGL+ooQ5\nn+VeTvycq/phv0O0D2WsPLBz0jcWBnKNNCmyi/08k3Orv5qgcAMRzVGGG7vcsC2U\nAHvCFVsn/1WPACCtpV7eK3tkzuUM4lYH+A+FmR0ZDB0U3DN2Ynx/N2MhhV8asPUY\nDF1Crm2CMfERo3ce13PZ3gzw9SlL2LeYmlt+5nxeqoq//Glq66On6WmRuYmY2XpI\nTer4FZfL5AUTQ6u0+zIR8JBQE19gnL4X7idukwMHe1ufsIZhUVEVuM1sMCkc8UCg\n2qS2ZvSbLiq/dYJjLWqhdKFrzcAiNjMzSyINJo+vXwKBgQDedTJFK3RPPwZTaGNg\nYMeuEsuc7wYhcOCyY9tFgkkilNtHhX2A6pnKID63SfAePkooL6fVa1WMdS93QhpK\nwIEk7PD7gC0q5pdOwSA5XgCnO44Seqe/EoBLRJUqiyoziqQpDLNU6nTO+DGb0a28\nChOTXUCHINQKNsNcIFDfhVM6QwKBgQDcHKiS4Xux4Jrsr2NE760aX/xFYhlKTdgq\nm04F1VVXLbBILIRV3QADpQG/sn2HFCMgFJ8wGaXHn9r6Yr+KQqhu4meEMXfBKa5N\nXCEOmexGMJN3wobtaHzFsRZgGCxhBrRsPKRjn7QskF2lCuozLbPDcjyo6yYpyrYj\nI12k+AVj5wKBgQCrpbJMPONZ4j93TCyhyQtJ/aauSKBqXTaDbxlZ4NWdoU4xOYdF\nWb+gfpDlzF9Cdr2xlFPkERXJcwJU+uRemXsMiubGqHgxigtl8Q50NVw7rXBKQen9\nPMFRUnHmicreSjOwmOQmuWG38ToWCQwM85l3M5T+rw3tc6P6CdVdIvq9EQKBgFK5\ntqWVdz7QMonYFRAYoE90WcTd7LFfdmn0+qr4ld1w/3rwuD/pEpNMFc8tTz5QVC8/\ncODMEuFm9A78xA47pUAfeVZWnTKM7sSGZqotMX7jzNjK1Jkvlw1Z1BYDn9JLic3Q\nMNx8bmP9UiSwaHsZpyFCswetcSdt12x3Yz+YM7ZrAoGAW3SJQPp5s23IQ0zXnXo9\niDTOF6wJW1aINwQGhLmZRXdgNU0OWTGmDJymHFY//6+ljKda5xz33NHPb1ptac4w\nUgRGlXKByryIiGH5xeZM+oQF+aPYBg4FVJNuQyIh12spsHYfQeg2d/jN9MWrXuGA\nTSR1z8+PfwqLO0UzlVy5REk=\n-----END PRIVATE KEY-----\n",
    "client_email": "chatbot@mychatbot-348400.iam.gserviceaccount.com",
    "client_id": "107468040706520265554",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/chatbot%40mychatbot-348400.iam.gserviceaccount.com"
  }
  
  );

// Other way to read the credentials
// const fs = require('fs');
// const CREDENTIALS = JSON.parse(fs.readFileSync('File path'));

// Your google dialogflow project-id
const PROJECID = CREDENTIALS.project_id;

// Configuration for the client
const CONFIGURATION = {
    credentials: {
        private_key: CREDENTIALS['private_key'],
        client_email: CREDENTIALS['client_email']
    }
}

// Create a new session
const sessionClient = new dialogflow.SessionsClient(CONFIGURATION);

// Detect intent method
const detectIntent = async (languageCode, text, sessionId) => {

    let sessionPath = sessionClient.projectAgentSessionPath(PROJECID, sessionId);

    // The text query request.
    let request = {
        session: sessionPath,
        queryInput: {
            text: {
                // The query to send to the dialogflow agent
                text: text,
                // The language used by the client (en-US)
                languageCode: languageCode,
            },
        },
    };

    // Send request and log result
    const responses = await sessionClient.detectIntent(request);
    console.log(responses);
    const result = responses[0].queryResult;
    console.log(result);



    return {
        response: result
    };
}





router.post('/dialogflow', async (req, res) => {

    let languageCode = "en";
    let text = req.body.text;
    let sessionId = "abcd";

    let responseData = await detectIntent(languageCode, text, sessionId);
if(responseData.response.intent.displayName=="Default Fallback Intent"){
    const newRequest = new Opinion({
      text:responseData.response.queryText,
        email: "String",
      });
  
     newRequest.save();
     res.send(responseData.response)
}else
{res.send(responseData.response);}
});




//Event Query Route

// router.post('/eventQuery', async (req, res) => {
//     //We need to send some information that comes from the client to Dialogflow API 
//     // The text query request.
//     const request = {
//         session: sessionPath,
//         queryInput: {
//             event: {
//                 // The query to send to the dialogflow agent
//                 name: req.body.event,
//                 // The language used by the client (en-US)
//                 languageCode: "en",
//             },
//         },
//     };

//     // Send request and log result
//     const responses = await sessionClient.detectIntent(request);
//     console.log('Detected intent');
//     const result = responses[0].queryResult;
//     console.log(`  Query: ${result.queryText}`);
//     console.log(`  Response: ${result.fulfillmentText}`);

//     res.send(result)
// })





const detectIntentEvent = async (languageCode, event, sessionId) => {

    let sessionPath = sessionClient.projectAgentSessionPath(PROJECID, sessionId);

    // The text query request.
    let request = {
        session: sessionPath,
        queryInput: {
            event: {
                // The query to send to the dialogflow agent
                name: event,
                // The language used by the client (en-US)
                languageCode: languageCode,
            },
        },
    };

    // Send request and log result
    const responses = await sessionClient.detectIntent(request);
    console.log(responses);
    const result = responses[0].queryResult;
    console.log(result);

    return {
        response: result
    };
}
router.post('/eventQuery', async (req, res) => {

    let languageCode = "en";
    let event = req.body.event;
    let sessionId = "abcd";

    let responseData = await detectIntentEvent(languageCode, event, sessionId);
    
    res.send(responseData.response);

});









module.exports = router;
