/**
 * Created by ranwahle on 02/02/2016.
 */
//import {components} from './components';
import {AuthService} from '../services/auth-service';

 class RegisterComponent{

     constructor(authService, $log)
     {
         this._authService = authService;
         this._$log = $log;
     }

    register() {

        var self = this;
        this._authService.signUp(
            this.email, this.password, this.password2
        ).then(response =>
                self._$log.debug(response))
            .catch(response =>
                self._$log.debug(response)
            );
    }












}
RegisterComponent.$inject = ['authService', '$log'];

export default angular.module('zikaronBasalonFrontendAngular.components.registerComponent',[])
    .controller('RegisterController',['authService','$log', RegisterComponent]);