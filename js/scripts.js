document.addEventListener('DOMContentLoaded', function() {
    const webhookUrl = 'https://trigger.macrodroid.com/28f44fb0-f273-4344-b602-48a91a3557f1/flashlight';

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

    function updateStatus() {
    const now = new Date();
    const day = now.getDay();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    // Convert local time to MDT (Mountain Daylight Time)
    const mdtOffset = -6 * 60; // MDT is UTC-6 hours
    const localOffset = now.getTimezoneOffset();
    const mdtTime = new Date(now.getTime() + (mdtOffset - localOffset) * 60 * 1000);

    const mdtHours = mdtTime.getUTCHours();
    const mdtMinutes = mdtTime.getUTCMinutes();
    const mdtDay = mdtTime.getUTCDay();

    const isActiveTime = mdtDay >= 1 && mdtDay <= 5 && ((mdtHours > 9 || (mdtHours === 9 && mdtMinutes >= 20)) && (mdtHours < 15 || (mdtHours === 15 && mdtMinutes <= 30)));

    const statusElement = document.getElementById('status');
    if (isActiveTime) {
        statusElement.textContent = 'Active (MDT)';
        statusElement.style.color = 'green';
    } else {
        statusElement.textContent = 'Inactive (MDT)';
        statusElement.style.color = 'red';
    }
});
