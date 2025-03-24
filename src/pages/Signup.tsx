import { useState, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'

interface SignupForm {
  fullName: string
  phoneNumber: string
  email: string
  password: string
  companyName: string
  isAgency: string
}

const Signup = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState<SignupForm>({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: ''
  })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      navigate('/dashboard', { 
        replace: true,
        state: { userData: formData }
      })
    } catch (error) {
      console.error('Signup failed:', error)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-10">
        <div className="max-w-md mx-auto px-4 py-4 flex items-center">
          <button 
            onClick={() => navigate(-1)}
            className="mr-4 text-gray-600 hover:text-gray-800"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6">
        <div className="w-full max-w-md">
          <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-lg shadow-sm p-4 sm:p-6">
            <div className="text-center">
              <h1 className="text-xl font-semibold text-gray-900">Create your PopX account</h1>
            </div>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: '#6C25FF' }}>
                  Full Name*
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: '#6C25FF' }}>
                  Phone Number*
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Enter your phone number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: '#6C25FF' }}>
                  Email Address*
                </label>
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: '#6C25FF' }}>
                  Password*
                </label>
                <input
                  type="password"
                  required
                  placeholder="Enter your password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: '#6C25FF' }}>
                  Company Name*
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your company name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  value={formData.companyName}
                  onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-3" style={{ color: '#1D2226' }}>
                  Are you an Agency?*
                </label>
                <div className="flex space-x-6">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="isAgency"
                      value="yes"
                      className="h-4 w-4 text-purple-600"
                      checked={formData.isAgency === 'yes'}
                      onChange={(e) => setFormData({...formData, isAgency: e.target.value})}
                    />
                    <span className="ml-2 text-sm">Yes</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="isAgency"
                      value="no"
                      className="h-4 w-4 text-purple-600"
                      checked={formData.isAgency === 'no'}
                      onChange={(e) => setFormData({...formData, isAgency: e.target.value})}
                    />
                    <span className="ml-2 text-sm">No</span>
                  </label>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Create Account
            </button>
          </form>
        </div>
      </main>
    </div>
  )
}

export default Signup
