import {useState} from 'react'
import { AiFillStar } from 'react-icons/ai';
import { BASE_URL,token } from '../../config';
import { toast } from 'react-toastify';
import HashLoader from 'react-spinners/HashLoader';
import { useParams } from 'react-router-dom';

const FeedbackForm = () => {
  const [rating,setRating] = useState(0);
  const [hover,setHover] = useState(0);
  const[loading,setLoading] = useState(false);
  const {id} = useParams();
  const [reviewText,setReviewText] = useState('')
  console.log(rating);
  console.log(reviewText);
   const handleSubmitReview = async e=>{
    e.preventDefault();
    setLoading(true);
    try{
       if(!rating || !reviewText)
        {
            setLoading(false);
          return  toast.error('Rating && Review Fields are Required');}

            const res = await fetch(`${BASE_URL}/doctors/${id}/reviews`,{
                method:'post',
                headers:{
                    'Content-type':'application/json',
                    Authorization:`Bearer ${token}`
                },
                body:JSON.stringify({rating,reviewText})
            })
            const result = await res.json();

            if(!res.ok)
                {
                    throw new Error(result.message);
                }
            setLoading(false);
            toast.success(result.message)
         
    }
    catch(err)
    {
       setLoading(false);
       toast.error(err.message)
    }
   }
  return (
       <form action="">
        <div>
            <h3 className='text-headingColor text-[16px] leadig-6 font-semibold mb-4 mt-0'>
                How Would you rate the overall experience?
            </h3>
        <div>
        {[...Array(5).keys()].map((_,index)=>{
            index+=1;
            return <button key={index} className={`${index<=((rating&&hover)||hover)? 'text-yellow-500' : 'text-gray-400'} bg-transparent border-none outline-none text-[22px] cursor-pointer`} type="button" 
            onClick={()=>{setRating(index)}} onMouseEnter={()=>setHover(index)} onMouseLeave={()=>setHover(rating)} onDoubleClick={()=>{setHover(0);setRating(0)}}>
            <span>
            <AiFillStar/>
            </span></button>
        })}
        </div>
        </div>
        <div className='mt-[30px]'>
            <h3 className='text-headingColor text-[16px] leadig-6 font-semibold mb-4 mt-0'>
               Share your feedback or Suggestions
            </h3>

            <textarea className="border border-solid border-[#0066ff34] focus-outline outline-primaryColor w-full px-4 py-3 rounded-md" rows="5" placeholder='write your feedback'
            onChange={(e)=>setReviewText(e.target.value)}></textarea>
        </div>

        <button onClick={handleSubmitReview} className="btn" type="submit">
  {loading ? <HashLoader size={25} color="#fff" /> : "Submit Feedback"}
</button>
       </form>
  )
}

export default FeedbackForm