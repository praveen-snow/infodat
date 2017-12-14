/* src/components/Backdrop */

import React from 'react';
import ss from './styles.scss';
import PureRenderMixin  from 'react-addons-pure-render-mixin';
import { bindListener } from 'utils';

export default React.createClass({
  mixins: [PureRenderMixin],

	getInitialState() {
		return {
      splitName:false,
      showMenu:false,
      phoneNumber:'',
      invitationNumber:'',
      fName:'',
      lName:'',
      fullName:' ',
      wEmail:'',
      company:'',
      jTitle:'',
      jFunction:'',
      extNumber:'',
      oldMember:'',
      oldMemberError:false,
      phoneNumberError:false,
      invitationNumberError:false,
      fNameError:false,
      lNameError:false,
      fullNameError:false,
      wEmailError:false,
      companyError:false,
      jTitleError:false,
      jFunctionError:false,
      oldMemberSuccess:false,
      phoneNumberSuccess:false,
      invitationNumberSuccess:false,
      fNameSuccess:false,
      lNameSuccess:false,
      fullNameSuccess:false,
      wEmailSuccess:false,
      companySuccess:false,
      jTitleSuccess:false,
      jFunctionSuccess:false,
      previousMember:false,
      tandc:false
		};
	},

  componentWillMount() {
      ss.use();
  },
  componentWillUnmount() {
      ss.unuse();
  },
	componentDidMount() {

  },
  normalize(phone) {
      //normalize string and remove all unnecessary characters
      phone = phone.replace(/[^\d]/g, "");
      //check if number length equals to 10
      if (phone.length === 10) {
          //reformat and return phone number
          this.setState({phoneNumberError:false});
          return phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
      }
      return phone;
  },
  formatPhoneNumber(e){
    let value = e.target.value;
    this.setState({phoneNumber:this.normalize(value)});
  },
  formatExtNumber(e){
    let value = e.target.value;
    this.setState({extNumber:this.normalize(value)});
  },
  onFocus(){
    this.setState({splitName:true});
  },
  antiFocus(){
    let fullName = (this.state.fName + ' ' + this.state.lName);
    let tempObj = {};
    let noError = '';
    let success = '';
    if(this.state.fNameError || this.state.lNameError){
      noError = 'fullName' + 'Error';
      tempObj[noError] = true;
      success = 'fullName' + 'Success';
      tempObj[success] = false;
    } else if(this.state.fNameSuccess && this.state.lNameSuccess){
      success = 'fullName' + 'Success';
      tempObj[success] = true;
      noError = 'fullName' + 'Error';
      tempObj[noError] = false;
    }
    this.setState(tempObj);
    this.setState({splitName:false,fullName:fullName,showMenu:false});
  },
  onBlur(){
    this.setState({splitName:false});
  },
  createName(){
    return (<div className="field col-lg-12">
    <input className={this.state.fullNameError ? "noErrorField errorField" : "noErrorField"} value={this.state.fullName} ref="fullName" onFocus={ this.onFocus } type="text" onChange={this.userInput} required/>
      {this.state.fullNameError ? <img className="error" src="assets/png/error.svg"></img> :
      false}
      {this.state.fullNameSuccess ? <img className="success" src="assets/png/success.svg"></img> : false}
    <field-label>NAME<sup>*</sup></field-label>
    </div>);
  },
  createSplitNames(){
    let splitStyle = {
      display: 'flex'
    };
    let fieldStyle = {
      marginLeft : '47%'
    };
    return (<div style={splitStyle} className="field col-lg-12">
      <input ref="fName" value={this.state.fName} className="noErrorField" type="text" onFocus={ this.onFocus } onChange={this.userInput} required/>
      <field-label >FIRST NAME<sup>*</sup></field-label>
      <input value={this.state.lName} ref="lName" className="noErrorField" type="text" onFocus={ this.onFocus } onChange={this.userInput} required/>
      <field-label style={fieldStyle} >LAST NAME<sup>*</sup></field-label>
      </div>);
  },
  OpenTC(){
    this.props.OpenTC();
  },
  showMenu(){
    this.setState({showMenu:!this.state.showMenu});
  },
  onChangeCompany(e){
    let value = e.target.value;
    let tempObj = {};
    let success,noError;
    tempObj['company'] = value;
      if(value.length !== 0 ){
        success = 'company' + 'Success';
        tempObj[success] = true;
        noError = 'company' + 'Error';
        tempObj[noError] = false;
      } else {
        noError = 'company' + 'Error';
        tempObj[noError] = true;
        success = 'company' + 'Success';
        tempObj[success] = false;
      }
      this.setState(tempObj);
  },
  onChangeJTitle(e){
    let value = e.target.value;
    let tempObj = {};
    let success,noError;
    tempObj['jTitle'] = value;
      if(value.length !== 0 ){
        success = 'jTitle' + 'Success';
        tempObj[success] = true;
        noError = 'jTitle' + 'Error';
        tempObj[noError] = false;
      } else {
        noError = 'jTitle' + 'Error';
        tempObj[noError] = true;
        success = 'jTitle' + 'Success';
        tempObj[success] = false;
      }
      this.setState(tempObj);
  },
  userInput(){
    let refs = this.refs;
    let tempObj = {};
    let noError = '';
    let success = '';
    let emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let alphaRegex = /^[a-zA-Z]+$/;
    let userInputLookUp=[
      "phoneNumber",
      "invitationNumber",
      "fName",
      "lName",
      "fullName",
      "wEmail",
      "jFunction",
      "extNumber",
      "oldMember"
    ];
    for(let key in refs){
      if(refs.hasOwnProperty(key)){
        if(userInputLookUp.indexOf(key) >=0 ){
          if(refs[key].value){
            tempObj[key] = refs[key].value;
            if(key === 'wEmail'){
              if(emailRegex.test(refs[key].value)){
                success = key + 'Success';
                tempObj[success] = true;
                noError = key + 'Error';
                tempObj[noError] = false;
              } else {
                noError = key + 'Error';
                tempObj[noError] = true;
                success = key + 'Success';
                tempObj[success] = false;
              }
            }
            if(key === 'fName' || key === 'lName'){
              if(!alphaRegex.test(refs[key].value)){
                return;
              }
              if(refs['fName'].value.length > 2){
                success = 'fName' + 'Success';
                tempObj[success] = true;
                noError = 'fName' + 'Error';
                tempObj[noError] = false;
              } else {
                success = 'fName' + 'Success';
                tempObj[success] = false;
                noError = 'fName' + 'Error';
                tempObj[noError] = true;
              }
              
              if(refs['lName'].value.length > 2){
                success = 'lName' + 'Success';
                tempObj[success] = true;
                noError = 'lName' + 'Error';
                tempObj[noError] = false;
              } else {
                success = 'lName' + 'Success';
                tempObj[success] = false;
                noError = 'lName' + 'Error';
                tempObj[noError] = true;
              }

            }

            if(key === 'invitationNumber'){
              if(refs[key].value.length === 16 ){
                success = key + 'Success';
                tempObj[success] = true;
                noError = key + 'Error';
                tempObj[noError] = false;
              } else if(refs[key].value.length > 16){
                return;
              } else {
                noError = key + 'Error';
                tempObj[noError] = true;
                success = key + 'Success';
                tempObj[success] = false;
              }
            }

            if(key === 'company'){
              if(refs[key].value.length !== 0 ){
                success = key + 'Success';
                tempObj[success] = true;
                noError = key + 'Error';
                tempObj[noError] = false;
              } else {
                noError = key + 'Error';
                tempObj[noError] = true;
                success = key + 'Success';
                tempObj[success] = false;
              }
            }

            if(key === 'jTitle'){
              if(refs[key].value.length !== 0 ){
                success = key + 'Success';
                tempObj[success] = true;
                noError = key + 'Error';
                tempObj[noError] = false;
              } else {
                noError = key + 'Error';
                tempObj[noError] = true;
                success = key + 'Success';
                tempObj[success] = false;
              }
            }

            if(key === 'jFunction'){
              if(refs[key].value.length !== 0 ){
                success = key + 'Success';
                tempObj[success] = true;
                noError = key + 'Error';
                tempObj[noError] = false;
              } else {
                noError = key + 'Error';
                tempObj[noError] = true;
                success = key + 'Success';
                tempObj[success] = false;
              }
            }

            if(key === 'phoneNumber'){
              if(refs[key].value.length !== 0 ){
                success = key + 'Success';
                tempObj[success] = true;
                noError = key + 'Error';
                tempObj[noError] = false;
              } else {
                noError = key + 'Error';
                tempObj[noError] = true;
                success = key + 'Success';
                tempObj[success] = false;
              }
            }
          } else {
            tempObj[key] = refs[key].value;
          }
          this.setState(tempObj);
        }
      }
    }
  },
  submit(){
    if(this.state.phoneNumber === ''){
      this.setState({phoneNumberError:true});
    }else{
      this.setState({phoneNumberError:false});
    }

    this.setState({invitationNumberError:false});

    if(this.state.fullName === ' '){
      this.setState({fullNameError:true});
    }else{
      this.setState({fullNameError:false});
    }

    if(this.state.wEmail === ''){
      this.setState({wEmailError:true});
    }else{
      let emailRegex  = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(emailRegex.test(this.state.wEmail)){
        this.setState({wEmailError:false});
      }else{
        this.setState({wEmailError:true});
      }
    }

    if(this.state.company === ''){
      this.setState({companyError:true});
    }else{
      this.setState({companyError:false});
    }

    if(this.state.jTitle === ''){
      this.setState({jTitleError:true});
    }else{
      this.setState({jTitleError:false});
    }

    if(this.state.jFunction === ''){
      this.setState({jFunctionError:true});
    }else{
      this.setState({jFunctionError:false});
    }

    if(this.state.previousMember){
      if(this.state.oldMember === ''){
        this.setState({oldMemberError:true});
      }else{
        this.setState({oldMemberError:false});
      }
    }
    let me = this.state;
    if(!me.phoneNumberError && !me.fullNameError && !me.companyError && !me.jTitleError  && !me.jFunctionError  && !me.wEmailError ){
      this.props.submit();
    }
  },
  selectPrimaryJob(e){
    let value = e.currentTarget.dataset.id;
    this.setState({jFunction:value,showMenu:false,jFunctionError:false});
  },
  previousMember(){
    this.setState({previousMember:!this.state.previousMember})
  },
  render() {
    let splitStyle = {
      display: 'flex'
    };
    let fieldStyle = {
      marginLeft : '66%'
    };
    let phoneNumberStyle = {
      width:'70%'
    };
    let extNumberStyle = {
      width:'30%'
    };
    return (
      <div className="modalBackDrop">
        <div className="form">
          <div className="formWrapper">
            <div className="closeBtn"><img className="closeImg" onClick={this.props.close}src="assets/png/close.png"></img></div>
            <section className="content">
              <center>
                <h3>Apply for the Network</h3>
              </center>
              <form className="row networkApplyForm">
                <div className="legends"><sup>*</sup> Required</div>
                <div className="field col-lg-12">
                  <input onFocus={ this.antiFocus } className={this.state.invitationNumberError ? "noErrorField errorField" : "noErrorField"} value={this.state.invitationNumber} ref="invitationNumber" type="text" onChange={this.userInput}/>
                    {this.state.invitationNumberError ? <img className="error" src="assets/png/error.svg"></img> :
                    false}
                    {this.state.invitationNumberSuccess ? <img className="success" src="assets/png/success.svg"></img> : false}
                  <field-label>INVITATION NUMBER</field-label>
                </div>
                { this.state.splitName ? this.createSplitNames() : this.createName() }
                <div className="field col-lg-12">
                  <input onFocus={ this.antiFocus } className={this.state.wEmailError ? "noErrorField errorField" : "noErrorField"} value={this.state.wEmail} ref="wEmail" type="text" onChange={this.userInput} required/>
                    {this.state.wEmailError ? <img className="error" src="assets/png/error.svg"></img> :
                    false}
                    {this.state.wEmailSuccess ? <img className="success" src="assets/png/success.svg"></img> : false}
                  <field-label>WORK EMAIL<sup>*</sup></field-label>
                </div>
                <div className="field col-lg-12">
                  <input onFocus={ this.antiFocus } className={this.state.companyError ? "noErrorField errorField" : "noErrorField"} value={this.state.company} ref="company" type="text" onChange={this.onChangeCompany} required/>
                    {this.state.companyError ? <img className="error" src="assets/png/error.svg"></img> :
                    false}
                    {this.state.companySuccess ? <img className="success" src="assets/png/success.svg"></img> : false}
                  <field-label>COMPANY<sup>*</sup></field-label>
                </div>
                <div className="field col-lg-12">
                  <input  onFocus={ this.antiFocus } className={this.state.jTitleError ? "noErrorField errorField" : "noErrorField"} value={this.state.jTitle} ref="jTitle" type="text" onChange={this.onChangeJTitle} required/>
                    {this.state.jTitleError ? <img className="error" src="assets/png/error.svg"></img> :
                    false}
                    {this.state.jTitleSuccess ?<img className="success" src="assets/png/success.svg"></img> : false}
                  <field-label>JOB TITLE<sup>*</sup></field-label>
                </div>
                <div className= "field col-lg-12">
                  <input onFocus={ this.antiFocus } className={this.state.jFunctionError ? "noErrorField errorField" : "noErrorField"} value={this.state.jFunction} ref="jFunction" onClick={this.showMenu} type="text" onChange={this.userInput} required/>
                  <span className="fa fa-caret-down downArrow"></span>
                  <field-label>PRIMARY JOB FUNCTION<sup>*</sup></field-label>
                  { this.state.showMenu ? (<ul className="dropDownList">
                    <li data-id="Supply Chain" onClick={this.selectPrimaryJob}>
                      <a>Supply Chain</a>
                    </li>
                    <li data-id="Procurement" onClick={this.selectPrimaryJob}>
                      <a>Procurement</a>
                    </li>
                    <li data-id="Manufacturing" onClick={this.selectPrimaryJob}>
                      <a>Manufacturing</a>
                    </li>
                    <li data-id="Information Technology" onClick={this.selectPrimaryJob}>
                      <a>Information Technology</a>
                    </li>
                    <li data-id="Finance" onClick={this.selectPrimaryJob}>
                      <a>Finance</a>
                    </li>
                    <li data-id="Human Resources" onClick={this.selectPrimaryJob}>
                      <a>Human Resources</a>
                    </li>
                    <li data-id="Human Resources" onClick={this.selectPrimaryJob}>
                      <a>Marketing</a>
                    </li>
                  </ul>) : false }
                </div>
                <div style={splitStyle} className="field col-lg-12">
                  <input style={phoneNumberStyle} onFocus={ this.antiFocus } className={this.state.phoneNumberError? "noErrorField errorField" : "noErrorField"} ref="phoneNumber" type="text" onChange={this.userInput} value={this.state.phoneNumber} maxLength="10" onChange={this.formatPhoneNumber} required id="phone"/>
                  <field-label>PHONE NUMBER<sup>*</sup></field-label>
                  <input style={extNumberStyle} onFocus={ this.antiFocus } className="noErrorField extension" ref="extNumber" type="text" onChange={this.userInput} value={this.state.extNumber} onChange={this.formatExtNumber} maxLength="6" required id="phone"/>
                  <field-label style={fieldStyle}>EXT</field-label>
                </div>
                {this.state.previousMember ? <div className="field col-lg-12">
                  <input onFocus={ this.antiFocus } className={this.state.oldMemberError ? "noErrorField errorField" : "noErrorField"} value={this.state.oldMember} ref="oldMember" type="text" onChange={this.userInput} required/>
                    {this.state.oldMemberError ? <img className="error" src="assets/png/error.svg"></img> :
                    false}
                    {this.state.oldMemberSuccess?<img className="success" src="assets/png/success.svg"></img> : false}
                  <field-label>Member ID<sup>*</sup></field-label>
                </div> : false}
                <div className="field col-lg-12">
                  <div className="form-check">
                    <label className="form-check-label">
                      <input  ref="previousMember" onClick={this.previousMember}className="form-check-input" type="checkbox"/>
                       Previous member?
                    </label>
                  </div>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input className="form-check-input" ref="tandc" type="checkbox"/>
                      I agree to the <a href="javascript:void(0);" onClick={this.OpenTC}>Quartz Network Terms and Conditions<sup>*</sup></a>
                    </label>
                  </div>
                </div>
                <div className="col-lg-12 text-center center-block">
                  <input className="submitBtn" onClick={this.submit} onChange={()=>{return}} value="SUBMIT APPLICATION"/>
                </div>
                <div className="col-lg-12">
                  <center>
                    <div className="sign-in">
                      Already a member? <a href="javascript:void(0);">Sign in</a>
                    </div>
                  </center>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    );
  },
});


// <div className="firstNameGroup ">
//                   <input type="text" onChange={this.userInput} required/>
//                 <field-label>FIRST NAME*</field-label>
//                 </div>
//                 <div className="lastNameGroup">
//                   <input type="text" onChange={this.userInput} required/>
//                 <field-label>LAST NAME*</field-label>
//                 </div>


// {this.state.phoneNumberError ? <img className="error" src="assets/png/error.svg"></img> :
// false}
