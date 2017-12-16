import React from 'react';
import { baseRoute } from 'constants/routeHelper';
const BuildProfileSC = function(store) {
    //Components
    const BuildProfile = require("components/BuildProfile");
    return (
		<BuildProfile
            getStarted={()=>{
                store.dispatch({type:'NAV_PUSH_BASE', payload: {
                    current: {
                        profilePicturePage:  true,
                    }
                }});
            }}
        />
	);

}
//
export default BuildProfileSC;
