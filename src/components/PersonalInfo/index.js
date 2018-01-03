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
				<div className="col-lg-12">
                	<section className="MainContent">
						<div className="nonEditable">NAME</div>
						<div className="nonEditable value">{this.props.userInfo.userName}</div>
						<div className="nonEditable">COMPANY</div>
						<div className="nonEditable value">{this.props.userInfo.company}</div>
						<div className="nonEditable">PRIMARY JOB FUNCTION</div>
						<div className="nonEditable value">{this.props.userInfo.jobFunction}</div>
					</section>
				</div>
				<div className="col-lg-12">
					<section className="MainContent">
						<input className={"noErrorField"} id="invitationNumber" type="text"/>
						<field-label>TITLE</field-label>
					</section>
				</div>
				<div className="col-lg-12">
					<section className="MainContent">
						<div className="txtpadd">From</div>
					</section>
				</div>
				<div className="col-lg-12">
					<section className="MainContent">
						<div className="row">
							<div className="col-lg-6">
								<input className={"noErrorField"} id="jFunction" type="text" onChange={()=>{return}}/>
								<span className="fa fa-caret-down downArrow drp-btn"></span>
								<field-label>MONTH</field-label>
							</div>
							<div className="col-lg-6">
								<input className={"noErrorField"} id="jFunction" type="text" onChange={()=>{return}}/>
								<span className="fa fa-caret-down downArrow drp-btn"></span>
								<field-label>YEAR</field-label>
							</div>
						</div>
					</section>
				</div>
				<div className="col-lg-12">
					<section className="MainContent">
						<div className="txtpadd">To <br/>Present</div>
					</section>
				</div>
				<div className="col-lg-12">
					<section className="MainContent">
						<div className="space-txt">
						<textarea className={"noErrorField txt-area"} id="invitationNumber" type="text"/>
							<field-label>BIO</field-label>
						</div>
					</section>
				</div>
				<div className="col-lg-12">
					<section className="MainContent">
						<label id="addWork" onClick={this.editProfile} className="userName experiance addMore">
							<i id="addWork" onClick={this.editProfile} className="fa fa-plus" aria-hidden="true"></i> Previous Work Experience
						</label>
					</section>
				</div>
				<div className="col-lg-12">
					<section className="MainContent">
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
								<button className="next" onClick={this.props.goToCompanyInfoPage}>NEXT</button>
							</div>
						</div>
					</section>
				</div>
				
				<div className="clearfix"></div>
				<div className="col-lg-12">
					<section className="MainContent">	
						<center>
							<label className="skip" onClick={this.props.goToCompanyInfoPage} >Skip this step</label>
						</center>
					</section>
				</div>

			</div>
        </div>
	</div>
    );
},
});