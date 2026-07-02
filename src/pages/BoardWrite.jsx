import { useState } from "react"
import { useNavigate } from "react-router-dom"

function BoardWrite({ boards, setBoards }) {

    const navigate = useNavigate()

    const [title, setTitle] = useState("")
    const [writer, setWriter] = useState("")
    const [content, setContent] = useState("")

    function addBoard() {

        if (title.trim() === "" || writer.trim() === "" || content.trim() === "") {

            alert("모든 항목을 입력해주세요.")

            return

        }

        const newBoard = {

            id: Date.now(),

            title,

            writer,

            content,

            date: new Date().toLocaleDateString(),

            view: 0

        }

        setBoards([newBoard, ...boards])

        navigate("/")

    }

    return (

        <div className="writePage">

            <h2>글쓰기</h2>

            <input
                type="text"
                placeholder="제목"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
            />

            <input
                type="text"
                placeholder="작성자"
                value={writer}
                onChange={(e)=>setWriter(e.target.value)}
            />

            <textarea
                placeholder="내용"
                rows="10"
                value={content}
                onChange={(e)=>setContent(e.target.value)}
            />

            <div className="btnBox">

                <button onClick={addBoard}>

                    등록

                </button>

                <button onClick={()=>navigate("/")}>

                    취소

                </button>

            </div>

        </div>

    )

}

export default BoardWrite