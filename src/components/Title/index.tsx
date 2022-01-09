import { GameStatus, ChessType } from "../../types/enums"

interface IProps {
    status: GameStatus,
    next: ChessType.red | ChessType.black
}

export function Title(props: IProps) {
    let content: JSX.Element
    if (props.status === GameStatus.gaming) {
        if (props.next === ChessType.red) {
            content = <div>红方落子</div>
        } else {
            content = <div>黑方落子</div>
        }
    } else {
        if (props.status === GameStatus.redWin) {
            content = <div>红方胜利</div>
        } else if (props.status === GameStatus.blackWin) {
            content = <div>黑方胜利</div>
        } else {
            content = <div>平局</div>
        }
    }
    return (
        <div>
            {content}
        </div>
    )
}
