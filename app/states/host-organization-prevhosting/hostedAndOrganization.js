/**
 * Created by ranwahle on 07/02/2016.
 */
export class PrevHostedAndOrganizationController{
    //@ngInject
    constructor(HostDetailsService, $state){
        this._hostDetailsService = HostDetailsService;
        this._$state = $state;
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

PrevHostedAndOrganizationController.$inject = ['HostDetailsService', '$state'];