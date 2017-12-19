/* src/components/PaymentPage */
import React from 'react';
import ss from './styles.scss';
import PureRenderMixin  from 'react-addons-pure-render-mixin';

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
goToPersonalInfoPage(){
    this.props.goToPersonalInfoPage();
},
  
render() {
    let submitEnabled = ( this.state.passwordSuccess && this.state.confirmPasswordSuccess && this.state.secQuestion !== '' && this.state.secAnswerSuccess ) ? "submitBtn EnableBtn" : "submitBtn DisableBtn";
    let nextClass = this.state.mouserHover ? "getStarted next DisableBtn" : "getStarted next";
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
                    <div className="nonEditable value">{this.props.userInfo.userName}</div>
                    <div className="nonEditable">COMPANY</div>
                    <div className="nonEditable value">{this.props.userInfo.company}</div>
                    <div className="nonEditable">PRIMARY JOB FUNCTION</div>
                    <div className="nonEditable value">{this.props.userInfo.jobFunction}</div>
                </section>
                <center>
                    <button className="getStarted previous" 
                    onMouseOver={()=>{
                        this.setState({mouserHover:true});
                    }}
                    onMouseOut={()=>{
                        this.setState({mouserHover:false});
                    }}
                    onClick={this.props.goBack}>PREVIOUS</button>
                    <button className={nextClass} onClick={this.props.goToCompanyInfoPage}>NEXT</button>
                </center>
                <center>
                    <label className="skip" onClick={this.props.goToCompanyInfoPage} >Skip this step</label>
                </center>
            </div>
        </div>
    );
},
});
