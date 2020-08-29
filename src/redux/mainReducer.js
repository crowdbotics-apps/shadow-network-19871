import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth2195431Reducer from '../features/EmailAuth2195431/redux/reducers';
import SignUp22495428Reducer from '../features/SignUp22495428/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth2195431: EmailAuth2195431Reducer,
SignUp22495428: SignUp22495428Reducer,

});