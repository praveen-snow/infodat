import React from 'react';

const ProfilePictureSC = function(store) {
    //Components
    const ProfilePicture = require("components/ProfilePicture");
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
		<ProfilePicture
            goToPersonalInfoPage={()=>{
                store.dispatch({type:'NAV_RESET_CHNAGE_DIRECTIONS'});
                store.dispatch({type:'NAV_PUSH_BASE', payload: {
                    current: {
                        personalInfoPage:  true,
                    }
                }});
            }}
            uploadImage={()=>{
                const UpLoadPopUp = require("components/ProfilePictureEdit");
                store.dispatch({
                    type: "NAV_SET_MODAL_BASE",
                    payload: {
                      modal: (<UpLoadPopUp 
                        close={() => {
                            closeModal('vms/profilePicturePage')
                        }}/>
                      )
                    }
                });
            }}
        />
	);

}
//
export default ProfilePictureSC;
