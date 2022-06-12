import { lazy,Suspense } from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Spinner from "../spinner/Spinner";
import HeroHeader from "../heroHeader/HeroHeader";
// const MainPage = lazy(() => import('../pages/MainPage'));



const App = () => {
   

    return (

        <Router>
            <div className="app">
                <HeroHeader />
                
                <main>
                {/* <Suspense fallback={<Spinner/>}>
                    <Routes>

                        <Route path="/" element={<MainPage/>}/>

                    </Routes>
                </Suspense> */}
                </main>
            </div>
        </Router>
    )
}


export default App;
