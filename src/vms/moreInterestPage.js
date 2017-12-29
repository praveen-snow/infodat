import React from 'react';

const MoreInterestPageSC = function(store) {
    //Components
    const MoreInterestPage = require("components/MoreInterest");
    let userJobFunction = store.getState().userInfo.userDetails.jobFunction;
    return (
		<MoreInterestPage
            userJobFunction={userJobFunction}
            goToThankYouPage={(userInterest)=>{
                store.dispatch({type:'SAVE_USER_AREA_MORE_INTEREST', payload: {
                    userInterest:userInterest
                    }
                });
                store.dispatch({type:'NAV_RESET_DIRECTION'});
                store.dispatch({type:'NAV_REPLACE_AT_INDEX_BASE', payload: {
                        index:0,
                        current: {
                            thankYouPage: true
                        }
                    }
                });
            }}
            goBack={()=>{
                store.dispatch({type:'NAV_CHANGE_DIRECTION'});
                store.dispatch({type:'NAV_PUSH_BASE', payload: {
                    current: {
                        areasIntrestPage: true
                    }
                }});
            }}
        />
	);

}
//
export default MoreInterestPageSC;
