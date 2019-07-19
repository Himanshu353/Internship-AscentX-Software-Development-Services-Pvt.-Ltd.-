/*chrome.runtime.onMessage.addListener(function(response,sender,sendResponse){
	alert(response);
});*/
/*import webdriver from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';
import chromedriver from 'chromedriver';*/
//require("chromedriver");
/*const { Builder, By } = require("selenium-webdriver");
var driver = new Builder().forBrowser('chrome').build();*/
chrome.runtime.onMessageExternal.addListener((message, sender, sendResponse) => {
    if (message.action === "execute" && message.command && message.command.command === "newCommand") {
        //window.addEventListener("load",function() { changeBackground('red'); });
	  sendResponse(`driver.findElement(document.getElementById('ocv_PageNameDisplay')).then((element) => {alert("I got the element !!")});`);
	  alert(func());
	  /*var src="NewLoan?action=loanentryscreen";

	var iframes[] = document.getElementsByTagName("iframe");

      for (var frame of iframes) {

          if (frame.getAttribute("src").trim().includes(src)) {
        	  switchTo().frame(frame);
              break;
          }
      }*/
	  return sendResponse(true); // I've finished execution
    }
    if (message.event === "playbackStarted") {
      console.log("IDE notified me a playback was started"); // Responding to events is optional
    }
	return sendResponse(true);
	//return sendResponse(`driver.findElement(document.getElementById('ocv_PageNameDisplay')).then((element) => {alert("I got the element !!")});`);
});
function func()
{
    //alert("That is my logic");
    var src="NewLoan?action=loanentryscreen";
	alert("Step 1");
	//var nodelist = document.querySelectorAll("iframe");
	//alert("nodeList is " + nodeList);
	//setTimeout(function(){         //Async function
		var iArray = Array.from(document.querySelectorAll("div")); //Array.prototype.slice.call(nodelist);
		alert("iArray is " + iArray.length);
		//console.log("hey");
		for (var frame of iArray)
		  {
			  alert("Here we are");
			  if (frame.getAttribute("src").nodeValue.includes(src))
			  {
				  switchTo().frame(frame);
				  break;
			  }
		  }
	//}, 1000);
    
	  /*var src="NewLoan?action=loanentryscreen";
	  var x = document.getElementById("ocv_Nav-Trading-Menu-LoanEntry-Label");
	  atts=x.attributes;
	  n=atts.length;
	  for(var i=0;i<n;i++)
	  {
		  if((atts[i].nodeValue).includes(src))
		  {
			  alert("If comes up yeah");
			  driver.switchTo().frame(atts[i].nodeValue);
		  }
	  }*/
	  return 5;
	  /*var id = document.getElementById('ocv_PageNameDisplay').textContent;
	  alert(id);*/
}