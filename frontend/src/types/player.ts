export type Player = {
    id: number;
    name: string;
    score: number;
    count: number;
    image: string;
    position: string;
}

export type PlayerPage = {
    content: Player[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}