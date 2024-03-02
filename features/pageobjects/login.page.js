const { $, expect } = require('@wdio/globals')
const Page = require('./page');

const element = {
    fieldUsername: $('#user-name'),
    fieldPassword: $('#password'),
    buttonLogin: $('#login-button'),
    errorLockedOutUser: (dynamicMessage) => $(`//h3[text()="${dynamicMessage}"]`)
}

class LoginPage extends Page {
    // NOTE: elements collection
    async login (username) {
        await element.fieldUsername.waitForDisplayed({ timeout: 2500 });
        await element.fieldUsername.setValue(username);
        await element.fieldPassword.setValue(process.env.PASSWORD_SAUCEDEMO);
        await element.buttonLogin.click();
    }
    async validateLockedOutUserError (dynamicMessage) {
        await element.errorLockedOutUser(dynamicMessage).waitForDisplayed({ timeout: 2500 });
        await expect(element.errorLockedOutUser(dynamicMessage)).toBeDisplayed()
    }
    async login (name) {
        await element.fieldUsername.waitForDisplayed({ timeout: 2500 });
        await element.fieldUsername.setValue(name);
        await element.fieldPassword.setValue(process.env.PASSWORD_SAUCEDEMO);
        await element.buttonLogin.click();
    }
    open () {
        return super.open('/'); // NOTE: will open https://www.saucedemo.com/
    }
}
module.exports = new LoginPage();