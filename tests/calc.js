let home = require("../Pages/Home");
describe('Demo Calc', function()
{
  it('Multiply', function() //Test case #1
  {
    home.get('http://juliemr.github.io/protractor-demo/'); 
    home.enterFirstNumber(5);
    home.enterSecondNumber(1);
    home.clickGoButton();
    browser.sleep(5000);
      home.verifyResult('5');
    /*
    browser.get('http://juliemr.github.io/protractor-demo/');    
    
    browser.sleep(2000);
    element(by.model('first')).sendKeys('5');
    element(by.model('second')).sendKeys('1');
    element(by.model('operator')).click();
    element(by.xpath('//option[@value="MULTIPLICATION"]')).click();
    element(by.xpath('//button[@id="gobutton"]')).click();
    let result = element(by.cssContainingText('.ng-binding', '5'))
    expect(result.getText()).toEqual('5'); */
    browser.sleep(000);
    
  });

  
});