import { createContext, useContext, ParentComponent } from 'solid-js'
import { createClient, SupabaseClient } from '@supabase/supabase-js'

// Environment variables for Supabase
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-project-ref.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key-here'

// Create Supabase client
const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
})

// Type for the context
export type SupabaseContextType = {
  supabase: SupabaseClient
}

// Create context
const SupabaseContext = createContext<SupabaseContextType>()

// Provider component
export const SupabaseProvider: ParentComponent = (props) => {
  const value: SupabaseContextType = {
    supabase,
  }

  return (
    <SupabaseContext.Provider value={value}>
      {props.children}
    </SupabaseContext.Provider>
  )
}

// Hook to use Supabase
export const useSupabase = () => {
  const context = useContext(SupabaseContext)
  if (!context) {
    throw new Error('useSupabase must be used within a SupabaseProvider')
  }
  return context
} 