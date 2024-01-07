import  BasePage  from "./base.page.js";

class LoginPage extends BasePage {
    open() {
        return super.open("login")
    }
    get pause() {
        //The value of ms can be changed for preference
        return 5000
    }
    get username() {
        return $('#username')
    }
    get password() {
        return $('#password')
    }
    get loginBtn() {
        return $('//button[@type="submit"]')
    }
    get loginMessage() {
        return $('#flash')
    }
    get logoutBtn() {
        return $('//i[text()=" Logout"]')
    }
}

export default new LoginPage