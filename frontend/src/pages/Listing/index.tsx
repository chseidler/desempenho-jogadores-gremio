import axios from "axios";
import { useEffect, useState } from "react";
import { PlayerPage } from "types/player";
import { BASE_URL } from "utils/requests";
import PlayerCard from "../../components/PlayerCard";
import Pagination from "../../components/Pagination";

function Listing() {

    const [pageNumber, setPageNumber] = useState(0);

    const [page, setPage] = useState<PlayerPage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 6,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true,
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/players?size=6&page=${pageNumber}`)
            .then(response => {
                const data = response.data as PlayerPage;
                setPage(data);
            });
    }, [pageNumber]);

    const handlePageChange = (newPageNumber : number) => {
        setPageNumber(newPageNumber);
    }

    return (
        <>
            <Pagination page={page} onChange={handlePageChange} />

            <div className="container">
                <div className="row">
                    {page.content.map(player => (
                        <div key={player.id} className="col-sm-6 col-lg-4 col-xl-4 mb-4">
                            <PlayerCard player={player} />
                        </div>
                    ))}
                </div>
            </div>

            <Pagination page={page} onChange={handlePageChange} />
        </>
    );
}

export default Listing;