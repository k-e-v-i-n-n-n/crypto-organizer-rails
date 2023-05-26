import SearchResult from "./SearchResult"

const Header = () => {

    return(

        <div className="header-container">
            <div className="header-search">
                <h3>CRYPTOCURRENCY</h3>
                <h7>A Daily Crypto Organizer</h7>
                <input placeholder="Search Currency"/>
            </div>
            <div className="header-result">
                <SearchResult/>
            </div>
        </div>
    )
}

export default Header