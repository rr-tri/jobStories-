import { Route, Routes } from 'react-router-dom';

import HolyGrail from './HolyGrail/index'
import JobStories from './JobStories/index';
import Navbar from './components/Navbar'
import Home from './Home';

export default function App() {


   return (
      <>
         <Navbar />
         <div className='relative pt-12 '>
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects/holygrail' element={<HolyGrail />} />.
            <Route path='/projects/jobstories' element={<JobStories />} />
         </Routes>
         </div>
         {/* {display && <button className='m-2 border px-3 py-1 bg-green-500 rounded font-semibold text-white' onClick={()=>setdisplay(!display)}>click to view Holy Grail</button>}
    {!display && <HolyGrail disp={setdisplay}/>}
    <JobStories jobs={jobs}  />
 */}
      </>
   );
}
