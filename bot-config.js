var CONFIG = {
    //Facebook API token
    accessToken: "",

    //WIT NPL engine API token
    witToken: "",

    port: 8080,
    ssl: {
        key: "",
        cert: "",
        ca: ""
    },

    isFirebaseDB : false,

    //Application token to verify with Facebook API
    verifyToken: "botdemo", //it can any string you want, but should match to facebook webhook token 

    listenPort: 443,

    //Set default messages 
    defaultAuthMsg: "User not authorized, kindly try again with different credentials.",
    defaultQueryMsg: "Will be glad to help you. Kindly write to us keplerlab@sapient.com",
    
    //firebase API token
    firebase : {
        apiKey: "-Jw",
        authDomain: "",
        databaseURL: "",
        storageBucket: "",
        messagingSenderId: "",
        serviceAccount : {
        } //Firebase private key
    },

    //chatbot key mapping (Mapping between user response and next questions to ask from end user) 
    keyMapped: {
        
    }
};
module.exports = CONFIG;
