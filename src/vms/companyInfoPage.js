import React from 'react';

const CompanyInfoPageSC = function(store) {
    //Components
    const CompanyInfoPage = require("components/CompanyInfo");
    return (
		<CompanyInfoPage
            goToAreaIntrestInfoPage={()=>{
                store.dispatch({type:'NAV_PUSH_BASE', payload: {
                    current: {
                        areasIntrestPage:  true,
                    }
                }});
            }}
            companyName={store.getState().userInfo.userDetails.company}
            goBack={()=>{
                store.dispatch({type:'NAV_POP_BASE'});
            }}
        />
	);

}
//
export default CompanyInfoPageSC;
