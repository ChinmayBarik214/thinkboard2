import { Link } from 'react-router'
import { PlusIcon } from "lucide-react";
const Navbar = () => {
  return (
    <header className='bg-base-300'>
      <div className='mx-auto max-w-7xl p-4'>
        <div className='flex items-center justify-between'>
          <h1 className='text-3xl font-bold text-primary'>ThinkBoard</h1>
          <Link to={"/create"} className='btn btn-primary'>
            <PlusIcon className='size-5' />
            <span>New Note</span>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar
