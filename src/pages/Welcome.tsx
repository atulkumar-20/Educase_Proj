import { useNavigate } from 'react-router-dom'

const Welcome = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-md space-y-8 mx-auto px-4 sm:px-0">
        <div className="text-center space-y-4">
          <h1 className="text-2xl sm:text-3xl font-bold">Welcome to PopX</h1>
          <p className="text-sm sm:text-base text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
        
        <div className="space-y-3 sm:space-y-4">
          <button
            onClick={() => navigate('/signup')}
            className="w-full bg-purple-600 text-white py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-purple-700 text-sm sm:text-base"
          >
            Create Account
          </button>
          
          <button
            onClick={() => navigate('/login')}
            className="w-full bg-gray-100 text-gray-800 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-gray-200 text-sm sm:text-base"
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default Welcome
