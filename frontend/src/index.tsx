/* @refresh reload */
import { render } from 'solid-js/web'
import { Router, Route } from '@solidjs/router'  // Remove Routes from import
import { Toaster } from 'solid-toast'
import { lazy } from 'solid-js'

import { AuthProvider } from './contexts/AuthContext'
import { SupabaseProvider } from './contexts/SupabaseContext'
import Layout from './components/Layout'
import ProtectedRoute from './components/ProtectedRoute'

import './styles/main.scss'

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'))
const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import('./pages/Register'))
const Dashboard = lazy(() => import('./pages/Dashboard'))
const Profile = lazy(() => import('./pages/Profile'))
const NotFound = lazy(() => import('./pages/NotFound'))

const root = document.getElementById('root')

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  )
}

render(
  () => (
    <Router
      root={(props) => (
        <SupabaseProvider>
          <AuthProvider>
            <Layout>
              {props.children}
              <Toaster 
                position="top-right"
                gutter={8}
                toastOptions={{
                  duration: 4000,
                  style: {
                    background: '#363636',
                    color: '#fff',
                  },
                  success: {
                    duration: 3000,
                    iconTheme: {
                      primary: '#4caf50',
                      secondary: '#fff',
                    },
                  },
                  error: {
                    duration: 5000,
                    iconTheme: {
                      primary: '#f44336',
                      secondary: '#fff',
                    },
                  },
                }}
              />
            </Layout>
          </AuthProvider>
        </SupabaseProvider>
      )}
    >
      {/* Route definitions go directly inside Router, no Routes wrapper */}
      {/* Public routes */}
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      
      {/* Protected routes */}
      <Route 
        path="/dashboard" 
        component={() => (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        )} 
      />
      <Route 
        path="/profile" 
        component={() => (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        )} 
      />
      
      {/* Catch-all route */}
      <Route path="*" component={NotFound} />
    </Router>
  ),
  root!,
) 