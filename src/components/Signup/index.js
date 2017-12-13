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
      fullName:'',
      wEmail:'',
      company:'',
      jTitle:'',
      jFunction:'',
      extNumber:'',
      phoneNumberError:false,
      invitationNumberError:false,
      fNameError:false,
      lNameError:false,
      fullNameError:false,
      wEmailError:false,
      companyError:false,
      jTitleError:false,
      jFunctionError:false,
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
    let fname,lname;
    let fullName = (this.state.fName + ' ' + this.state.lName);
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
      <input ref="fName" value={this.state.fName} className="noErrorField" type="text" onChange={this.userInput} required/>
      <field-label >FIRST NAME<sup>*</sup></field-label>
      <input value={this.state.lName} ref="lName" className="noErrorField" type="text" onBlur={ this.onBlur } onChange={this.userInput} required/>
      <field-label style={fieldStyle} >LAST NAME<sup>*</sup></field-label>
      </div>);
  },
  OpenTC(){
    this.props.OpenTC();
  },
  showMenu(){
    this.setState({showMenu:true});
  },
  userInput(){
    let refs = this.refs;
    let tempObj = {};
    let noError = '';
    for(let key in refs){
      if(refs.hasOwnProperty(key)){
        if(refs[key].value !== ''){
          tempObj[key] = refs[key].value;
          noError = key + 'Error';
          tempObj[noError] = false;
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
    if(this.state.invitationNumber === ''){
      this.setState({invitationNumberError:true});
    }else{
      this.setState({invitationNumberError:false});
    }
    if(this.state.fullName === ' '){
      this.setState({fullNameError:true});
    }else{
      this.setState({fullNameError:false});
    }
    if(this.state.wEmail === ''){
      this.setState({wEmailError:true});
    }else{
      this.setState({wEmailError:false});
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
  },
  selectPrimaryJob(e){
    let value = e.currentTarget.dataset.id;
    this.setState({jFunction:value,showMenu:false});
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
                  <field-label>INVITATION NUMBER</field-label>
                </div>
                { this.state.splitName ? this.createSplitNames() : this.createName() }
                <div className="field col-lg-12">
                  <input onFocus={ this.antiFocus } className={this.state.wEmailError ? "noErrorField errorField" : "noErrorField"} value={this.state.wEmail} ref="wEmail" type="text" onChange={this.userInput} required/>
                    {this.state.wEmailError ? <img className="error" src="assets/png/error.svg"></img> :
                    false}
                  <field-label>WORK EMAIL<sup>*</sup></field-label>
                </div>
                <div className="field col-lg-12">
                  <input onFocus={ this.antiFocus } className={this.state.companyError ? "noErrorField errorField" : "noErrorField"} value={this.state.company} ref="company" type="text" onChange={this.userInput} required/>
                    {this.state.companyError ? <img className="error" src="assets/png/error.svg"></img> :
                    false}
                  <field-label>COMPANY<sup>*</sup></field-label>
                </div>
                <div className="field col-lg-12">
                  <input  onFocus={ this.antiFocus } className={this.state.jTitleError ? "noErrorField errorField" : "noErrorField"} value={this.state.jTitle} ref="jTitle" type="text" onChange={this.userInput} required/>
                    {this.state.jTitleError ? <img className="error" src="assets/png/error.svg"></img> :
                    false}
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
                  </ul>) : false }
                </div>
                <div style={splitStyle} className="field col-lg-12">
                  <input style={phoneNumberStyle} onFocus={ this.antiFocus } className={this.state.phoneNumberError? "noErrorField errorField" : "noErrorField"} ref="phoneNumber" type="text" onChange={this.userInput} value={this.state.phoneNumber} maxLength="10" onChange={this.formatPhoneNumber} required id="phone"/>
                  <field-label>PHONE NUMBER<sup>*</sup></field-label>
                  <input style={extNumberStyle} onFocus={ this.antiFocus } className="noErrorField extension" ref="extNumber" type="text" onChange={this.userInput} value={this.state.extNumber} onChange={this.formatExtNumber} maxLength="6" required id="phone"/>
                  <field-label style={fieldStyle}>EXT</field-label>
                </div>
                {this.state.previousMember ? <div className="field col-lg-12">
                  <input onFocus={ this.antiFocus } className={this.state.wEmailError ? "noErrorField errorField" : "noErrorField"} value={this.state.wEmail} ref="wEmail" type="text" onChange={this.userInput} required/>
                    {this.state.wEmailError ? <img className="error" src="assets/png/error.svg"></img> :
                    false}
                  <field-label>Member ID<sup>*</sup></field-label>
                </div> : false}
                <div className="field col-lg-12">
                  <div className="form-check">
                    <label className="form-check-label">
                      <input onFocus={ this.antiFocus } ref="previousMember" onClick={this.previousMember}className="form-check-input" type="checkbox"/>
                       Previous member?
                    </label>
                  </div>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input onFocus={ this.antiFocus } className="form-check-input" ref="tandc" type="checkbox"/>
                      I agree to the <a href="javascript:void(0);" onClick={this.OpenTC}>Quartz Network Terms and Conditions<sup>*</sup></a>
                    </label>
                  </div>
                </div>
                <div className="col-lg-12 text-center center-block">
                  <input onFocus={ this.antiFocus } className="submitBtn" onClick={this.submit} onChange={()=>{return}} value="SUBMIT APPLICATION"/>
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
//<img className="success" src="assets/png/success.svg"></img>}

// {this.state.phoneNumberError ? <img className="error" src="assets/png/error.svg"></img> :
// false}
