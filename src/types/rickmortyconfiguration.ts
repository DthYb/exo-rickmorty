export interface RmData {
    id: number;
    name: string;
    genders: string;
    image: string;
    status: string;
    species: string;
    episode: Episode[];
    type: string;
    url: string;
}

export interface Episode {
    url: string;
}

export interface Location {
    name: string;
    url: string;
}

export interface Origin {
    name: string;
    url: string;
}