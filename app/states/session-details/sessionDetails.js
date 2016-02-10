/**
 * Created by ranwahle on 10/02/2016.
 */

export class SessionDetailsController{
    //@ngInject
    constructor(HostDetailsService, $log){
        this._hostDetailsService = HostDetailsService;
        this._$log = $log;
    }

    saveSessionDetails(){
        this._hostDetailsService.saveDetails({
            sessionLanguage: this.sessionLanguage,
            needHelpFindingTestamonialPeople: this.needHelpFindingTestamonialPeople,
            sessionType: this.sessionType,
            additionalDetails: this.additionalDetails
        }).then(() => {})
        .catch(err => this._$log.debug(err));
    }
}

SessionDetailsController.$inject = ['HostDetailsService', '$log'];