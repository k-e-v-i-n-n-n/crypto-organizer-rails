const SearchResult = () => {


    return(

        <div className="search-result-container">
            <h4>Currency</h4>
            <div className="result-tags-container">
                <p>Price</p>
                <p>Rank</p>
                <p>Day Change</p>
            </div>
            <div className="save-buttons-container">
                <button className="save-buttons" >Buy</button>
                <button className="save-buttons">Sell</button>
                <button className="save-buttons">Hold</button>
                <button className="save-buttons">Watch</button>
            </div>
        </div>
    )
}

export default SearchResult