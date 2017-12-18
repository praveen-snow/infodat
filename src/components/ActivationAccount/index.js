/* src/components/ActivationAccount */
import React from 'react';
import ss from './styles.scss';
import PureRenderMixin  from 'react-addons-pure-render-mixin';

export default React.createClass({
    mixins: [PureRenderMixin],
    getInitialState() {
		return {
            passWord:'',
            confirmPassword:'',
            secQuestion:'',
            passwordError:false,
            passwordSuccess:false,
            confirmPasswordError:false,
            confirmPasswordSuccess:false,
            showMenu:false,
            secAnswer:'',
            secAnswerError:false,
            secAnswerSuccess:false,
            showPassword:false
        }
    },
componentWillMount() {
    ss.use();
},
componentWillUnmount() {
    ss.unuse();
},
showMenu(){
    this.setState({showMenu:!this.state.showMenu});
},
userPassword(e){
 let value = e.target.value;
 this.setState({passWord:value,passwordError:false});
},
confirmPassword(e){
    let value = e.target.value;
    this.setState({confirmPassword:value,confirmPasswordError:false});
},
selectSecQuestion(e){
    let value = e.currentTarget.dataset.id;
    this.setState({secQuestion:value,secQuestionError:false});
},
secAnswer(e){
    let value = e.target.value;
    this.setState({secAnswer:value,secAnswerError:false});
},
submit(){
    let me = this.state;
    // if(me.passWord === ''){
    //     this.setState({passwordError:true});
    // }
    // if(me.confirmPassword === ''){
    //     this.setState({confirmPasswordError:true});
    // }
    // if(me.secQuestion === ''){
    //     this.setState({secQuestionError:true});
    // }
    // if(me.secAnswer === ''){
    //     this.setState({secAnswerError:true});
    // }
    // if(me.passWord === '' && me.confirmPassword === '' && me.secAnswer === '' && me.secQuestion === ''){
    //     return;
    // }else{
        this.props.paymentPage();
    //}
},
showPassword(){
    this.setState({showPassword:!this.state.showPassword});
},
render() {
    let submitEnabled = ( this.state.passwordSuccess && this.state.confirmPasswordSuccess && this.state.secQuestion !== '' && this.state.secAnswerSuccess ) ? "submitBtn EnableBtn" : "submitBtn DisableBtn";
    let passWordToggle = !this.state.showPassword ? "SHOW PASSWORD" : "HIDE PASSWORD";
    let typePassword = this.state.showPassword ? "text":"password"
return (
    <div className="QRZT_BasicModal" onClick={this.props.close}>
        <div className="ModalWrap">
            <center>
                <h2>Activate Your Account</h2>
            </center>
          <section className="MainContent">
            <p>Thanks for confirming your email address. Please fill out the fileds below and click ACTIVATE to get started.</p>
          </section>
          <center>
            <div className="field col-lg-12">
                  <label className="email">
                      WORK EMAIL
                  </label>
              </div>
              <div className="field col-lg-12">
                  <label className="wEmail">
                      {this.props.workEmail}
                  </label>
              </div>
            </center>
            <div className="field col-lg-12">
                <div className="legends">All fields are required</div>
            </div>
              <div className="field col-lg-12">
                  <div className="form-check">
                    <label className="form-check-label">
                    <input onFocus={()=>{this.setState({showMenu:false})}} type={typePassword} className={this.state.passwordError ? "noErrorField errorField" : "noErrorField"} value={this.state.passWord} onChange={this.userPassword} required/>
                    <span className="passwordShow" onClick={this.showPassword}>{passWordToggle}</span>
                    {this.state.passwordError ? <img className="error" src="assets/png/error.svg"></img> : false}
                    {this.state.passwordSuccess ? <img className="success" src="assets/png/success.svg"></img> : false}
                    <field-label>PASSWORD</field-label>
                    </label>
                  </div>
                </div>
                {this.state.passwordError ? <center className="passWordValidation">Your password must be 8-16 characters and have atleast one uppercase letter</center> : false}
                  <div className="field col-lg-12">
                    <div className="form-check">
                        <label className="form-check-label">
                        <input  onFocus={()=>{this.setState({showMenu:false})}} className={this.state.confirmPasswordError ? "noErrorField errorField" : "noErrorField"} value={this.state.confirmPassword} type={typePassword} onChange={this.confirmPassword} required/>
                        {this.state.confirmPasswordError ? <img className="error" src="assets/png/error.svg"></img> : false}
                        {this.state.confirmPasswordSuccess ? <img className="success" src="assets/png/success.svg"></img> : false}
                        <field-label>CONFIRM PASSWORD</field-label>
                        </label>
                    </div>
                  </div>
                  <div className="field col-lg-12">
                    <div className="form-check">
                        <label className="form-check-label">
                            <input  className={this.state.secQuestionError ? "noErrorField errorField" : "noErrorField"} value={this.state.secQuestion} type="text" onClick={this.showMenu} onChange={this.dummy} required/>
                            <span className="fa fa-caret-down downArrow"></span>
                            <field-label>SECURITY QUESTION</field-label>
                            { this.state.showMenu ? (<ul className="dropDownList">
                                <li data-id="Question 1" onClick={this.selectSecQuestion}>
                                <a>Question 1</a>
                                </li>
                                <li data-id="Question 2" onClick={this.selectSecQuestion}>
                                <a>Question 2</a>
                                </li>
                                <li data-id="Question 3" onClick={this.selectSecQuestion}>
                                <a>Question 3</a>
                                </li>
                                <li data-id="Question 4" onClick={this.selectSecQuestion}>
                                <a>Question 4</a>
                                </li>
                            </ul>) : false }
                        </label>
                    </div>
                  </div>
                  {this.state.secQuestion !== ''? <div className="field col-lg-12">
                    <div className="form-check">
                        <label className="form-check-label">
                        <input  className={this.state.secAnswerError ? "noErrorField errorField" : "noErrorField"} value={this.state.secAnswer} type="text" onChange={this.secAnswer} onFocus={()=>{this.setState({showMenu:false})}} required/>
                        {this.state.secAnswerError ? <img className="error" src="assets/png/error.svg"></img> : false}
                        {this.state.secAnswerSuccess ? <img className="success" src="assets/png/success.svg"></img> : false}
                        <field-label>ANSWER</field-label>
                        </label>
                    </div>
                  </div>:false}
                  <center>
                    <div className="col-lg-12 text-center center-block">
                        <input  className={submitEnabled} onChange={this.dummy} onClick={this.submit} value="SUBMIT"/>
                    </div>
                  </center>
            </div>
        </div>
    );
},
});
