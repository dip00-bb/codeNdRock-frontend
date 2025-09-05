import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { router } from './Router/Router.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
import ProblemProvider from './ProblemContext/ProblemProvider.jsx'

const PUBLISHABLE_KEY = import.meta.env.VITE_PUBLIC_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <ProblemProvider>
        <RouterProvider router={router}>

        </RouterProvider>
      </ProblemProvider>
    </ClerkProvider>
  </StrictMode>,
)
