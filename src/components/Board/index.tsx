import React, { useCallback } from 'react'
import { ChessType } from '../../types/enums'
import { Chess } from "../Chess"
import style from "./index.module.css"


interface IProps {
    chesses: ChessType[],
    isOver?: boolean,
    onClick?: (index: number) => void
}

export const Board: React.FC<IProps> = (props) => {

    const isOver = props.isOver as boolean;

    const chessClick = (i: number) => useCallback(() => {
        if (props.onClick && !isOver) {
            props.onClick(i)
        }
    }, [])

    const list = props.chesses.map((type, i) => <Chess key={i} type={type} onClick={
        chessClick(i)
    } />)
    return (
        <div className={style.container}>
            {list}
        </div>
    )
}

Board.defaultProps = {
    isOver: false
}