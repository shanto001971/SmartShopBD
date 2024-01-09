import ProductsUseCard from "../Components/ReUseCard/ProductsUseCard";


const SearchResultsComponent = ({results}) => {
    console.log(results)
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-4 gap-2 lg:p-4">
                {
                    results?.map(singleData=>(<ProductsUseCard key={singleData?._id} data={singleData}/>))
                }

            
        </div>
    );
};

export default SearchResultsComponent;