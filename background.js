browser.webRequest.onBeforeSendHeaders.addListener(
    (details) => {
        if (details.url.indexOf('https://f1tv.formula1.com/api/commentary-tracks') === 0) {
            delete details.requestHeaders['Cookie'];
        }
        return details.requestHeaders;
    },
    {urls: ['https://*.formula1.com/*']},
    ['blocking', 'requestHeaders']
);
