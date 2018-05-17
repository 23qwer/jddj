import React, { Component } from 'react';
import axios from 'axios'
import './Classify.css'
import $ from 'jquery'

class Classify extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showindex: 5,
            datalist: []
        }
    }
    render() {
        return (
            <div className="classifycontainer">
                <div className="classifysearch">
                    <span>搜索附近的商家、商品</span>
                </div>
                <ul>
                    {this.state.datalist.map((item, index) => {
                        return <li key={index}>
                            <div className="classifytitle" onClick={this.change.bind(this)}>{item.name}</div>
                            <div className="classifydetail">
                                {item.groupList.map((i, indexs) => {
                                    return <div key={i.catId} className={this.state.showindex!=index?'cellhide':''}>
                                        <div>
                                            <h3>{i.name}</h3>
                                        </div>
                                    </div>
                                })}
                            </div>
                        </li>
                    })}
                </ul>
            </div>
        );
    }
    change(event){
        this.setState({
            showindex:$(event.target).parent().index()
        })
    }
    componentDidMount() {
        axios.get('https://daojia.jd.com/client?_djrandom=15265202308202&functionId=homeSearch/tabCateList&body={"longitude":118.7715,"latitude":32.05121,"cityId":904}&appVersion=5.3.0&appName=paidaojia&platCode=H5&jdDevice=&signKey=0b2dae2a05182cd8404d31ca00cd2656&jda=122270672.862478138.1496381737.1526286610.1526305243.5').then((res) => {
            console.log(res.data.result.firstTabCate)
            this.setState({
                datalist: res.data.result.firstTabCate
            })
        }).catch((err) => {
            console.log(err)
        })
    }

}

export default Classify;


