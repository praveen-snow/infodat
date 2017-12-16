import React from 'react';

const PaymentPageSC = function(store) {
    //Components
    const PaymentPage = require("components/PaymentPage");
    return (
		<PaymentPage
            workEmail={"praveen.chundi@infodatinc.com"}
            goToAreaIntrestInfoPage={()=>{
                store.dispatch({type:'NAV_PUSH_BASE', payload: {
                    current: {
                        personalInfoPage:  true,
                    }
                }});
            }}
        />
	);

}
//
export default PaymentPageSC;
