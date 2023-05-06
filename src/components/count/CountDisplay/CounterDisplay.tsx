import React from "react";

import s from "./CountDisplay.module.css"

type CounterDisplayType = {
    text: string,
    starValue: number,
    minValue: number,
    maxValue: number,
    status: boolean,
}

export const CounterDisplay:React.FC<CounterDisplayType> = ({
                                                                text,
                                                                starValue,
                                                                minValue,
                                                                maxValue,
                                                                status,

                                                            }) => {


    return (
        status
            ?
           minValue < 0 || maxValue <= minValue
                ?
                <h1 className={s.errorText}>
                    not correct !!!
                </h1>
                :
                <h1 className={starValue === maxValue ? `${s.number}` : `${s.numberCounter}`}>
                    {text}
                </h1>
            :
            minValue < 0 || maxValue <= minValue
                ?
                <div className={s.errorText}>
                    not correct !!!
                </div>
                :
                <h1 className={starValue === maxValue ? `${s.number}` : `${s.numberCounter}`}>
                    {starValue}
                </h1>

    )
}