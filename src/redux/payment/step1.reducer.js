import { NEW_DATA } from './step1.type';


    const INITIAL_STATE = {

        datas: [],
    };

    const reducer = (state = INITIAL_STATE, action) => {
        

        switch (action.type) {

            case NEW_DATA:

               return {

                 ...state, datas: action.data

               };

               default: return state;


        }

    };

    export default reducer;