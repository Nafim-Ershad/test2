import { Team3, Team4, Team5, Team6, Team7 } from "./members";

export function changedLastUpdate(days: number = 0){
    const currentDate = new Date();
    const updatedDateBy = new Date(currentDate);

    updatedDateBy.setDate(currentDate.getDate() - days);
    return updatedDateBy;
}

export function dateFormatter(date: Date){
    const [day, month, year] = date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    }).split(" ");
    return `${month} ${day}, ${year}`;
}

export const AllProjects = [
    {
        id: 1,
        name: "CaPay Digital Wallet iOS UI Kit",
        team: "Nicolas Team",
        attachment: 13,
        deadline: 5,
        progress: 80,
        members: Team3,
        workeRemaining: 5,
        workDone: 3,
        lastUpdate: changedLastUpdate(5)
    },
    {
        id: 2,
        name: "Product Review for UI8 Market",
        team: "Nicolas Team",
        attachment: 5,
        deadline: 1,
        progress: 48,
        members: Team4,
        workeRemaining: 10,
        workDone: 6,
        lastUpdate: changedLastUpdate() // Today
    },
    {
        id: 3,
        name: "Development of NicolasLab.co Website",
        team: "Carrot Team",
        attachment: undefined,
        deadline: 10,
        progress: 62,
        members: Team5,
        workeRemaining: 7,
        workDone: 4,
        lastUpdate: changedLastUpdate(2)
    },
    {
        id: 4,
        name: "UX Research for Product",
        team: "Nicolas Team",
        attachment: 7,
        deadline: 10,
        progress: 23,
        members: Team6,
        workeRemaining: 5,
        workDone: 5,
        lastUpdate: changedLastUpdate(1) // Yesterday
    },
    {
        id: 5,
        name: "Design Website for NicolasLabs",
        team: "Nicolas Team",
        attachment: 5,
        deadline: 1,
        progress: 77,
        members: Team7,
        workeRemaining: 8,
        workDone: 3,
        lastUpdate: changedLastUpdate(3)
    },
]