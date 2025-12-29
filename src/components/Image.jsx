const Image = ({ image }) => {
  return (
    <div className="flex bg-[#faf2dd] h-[100dvh] w-[35%] justify-center items-center">
      <div className="fadeUp w-[300px] aspect-[3/5]  border border-[#aa531a] p-[20px]  overflow-hidden">
        <img className="w-full h-full  object-cover" src={image} />
      </div>
    </div>
  );
};

export default Image;
