import { Link } from "react-router-dom"

function Sidebar() {

    return (

        <aside className="sidebar">

            <ul>

                <li>

                    <Link to="/">게시글 목록</Link>

                </li>

                <li>

                    <Link to="/write">글쓰기</Link>

                </li>

            </ul>

        </aside>

    )

}

export default Sidebar