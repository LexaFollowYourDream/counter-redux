import React, {ChangeEvent} from "react";
import s from "./MinInput.module.css"

export type MinInputPropsType = {
    inputMinCallback: (maxValue: string) => void
    minValue: number
    maxValue: number
}

export const MinInput: React.FC<MinInputPropsType> = ({
                                                          inputMinCallback,
                                                          minValue,
                                                          maxValue
                                                      }) => {


    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.currentTarget.value)
        inputMinCallback(event.currentTarget.value)
    }

    return (
        minValue < 0 || minValue >= maxValue
            ?
            <input
                type="number"
                value={minValue}
                onChange={onChangeHandler}
                className={s.inputNumberError}
            />
            :
            <input
                type="number"
                value={minValue}
                onChange={onChangeHandler}
                className={s.inputMin}
            />
    )
}