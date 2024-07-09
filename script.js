async function sendContact() {

    const webhookBody = {
        title: 'ok',
        embeds: [{
            fields: [
                { name: getCurrentTimeInFrance(), value: ('hello') }
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
    
    document.getElementById('messageInput').value = ''
    if (response.ok) {
        alert('Message envoyé !')

    } else {
        alert('bon là ya un soucis');
    }
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