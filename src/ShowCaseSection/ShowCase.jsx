import ProductsUseCard from "../Components/ReUseCard/ProductsUseCard";


const ShowCase = ({ data }) => {

    return (
        <div className="lg:flex gap-3 my-10 ">
            <div className="lg:w-[50%] relative group">
                <img className="w-full  transition-opacity duration-500 ease-out " src="https://images.pexels.com/photos/11201612/pexels-photo-11201612.jpeg" alt="" />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                    <img className="w-full" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b7e980b8-611f-4ff4-a3fe-4e808f379062/dg5tqya-5bc80b83-5006-4b4c-9eb3-91ae50c5adee.png/v1/fill/w_512,h_896,q_80,strp/1014561499___3___a_pair_of_nike_shoes_on_teen_girl_by_aiportraitartist_dg5tqya-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODk2IiwicGF0aCI6IlwvZlwvYjdlOTgwYjgtNjExZi00ZmY0LWEzZmUtNGU4MDhmMzc5MDYyXC9kZzV0cXlhLTViYzgwYjgzLTUwMDYtNGI0Yy05ZWIzLTkxYWU1MGM1YWRlZS5wbmciLCJ3aWR0aCI6Ijw9NTEyIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.R8Z6Aha3lECm-NIExkcqTDmw-u2fWnCSYFHt8H6ysdY" alt="" />
                </div>
            </div>
            <div className="lg:w-[50%] grid grid-cols-2 gap-5">
                {
                    data?.slice(16,20).map(singleData=><ProductsUseCard key={singleData?._id} data={singleData} />)
                }
            </div>
        </div>
    );
};

export default ShowCase;