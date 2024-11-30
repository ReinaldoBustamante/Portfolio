export interface Technology {
    id: number;
    name: string;
}

export interface Experience {
    id: number;
    company: string;
    ocupation: string;
    init: string;
    end: string;
    description: string;
    techs: Technology[]
}