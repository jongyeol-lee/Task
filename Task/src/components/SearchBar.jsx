function SearchBar({ keyword, setKeyword }) {

    return (

        <div className="searchBar">

            <input

                type="text"

                placeholder="제목을 검색하세요."

                value={keyword}

                onChange={(e) => setKeyword(e.target.value)}

            />

        </div>

    )

}

export default SearchBar