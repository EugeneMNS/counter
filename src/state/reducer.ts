
type HandleIncrementActionType={
    type: 'INCREMENT_COUNT'
}

type HandleDecrementActionType={
    type: 'DECREMENT_COUNT'
}
type SetCountActionType={
    type: 'SET_COUNT'
}
type StateType={type:any}

type ActionsType= HandleDecrementActionType | HandleIncrementActionType | SetCountActionType

const defaultState={
    count:0
}
export type DefaultStateType = {
    count: number
}
export const counterReducer = (state = defaultState, action:ActionsType):DefaultStateType =>{
    switch (action.type){
        case "INCREMENT_COUNT":
            return {...state, count: state.count + 1}
        case "DECREMENT_COUNT":
            return {...state, count: state.count - 1}
        case "SET_COUNT":
            return {...state, count: state.count = 0}

        default:
            return state
    }
}

export const incrementCountAC = (count: number): HandleIncrementActionType => {
    return {type: 'INCREMENT_COUNT'}
}
export const decrementCountAC = (count: number): HandleDecrementActionType => {
    return {type: 'DECREMENT_COUNT'}
}
export const setCountAC = (count: number): SetCountActionType => {
    return {type: 'SET_COUNT'}
}