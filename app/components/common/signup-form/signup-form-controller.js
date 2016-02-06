class SignupFormController {
  constructor(authService) {
    this._authService = authService;
    this.form = {};
  }

  signup() {
    // TODO: validate email and password confirmation

    this._authService.signUp(this.form.email,
                             this.form.password,
                             this.form.passwordConfirmation)
        .then(response => console.log(response));
  }
}

SignupFormController.$inject = ['authService'];

export default SignupFormController;