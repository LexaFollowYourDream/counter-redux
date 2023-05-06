import React, {ChangeEvent} from "react";
import s from "./MaxInput.module.css"

export type MaxInputPropsType = {
    inputMaxCallback: (maxValue: string) => void
    maxValue: number
    minValue: number
}


export const MaxInput: React.FC<MaxInputPropsType> = ({
                                                          inputMaxCallback,
                                                          maxValue,
                                                          minValue,
                                                      }) => {

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.currentTarget.value)
        inputMaxCallback(event.currentTarget.value)
    }

    return (
        maxValue <= minValue || maxValue < 0
            ?
            <input
                type="number"
                value={maxValue}
                onChange={onChangeHandler}
                className={s.inputNumberError}
            />
            :
            <input
                type="number"
                value={maxValue}
                onChange={onChangeHandler}
                className={s.inputMin}
            />
    )
}
