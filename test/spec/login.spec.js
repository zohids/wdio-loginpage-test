import LoginPage from '../page/login.page.js';

describe('Login page testing', () => {
    it('Wrong login (negative testing)', async () => {
        await LoginPage.open()
        await LoginPage.username.setValue('username1')
        await LoginPage.password.setValue('SuperSecretPassword!')
        await LoginPage.loginBtn.click()
        expect(LoginPage.warningMessage).toHaveText('Your username is invalid!')

    });
    it('Wrong password (negative testing)', async () => {
        await LoginPage.open()
        await LoginPage.username.setValue('tomsmith')
        await LoginPage.password.setValue('SuperSecretPassword!!')
        await LoginPage.loginBtn.click()
        expect(LoginPage.loginMessage).toHaveText('Your password is invalid!')

    });
    it('Wrong username and password (negative testing)', async () => {
        await LoginPage.open()
        await LoginPage.username.setValue('username')
        await LoginPage.password.setValue('wrongPassword!!')
        await LoginPage.loginBtn.click()
        expect(LoginPage.loginMessage).toHaveText('Your username is invalid!')

    });
    it('Correct login credentials (positive testing)', async () => {
        await LoginPage.open()
        await LoginPage.username.setValue('tomsmith')
        await LoginPage.password.setValue('SuperSecretPassword!')
        await LoginPage.loginBtn.click()
        expect(LoginPage.loginMessage).toHaveText('You logged into a secure area!')
        expect(LoginPage.logoutBtn).toExist()
    });

});