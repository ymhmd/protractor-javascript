const TestData = require('../resources/testData.json');

describe('Protractor Demo App', function() {

    beforeEach(async function() {
        browser.waitForAngularEnabled(false);
        await browser.driver.manage().window().maximize();
        await browser.get('https://www.facebook.com/');
    });

    it('test case 1', async function() {
        coreTest('3');
    });

    it('test case 2', async function() {
        coreTest('3');
    });

    it('test case 3', async function() {
        coreTest('3');
    });

    it('test case 4', async function() {
        coreTest('3');
    });

    async function coreTest(expectedValue) {
        await element(by.model('first')).sendKeys(1);
        await element(by.model('second')).sendKeys(2);
        await element(by.id('gobutton')).click();

        await expect(element(by.binding('latest')).getText()).toEqual(expectedValue);
    }

});
