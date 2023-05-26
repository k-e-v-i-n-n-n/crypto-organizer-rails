import SearchResult from "./SearchResult"
import avatar from "../images/avatar.png"


const Header = () => {

    return(

        <div className="header-container">
            <div className="header-title-container">
                <div className="space-div-left"></div>
                <div className="header-title">
                    <h1>CRYPTOCURRENCY</h1>
                    <h7>A Daily Crypto Organizer</h7>
                </div>
                <div className="space-div-right">
                    <img className="avatar" src={avatar}/>
                </div>
            </div>
           
                <input className="search-input" placeholder="Search Currency"/>
               
        
            <div className="header-result">
                <SearchResult/>
            </div>
        </div>
    )
}

export default Header