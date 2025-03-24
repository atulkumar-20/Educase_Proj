import { useLocation, Navigate } from 'react-router-dom'
import { useState } from 'react'

const Dashboard = () => {
  const location = useLocation()
  const userData = location.state?.userData
  const [showProfile, setShowProfile] = useState(false)

  if (!userData) {
    return <Navigate to="/welcome" replace />
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      // Handle file upload if needed in the future
      console.log('File selected:', file)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {!showProfile ? (
        // Main Dashboard View
        <div className="flex items-center justify-center min-h-screen">
          <div className="w-full max-w-md mx-auto px-4">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex flex-col items-center justify-center space-y-6">
                <div className="text-center space-y-4">
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    Welcome to PopX
                  </h1>
                  <p className="text-lg sm:text-xl font-medium text-gray-700">
                    {userData.fullName}
                  </p>
                </div>

                <button 
                  onClick={() => setShowProfile(true)}
                  className="w-full max-w-xs bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Profile/Account Settings View
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <header className="bg-white shadow-sm">
            <div className="max-w-md mx-auto px-4 py-4 text-center">
              <h1 className="text-xl font-semibold text-gray-900">Account Settings</h1>
            </div>
          </header>

          <main className="flex-1 flex items-center justify-center px-4 py-6">
            <div className="w-full max-w-md">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                      <img 
                        src="/Ellipse 114.png"
                        alt="Profile" 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = '/default-avatar.png';
                        }}
                      />
                    </div>
                    <label className="absolute bottom-0 right-0 bg-purple-600 rounded-full p-2 cursor-pointer">
                      <input 
                        type="file" 
                        className="hidden" 
                        accept="image/*"
                        onChange={handleImageUpload}
                      />
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </label>
                  </div>

                  <div className="text-center">
                    <h2 className="text-xl font-semibold text-gray-900">{userData.fullName}</h2>
                    <p className="text-gray-600">{userData.email}</p>
                  </div>

                  <div className="w-full">
                    <p className="text-sm text-gray-600 text-center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel ipsum nec turpis tempus efficitur. Nullam auctor, nunc id aliquam tincidunt.
                    </p>
                  </div>

                  <button 
                    onClick={() => setShowProfile(false)}
                    className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                  >
                    Back to Dashboard
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      )}
    </div>
  )
}

export default Dashboard
