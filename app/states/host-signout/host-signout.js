
export class SignoutController{
    //@ngInject
    constructor(authService, $state){
        authService.signOut();
        $state.go('host-signup');
    }
}

SignoutController.$inject = ['authService','$state'];