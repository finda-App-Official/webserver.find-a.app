// Imports

const { env } = require("process");
const Express = require("express");
const path = require("path");
const cors = require("cors");

// Presets

const app = Express();

// Configs

app.use(Express.urlencoded({ extended: true }));
app.use(Express.json());
app.use(
  cors({
    methods: ["GET", "POST", "DELETE", "PATCH"],
    origin: "https://*.find-a.app/*",
  })
);
app.listen(2000, () => {
  console.log("Server running on port 2000");
});

// API-Imports

// Code

app.use();
var SibApiV3Sdk = require('sib-api-v3-sdk');
var defaultClient = SibApiV3Sdk.ApiClient.instance;
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'YOUR_API_V3_KEY';
var apiInstance = new SibApiV3Sdk.EmailCampaignsApi();
var emailCampaigns = new SibApiV3Sdk.CreateEmailCampaign();
emailCampaigns.name = "Welcome to the newsletter";
emailCampaigns.subject = "My subject";
emailCampaigns.sender = {"name": "finda Newsletter", "email": "news@find-a.app"};
emailCampaigns.type = "classic";
emailCampaigns.htmlContent =  'Congratulations! You successfully sent this example campaign via the Brevo API.',
emailCampaigns.recipients=  {listIds: [2, 7]},
# Schedule the sending in one hour\
scheduledAt: '2018-01-01 00:00:01'
}
apiInstance.createEmailCampaign(emailCampaigns).then(function(data) {
console.log('API called successfully. Returned data: ' + data);
}, function(error) {
console.error(error);
});