import React from 'react';

const AccountActivationSC = function(store) {
    //Components
    const ActivationAccount = require("components/ActivationAccount");
    return (
		<ActivationAccount
            workEmail={store.getState().userInfo.userDetails ? store.getState().userInfo.userDetails.workEmail : ''}
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
            paymentPage={()=>{
                store.dispatch({type:'NAV_PUSH_BASE', payload: {
                    current: {
                        paymentPage:  true,
                    }
                }});
            }}
        />
	);
}
//
export default AccountActivationSC;
