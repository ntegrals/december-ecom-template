"use client";
import { useState } from "react";

export default function SocialProof() {
  const [activeTab, setActiveTab] = useState("taste");

  const StarIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18px"
      height="18px"
      fill="#007E40FF"
      viewBox="0 0 16 16"
      aria-hidden="true"
    >
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
    </svg>
  );

  const SmallStarIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14px"
      height="14px"
      fill="#007E40FF"
      viewBox="0 0 16 16"
      aria-hidden="true"
    >
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
    </svg>
  );

  const ArrowLeftIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="19" y1="12" x2="5" y2="12"></line>
      <polyline points="12 19 5 12 12 5"></polyline>
    </svg>
  );

  const ArrowRightIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  );

  const tasteReviews = [
    {
      stars: 5,
      text: "These gummies are shockingly delicious, like strawberries! I hate subscriptions because I feel like they are a trap so I canceled it before the gummies even arrived. We quickly decided to resubscribe because we love Grüns so much! A bonus is my kids love them too!",
      author: "Kate S.",
    },
    {
      stars: 5,
      text: "10/10 would recommend. The convenience and taste are huge! Like mixed berries! Plus not having to clean a shaker bottle or extra dishes for greens stuff in powder form, is absolutely excellent!",
      author: "Dustin O.",
    },
    {
      stars: 5,
      text: "A delicious adventure for your taste buds. These gummy bears are more than just a treat; they're a flavorful escape. With a burst of mouthwatering flavors, every bite is an invitation to a tasteful journey. Grüns makes healthy eating an indulgent experience.",
      author: "Kevin S.",
    },
  ];

  const valueReviews = [
    {
      stars: 5,
      text: "These gummies are amazing! Grüns has replaced multiple vitamins and supplements as they are all included in just one yummy little Grüns pack! (For WAY less than I was paying before). Best decision I ever made switching!! If you're on the fence, JUMP! You will not regret your decision!",
      author: "Rebecca D.",
    },
    {
      stars: 5,
      text: "The benefits of eating these gummies daily is stacked. I used to pay so much for multiple supplements to get all of the same benefits that Grüns gives me in a simple snack pack.",
      author: "Jeremy H.",
    },
    {
      stars: 5,
      text: "I was super skeptical. These gummies actually do taste really yummy and they're easy to throw in a packet and take with me so I can enjoy them anytime. I also stopped buying separate probiotic gummies, b12 gummies, and multivitamin gummies. I just take these now and it's easier for me to manage.",
      author: "Jamie W.",
    },
  ];

  const vsPowdersReviews = [
    {
      stars: 5,
      text: "WOW! I've tried a ton of green \"things\" over the years and I have to say, Grüns FOR THE WIN! I was taking AG1 but even with their monthly subscription discount it was still $94 a month and the drink was definitely gritty/chalky. Grüns literally tastes like fruit snacks I ate as a kid. And there isn't a bad aftertaste either! On top of that, they are super convenient, half the price of what I was paying with AG1, and offer the same benefits and then some! P.S. I never do reviews, but these are amazing!",
      author: "Bradley O.",
    },
    {
      stars: 5,
      text: "I've tried a few green powders over the years. The issue has never been nutritive content. It's always been an issue of consistency like many things. Grüns has been the one thing I've been able to stick to because they are so easy to consume and taste wonderful (just like gummy bears).",
      author: "Samuel L.",
    },
    {
      stars: 5,
      text: "Grüns is exactly what I needed. I've been choking on Athletic Greens for the last few years and am glad those days are over. I look forward to taking Grüns every day not only because they taste great but also because I know they're good for me.",
      author: "Jaxon S.",
    },
  ];

  const benefitsReviews = [
    {
      stars: 5,
      text: "My bowel movements are normal for the 1st time in 15 years!",
      author: "Wendy B.",
    },
    {
      stars: 5,
      text: "Grüns really does taste great! More importantly, I feel great. The prebiotics do their job, but not aggressively, and I feel like my overall digestion has improved. This is huge for someone who suffers from chronic IBS! I feel like I'm already seeing improvements in my skin too. They are definitely part of my daily routine.",
      author: "Susan U.",
    },
    {
      stars: 5,
      text: "If you are serious about changing your life, start here. The product is AMAZING! It provides clean feeling energy and mental focus in a good tasting gummy bear that satisfies a sweet tooth craving without the sugar crash.",
      author: "Jeremy C.",
    },
  ];

  const ingredientsReviews = [
    {
      stars: 5,
      text: "Pharmacist approved! Most other gummies on the market have only a few vitamins, but there are no other products like this with full spectrum vitamins in gummy form! I can't stop raving about Grüns to my friends. Definitely give them a try!",
      author: "Mercedes F.",
    },
    {
      stars: 5,
      text: "1000/10. Truly exceeded my expectations! Love the taste, love how they make me feel, and so impressed by the ingredients list! Definitely will be taking these on vacation with me (bye bye green powder)!",
      author: "Gizelle C.",
    },
    {
      stars: 5,
      text: "Grüns are the tastiest nutritional gummies I've ever had. They're more convenient, less messy, and more flavorful than green powders. They are easy to have on the go, so it's easy to build the daily habit of taking them. I've felt great since I started taking Grüns! So much nutrition packed into an easy habit. Do yourself a favor and get a subscription. You won't regret it!",
      author: "Matthew G.",
    },
  ];

  const convenienceReviews = [
    {
      stars: 5,
      text: "Portable! Love the flavor and it's so easy to grab and eat on my way to the billion things I have to do as a mom. Easy way to get my nutrients in!",
      author: "Kelli L.",
    },
    {
      stars: 5,
      text: "I've been using Gruns Daily Gummies for a few weeks, and I'm hooked! The convenience of getting 60 nutrient-dense ingredients in a tasty gummy is unbeatable. They make meeting my daily nutrient needs a breeze, and the blend also supports gut health. I've noticed increased energy levels and an overall sense of vitality. It's perfect for on-the-go nutrition. Gruns has genuinely made a comprehensive daily nutrition solution enjoyable and accessible. Highly recommend!",
      author: "Crystal H.",
    },
    {
      stars: 5,
      text: "It's wild I WANT to take Grüns and don't forget. I love that there are 8 gummies in each pack because taking just 2 gummies before Grüns was never satisfying. And that's before you get to all the health benefits.",
      author: "Brittany A.",
    },
  ];

  const getReviewsForTab = (tab: string) => {
    switch (tab) {
      case "taste":
        return tasteReviews;
      case "value":
        return valueReviews;
      case "vsPowders":
        return vsPowdersReviews;
      case "benefits":
        return benefitsReviews;
      case "ingredients":
        return ingredientsReviews;
      case "convenience":
        return convenienceReviews;
      default:
        return tasteReviews;
    }
  };

  return (
    <div
      className="flex relative flex-grow min-w-auto self-stretch flex-none min-h-px items-center shrink px-[5%] pt-[5%] pb-[2.5%] flex-col justify-center"
      style={{ backgroundColor: "#DFEFE7" }}
    >
      <div className="w-full flex relative flex-grow max-w-screen-2xl min-w-auto self-auto flex-none min-h-px items-center shrink flex-col justify-center">
        <div className="flex gap-2.5 relative flex-grow max-w-full min-w-auto flex-none min-h-px items-center shrink mb-2.5 justify-center">
          <div className="flex flex-grow self-center flex-none items-center shrink justify-center">
            <StarIcon />
          </div>
          <div
            className="text-lg self-center flex-none text-left shrink font-normal leading-6 break-words"
            style={{ color: "#002613FF" }}
          >
            4.8 stars
          </div>
        </div>
        <div
          className="text-4xl self-stretch flex-none text-center shrink font-bold leading-tight mb-5 break-words"
          style={{ color: "#007E40FF" }}
        >
          Join 250,000+ Others Filling Their Nutrition Gaps
        </div>
        <div className="flex relative flex-grow self-stretch flex-none shrink flex-col">
          <div className="flex gap-2.5 relative flex-grow self-stretch flex-none items-center shrink mb-7 justify-center">
            <div className="contents">
              {[
                { key: "taste", label: "Taste" },
                { key: "value", label: "Value" },
                { key: "vsPowders", label: "vs. Powders" },
                { key: "benefits", label: "Benefits" },
                { key: "ingredients", label: "Ingredients" },
                { key: "convenience", label: "Convenience" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`cursor-pointer flex justify-center gap-3 overflow-hidden text-center relative flex-grow min-w-0 flex-none min-h-px transition-all duration-300 shrink px-1 py-3 border-2 rounded-2xl ${
                    activeTab === tab.key
                      ? "bg-green-500 text-white"
                      : "text-gray-800 border-gray-800"
                  }`}
                  style={{
                    borderColor: "#002613FF",
                    backgroundColor:
                      activeTab === tab.key ? "#007E40FF" : "transparent",
                  }}
                >
                  <div
                    className={`text-xl min-w-0 font-semibold flex-none transition-inherit shrink leading-6 break-words ${
                      activeTab === tab.key ? "text-white" : ""
                    }`}
                    style={{
                      color: activeTab === tab.key ? "#FFFFFFFF" : "#002613FF",
                    }}
                  >
                    {tab.label}
                  </div>
                </button>
              ))}
            </div>
          </div>
          <div className="flex relative flex-grow self-stretch flex-none items-start shrink mb-7 flex-col justify-start">
            <div className="gap-5 grid relative min-w-auto self-center flex-none min-h-px items-start shrink flex-col justify-start grid-cols-3">
              {getReviewsForTab(activeTab).map((review, index) => (
                <div
                  key={index}
                  className="flex self-center flex-none items-start shrink justify-center"
                >
                  <div className="w-96 flex relative max-w-sm min-w-auto self-stretch flex-none min-h-px items-start shrink px-7 flex-col justify-start">
                    <div className="flex gap-1 flex-none shrink mb-6">
                      {[...Array(review.stars)].map((_, i) => (
                        <SmallStarIcon key={i} />
                      ))}
                    </div>
                    <div
                      className="w-full text-base max-w-xl flex-none text-center shrink font-normal leading-6 break-words -tracking-wider"
                      style={{ color: "#002613FF" }}
                    >
                      {review.text}
                    </div>
                    <div
                      className="text-xs flex-none mt-5 shrink font-semibold leading-5 break-words -tracking-wide"
                      style={{ color: index < 3 ? "#002613FF" : "#0A2704FF" }}
                    >
                      {review.author}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex relative flex-grow max-w-full min-w-auto self-stretch flex-none min-h-px items-center shrink flex-col justify-start">
            <div className="gap-5 flex relative flex-grow max-w-full min-w-auto self-stretch flex-none min-h-px items-start shrink justify-center">
              {[
                { title: "Kennedy Johnson - AG1", video: "1026964420" },
                { title: "Claire - Value", video: "1026964348" },
                { title: "Jill Justine - Benefits", video: "1026964397" },
                { title: "Paige Flamm - Ingredients", video: "1026964436" },
                { title: "Zac Cardwell - Convenience", video: "1026964479" },
              ].map((video, index) => (
                <div
                  key={index}
                  className="flex flex-none items-start shrink justify-center"
                >
                  <div className="w-[241px] h-[428px] flex relative flex-none items-start shrink justify-start">
                    <iframe
                      src={`https://player.vimeo.com/video/${video.video}?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479`}
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                      className="w-full h-full rounded-2xl"
                      title={video.title}
                    ></iframe>
                  </div>
                </div>
              ))}
            </div>
            <div className="hidden relative max-w-full self-stretch flex-none items-start shrink justify-start">
              <div className="cursor-pointer flex relative flex-wrap self-stretch flex-none items-center shrink justify-center">
                <div
                  className="w-16 h-16 self-center flex-none transition-inherit shrink leading-full"
                  style={{ color: "#0A2704FF" }}
                >
                  <ArrowLeftIcon />
                </div>
              </div>
              <div className="flex relative flex-grow max-w-full min-w-0 self-stretch flex-none min-h-px items-start shrink flex-col justify-start">
                <div className="w-auto flex overflow-hidden relative flex-grow self-stretch flex-none shrink">
                  <div className="flex gap-3 relative flex-grow min-w-0 flex-none min-h-px items-center shrink px-0 py-6 justify-center">
                    <div className="flex-none shrink">
                      <iframe
                        src="https://player.vimeo.com/video/1026964420?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                        className="w-full h-full"
                        title="Testimonial Video"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cursor-pointer flex relative self-stretch flex-none items-center shrink justify-center">
                <div
                  className="w-16 h-16 flex-none transition-inherit shrink leading-full"
                  style={{ color: "#0A2704FF" }}
                >
                  <ArrowRightIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="self-stretch flex-none text-center shrink font-normal leading-5 py-2.5 break-words -tracking-wider text-xs"
          style={{ color: "#002613FF" }}
        >
          Testimonials featured in videos or other promotional materials may
          include individuals who have received compensation, free product, or
          other incentives.
        </div>
      </div>
    </div>
  );
}
