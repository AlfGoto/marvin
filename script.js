async function sendContact() {

    const webhookBody = {
        title: 'ok',
        embeds: [{
            fields: [
                { name: 'bref', value: ('hello') }
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
