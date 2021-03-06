import { spring } from 'react-motion';

export default {
    backdrop: {
        Enter: { z: -10 },
        Leave: { z: -10 },
        Styles(val) {
            return { x: val.x, y: val.y, z: -10 };
        },
        VM(store) {
            return require("vms/backdrop")(store);
        }
    },
    header: {
        Enter: { y:spring(-50),z: 10 },
        Leave: { y:spring(-50),z: 10 },
        Styles(val) {
            return { x: val.x, y: spring(val.y), z: 10 };
        },
        VM(store) {
            return require("vms/header")(store);
        }
    },
    signup:{
        Enter: { y:spring(-100, [300, 20]),z: 15 },
        Leave: { y:spring(-100, [300, 20]),z: 15 },
        Styles(val) {
            return { x: val.x, y: spring(val.y), z: 15, opacity: val.opacity };
        },
        VM(store) {
            return require("vms/signup")(store);
        }
    },
    activateAcount:{
        Enter: { y:spring(-100, [300, 20]),z: 15 },
        Leave: { y:spring(-100, [300, 20]),z: 15 },
        Styles(val) {
            return { x: val.x, y: spring(val.y), z: 15, opacity: val.opacity };
        },
        VM(store) {
            return require("vms/activateAccount")(store);
        }
    },
    paymentPage:{
        Enter: { y:spring(-100, [300, 20]),z: 15 },
        Leave: { y:spring(-100, [300, 20]),z: 15 },
        Styles(val) {
            return { x: val.x, y: spring(val.y), z: 15, opacity: val.opacity };
        },
        VM(store) {
            return require("vms/paymentPage")(store);
        }
    },
    pendingApprovalPage:{
        Enter: { y:spring(-100, [300, 20]),z: 15 },
        Leave: { y:spring(-100, [300, 20]),z: 15 },
        Styles(val) {
            return { x: val.x, y: spring(val.y), z: 15, opacity: val.opacity };
        },
        VM(store) {
            return require("vms/pendingApprovalPage")(store);
        }
    },
    buildProfilePage:{
        Enter: {x: spring(100,[300,20]), z: 2 },
        Leave: {x: spring(-100,[300,20]), z: 2 },
        Styles(val) {
            return { x:spring(val.x), y: val.y, z: 2, opacity: val.opacity};
        },
        VM(store) {
            return require("vms/buildProfilePage")(store);
        }
    },
    profilePicturePage:{
        Enter: {x: spring(100,[300,20]), z: 2 },
        Leave: {x: spring(-100,[300,20]), z: 2 },
        Styles(val) {
            return { x:spring(val.x), y: val.y, z: 2, opacity: val.opacity};
        },
        VM(store) {
            return require("vms/profilePicturePage")(store);
        }
    },
    personalInfoPage:{
        Enter: {x: spring(100,[300,20]), z: 2 },
        Leave: {x: spring(-100,[300,20]), z: 2 },
        Styles(val) {
            return { x:spring(val.x), y: val.y, z: 2, opacity: val.opacity};
        },
        VM(store) {
            return require("vms/personalInfoPage")(store);
        }
    },
    companyInfoPage:{
        Enter: {x: spring(100,[300,20]), z: 2 },
        Leave: {x: spring(-100,[300,20]), z: 2 },
        Styles(val) {
            return { x:spring(val.x), y: val.y, z: 2, opacity: val.opacity};
        },
        VM(store) {
            return require("vms/companyInfoPage")(store);
        }
    },
    areasIntrestPage:{
        Enter: {x: spring(100,[300,20]), z: 2 },
        Leave: {x: spring(-100,[300,20]), z: 2 },
        Styles(val) {
            return { x:spring(val.x), y: val.y, z: 2, opacity: val.opacity};
        },
        VM(store) {
            return require("vms/areasIntrestPage")(store);
        }
    },
    moreInterestPage:{
        Enter: {x: spring(100,[300,20]), z: 2 },
        Leave: {x: spring(-100,[300,20]), z: 2 },
        Styles(val) {
            return { x:spring(val.x), y: val.y, z: 2, opacity: val.opacity};
        },
        VM(store) {
            return require("vms/moreInterestPage")(store);
        }
    },
    thankYouPage:{
        Enter: {x: spring(100,[300,20]), z: 2 },
        Leave: {x: spring(-100,[300,20]), z: 2 },
        Styles(val) {
            return { x:spring(val.x), y: val.y, z: 2, opacity: val.opacity};
        },
        VM(store) {
            return require("vms/thankYouPage")(store);
        }
    },
    userProfilePage:{
        Enter: { y:spring(100, [300, 20]),z: 15 },
        Leave: { y:spring(-100, [300, 20]),z: 15 },
        Styles(val) {
            return { x: val.x, y: spring(val.y), z: 15, opacity: val.opacity };
        },
        VM(store) {
            return require("vms/userProfilePage")(store);
        }
    }
};
