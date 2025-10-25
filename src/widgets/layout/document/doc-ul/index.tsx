import {type CSSProperties, type FC, type ReactNode} from 'react';

import cstyle from './style.module.css'

type Props = {
    title: string
    list: Array<ReactNode>,
    style?: CSSProperties,
}

export const DocUl: FC<Props> = ({list, style,title}) => {
    return (
        <div
            className={cstyle.ul}
            style={style}
        >
            <div className={cstyle.ul_header}>{title}</div>
            <div className={cstyle.ul_list}>
                {
                    list.map((v, i) => (
                        <div className={cstyle.ul_list_item} key={i}>
                            <span>{i + 1}. </span>
                           {v}
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

