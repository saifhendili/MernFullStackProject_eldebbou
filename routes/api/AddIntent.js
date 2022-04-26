
const dialogflow = require('@google-cloud/dialogflow');
require('dotenv').config();
const express = require('express');
const auth = require('../../middleware/auth');
const Opinion = require('../../models/Opinion');
const router = express.Router();



// Instantiates the Intent Client
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
  const projectId = CREDENTIALS.project_id;
  
  const CONFIGURATION = {
    credentials: {
        private_key: CREDENTIALS['private_key'],
        client_email: CREDENTIALS['client_email']
    }
}
const intentsClient = new dialogflow.IntentsClient(CONFIGURATION);



  async function createIntent(displayName,trainingPhrasesParts,messageTexts) {
    // Construct request

    // The path to identify the agent that owns the created intent.
    const agentPath = intentsClient.projectAgentPath(projectId);
    const trainingPhrases = [];

    trainingPhrasesParts.forEach(trainingPhrasesPart => {
      const part = {
        text: trainingPhrasesPart,
      };
      console.log("wa")

      // Here we create a new training phrase for each provided part.
      const trainingPhrase = {
        type: 'EXAMPLE',
        parts: [part],
      };

      trainingPhrases.push(trainingPhrase);
    });

    console.log("wa2")

    const messageText = {
      text: messageTexts,
    };

    const message = {
      text: messageText,
    };

    const intent = {
      displayName: displayName,
      trainingPhrases: trainingPhrases,
      messages: [message],
    };

    const createIntentRequest = {
      parent: agentPath,
      intent: intent,
    };
    console.log(agentPath)

    // Create the intent
    const [response] = await intentsClient.createIntent(createIntentRequest);
    console.log("wa5")
    
    console.log(`Intent ${response.name} created`);
    console.log("wa4")
    return response

  }

  router.get('/',async (req, res) => {
    try {
      const opinions = await Opinion.find().sort({ date: -1 });
      res.json(opinions);
    } catch (err) {
      return res.status(500).json({ msg: "Server error" });
    }
});


  router.delete('/add/:id/:rep', async (req, res) => {
    try {
      const  opinions = await Opinion.findById(req.params.id);
      let displayName = opinions.text
      let trainingPhrasesParts=[opinions.text]
      let messageTexts= []
      messageTexts.push(req.params.rep)
    
      let responseData = await createIntent(displayName,trainingPhrasesParts,messageTexts);

      await opinions.remove();
      const  op = await Opinion.find();

      res.json(op);
    } catch (error) {
      console.log(error)
    }
  
   

});

  module.exports = router;
