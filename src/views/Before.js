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
      : "Web Event Request BEM FILKOM 2025";
  }, [dataOprec]);

  return (
    <>
      {dataOprec ? (
        <>
          <section
            className="relative flex flex-col content-center h-full min-h-screen py-24 px-16 justify-center flex-grow overflow-y-hidden bg-cover"
            style={{
              backgroundImage: `url('https://res.cloudinary.com/ddlo3v9hx/image/upload/v1727535456/bg-cover-main_lhun5z.png')`,
            }}
          >
            <header className="relative z-10 flex flex-col content-center justify-center flex-grow space-x-0 md:space-x-6 md:flex-row md:justify-center">
              <div className="self-center text-center md:text-left">
                <img
                  className="self-center -mt-6 h-40 md:h-56 md:ml-6 lg:h-56 pb-4"
                  src="https://res.cloudinary.com/dnnznx7sj/image/upload/v1738913486/judul-regis.png"
                  alt="Logo"
                />
                <div className="max-w-xl">
                  <div className="flex flex-col justify-center text-center md:justify-start text-md  tracking-tighter text-gray-900 mt-5 ml-1 space-y-6">
                    {dataOprec.alur.map((item, index) => (
                      <div
                      key={index}
                      className="flex flex-col p-4 text-white rounded-lg bg-newOrange shadow-md transition ease-linear"
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
                          className="mx-auto px-6 text-center font-medium py-2 bg-green text-putih rounded-full border-white border-2 shadow-md hover:bg-gray-200 hover:text-newOrange transition ease-linear focus:outline-none mt-2"
                          tabIndex="-1"
                        >
                          {item.titleLink}
                        </a>
                        )}
                      </div>
                    ))}
                    <div className="flex flex-col content-center justify-center mt-8">
                      <Link
                        to={pathname + "/login"}
                        className="text-center"
                        tabIndex="-1"
                      >
                        <img
                          className="pt-4"
                          src={
                            isHovered
                              ? "https://res.cloudinary.com/dnnznx7sj/image/upload/v1738913487/tombol-daftar-hover.png"
                              : "https://res.cloudinary.com/dnnznx7sj/image/upload/v1738913488/tombol-daftar.png"
                          }
                          alt="Daftar"
                          onMouseEnter={() => setIsHovered(true)}
                          onMouseLeave={() => setIsHovered(false)}
                        />
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
