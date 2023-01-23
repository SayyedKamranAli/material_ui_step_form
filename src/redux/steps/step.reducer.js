import { ADD_DATA } from './step.type';


    const INITIAL_STATE = {

        fields: [],
    };

    const reducer = (state = INITIAL_STATE, action) => {
        

        switch (action.type) {

            case ADD_DATA:

               return {

                 ...state, fields: action.data

               };

               default: return state;


        }

    };

    export default reducer;