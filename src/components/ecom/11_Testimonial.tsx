const Testimonial = () => {
  return (
    <div className="flex relative flex-grow max-w-full min-w-auto self-stretch flex-none min-h-px items-center flex-shrink flex-col justify-center bg-white">
      <div className="w-[calc(100%-0px)] flex gap-20 relative flex-grow max-w-[1440px] min-w-auto self-auto flex-none min-h-px items-center flex-shrink pt-[2.5%] pl-[5%] pr-[5%] pb-[2.5%] justify-start bg-white grid-cols-1">
        <picture className="flex overflow-hidden flex-grow min-w-0 self-stretch flex-1 min-h-0 object-cover overflow-x-auto overflow-y-hidden items-center flex-shrink row-span-1 col-span-1 border border-transparent rounded-2xl">
          <source
            srcSet="https://gruns.co/projects/7edbab76-7940-4a78-9cc0-ac028ed676e1/8bd5b0bb-7c3f-4c1b-8185-1b40cb8a7083?width=820&em-origin=assets.replocdn.com&em-format=avif"
            media="(max-width: 640px)"
            aria-hidden="true"
            data-acsb-hidden="true"
          />
          <source
            srcSet="https://gruns.co/projects/7edbab76-7940-4a78-9cc0-ac028ed676e1/8bd5b0bb-7c3f-4c1b-8185-1b40cb8a7083?width=1024&em-origin=assets.replocdn.com&em-format=avif"
            media="(min-width: 641px) and (max-width: 1024px)"
            aria-hidden="true"
            data-acsb-hidden="true"
          />
          <source
            srcSet="https://gruns.co/projects/7edbab76-7940-4a78-9cc0-ac028ed676e1/8bd5b0bb-7c3f-4c1b-8185-1b40cb8a7083?width=1800&em-origin=assets.replocdn.com&em-format=avif"
            media="(min-width: 1025px) and (max-width: 2400px)"
            aria-hidden="true"
            data-acsb-hidden="true"
          />
          <img
            src="https://gruns.co/projects/7edbab76-7940-4a78-9cc0-ac028ed676e1/8bd5b0bb-7c3f-4c1b-8185-1b40cb8a7083?em-origin=assets.replocdn.com&em-format=avif"
            className="h-full m-0 block p-0 max-w-full min-w-full max-h-full min-h-full object-cover"
            loading="lazy"
          />
        </picture>
        <div className="flex flex-col gap-6 relative flex-grow max-w-full min-w-0 self-stretch flex-1 min-h-px items-start flex-shrink justify-center grid-cols-2">
          <div className="flex flex-col gap-4 relative min-w-auto self-stretch flex-none min-h-px items-start flex-shrink-0 justify-start">
            <div className="flex flex-col gap-2 relative max-w-full min-w-auto self-stretch flex-none min-h-px items-start flex-shrink-0 justify-start">
              <div
                data-acsb-hidden="false"
                className="flex flex-col gap-6 relative max-w-full min-w-auto self-stretch flex-none min-h-px items-start flex-shrink-0 justify-start"
              >
                <div className="flex relative max-w-full min-w-auto self-stretch flex-none min-h-px items-start flex-shrink-0 flex-col justify-start">
                  <div className="text-[#007E40FF] text-[44px] flex-none flex-shrink-0 font-bold leading-[50px] mb-1 break-words">
                    <span style={{ width: "100%" }}>
                      <h1 role="heading">Shaun White's Daily Edge</h1>
                    </span>
                  </div>
                </div>
                <div className="text-[#002613FF] text-base max-w-[630px] flex-none flex-shrink-0 font-normal leading-[27px] break-words">
                  <span style={{ width: "100%" }}>
                    <p>
                      <span style={{ color: "rgb(0, 0, 0)" }}>
                        "As a former pro athlete, I've always looked for ways to
                        stay sharp, feel my best, and fuel my body without
                        overcomplicating it. Grüns uses clean ingredients that
                        actually deliver, and
                      </span>
                      <strong>
                        <span style={{ color: "rgb(0, 0, 0)" }}> </span>
                        <span
                          style={{ color: "rgb(0, 126, 64)" }}
                          role="strong"
                        >
                          I love that it makes better health accessible to
                          everyone
                        </span>
                      </strong>
                      <span style={{ color: "rgb(0, 0, 0)" }}>
                        , whether you're training at the highest level or just
                        trying to make good choices every day."
                      </span>
                    </p>
                  </span>
                </div>
                <div className="text-[#002613FF] text-base max-w-[630px] flex-none flex-shrink-0 font-normal leading-[27px] break-words">
                  <span style={{ width: "100%" }}>
                    <p>
                      — Shaun White | 3x Olympic Gold Medalist, Snowboarding
                      Icon
                    </p>
                  </span>
                </div>
              </div>
              <button
                className="flex overflow-hidden shadow-[5px_5px_0px_0px_#002613FF] flex-none mt-[15px] transition-all duration-300 ease-out flex-shrink-0 mb-[15px] bg-[#007E40] border border-[#002613FF] rounded-[35px]"
                data-acsb-overflower="true"
                data-acsb-clickable="true"
                data-acsb-navigable="true"
                data-acsb-now-navigable="true"
                data-custom-button-processed="true"
              >
                <div
                  role="link"
                  className="text-white cursor-pointer flex-grow text-sm flex-none flex-shrink font-semibold leading-5 pt-3 pl-5 break-words pr-5 pb-3"
                >
                  <span style={{ width: "100%" }}>
                    <p>Fuel Up Like Shaun White</p>
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
