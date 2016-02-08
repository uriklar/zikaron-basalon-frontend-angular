/**
 * Created by ranwahle on 07/02/2016.
 */
export class HostedAndOrganizationController{
    //@ngInject
    constructor(HostDetailsService){
        this._hostDetailsService = HostDetailsService;
    }

    saveAdditionalDetails()
    {
        this._hostDetailsService.saveDetails({
            phone: this.phoneNumber,
            hostedBefore: this.hostedBefore,
            representingOrganization : this.representingOrganization,
            organizationName :this.organizationName,
            organizationRole: this.organizationRole

        });
    }
}

HostedAndOrganizationController.$inject = ['HostDetailsService'];