
export const getIds = async () => { 
    const response = await fetch('https://hacker-news.firebaseio.com/v0/jobstories.json')
    const data = await response.json();
    // console.log(data);
    return data;
}
export const getJobById = async (jobId)=>{
    const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${jobId}.json`)
    const data = await response.json();
    // console.log(data)
    return  data;
}