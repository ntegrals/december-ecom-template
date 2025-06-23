export default function CTA() {
  return (
    <div className="flex relative flex-grow max-w-full min-w-0 self-stretch flex-auto min-h-[1px] items-center flex-shrink py-[2.5%] px-[5%] justify-center bg-[#002613FF]">
      <div className="flex gap-5 relative flex-grow max-w-[1440px] min-w-0 self-stretch flex-col min-h-[1px] items-center flex-shrink justify-center bg-[#0A2704FF]">
        <div className="text-white text-[32px] self-center flex-auto text-center flex-shrink-0 font-semibold leading-10 break-words">
          <span style={{ width: "100%" }}>
            <h3 role="heading">
              Want to join the 8% of people who are nutrient <em>sufficient</em>
              ?
            </h3>
          </span>
        </div>
        <button
          role="button"
          className="flex overflow-hidden shadow-[5px_5px_0px_0px_#FFFFFFFF] flex-auto items-center flex-shrink-0 py-[15px] px-8 justify-center bg-[#007E40FF] border border-[#002613FF] rounded-[35px]"
        >
          <div
            className="text-white flex-grow text-sm flex-auto flex-shrink font-[Poppins,sans-serif] font-semibold leading-[21px] break-words
"
          >
            <span style={{ width: "100%" }}>
              <p>get your grüns</p>
            </span>
          </div>
        </button>
      </div>
    </div>
  );
}
