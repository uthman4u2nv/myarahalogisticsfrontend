// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  authurl:'https://myarahalogisticsapi-production.up.railway.app/auth/login',
  dashboardurl:'https://myarahalogisticsapi-production.up.railway.app/dashboard',
  /**USERS MODULE */
  usersurl:'https://myarahalogisticsapi-production.up.railway.app/users/displaydetails',
  changeuserstatusurl:'https://myarahalogisticsapi-production.up.railway.app/users/changestatus',
  checkemailurl:'https://myarahalogisticsapi-production.up.railway.app/users/checkuser',
  insertuserurl:'https://myarahalogisticsapi-production.up.railway.app/users/insertuser',
  changeroleurl:'https://myarahalogisticsapi-production.up.railway.app/users/changerole',
  changepasswordurl:'https://myarahalogisticsapi-production.up.railway.app/users/updatepswd',
  profileupdateurl:'https://myarahalogisticsapi-production.up.railway.app/users/updateprofile',

  /**VEHICLE MODULE */
  vehicleurl:'https://myarahalogisticsapi-production.up.railway.app/vehicle/',
  insertvehicleurl:'https://myarahalogisticsapi-production.up.railway.app/vehicle/insertvehicle',
  updatevehicleurl:'https://myarahalogisticsapi-production.up.railway.app/vehicle/edit',

  /**PRODUCTS MODULE */
  allproductsurl:'https://myarahalogisticsapi-production.up.railway.app/products/',
  insertproductsurl:'https://myarahalogisticsapi-production.up.railway.app/products/insertproduct',
  updateproducturl:'https://myarahalogisticsapi-production.up.railway.app/products/updateproduct',

  /**CUSTOMERS MODULE */
  allcustomersurl:'https://myarahalogisticsapi-production.up.railway.app/customers/',
  insertcustomersurl:'https://myarahalogisticsapi-production.up.railway.app/customers/insertcustomer',
  updatecustomersurl:'https://myarahalogisticsapi-production.up.railway.app/customers/updatecustomer',

  /***ORDERS */
  ordersurl:'https://myarahalogisticsapi-production.up.railway.app/orders/',
  orderitemurl:'https://myarahalogisticsapi-production.up.railway.app/orders/orderitems',
  orderstatusurl:'https://myarahalogisticsapi-production.up.railway.app/orders/getstatus',
  updatestatusurl:'https://myarahalogisticsapi-production.up.railway.app/orders/updatestatus'

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
