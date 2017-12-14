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
            showMenu:false
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
render() {
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
                  <div className="form-check">
                    <label className="form-check-label">
                    <input className={this.state.passwordError ? "noErrorField errorField" : "noErrorField"} value={this.state.passWord}  type="text" onChange={this.userPassword} required/>
                    {this.state.passwordError ? <img className="error" src="assets/png/error.svg"></img> : false}
                    {this.state.passwordSuccess?<img className="success" src="assets/png/success.svg"></img> : false}
                    <field-label>PASWORD<sup>*</sup></field-label>
                    </label>
                  </div>
                </div>
                  <div className="field col-lg-12">
                    <div className="form-check">
                        <label className="form-check-label">
                        <input  className={this.state.confirmPasswordError ? "noErrorField errorField" : "noErrorField"} value={this.state.confirmPassword} type="text" onChange={this.confirmPassword} required/>
                        {this.state.confirmPasswordError ? <img className="error" src="assets/png/error.svg"></img> : false}
                        {this.state.confirmPasswordSuccess ? <img className="success" src="assets/png/success.svg"></img> : false}
                        <field-label>CONFIRM PASSWORD<sup>*</sup></field-label>
                        </label>
                    </div>
                  </div>
                  <div className="field col-lg-12">
                    <div className="form-check">
                        <label className="form-check-label">
                            <input  className={this.state.secQuestionError ? "noErrorField errorField" : "noErrorField"} value={this.state.secQuestion} type="text" onClick={this.showMenu} required/>
                            <span className="fa fa-caret-down downArrow"></span>
                            <field-label>SECURITY QUESTION<sup>*</sup></field-label>
                            { this.state.showMenu ? (<ul className="dropDownList">
                                <li data-id="Supply Chain" onClick={this.selectSecQuestion}>
                                <a>TEST FAV PLACE</a>
                                </li>
                                <li data-id="Procurement" onClick={this.selectSecQuestion}>
                                <a>TEST FAV PLACE</a>
                                </li>
                                <li data-id="Manufacturing" onClick={this.selectSecQuestion}>
                                <a>TEST FAV PLACE</a>
                                </li>
                                <li data-id="Information Technology" onClick={this.selectSecQuestion}>
                                <a>TEST FAV PLACE</a>
                                </li>
                            </ul>) : false }
                        </label>
                    </div>
                  </div>
                  <center>
                    <div className="col-lg-12 text-center center-block">
                        <input className="submitBtn" onClick={this.submit} onChange={()=>{return}} value="ACTIVATE ACCOUNT"/>
                    </div>
                  </center>
            </div>
        </div>
);
},
});
