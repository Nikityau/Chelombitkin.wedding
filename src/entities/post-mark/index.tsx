import type {FC} from "react";

import style from './style.module.css'

type Props = {
    title: string
}

export const PostMark: FC<Props> = ({title}) => {
    return (
        <div className={style.post}>
            <p>ПОЧТА</p>
            <p>{title}</p>
        </div>
    );
};

