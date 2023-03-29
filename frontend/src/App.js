import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from './components/navBar';
import Home from './components/home';
import Quiz from './components/quiz/quiz'
import Footer from './components/footer';
import DogBreeds from './components/breeds/dog_breeds';
import CatBreeds from './components/breeds/cat_breeds';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} className="mb-3" />
        <Route exact path="/quiz/:animal" element={<Quiz />} className="mb-3" />
        <Route exact path="/dog-breeds" element={<DogBreeds />} />

        <Route
          exact path="/cat-breeds"
          element={<CatBreeds />}
        />

        {/* This redirects the user to the homepage when a non-existing route is entered */}
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
      <Footer />
    </div>
  );
}
// provide suggestions/alternatives for when the pets are not available at local pet stores

export default App;