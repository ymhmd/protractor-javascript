import {browser} from 'protractor';

export class BrowserFactory {

    async getBrowser (isAngularApp, implicitWait) {
        await browser.waitForAngularEnabled(isAngularApp);
        await browser.manage().window().maximize();
        await browser.manage().timeouts().implicitlyWait(implicitWait);
        return browser;
    }

}
