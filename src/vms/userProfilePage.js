import React from 'react';

const UserProfileSC = function(store) {
    //Components
    const UserProfile = require("components/UserProfile");
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
		<UserProfile
      userDetails={store.getState().userInfo.userDetails}
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
export default UserProfileSC;
