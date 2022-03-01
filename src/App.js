import { Route, Routes } from 'react-router-dom';
import AllMeetups from './pages/AllMeetups';
import NewMeetups from './pages/NewMeetups';
import Favourites from './pages/Favourites';
import './App.css';
import MainNavigation from './components/MainNavigation';

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path='/' element={<AllMeetups />} />
        <Route path='/new-meetup' element={<NewMeetups />} />
        <Route path='/favourites' element={<Favourites />} />
      </Routes>
    </div>
  );
}

export default App;
