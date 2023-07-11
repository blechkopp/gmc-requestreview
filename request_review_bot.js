function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var urls = document.getElementsByTagName('a');
var counterAll = 0;
var counterSuccess = 0;

for (var i = 0; i < urls.length; i++) {
  if(urls[i].getAttribute('href').includes('mc/items/details')) {
    w = null;
    xpath = null;
    selectedNodeElements = null;
    currentNode = null;
    
    counterAll++;
    
    try {
      w = window.open(urls[i].getAttribute('href'), 'NewTab', '_blank');
    } catch (error) { console.log ( 'window.open-Error '+error); }
    
    w.clickElem = () => {
    const xpath = "//*[@id='products-root']/div/details-view/section[1]/issues/tableview/div/ess-table/ess-particle-table/div[1]/div/div[2]/div[2]/ess-cell[3]/product-issue-actions/div/reapproval-status/div";
    const selectedNodeElements = w.document.evaluate(xpath, w.document, null, XPathResult.ANY_TYPE, null);
    let currentNode = selectedNodeElements.iterateNext();
    if (typeof currentNode !== "undefined") {
      while (currentNode) {
        console.log('Click 1');
        currentNode.click();
        break;
        }
      }
    }
    setTimeout(w.clickElem, 16000);
    
    w.clickElem = () => {
    const xpath = "//*[starts-with(@id, 'idgen-PRODUCTS')]/div/div[1]/div/issue-actions-toolbelt/div/issue-action/div/button/span[2]";
    const selectedNodeElements = w.document.evaluate(xpath, w.document, null, XPathResult.ANY_TYPE, null);
    let currentNode = selectedNodeElements.iterateNext();
    if (typeof currentNode !== "undefined") {
        while (currentNode) {
        console.log('Click 2');
        currentNode.click();
        break;
        }
      }
    }
    setTimeout(w.clickElem, 18000);
    
    w.clickElem = () => {
    const xpath = "//*[@id='PRODUCTS-overlay-container']/div[2]/div/appeal-dialog/minerva-dialog/material-dialog/focus-trap/div[2]/div/footer/div/button-set/div/button[2]/span[2]";
    const selectedNodeElements = w.document.evaluate(xpath, w.document, null, XPathResult.ANY_TYPE, null);
    let currentNode = selectedNodeElements.iterateNext();
    if (typeof currentNode !== "undefined") {
      while (currentNode) {
        console.log('Click 3');
        currentNode.click();
        counterSuccess++;
        break;
        }
      }
    }
    setTimeout(w.clickElem, 25000);
    
    console.log('start sleep');
    await sleep(25000);
    console.log(counterSuccess+' / '+counterAll+' succeeded');
    console.log('stop sleep');
  }
}

console.log('finish');
