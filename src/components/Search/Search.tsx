import './Search.scss';
import SearchInput from '../SearchInput/SearchInput';
import SearchResult from '../SearchResult/SearchResult';
import SearchBanner from '../SearchBanner/SearchBanner';

function Search() {
    return (
        <div className='search-app-container'>
            <div className='search-banner-container'>
                <div className='search-image-wrapper'>
                    <SearchBanner/>
                </div>
                <div className='search-info-wrapper'>
                    <SearchInput />
                </div>
            </div>
            <SearchResult />
        </div>
    )
}

export default Search;