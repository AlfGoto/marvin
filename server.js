const express = require("express");
const app = express();

app.get("/", (req, res) => {
    sendContact(req.get('host'))
});

app.listen(989898, () => console.log("Server ready on port 989898."));

module.exports = app;

async function sendContact(arg) {

    const webhookBody = {
        title: 'ok',
        embeds: [{
            fields: [
                { name: getCurrentTimeInFrance(), value:  arg}
            ]
        }],
    };

    const webhookUrl = 'https://discord.com/api/webhooks/1260315791237316620/wRe2uqiHwAAi3K5mfPiNPjFTxCzv4PXz7rtIwF9gLzKOeHNu8o74VYG--xRzs9VAyNcZ';

    const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookBody),
    });
}
sendContact()



function getCurrentTimeInFrance() {
    const now = new Date()
    const options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'Europe/Paris',
        hour12: false
    };
    const timeFormatter = new Intl.DateTimeFormat('fr-FR', options);
    const formattedTime = timeFormatter.format(now);

    return formattedTime;
}