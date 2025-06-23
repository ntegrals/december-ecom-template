export default function PromoBanner() {
  return (
    <div className="text-white/75 bg-[#00582d] bg-fixed">
      <div className="lg:px-20">
        <div className="content-center text-white flex flex-wrap h-full justify-center w-full">
          <p className="!text-sm !leading-[1.4] m-0 p-[10px] text-center min-h-5 font-medium md:text-sm">
            <span className="md:hidden">
              ✨ Sign up and save up to 52% OFF ✨
            </span>
            <span className="hidden md:inline">
              ✨ Sign up and save up to 52% OFF ✨
            </span>
          </p>
        </div>
        <div className="localization-wrapper"></div>
      </div>
    </div>
  );
}
