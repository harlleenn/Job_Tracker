import React, { useEffect, useState } from "react";
import JobDisplay from "./JobDisplay";
export default function JobFetch() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
   const url = 'https://jsearch.p.rapidapi.com/search?query=developer%20jobs%20in%20chicago&page=1&num_pages=1&country=us&date_posted=all';
    const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
		'x-rapidapi-host': process.env.REACT_APP_RAPIDAPI_HOST,
	}

};

    const fetchJob = async () => {
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log( "this is the data",data);

        // store only the jobs array
        setJobs(data.data || []);
      } catch (err) {
        console.error("There was an error:", err);
      }
    };

    fetchJob();
  }, []);

  return (
    <>
    
      { 
        jobs.map((j) => (
          <div>
            <JobDisplay job={j} key={j.job_id}/>
          </div>
        ))}
    </>
  );
}
