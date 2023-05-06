import {CountType} from "../type/type";
import {ActionType} from "../type/actionType";

const initialState = {
    startValue: 0,
    step: 1,
    maxValue: 5,
    minValue: 0,
    isActive: false,
    status: false
}



export const countReducer = (state: CountType = initialState, action: ActionType): CountType => {
    switch (action.type) {
        case "SUM":
            if (state.startValue >= state.maxValue) {
                return state
            }
            return {...state, startValue: state.startValue + state.step}

        case "RESET-COUNT":
            return {...state, startValue: state.minValue}
        case "INPUT-MAX":
            return {...state, maxValue: action.maxValue}
        case "INPUT-MIN":
            return {...state, minValue: action.minValue}
        case "SET-MIN-VALUE":
            return {...state, startValue: action.minValue}
        case "ACTIVITY-CHANGES":
            return {...state, isActive: action.isActive}
        case "STATUS":
            return {...state, status: action.status}
        default:
            return state
    }
}


export const sumAC = () => {
    return {
        type: "SUM"
    } as const
}
export const resetCountAC = () => {
    return {
        type: "RESET-COUNT"
    } as const
}

export const inputMaxAC = (maxValue: number) => {
    return {
        type: "INPUT-MAX",
        maxValue: maxValue
    } as const
}

export const inputMinAC = (minValue: number) => {
    return {
        type: "INPUT-MIN",
        minValue: minValue
    } as const
}

export const setMinvalueAC = (minValue: number) => {
    return {
        type: "SET-MIN-VALUE",
        minValue: minValue
    } as const
}

export const activityChangesAC = (isActive:boolean) => {
    return {
        type: "ACTIVITY-CHANGES",
        isActive: isActive,
    } as const
}

export const statusAC = (status:boolean) => {
    return {
        type: "STATUS",
        status: status
    } as const
}