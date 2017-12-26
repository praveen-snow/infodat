import React from 'react';

const CompanyInfoPageSC = function(store) {
    //Components
    const CompanyInfoPage = require("components/CompanyInfo");
    return (
		<CompanyInfoPage
            goToAreaIntrestInfoPage={()=>{
                store.dispatch({type:'NAV_RESET_CHNAGE_DIRECTIONS'});
                store.dispatch({type:'NAV_PUSH_BASE', payload: {
                    current: {
                        areasIntrestPage:  true,
                    }
                }});
            }}
            companyName={store.getState().userInfo.userDetails.company}
            industry={store.getState().userInfo.userDetails.jobFunction}
            goBack={()=>{
                store.dispatch({type:'NAV_CHNAGE_DIRECTIONS'});
                store.dispatch({type:'NAV_PUSH_BASE', payload: {
                    current: {
                        personalInfoPage: true
                    }
                }});
                //store.dispatch({type:'NAV_POP_BASE'});
            }}
        />
	);

}
//
export default CompanyInfoPageSC;
