import type {FC, ReactNode} from "react";

import style from './style.module.css'

type Props = {
    title: ReactNode
}

export const DocTitle: FC<Props> = ({title}) => {
    return (
        <div className={style.doc_title}>
            <span>{title}</span>
        </div>
    );
};

