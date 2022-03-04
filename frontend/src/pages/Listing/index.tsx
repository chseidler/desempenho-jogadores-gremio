import axios from "axios";
import { BASE_URL } from "utils/requests";
import JogadorCard from "../../components/JogadorCard";
import Pagination from "../../components/Pagination";

function Listing() {


    //FORMA ERRADA
    axios.get(`${BASE_URL}/players?size=12&page=0`)
        .then(response => {
            console.log(response.data);
        });



    return (
        <>
            <Pagination />

            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <JogadorCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <JogadorCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <JogadorCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <JogadorCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <JogadorCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <JogadorCard />
                    </div>

                </div>
            </div>
        </>
    );
}

export default Listing;