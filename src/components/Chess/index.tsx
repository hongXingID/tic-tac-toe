import { useCallback } from "react";
import { ChessType } from "../../types/enums"
import style from "./index.module.css"

interface IProps {
    type: ChessType,
    onClick?: () => void
}

export function Chess({ type, onClick }: IProps) {
    let chess = null;

    if (type === ChessType.red) {
        chess = <div className={style.red}></div>
    } else if(type === ChessType.black){
        chess = <div className={style.black}></div>
    }

    const itemClick = useCallback(
        () => {
            if (type === ChessType.none && onClick) {
                onClick()
            }
        },
        [],
    )

    return (
        <div className={style.container} onClick={itemClick}>
            {chess}
        </div>
    )
}
