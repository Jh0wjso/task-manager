type Note ={
    id: number,
    title: string,
    description: string,
    isFavorite: boolean
}

export const Notes: Note[] = [
    {
        id: 1,
        title: 'Note 1',
        description: 'Description 1',
        isFavorite: false
    },
    {
        id: 2,
        title: 'Note 2',
        description: 'Description 2',
        isFavorite: false
    },
    {
        id: 3,
        title: 'Note 3',
        description: 'Description 3',
        isFavorite: true
    },
    {
        id: 4,
        title: 'Note 4',
        description: 'Description 4',
        isFavorite: true
    }
];
