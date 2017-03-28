var service = require('./bot-service');
var _ = require('underscore');
var CONFIG = require('./bot-config');
var WIT = require('wit-js');
var client = new WIT.Client({
    apiToken: CONFIG.witToken
});

module.exports = {
    autoReply: function(text, userObj, responseList,text) {
        var _this = this;
        
    },
    handleRequest: function(event, userObj, responseList) {
        var _this = this;

        //handle response if normal message received
        if (event.message) {
            /***** MESSAGE ATTACHMENT EVENT ****/
            if (event.message.text) {

                //get message
                var text = event.message.text;
               
                //Send message to WIT                
                client.message(text, {})
                    .then(function(witKey) {

                        //Get response
                        var _key = witKey.entities.intent ? witKey.entities.intent[0].value : '',
                            data = _.findWhere(responseList, {
                                key: _key
                            }),
                            intentConfidence = witKey.entities.intent ? witKey.entities.intent[0].confidence : 0;

                        if (data && intentConfidence > 0.5) {

                            //ask next question
                            _this.sendNextQuestion(responseList, userObj, _key,text);

                        } else {
                            //send default messsage
                            service.sendPlainMessage(userObj.userId, CONFIG, CONFIG.defaultQueryMsg);
                        }
                    })
                    .catch(function(err) {
                        console.log("WIT reponse fails", err);
                    });
                }
        }
        //Handle postbask reponse             
        else if (event.postback) {

            var nextQuestion,
                textPayload = event.postback.payload;

            //set last selected question key 
            userObj.lastQuestionKey = textPayload;

            //send message
            nextQuestion = _.findWhere(responseList, {
                key: CONFIG.keyMapped[textPayload]
            });
            service.sendMessage(CONFIG.keyMapped[textPayload], userObj, CONFIG, nextQuestion,textPayload);
            userObj.lastQuestionKey = CONFIG.keyMapped[textPayload];

        }
    },
    //send next question to user as per questions mapping 
    sendNextQuestion: function(responseList, userObj, key,answer) {

        nextQuestion = _.findWhere(responseList, {
            key: key
        });
        service.sendMessage(key, userObj, CONFIG, nextQuestion,answer);
        userObj.lastQuestionKey = key;
    }
};