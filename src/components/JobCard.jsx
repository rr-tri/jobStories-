/* eslint-disable react/prop-types */

const JobCard = ({ job }) => {
    return (
        <div className="my-3 flex flex-col justify-center p-4 border rounded bg-white ">
            <p>
                <a
                    className="text-black font-bold  text-2xl "
                    href={job.url}
                >
                    {job.title}
                </a>
            </p>
            <div className="flex flex-row text-[#858585] font-semibold my-1 ">
                <p className=" text-[#858585]  font-semibold my-1 mr-3">by {job.by}</p>.
                <p className=" text-[#858585] font-semibold my-1 ml-3">
                    {new Date(job.time * 1000).toLocaleString()}
                </p>
                <p>{}</p>
            </div>
        </div>
    )
}

export default JobCard
