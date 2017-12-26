import React from 'react';

const PendingApprovalPageSC = function(store) {
    //Components
    const PendingApprovalPage = require("components/PendingApproval");
    return (
		<PendingApprovalPage
            activateAccount={()=>{
              store.dispatch({type:'NAV_PUSH_BASE', payload: {
                current: {
                  activateAcount:  true,
                }
              }});
            }}
        />
	);
}
//
export default PendingApprovalPageSC;
