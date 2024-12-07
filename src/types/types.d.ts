export interface Technology {
    id: number;
    name: string;
}

export interface Experience {
    id: number;
    company_name: string;
    occupation: string;
    init_date: Date;
    end_date: Date;
    description: string;
    technologies: Technology[]
}

export interface Project {
    id: number;
    title: string;
    description: string;
    repository_url: string;
    img_url: string;
    demo_url: string;
    technologies: Technology[]
}