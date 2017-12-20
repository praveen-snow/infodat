/* src/components/PaymentPage */
import React from 'react';
import ss from './styles.scss';
import PureRenderMixin  from 'react-addons-pure-render-mixin';

export default React.createClass({
mixins: [PureRenderMixin],
getInitialState() {
    return {
        mouserHover:false,
        revenue:'600,000,000',
        industry:this.props.industry,
        employeeSize:'250'
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
                    <p>3 of 4</p>
                </section>
                <center>
                    <p className="heading">Company Information</p>
                </center>
                <section className="MainContent">
                    <div className="nonEditable">COMPANY NAME</div>
                    <div className="nonEditable value">{this.props.companyName}</div>
                </section>
                <section className="MainContent">
                    <div key="rev" className="field col-lg-12">
                        <input className={"noErrorField"} value={this.state.revenue} type="text" onChange={this.enterRevenue}/>
                        <field-label>REVENUE</field-label>
                    </div>
                    <div key="indus" className="field col-lg-12">
                        <input className={"noErrorField"} value={this.state.industry} type="text" onChange={this.enterIndustry}/>
                        <field-label>INDUSTRY</field-label>
                    </div>
                    <div key="indusEmp" className="field col-lg-12">
                        <input className={"noErrorField"} value={this.state.employeeSize} type="text" onChange={this.enterEmployeeSize}/>
                        <field-label>INDUSTRY EMPLOYEE SIZE</field-label>
                    </div>
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
                    <button className={nextClass} onClick={this.props.goToAreaIntrestInfoPage}>NEXT</button>
                </center>
                <center>
                    <label className="skip" onClick={this.props.goToAreaIntrestInfoPage} >Skip this step</label>
                </center>
            </div>
        </div>
    );
},
});
