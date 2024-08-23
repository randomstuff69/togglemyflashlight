document.addEventListener('DOMContentLoaded', function() {
    const webhookUrl = 'https://trigger.macrodroid.com/28f44fb0-f273-4344-b602-48a91a3557f1/wirelessdebug';

    document.getElementById('toggleFlashlight').addEventListener('click', function() {
        fetch(`${webhookUrl}?param1=value1&param2=value2`, {
            method: 'POST'
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
