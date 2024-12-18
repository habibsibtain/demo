"use client";
import Image from "next/image";
import React, { useState } from "react";

interface Rule {
  title: string;
  list: string[];
}

interface SportData {
  name: string;
  image: string;
  rules: Rule;
}

const Tournament = () => {
  const [selectedSport, setSelectedSport] = useState<SportData | null>(null);

  const data: SportData[] = [
    {
      name: "BGMI",
      image: "/tournament-img/BGMI.png",
      rules: {
        title: "GENERAL RULES",
        list: [
          "The game is free to play and can be played online or offline.",
          "Players must be 18 years of age or older to play.",
          "Players can join or leave the game at any time.",
          "Players can join or leave the game at any time.",
          "Players can join or leave the game at any time.",
        ],
      },
    },
    {
      name: "BASKETBALL",
      image: "/tournament-img/Basketball.png",
      rules: {
        title: "RULES FOR OFFENCE ",
        list: [
          "The basketball team on offense is the team with the basketball. When a player has basketball, there are specific rules they must follow",
          "The player must bounce or dribble the ball with one hand while moving both feet. If, at any time, both hands touch the ball or the player stops dribbling, the player must only move one foot.",
          "The basketball player can only take one turn at dribbling. In other words, once a player has stopped dribbling, they cannot start another dribble. A player who starts dribbling again is called for a double-dribbling violation and loses the basketball to the other team. A player can only begin to dribble after another player from either team touches or gains control of the basketball. This is usually after a shot or pass.",
          "The ball must stay in bounds. If the offensive team loses the ball out of bounds, the other team gets control of the basketball.",
          "The player's hand must be on top of the ball while dribbling. If they touch the bottom of the basketball while dribbling and continue to dribble this is called carrying the ball, and the player will lose the ball to the other team.",
          "Once the offensive team crosses half-court, they may not go back into the backcourt. This is called a backcourt violation. If the defensive team knocks the ball into the backcourt, the offensive team can legally recover the ball.",
          "We cannot carry the ball to ourselves for more than 24 seconds.",
        ],
      },
    },
    {
      name: "CHESS",
      image: "/tournament-img/Chess.png",
      rules: {
        title: "GENERAL RULES",
        list: [
          "Chess competition will be played per the “FIDE Laws of Chess”",
          "Tournament rules will be used with the Laws of Chess.",
          "It is a team event, and the team needs 5 players.",
          "A minimum of 4 players are a must for a team.",
          "A maximum of 5 players are allowed in a team, of which 1 player will be a substitute.",
          "In a particular round, 4 players of a team can play.",
          "There will be no separate tournament for girls; instead, only a single tournament open to all.",
          "All team players must belong to the same institute.",
          "The role of a team captain is basically an administrative one during play.",
          "Time Control: Each player will get 60 minutes plus 30 30-second increments for every move from move number one.",
          "IMPORTANT NOTE:Rules & schedules are subject to change in the spirit of the game & the festival. The final decision in all matters rests with the Vriddhi team.",
        ],
      },
    },
    {
      name: "TABLE TENNIS",
      image: "/tournament-img/table-tennis.png",
      rules: {
        title: "RULES FOR RACKET",
        list: [
          "The racket may be of any size, shape, or weight but the blade shall be flat and rigid.",
          "A side of the blade used for striking the ball shall be covered with either ordinary pimpled rubber, with pimples outwards having a total thickness including adhesive of not more than 2.0mm, or sandwich rubber, with pimples inwards or outwards, having a total thickness including adhesive of not more than 4.0mm.",
          "The covering material shall extend up to but not beyond the limits of the blade. The blade, any layer within the blade and any layer of covering material or adhesive on a side used for striking the ball shall be continuous and of even thickness.",
          "Before the start of a match and whenever he or she changes his or her racket during a match a player shall show his or her opponent and the umpire the racket he or she is about to use and shall allow them to examine it.",
        ],
      },
    },
    {
      name: "CRICKET",
      image: "/tournament-img/Cricket.png",
      rules: {
        title: "GENERAL RULES",
        list: [
          "Includes the new rule of a new batsman taking the strike after a batsman has been caught.",
          "Also includes the new rule for a free hit in any kind of no-ball.",
          "All matches will be played with a white leather ball.",
          "The umpire’s decision will be final.",
          "There will be no DRS.",
          "The league matches will be 15 overs in which there will be a 4-over powerplay (In the powerplay, a maximum of two players can be outside the 30-yard circle.), and one bowler can bowl a maximum of 3 overs.",
          "In the final match, 20 overs will be played in which there will be a 6- over powerplay (In the powerplay, a maximum of two players can be outside the 30 yards circle.), and one bowler will be allowed to bowl a maximum of 4 overs.",
          "A maximum of 5 players can stay outside the 30-yard circle during non-powerplay overs.",
          "Maximum of 5 players on the leg side of the batter.",
          "The time limit for each inning is 65 minutes for league matches and 85 minutes for the final game. (There are 10 minutes of drinks break in between the innings).",
        ],
      },
    },
    {
      name: "FOOTBALL",
      image: "/tournament-img/Football.png",
      rules: {
        title: "GENERAL RULES",
        list: [
          "Every football game begins with a toss. The two team captains meet in the middle of the pitch with the match referee.",
          "The captain of the winning team (toss winner chooses which goalpost to pursue in the first half).",
          "The venue will be DTS ground with standard dimensions.",
          "Each team consists of 11 players (1 goalkeeper and 10 outfield players), Squad strength- 15(11 playing and 4 substitute).",
          "Substitutions can be made at any time of the match with each team being able to make a maximum of 4 substitutions per side.",
          "In the event of all substitutes being made and a player having to leave the field for injury, the team will be forced to play without a replacement for that player.",
          "Duration of league match – 50 minutes, 2 halves each of 25 minutes.",
          "Duration of final match – 60 minutes, 2 halves each of 30 minutes.",
          "Duration of break after 1st half- 5 minutes.",
          "If the game needs to head to extra time as a result of both teams being level in a match, then 20 minutes will be added in the form of two 10-minute halves after the allotted 50 minutes.",
          "OFFSIDE RULE- Offside can be called when an attacking player is in front of the last defender when the pass is played through to them.",
          "Coach cum player rule is applicable in the whole tournament.",
        ],
      },
    },
    {
      name: "YOGA",
      image: "/tournament-img/Yoga.png",
      rules: {
        title: "GENERAL RULES",
        list: [
          "Chess competition will be played per the “FIDE Laws of Chess”",
          "Tournament rules will be used with the Laws of Chess.",
          "It is a team event, and the team needs 5 players.",
          "A minimum of 4 players are a must for a team.",
          "A maximum of 5 players are allowed in a team, of which 1 player will be a substitute.",
          "In a particular round, 4 players of a team can play.",
          "There will be no separate tournament for girls; instead, only a single tournament open to all.",
          "All team players must belong to the same institute.",
          "The role of a team captain is basically an administrative one during play.",
          "Time Control: Each player will get 60 minutes plus 30 30-second increments for every move from move number one.",
          "IMPORTANT NOTE:Rules & schedules are subject to change in the spirit of the game & the festival. The final decision in all matters rests with the Vriddhi team.",
        ],
      },
    },
    {
      name: "BADMINTON",
      image: "/tournament-img/Badminton.png",
      rules: {
        title: "GENERAL RULES",
        list: [
          "Each team should have 6 (5+1S) members.",
          "Each player can play a maximum of one single and one double.",
          "A match consists of the best of 3 rounds, each consisting of 15 points.",
          "The side winning a round will serve first in the next round.",
          "A player should never touch the net with his racquet or body while playing.",
          "A badminton serve must be hit underarm and below the server's waist height with the racquet shaft pointing downwards.",
          "If the server wins a rally, the server scores a point and then serves again from the alternate service court.",
        ],
      },
    },
    {
      name: "KHO KHO",
      image: "/tournament-img/Kho-Kho.png",
      rules: {
        title: "GENERAL RULES",
        list: [
          "A team consists of 12 players, and 9 players will take the field.",
          "Each game consists of 2 innings, and each inning consists of 2 turns (chasing and defending turns) of 9 minutes duration for both men and women.",
          "There will be a 3-minute break between each turn and a 6-minute break after each inning.",
          "Referee will call both captains for the spin of the coin. The winner chooses running or defending for both innings.",
          "The chasing team scores one point for each runner who is out.",
          "No Chaser shall leave the Chaser Block or change face after the commencement of a turn, or it will be a foul.",
          "At the start of a turn, the first 3 Defenders enter the Field. Next 3 Runners shall enter the Court through their Entry Zone.",
          "A KHO is given from behind a Chaser by touching the Chaser’s body and saying 'KHO' loudly. Chaser cannot get up without receiving a KHO.",
        ],
      },
    },
    {
      name: "VOLLEYBALL",
      image: "/tournament-img/Volleyball.png",
      rules: {
        title: "GENERAL RULES",
        list: [
          "League matches will be evaluated based on the best of 3 sets of 25 points each.",
          "Semi-finals and finals will be evaluated based on the best of 5 sets of 25 points each.",
          "Matches must be played within a one-hour time limit. If the third match doesn't start by 50 minutes past game time, it will be played to 15 points.",
          "The match will conclude 60 minutes after the scheduled start time, regardless of the score.",
          "The interval between sets should not exceed 2 minutes, during which teams should switch sides.",
          "Each team is allowed 2 timeouts per set, each lasting 30 seconds.",
          "Teams must bring their own volleyballs for practice, as no balls will be provided by the institute.",
          "No extra warm-up time will be provided.",
        ],
      },
    },
    
    {
      name: "KABADDI",
      image: "/tournament-img/Kabaddi.png",
      rules: {
        title: "GENERAL RULES",
        list: [
          "The match starts with a coin toss between the two teams and the winner can decide whether to raid or defend first.",
          "Each team is allowed two time-outs in a half.",
          "Each team in a kabaddi match has 7 players. The teams can also have 5 substitute players on the bench.",
          "The Weight Limit is 85 kg (mandatory) for boys, i.e., any boy recorded as weighing more than 85 kg shall not be allowed to participate in this event.",
          "Each team shall consist of a minimum of 12 players and 7 players shall take to the mat at a time, with the remaining players being substitutes.",
          "The duration of the match shall be two halves of 20 minutes.",
          "Each team shall score one point for every opponent out or put out. The side, which scores a LONA, shall score two extra points.",
          "The out and revival rule will be applicable.",
        ],
      },
    },
  ];

  return (
    <div className="w-full bg-black flex flex-col items-center px-6 md:px-16 mb-6 relative">
      {/* Header */}
      <h1 className="font-bunken text-3xl md:text-5xl text-white pb-4 border-b border-white w-full text-center mt-4 font-semibold">
        TOURNAMENT
      </h1>

      {/* PUBG */}
      <div
        className="md:my-16 my-8 md:w-[19rem] md:h-[19rem] h-[14rem] w-[14rem] flex items-center justify-center rounded-3xl cursor-pointer transform hover:scale-105 duration-300 "
        onClick={() => {
          setSelectedSport(data[0]);
          const modal = document.getElementById(
            "my_modal_4"
          ) as HTMLDialogElement;
          modal?.showModal();
        }}
      >
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
          
            index === 0 ? ('') :(
              <div
              key={index}
              className={`relative  mb-8 md:mb-0  md:w-[14rem] md:h-[14rem] flex items-center justify-center rounded-3xl ${
                index === data.length-1 ? "col-span-1 col-start-2" : ""
              }`}
            >
              <div
                onClick={() => {
                  setSelectedSport(item);
                  const modal = document.getElementById(
                    "my_modal_4"
                  ) as HTMLDialogElement;
                  modal?.showModal();
                }}
              >
                {/* Image */}
                <Image
                  src={item.image}
                  alt={item.name}
                  width={300}
                  height={300}
                  className={`cursor-pointer transform hover:scale-105 duration-300 w-[14rem] h-[14rem] `}
                />
              </div>
            </div>
            )
         
        
        ))}
      </div>

      <dialog id="my_modal_4" className="modal font-bunken ">
        <div className="modal-box w-11/12 max-w-5xl ">
          <form method="dialog px-4 ">
            {/* if there is a button in form, it will close the modal */}
            <span className="font-bold text-3xl self-center ">
              RULE AND REGULATIONS
            </span>
            <button
              className="btn btn-sm btn-circle border-none outline-none btn-ghost absolute right-2 top-2"
              onClick={() => {
                event?.preventDefault();
                const modal = document.getElementById(
                  "my_modal_4"
                ) as HTMLDialogElement;
                modal?.close();
              }}
            >
              ✕
            </button>
          </form>
          {selectedSport && (
            <>
              <h3 className="font-bold text-xl my-6 ">
                {selectedSport.rules.title}!
              </h3>
              <ul className="list-disc px-4 ">
                {selectedSport.rules.list.map((rule, index) => (
                  <li className="my-6 text-sm " key={index}>
                    {rule}
                  </li>
                ))}
              </ul>
              <div className="flex justify-end mt-4 text-center">
                <a
                  href={`/files/${selectedSport.name.toLowerCase()}-rules.pdf`}
                  download={`${selectedSport.name}-Rules.pdf`}
                  className="btn btn-primary"
                >
                  Read More
                </a>
              </div>
            </>
          )}
        </div>
      </dialog>
    </div>
  );
};

export default Tournament;
