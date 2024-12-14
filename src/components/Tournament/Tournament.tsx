import Image from "next/image";
import React from "react";

const Tournament = () => {
  const data = [
    {
      name: "BASKETBALL",
      image: "/tournament-img/Basketball.png",
    },
    {
      name: "CHESS",
      image: "/tournament-img/Chess.png",
    },
    {
      name: "TABLE TENNIS",
      image: "/tournament-img/table-tennis.png",
    },
    {
      name: "CRIKET",
      image: "/tournament-img/Cricket.png",
    },
    {
      name: "FOOTBALL",
      image: "/tournament-img/Football.png",
    },
    {
      name: "KABADDI",
      image: "/tournament-img/Kabaddi.png",
    },
    {
      name: "BADMINTON",
      image: "/tournament-img/Badminton.png",
    },
    {
      name: "KHO KHO",
      image: "/tournament-img/Kho-Kho.png",
    },
    {
      name: "VOLLEYBALL",
      image: "/tournament-img/Volleyball.png",
    },
    {
      name: "YOGA",
      image: "/tournament-img/Yoga.png",
    },
  ];

  return (
    <div className="w-full bg-black  flex flex-col items-center px-6 md:px-16 mb-6">
      {/* Header */}
      <h1 className="text-3xl md:text-5xl text-white pb-4 border-b border-white w-full text-center mt-4 font-semibold ">
        TOURNAMENT
      </h1>
      {/* PUBG */}
      <div className="md:my-16 my-8 md:w-[19rem] md:h-[19rem] h-[10rem] w-[10rem] flex items-center justify-center rounded-3xl  ">
        <Image
          src="/tournament-img/BGMI.png"
          alt="BGMI"
          width={300}
          height={300}
          className="w-full h-full"
        />
      </div>
      {/* Other Sports */}
      <div className="grid grid-cols-3 md:gap-[5rem]  gap-[1rem] px-8 items-center">
        {data.map((item, index) => (
          <div
            key={index}
            className={`md:w-[14rem] md:h-[14rem]  flex items-center justify-center rounded-3xl ${
              index === 9 ? "col-span-1 col-start-2" : ""
            } `}
          >
            <Image
              src={item.image}
              alt={item.name}
              width={300}
              height={300}
              className="w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tournament;
