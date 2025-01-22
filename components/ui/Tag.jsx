const Tag = ({ text, onClick }) => {
  return (
    <>
      <span
        className=" gap-5 uppercase bg-primary py-1 px-3 text-white inline-block rounded-md text-sm self-center my-2 cursor-pointer"
        onClick={onClick}
      >
        {text}
      </span>
    </>
  );
};

export default Tag;
