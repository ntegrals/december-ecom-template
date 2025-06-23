export default function Benefits() {
  return (
    <div className="flex relative flex-grow max-w-full min-w-0 self-stretch flex-auto min-h-px items-center flex-shrink pl-[5%] pr-[5%] pb-[5%] justify-center bg-white">
      <div
        tabIndex={-1}
        id="benefits"
        className="flex gap-20 relative flex-grow max-w-[1440px] min-w-0 self-stretch flex-none min-h-px items-center flex-shrink justify-center bg-white grid-cols-2"
      >
        <picture className="h-full flex overflow-hidden flex-grow min-w-0 self-auto flex-none max-h-[75vh] min-h-0 object-cover overflow-x-auto overflow-y-hidden items-center flex-shrink rounded-[20px]">
          <source
            srcSet="https://gruns.co/s/files/1/0550/9614/8034/files/Transform_Your_Health.jpg?v=1730937231&%3Bwidth=820&em-origin=cdn.shopify.com&em-format=avif"
            media="(max-width: 640px)"
          />
          <source
            srcSet="https://gruns.co/s/files/1/0550/9614/8034/files/Transform_Your_Health.jpg?v=1730937231&%3Bwidth=1024&em-origin=cdn.shopify.com&em-format=avif"
            media="(min-width: 641px) and (max-width: 1024px)"
          />
          <source
            srcSet="/testimonial.png"
            // srcSet="https://gruns.co/s/files/1/0550/9614/8034/files/Transform_Your_Health.jpg?v=1730937231&%3Bwidth=1800&em-origin=cdn.shopify.com&em-format=avif"
            media="(min-width: 1025px) and (max-width: 2400px)"
          />
          <img
            src="https://gruns.co/s/files/1/0550/9614/8034/files/Transform_Your_Health.jpg?v=1730937231&em-origin=cdn.shopify.com&em-format=avif"
            alt="Person smiling and holding a small, dark gummy candy near their mouth."
            className="h-full m-0 block p-0 max-w-full min-w-full max-h-full min-h-full object-cover"
            loading="eager"
          />
        </picture>
        <div className="flex relative flex-grow max-w-1/2 min-w-0 self-start flex-none min-h-px items-center flex-shrink flex-col justify-center">
          <div className="text-[#007E40FF] text-[38px] self-stretch flex-auto mt-5 text-center flex-shrink-0 font-bold leading-[50px] mb-5 break-words alchemy-rte">
            <span style={{ width: "100%" }}>
              <h2>Transform Your Health!</h2>
            </span>
          </div>
          <div className="text-[#002613FF] text-lg self-stretch flex-auto text-center flex-shrink-0 leading-[30px] mx-[12%] mb-[30px] break-words alchemy-rte">
            <span style={{ width: "100%" }}>
              <h3>
                Over 35,000 research publications support the ingredients in
                Grüns.
              </h3>
            </span>
          </div>
          <div
            className="flex max-w-full self-stretch flex-auto items-center flex-shrink-0 justify-center"
            data-rid={1}
          >
            <div className="gap-10 grid relative flex-grow max-w-full min-w-0 self-stretch flex-none min-h-px items-start flex-shrink justify-start bg-white grid-cols-2">
              <div className="flex relative max-w-full min-w-0 self-start flex-auto min-h-px items-start flex-shrink-0 justify-start">
                <div className="flex relative flex-grow max-w-full min-w-0 self-stretch flex-auto min-h-px items-start flex-shrink flex-col justify-start">
                  <picture className="w-[65px] h-[65px] flex max-w-[250px] min-w-0 self-center flex-auto max-h-[250px] min-h-0 object-scale-down overflow-x-auto overflow-y-hidden items-center flex-shrink-0">
                    <img
                      src="https://gruns.co/s/files/1/0550/9614/8034/files/gut_health_c6d8798e-8375-40d0-9076-f9d30183cce4.svg?v=1730937698&em-origin=cdn.shopify.com&em-format=avif"
                      alt="Gut Health"
                      className="h-full m-0 block p-0 max-w-full min-w-full max-h-full min-h-full object-scale-down"
                      loading="eager"
                    />
                  </picture>
                  <div className="text-[#007E40FF] text-2xl self-center flex-auto mt-[10px] text-center flex-shrink-0 font-bold leading-[34px] mb-[5px] break-words alchemy-rte">
                    <span style={{ width: "100%" }}>
                      <p>Gut Health</p>
                    </span>
                  </div>
                  <div className="text-[#002613FF] text-base self-center flex-auto text-center flex-shrink-0 leading-6 break-words tracking-normal alchemy-rte">
                    <span style={{ width: "100%" }}>
                      <p>
                        Prebiotics feed good bacteria to boost nutrient
                        absorption and digestion.
                      </p>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex relative max-w-full min-w-0 self-start flex-auto min-h-px items-start flex-shrink-0 justify-start">
                <div className="flex relative flex-grow max-w-full min-w-0 self-stretch flex-auto min-h-px items-start flex-shrink flex-col justify-start">
                  <picture className="w-[65px] h-[65px] flex max-w-[250px] min-w-0 self-center flex-auto min-h-0 object-scale-down overflow-x-auto overflow-y-hidden items-center flex-shrink-0">
                    <img
                      src="https://gruns.co/s/files/1/0550/9614/8034/files/immunity_4cf54ccc-cde5-4e89-88fe-f22b714cb6ce.svg?v=1730937698&em-origin=cdn.shopify.com&em-format=avif"
                      alt="Immunity"
                      className="h-full m-0 block p-0 max-w-full min-w-full max-h-full min-h-full object-scale-down"
                      loading="eager"
                    />
                  </picture>
                  <div className="text-[#007E40FF] text-2xl self-center flex-auto mt-[10px] text-center flex-shrink-0 font-bold leading-[34px] mb-[5px] break-words alchemy-rte">
                    <span style={{ width: "100%" }}>
                      <p>Immunity</p>
                    </span>
                  </div>
                  <div className="text-[#002613FF] text-base self-center flex-auto text-center flex-shrink-0 leading-6 break-words tracking-normal alchemy-rte">
                    <span style={{ width: "100%" }}>
                      <p>
                        <span style={{ color: "rgb(0, 0, 0)" }}>
                          Immunity and stress relief from Vitamin C and D, Zinc,
                          antioxidants, and adaptogens.
                        </span>
                      </p>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex relative max-w-full min-w-0 self-start flex-auto min-h-px items-start flex-shrink-0 justify-start">
                <div className="flex relative flex-grow max-w-full min-w-0 self-stretch flex-auto min-h-px items-start flex-shrink flex-col justify-start">
                  <picture className="w-[65px] h-[65px] flex max-w-[250px] min-w-0 self-center flex-auto max-h-[250px] min-h-0 object-scale-down overflow-x-auto overflow-y-hidden items-center flex-shrink-0">
                    <img
                      src="https://gruns.co/s/files/1/0550/9614/8034/files/recovery_2c68e61d-b40a-464f-b4a4-5c61fe484394.svg?v=1730937698%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0550%2F9614%2F8034%2Ffiles%2Frecovery.svg%3Fv%3D1679596468&em-origin=cdn.shopify.com&em-format=avif"
                      alt="Recovery"
                      className="h-full m-0 block p-0 max-w-full min-w-full max-h-full min-h-full object-scale-down"
                      loading="eager"
                    />
                  </picture>
                  <div className="text-[#007E40FF] text-2xl self-center flex-auto mt-[10px] text-center flex-shrink-0 font-bold leading-[34px] mb-[5px] break-words alchemy-rte">
                    <span style={{ width: "100%" }}>
                      <p>Energy &amp; Body</p>
                    </span>
                  </div>
                  <div className="text-[#002613FF] text-base self-center flex-auto text-center flex-shrink-0 leading-6 break-words tracking-normal alchemy-rte">
                    <span style={{ width: "100%" }}>
                      <p>
                        Support recovery, strength, weight management, and
                        metabolism.
                      </p>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex relative max-w-full min-w-0 self-start flex-auto min-h-px items-start flex-shrink-0 flex-col justify-start">
                <div className="flex relative flex-grow max-w-full min-w-0 self-stretch flex-auto min-h-px items-start flex-shrink flex-col justify-start">
                  <picture className="w-[65px] h-[65px] flex max-w-[250px] min-w-0 self-center flex-auto min-h-0 object-scale-down overflow-x-auto overflow-y-hidden items-center flex-shrink-0">
                    <img
                      src="https://gruns.co/s/files/1/0550/9614/8034/files/cognition_a63d4686-2c2b-419a-b831-d77be3a0eda8.svg?v=1730937698&em-origin=cdn.shopify.com&em-format=avif"
                      alt="Cognition"
                      className="h-full m-0 block p-0 max-w-full min-w-full max-h-full min-h-full object-scale-down"
                      loading="eager"
                    />
                  </picture>
                  <div className="text-[#007E40FF] text-2xl self-center flex-auto mt-[10px] text-center flex-shrink-0 font-bold leading-[34px] mb-[5px] break-words alchemy-rte">
                    <span style={{ width: "100%" }}>
                      <p>Brain Health</p>
                    </span>
                  </div>
                  <div className="text-[#002613FF] text-base self-center flex-auto text-center flex-shrink-0 leading-6 break-words tracking-normal alchemy-rte">
                    <span style={{ width: "100%" }}>
                      <p>
                        Thiamin, folate, and mushrooms support clarity and brain
                        health.
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
