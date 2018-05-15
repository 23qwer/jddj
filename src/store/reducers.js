import { GETLOCATION } from './actions'

import { combineReducers } from 'redux'

// var obj = {}
// var BMap = window.BMap
// var geolocation = new BMap.Geolocation();
// var geoc = new BMap.Geocoder();
// geolocation.getCurrentPosition(function (r) {
//     var pt = r.point;
//     obj.longitude =  r.point.lng
//     obj.latitude = r.point.lat
//     geoc.getLocation(pt, function (rs) {
//         var addComp = rs.addressComponents;
//         obj.address = addComp.district + addComp.street + addComp.streetNumber
//         obj.city = addComp.city
//         console.log(obj)
//     });
// }, { enableHighAccuracy: true })

function locationData(state = {longitude: 118.77807441, latitude: 32.0572355, address: "广州路189", city: "南京市"}, action) {
    switch (action.type) {
        case GETLOCATION:
            return  action.value
        default:
            return state
    }
}

// 最后导出combineReducers函数
export default combineReducers({ locationData })