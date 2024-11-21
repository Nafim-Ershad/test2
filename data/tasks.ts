function getMonthAndYear(day?: number){
    const today = new Date();
    if(!day){
        return today.toLocaleString('en-US', { month: 'long', day:'2-digit', year: 'numeric' });
    }
    if(day > 31)
    {
        throw new Error("Need a valid day number")  
    }
    const [month, year] = today.toLocaleString('default', { month: 'long', year: 'numeric'}).split(" ");
    return `${month} ${day}, ${year}`;
}

function getTime(time?: string){
    const today = new Date();
    if(time){
        return time;
    }
    return today.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
}

export const TaskData = [
    {
        date: getMonthAndYear(9),
        tasks: [
            {
                tags: ['nicolas'],
                title: 'User Research',
                subtitle: 'CaPay Digital Wallet iOS UI Kit',
                time: getTime(),
                status: 'complete'
            },
            {
                tags: ['nicolas', 'nicolaslabs'],
                title: 'Create Moodboard',
                subtitle: 'CaPay Digital Wallet iOS UI Kit',
                time: getTime(),
                status: 'complete'
            },
            {
                tags: ['nicolas'],
                title: 'Wireframing',
                subtitle: 'Nicolas Team',
                time: getTime('16:30'),
                status: 'due'
            },
        ]
    },
    {
        date: getMonthAndYear(14),
        tasks: [
            {
                tags: ['nicolas'],
                title: 'Create Wireframe for Website',
                subtitle: 'Design Website forNicolaslabs.co',
                time: getTime(),
                status: 'due'
            },
            {
                tags: ['nicolas', 'nicolaslabs'],
                title: 'Create Hompage  -Nicolaslabs.co',
                subtitle: 'Design Website forNicolaslabs.co',
                time: getTime(),
                status: 'due'
            },
            {
                tags: ['nicolas'],
                title: 'Wireframing',
                subtitle: 'Nicolas Team',
                time: getTime('16:30'),
                status: 'complete'
            },
        ]
    },{
        date: getMonthAndYear(16),
        tasks: [
            {
                tags: ['nicolas'],
                title: 'User Research',
                subtitle: 'CaPay Digital Wallet iOS UI Kit',
                time: getTime(),
                status: 'due'
            },
            {
                tags: ['nicolas', 'nicolaslabs'],
                title: 'Create Moodboard',
                subtitle: 'CaPay Digital Wallet iOS UI Kit',
                time: getTime(),
                status: 'complete'
            },
            {
                tags: ['nicolas'],
                title: 'Wireframing',
                subtitle: 'Nicolas Team',
                time: getTime('16:30'),
                status: 'due'
            },
        ]
    },{
        date: getMonthAndYear(21),
        tasks: [
            {
                tags: ['nicolas'],
                title: 'User Research',
                subtitle: 'CaPay Digital Wallet iOS UI Kit',
                time: getTime(),
                status: 'due'
            },
            {
                tags: ['nicolas', 'nicolaslabs'],
                title: 'Create Moodboard',
                subtitle: 'CaPay Digital Wallet iOS UI Kit',
                time: getTime(),
                status: 'complete'
            },
        ]
    },{
        date: getMonthAndYear(29),
        tasks: [
            {
                tags: ['nicolas'],
                title: 'User Research',
                subtitle: 'CaPay Digital Wallet iOS UI Kit',
                time: getTime(),
                status: 'complete'
            }
        ]
    },
]