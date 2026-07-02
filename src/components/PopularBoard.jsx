import { Link } from "react-router-dom"

function PopularBoard({

    boards

}){

    const popularBoards=[...boards]
    
    .filter(board => board.view >= 10)
    .sort((a,b)=>b.view-a.view)
    .slice(0,5)

    return(

        <div className="popularBoard">
            <h3>
                🔥 인기 게시글
            </h3>
            <ul>
                {
                    popularBoards.length === 0 ?
                    (
                        <li>
                            조회수 10 이상의 게시글이 없습니다.
                        </li>
                    )
                    :
                    (popularBoards.map(board => (
                        <li key={board.id}>
                            <Link to={`/view/${board.id}`}>
                                {board.title}
                            </Link>
                            <span>
                                조회 {board.view}
                            </span>
                        </li>
                    ))
                )
            }
        </ul>
    </div>
    )
}

export default PopularBoard