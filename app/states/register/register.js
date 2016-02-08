/**
 * Created by ranwahle on 02/02/2016.
 */
//import {components} from './components';
//import {AuthService} from '../../services/auth-service';

 export class RegisterController{

     // @ngInject
     constructor(authService, $log, $state)
     {
         this._authService = authService;
         this._$log = $log;
         this._$state = $state;
     }

    register() {

        var self = this;
        this._authService.signUp(
            this.email, this.password, this.password2
        ).then(response => {
                self._$log.debug(response);
                self._$state.$go('hostedAndOrganization');
            })
            .catch(response =>
                self._$log.debug(response)
            );
    }

}

RegisterController.$inject =  ['authService','$log', '$state'];

