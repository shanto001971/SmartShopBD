// SearchResultsPage.js
import { useContext } from 'react';
import SearchResultsComponent from './SearchResultsComponent'; // Import or create your SearchResultsComponent
import { AuthContext } from '../Provider/AuthProvider';

const SearchResultsPage = () => {
    const { searchData } = useContext(AuthContext)


    return (
        <div>
            <SearchResultsComponent results={searchData} />
        </div>
    );
};

export default SearchResultsPage;
