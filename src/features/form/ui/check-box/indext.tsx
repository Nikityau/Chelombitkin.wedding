import type {FC} from "react";
import cn from 'classnames'

import style from './style.module.css'

type Props = {
    label: string;
    checked: boolean;
    onCheck: (value: number) => void;
    value: number
}

export const CheckBox: FC<Props> = ({onCheck, checked, value, label}) => {
    return (
        <div
            className={cn(
                style.checkbox,
                checked && style.checkbox_box__checked
            )}
            onClick={() => onCheck(value)}
        >
            <div className={style.checkbox_box}>

            </div>
            <span>{label}</span>
        </div>
    );
};

