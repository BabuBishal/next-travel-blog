import Image from "next/image";
import Overlay from "@/components/ui/Overlay";

const page = () => {
  return (
    <div className="w-full mx-5 my-5 lg:w-[60%] lg:mx-auto">
      <div className="relative h-[500px] w-full ">
        <Image
        src="/assets/about.jpg"
        fill
        alt="about image"
        objectFit="cover"
        />
        <Overlay />
        <h1 className="flex absolute w-full h-full justify-center items-center text-4xl font-extrabold uppercase text-white">About us</h1>
      </div>
      <div className="leading-8 text-lg bg-white relative mt-[-70px] rounded-lg p-5 shadow-xl w-[90%] mx-auto max-md:mt-0 max-md:w-full max-md:bg-transparent max-md:shadow-none text-center ">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero incidunt impedit eveniet, delectus reprehenderit totam, omnis iste, fugiat tenetur similique vel doloribus reiciendis aliquam. Tenetur dolores sint perferendis natus nisi!
        Quos atque ab optio eveniet adipisci, ea eaque porro molestias sequi hic, ad quam voluptatum vel odio deleniti delectus repellat fugiat, incidunt officia! Blanditiis quas, a laborum possimus natus magni?
        Suscipit, quis explicabo minus repellat adipisci possimus, ullam inventore natus voluptatibus qui voluptatum recusandae deserunt veniam aut asperiores! Nobis nesciunt iure corrupti sit maiores, laboriosam ullam veniam architecto. Necessitatibus, iure?
        Voluptatum nisi tempore molestiae quo porro, nesciunt nostrum nemo! Libero quam, temporibus aliquid eum, delectus enim minima consequatur adipisci aut id nam illum! Deserunt saepe aliquam suscipit amet autem odit.
        Eaque veniam similique exercitationem mollitia aliquam qui repudiandae odio necessitatibus enim, neque assumenda earum eius numquam obcaecati? Beatae natus nostrum, illo odit, voluptatum vitae minima, iste placeat laborum inventore aut.
        </p>
        <div className="w-full flex items-center justify-center" >
<Image
src="/assets/signature.png"
width={500}
height={500}
alt="signature"
/>
        </div>
      </div>
    </div>
  );
};

export default page;
