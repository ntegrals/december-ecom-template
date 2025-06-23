//@ts-nocheck
"use client";
import { useState } from "react";

export default function FAQ() {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="flex relative flex-grow min-w-0 self-stretch flex-none min-h-px items-center flex-shrink pt-[5%] pl-[5%] pr-[5%] pb-[5%] justify-center bg-[#DFEFE7]">
      <div className="contents">
        <div
          id="faq"
          className="gap-10 grid relative flex-grow max-w-[1440px] min-w-0 flex-none min-h-px items-start flex-shrink justify-start grid-cols-[minmax(0,1fr)_minmax(0,2fr)]"
        >
          <div className="flex gap-y-5 relative flex-grow max-w-full min-w-0 self-start gap-x-5 flex-none min-h-px items-start flex-shrink flex-col justify-start">
            <div className="text-[#007E40FF] flex-grow text-[32px] self-stretch flex-none text-left flex-shrink font-semibold leading-10 break-words">
              <span style={{ width: "100%" }}>
                <h3 role="heading" aria-level="3">
                  Any last questions?
                </h3>
              </span>
            </div>
            <button className="flex overflow-hidden flex-grow shadow-[5px_5px_0px_0px_#002613FF] flex-none items-start flex-shrink justify-start bg-[#007E40FF] border border-[#002613FF] rounded-[35px]">
              <div className="text-white cursor-pointer flex-grow text-sm flex-none flex-shrink font-semibold leading-5 py-3 px-5 break-words">
                <span style={{ width: "100%" }}>
                  <p>No? Try grüns now →</p>
                </span>
              </div>
            </button>
          </div>
          <div className="flex relative flex-grow max-w-full min-w-0 self-stretch flex-none min-h-px items-start flex-shrink flex-col justify-start">
            <div className="flex relative flex-grow self-stretch flex-none flex-shrink flex-col border-b border-[#002613FF]">
              <div
                tabIndex="0"
                role="button"
                className="cursor-pointer flex relative min-w-0 flex-none min-h-px items-center flex-shrink-0 py-3 pl-0 pr-3 flex-row pb-3 justify-between"
                onClick={() => toggleItem("item1")}
                aria-expanded={openItems.item1 || false}
              >
                <div className="text-[#002613FF] flex-grow text-base flex-none transition-all duration-300 ease-out flex-shrink font-semibold leading-5 break-words">
                  <span style={{ width: "100%" }}>
                    <p>When will my gummies arrive?</p>
                  </span>
                </div>
                <div className="w-6 h-6 flex-none transition-all duration-300 ease-out flex-shrink-0 leading-none">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    aria-label="Collapse/Expand"
                    className="w-full h-full"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      transform: openItems.item1
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                      transition:
                        "transform 300ms cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                    />
                  </svg>
                </div>
              </div>
              <div
                className={`overflow-hidden transition-all duration-200 ease-out ${
                  openItems.item1 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
                aria-hidden={!openItems.item1}
              >
                <div className="p-4 text-[#002613FF]">
                  Content for when will my gummies arrive
                </div>
              </div>
            </div>
            <div className="flex relative flex-grow self-stretch flex-none flex-shrink flex-col border-b border-[#002613FF]">
              <div
                tabIndex="0"
                role="button"
                className="cursor-pointer flex relative min-w-0 flex-none min-h-px items-center flex-shrink-0 py-3 pl-0 pr-3 flex-row pb-3 justify-between"
                onClick={() => toggleItem("item2")}
                aria-expanded={openItems.item2 || false}
              >
                <div className="text-[#002613FF] flex-grow text-base flex-none flex-shrink font-semibold leading-5 break-words">
                  <span style={{ width: "100%" }}>
                    <p>What's inside each order? What am I getting?</p>
                  </span>
                </div>
                <div className="w-6 h-6 flex-none transition-all duration-300 ease-out flex-shrink-0 leading-none">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    role="img"
                    aria-label="Collapse/Expand"
                    style={{
                      transform: openItems.item2
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                      transition:
                        "transform 300ms cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                    className="w-full h-full"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                    />
                  </svg>
                </div>
              </div>
              <div
                className={`overflow-hidden transition-all duration-200 ease-out ${
                  openItems.item2 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
                aria-hidden={!openItems.item2}
              >
                <div className="p-4 text-[#002613FF]">
                  Content for what's inside each order
                </div>
              </div>
            </div>
            <div className="flex relative flex-grow self-stretch flex-none flex-shrink flex-col border-b border-[#002613FF]">
              <div
                tabIndex="0"
                role="button"
                className="cursor-pointer flex relative min-w-0 flex-none min-h-px items-center flex-shrink-0 py-3 pl-0 pr-3 flex-row pb-3 justify-between"
                onClick={() => toggleItem("item3")}
                aria-expanded={openItems.item3 || false}
              >
                <div className="text-[#002613FF] flex-grow text-base flex-none flex-shrink font-semibold leading-5 break-words">
                  <span style={{ width: "100%" }}>
                    <p>When will I feel something?</p>
                  </span>
                </div>
                <div className="w-6 h-6 flex-none transition-all duration-300 ease-out flex-shrink-0 leading-none">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    role="img"
                    aria-label="Collapse/Expand"
                    style={{
                      transform: openItems.item3
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                      transition:
                        "transform 300ms cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                    className="w-full h-full"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                    />
                  </svg>
                </div>
              </div>
              <div
                className={`overflow-hidden transition-all duration-200 ease-out ${
                  openItems.item3 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
                aria-hidden={!openItems.item3}
              >
                <div className="p-4 text-[#002613FF]">
                  Content for when will I feel something
                </div>
              </div>
            </div>
            <div className="flex relative flex-grow self-stretch flex-none flex-shrink flex-col border-b border-[#002613FF]">
              <div
                tabIndex="0"
                role="button"
                className="cursor-pointer flex relative min-w-0 flex-none min-h-px items-center flex-shrink-0 py-3 pl-0 pr-3 flex-row pb-3 justify-between"
                onClick={() => toggleItem("item4")}
                aria-expanded={openItems.item4 || false}
              >
                <div className="text-[#002613FF] flex-grow text-base flex-none flex-shrink font-semibold leading-5 break-words">
                  <span style={{ width: "100%" }}>
                    <p>How do you handle returns or exchanges?</p>
                  </span>
                </div>
                <div className="w-6 h-6 flex-none transition-all duration-300 ease-out flex-shrink-0 leading-none">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    role="img"
                    aria-label="Collapse/Expand"
                    style={{
                      transform: openItems.item4
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                      transition:
                        "transform 300ms cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                    className="w-full h-full"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                    />
                  </svg>
                </div>
              </div>
              <div
                className={`overflow-hidden transition-all duration-200 ease-out ${
                  openItems.item4 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
                aria-hidden={!openItems.item4}
              >
                <div className="p-4 text-[#002613FF]">
                  Content for how do you handle returns or exchanges
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
