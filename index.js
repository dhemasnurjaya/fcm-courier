const admin = require("firebase-admin");

/**
 * Sends a message to a topic.
 * 
 * @author [Dhemas Nurjaya](https://github.com/dhemasnurjaya)
 * 
 * Before running this script:
 * - Navigate to https://console.firebase.google.com
 * - Select your project and open project settings
 * - Go to service accounts
 * - Create New Service Account if you don't have one
 * - Generate new private key and download the generated JSON file
 * - Put the downloaded JSON file into same directory as this script (may need to be renamed to match the code)
 */

// initialize firebase                                                                              
admin.initializeApp({
    credential: admin.credential.cert('firebase-adminsdk.json'),
    databaseURL: 'NEED_TO_BE_CONFIGURED'
});

const topic = 'YOUR_TOPIC';
const title = 'NOTIFICATION_TITLE';
const body = 'NOTIFICATION_BODY';
const message = {
    notification: {
        title: title,
        body: body,
    },
    topic: topic,
};

admin.messaging().send(message).then((response) => {
    // Response is a message ID string.
    console.log('Successfully sent message:', response);
}).catch((error) => {
    console.log('Error sending message:', error);
});