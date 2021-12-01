import './ScoreBoard.css'

const ScoreBoard = ({score}) => {
    return (
        <div className="score-board">
            <div className="container">
                <h1 className="font-link"> Score </h1>
                <h2 className="font-link">{score * 10}</h2>
            </div>
        </div>
    )
}

export default ScoreBoard