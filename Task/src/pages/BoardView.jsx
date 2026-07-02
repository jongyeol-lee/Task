import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

function BoardView({ boards, setBoards }) {

    const { id } = useParams()

    const navigate = useNavigate()

    const board = boards.find(
        item => String(item.id) === id
    )

    useEffect(() => {

        if (!board) return

        const updateBoards = boards.map(item =>

            String(item.id) === id

                ? {
                    ...item,
                    view: item.view + 1
                }

                : item

        )

        setBoards(updateBoards)

    }, [])

    if (!board) {

        return <h2>게시글이 존재하지 않습니다.</h2>

    }

    return (

        <div className="viewPage">

            <h2>{board.title}</h2>

            <p>작성자 : {board.writer}</p>

            <p>작성일 : {board.date}</p>

            <p>조회수 : {board.view + 1}</p>

            <hr />

            <p>{board.content}</p>

            <div className="btnBox">

                <button
                    onClick={() => navigate(`/edit/${board.id}`)}
                >
                    수정
                </button>

                <button

                    onClick={() => {

                        if (!confirm("삭제하시겠습니까?")) {

                            return

                        }

                        const updateBoards = boards.filter(

                            item => String(item.id) !== id

                        )

                        setBoards(updateBoards)

                        navigate("/")

                    }}

                >

                    삭제

                </button>

                <button
                    onClick={() => navigate("/")}
                >

                    목록

                </button>

            </div>

        </div>

    )

}

export default BoardView