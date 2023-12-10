import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { CiStar } from "react-icons/ci";


const RatingReviews = () => {
    return (
        <div className="mt-5 lg:flex">
            <div className="lg:flex  p-5 lg:w-[100%]">
                <div className="flex flex-col gap-2 p-3 border lg:px-8 rounded-tl-2xl">
                    <div className="flex items-center gap-2 ">
                        <h1 className="text-4xl">3.7</h1>
                        <h4 className="bg-[#FED900] px-[2px] w-16 text-center rounded flex items-center gap-1"><CiStar /> Good</h4>
                    </div>
                    <Rating
                        style={{ maxWidth: 150 }}
                        value="5"
                        readOnly
                        activeColor="#FED900"
                    />
                    <small>581 ratings</small>

                </div>

                <div className="flex flex-col gap-3 border p-3 lg:px-8 w-full rounded-tr-2xl">
                    <div className="flex items-center gap-5">
                        <Rating
                            style={{ maxWidth: 80 }}
                            value="5"
                            readOnly
                            activeColor="#FED900"
                        />
                        <progress className="progress progress-warning w-56" value={100} max="100"></progress>
                    </div>
                    <div className="flex items-center gap-5">
                        <Rating
                            style={{ maxWidth: 80 }}
                            value="4"
                            readOnly
                            activeColor="#FED900"
                        />
                        <progress className="progress progress-warning w-56" value={50} max="100"></progress>
                    </div>
                    <div className="flex items-center gap-5">
                        <Rating
                            style={{ maxWidth: 80 }}
                            value="3"
                            readOnly
                            activeColor="#FED900"
                        />
                        <progress className="progress progress-warning w-56" value={25} max="100"></progress>
                    </div>
                    <div className="flex items-center gap-5">
                        <Rating
                            style={{ maxWidth: 80 }}
                            value="2"
                            readOnly
                            activeColor="#FED900"
                        />
                        <progress className="progress progress-warning w-56" value={15} max="100"></progress>
                    </div>
                    <div className="flex items-center gap-5">
                        <Rating
                            style={{ maxWidth: 80 }}
                            value="1"
                            readOnly
                            activeColor="#FED900"
                        />
                        <progress className="progress progress-warning w-56" value={0} max="100"></progress>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default RatingReviews;