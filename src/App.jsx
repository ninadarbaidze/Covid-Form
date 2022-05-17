import { Routes, Route } from 'react-router-dom';
import {
  Start,
  PersonalInformation,
  CovidSituation,
  Vaccinated,
  CovidPolitics,
  Thanks,
} from 'pages';
import 'App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Start />} />
      <Route path='/personal-information' element={<PersonalInformation />} />
      <Route path='/covid-situation' element={<CovidSituation />} />
      <Route path='/vaccinated' element={<Vaccinated />} />
      <Route path='/covid-politics' element={<CovidPolitics />} />
      <Route path='/thank-you' element={<Thanks />} />
    </Routes>
  );
}

export default App;
