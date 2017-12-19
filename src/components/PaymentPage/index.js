/* src/components/PaymentPage */
import React from 'react';
import ss from './styles.scss';
import PureRenderMixin  from 'react-addons-pure-render-mixin';
import {
    CardElement,
    PaymentRequestButtonElement,
    StripeProvider,
    Elements,
    injectStripe
} from 'react-stripe-elements';

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
handleBlur(){
    console.log('[blur]');
},
handleChange(change) {
    console.log('[change]', change);
},
handleClick(){
    console.log('[click]');
},
handleFocus() {
    console.log('[focus]');
},
handleReady(){
    console.log('[ready]');
},
createOptions(fontSize){
    return {
        style: {
        base: {
            fontSize,
            color: '#424770',
            letterSpacing: '0.025em',
            fontFamily: 'Avenir, sans-serif',
            '::placeholder': {
                color: '#000',
            },
        },
        invalid: {
            color: '#9e2146',
        },
        },
    };
},
  
render() {
    let submitEnabled = ( this.state.passwordSuccess && this.state.confirmPasswordSuccess && this.state.secQuestion !== '' && this.state.secAnswerSuccess ) ? "submitBtn EnableBtn" : "submitBtn DisableBtn";
    return (
        <div className="QRZT_BasicModal">
            <div className="ModalWrap">
                <div className="closeBtn"><img className="closeImg" onClick={this.props.close}src="assets/png/close.png"></img></div>
                <center>
                    <h2>Payment Information</h2>
                </center>
                <section className="MainContent">
                    <p>In order to get started, please provide your payment info. As promised, your first 3 months will be on us!</p>
                </section>
                <center>
                    <img className="paymentImg" src="assets/png/payment.png"></img>
                </center>
                <StripeProvider apiKey="pk_test_6pRNASCoBOKtIshFeQd4XMUh">
                    <Elements>
                        <div className="strpeEle">
                            <span>Credit or debit card</span>
                            <CardElement
                                onBlur={this.handleBlur}
                                onChange={this.handleChange}
                                onFocus={this.handleFocus}
                                onReady={this.handleReady}
                                {...this.createOptions("14px")}
                            />
                            <center>
                                <button onClick={this.props.goToBuildProfile}>Submit Payment</button>
                            </center>
                        </div>
                    </Elements>
                </StripeProvider>
            </div>
        </div>
    );
},
});
