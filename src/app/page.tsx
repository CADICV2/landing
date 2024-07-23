import { AcademicCapIcon, Bars3Icon, UserIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Navbar from "./componets/Navbar";
import Theme from "./componets/theme";
import Gridbox from "./componets/Gridbox";
import Page_2 from "./componets/page_2"
import Page_3 from "./componets/page_3"



export default function Home() {
  return (
    <>

      <Theme color="bg-gradient-to-r from-[#171922] from-[-30%] via-black via-[46%] to-[#fd4b05] to-[135%] " main={
        <>

          <Navbar />
          <Gridbox />

        </>


      } />

      <Theme color="bg-gradient-to-r from-[#fd4b05] from-[-30%] via-black via-[46%] to-[#171A21] to-[135%] " main={

        <Page_2 />
      } />

      <Theme color="bg-gradient-to-r from-[#171922] from-[-30%] via-black via-[46%] to-[#fd4b05] to-[135%] " main={

        < Page_3  />
      } />
    </>
  );
} 