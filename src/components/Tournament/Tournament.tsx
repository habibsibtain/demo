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
      name: "CRICKET",
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
    <div className="w-full bg-black flex flex-col items-center px-6 md:px-16 mb-6 relative">
      {/* Header */}
      <h1 className="font-bunken text-3xl md:text-5xl text-white pb-4 border-b border-white w-full text-center mt-4 font-semibold">
        TOURNAMENT
      </h1>

      {/* PUBG */}
      <div className="md:my-16 my-8 md:w-[19rem] md:h-[19rem] h-[14rem] w-[14rem] flex items-center justify-center rounded-3xl">
        <Image
          src="/tournament-img/BGMI.png"
          alt="BGMI"
          width={300}
          height={300}
          className="w-full h-full"
        />
      </div>

      {/* Other Sports */}
      <div className="flex flex-col md:grid md:grid-cols-3 md:gap-[5rem] gap-[1rem] px-8 items-center relative">
        {data.map((item, index) => (
          <div
            key={index}
            className={`relative w-[10rem] h-[10rem] md:w-[14rem] md:h-[14rem] flex items-center justify-center rounded-3xl ${
              index === 9 ? "col-span-1 col-start-2" : ""
            }`}
          >
            {/* Image */}
            <Image
              src={item.image}
              alt={item.name}
              width={300}
              height={300}
              className="w-full h-full"
            />

            {/* Connection Lines */}
            {/* Vertical Line */}
            {(index < data.length - 1 && index%2 === 0 )&& (
              <div
                className="md:hidden absolute w-[2px] bg-white"
                style={{
                  top: "50%",
                  right: "-4rem",
                  height: "11rem",
                }}
              />
            )}
            {(index < data.length - 1 && index%2 !== 0 )&& (
              <div
                className="md:hidden absolute w-[2px] bg-white"
                style={{
                  top: "50%",
                  left: "-4rem",
                  height: "11rem",
                }}
              />
            )}

            {/* Horizontal Line */}
            {index < data.length && (
              <div
                className="md:hidden absolute h-[2px] bg-white"
                style={{
                  right: "-4rem",
                  top: "50%",
                  width: "3rem",
                  transform: "translateY(-50%)",
                }}
              />
            )}
              {
             
             (index < data.length && index !== 0  && index !== data.length - 1) && (
               <div
               className="md:hidden absolute h-[2px] bg-white"
               style={{
                 left: "-4rem",
                 top: "50%",
                 width: "3rem",
                 transform: "translateY(-50%)",
               }}
             />
             )
         }
            {/* Connector Circle */}
            {index === 0 || index === data.length - 1 ? (
              <div
                className="md:hidden absolute w-[1rem] h-[1rem] bg-white rounded-full"
                style={{
                  right: "-1.5rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              />
            ):(
              <>
              <div
                className="md:hidden absolute w-[1rem] h-[1rem] bg-white rounded-full"
                style={{
                  left: "-1.5rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              />
              <div
                className="md:hidden absolute w-[1rem] h-[1rem] bg-white rounded-full"
                style={{
                  right: "-1.5rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              />
              </>
            )
          
          }
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tournament;
