import {element, by} from 'protractor';

export class LoginPage  {

    constructor (browser) {
        this.browser = browser;
    }

    async login (email, password) {
        await element(by.css('[data-testid=royal_email]')).sendKeys(email);
        await element(by.css('[data-testid=royal_pass]')).sendKeys(password);

        await element(by.xpath("//*[@data-testid = 'royal_login_button']")).click();
    }

    async navigateLoginPage () {
        await this.browser.get('https://www.facebook.com/');
    }
};
