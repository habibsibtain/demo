import Tournament from "@/components/Tournament/Tournament";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="flex flex-col items-center justify-center ">
      <h1 className="text-4xl font-bold">Vriddhi By TeamWB</h1>
      <Tournament />
    </div>
    </>
  );
}
