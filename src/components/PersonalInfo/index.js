/* src/components/PaymentPage */
import React from 'react';
import ss from './styles.scss';
import PureRenderMixin  from 'react-addons-pure-render-mixin';
import { bindListener } from 'utils';


export default React.createClass({
mixins: [PureRenderMixin],
getInitialState() {
    return {
        mouserHover:false
    }
},
componentWillMount() {
    ss.use();
},
componentWillUnmount() {
    ss.unuse();
},
componentDidMount() {

},
editProfile(e){
   let id = e.target.id;
   this.props.editProfile(id);
},

goToPersonalInfoPage(){
    this.props.goToPersonalInfoPage();
},
  
render() {
    let submitEnabled = ( this.state.passwordSuccess && this.state.confirmPasswordSuccess && this.state.secQuestion !== '' && this.state.secAnswerSuccess ) ? "submitBtn EnableBtn" : "submitBtn DisableBtn";
    let nextClass = this.state.mouserHover ? "getStarted next DisableBtn" : "getStarted next";
    return (
	<div className="addProfilebg">
        <div className="QRZT_BasicModal" onClick={this.props.close}>
            <div className="ModalWrap">
                <section className="MainContent">
                    <p>2 of 4</p>
                </section>
                <center>
                    <p className="heading">Personal Information</p>
                </center>
                <section className="MainContent space-txt">
					<div className="col-lg-12">
						<div className="nonEditable">NAME</div>
						<div className="nonEditable value">{this.props.userInfo.userName}</div>
						<div className="nonEditable">COMPANY</div>
						<div className="nonEditable value">{this.props.userInfo.company}</div>
						<div className="nonEditable">PRIMARY JOB FUNCTION</div>
						<div className="nonEditable value">{this.props.userInfo.jobFunction}</div>
					</div>
					<div className="clearfix"></div>
					<div className="col-lg-12">					
						<input className={"noErrorField"} id="invitationNumber" type="text"/>
						<field-label>TITLE</field-label>
					</div>
					<div className="clearfix"></div>
					<div className="col-lg-12">	<div className="txtpadd">From</div></div>
				    <div className="clearboth"></div>
					<div className="field-txt col-lg-6">
						<input className={"noErrorField"} id="jFunction" type="text" onChange={()=>{return}}/>
                        <span className="fa fa-caret-down downArrow drp-btn"></span>
                        <field-label>MONTH</field-label>
					</div>
					<div className="field-txt col-lg-6">
						<input className={"noErrorField"} id="jFunction" type="text" onChange={()=>{return}}/>
                        <span className="fa fa-caret-down downArrow drp-btn"></span>
                        <field-label>YEAR</field-label>
					</div>
					<div className="clearfix"></div>
					<div className="col-lg-12">	<div className="txtpadd">To</div></div>
				    <div className="clearboth"></div>
					<div className="field-txt col-lg-6">
						<input className={"noErrorField"} id="jFunction" type="text" onChange={()=>{return}}/>
                        <span className="fa fa-caret-down downArrow drp-btn"></span>
                        <field-label>MONTH</field-label>
					</div>
					<div className="field-txt col-lg-6">
						<input className={"noErrorField"} id="jFunction" type="text" onChange={()=>{return}}/>
                        <span className="fa fa-caret-down downArrow drp-btn"></span>
                        <field-label>YEAR</field-label>
					</div>
					<div className="clearboth"></div>					
					<div className="col-lg-12">
					<div className="space-txt">
						<textarea className={"noErrorField txt-area"} id="invitationNumber" type="text"/>
							<field-label>BIO</field-label>
						</div>
					</div>
					<div className="col-lg-12">
					<div className="txtpadd">
						<label id="addWork" onClick={this.editProfile} className="userName experiance addMore">
							<i id="addWork" onClick={this.editProfile} className="fa fa-plus" aria-hidden="true"></i> Previous Work Experience
						</label>
					</div>
					</div>
					<div className="col-lg-6 field-txt">
						<button className="previous" 
						onMouseOver={()=>{
							this.setState({mouserHover:true});
						}}
						onMouseOut={()=>{
							this.setState({mouserHover:false});
						}}
						onClick={this.props.goBack}>PREVIOUS</button>
					</div>
					<div className="col-lg-6 field-txt">
						<button className="next" onClick={this.props.goToCompanyInfoPage}>NEXT</button>
					</div>
					<div className="clearboth"></div>					
					<div className="col-lg-12">
						<center>
							<label className="skip" onClick={this.props.goToCompanyInfoPage} >Skip this step</label>
						</center>
					</div>
                </section>
            </div>
        </div>
	</div>
    );
},
});