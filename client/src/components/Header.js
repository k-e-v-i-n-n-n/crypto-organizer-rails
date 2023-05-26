import SearchResult from "./SearchResult"

const Header = () => {

    return(

        <div className="header-container">
            <div className="header-title">
                <h1>CRYPTOCURRENCY</h1>
                <h7>A Daily Crypto Organizer</h7>
            </div>
           
                <input className="search-input" placeholder="Search Currency"/>
        
            <div className="header-result">
                <SearchResult/>
            </div>
        </div>
    )
}

export default Header