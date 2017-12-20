import React from 'react';

const AreaOfIntrestPageSC = function(store) {
    //Components
    const AreaOfIntrestPage = require("components/AreaOfIntrest");
    return (
		<AreaOfIntrestPage
            goToThankYouPage={(userInterest)=>{
                store.dispatch({type:'SAVE_USER_AREA_INTEREST', payload: {
                    userInterest:userInterest
                    }
                });
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
            goBack={()=>{
                store.dispatch({type:'NAV_POP_BASE'});
            }}
        />
	);

}
//
export default AreaOfIntrestPageSC;
