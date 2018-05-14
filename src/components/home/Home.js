import React, { Component } from 'react';
import './Home.css'
import axios from 'axios'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {}
        }
    }
    render() {
        return (
            <div>

            </div>
        )
    }
    componentDidMount() {
        var that = this
        var BMap = window.BMap
        var geolocation = new BMap.Geolocation();
        var geoc = new BMap.Geocoder();
        geolocation.getCurrentPosition(function (r) {
            var pt = r.point;
            geoc.getLocation(pt, function (rs) {
                var addComp = rs.addressComponents;
                // console.log('您的位置：' + r.point.lng + ',' + r.point.lat);
                // console.log(addComp.province + addComp.city + addComp.district + addComp.street + addComp.streetNumber);
                var obj = {
                    "address": addComp.district + addComp.street + addComp.streetNumber, "city": addComp.city, "longitude": r.point.lng, "latitude": r.point.lat, "coordType": "2", "h5From": "", "isglb": "", "currentPage": "", "storeId": "", "activityId": "", "isIndex": false, "previewDate": ""
                }
                var str = '_djrandom=15262966886611&functionId=indexh5/getIndex&body=' + JSON.stringify(obj) + '&jda=122270672.862478138.1496381737.1518694672.1526286610.4&platCode=H5&appVersion=5.3.0&appName=paidaojia&jdDevice=&signKey=QhvKBfN4AThfYl4xSsz6GcAwijapjaFG'
                axios.get('https://daojia.jd.com/client?' + str).then((res) => {
                    console.log(res.data.result)
                    that.setState({
                        data: res.data.result
                    })
                }).catch((err) => {
                    console.log(err)
                })
            });
        }, { enableHighAccuracy: true })
    }
}