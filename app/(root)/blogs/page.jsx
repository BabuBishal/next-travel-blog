import Blogs from "@/components/shared/Blogs"
import TopPost from "@/components/shared/TopPost"


const page = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 md:w-[60%] overflow-y-hidden h-fit mt-10 max-md:space-y-7 " > 
      <Blogs />
      <TopPost />
    </div>
  )
}

export default page