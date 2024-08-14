document.getElementById('toggleFlashlight').addEventListener('click', function() {
    // Replace 'YOUR_WEBHOOK_URL' with your actual webhook URL
    const webhookUrl = 'https://trigger.macrodroid.com/28f44fb0-f273-4344-b602-48a91a3557f1/flashlight';

    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({}) // You can add a JSON payload if needed
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        console.log('Webhook request successful');
    })
    .catch(error => {
        console.error('There was a problem with the webhook request:', error);
    });
});
