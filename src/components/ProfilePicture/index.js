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
				<div className="col-lg-12">
					<section className="MainContent">
						<p>1 of 5</p>
					</section>
					<center>
						<p className="heading">Upload Profile Image</p>
					</center>
					<center>
						<img className="paymentImg" onClick={this.props.uploadImage} src="assets/png/uploadPicture.png"></img>
					</center>
					<center>
						<p className="uploadText">Uploads can have a max file size of 4MB</p>
					</center>
					<center>
						<button className="getStarted" onClick={this.goToPersonalInfoPage}>NEXT</button>
					</center>
					<center>
						<label className="skip" onClick={this.goToPersonalInfoPage} >Skip this step</label>
					</center>
				</div>
            </div>
        </div>
    );
},
});
