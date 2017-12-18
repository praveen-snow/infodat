/* src/components/BasicModal */

import React from 'react';
import ss from './styles.scss';
import PureRenderMixin  from 'react-addons-pure-render-mixin';

export default React.createClass({
mixins: [PureRenderMixin],
getInitialState() {
    return {
        userName:'',
        passWord:''
    }
},
componentWillMount() {
    ss.use();
},
componentWillUnmount() {
    ss.unuse();
},
createTandC(){
    return (<div>
        <h1>The Network by Quartz Terms and Conditions</h1>
        <p dangerouslySetInnerHTML={{__html: this.props.mainTxt}}></p>
        </div>);
},
enterUserName(e){
    let value = e.target.value;
    this.setState({userName:value});
},
enterPassWord(e){
    let value = e.target.value;
    this.setState({passWord:value});
},
rememberDetails(){

},
createSignIn(){
    let arr = [];
    arr.push(<div key="un" className="field col-lg-12">
            <input className={"noErrorField"} value={this.state.userName} type="text" onChange={this.enterUserName}/>
            <field-label>USER NAME</field-label>
        </div>);
    arr.push(<div key="up" className="field col-lg-12">
                <input type={"password"} className={"noErrorField"} value={this.state.passWord} type="text" onChange={this.enterPassWord}/>
                <field-label>PASSWORD</field-label>
        </div>);
    arr.push(<center key="signIn">
        <button className="submitBtn DisableBtn" onClick={this.getStarted}>Sign In</button>
    </center>);
    arr.push(<div key="pass" className="field overRide col-lg-12">
        <div className="form-check">
        <label className="form-check-label">
            <input onClick={this.rememberDetails} className="form-check-input" type="checkbox"/>
            Remember password
        </label>
        </div>
        <div className="form-check">
        <label className="form-check-label">
            Forgot password
        </label>
        </div>     
    </div>);
  return arr;
},
closeModal(){
    this.props.close();
},
render() {
    return (
        <div className="VZ_BasicModal">
            <div className="ClickLayer" onClick={this.closeModal}></div>
            <div className="ModalWrap">
            <div className="closeBtn"><img className="closeImg" onClick={this.closeModal}src="assets/png/close.png"></img></div>
            <section className="MainContent">
                {this.props.id === "SignIn" ? this.createSignIn() : this.createTandC()}
            </section>
            </div>
        </div>);
    },
});
