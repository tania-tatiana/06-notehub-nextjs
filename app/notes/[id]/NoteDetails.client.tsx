"use client";

import { getSingleNote } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

import css from "./NoteDetails.module.css"

const NoteDetailsClient = () => {
  const { id } = useParams<{ id: string }>();
  const { data: note, isLoading, error } = useQuery({
    queryKey: ["note", id], queryFn: () => getSingleNote(id), refetchOnMount: false,
  })

  if (isLoading) return <p>Loading...</p>

  if (error || !note) return <p>Something went wrong</p>

  const formattedDate = note.updatedAt ? `Updated at: ${note.updatedAt}` : `Created at: ${note.createdAt}`;

  return (
    <div className={css.container}>
      <h2 className={css.header}>{ note.title}</h2>
      <p className={css.content}>{ note.content}</p>
      <p className={ css.date}>{ formattedDate}</p>
    </div>
  );
};

export default NoteDetailsClient;