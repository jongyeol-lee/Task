import { Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"

import Home from "./pages/Home"
import BoardWrite from "./pages/BoardWrite"
import BoardView from "./pages/BoardView"
import BoardEdit from "./pages/BoardEdit"

import BoardData from "./data/BoardData"

import "./App.css"

function App() {

    const [boards, setBoards] = useState([])

    useEffect(() => {

        const savedBoard = localStorage.getItem("boards")

        if (savedBoard) {

            setBoards(JSON.parse(savedBoard))

        }

        else {

            setBoards(BoardData)

        }

    }, [])

    useEffect(() => {

        localStorage.setItem(

            "boards",

            JSON.stringify(boards)

        )
    }, [boards])

    return (

        <Routes>

            <Route

                path="/"

                element={

                    <Home

                        boards={boards}

                        setBoards={setBoards}

                    />

                }

            />

            <Route

                path="/write"

                element={

                    <BoardWrite

                        boards={boards}

                        setBoards={setBoards}

                    />

                }

            />

            <Route

                path="/view/:id"

                element={

                    <BoardView

                        boards={boards}

                        setBoards={setBoards}

                    />

                }

            />

            <Route

                path="/edit/:id"

                element={

                    <BoardEdit

                        boards={boards}

                        setBoards={setBoards}

                    />

                }

            />

        </Routes>

    )

}

export default App