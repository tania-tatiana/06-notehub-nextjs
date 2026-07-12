import { Note, NoteListResponse } from "@/types/note";
import axios from "axios"



axios.defaults.baseURL = "https://next-v1-notes-api.goit.study";

export const getNotes = async () => {
    const res = axios.get<NoteListResponse>("/notes");
    return (await res).data;
}

export const getSingleNote = async (id: string) => {
    const res = await axios.get<Note>(`/notes/${id}`);
    return res.data;
}