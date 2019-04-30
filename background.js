chrome.webRequest.onBeforeSendHeaders.addListener(
    function(details) {
        var headers = details.requestHeaders
        if (details.url === 'https://f1tv.formula1.com/api/commentary-tracks/?fields=name,uid,language_code,language_code_alt') {
            headers = []
        }
        return { requestHeaders: headers };
    },
    {urls: ['https://*.formula1.com/*']},
    ['blocking', 'requestHeaders']
);