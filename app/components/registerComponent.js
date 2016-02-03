/**
 * Created by ranwahle on 02/02/2016.
 */
import {components} from './components';
import {AuthService} from '../services/auth-service';

 class RegisterComponent{

     constructor(authService)
     {
         this._authService = authService;
     }

    register() {

        this._authService.signUp(
            this.email, this.password, this.password2
        ).then(response =>
                console.log(response))
            .catch(response =>
                console.log(response)
            );
    }










}

export default angular.module('zikaronBasalonFrontendAngular.components.registerComponent',[])
    .controller('RegisterController',['authService', RegisterComponent]);