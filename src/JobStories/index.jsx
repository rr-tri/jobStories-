import JobCard from '../components/JobCard'
import { getIds, getJobById } from '../services/api';
import  { useState,useEffect } from 'react'

// eslint-disable-next-line react/prop-types
const JobStories = () => {
   
   // eslint-disable-next-line no-unused-vars
   const [jobIds, setJobIds]= useState([]);
   const [jobs, setJobs]= useState([]);
   const [start, setStart]= useState(0);
   const [limit, setLimit] = useState(10);
   const  [visibility, setVisibility] = useState(false);
   
   
   useEffect(() => {
    async function fetchData() {
       try {
          const ids = await getIds();
          setJobIds(ids);
          localStorage.setItem('ids',JSON.stringify(ids))
       } catch (error) {
          console.error('Error fetching job ids:', error);
       }
    }
    console.log('fetch');
    fetchData();
 }, []); // Empty dependency array ensures this effect runs only once after initial render

 useEffect(() => {
    async function fetchJobs() {
       try {
          const response = await Promise.all(jobIds.slice(start, limit).map((id) => getJobById(id)));
          setJobs(response);
       } catch (error) {
          console.error('Error fetching jobs:', error);
       }
    }

    fetchJobs();
 }, [jobIds, start, limit]); // Dependency array ensures this effect runs when jobIds, start, or limit change

   
   const handleSlicing=()=>{
    if(limit+10 < jobIds.length){
        setStart(prev=>prev+10);
        setLimit(prev=>prev+10);
    }else{
         setVisibility(true);
    }
   }
    return (
        <div className="flex flex-col p-5 bg-[#F6F6EF]  ">
            <h2 className="text-[#FF6601] text-4xl font-extrabold  ">Hacker News Jobs Board</h2>
            {
                // eslint-disable-next-line react/prop-types
                jobs?.map((job) => (
                    <JobCard key={job.id} job={job} />
                ))
            }
                <button className='m-2 border px-2 bg-blue-500 rounded font-semibold text-white' onClick={handleSlicing}  disabled={visibility}>Load More jobs</button>
        </div>
    )
}

export default JobStories
