import { HashLink as Link } from "react-router-hash-link";
import { useEffect } from "react";
import { useParams, useLocation } from "react-router";
import { getDataOprec, getPathName } from "../components/helpers/DataHelper";

const Home = () => {
  const { year, oprec } = useParams();
  const pathname = getPathName(useLocation().pathname);
  const dataOprec = getDataOprec(`${year}-${oprec}`);

  useEffect(() => {
    document.title = dataOprec
      ? `${dataOprec.title[0]} ${dataOprec.title[1]}`
      : "Web Event Request SGE FILKOM 2025";
  }, [year, oprec]);

  return (
    <>
      {dataOprec ? (
        <>
          <section
            id="beranda"
            className="relative flex flex-col content-center justify-center flex-grow h-screen min-h-full overflow-hidden bg-fixed bg-coffeetint"
            style={{
              backgroundImage: `url(${dataOprec.landingImage})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              backgroundSize: "cover",
            }}
          >
            <div className="relative flex flex-col content-center justify-center flex-grow bg-white bg-opacity-60">
              <header className="relative z-10 flex flex-col content-center justify-center flex-grow h-full min-h-screen p-16 space-x-0 md:space-x-6 md:flex-row md:justify-center">
                <img
                  className="self-center pt-4 h-60 md:p-0 md:h-64 md:ml-6"
                  src={dataOprec.logo}
                  alt="Logo"
                />
                <div className="self-center text-center md:text-left text-shadow-md">
                  <h1 className="text-5xl font-extrabold leading-tight tracking-tight  md:mb-0 md:text-7xl text-center lg:text-left md:animate-bounce">
                    <span className="text-transparent bg-clip-text bg-green">
                      {dataOprec.title[0]}
                    </span>
                  </h1>
                  <h1 className="text-3xl uppercase font-extrabold leading-tight tracking-tight mt-4 md:mb-0 md:text-5xl text-center lg:text-left">
                    <span className="text-transparent bg-clip-text bg-green">
                      {dataOprec.title[1]}
                    </span>
                  </h1>
                </div>
              </header>
            </div>
          </section>
          <section
            id="tentang"
            className="relative flex flex-col content-center justify-center flex-grow w-full px-12 py-20 overflow-y-hidden bg-cover"
            style={{
              backgroundImage: `url('https://res.cloudinary.com/ddlo3v9hx/image/upload/v1727535681/navbar_uecvvg.png')`,
            }}
          >
            <div className="self-center max-w-5xl text-center">
              <h1 className="text-4xl mb-10 font-extrabold tracking-tight md:text-4xl text-white uppercase">
                About {dataOprec.name}
                <div className="w-12 h-1 mt-3 bg-newOrange mx-auto"></div>
              </h1>
              <div className="flex flex-col text-lg tracking-tight leading-relaxed text-justify text-white">
                {dataOprec.description.map((item, index) => (
                  <div key={index}>
                    <p>{item}</p>
                    {index !== dataOprec.description.length - 1 && <br />}
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section
            id="linimasa"
            className="relative flex space-y-8 md:space-y-0 flex-col content-center justify-center flex-grow px-12 py-20 overflow-y-hidden bg-cover text-green"
            style={{
              backgroundImage: `url('https://res.cloudinary.com/ddlo3v9hx/image/upload/v1727535456/bg-cover-main_lhun5z.png')`,
            }}
          >
            {/*Title*/}
            <div className="text-4xl mb-10 self-center max-w-5xl text-center">
              <div className="font-extrabold tracking-tight uppercase">
                Timeline {dataOprec.name}
                {dataOprec.extends ? (
                  <div className="text-lg italic mt-4 font-normal tracking-tighter">
                    UPDATE TERBARU EXTEND
                  </div>
                ) : (
                  <></>
                )}
                <div className="w-12 h-1 mt-3 bg-newOrange mx-auto"></div>
              </div>
            </div>
            {/*Timelines*/}
            <div className="container mx-auto self-center content-center max-w-xl">
              <div className="grid grid-cols-1 gap-4 px-8 py-5">
                {dataOprec.timeline.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col text-xl md:text-2xl flex-grow w-full text-center bg-green to-putih rounded-lg shadow-lg px-6 py-6 hover:transition-all transition transform hover:-translate-y-3"
                  >
                    <div className="font-extrabold tracking-tighter text-white">
                      {item.date}
                    </div>
                    <div className="font-extrabold tracking-tighter text-newBlue opacity-90">
                      {item.description}
                    </div>
                    
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col md:space-y-0 md:flex-row content-center justify-between flex-grow w-full lg:text-left text-center lg:pl-8 lg:pr-20 lg:pt-12">
            <div>
            <div className="lg:mt-12 text-4xl md:text-6xl text-shadow-lg font-extrabold leading-relaxed tracking-tighter text-newOrange text-center lg:text-left">
             Ready to sign up?
             </div>
            <div className="text-1xl md:text-1xl mt-4 text-shadow-lg leading-relaxed tracking-tighter text-newOrange text-center lg:text-left">
            {dataOprec.quotes}
           </div>
           </div>
           <div className="flex flex-col content-center justify-center text-lg tracking-tight leading-relaxed text-justify text-white md:ml-auto">
           <Link
           to={pathname + "/notice"}
           className="text-center py-4 px-12 text-3xl font-bold bg-gradient-to-r bg-newOrange text-white rounded-full shadow-md hover:bg-white hover:border-newOrange hover:border-2 hover:text-green transition ease-linear focus:outline-noned"
            tabIndex="-1"
             >
            Register
           </Link>
            </div>
          </div>
          </section>
        </>
      ) : (
        <>
         <section className="relative flex flex-col content-center justify-center flex-grow h-screen overflow-hidden bg-cover"
           style={{
            backgroundImage: `url('https://res.cloudinary.com/dkncrhkfo/image/upload/v1718874735/bg-cover-main_u6mtcj.png')`,
          }}>
            <div className="self-center max-w-5xl text-4xl text-center text-newOrange font-bold">
              Halaman Tidak Ditemukan
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Home;
