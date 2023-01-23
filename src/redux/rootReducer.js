import { combineReducers } from 'redux';


    
 import step from './steps/step.reducer';
 import step1 from './payment/step1.reducer';

    const rootReducer = combineReducers({

        
        
           step,
           step1,
    });

    export default rootReducer;