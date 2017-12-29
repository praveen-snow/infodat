import React from 'react';

const AreaOfIntrestPageSC = function(store) {
    //Components
    const AreaOfIntrestPage = require("components/AreaOfIntrest");
    let userJobFunction = store.getState().userInfo.userDetails.jobFunction;
    return (
		<AreaOfIntrestPage
            userJobFunction={userJobFunction}
            goToThankYouPage={(userInterest)=>{
                store.dispatch({type:'NAV_RESET_DIRECTION'});
                store.dispatch({type:'SAVE_USER_AREA_INTEREST', payload: {
                    userInterest:userInterest
                    }
                });
                store.dispatch({
                    type: 'NAV_PUSH_BASE',
                    payload: {
                        current: {
                            moreInterestPage: true
                        }
                    }
                });
            }}
            goBack={()=>{
                store.dispatch({type:'NAV_CHANGE_DIRECTION'});
                //store.dispatch({type:'NAV_POP_BASE'});
                store.dispatch({type:'NAV_PUSH_BASE', payload: {
                    current: {
                        companyInfoPage: true
                    }
                }});
            }}
        />
	);

}
//
export default AreaOfIntrestPageSC;
