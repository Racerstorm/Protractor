let Home = function(){

    let firstNumber_field = element(by.model('first'));
    let secondNumber_field = element(by.model('second'));
    let goButton = element(by.xpath('//button[@id="gobutton"]'));


    this.get = function(url){
        browser.get(url);
    };

    this.enterFirstNumber = function(firstNumber){
         firstNumber_field.sendKeys(firstNumber);
    };

    this.enterSecondNumber = function(secondNumber){
        secondNumber_field.sendKeys(secondNumber);
   };

    this.clickGoButton = function(){
        goButton.click();
    }; 

    this.verifyResult = function(resultvalue){

        let result = element(by.cssContainingText('.ng-binding', resultvalue));
        expect(result.getText()).toEqual(resultvalue);
    };

     
     
};


module.exports = new Home;