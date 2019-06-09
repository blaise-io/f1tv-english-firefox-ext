browser.webRequest.onBeforeSendHeaders.addListener(
    (details) => {
        if (details.url.indexOf('https://f1tv.formula1.com/api/commentary-tracks') === 0) {
            details.requestHeaders.forEach(function (header) {
                if (header.name.toLowerCase() == "x-countrycode") {
                    header.value = "";
                }
            });
        }
        return { requestHeaders: details.requestHeaders };
    },
    { urls: ['https://*.formula1.com/*'] },
    ['blocking', 'requestHeaders']
);
