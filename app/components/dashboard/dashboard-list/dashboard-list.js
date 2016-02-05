export function dashboardList() {
  return {
    restrict: 'E',
    templateUrl: 'components/dashboard/dashboard-list/dashboard-list.html',
    controller: class DashboardListController {
      constructor() {
        this.keys = [
          { val: 'name', name: 'שם' },
          { val: 'email', name: 'מייל' },
          { val: 'phone', name: 'טלפון' },
          { val: 'address', name: 'כתובת' },
          { val: 'created_at', name: 'נרשם בתאריך' },
          { val: 'survivor_needed', name: 'צריך איש עדות' },
          { val: 'has_survivor', name: 'צוות לאיש עדות' },
          { val: 'public', name: 'ערב פתוח' }
        ];
        this.data = [
          {
            name: 'אורי קלר',
            email: 'uriklar@gmail.com',
            phone: '0547301130',
            address: 'Mivtza Dani 7, Rosh HaAyin',
            created_at: '15.2.2006',
            survivor_needed: true,
            has_survivor: false,
            public: true
          }
        ];
      }
    },
    controllerAs: 'DashboardList',
    bindToController: true
  };
}