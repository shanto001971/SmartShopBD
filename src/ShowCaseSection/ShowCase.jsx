

const ShowCase = () => {
    return (
        <div className="lg:flex gap-3 mt-10 ">
            <div className="lg:w-[50%] relative group">
                <img src="https://images.pexels.com/photos/11201612/pexels-photo-11201612.jpeg" alt="" className="w-full h-auto transition-opacity duration-500 ease-out" />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b7e980b8-611f-4ff4-a3fe-4e808f379062/dg5tqya-5bc80b83-5006-4b4c-9eb3-91ae50c5adee.png/v1/fill/w_512,h_896,q_80,strp/1014561499___3___a_pair_of_nike_shoes_on_teen_girl_by_aiportraitartist_dg5tqya-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODk2IiwicGF0aCI6IlwvZlwvYjdlOTgwYjgtNjExZi00ZmY0LWEzZmUtNGU4MDhmMzc5MDYyXC9kZzV0cXlhLTViYzgwYjgzLTUwMDYtNGI0Yy05ZWIzLTkxYWU1MGM1YWRlZS5wbmciLCJ3aWR0aCI6Ijw9NTEyIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.R8Z6Aha3lECm-NIExkcqTDmw-u2fWnCSYFHt8H6ysdY" alt="" className="w-full h-full" />
                </div>
            </div>
            <div className="lg:w-[50%] lg:grid grid-cols-2 gap-5">
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src="https://www.sneakersnstuff.com/images/240359/open_graph.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions w-full">
                            <button className="btn bg-[#3A2A2F] text-white w-full">Buy Now</button>
                        </div>
                    </div>
                </div>

                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src="https://i.ebayimg.com/images/g/f1kAAOSwUklkw7EO/s-l1200.webp" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions w-full">
                            <button className="btn bg-[#3A2A2F] text-white w-full">Buy Now</button>
                        </div>
                    </div>
                </div>

                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src="https://static.shiekh.com/media/catalog/product/cache/image/2000x2000/e9c3970ab036de70892d86c6d221abfe/4/a/4a76ccf18dde9d0abb2749e83b18e4fb.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions w-full">
                            <button className="btn bg-[#3A2A2F] text-white w-full">Buy Now</button>
                        </div>
                    </div>
                </div>

                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src="https://www.kickscrew.com/cdn/shop/products/main-square_23546371-e523-42c7-86d0-25781984d4c7_540x.jpg?v=1695972721" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions w-full">
                            <button className="btn bg-[#3A2A2F] text-white w-full">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowCase;