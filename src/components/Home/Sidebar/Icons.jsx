function Icons({ icons, bg, index, setBg }) {
  if (bg === index) {
    return (
      <div className="bg-[#393c49] w-full relative left-1 py-4 pl-3 pr-4 rounded-s-lg icon__container">
        <i
          className={
            icons +
            " text-white text-3xl cursor-pointer px-2 py-1 rounded-md bg-red-400 food__icon"
          }
        ></i>
      </div>
    );
  } else {
    return (
      <div>
        <i
          className={
            icons + " text-red-400 px-2 py-1 text-3xl cursor-pointer food__icon"
          }
          onClick={setBg}
        ></i>
      </div>
    );
  }
}
export default Icons;
