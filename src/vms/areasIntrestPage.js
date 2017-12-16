import React from 'react';

const PaymentPageSC = function(store) {
    //Components
    const PaymentPage = require("components/PaymentPage");
    return (
		<PaymentPage
            goToThankYouPage={()=>{
                store.dispatch({
                    type: 'NAV_SET_ROUTE_STACK_BASE',
                    payload: {
                        history: [],
                        current: {
                            thankYouPage: true
                        }
                    }
                });
            }}
        />
	);

}
//
export default PaymentPageSC;
