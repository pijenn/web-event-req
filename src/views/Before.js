import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { getPathName, getDataOprec } from "../components/helpers/DataHelper";

const Before = () => {
  const { year, oprec } = useParams();
  const pathname = getPathName(useLocation().pathname);
  const dataOprec = getDataOprec(`${year}-${oprec}`);
  const [isHovered, setIsHovered] = useState(false); // Pindahkan state ke komponen utama

  useEffect(() => {
    document.title = dataOprec
      ? `${dataOprec.title[0]} ${dataOprec.title[1]}`
      : "Web Event Request SGE FILKOM 2025";
  }, [dataOprec]);

  return (
    <>
      {dataOprec ? (
        <>
          <section
            className="relative flex flex-col content-center h-full min-h-screen py-24 px-16 justify-center flex-grow overflow-y-hidden bg-cover bg-cream"
          >
            <header className="relative z-10 flex flex-col content-center justify-center flex-grow space-x-0 md:space-x-6 md:flex-row md:justify-center">
              <div className="self-center text-center md:text-left">
                <div className="flex space-x-5 justify-center mb-10"> 
                  <img src="/yellow-event.svg"/>
                  <h1 className="text-3xl font-semibold text-greenLight">Procedure for Registration</h1>
                  <img src="/yellow-event.svg"/>
                </div>
                <div className="max-w-xl">
                  <div className="flex flex-col justify-center text-center md:justify-start text-md  tracking-tighter text-gray-900 mt-5 ml-1 space-y-6">
                    {dataOprec.alur.map((item, index) => (
                      <div
                      key={index}
                      className="flex flex-col p-4 text-white rounded-lg bg-orange shadow-md transition ease-linear"
                    >
                      {item.description && (
                        <span className="font-medium">
                          {item.description}
                        </span>
                      )}
                      {item.note && <p>{item.note}</p>}
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mx-auto px-6 text-center font-semibold tracking-wide py-2 bg-brightYellow text-orange rounded-full border-white border shadow-md hover:bg-gray-200 hover:text-orange transition ease-linear focus:outline-none mt-2"
                          tabIndex="-1"
                        >
                          {item.titleLink}
                        </a>
                        )}
                      </div>
                    ))}
                    <div className="flex flex-col content-center justify-center items-center mt-8">
                      <Link
                        to={pathname + "/login"}
                        className="text-center"
                        tabIndex="-1"
                      >
                        <div className="flex items-center relative mt-4">
                          <div className="py-3 px-20 rounded-full text-white bg-greenLight hover:bg-white hover:text-greenLight border-greenLight border-2 font-bold text-2xl">
                            <h1>
                              Register
                            </h1>
                          </div>
                          <img src="/maskot.png" alt="register maskot" className="absolute right-0 transform translate-x-6 bottom-0 w-20" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </header>
          </section>
        </>
      ) : (
        <>
          <section className="relative flex flex-col content-center justify-center flex-grow h-screen overflow-hidden bg-coffeetint">
            <div className="self-center max-w-5xl text-4xl text-center text-newPurple font-bold">
              Page Not Found
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Before;
