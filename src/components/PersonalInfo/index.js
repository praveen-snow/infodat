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
goToPersonalInfoPage(){
    this.props.goToPersonalInfoPage();
},
  
render() {
    let submitEnabled = ( this.state.passwordSuccess && this.state.confirmPasswordSuccess && this.state.secQuestion !== '' && this.state.secAnswerSuccess ) ? "submitBtn EnableBtn" : "submitBtn DisableBtn";
    return (
        <div className="QRZT_BasicModal" onClick={this.props.close}>
            <div className="ModalWrap">
                <section className="MainContent">
                    <p>2 of 4</p>
                </section>
                <center>
                    <p className="heading">Personal Information</p>
                </center>
                <section className="MainContent">
                    <div className="nonEditable">NAME</div>
                    <div className="nonEditable value">John Smith</div>
                    <div className="nonEditable">COMPANY</div>
                    <div className="nonEditable value">Quartz Events</div>
                    <div className="nonEditable">PRIMARY JOB FUNCTION</div>
                    <div className="nonEditable value">Procurement</div>
                </section>
                <center>
                    <button className="getStarted" onClick={this.props.goBack}>PREVIOUS</button>
                    <button className="getStarted" onClick={this.props.goToCompanyInfoPage}>NEXT</button>
                </center>
                <center>
                    <label className="skip" onClick={this.props.goToCompanyInfoPage} >Skip this step</label>
                </center>
            </div>
        </div>
    );
},
});
