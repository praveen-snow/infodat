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
viewProfile(){
    this.props.goToViewProfilePage();
},
  
render() {
    let submitEnabled = ( this.state.passwordSuccess && this.state.confirmPasswordSuccess && this.state.secQuestion !== '' && this.state.secAnswerSuccess ) ? "submitBtn EnableBtn" : "submitBtn DisableBtn";
    return (
        <div className="QRZT_BasicModal" onClick={this.props.close}>
            <div className="ModalWrap">
                <div className="col-lg-12">
                    <center>
                        <p className="heading">You're All Set</p>
                    </center>
                    <section className="MainContent">
                        <p>Thank you for completing your profile. We'll notify you when Think Tank submissions open. In the meantime, log in at any time to edit your profile.</p>
                    </section>
                    <center>
                        <button className="getStarted" onClick={this.viewProfile}>VIEW PROFILE</button>
                    </center>
                </div>
            </div>
        </div>
    );
},
});
