import { NEW_DATA } from './step1.type';


    export const paymentData = (data) => {

        

        return {

            type: NEW_DATA,
            data: data
        };

    };