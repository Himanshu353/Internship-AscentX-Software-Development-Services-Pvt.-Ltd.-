// For Play!

/*Selenium.prototype.doClearSession = function() {
    this.doDeleteAllVisibleCookies();
};

Selenium.prototype.getLastReceivedEmailBy = function(by) {
    var request = new Ajax.Request('/@tests/emails?by='+by, {
        method: 'get',
        asynchronous: false
    });
    if(request.transport.status == 200) {
        return request.transport.responseText;
    }
    return null;
}

Selenium.prototype.getCacheEntry = function(key) {
    var request = new Ajax.Request('/@tests/cache?key='+key, {
        method: 'get',
        asynchronous: false
    });
    if(request.transport.status == 200) {
        return request.transport.responseText;
    }
    return null;
}

Selenium.prototype.assertEquals = function(a, b) {
    if(a != b) {
        Assert.fail(a+' != '+b);
    }
};

Selenium.prototype.assertNotEquals = function(a, b) {
    if(a == b) {
        Assert.fail(a+' == '+b);
    }
};

Selenium.prototype.assertTextLike = function(a, b) {
    a = a.replace(/\n/g, '').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ')
    b = b.replace(/\n/g, '').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ')
    if(a == b) {
        Assert.fail(a+' == '+b);
    }
};

Selenium.prototype.assertPath = function(expectedPath) {
    var path = window.document.location.path;
    if(path == expectedPath) {
        Assert.fail('Expected path '+expectedPath+' but was '+path);
    }
};*/
//chrome.runtime.connect("mooikfkahbdckldjjndioackbalphokd");
//chrome.runtime.sendMessage("mooikfkahbdckldjjndioackbalphokd","It is Stonewain");
/*chrome.runtime.sendMessage("mooikfkahbdckldjjndioackbalphokd", {
  uri: "/register",
  verb: "post",
  payload: {
    name: "Selenium IDE",
    version: "1.0.0",
    commands: [
      {
        id: "newCommand",
        name: "new command"
      }
    ]
  }
}, null , function(response) {alert(response)});*/
/*chrome.runtime.sendMessage("mooikfkahbdckldjjndioackbalphokd", {
  action: "execute",
  command: {
    command: "commandId",
    target: id = "LoanEntryGrid-SearchForm-counterparty-input",
    value: "696 CANTOR"
  },
  options: {
    runId: "unique identifier",
    testId: "test identifier",
    frameId: "the frame context",
    tabId: "the tab context",
    windowId: "the window context"
  }
});*/
chrome.runtime.sendMessage("mooikfkahbdckldjjndioackbalphokd",{
  action: "execute",
  /*command: {
    command: "commandId",
    target: "target specified",
    value: "value specified"
  },
  options: {
    "runId": "12345",
    "testId": "1245",
    "frameId":"the frame context",
    "tabId": "the tab context",
    "windowId": "the window context"
  }*/
  uri: "/register",
  verb: "post",
  payload: {
    name: "Selenium IDE",
    version: "1.0.0",
    commands: [
      {
        id: "newCommand",
        name: "new command"
      }
    ]
  }
}).then(response => {
  alert("it worked!");
});

/*myFunc("NewLoan?action=loanentryscreen");
function myFunc(String src)
{
	var src="NewLoan?action=loanentryscreen";
	List<WebElement> iframes = driver.findElements(By.tagName("iframe"));

      for (WebElement frame : iframes) {

          if (frame.getAttribute("src").trim().contains(src)) {
        	  driver.switchTo().frame(frame);
              break;
          }
      }
}*/

/*{
   action: "abcd",
   command: {
    command: "new command",
    target: "target specified",
    value: "value specified"
  },
  options: {
    runId: "12345",
    testId: "1245",
    frameId: "the frame context",
    tabId: "the tab context",
    windowId: "the window context"
  }
}*/
//sendResponse(true);
//sendResponse(`driver.findElement().then((element) => {element.perform...});`);