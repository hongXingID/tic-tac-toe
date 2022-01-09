import React from 'react'
import { ChessType, GameStatus } from '../../types/enums'
import { Board } from "../Board"
import { Title } from "../Title"

interface IState {
    chesses: ChessType[],
    gameStatus: GameStatus,
    nextChess: ChessType.red | ChessType.black
}



export class Game extends React.Component<{}, IState> {

    state: IState = {
        chesses: [],
        gameStatus: GameStatus.gaming,
        nextChess: ChessType.black
    }

    componentDidMount() {
        this.init()
    }

    boardClick = (i: number) => {
        const chesses: ChessType[] = [...this.state.chesses];
        chesses[i] = this.state.nextChess
        this.setState((prevState) => ({
            chesses,
            nextChess: prevState.nextChess === ChessType.red ? ChessType.black : ChessType.red,
            gameStatus: this.getStatus(chesses, i)
        }))
    }

    getStatus(chesses: ChessType[], index: number): GameStatus {
        const horMin = Math.floor(index / 3) * 3
        const verMin = index % 3
        if ((chesses[horMin] === chesses[horMin + 1] && chesses[horMin] === chesses[horMin + 2])
            || (chesses[verMin] === chesses[verMin + 3] && chesses[verMin] === chesses[verMin + 6])
            || (chesses[0] === chesses[4] && chesses[0] === chesses[8] && chesses[0] !== ChessType.none)
            || (chesses[2] === chesses[4] && chesses[2] === chesses[6] && chesses[2] !== ChessType.none)
        ) {
            if (chesses[index] === ChessType.red) {
                return GameStatus.redWin
            } else {
                return GameStatus.blackWin
            }
        }

        if (!chesses.includes(ChessType.none)) {
            return GameStatus.equal
        }

        return GameStatus.gaming
    }

    init() {
        const arr: ChessType[] = [];
        for (let i = 0; i < 9; i++) {
            arr.push(ChessType.none)
        }
        this.setState({
            chesses: arr,
            gameStatus: GameStatus.gaming
        })
    }

    render() {
        return (
            <div>
                <Title
                    status={this.state.gameStatus}
                    next={this.state.nextChess} />
                <Board chesses={this.state.chesses} onClick={this.boardClick} isOver={false} />
            </div>
        )
    }
}
