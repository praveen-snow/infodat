import React from 'react';

const PersonalInfoSC = function(store) {
    //Components
    const PersonalInfo = require("components/PersonalInfo");
    return (
		<PersonalInfo
            goToCompanyInfoPage={()=>{
                store.dispatch({type:'NAV_PUSH_BASE', payload: {
                    current: {
                        companyInfoPage: true
                    }
                }});   
                store.dispatch({type:'NAV_RESET_CHNAGE_DIRECTIONS'});
            }}
            userInfo={store.getState().userInfo.userDetails}
            goBack={()=>{
                store.dispatch({type:'NAV_CHNAGE_DIRECTIONS'});
                store.dispatch({type:'NAV_PUSH_BASE', payload: {
                    current: {
                        profilePicturePage: true
                    }
                }});
                //store.dispatch({type:'NAV_POP_BASE'});
            }}
        />
	);

}
//
export default PersonalInfoSC;
///companyInfoPage:  true,