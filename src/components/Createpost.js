import React,{useState} from "react";
import axios from 'axios';

const Createpost = () => {
    const [post,setPost]=useState({
        subject:"", topic:"", contact:"", members:"", description:""
      
       })
        const [isClicked, setisClicked] = useState(false)
       const handleOnChange = (e) => {
        const { name, value } = e.target;
        setPost({ ...post, [name]: value });
        
      };
      const handleOnSubmit = async(e) => {
        e.preventDefault();
        const key = localStorage.getItem("key");
        try {
          // make axios post request
          await axios({
            method: "post",
            url: " http://localhost:4000/api/post",
            data: post,
            headers: {
              'Content-Type': 'application/json',
              key:key,
              
          }
          }).then((response)=>{
            console.log(response)
          
          });
          console.log("post created")
          setisClicked(true)
        } catch(error) {
          console.log(error)
        }
      }
    
  return (
    <div className=" h-full">
      <div className="flex flex-col items-center justify-center">
        <div className="bg-white shadow rounded lg:w-full  md:w-1/2 w-full px-10 mt-0">
         
          
          <div className="mt-6  w-full">
          
            <label
            className="text-sm font-medium leading-none text-gray-800"
            >
            Subject
            </label>
            <input
            name="subject"
            value={post.subject}
            onChange={handleOnChange}
            placeholder="i.e :Linear Algebra,Physics-1"
            className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
            />
         
            <label className="text-sm font-medium leading-none text-gray-800">
              Topic
            </label>
            <div className="relative flex items-center justify-center">
              <input
              name="topic"
              value={post.topic}
              onChange={handleOnChange}
              placeholder="Mention Some Topic "
              className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              />
              <div className="absolute right-0 mt-2 mr-3 cursor-pointer"></div>
            </div>
            <div>
              <label
               
                className="text-sm font-medium leading-none text-gray-800"
              >
                Contact Details
              </label>
              <input
              name="contact"
              value={post.contact}
              onChange={handleOnChange}
              placeholder="WeChat,Email or QQ"
              className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              />
            </div>
            <div>
              <label
            
                className="text-sm font-medium leading-none text-gray-800"
              >
                Members
              </label>
              <input
              name='members'
              value={post.members}
              onChange={handleOnChange}
              placeholder="Write How Many Member Needed"
             
                className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              />
            </div>
            <div>
              <label
          
                className="text-sm font-medium leading-none text-gray-800"
              >
                Description
              </label>
              <input
              name="description"
              value={post.description}
              onChange={handleOnChange}
              placeholder="Write a Description in more details"
        
                className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              />
            </div>
          </div>
          <div className="mt-8">
            <button onClick={handleOnSubmit} className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full">
              Post
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Createpost;
