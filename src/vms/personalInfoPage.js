import React from 'react';

const PersonalInfoSC = function(store) {
    //Components
    const PersonalInfo = require("components/PersonalInfo");
    const EditPopUp = require("components/ProfileEdit");

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
		<PersonalInfo
            goToCompanyInfoPage={()=>{
                store.dispatch({type:'NAV_PUSH_BASE', payload: {
                    current: {
                        companyInfoPage: true
                    }
                }});   
                store.dispatch({type:'NAV_RESET_DIRECTION'});
            }}
            userInfo={store.getState().userInfo.userDetails}
            goBack={()=>{
                store.dispatch({type:'NAV_CHANGE_DIRECTION'});
                store.dispatch({type:'NAV_PUSH_BASE', payload: {
                    current: {
                        profilePicturePage: true
                    }
                }});
                //store.dispatch({type:'NAV_POP_BASE'});
            }}
            editProfile={(modalId)=>{ 
                store.dispatch({ 
                    type: "NAV_SET_MODAL_BASE", 
                    payload: { 
                        modal: ( 
                            <EditPopUp  
                                id={modalId} 
                                close={() => { 
                                    closeModal('vms/userProfilePage') 
                                }} 
                            /> 
                        ) 
                    } 
                }); 
            }} 
        />
	);

}
//
export default PersonalInfoSC;
///companyInfoPage:  true,