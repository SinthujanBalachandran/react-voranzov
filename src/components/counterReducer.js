import { INCREMENT ,DECREMENT} from './counterConstant';

const InitialState ={
    Count: 5
};

const countReducer =(state = InitialState,action) =>{
switch(action.type){
    case INCREMENT:
        return{
            Count: state.Count + 1
        };
        case DECREMENT:
            return{
                Count: state.Count -1
            };
            default:
                return state;
}
}
export default countReducer;