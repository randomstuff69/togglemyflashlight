document.getElementById('toggleFlashlight').addEventListener('click', function() {
    // Replace 'YOUR_WEBHOOK_URL' with your actual webhook URL
    const webhookUrl = 'https://trigger.macrodroid.com/28f44fb0-f273-4344-b602-48a91a3557f1/flashlight';

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
        fetch('https://timeapi.io/api/TimeZone/zone?timeZone=MDT')
            .then(response => response.json())
            .then(data => {
                const now = new Date(data.currentLocalTime);
                const day = now.getDay();
                const hours = now.getHours();
                const minutes = now.getMinutes();

                const isActiveTime = day >= 1 && day <= 5 && ((hours > 9 || (hours === 9 && minutes >= 20)) && (hours < 15 || (hours === 15 && minutes <= 30)));

                const statusElement = document.getElementById('status');
                if (isActiveTime) {
                    statusElement.textContent = 'Active (MDT)';
                    statusElement.style.color = 'green';
                } else {
                    statusElement.textContent = 'Inactive (MDT)';
                    statusElement.style.color = 'red';
                }
            })
            .catch(error => {
                console.error('There was a problem fetching the time:', error);
            });
    }

    // Update status immediately and then every minute
    updateStatus();
    setInterval(updateStatus, 60000); // 60000 milliseconds = 1 minute
});
