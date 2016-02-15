/**
 * Created by ranwahle on 07/02/2016.
 */
export class PrevHostedAndOrganizationController{
    //@ngInject
    constructor(authService, HostDetailsService, $state){
        this._hostDetailsService = HostDetailsService;
        this._$state = $state;

        if (!authService.signedIn())
        {
            $state.go('host-signup');
        }
    }

    saveAdditionalDetails()
    {
        var self = this;
        this._hostDetailsService.saveDetails({
            phone: this.phoneNumber,
            hostedBefore: this.hostedBefore,
            representingOrganization : this.representingOrganization,
            organizationName :this.organizationName,
            organizationRole: this.organizationRole

        }).then(function(){
            self._$state.go('sessionDetails');
        });
    }
}

PrevHostedAndOrganizationController.$inject = ['authService','HostDetailsService', '$state'];