const { nodeMailer } = require("../client/src/components/nodeMailer");

module.exports = {
    Send: async (req , res ) => {
        await nodeMailer();
        res.send("vous etes acceptés , merci de nous rejoindre le plus tot possible pour completer les procédures ");
    },
}