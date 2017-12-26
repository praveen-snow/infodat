import React from 'react';


const headerSC = function(store) {
    //Components
    const Header = require("components/Header");
    const TandC = require("components/TermConditionModal");
    function closeModal(caller) {
      store.dispatch({
        type: 'NAV_SET_MODAL_BASE',
        payload: {
          caller: caller,
          modal: undefined
        }
      });
    }
    return (
        <Header
            navSignUpForm={()=>{
                store.dispatch({type:'NAV_PUSH_BASE', payload: {
                    current: {
                        signup:  true,
                    }
                }});
            }}
            currentListener={ (updater)=> {
                store.subscribe(function() { updater(store.getState().navigator.current); });
            }}
            userDetailsListener={ (updater)=> {
                store.subscribe(function() { updater
                    (
                        store.getState().userInfo.userDetails.userName
                    ); 
                });
            }}

            signIn={(id)=>{
                store.dispatch({
                    type: "NAV_SET_MODAL_BASE",
                    payload: {
                        modal: (<TandC 
                            id = {id} 
                            mainTxt={"React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render  just the right components when your data changes. Build encapsulated components that manage their own state, then compose them to make complex UIs. React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render  just the right components when your data changes. Build encapsulated components that manage their own state, then compose them to make complex UIs. React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render  just the right components when your data changes. Build encapsulated components that manage their own state, then compose them to make complex UIs.React makes it painless to create interactive UIs."}
                            close={() => {
                                closeModal('vms/header')
                            }}/>
                        )
                    }
                });
            }}
        />
    );
}
//
export default headerSC;
