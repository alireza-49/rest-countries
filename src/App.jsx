import { useState ,useEffect} from 'react'
import './App.css'
import Main from './mainpage.jsx'
import Country from './country.jsx'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Moon from './moon'
import Sun from './sun'
function App(){
  const query = new QueryClient({
    queries:{
      cacheTime:Infinity,
      staleTime:Infinity,
    }
  })
  const [darkmode,setDarkmode] = useState(false)
  useEffect(()=> {
    const root = document.querySelector(':root')
    if(darkmode){
    root.style.setProperty('--background' , 'hsl(207, 26%, 17%)');
    root.style.setProperty('--headerColor' , 'hsl(209, 23%, 22%)');
    root.style.setProperty('--textColor' , 'hsl(0, 0%, 100%)');
    }
    else{
    root.style.setProperty('--background' , 'hsl(0, 0%, 98%)');
    root.style.setProperty('--headerColor' , 'rgb(214, 214, 214)');
    root.style.setProperty('--textColor' , 'hsl(200, 15%, 8%)');
    }

  },[darkmode])
  return (
    <QueryClientProvider client={query}>
    <BrowserRouter>
    <div className='header'><h3>Where in the world</h3> 
    {!darkmode?
     <button className='header-btn'  onClick={() => setDarkmode(true)}><Moon/> Dark mode</button>:
     <button className='header-btn' onClick={() => setDarkmode(false)}> <Sun/>light mode</button>}
     </div>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/:countryName' element={<Country/>}/>
      </Routes>
    </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
