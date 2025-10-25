import {type FC, Fragment, type ReactNode} from "react";

import style from './style.module.css'

type Props = {
    text: ReactNode
}

export const DocText: FC<Props> = ({text}) => {
    const spaces = Array.from({ length: 4 })

    return (
        <div className={style.doc_text}>
            <span>{spaces.map((_,i) => <Fragment key={i}>&nbsp;</Fragment>)}</span>{text}
        </div>
    );
};

