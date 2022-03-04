import axios from "axios";
import { useEffect, useState } from "react";
import { PlayerPage } from "types/player";
import { BASE_URL } from "utils/requests";
import JogadorCard from "../../components/JogadorCard";
import Pagination from "../../components/Pagination";

function Listing() {

    const [pageNumber, setPageNumber] = useState(0);

    const [page, setPage] = useState<PlayerPage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true,
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/players?size=12&page=${pageNumber}`)
            .then(response => {
                const data = response.data as PlayerPage;
                setPage(data);
            });
    }, [pageNumber]);

    return (
        <>
            <Pagination />

            <div className="container">
                <div className="row">
                    {page.content.map(player => (
                        <div key={player.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                            <JogadorCard player={player} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Listing;