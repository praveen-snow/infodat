import React from 'react';

const ThankYouPageSC = function(store) {
    //Components
    const ThankYouPage = require("components/ThankYou");
    return (
		<ThankYouPage
            goToViewProfilePage={()=>{
                store.dispatch({type:'NAV_RESET_CHNAGE_DIRECTIONS'});
                store.dispatch({type:'NAV_PUSH_BASE', payload: {
                    current: {
                        userProfilePage:  true,
                    }
                }});
            }}
        />
	);
}
//
export default ThankYouPageSC;
