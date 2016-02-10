/**
 * Created by ranwahle on 07/02/2016.
 */
class HostDetailsService{

    //@ngInject
    constructor($http){
        this._$http = $http;
    }

    saveDetails(hostDetails){

        var promise = new Promise(
            function(resolve, reject)
            {
                try {
                    var detailsFromStorageString = localStorage.getItem('hostDetails');
                    var detailsFromStorage = detailsFromStorageString ? JSON.parse(detailsFromStorageString) : {};

                    for (var key in hostDetails) {
                        detailsFromStorage[key] = hostDetails[key];
                    }

                    localStorage.setItem('hostDetails', JSON.stringify(detailsFromStorage));
                    resolve();
                }
                catch(err){
                    reject(err);
                }
            }
        );

        return promise;

    }

}


HostDetailsService.$inkect = ['$http'];

export default HostDetailsService;