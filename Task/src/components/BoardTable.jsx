import { Link } from "react-router-dom"

function BoardTable({ boards, startNumber }) {

    return (

        <table className="boardTable">

            <thead>

                <tr>

                    <th>번호</th>

                    <th>제목</th>

                    <th>작성자</th>

                    <th>작성일</th>

                    <th>조회수</th>

                </tr>

            </thead>

            <tbody>

                {

                    boards.length === 0 ?

                        <tr>

                            <td colSpan="5">

                                게시글이 없습니다.

                            </td>

                        </tr>

                        :

                        boards.map((board, index) => (

                            <tr key={board.id}>

                                <td>{startNumber - index}</td>

                                <td>

                                    <Link to={`/view/${board.id}`}>

                                        {board.title}

                                    </Link>

                                </td>

                                <td>{board.writer}</td>

                                <td>{board.date}</td>

                                <td>{board.view}</td>

                            </tr>

                        ))

                }

            </tbody>

        </table>

    )

}

export default BoardTable