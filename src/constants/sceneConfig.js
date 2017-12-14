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
        Enter: {x: spring(-100,[300,20]), z: 2 },
        Leave: {x: spring(-100,[300,25]), z: 2 },
        Styles(val) {
            return { x:spring(val.x), y: val.y, z: 2, opacity: val.opacity};
        },
        VM(store) {
            return require("vms/activateAccount")(store);
        }
    }
};
