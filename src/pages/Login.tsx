import { useState, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'

interface LoginForm {
  email: string
  password: string
}

const Login = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState<LoginForm>({
    email: '',
    password: ''
  })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Get username from email (everything before @)
      const userName = formData.email.split('@')[0]
      
      // Navigate to dashboard with user data
      navigate('/dashboard', { 
        replace: true,
        state: { userData: { fullName: userName } }
      })
    } catch (error) {
      console.error('Login failed:', error)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-md mx-auto px-4 py-4">
          <button 
            onClick={() => navigate(-1)}
            className="text-gray-600 hover:text-gray-800"
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
            <div className="space-y-4">
              <h1 className="text-xl font-semibold text-center">Signin to your PopX account</h1>
              <p className="text-sm text-gray-600 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
              </p>
            </div>

            <div className="space-y-5">
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
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Login
            </button>
          </form>
        </div>
      </main>
    </div>
  )
}

export default Login
