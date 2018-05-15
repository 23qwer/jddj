import React, { Component } from 'react';
import './Home.css'
import { connect } from 'react-redux'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Carousel } from 'antd';


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            toplist: [],
            searchWord: '',
            imgUrl: '',
            titlelist: [],
            lunbotulist:[],
            imgnav1list:[],
            imgnav2list:[]
        }
    }
    render() {
        return (
            <div className="homecontainer">
                <nav className="nav">
                    <div className="leftnav">
                        <span>{this.props.locationData.address}</span>
                        <span></span>
                    </div>
                    <div className="rightnav">
                        <span></span>
                        <span></span>
                    </div>
                </nav>
                <div className="homeSecond">
                    <div className="searchdiv">
                        <span></span>
                        <span>{this.state.searchWord}</span>
                    </div>
                    <div className="aaa">
                        {this.state.toplist.map((item, index) => {
                            return <span key={index} className="titlespan">{item.recommendKey}</span>
                        })}
                    </div>
                    <img src={this.state.imgUrl} alt="111" />
                </div>
                <div className="middletitle">
                    {this.state.titlelist.map((item, index) => {
                        return <Link to="#" key={index} className="titlecell">
                            <img src={item.floorCellData.imgUrl} alt="" />
                            <p>{item.floorCellData.title}</p>
                        </Link>
                    })}
                </div>
                <div className="lunbotu">
                    <Carousel autoplay>
                        {this.state.lunbotulist.map((item, index) => {
                            return <Link to="#" key={index} className="lunbotucell"><img src={item.floorCellData.imgUrl} alt="11" /></Link>
                        })}
                    </Carousel>
                </div>
                <div className="imgnav1">
                    {this.state.imgnav1list.map((item,index)=>{
                        return <Link to="#" key={index} className="imgnav1cell">
                            <img src={item.floorCellData.imgUrl} alt=""/>
                        </Link>
                    })}
                </div>
                <div className="imgnav2">
                    {this.state.imgnav2list.map((item,index)=>{
                        return <Link to="#" key={index} className="imgnav2cell">
                            <p>{item.floorCellData.title}</p>
                            <p>{item.floorCellData.words}</p>
                            <img src={item.floorCellData.imgUrl} alt=""/>
                        </Link>
                    })}
                </div>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
            </div>
        )
    }
    componentDidMount() {
        var obj = {
            "address": this.props.locationData.address, "city": this.props.locationData.city, "longitude": this.props.locationData.longitude, "latitude": this.props.locationData.latitude, "coordType": "2", "h5From": "", "isglb": "", "currentPage": "", "storeId": "", "activityId": "", "isIndex": false, "previewDate": ""
        }
        var str = '_djrandom=15262966886611&functionId=indexh5/getIndex&body=' + JSON.stringify(obj) + '&jda=122270672.862478138.1496381737.1518694672.1526286610.4&platCode=H5&appVersion=5.3.0&appName=paidaojia&jdDevice=&signKey=QhvKBfN4AThfYl4xSsz6GcAwijapjaFG'
        axios.get('https://daojia.jd.com/client?' + str).then((res) => {
            console.log(res.data.result.data[4].data)
            this.setState({
                searchWord: res.data.result.config.searchWords,
                toplist: res.data.result.config.searchConfig.recommendKeyList.slice(0, 5),
                imgUrl: res.data.result.data[0].data[0].floorCellData.imgUrl,
                titlelist: res.data.result.data[1].data,
                lunbotulist:res.data.result.data[2].data,
                imgnav1list:res.data.result.data[3].data,
                imgnav2list:res.data.result.data[4].data
            })
        }).catch((err) => {
            console.log(err)
        })
    }
}
function getData(state) {
    return state
}
export default connect(getData)(Home)


