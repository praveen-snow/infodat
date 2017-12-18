/* src/components/PaymentPage */
import React from 'react';
import ss from './styles.scss';
import PureRenderMixin  from 'react-addons-pure-render-mixin';

export default React.createClass({
mixins: [PureRenderMixin],
getInitialState() {
    return {
    }
},
componentWillMount() {
    ss.use();
},
componentWillUnmount() {
    ss.unuse();
},
getStarted(){
    this.props.getStarted();
},
  
render() {
    let submitEnabled = ( this.state.passwordSuccess && this.state.confirmPasswordSuccess && this.state.secQuestion !== '' && this.state.secAnswerSuccess ) ? "submitBtn EnableBtn" : "submitBtn DisableBtn";
    return (
        <div className="QRZT_BasicModal" onClick={this.props.close}>
            <div className="ModalWrap">
                <center>
                    <p className="heading">Let's Get Started by Building Your Profile</p>
                </center>
                <section className="MainContent">
                    <p>Adding to your profile will help your colleagues recognize you on the Network</p>
                </section>
                <center>
                    <button className="getStarted" onClick={this.getStarted}>GET STARTED</button>
                </center>
                <center>
                    <label className="skip">Skip the steps</label>
                </center>
            </div>
        </div>
    );
},
});
