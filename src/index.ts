import {Company} from './User';
import {CustomMap} from './CustomMap';

const company =  new Company();
const customers = new CustomMap('map');

customers.addCompanyMarker(company);
// const company = new Company();
// console.log(company);


//  new google.maps.Map(document.getElementById('map'), {
//    zoom: 1,
//   center: {
//     lat: 0,
//    lng: 0
//   }
// })

// const map = new google.maps.Map(document.getElementById('map'), {
//  zoom: 1,
//  center: {
//   lat: 0,
//   lng: 0
//  }
// })

