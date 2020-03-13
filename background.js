browser.webRequest.onBeforeSendHeaders.addListener(
    details => {
        if (details.url.includes('commentary-tracks')) {
            details.requestHeaders = details.requestHeaders.filter(rh => rh.name !== 'X-CountryCode');
            details.requestHeaders.push({name: "X-CountryCode", value: "NL"});
        }
        return {requestHeaders: details.requestHeaders};
    },
    {urls: ['https://*.formula1.com/*']},
    ['blocking', 'requestHeaders'],
);
