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
    setTimeout(this.props.activateAccount, 6000);
},
componentWillUnmount() {
    ss.unuse();
    clearTimeout();
},
render() {
    return (
        <div className="QRZT_BasicModal" onClick={this.props.close}>
            <div className="ModalWrap">
                <center>
                    <p className="heading">Thank you</p>
                </center>
                <section className="MainContent">
                    <p>Thanks for submitting your application for The network. 
                        We will Get back to you in 48 - 72 hours with the status of your application. 
                        You can expect a call during the the above process.
                    </p>
                </section>
            </div>
        </div>
    );
},
});
