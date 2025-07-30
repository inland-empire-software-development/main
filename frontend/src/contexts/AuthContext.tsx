import { createContext, useContext, createSignal, ParentComponent, Accessor } from 'solid-js'

// Types
export interface User {
  id: string
  email: string
  username?: string
  full_name?: string
  avatar_url?: string
  created_at: string
}

export interface AuthContextType {
  user: Accessor<User | null>
  isAuthenticated: Accessor<boolean>
  isLoading: Accessor<boolean>
  login: (email: string, password: string) => Promise<void>
  register: (email: string, password: string, userData?: any) => Promise<void>
  logout: () => Promise<void>
}

// Create context
const AuthContext = createContext<AuthContextType>()

// Provider component
export const AuthProvider: ParentComponent = (props) => {
  const [user, setUser] = createSignal<User | null>(null)
  const [isLoading, setIsLoading] = createSignal(false)

  const isAuthenticated = () => user() !== null

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      // TODO: Implement actual login logic with Supabase
      console.log('Login attempt:', email)
      // Placeholder user data
      setUser({
        id: '1',
        email,
        username: 'demo',
        full_name: 'Demo User',
        created_at: new Date().toISOString(),
      })
    } catch (error) {
      console.error('Login error:', error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const register = async (email: string, password: string, userData?: any) => {
    setIsLoading(true)
    try {
      // TODO: Implement actual registration logic with Supabase
      console.log('Register attempt:', email, userData)
      // Placeholder user data
      setUser({
        id: '1',
        email,
        username: userData?.username,
        full_name: userData?.full_name,
        created_at: new Date().toISOString(),
      })
    } catch (error) {
      console.error('Registration error:', error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const logout = async () => {
    setIsLoading(true)
    try {
      // TODO: Implement actual logout logic with Supabase
      setUser(null)
    } catch (error) {
      console.error('Logout error:', error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const value: AuthContextType = {
    user,
    isAuthenticated,
    isLoading,
    login,
    register,
    logout,
  }

  return (
    <AuthContext.Provider value={value}>
      {props.children}
    </AuthContext.Provider>
  )
}

// Hook to use auth
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
} 