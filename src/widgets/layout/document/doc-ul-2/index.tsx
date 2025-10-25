import {type FC, Fragment} from "react";

import cstyle from './style.module.css'

type Props = {
    title: string,
    list: Array<string>
}

export const DocUl2: FC<Props> = ({list,title}) => {
    const spaces = Array.from({ length: 4 })

    return (
        <div className={cstyle.block}>
            <div className={cstyle.ul_header}><span>{spaces.map((_,i) => <Fragment key={i}>&nbsp;</Fragment>)}</span>{title}
            </div>
            <div className={cstyle.ul_list}>
                {
                    list.map((v, i) => (
                        <div className={cstyle.ul_list_item} key={i}>
                            <span>{i + 1}. </span>
                            <span>{v}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

