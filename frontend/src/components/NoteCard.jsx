import { Link } from "react-router";
import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { formatDate } from "../lib/utils";
import api from "../lib/axios";

const NoteCard = ({ note, setNotes }) => {

  const handleDelete = async (e, id) => {
    e.preventDefault(); // get rid of the navigation behaviour
    try {
      await api.delete(`/notes/${id}`);
      setNotes((prev) => prev.filter((note) => note._id !== id)); // get rid of the deleted one
    } catch (error) {
      console.error("Error in handleDelete", error);
    }
  };

  return (
    <Link
      to={`/note/${note._id}`}
      className="card bg-base-100"
    >
      <div className="card-body">
        <h3 className="line-clamp-2 card-title">{note.title}</h3>
        <p className="line-clamp-3">{note.content}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-sm text-base-content/60">
            {formatDate(new Date(note.createdAt))}
          </span>
          <div className="flex items-center gap-1">
            <PenSquareIcon className="size-4" />
            <button
              className="btn btn-ghost btn-xs text-error"
              onClick={(e) => handleDelete(e, note._id)}
            >
              <Trash2Icon className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default NoteCard;