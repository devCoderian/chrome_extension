chrome.runtime.onMessage.addListener(
    function(message, callback) {
      if (message == "changeColor"){
        chrome.tabs.executeScript({
          code: 'document.body.style.backgroundColor="orange"'
        });
      }
   });
   

//파일로 injection
chrome.runtime.onMessage.addListener(
    function(message, callback) {
      if (message == "runContentScript"){
        chrome.tabs.executeScript({
          file: 'contentScript.js'
        });
      }
   });

   console.log("안녕");