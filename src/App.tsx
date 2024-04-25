import React from 'react'
import { Routes, Route } from 'react-router-dom';
import './globals.css';
import { Home } from './_root/pages';
import SigninForm from './_auth/foms/SigninForm';
import SignupForm from './_auth/foms/SignupForm';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_root/RootLayout';
const App = () => {
    return (
        <main className='flex h-screen'>
            <Routes>
                <Route element={<AuthLayout />}>
                    <Route path='/sign-in' element={<SigninForm />} />
                    <Route path='/sign-up' element={<SignupForm />} />
                </Route>
                {/* // public routes - can be seen by signed out and signed in users */}
                {/* // private routes - can be seen only by signed users */}
                <Route element={<RootLayout />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </main>
    )
}

export default App