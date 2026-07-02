function Pagination({

    currentPage,

    totalPage,

    setCurrentPage

}) {

    const pages = []

    for (let i = 1; i <= totalPage; i++) {

        pages.push(i)

    }

    return (

        <div className="pagination">

            <button

                disabled={currentPage === 1}

                onClick={() => setCurrentPage(currentPage - 1)}

            >

                ◀

            </button>

            {

                pages.map(page => (

                    <button

                        key={page}

                        className={currentPage === page ? "active" : ""}

                        onClick={() => setCurrentPage(page)}

                    >

                        {page}

                    </button>

                ))

            }

            <button

                disabled={currentPage === totalPage}

                onClick={() => setCurrentPage(currentPage + 1)}

            >

                ▶

            </button>

        </div>

    )

}

export default Pagination