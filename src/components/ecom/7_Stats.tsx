import { CheckCircle } from "lucide-react";

export default function Stats() {
  return (
    <div>
      <div className="flex relative min-w-0 self-stretch flex-auto min-h-px items-center flex-shrink-0 flex-col justify-center">
        <div className="flex relative flex-grow min-w-0 self-stretch flex-auto min-h-px items-center flex-shrink py-[2.5%] px-[5%] justify-center bg-[#DFEFE7]">
          <div className="flex gap-2 relative flex-grow max-w-[1440px] min-w-0 self-stretch flex-none min-h-px items-center flex-shrink flex-col justify-center">
            <div
              className="text-[#007E40FF] flex-grow text-[38px] self-stretch flex-auto text-center flex-shrink font-[Poppins] font-bold leading-[50px] break-words"
              style={{
                fontSize: "38px",
                fontFamily: "Poppins",
                fontWeight: "700",
                lineHeight: "50px",
              }}
            >
              <span style={{ width: "100%" }}>
                <p>Snackable, Packable, Clinically-Tested</p>
              </span>
            </div>

            <div
              className="text-[#002613FF] w-full flex-grow text-base max-w-[700px] self-auto flex-auto text-center flex-shrink font-[Poppins] font-normal leading-[27px] break-words pb-[1.5%]"
              style={{
                fontSize: "16px",
                fontFamily: "Poppins",
                fontWeight: "400",
                lineHeight: "27px",
              }}
            >
              <span style={{ width: "100%" }}>
                <p>
                  In a 2025 double-blind, placebo-controlled study on Grüns, run
                  by a leading third-party research lab, participants showed
                  real, measurable improvements.
                </p>
              </span>
            </div>

            <div className="contents">
              <div className="flex gap-10 relative flex-grow max-w-full min-w-0 self-stretch flex-auto min-h-px items-center flex-shrink justify-center grid-cols-4">
                <div
                  className="flex relative flex-grow max-w-full min-w-0 self-stretch flex-none min-h-px items-center flex-shrink flex-col justify-start"
                  role="heading"
                >
                  <div className="text-[#007E40FF] text-[50px] self-center flex-auto italic text-center flex-shrink-0 font-semibold leading-[52px] break-words">
                    <span style={{ width: "100%" }}>
                      <p>20%</p>
                    </span>
                  </div>
                  <div className="text-lg font-normal leading-[27px] font-[Poppins]">
                    <span style={{ width: "100%" }}>
                      <p>Increase in Folate levels in the blood</p>
                    </span>
                  </div>
                </div>

                <div className="flex relative flex-grow max-w-full min-w-0 self-stretch flex-none min-h-px items-center flex-shrink flex-col justify-start">
                  <div className="text-[#007E40FF] text-[50px] self-center flex-auto italic text-center flex-shrink-0 font-semibold leading-[52px] break-words">
                    <span style={{ width: "100%" }}>
                      <p>40%</p>
                    </span>
                  </div>
                  <div className="text-lg font-normal leading-[27px] font-[Poppins]">
                    <span style={{ width: "100%" }}>
                      <p>Increase in Vitamin C levels in the blood</p>
                    </span>
                  </div>
                </div>

                <div className="flex relative flex-grow max-w-full min-w-0 self-stretch flex-none min-h-px items-center flex-shrink flex-col justify-start">
                  <div className="text-[#007E40FF] text-[50px] self-center flex-auto italic text-center flex-shrink-0 font-semibold leading-[52px] break-words">
                    <span style={{ width: "100%" }}>
                      <p>75%</p>
                    </span>
                  </div>
                  <div className="text-lg font-normal leading-[27px] font-[Poppins]">
                    <span style={{ width: "100%" }}>
                      <p>
                        <span style={{ color: "rgb(0, 0, 0)" }}>
                          Said they'd keep taking Grüns after the study
                        </span>
                      </p>
                    </span>
                  </div>
                </div>

                <div className="flex relative flex-grow max-w-full min-w-0 self-stretch flex-none min-h-px items-center flex-shrink flex-col justify-start">
                  <div className="text-[#007E40FF] text-[50px] self-center flex-auto italic text-center flex-shrink-0 font-semibold leading-[52px] break-words">
                    <span style={{ width: "100%" }}>
                      <p>55%</p>
                    </span>
                  </div>
                  <div className="text-lg font-normal leading-[27px] font-[Poppins]">
                    <span style={{ width: "100%" }}>
                      <p>
                        <span style={{ color: "rgb(0, 0, 0)" }}>
                          Experienced improved digestion in 12 weeks
                        </span>
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-0 relative flex-grow min-w-0 self-stretch flex-auto min-h-px items-center flex-shrink pt-[2.5%] px-[5%] flex-col pb-[5%] justify-center bg-[#DFEFE7] grid-cols-1">
        <div className="flex relative max-w-full min-w-0 self-stretch flex-auto min-h-px items-center flex-shrink-0 flex-col justify-center">
          <div className="text-[#007E40FF] flex-grow text-[38px] self-stretch flex-auto text-center flex-shrink font-bold leading-[50px] mb-[10px] break-words">
            <span style={{ width: "100%" }}>
              <h2 role="heading" aria-level={3}>
                Quality You Can Trust
              </h2>
            </span>
          </div>
          <div className="text-[#002613FF] w-[750px] flex-grow text-lg flex-auto text-center flex-shrink leading-[30px] mb-[15px] break-words">
            <span style={{ width: "100%" }}>
              <h3 role="heading" aria-level={4}>
                Our gummies are regularly tested for all 21 vitamins &amp;
                minerals to ensure label claims are accurate and clear of
                contaminants including:
              </h3>
            </span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-[60px] items-center justify-center max-w-[1440px] mx-auto">
          <div className="flex justify-center items-center flex-shrink-0">
            <picture className="h-[50px] flex max-w-[400px] min-w-0 object-contain items-center">
              <source
                srcSet="https://gruns.co/s/files/1/0550/9614/8034/files/euroquad_RGB_-transparent.png?v=1734097538&%3Bwidth=820&em-origin=cdn.shopify.com&em-format=avif"
                media="(max-width: 640px)"
              />
              <source
                srcSet="https://gruns.co/s/files/1/0550/9614/8034/files/euroquad_RGB_-transparent.png?v=1734097538&%3Bwidth=1024&em-origin=cdn.shopify.com&em-format=avif"
                media="(min-width: 641px) and (max-width: 1024px)"
              />
              <source
                srcSet="https://gruns.co/s/files/1/0550/9614/8034/files/euroquad_RGB_-transparent.png?v=1734097538&%3Bwidth=1800&em-origin=cdn.shopify.com&em-format=avif"
                media="(min-width: 1025px) and (max-width: 2400px)"
              />
              <img
                src="https://gruns.co/s/files/1/0550/9614/8034/files/euroquad_RGB_-transparent.png?v=1734097538&em-origin=cdn.shopify.com&em-format=avif"
                alt="Eurofins logo with colorful molecular design and company name in blue."
                className="h-full object-contain"
                loading="lazy"
              />
            </picture>
          </div>
          <div className="flex flex-col gap-3 flex-grow max-w-md">
            <div className="flex gap-3 items-center">
              <CheckCircle
                size={20}
                className="text-[#007E40FF] flex-shrink-0"
                style={{
                  fill: "none",
                  stroke: "currentColor",
                }}
              />
              <span className="text-[#002613FF] text-sm font-normal leading-6">
                70 Different pesticides
              </span>
            </div>
            <div className="flex gap-3 items-center">
              <CheckCircle
                size={20}
                className="text-[#007E40FF] flex-shrink-0"
                style={{
                  fill: "none",
                  stroke: "currentColor",
                }}
              />
              <span className="text-[#002613FF] text-sm font-normal leading-6">
                4 types of heavy metals
              </span>
            </div>
            <div className="flex gap-3 items-center">
              <CheckCircle
                size={20}
                className="text-[#007E40FF] flex-shrink-0"
                style={{
                  fill: "none",
                  stroke: "currentColor",
                }}
              />
              <span className="text-[#002613FF] text-sm font-normal leading-6">
                16 different contaminants
              </span>
            </div>
            <div className="flex gap-3 items-center">
              <CheckCircle
                size={20}
                className="text-[#007E40FF] flex-shrink-0"
                style={{
                  fill: "none",
                  stroke: "currentColor",
                }}
              />
              <span className="text-[#002613FF] text-sm font-normal leading-6">
                9 Microbial contaminants
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
