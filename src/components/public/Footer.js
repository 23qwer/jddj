import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Footer.css';
import $ from 'jquery'

class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showindex: '1'
    }
  }
  render() {
    return (
      <div className="footer">
        <Link to="/home">
          <div className="adiv" data-index='1' >
            <span onClick={this.change.bind(this)} className={this.state.showindex!=='1'?'footimg12 footimg1':'footimg11 footimg1'}></span>
            <span onClick={this.change.bind(this)} className={this.state.showindex==='1'?'cc':'cd'}>首页</span>
          </div>
        </Link>
        <Link to="/classify">
          <div className="adiv" data-index='2' >
            <span onClick={this.change.bind(this)} className={this.state.showindex!=='2'?'footimg22 footimg2':'footimg21 footimg2'}></span>
            <span onClick={this.change.bind(this)} className={this.state.showindex==='2'?'cc':'cd'}>分类</span>
          </div>
        </Link>
        <Link to="/shoppingcurt">
          <div className="adiv" data-index='3' >
            <span onClick={this.change.bind(this)} className={this.state.showindex!=='3'?'footimg32 footimg3':'footimg31 footimg3'}></span>
            <span onClick={this.change.bind(this)} className={this.state.showindex==='3'?'cc':'cd'}>购物车</span>
          </div>
        </Link>
        <Link to="/order">
          <div className="adiv" data-index='4' >
            <span onClick={this.change.bind(this)} className={this.state.showindex!=='4'?'footimg42 footimg4':'footimg41 footimg4'}></span>
            <span onClick={this.change.bind(this)} className={this.state.showindex==='4'?'cc':'cd'}>订单</span>
          </div>
        </Link>
        <Link to="/me">
          <div className="adiv" data-index='5' >
            <span onClick={this.change.bind(this)} className={this.state.showindex!=='5'?'footimg52 footimg5':'footimg51 footimg5'}></span>
            <span onClick={this.change.bind(this)} className={this.state.showindex==='5'?'cc':'cd'}>我的</span>
          </div>
        </Link>
      </div>
    );
  }
  change(event) {
    this.setState({
      showindex: $(event.target).parent().attr("data-index")
    })
  }
}

export default Footer;


