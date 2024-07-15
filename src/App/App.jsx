import { lazy, Suspense } from "react";
import {BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"))
const MoviesPage = lazy(() => import("../pages/MoviesPage/MoviesPage"))
const MovieDetailsPage = lazy(() => import("../pages/MovieDetailsPage/MovieDetailsPage"))
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"))
const MovieCast = lazy(() => import("../components/MovieCast/MovieCast"))
const MovieReviews = lazy(() => import("../components/MovieReviews/MovieReviews"));
const Navigation = lazy(() => import("../components/Navigation/Navigation"))

export default function App(){
    return (
    <Router>
        <Navigation/>
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/movies" element={<MoviesPage/>}/>
                    <Route path="/movies/:movieId" element= {<MovieDetailsPage/>}>
                            <Route path="cast" element={<MovieCast/>}/>
                            <Route path="reviews" element={<MovieReviews/>}/>
                    </Route>
                    <Route path="/not-found" element={<NotFoundPage/>}/>
                    <Route path="*" element={<Navigate to="/not-found"/>}/>
            </Routes>
        </Suspense>
        </Router>
        

        
        
    )
}