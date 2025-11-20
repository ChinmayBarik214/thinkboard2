import { Link, useNavigate, useParams } from "react-router";
import { ArrowLeftIcon, LoaderIcon, Trash2Icon } from "lucide-react";
import { useEffect, useState } from "react";
import api from "../lib/axios";

const NoteDetailPage = () => {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await api.get(`/notes/${id}`);
        setNote(res.data);
      } catch (error) {
        console.log("Error in fetching note", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNote();
  }, [id]);

  const handleDelete = async () => {
    try {
      await api.delete(`/notes/${id}`);
      navigate("/");
    } catch (error) {
      console.error("Error deleting the note:", error);
    }
  };

  const handleSave = async () => {
    if (!note.title.trim() || !note.content.trim()) {
      return;
    }

    setSaving(true);

    try {
      await api.put(`/notes/${id}`, note);
      navigate("/");
    } catch (error) {
      console.log("Error saving the note:", error);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <LoaderIcon className="animate-spin size-10" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <Link to="/" className="btn btn-ghost">
              <ArrowLeftIcon className="size-4" />
              Back to Notes
            </Link>
            <button onClick={handleDelete} className="btn btn-error btn-outline">
              <Trash2Icon className="size-4" />
              Delete Note
            </button>
          </div>

          <form className="card bg-base-100">
            <div className="card-body">
              <div className="mb-4">
                <label className="label" htmlFor="title">
                  <span>Title</span>
                </label>
                <input
                  id="title"
                  type="text"
                  placeholder="Note title"
                  className="input w-full"
                  value={note.title}
                  onChange={(e) => setNote({ ...note, title: e.target.value })}
                  required
                />
              </div>

              <div className="mb-4">
                <label className="label" htmlFor="content">
                  <span>Content</span>
                </label>
                <textarea
                  id="content"
                  placeholder="Note content"
                  className="textarea h-32 w-full"
                  value={note.content}
                  onChange={(e) => setNote({ ...note, content: e.target.value })}
                  required
                />
              </div>

              <div className="flex justify-end">
                <button type="submit" className="btn btn-primary" disabled={saving} onClick={handleSave}>
                  {saving ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default NoteDetailPage;