export default function StatsImage() {
  return (
    <div className="flex relative flex-grow max-w-full min-w-0 self-stretch flex-auto min-h-px items-center flex-shrink pt-[5%] px-[5%] pb-[2.5%] justify-center bg-[#DFEFE7]">
      <div
        tabIndex={-1}
        className="flex gap-20 relative flex-grow max-w-[1440px] min-w-0 flex-none min-h-px items-center flex-shrink justify-center grid-cols-2"
      >
        <div className="flex relative flex-grow max-w-full min-w-0 self-start flex-none min-h-px items-center flex-shrink flex-col justify-center">
          <div className="text-[#007E40FF] flex-grow text-[38px] self-stretch flex-auto mt-5 text-center flex-shrink font-bold leading-[50px] mb-5 break-words">
            <span style={{ width: "100%" }}>
              <h2>
                Modern Living Leaves <br />
                Our Bodies Deficient
              </h2>
            </span>
          </div>
          <div className="text-[#002613FF] flex-grow text-lg self-stretch flex-auto text-center flex-shrink font-bold leading-[30px] mb-[30px] break-words">
            <span style={{ width: "100%" }}>
              <h3>Grüns is the first smart gummy that fills the gaps.</h3>
            </span>
          </div>
          <div className="contents" data-rid={1}>
            <div className="flex gap-10 relative flex-grow max-w-full min-w-0 self-stretch flex-auto min-h-px items-center flex-shrink mb-5 justify-center grid-cols-2">
              <div className="flex relative flex-grow max-w-full min-w-0 self-start flex-none min-h-px items-start flex-shrink flex-col justify-start">
                <div className="text-[#007E40FF] flex-grow text-[50px] self-stretch flex-auto italic text-center flex-shrink font-semibold leading-[52px] break-words">
                  <span style={{ width: "100%" }}>
                    <p>92%</p>
                  </span>
                </div>
                <div className="text-[#002613FF] flex-grow text-lg self-stretch flex-auto mt-[15px] text-center flex-shrink font-normal leading-[30px] break-words">
                  <span style={{ width: "100%" }}>
                    <p>
                      of people are deficient in critical nutrition for our
                      body, mind, and immunity to thrive
                    </p>
                  </span>
                </div>
              </div>
              <div className="flex relative flex-grow max-w-full min-w-0 self-start flex-none min-h-px items-start flex-shrink flex-col justify-start">
                <div className="text-[#007E40FF] flex-grow text-[50px] self-stretch flex-auto italic text-center flex-shrink font-semibold leading-[52px] break-words">
                  <span style={{ width: "100%" }}>
                    <p>74%</p>
                  </span>
                </div>
                <div className="text-[#002613FF] flex-grow text-lg self-stretch flex-auto mt-[15px] text-center flex-shrink font-normal leading-[30px] break-words">
                  <span style={{ width: "100%" }}>
                    <p>
                      of people suffer from gut issues like bloat, indigestion,
                      and abdominal pains
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            tabIndex={0}
            role="link"
            className="text-white cursor-pointer overflow-hidden text-[22px] self-stretch flex-auto text-center flex-shrink-0 font-semibold leading-[30px] py-[15px] px-[5px] break-words tracking-[1px] bg-[#007E40FF] border border-[#002613FF] rounded-[20px]"
          >
            <span style={{ width: "100%" }}>
              <p>Grüns gummies can support both.</p>
            </span>
          </div>
        </div>
        <picture className="flex overflow-hidden flex-grow min-w-0 self-stretch flex-none min-h-0 object-cover overflow-x-auto overflow-y-hidden items-center flex-shrink rounded-[20px]">
          <source
            srcSet="https://gruns.co/s/files/1/0550/9614/8034/files/Modern_Living.jpg?v=1730937231&%3Bwidth=820&em-origin=cdn.shopify.com&em-format=avif"
            media="(max-width: 640px)"
          />
          <source
            srcSet="https://gruns.co/s/files/1/0550/9614/8034/files/Modern_Living.jpg?v=1730937231&%3Bwidth=1024&em-origin=cdn.shopify.com&em-format=avif"
            media="(min-width: 641px) and (max-width: 1024px)"
          />
          <source
            srcSet="https://gruns.co/s/files/1/0550/9614/8034/files/Modern_Living.jpg?v=1730937231&%3Bwidth=1800&em-origin=cdn.shopify.com&em-format=avif"
            media="(min-width: 1025px) and (max-width: 2400px)"
          />
          <img
            src="https://gruns.co/s/files/1/0550/9614/8034/files/Modern_Living.jpg?v=1730937231&em-origin=cdn.shopify.com&em-format=avif"
            alt="Strawberries and blueberries scattered around a packet of Grüns Superfoods Greens Gummies."
            className="h-full m-0 block p-0 max-w-full min-w-full max-h-full min-h-full object-cover box-border"
            loading="eager"
          />
        </picture>
      </div>
    </div>
  );
}
