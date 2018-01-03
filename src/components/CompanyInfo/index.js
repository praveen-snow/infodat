/* src/components/PaymentPage */
import React from 'react';
import ss from './styles.scss';
import PureRenderMixin  from 'react-addons-pure-render-mixin';

let industryList = ['Supply Chain','Procurement','Manufacturing','Information Technology','Finance','Human Resources','Marketing'];

let revenueList = ['90K-100K','100K-200K','300K-400K'];

let employeesizeList = ['1-100','100-200','100-300','300+'];

export default React.createClass({
mixins: [PureRenderMixin],
getInitialState() {
    return {
		industryList: industryList,
		revenueList: revenueList,
        employeesizeList : employeesizeList,
		mouserHover:false
    }
},
componentWillMount() {
    ss.use();
},
componentWillUnmount() {
    ss.unuse();
},
goToPersonalInfoPage(){
    this.props.goToPersonalInfoPage();
},
selectIndustryList(e){
    let value = e.currentTarget.dataset.id;
    this.setState({jFunction1:value,showMenu1:false,jFunctionError1:false});
},
selectRevenueList(e){
    let value = e.currentTarget.dataset.id;
    this.setState({jFunction2:value,showMenu2:false,jFunctionError2:false});
},
selectEmployeesizeList(e){
    let value = e.currentTarget.dataset.id;
    this.setState({jFunction3:value,showMenu3:false,jFunctionError3:false});
},
showMenu1(){
    this.setState({showMenu1:!this.state.showMenu1});
},
showMenu2(){
    this.setState({showMenu2:!this.state.showMenu2});
},
showMenu3(){
    this.setState({showMenu3:!this.state.showMenu3});
},
createList1(){
    let arr = [];
    let industryList = this.state.industryList;
    for(let list1 in industryList){
      arr.push(<li key={list1} data-id={industryList[list1]} onClick={this.selectIndustryList}>
      <a>{industryList[list1]}</a>
    </li>);
    }
    return arr;
},
createList2(){
    let arr = [];
    let revenueList = this.state.revenueList;
    for(let list2 in revenueList){
      arr.push(<li key={list2} data-id={revenueList[list2]} onClick={this.selectRevenueList}>
      <a>{revenueList[list2]}</a>
    </li>);
    }
    return arr;
},    
createList3(){
    let arr = [];
    let employeesizeList = this.state.employeesizeList;
    for(let list3 in employeesizeList){
      arr.push(<li key={list3} data-id={employeesizeList[list3]} onClick={this.selectEmployeesizeList}>
      <a>{employeesizeList[list3]}</a>
    </li>);
    }
    return arr;
},    
render() {
    let submitEnabled = ( this.state.passwordSuccess && this.state.confirmPasswordSuccess && this.state.secQuestion !== '' && this.state.secAnswerSuccess ) ? "submitBtn EnableBtn" : "submitBtn DisableBtn";
    let nextClass = this.state.mouserHover ? "next DisableBtn" : "next";
    return (
        <div className="QRZT_BasicModal container" onClick={this.props.close}>
            <div className="ModalWrap row">
				<div className="col-lg-12">
					<section className="MainContent">				
						<center>
							<p>3 of 5</p>
							<div className="heading">Company Information</div>
						</center>
						<div className="MainContent">
							<div className="nonEditable">COMPANY NAME</div>
							<div className="nonEditable value">{this.props.companyName}</div>
						</div>
					</section>
				</div>
				<div className="col-lg-12">
					<section className="MainContent">
						<div className="field">
							<input autoComplete="off" autoComplete="off" onFocus={ this.antiFocus } className={this.state.jFunctionError1 ? "noErrorField errorField" : "noErrorField"} value={this.state.jFunction1} id="jFunction1" onClick={this.showMenu1} type="text" onChange={()=>{return}} required/>
						  <span onClick={this.showMenu1} className="fa fa-caret-down downArrow drp-btn"></span>
						  <field-label>INDUSTRY</field-label>
						  { this.state.showMenu1 ? (<ul className="dropDownList">
							{this.createList1()}
						  </ul>) : false }
					  </div>
					</section>
					
					<section className="MainContent">
						<div className="field">
							<input autoComplete="off" autoComplete="off" onFocus={ this.antiFocus } className={this.state.jFunctionError2 ? "noErrorField errorField" : "noErrorField"} value={this.state.jFunction2} id="jFunction2" onClick={this.showMenu2} type="text" onChange={()=>{return}} required/>
						  <span onClick={this.showMenu2} className="fa fa-caret-down downArrow drp-btn"></span>
						  <field-label>REVENUE</field-label>
						  { this.state.showMenu2 ? (<ul className="dropDownList">
							{this.createList2()}
						  </ul>) : false }
						</div>
					</section>
					
					<section className="MainContent">
						<div className="field">
							<input autoComplete="off" autoComplete="off" onFocus={ this.antiFocus } className={this.state.jFunctionError3 ? "noErrorField errorField" : "noErrorField"} value={this.state.jFunction3} id="jFunction3" onClick={this.showMenu3} type="text" onChange={()=>{return}} required/>
						  <span onClick={this.showMenu3} className="fa fa-caret-down downArrow drp-btn"></span>
						  <field-label>EMPLOYEE SIZE</field-label>
						  { this.state.showMenu3 ? (<ul className="dropDownList">
							{this.createList3()}
						  </ul>) : false }
						</div>
					</section>
				</div>
				<div className="clearfix"></div>
				<div className="col-lg-12">
					<section className="MainContent btn-hight">
						<div className="row">
							<div className="col-lg-6">
								<button className="previous" 
								onMouseOver={()=>{
									this.setState({mouserHover:true});
								}}
								onMouseOut={()=>{
									this.setState({mouserHover:false});
								}}
								onClick={this.props.goBack}>PREVIOUS</button>
							</div>
							<div className="col-lg-6">
								<button className={nextClass} onClick={this.props.goToAreaIntrestInfoPage}>NEXT</button>
							</div>
						</div>
					</section>
				</div>
				<div className="clearfix"></div>
				<div className="col-lg-12">
					<section className="MainContent">	
						<center>
							<label className="skip" onClick={this.props.goToAreaIntrestInfoPage} >Skip this step</label>
						</center>
					</section>
				</div>
				
            </div>
        </div>
    );
},
});
