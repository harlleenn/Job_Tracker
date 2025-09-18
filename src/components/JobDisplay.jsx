import React from 'react'

export default function JobDisplay({job}) {
  return (
 <div className=" "> 
 {/* i need to repeat the coloumnns */}
  {/* Example Job Card */}
  <div className="bg-pink-100 rounded-xl shadow-md p-5 hover:shadow-xl transition">
    <h5 className="mb-2 text-xl font-bold text-gray-900">{job.job_country}</h5>
    <h2 className="text-lg text-gray-700">{job.job_city}</h2>
    <p className="mt-3 text-sm text-gray-600">
    {job.job_country}
    </p>
  </div>
</div>

  
   
  )
}
