import axios from "axios";
import { useEffect, useState } from "react";
import { PlayerPage } from "types/player";
import { BASE_URL } from "utils/requests";
import JogadorCard from "../../components/JogadorCard";
import Pagination from "../../components/Pagination";

function Listing() {

    const [pageNumber, setPageNumber] = useState(0);

    useEffect(() => {
        axios.get(`${BASE_URL}/players?size=12&page=10`)
        .then(response => {
            const data = response.data as PlayerPage;
            setPageNumber(data.number);
        });
    }, []);


    return (
        <>

            <p>{pageNumber}</p>
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