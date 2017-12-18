import React from 'react';

const signupVM = function(store) {
  //Components
  const Signup = require("components/Signup");
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
  return (<Signup close={() => {
      store.dispatch({
        type: 'NAV_SET_ROUTE_STACK_BASE',
        payload: {
          history: [],
          current: {
            backdrop: true
          }
        }
      });
    }} OpenTC={(id) => {
      store.dispatch({
        type: "NAV_SET_MODAL_BASE",
        payload: {
          modal: (<TandC id = {id} mainTxt={"React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render  just the right components when your data changes. Build encapsulated components that manage their own state, then compose them to make complex UIs. React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render  just the right components when your data changes. Build encapsulated components that manage their own state, then compose them to make complex UIs. React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render  just the right components when your data changes. Build encapsulated components that manage their own state, then compose them to make complex UIs.React makes it painless to create interactive UIs."}
          close={() => {
              closeModal('vms/signup')
            }}/>
          )
        }
      });
    }}
    submit={()=>{
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
    />);
}
//
export default signupVM;
