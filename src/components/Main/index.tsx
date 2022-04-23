import asideImg from "../../assets/images/image-hero-desktop.png";

import audioPhile from "../../assets/images/client-audiophile.svg";
import dataBiz from "../../assets/images/client-databiz.svg";
import meet from "../../assets/images/client-meet.svg";
import maker from "../../assets/images/client-maker.svg";

import Image from "next/image";

export const Main = () => {
  return (
    <section className="flex overflow-hidden justify-between max-w-6xl m-auto items-center w-11/12 flex-wrap">
      <main className="main p-28">
        <h1 className="">Make remote work</h1>
        <p className="mt-10 w-2/3 font-medium">
          Get you team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>

        <button className="bg-black text-xl text-white pr-6 pl-6 pt-2 pb-2 rounded-lg mt-10">
          Learn more
        </button>

        <div className="flex justify-between mt-24 flex-wrap">
          <Image src={dataBiz} height={32} />
          <Image src={audioPhile} />
          <Image src={meet} />
          <Image src={maker} />
        </div>
      </main>
      <aside className="aside">
        <Image src={asideImg} layout="responsive" alt="" />
      </aside>
    </section>
  );
};
