import './static/css/AdminIndex.css'
import './static/css/addArticle.css'
import { RequireAuth, AuthProvider} from './utils/Auth'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CookiesProvider } from 'react-cookie';
import Login from './pages/Login'
import AdminIndex from './components/AdminIndex'
import NotMatch from './components/NotMatch';

const App = ()=>{
    return (
        <CookiesProvider>
            <AuthProvider>
                <Routes>
                    <Route 
                    path='/login' 
                    element={
                        <Login/>
                    }
                    />
                    <Route 
                    path='/index/*' 
                    element={ 
                        <RequireAuth path='/index/*'>
                            <AdminIndex/>
                        </RequireAuth>
                    }
                    />
                    <Route path='/' element={<Navigate to={'/login'} />} />
                    <Route path='*' element={<NotMatch/>} />
                </Routes>
            </AuthProvider>
        </CookiesProvider>
    )
}

export default App