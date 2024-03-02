const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page.js');
const HomePage = require('../pageobjects/home.page.js');

Given(/^Meiman is on the login page$/, async () => {
    await LoginPage.open()
})

When(/^Meiman login with "(.*)" credential$/, async (username) => {
    await LoginPage.login(username)
})

Then(/^Meiman should see home page$/, async() => {
    await HomePage.validateHomePage()
})

Then(/^Meiman should see error "(.*)"$/, async (dynamicMessage) => {
    await LoginPage.validateLockedOutUserError(dynamicMessage)
}) 

When(/^Meiman login with "(.*)"$/, async (name) => {
    await LoginPage.login(name)
})