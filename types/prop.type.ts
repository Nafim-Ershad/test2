import type { TeamMember } from "./team.type";

export interface iCheckbox{
    checked: boolean;
    cursor: boolean;
}

export interface iUpdateHeader{
    date: Date
}

export interface iActivityContainer{
    name: string[];
    time: string[];
    date: Date;
    imgUrl: string[];
}

export interface iActivityProjects{
    name: string;
    team: string;
    members: TeamMember[];
    labels: string[];
    attachment: number;
    workDone: number;
    workRemaining: number;
    deadline: number;
    progress: number;
}