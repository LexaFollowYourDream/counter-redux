import {
    activityChangesAC,
    inputMaxAC,
    inputMinAC,
    resetCountAC,
    setMinvalueAC,
    statusAC,
    sumAC
} from "../store/counter-reducer";

export type ActionType = ReturnType<typeof sumAC>
    | ReturnType<typeof resetCountAC>
    | ReturnType<typeof inputMaxAC>
    | ReturnType<typeof inputMinAC>
    | ReturnType<typeof setMinvalueAC>
    | ReturnType<typeof activityChangesAC>
    | ReturnType<typeof statusAC>