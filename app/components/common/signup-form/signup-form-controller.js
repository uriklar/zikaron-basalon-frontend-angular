class SignupFormController {
  constructor(authService, $location) {
    this._authService = authService;
    this.$location = $location;

    this.form = {};
    this.error = null;
  }

  signup() {
    this._authService.signUp(this.form.email,
                             this.form.password,
                             this.form.passwordConfirmation)
      .then(() => this.$location.path('new-host'))
      .catch(() => { this.error = true; });

  }
}

SignupFormController.$inject = ['authService', '$location'];

export default SignupFormController;