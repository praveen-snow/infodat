import React from 'react';

const PendingApprovalPageSC = function(store) {
    //Components
    const PendingApprovalPage = require("components/PendingApproval");
    return (
		<PendingApprovalPage
            activateAccount={()=>{
                store.dispatch({
                    type: 'NAV_SET_ROUTE_STACK_BASE',
                    payload: {
                      history: [],
                      current: {
                        activateAcount: true
                      }
                    }
                  });
            }}
        />
	);
}
//
export default PendingApprovalPageSC;
