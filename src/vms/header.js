import React from 'react';


const headerSC = function(store) {
    //Components
    const Header = require("components/Header");
    return (
        <Header
          navSignUpForm={()=>{
            store.dispatch({type:'NAV_PUSH_BASE', payload: {
                current: {
                    signup:  true,
                }
            }});
    			}}
        />
    );
}
//
export default headerSC;
