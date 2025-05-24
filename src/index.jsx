/*import { createRoot } from 'react-dom/client';
import './global.css';
import { HomePage } from './pages/HomePage';

createRoot(
  document.querySelector('#app'),
).render(< HomePage />)
*/

import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { PokojDetail } from './pages/PokojDetail'; // vytvoříme

createRoot(document.getElementById('app')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/pokoje/:id" element={<PokojDetail />} />
    </Routes>
  </BrowserRouter>
);
