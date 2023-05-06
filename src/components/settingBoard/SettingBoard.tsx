import React from "react";
import {MaxInput} from "./maxInput/MaxInput";
import {MinInput} from "./minInput/MinInput";
import SuperButton from "../SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {activityChangesAC, inputMaxAC, inputMinAC, setMinvalueAC, statusAC} from "../../store/counter-reducer";
import {AppStateType} from "../../store/store";
import s from "./SettingBoarding.module.css"


export const SettingBoard = () => {

    let maxValue = useSelector<AppStateType, number>(state => state.countPage.maxValue)
    let minValue = useSelector<AppStateType, number>(state => state.countPage.minValue)
    let isActive = useSelector<AppStateType,boolean>(state => state.countPage.isActive)

    let dispatch = useDispatch()

    const inputMaxCallback = (maxValue: string) => {
        dispatch(inputMaxAC(+maxValue))
        dispatch(activityChangesAC(false))
        dispatch(statusAC(true))
    }

    const inputMinCallback = (minValue: string) => {
        dispatch(inputMinAC(+minValue))
        dispatch(activityChangesAC(false))
        dispatch(statusAC(true))

    }
    const onClickSet = () => {
        dispatch(inputMaxAC(maxValue))
        dispatch(setMinvalueAC(minValue))
        dispatch(activityChangesAC(true))
        dispatch(statusAC(false))

    }

    return (
        <div className={s.settingBoardContainer}>
            <div className={s.blockInput}>
                <div className={s.blockMaxInput}>
                    <div>max value :</div>
                    <MaxInput
                        inputMaxCallback={inputMaxCallback}
                        maxValue={maxValue}
                        minValue={minValue}
                    />
                </div>
                <div className={s.blockMinInput}>
                    <div>min value :</div>
                    <MinInput
                        inputMinCallback={inputMinCallback}
                        minValue={minValue}
                        maxValue={maxValue}
                    />
                </div>
            </div>

            <div className={s.blockButton}>
                <SuperButton
                    name={"set"}
                    onClick={onClickSet}
                    disabled={isActive || minValue < 0 || minValue >= maxValue}
                />
            </div>

        </div>
    )
}
