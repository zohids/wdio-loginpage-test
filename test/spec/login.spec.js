import LoginPage from '../page/login.page.js';

describe('Login page testing', () => {
    it('Wrong login (negative testing)', async () => {
        await LoginPage.open()
        await LoginPage.username.setValue('username1')
        await browser.pause(LoginPage.pause)
        await LoginPage.password.setValue('SuperSecretPassword!')
        await browser.pause(LoginPage.pause)
        await LoginPage.loginBtn.click()
        expect(LoginPage.warningMessage).toHaveText('Your username is invalid!')
        await browser.pause(LoginPage.pause)

    });
    it('Wrong password (negative testing)', async () => {
        await LoginPage.open()
        await LoginPage.username.setValue('tomsmith')
        await browser.pause(LoginPage.pause)
        await LoginPage.password.setValue('SuperSecretPassword!!')
        await browser.pause(LoginPage.pause)
        await LoginPage.loginBtn.click()
        expect(LoginPage.loginMessage).toHaveText('Your password is invalid!')
        await browser.pause(LoginPage.pause)

    });
    it('Wrong username and password (negative testing)', async () => {
        await LoginPage.open()
        await LoginPage.username.setValue('username')
        await browser.pause(LoginPage.pause)
        await LoginPage.password.setValue('wrongPassword!!')
        await browser.pause(LoginPage.pause)
        await LoginPage.loginBtn.click()
        expect(LoginPage.loginMessage).toHaveText('Your username is invalid!')
        await browser.pause(LoginPage.pause)

    });
    it('Correct login credentials (positive testing)', async () => {
        await LoginPage.open()
        await LoginPage.username.setValue('tomsmith')
        await browser.pause(LoginPage.pause)
        await LoginPage.password.setValue('SuperSecretPassword!')
        await browser.pause(LoginPage.pause)
        await LoginPage.loginBtn.click()
        expect(LoginPage.loginMessage).toHaveText('You logged into a secure area!')
        expect(LoginPage.logoutBtn).toExist()
        await browser.pause(LoginPage.pause)
    });

});