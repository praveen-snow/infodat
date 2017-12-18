import React from 'react';

const AccountActivationSC = function(store) {
    //Components
    const ActivationAccount = require("components/ActivationAccount");
    return (
		<ActivationAccount
            workEmail={"praveen.chundi@infodatinc.com"}
            paymentPage={()=>{
                store.dispatch({
                    type: 'NAV_SET_ROUTE_STACK_BASE',
                    payload: {
                        history: [],
                        current: {
                            paymentPage: true
                        }
                    }
                });
            }}
        />
	);

}
//
export default AccountActivationSC;
