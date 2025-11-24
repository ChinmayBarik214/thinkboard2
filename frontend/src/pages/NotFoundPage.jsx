import { Link } from "react-router"

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center">
      <div className="card bg-base-100">
        <div className="card-body">
          <h2 className="card-title text-2xl justify-center">Page Not Found</h2>
          <p className="text-base-content/60 mb-4">The page you're looking for doesn't exist or has been deleted.</p>
          <Link to="/" className="btn btn-primary">
            Back to Notes
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
