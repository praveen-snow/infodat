import React from 'react';

const ThankYouPageSC = function(store) {
    //Components
    const ThankYouPage = require("components/ThankYou");
    return (
		<ThankYouPage
            goToViewProfilePage={()=>{
                store.dispatch({
                    type: 'NAV_SET_ROUTE_STACK_BASE',
                    payload: {
                        history: [],
                        current: {
                            viewProfilePage: true
                        }
                    }
                });
            }}
        />
	);

}
//
export default ThankYouPageSC;
