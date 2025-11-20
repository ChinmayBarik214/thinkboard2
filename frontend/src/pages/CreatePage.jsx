import { ArrowLeftIcon } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import api from "../lib/axios";

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      await api.post("/notes", { title, content });
      navigate("/");
    } catch (error) {
      console.log("Error creating note", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-200 p-4 max-w-2xl mx-auto">

      <Link to="/" className="btn btn-ghost mb-6">
        <ArrowLeftIcon className="size-5" />
        Back to Notes
      </Link>

      <div className="card bg-base-100">
        <div className="card-body">
          <h2 className="card-title text-2xl mb-4">Create New Note</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="label mb-2" htmlFor="title">
                <span>Title</span>
              </label>
              <input
                id="title"
                type="text"
                placeholder="Note title"
                className="input input-bordered w-full"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="content" className="label mb-2">
                <span>Content</span>
              </label>
              <textarea
                id="content"
                placeholder="Note content"
                className="textarea textarea-bordered h-32 w-full"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              />
            </div>

            <div className="flex justify-end">
              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? "Creating..." : "Create Note"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default CreatePage;