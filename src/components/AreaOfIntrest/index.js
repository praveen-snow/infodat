/* src/components/PaymentPage */
import React from 'react';
import ss from './styles.scss';
import PureRenderMixin  from 'react-addons-pure-render-mixin';

export default React.createClass({
mixins: [PureRenderMixin],
getInitialState() {
    return {
        mouserHover:false,
        revenue:'',
        industry:'',
        employeeSize:''
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
createSubCategory(cat){
    let subCategory = 8;
    let arr = [];
    for(let i = 0; i< subCategory ; i++){
        arr.push(<div key={cat + i}><div className="subCategory">
        {"Subcategory - " + i}
        </div></div>);
    }
    return arr;
},
createCategory(){
    let category = ["Supply Chain","Procurement","Manufacturing","Finance","Human Resources","Marketing"];
    let arr = [];
    for(let i in category){
        arr.push(
            <div key = {category[i]} className="cateGory">
                <h3>{category[i]}</h3>
                <div className="flexFlow">
                    <div className="subWrapper">
                        {this.createSubCategory(category[i])}
                    </div>
                </div>
            </div>
        );
    }
    return arr;
},
  
render() {
    let submitEnabled = ( this.state.passwordSuccess && this.state.confirmPasswordSuccess && this.state.secQuestion !== '' && this.state.secAnswerSuccess ) ? "submitBtn EnableBtn" : "submitBtn DisableBtn";
    let nextClass = this.state.mouserHover ? "getStarted next DisableBtn" : "getStarted next";
    return (
        <div className="QRZT_BasicModal" onClick={this.props.close}>
            <div className="ModalWrap">
                <section className="MainContent">
                    <p>4 of 4</p>
                </section>
                <center>
                    <p className="heading">Areas of Interest</p>
                </center>
                <section className="MainContent">
                    <p>Select Areas of Interests From the Categories below.</p>
                </section>
                <div className="AllCateGory">
                    <div className="wrapper">
                        {this.createCategory()}
                    </div>
                </div>
                <center>
                    <button className="getStarted previous" 
                        onMouseOver={()=>{
                            this.setState({mouserHover:true});
                        }}
                        onMouseOut={()=>{
                            this.setState({mouserHover:false});
                        }}
                        onClick={this.props.goBack}>PREVIOUS</button>
                    <button className={nextClass} onClick={this.props.goToThankYouPage}>NEXT</button>
                </center>
                <center>
                    <label className="skip" onClick={this.props.goToThankYouPage}>Skip this step</label>
                </center>
            </div>
        </div>
    );
},
});
