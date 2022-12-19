import React from "react";

// icon tabs
import { FaTwitter, FaRegEnvelope,FaRegBookmark,FaRetweet} from "react-icons/fa";
import { HiOutlineUser, HiOutlineDotsCircleHorizontal,HiOutlineBell,HiOutlineEmojiHappy,HiOutlineHeart,HiDotsHorizontal,HiOutlineSparkles} from "react-icons/hi";
import { RiFileListLine ,RiHashtag,RiHome7Fill,RiUpload2Line} from "react-icons/ri";
import ProfilePic from "./images/sWMgA1Kr_400x400 (2).jpg"
//home feed
import { TbMessageCircle2 } from "react-icons/tb";
import { IoEarthSharp,IoSearchOutline,IoCalendarClearOutline,IoImageOutline,IoLocationOutline ,IoListOutline} from "react-icons/io5";
import { HiOutlineGif } from "react-icons/hi2";


//trend feed

function Home() {


    // home feed
        const tweet =[
            {
                userName:"David 💥",
                userId:"@david_nwobia",
                time:"20m",
                img:ProfilePic,
                message:"Are you a web developer? Say hi 👋 Let's connect.",
            },
            {
                userName:"David 💥",
                userId:"@david_nwobia",
                time:"20m",
                img:ProfilePic,
                message:"Are you a web developer? Say hi 👋 Let's connect.",
            },
            {
                userName:"David 💥",
                userId:"@david_nwobia",
                time:"20m",
                img:ProfilePic,
                message:"Are you a web developer? Say hi 👋 Let's connect.",
            },
            {
                userName:"David 💥",
                userId:"@david_nwobia",
                time:"20m",
                img:ProfilePic,
                message:"Are you a web developer? Say hi 👋 Let's connect.",
            },
            {
                userName:"David 💥",
                userId:"@david_nwobia",
                time:"20m",
                img:ProfilePic,
                message:"Are you a web developer? Say hi 👋 Let's connect.",
            },
            {
                userName:"David 💥",
                userId:"@david_nwobia",
                time:"20m",
                img:ProfilePic,
                message:"Are you a web developer? Say hi 👋 Let's connect.",
            },
            {
                userName:"David 💥",
                userId:"@david_nwobia",
                time:"20m",
                img:ProfilePic,
                message:"Are you a web developer? Say hi 👋 Let's connect.",
            },
            {
                userName:"David 💥",
                userId:"@david_nwobia",
                time:"20m",
                img:ProfilePic,
                message:"Are you a web developer? Say hi 👋 Let's connect.",
            },
            {
                userName:"David 💥",
                userId:"@david_nwobia",
                time:"20m",
                img:ProfilePic,
                message:"Are you a web developer? Say hi 👋 Let's connect.",
            },
            {
                userName:"David 💥",
                userId:"@david_nwobia",
                time:"20m",
                img:ProfilePic,
                message:"Are you a web developer? Say hi 👋 Let's connect.",
            },
        ]

            //trend feed

            const trend=[
                {
                    status:"Trending",
                    topic:"THE GOAT",
                    noTweets:"20M Tweets"
                },
                {
                    status:"Trending in Nigeria",
                    topic:"Congratulations Messi",
                    noTweets:"230K Tweets"
                },
                {
                    status:"Trending",
                    topic:"Mbappe",
                    noTweets:"10.2k Tweets"
                },
                {
                    status:"Trending in Nigeria",
                    topic:"Congratulations Messi",
                    noTweets:"230K Tweets"
                },
                {
                    status:"Trending",
                    topic:"Mbappe",
                    noTweets:"10.2k Tweets"
                },
                {
                    status:"Trending",
                    topic:"THE GOAT",
                    noTweets:"20M Tweets"
                },
                {
                    status:"Trending in Nigeria",
                    topic:"Congratulations Messi",
                    noTweets:"230K Tweets"
                },
            ]

            //who to follow section

            const people =[
                {
                    userName:"Dave 💥",
                    userId:"@david_nwobia",
                    img : ProfilePic
                },
                {
                    userName:"Dave 💥",
                    userId:"@david_nwobia",
                    img : ProfilePic
                },
                {
                    userName:"Dave 💥",
                    userId:"@david_nwobia",
                    img : ProfilePic
                },
                {
                    userName:"king",
                    userId:"@king",
                    img : ProfilePic
                },
            ]





  return (
    <div className="flex justify-center item-start font-link  ">
      {/* icon tabs */}
      <div className="flex flex-col h-screen fixed left-72 justify-between ">
      <div>
        <div className="m-3 text-blue-500 " ><FaTwitter className="w-14 h-12 p-2 hover:bg-blue-200 rounded-full" /></div>
        <div className="flex m-1 p-3.5 hover:bg-gray-200 rounded-full"><RiHome7Fill className="w-10 h-7" /> <h3 className="text-lg font-semibold ml-3">Home</h3></div>
        <div className="flex m-1 p-3.5 hover:bg-gray-200 rounded-full"><RiHashtag className="w-10 h-7" /> <h3 className="text-lg  ml-3">Explore</h3></div>
        <div className="flex m-1 p-3.5 hover:bg-gray-200 rounded-full"><HiOutlineBell className="w-10 h-7" /> <h3 className="text-lg  ml-3">Notifications</h3></div>
        <div className="flex m-1 p-3.5 hover:bg-gray-200 rounded-full"><FaRegEnvelope className="w-10 h-7" /> <h3 className="text-lg  ml-3">Messages</h3></div>
        <div className="flex m-1 p-3.5 hover:bg-gray-200 rounded-full"><FaRegBookmark className="w-10 h-7" /> <h3 className="text-lg  ml-3">Bookmarks</h3></div>
        <div className="flex m-1 p-3.5 hover:bg-gray-200 rounded-full"><RiFileListLine className="w-10 h-7" /> <h3 className="text-lg  ml-3">Lists</h3></div>
        <div className="flex m-1 p-3.5 hover:bg-gray-200 rounded-full"><HiOutlineUser className="w-10 h-7" /> <h3 className="text-lg ml-3">Profile</h3></div>
        <div className="flex m-1 p-3.5 hover:bg-gray-200 rounded-full"><HiOutlineDotsCircleHorizontal className="w-10 h-7" /> <h3 className="text-xl ml-3">More</h3></div>
        <button className="p-4 bg-blue-500 mt-6 shadow-md text-white rounded-full px-24">Tweet</button>
       </div>
        <div className=" m-3 p-2 hover:bg-gray-200 rounded-full">
            <div className="flex justify-evenly items-center">
                <div className="mr-2">
                    <img src={ProfilePic} className="h-12 rounded-full" alt="" />
                </div>
                <div className="m-2">
                    <h4 className="text-sm font-semibold">Dave 💥</h4>
                    <p className="text-sm font-thin">@david_nwobia</p>
                </div>
                <div className="m-2 ml-14">
                    <HiDotsHorizontal className="h-12"/>
                </div>
            </div>
        </div>
      </div>

      {/* home feed */}
      <div className="border-l border-r w-2/6 static">
    
        <div className="flex justify-between p-3  w-2/6 z-20 bg-opacity-20 fixed bg-gray-300">
            <h3 className="text-lg font-semibold ">Home</h3>
            <HiOutlineSparkles className="w-6 h-6"/>
         </div>


        <div className="flex flex-col mt-12 border-b">
            <div className="flex m-1 ">
                <div className="mr-2 p-2">
                    <img src={ProfilePic} className="h-12 rounded-full" alt="" />
                </div>
                <div className="flex flex-col grow mt-2">
                    <select name="everyone" className="border outline-none px-2 w-28 text-sm text-blue-400 rounded-full" id="">
                        <option value="a">Everyone</option>
                        <option value="b">Twitter Circle</option>
                    </select>
                   <input type="text" className="mt-6 outline-none text-lg placeholder-gray-500 " placeholder="What's happening?" />
                   <div className="flex my-5 items-center font-semibold text-sm text-blue-400 mt-3">
                        <IoEarthSharp/>
                       <h3 className="ml-0.5">Everyone can reply</h3>
                   </div>
                   <div className="border-t flex justify-between  w-full items-center">
                       <div  className="flex mt-6 my-8 text-blue-500 justify-around">
                        <IoImageOutline className="w-5 mx-2 h-5 "/>
                        <HiOutlineGif className="w-5 mx-2 h-5 "/>
                        <IoListOutline className=" w-5  mx-2 h-5 "/>
                        <HiOutlineEmojiHappy className="w-5 mx-2 h-5 "/>
                        <IoCalendarClearOutline className="w-5 mx-2 h-5 "/>
                        <IoLocationOutline className="w-5 mx-2 h-5 "/>
                        </div>
                        <button className="h-10 p-2 ml-36 mr-8  bg-blue-300 rounded-full text-white w-20">
                            Tweet
                        </button>
                   </div>
                </div>
                
            </div>
           
            
        </div>
        <div className=" hover:bg-gray-50 hover:cursor-pointer">
            <h3 className="p-3 text-center text-blue-400">Show 946 Tweets</h3>
        </div>

{tweet.map(({userId, userName,time,img,message})=>(

<div className="flex flex-col border-t  hover:bg-gray-50 hover:cursor-pointer border-b">
<div className="flex m-1 justify-evenly">
    <div className="mr-2 p-2">
        <img src={img} className="h-12 rounded-full" alt="" />
    </div>
    <div className="pt-1 grow">
        <div className="flex">
            <h3 className="font-semibold">{userName}</h3>
            <div className="text-sm font-thin flex item-center">
                <p>{userId}</p>
                <p className="px-2 pb-2">.</p>
                <p>{time}</p>
            </div>
    
        </div>
        <div>
            <p className="text-md font-light"> {message} </p>
        </div>
    </div>
    <div className="mr-2">
            <HiDotsHorizontal className="h-12"/>
    </div>
</div>
<div  className="flex justify-around">
        <TbMessageCircle2 className="m-2 ml-0 w-5 h-5  text-gray-500"/>
        <FaRetweet className="m-2  w-5 h-5   text-gray-500"/>
        <HiOutlineHeart className="m-2  w-5 h-5  text-gray-500 "/>
        <RiUpload2Line className="m-2  w-5 h-5   text-gray-500"/>
</div>
</div>

))}
        
        
    

       
      </div>

      {/* trend feed */}
      <div className="w-24">
            <div className="flex fixed m-1 ml-10 p-2 w-96 rounded-full  bg-gray-100 items-center">
                <div>
                    <IoSearchOutline className="mx-2"/>
                </div>
                <input className="outline-none 
                 placeholder-gray-700 text-sm font-light p-1  bg-gray-100" type="search" name="search" placeholder="Search Twitter" id="" />
            </div>


        <div className="relative top-12 rounded-xl m-3 ml-10 overflow-hidden w-96">
            <div className="">
                <div className="p-3 pb-3 bg-gray-100"><h3 className="text-xl font-bold">Trends for you</h3></div>

                {trend.map(({status,topic,noTweets})=>(
                <div className="flex p-3 pt-5 justify-between  hover:bg-gray-200 bg-gray-100 ">
                    <div className="flex flex-col">
                        <h3 className="font-tiny text-gray-500 text-sm">{status}</h3>
                        <h2 className="font-semibold">{topic}</h2>
                        <p className="font-tiny text-sm  text-gray-500">{noTweets}</p>
                    </div>
                    <div>
                        <HiDotsHorizontal />
                    </div>
                </div>
                    ))}
                <div className="py-3 p-3 bg-gray-100 hover:bg-gray-200"><h3 className="text-sm text-blue-400">Show More</h3></div>
                
            </div>
        </div>


        <div className=" rounded-xl mt-20 ml-10 m-3 overflow-hidden w-96">
            <div className="">
                <div className="p-3 pb-3 bg-gray-100"><h3 className="text-xl font-bold">Who to follow</h3></div>

                {people.map(({userName, userId, img})=>(
                          <div className="p-3 bg-gray-100 hover:bg-gray-200">
                          <div className="flex items-center justify-between">
                              <div className="flex justify-evenly items-center">
                              <div className="mr-2">
                                  <img src={img} className="h-12 rounded-full" alt="" />
                              </div>
                              <div className="">
                                  <h4 className="text-sm font-semibold">{userName}</h4>
                                  <p className="text-sm font-thin">{userId}</p>
                              </div>
                              </div>
  
                              <div className="mr-1">
                                  <button className="p-2 px-3.5 text-sm text-white  bg-black rounded-full">Follow</button>
                              </div>
                          </div>
                      </div>
                ))}
                  
                    
                <div className="py-4 p-3 bg-gray-100 hover:bg-gray-200"><h3 className="text-sm text-blue-400">Show More</h3></div>
                
            </div>
        </div>

      </div>
      
    </div>
  );
}

export default Home;
