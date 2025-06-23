export default function Brands() {
  return (
    <div className="flex relative flex-grow min-w-0 self-stretch flex-auto min-h-px items-center flex-shrink p-[5%] justify-center bg-white">
      <div className="contents" data-rid={1}>
        <div className="flex gap-20 relative flex-grow max-w-[1440px] min-w-0 self-stretch flex-none min-h-px items-center flex-shrink justify-center grid-cols-2">
          <div className="flex gap-5 relative flex-grow max-w-full min-w-0 self-stretch flex-none min-h-px items-center flex-shrink flex-col justify-center">
            <div className="text-[#002613FF] text-base max-w-[550px] self-center flex-auto text-center flex-shrink-0 font-medium leading-6 break-words">
              <span style={{ width: "100%" }}>
                <p>
                  "All of the good stuff you need. Easy to slip into a pocket or
                  purse, and they actually taste good, too."
                </p>
              </span>
            </div>
            <picture className="w-[150px] flex min-w-0 self-center flex-auto min-h-0 object-cover overflow-x-auto overflow-y-hidden items-center flex-shrink-0">
              <img
                src="https://gruns.co/s/files/1/0550/9614/8034/files/Travel_Leisure_Black_b100118f-0703-411a-98c9-c1e6fe1e4711.svg?v=1730937627&em-origin=cdn.shopify.com&em-format=avif"
                className="h-full m-0 block p-0 max-w-full min-w-full max-h-full min-h-full object-cover"
                loading="eager"
              />
            </picture>
          </div>
          <div className="flex gap-5 relative flex-grow max-w-full min-w-0 self-stretch flex-none min-h-px items-center flex-shrink flex-col justify-center">
            <div className="text-[#002613FF] text-base max-w-[550px] self-center flex-auto text-center flex-shrink-0 font-medium leading-6 break-words">
              <span style={{ width: "100%" }}>
                <p>
                  "You'll look forward to having them. I carry packets of Grüns
                  and give them out like candy to family and friends."
                </p>
              </span>
            </div>
            <picture className="w-[200px] flex min-w-0 self-center flex-auto min-h-0 object-contain overflow-visible items-center flex-shrink-0">
              <img
                src="https://gruns.co/s/files/1/0550/9614/8034/files/PopSugar_Black.svg?v=1721921597&em-origin=cdn.shopify.com&em-format=avif"
                className="h-full m-0 block p-0 max-w-full min-w-full max-h-full min-h-full object-contain"
                loading="eager"
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
}
