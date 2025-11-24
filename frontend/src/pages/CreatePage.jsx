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
    <div className="min-h-screen bg-base-200 p-4">
      <div className="max-w-2xl mx-auto">
        <Link to="/" className="btn btn-ghost mb-6">
          <ArrowLeftIcon className="size-5" />
          Back to Notes
        </Link>

        <div className="card bg-base-100">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-4">Create New Note</h2>
            <form onSubmit={handleSubmit}>

              <label htmlFor="title" className="label mb-2">
                Title
              </label>
              <input
                id="title"
                className="input w-full mb-4"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />

              <label htmlFor="content" className="label mb-2">
                Content
              </label>
              <textarea
                id="content"
                className="textarea h-32 w-full mb-4"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              />

              <div className="flex justify-end">
                <button type="submit" className="btn btn-primary" disabled={loading}>
                  {loading ? "Creating..." : "Create Note"}
                </button>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreatePage;