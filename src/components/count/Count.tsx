import React from "react";
import {CounterDisplay} from "./CountDisplay/CounterDisplay";
import SuperButton from "../SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {resetCountAC, sumAC} from "../../store/counter-reducer";
import s from "./Count.module.css"
import {AppStateType} from "../../store/store";


export const Count = () => {

    let startValue = useSelector<AppStateType, number>(state => state.countPage.startValue)
    let maxValue = useSelector<AppStateType, number>(state => state.countPage.maxValue)
    let minValue = useSelector<AppStateType, number>(state => state.countPage.minValue)
    let status = useSelector<AppStateType,boolean>(state => state.countPage.status)

    let dispatch = useDispatch()

    const addPlus = () => {
        dispatch(sumAC())
    }
    const countZero = () => {
        dispatch(resetCountAC())
    }


    return (
        <div className={s.containerCount}>
            <div className={s.CounterDisplay}>
                <CounterDisplay
                    text={"Нажмите Set"}
                    starValue={startValue}
                    minValue = {minValue}
                    maxValue = {maxValue}
                    status = {status}
                />
            </div>
            <div className={s.blockButtons}>
                <SuperButton
                    className={startValue === maxValue ? `${s.buttonIncRed}` : `${s.buttonInc}`}
                    disabled={minValue < 0 || minValue >= maxValue || startValue === maxValue}
                    onClick={addPlus}
                    name={"inc"}
                />
                <SuperButton
                    className={s.buttonReset}
                    onClick={countZero}
                    name={"reset"}
                    disabled={minValue < 0 || minValue >= maxValue}
                />
            </div>
        </div>
    )
}
