/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills Kit.
 * The Intent Schema, Custom Slots, and Sample Utterances for this skill, as well as
 * testing instructions are located at http://amzn.to/1LzFrj6
 *
 * For additional samples, visit the Alexa Skills Kit Getting Started guide at
 * http://amzn.to/1LGWsLG
 */

// Route the incoming request based on type (LaunchRequest, IntentRequest,
// etc.) The JSON body of the request is provided in the event parameter.
exports.handler = function (event, context) {
    try {
        console.log("event.session.application.applicationId=" + event.session.application.applicationId);

        /**
         * Uncomment this if statement and populate with your skill's application ID to
         * prevent someone else from configuring a skill that sends requests to this function.
         */
        /*
        if (event.session.application.applicationId !== "amzn1.echo-sdk-ams.app.[unique-value-here]") {
             context.fail("Invalid Application ID");
        }
        */

        if (event.session.new) {
            onSessionStarted({requestId: event.request.requestId}, event.session);
        }

        if (event.request.type === "LaunchRequest") {
            onLaunch(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "IntentRequest") {
            onIntent(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "SessionEndedRequest") {
            onSessionEnded(event.request, event.session);
            context.succeed();
        }
    } catch (e) {
        context.fail("Exception: " + e);
    }
};

/**
 * Called when the session starts.
 */
function onSessionStarted(sessionStartedRequest, session) {
    console.log("onSessionStarted requestId=" + sessionStartedRequest.requestId +
        ", sessionId=" + session.sessionId);
}

/**
 * Called when the user launches the skill without specifying what they want.
 */
function onLaunch(launchRequest, session, callback) {
    console.log("onLaunch requestId=" + launchRequest.requestId +
        ", sessionId=" + session.sessionId);

    // Dispatch to your skill's launch.
    getWelcomeResponse(callback);
}

/**
 * Called when the user specifies an intent for this skill.
 */
function onIntent(intentRequest, session, callback) {
    console.log("onIntent requestId=" + intentRequest.requestId +
        ", sessionId=" + session.sessionId);

    var intent = intentRequest.intent,
        intentName = intentRequest.intent.name;

    // Dispatch to your skill's intent handlers
    if ("MemoryIsIntent" === intentName) {
        setMemoryInSession(intent, session, callback);
    } else if ("ConcentrationIntent" === intentName) {
        setConcentrationInSession(intent, session, callback);
    } else if ("SpeedReadingIntent" === intentName) {
        setSpeedReadingInSession(intent, session, callback);
    } else if ("AMAZON.HelpIntent" === intentName) {
        getWelcomeResponse(callback);
    } else if ("AMAZON.StopIntent" === intentName) {
        getStopIntent(callback);
    } else if ("AMAZON.CancelIntent" === intentName) {
        getStopIntent(callback);
    } else if ("AMAZON.RepeatIntent" === intentName) {
        getWelcomeResponse(callback);
    }    
     else {
        throw "Invalid intent";
    }
}

/**
 * Called when the user ends the session.
 * Is not called when the skill returns shouldEndSession=true.
 */
function onSessionEnded(sessionEndedRequest, session) {
    console.log("onSessionEnded requestId=" + sessionEndedRequest.requestId +
        ", sessionId=" + session.sessionId);
    // Add cleanup logic here
}

// --------------- Functions that control the skill's behavior -----------------------

function getWelcomeResponse(callback) {
    // If we wanted to initialize the session to have some attributes we could add those here.
    var sessionAttributes = {};
    var cardTitle = "Mind Power Study Techniques";
    var speechOutput = "I am Mind Power Ninja. " +
        ". I have three mind power Techniques for you. " +
        ". Memory. concentration. Speed reading or fast reading. "+
        ". Which study Technique you are intrested in";
    // If the user either does not reply to the welcome message or says something that is not
    // understood, they will be prompted again with this text.
    var repromptText = "Please tell me Which study Technique you are intrested in, " +
        "Memory, concentration, Speed reading or fast reading";
    var shouldEndSession = false;

    callback(sessionAttributes,
        buildSpeechletResponse(cardTitle, speechOutput, repromptText, shouldEndSession));
}

function getStopIntent(callback) {
    // If we wanted to initialize the session to have some attributes we could add those here.
    var sessionAttributes = {};
    var cardTitle = "Mind Power Study Techniques";
    var speechOutput = "";
    // If the user either does not reply to the welcome message or says something that is not
    // understood, they will be prompted again with this text.
    var repromptText = "";
    var shouldEndSession = true;

    callback(sessionAttributes,
        buildSpeechletResponse(cardTitle, speechOutput, repromptText, shouldEndSession));
}



/**
 * Sets the color in the session and prepares the speech to reply to the user.
 */
function setMemoryInSession(intent, session, callback) {
    var cardTitle = intent.name;
   // var favoriteColorSlot = intent.slots.Color;
    var repromptText = "";
    var sessionAttributes = {};
    var shouldEndSession = false;
    var speechOutput = "";

    //if (favoriteColorSlot) {
       // var favoriteColor = favoriteColorSlot.value;
        //sessionAttributes = createFavoriteColorAttributes(favoriteColor);
        speechOutput = "Normal human utilize only 10 % of his mind power. Rate of impulse conduction depends" +
"on the neurotransmitters, number of dendrites and axonites, nodes of ranvier. According to" +
"genotype and phenotype these factors show individual variations. Memory techniques used to " +
"sustain and enhance memory is called “mnemonics”. Master the following mnemonics gradually. " +
"Note that these are not a substitute for studying.";

        repromptText = " You can ask to start Memory techniques again";
   // }
    // else {
       // speechOutput = "I'm not sure what your favorite color is. Please try again";
       // repromptText = "I'm not sure what your favorite color is. You can tell me your " +
          //  "favorite color by saying, my favorite color is red";
    //}

    callback(sessionAttributes,
         buildSpeechletResponse(cardTitle, speechOutput, repromptText, shouldEndSession));
}


function setConcentrationInSession(intent, session, callback) {
    var cardTitle = intent.name;
    //var favoriteColorSlot = intent.slots.Color;
    var repromptText = "";
    var sessionAttributes = {};
    var shouldEndSession = false;
    var speechOutput = "";

    //if (favoriteColorSlot) {
       // var favoriteColor = favoriteColorSlot.value;
        //sessionAttributes = createFavoriteColorAttributes(favoriteColor);
        speechOutput = "Ability of a human mind to concentrate depends on the time of the day and " +
    "night and is subjected to slight variations because it is the biological clock in our body " +
    "which sets  this. But still generally most of the homosapiens show concentration ability in " +
    "terms of percentage as shown below";

        repromptText = "You can ask to start Concentration techniques again";
   // }
    // else {
       // speechOutput = "I'm not sure what your favorite color is. Please try again";
       // repromptText = "I'm not sure what your favorite color is. You can tell me your " +
          //  "favorite color by saying, my favorite color is red";
    //}

    callback(sessionAttributes,
         buildSpeechletResponse(cardTitle, speechOutput, repromptText, shouldEndSession));
}



function setSpeedReadingInSession(intent, session, callback) {
    var cardTitle = intent.name;
    //var favoriteColorSlot = intent.slots.Color;
    var repromptText = "";
    var sessionAttributes = {};
    var shouldEndSession = false;
    var speechOutput = "";

    //if (favoriteColorSlot) {
       // var favoriteColor = favoriteColorSlot.value;
        //sessionAttributes = createFavoriteColorAttributes(favoriteColor);
        speechOutput = "Whether you're hitting the textbooks in philosophy class or reading the morning newspaper,  "+ 
        "reading can feel tedious. Train yourself to speed read to get through these tasks much"+
        "faster. Reading faster does lead to less understanding, but with practice you can overcome"+
        "some of this effect. " +
        
        " Stop talking to yourself. Almost every reader subvocalizes, or moves their throat as they imagine"+
        " speaking the words. This may help the reader remember concepts, but it's also a major barrier to speed."+
        " Here are a few ways to keep this habit to a minimum:"+
        " Chew gum or hum while you read. This occupies muscles used to subvocalize."+
        " If you move your lips as you read, hold a finger against them."+

        "Cover words you've already read. When reading, your eyes often move back to earlier words. Most of the time, these are"+
        "short movements that probably don't improve understanding. Use an index card to cover words right after you read them,"+
        "training yourself not to overuse this habit."+
        "These regressions also happen when you've failed to understand something. If your eyes jump several words or lines back,"+
        "that's a sign that you may need to slow down.";

        repromptText = "You can ask to start Speed Reading techniques again";
   // }
    // else {
       // speechOutput = "I'm not sure what your favorite color is. Please try again";
       // repromptText = "I'm not sure what your favorite color is. You can tell me your " +
          //  "favorite color by saying, my favorite color is red";
    //}

    callback(sessionAttributes,
         buildSpeechletResponse(cardTitle, speechOutput, repromptText, shouldEndSession));
}

function createFavoriteColorAttributes(favoriteColor) {
    return {
        favoriteColor: favoriteColor
    };
}

function getColorFromSession(intent, session, callback) {
    var favoriteColor;
    var repromptText = null;
    var sessionAttributes = {};
    var shouldEndSession = false;
    var speechOutput = "";

    if (session.attributes) {
        favoriteColor = session.attributes.favoriteColor;
    }

    if (favoriteColor) {
        speechOutput = "Your favorite color is " + favoriteColor + ". Goodbye.";
        shouldEndSession = true;
    } else {
        speechOutput = "I'm not sure what your favorite color is, you can say, my favorite color " +
            " is red";
    }

    // Setting repromptText to null signifies that we do not want to reprompt the user.
    // If the user does not respond or says something that is not understood, the session
    // will end.
    callback(sessionAttributes,
         buildSpeechletResponse(intent.name, speechOutput, repromptText, shouldEndSession));
}

// --------------- Helpers that build all of the responses -----------------------

function buildSpeechletResponse(title, output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        card: {
            type: "Simple",
            title: "SessionSpeechlet - " + title,
            content: "SessionSpeechlet - " + output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildResponse(sessionAttributes, speechletResponse) {
    return {
        version: "1.0",
        sessionAttributes: sessionAttributes,
        response: speechletResponse
    };
}