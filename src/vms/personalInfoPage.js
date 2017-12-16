import React from 'react';

const PersonalInfoSC = function(store) {
    //Components
    const PersonalInfo = require("components/PersonalInfo");
    return (
		<PersonalInfo
            goToCompanyInfoPage={()=>{
                store.dispatch({type:'NAV_PUSH_BASE', payload: {
                    current: {
                        thankYouPage: true
                    }
                }});
            }}
            goBack={()=>{
                store.dispatch({type:'NAV_POP_BASE'});
            }}
        />
	);

}
//
export default PersonalInfoSC;
///companyInfoPage:  true,