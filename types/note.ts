export type Note = {
    id: string;
    title: string;
    content: string;
    categoryId: string;
    userId: string;
    tag: string;
    createdAt: string;
    updatedAt: string;
}

export type NoteListResponse = {
    notes: Note[];
    total: number;
}