import controller from 'components/common/signup-form/signup-form-controller';
import 'components/common/signup-form/styles.scss';

export function signupForm() {
  return {
    restrict: 'E',
    templateUrl: 'components/common/signup-form/signup-form.html',
    controller,
    controllerAs: 'SignupForm'
  };
}