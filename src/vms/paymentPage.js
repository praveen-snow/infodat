import React from 'react';

const PaymentPageSC = function(store) {
    //Components
    const PaymentPage = require("components/PaymentPage");
    return (
		<PaymentPage
            close={() => {
                store.dispatch({
                type: 'NAV_SET_ROUTE_STACK_BASE',
                payload: {
                    history: [],
                    current: {
                    backdrop: true
                    }
                }
                });
            }}
            goToBuildProfile={()=>{
                store.dispatch({
                    type: 'NAV_SET_ROUTE_STACK_BASE',
                    payload: {
                        history: [],
                        current: {
                            buildProfilePage: true
                        }
                    }
                });
            }}
        />
	);

}
//
export default PaymentPageSC;
