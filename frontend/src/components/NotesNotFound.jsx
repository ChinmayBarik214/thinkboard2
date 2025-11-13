import { Link } from "react-router";

const NotesNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 max-w-md mx-auto">
      <h3 className="text-2xl font-bold mb-6">No notes yet</h3>
      <Link to="/create" className="btn btn-primary">
        Create Your First Note
      </Link>
    </div>
  );
};
export default NotesNotFound;