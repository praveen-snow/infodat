import React from 'react';

const MoreInterestPageSC = function(store) {
    //Components
    const MoreInterestPage = require("components/MoreInterest");
    return (
		<MoreInterestPage
            goToThankYouPage={(userInterest)=>{
                store.dispatch({type:'SAVE_USER_AREA_INTEREST', payload: {
                    userInterest:userInterest
                    }
                });
                store.dispatch({type:'NAV_REPLACE_AT_INDEX_BASE', payload: {
                        index:0,
                        current: {
                            thankYouPage: true
                        }
                    }
                });
            }}
            goBack={()=>{
                store.dispatch({type:'NAV_POP_BASE'});
                store.dispatch({type:'NAV_POP_BASE'});
            }}
        />
	);

}
//
export default MoreInterestPageSC;
