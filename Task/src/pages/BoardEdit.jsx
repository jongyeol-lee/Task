import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

function BoardEdit({ boards, setBoards }) {

    const { id } = useParams()

    const navigate = useNavigate()

    const board = boards.find(
        item => String(item.id) === id
    )

    const [title, setTitle] = useState(board.title)
    const [writer, setWriter] = useState(board.writer)
    const [content, setContent] = useState(board.content)

    function updateBoard() {

        if (
            title.trim() === "" ||
            writer.trim() === "" ||
            content.trim() === ""
        ) {

            alert("모든 항목을 입력해주세요.")

            return

        }

        const updateBoards = boards.map(item =>

            String(item.id) === id

                ? {
                    ...item,
                    title,
                    writer,
                    content
                }

                : item

        )

        setBoards(updateBoards)

        alert("수정되었습니다.")

        navigate("/")

    }

    return (

        <div className="editPage">

            <h2>게시글 수정</h2>

            <input

                type="text"

                value={title}

                onChange={(e)=>setTitle(e.target.value)}

            />

            <input

                type="text"

                value={writer}

                onChange={(e)=>setWriter(e.target.value)}

            />

            <textarea

                rows="10"

                value={content}

                onChange={(e)=>setContent(e.target.value)}

            />

            <div className="btnBox">

                <button onClick={updateBoard}>

                    저장

                </button>

                <button onClick={()=>navigate(-1)}>

                    취소

                </button>

            </div>

        </div>

    )

}

export default BoardEdit