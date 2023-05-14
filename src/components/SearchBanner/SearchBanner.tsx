import './SearchBanner.scss';
import { FcDocument } from "react-icons/fc";
import { FiSearch } from "react-icons/fi";

function SearchBanner() {
    return (
        <div className='search-banner-wrapper'>
            <FcDocument/>
            <div className='search-icon'>
                <FiSearch/>
            </div>
        </div>
    )
}

export default SearchBanner;