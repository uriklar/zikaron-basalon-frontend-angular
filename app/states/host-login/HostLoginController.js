/**
 * Created by ranwahle on 08/02/2016.
 */
export class HostLoginController{
    //@ngInject
    constructor(authService, $state, $log){
        this._authService = authService;
        this._$state = $state;
        this._$log = $log;
    }

    login(){
        var self = this;
        this._authService.signIn(this.email, this.password).then((response) => {
                self._$log.debug(response);
                self._$state.go('hostedAndOrganization');
            }
        ).catch((response) =>{
            self._$log.debug(response);
        });

    }
}

HostLoginController.$inject = ['authService','$state', '$log'];