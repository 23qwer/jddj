import React, { Component } from 'react';
import './Home.css'
import { connect } from 'react-redux'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Carousel } from 'antd';
import $ from 'jquery'


var index
var isget = false
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            toplist: [],
            searchWord: '',
            imgUrl: '',
            titlelist: [],
            lunbotulist: [],
            imgnav1list: [],
            imgnav2list: [],
            xianshilist: [],
            appimg: '',
            lunbotu2list: [],
            dianpulist: [],
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
                    {this.state.imgnav1list.map((item, index) => {
                        return <Link to="#" key={index} className="imgnav1cell">
                            <img src={item.floorCellData.imgUrl} alt="" />
                        </Link>
                    })}
                </div>
                <div className="imgnav2">
                    {this.state.imgnav2list.map((item, index) => {
                        return <Link to="#" key={index} className="imgnav2cell">
                            <p>{item.floorCellData.title}</p>
                            <p>{item.floorCellData.words}</p>
                            <img src={item.floorCellData.imgUrl} alt="" />
                        </Link>
                    })}
                </div>
                <div className="xianshi">
                    <div className="xianshishow">
                        {this.state.xianshilist.map((item, index) => {
                            return <Link to="#" key={index} className="xianshishowcell">
                                <img src={item.floorCellData.grabSku.imageurl} alt="" />
                                <p>{item.floorCellData.grabSku.storeName}</p>
                                <h3>￥{item.floorCellData.grabSku.miaoShaPrice}</h3>
                                <del>￥{item.floorCellData.grabSku.price}</del>
                            </Link>
                        })}
                    </div>
                    <div className="xianshimore">
                        加载更多
                    </div>
                </div>
                <img className="appimg" src={this.state.appimg} alt="" />
                <div className="lunbotu2">
                    <Carousel autoplay>
                        {this.state.lunbotu2list.map((item, index) => {
                            return <Link to="#" key={index} ><img className="lunbotu2cell" src={item.floorCellData.imgUrl} alt="11" /></Link>
                        })}
                    </Carousel>
                </div>
                <h2>附近的商铺</h2>
                <div className="dianpu">
                    {this.state.dianpulist.map((item, index) => {
                        return <div className="dianpucell" key={index}>
                            <div><img src={item.floorCellData.imgUrl} alt="" /></div>
                            <div>
                                <h2>{item.floorCellData.name}</h2>
                                <div>
                                    <span className={item.floorCellData.storeStar - 1>=0?'star1 star0':(item.floorCellData.storeStar - 1 ===-0.25?'star2 star0':(item.floorCellData.storeStar - 1 ===-0.5?'star3 star0':(item.floorCellData.storeStar - 1===-0.75?'star4 star0':'star5 star0')))}></span>
                                    <span className={item.floorCellData.storeStar - 2>=0?'star1 star0':(item.floorCellData.storeStar - 2 ===-0.25?'star2 star0':(item.floorCellData.storeStar - 2 ===-0.5?'star3 star0':(item.floorCellData.storeStar - 2===-0.75?'star4 star0':'star5 star0')))}></span>
                                    <span className={item.floorCellData.storeStar - 3>=0?'star1 star0':(item.floorCellData.storeStar - 3 ===-0.25?'star2 star0':(item.floorCellData.storeStar - 3 ===-0.5?'star3 star0':(item.floorCellData.storeStar - 3===-0.75?'star4 star0':'star5 star0')))}></span>
                                    <span className={item.floorCellData.storeStar - 4>=0?'star1 star0':(item.floorCellData.storeStar - 4 ===-0.25?'star2 star0':(item.floorCellData.storeStar - 4 ===-0.5?'star3 star0':(item.floorCellData.storeStar - 4===-0.75?'star4 star0':'star5 star0')))}></span>
                                    <span className={item.floorCellData.storeStar - 5>=0?'star1 star0':(item.floorCellData.storeStar - 5 ===-0.25?'star2 star0':(item.floorCellData.storeStar - 5 ===-0.5?'star3 star0':(item.floorCellData.storeStar - 5===-0.75?'star4 star0':'star5 star0')))}></span>
                                    <span>{item.floorCellData.monthSale}</span>
                                    <span>{item.floorCellData.storeStar}</span>
                                </div>
                                <div>{item.floorCellData.freightWords}</div>
                                <div className="activities">
                                    {item.floorCellData.tags.map((iten,index)=>{
                                        return <section key={index}>
                                            {iten.words}
                                        </section>
                                    })}
                                    <span className="spannav" onClick={this.changeshow.bind(this)}></span>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        )
    }
    changeshow(event){
        console.log($(event.target).parent())
        $(event.target).toggle('spannav')
        $(event.target).toggle('spannav1')
    }
    componentDidMount() {
        // 获取首页数据(不含店铺信息)
        var obj = {
            "address": this.props.locationData.address, "city": this.props.locationData.city, "longitude": this.props.locationData.longitude, "latitude": this.props.locationData.latitude, "coordType": "2", "h5From": "", "isglb": "", "currentPage": "", "storeId": "", "activityId": "", "isIndex": false, "previewDate": ""
        }
        var str = '_djrandom=15262966886611&functionId=indexh5/getIndex&body=' + JSON.stringify(obj) + '&jda=122270672.862478138.1496381737.1518694672.1526286610.4&platCode=H5&appVersion=5.3.0&appName=paidaojia&jdDevice=&signKey=QhvKBfN4AThfYl4xSsz6GcAwijapjaFG'
        axios.get('https://daojia.jd.com/client?' + str).then((res) => {
            this.setState({
                searchWord: res.data.result.config.searchWords,
                toplist: res.data.result.config.searchConfig.recommendKeyList.slice(0, 5),
                imgUrl: res.data.result.data[0].data[0].floorCellData.imgUrl,
                titlelist: res.data.result.data[1].data,
                lunbotulist: res.data.result.data[2].data,
                imgnav1list: res.data.result.data[3].data,
                imgnav2list: res.data.result.data[4].data,
                xianshilist: res.data.result.data[5].data,
                appimg: res.data.result.data[6].data[0].floorCellData.imgUrl,
                lunbotu2list: res.data.result.data[7].data
            })
        }).catch((err) => {
            console.log(err)
        })
        document.documentElement.scrollTop = 0
        index = 0
        this.getdianpu()
        $(window).bind('scroll', function () {
            var top = document.documentElement.scrollTop
            var max = document.documentElement.scrollHeight - document.documentElement.clientHeight
            if (top === max) {
                this.getdianpu()
            }
        }.bind(this))
    }
    getdianpu() {
        index++
        var obj = { "channelId": "", "city": this.props.locationData.city, "longitude": this.props.locationData.longitude, "latitude": this.props.locationData.latitude, "currentPage": index, "pageSize": 10, "areaCode": 904, "coordType": "2", "platform": "1" }
        if (isget === false) {
            isget = true
            axios.get(' https://daojia.jd.com/client?_djrandom=15264430419434&functionId=zone/recommendStoreList&body=' + JSON.stringify(obj) + '&platCode=H5&appVersion=5.3.0&appName=paidaojia&jdDevice=&signKey=d4dc20a163a33239974c59aa4ec5e65b&jda=122270672.862478138.1496381737.1526286610.1526305243.5').then((res) => {
                console.log(res.data.result.data.data)
                isget = false
                this.setState((preState) => {
                    return {
                        dianpulist: preState.dianpulist.concat(res.data.result.data.data)
                    }
                })
            }).catch((err) => {
                console.log(err)
            })
        }

    }
}
function getData(state) {
    return state
}
export default connect(getData)(Home)


