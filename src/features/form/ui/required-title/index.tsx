import type {FC} from "react";

import style from './style.module.css'

type Props = {
    title: string
}

export const RequiredTitle: FC<Props> = ({title}) => {
    return (
        <div className={style.required_item}>
            <span>{title}</span>
            <span>*</span>
        </div>
    );
};

