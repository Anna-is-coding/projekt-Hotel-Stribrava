import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { PokojDetail } from './components/Pokoje/PokojDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokoje/:id" element={<PokojDetail />} /> {/* ✅ */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/*import './style.css';
import { Banner } from '../../components/Banner/Banner.jsx';
import { Kontakt } from '../../components/Kontakt/Kontakt.jsx';
import { Pokoje } from '../../components/Pokoje/Pokoje.jsx';
import { Rezervace } from '../../components/Rezervace/Rezervace.jsx';

export const HomePage = () => {
  return (
    <>
      <Banner />
      <Pokoje />
      <Rezervace />
      <Kontakt />
    </>
  );
};
*/

// export const HomePage = () => {
//   return (
//     <>
//       <div class="banner">
//         <div class="banner__stripe">
//           <div class="container">
//             <h1>Template</h1>
//             <p class="lead">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
//               sequi.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Komponenta pokoje */}
//       <section class="dark">
//         <div class="container">
//           <h2>Heading</h2>
//           <p>Quas odio quidem, enim nihil unde quia temporibus vitae in ab.</p>
//           <div class="cards-row">
//             <div class="card">
//               <img class="card__image" src="img/image1.svg" />
//               <div class="card__title">Card 1</div>
//               <div class="card__body">Sunt natus</div>
//             </div>

//             <div class="card">
//               <img class="card__image" src="img/image1.svg" />
//               <div class="card__title">Card 2</div>
//               <div class="card__body">Laboriosam</div>
//             </div>

//             <div class="card">
//               <img class="card__image" src="img/image1.svg" />
//               <div class="card__title">Card 3</div>
//               <div class="card__body">Eveniet officiis</div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Komoponenta Rezervace */}
//       <section class="light">
//         <div class="container">
//           <h2>Heading</h2>
//           <div class="columns-2">
//             <div class="column">
//               <img src="img/image1.svg" />
//               <p>
//                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
//                 accusantium, dolor quisquam doloremque quod nobis temporibus
//                 ducimus sapiente consectetur distinctio assumenda, nisi suscipit
//                 saepe. Vero.
//               </p>
//             </div>
//             <form>
//               <div class="form-fields">
//                 <label htmlFor="field1" class="field-label">
//                   Field 1:
//                 </label>
//                 <input id="field1" class="field-input" type="text" />

//                 <label htmlFor="field2" class="field-label">
//                   Field 2:
//                 </label>
//                 <input id="field2" class="field-input" type="text" />

//                 <label htmlFor="select" class="field-label">
//                   Select:
//                 </label>
//                 <select id="select" class="field-input">
//                   <option>Option 1</option>
//                   <option>Option 2</option>
//                   <option>Option 3</option>
//                   <option>Option 4</option>
//                 </select>

//                 <label htmlFor="check1" class="field-label">
//                   Checkbox 1:
//                 </label>
//                 <input id="check1" class="field-input" type="checkbox" />
//               </div>
//               <button class="wide">Submit</button>
//             </form>
//           </div>
//         </div>
//       </section>

//       {/* Komponenta Kontakt */}
//       <section class="dark">
//         <div class="container columns-2">
//           <div class="columns">
//             <h2>Heading</h2>
//             <p>
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
//               mollitia ut pariatur eos error sunt blanditiis repellat similique
//               aperiam temporibus.
//             </p>
//           </div>
//           <img src="img/image1.svg" />
//         </div>
//       </section>
//     </>
//   );
// };
