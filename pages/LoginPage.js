const { I } = inject();

module.exports = {
  fields: {
    email: "//*[@id='txtUserName']",
    password: "//*[@id='txtPassword']",
  },
  buttons: {
    login: "btnLogin",
    emailSelect: "btnEmailSelect",
  },
  fillTheEmailField(email) {
    I.fillField(this.fields.email, email);
  },
  fillThePasswordField(password) {
    I.fillField(this.fields.password, password);
  },
  clickOnLoginButton() {
    I.forceClick(this.buttons.login);
  },
  clickOnEmailSelectButton() {
    I.forceClick(this.buttons.emailSelect);
  },
};
