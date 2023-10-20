/**Replace YOUR_PROXY_HOST, YOUR_PROXY_PORT, YOUR_USERNAME, YOUR_PASSWORD, 
 * and YOUR_NEW_REFERER_VALUE with the appropriate values you want to hard code. */

browser.proxy.onRequest.addListener(
    request => {
      // Modify proxy settings for HTTP requests
      if (request.url.startsWith("http")) {
        return {
          type: "http",
          host: "YOUR_PROXY_HOST",
          port: YOUR_PROXY_PORT,
          username: "YOUR_USERNAME",
          password: "YOUR_PASSWORD"
        };
      }
      return null;
    },
    { urls: ["<all_urls>"] }
  );
  
  // Modify HTTP headers
  browser.webRequest.onBeforeSendHeaders.addListener(
    details => {
      for (let i = 0; i < details.requestHeaders.length; i++) {
        if (details.requestHeaders[i].name.toLowerCase() === "referer") {
          // Modify the Referer header value
          details.requestHeaders[i].value = "YOUR_NEW_REFERER_VALUE";
          break;
        }
      }
      return { requestHeaders: details.requestHeaders };
    },
    { urls: ["<all_urls>"] },
    ["blocking", "requestHeaders"]
  );
  