import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getCurrentOprec } from "../components/helpers/DataHelper";
import background from "../assets/images/dust.svg";

const Card = ({
  id,
  image,
  name,
  description,
  closeDate,
  announceDate,
  isExtend = false,
}) => {
  const maxLength = 150;
  const desc =
    description.length > maxLength
      ? description.slice(0, maxLength) + "..."
      : description;
  const isOpen = Date.now() < new Date(closeDate).getTime();
  const isAnnounced = Date.now() > new Date(announceDate).getTime();
  const to = isAnnounced ? `/${id[0]}/${id[1]}/after` : `/${id[0]}/${id[1]}`;
  return (
    <>
      <div className="bg-white rounded-lg w-72 pb-4 shadow-lg">
        <div
          className="w-full h-40 rounded-t-lg bg-center bg-no-repeat bg-cover bg-white"
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          <div className="relative w-full h-full bg-black bg-opacity-50 group hover:bg-opacity-80 rounded-t-lg transition duration-75 ease-in">
            <Link
              className="absolute border border-white px-3 py-1 rounded-lg top-1/2 left-1/2 text-white inline-flex items-center opacity-0 group-hover:opacity-100 transition duration-75 ease-in hover:bg-white hover:text-black"
              style={{ transform: "translate(-50%, -50%)" }}
              to={`${id[0]}/${id[1]}`}
            >
              <i className="fas fa-link mr-2"></i>
              Selengkapnya
            </Link>
          </div>
        </div>
        <div className="p-4">
          <div className="flex flex-col justify-between items-center text-center">
            <h3 className="font-bold text-xl">{name}</h3>
            {isOpen ? (
              isExtend && (
                <p className="border-newOrange px-3 font-semibold text-sm text-newOrange border rounded-xl ml-2 mt-2">
                  Extend
                </p>
              )
            ) : Date.now() < announceDate ? (
              <p className="border-red-600 px-3 font-semibold text-sm text-red-600 border rounded-xl ml-2 mt-2">
                Tutup
              </p>
            ) : (
              <p className="border-green-600 px-3 font-semibold text-sm text-green border rounded-xl ml-2 mt-2">
                Pengumuman
              </p>
            )}
          </div>
          {isOpen ? (
            <p className="font-semibold text-newOrange text-center my-4">
              {"Tutup: " +
                new Date(closeDate).toLocaleString("id-ID", {
                  timeZone: "Asia/Jakarta",
                })}
            </p>
          ) : (
            !isAnnounced && (
              <p className="font-semibold text-green text-center mt-2 text-md">
                {"Pengumuman: " +
                  new Date(announceDate).toLocaleString("id-ID", {
                    timeZone: "Asia/Jakarta",
                  })}
              </p>
            )
          )}

          <p className="text-sm font-light mb-4 mt-2 text-center my-2">{desc}</p>
          <Link
          className="border-2 border-newOrange py-1 px-8 bg-white text-newOrange rounded-full hover:text-white hover:bg-newOrange hover:border-newOrange transition duration-75 ease-in mx-auto block text-center"
          to={to}
            >
           {isAnnounced ? "Cek Pengumuman" : "Selengkapnya"}
          </Link>
        </div>
      </div>
    </>
  );
};

const Main = () => {
  const currentOprec = getCurrentOprec();
  useEffect(() => {
    document.title = `Web Event Request SGE FILKOM 2025`;
  }, []);

  const filteredOprec = currentOprec.filter(oprec => {
    const announceDate = new Date(oprec.announceDate);
    const fiveDaysAfterAnnounce = new Date(announceDate);
    fiveDaysAfterAnnounce.setDate(announceDate.getDate() + 5);
    return Date.now() <= fiveDaysAfterAnnounce.getTime();
  });

  return (
    <>
      <nav
      className=" fixed top-0 w-full h-auto z-50 flex flex-col content-center justify-center px-12 py-4"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/ddlo3v9hx/image/upload/v1727535681/navbar_uecvvg.png')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
        <div className="flex">
          <img
            src="https://res.cloudinary.com/ddlo3v9hx/image/upload/v1738910400/Logo_SGE_for_Web_yieqge.svg"
            className="w-11 h-11 pointer-events-none mr-2 ml-8"
          />
          <Link
            to={"/"}
            className="sm:text-xl px-2 py-2 text-lg font-semibold leading-relaxed text-shadow-md text-white text-left"
          >
            SGE FILKOM
          </Link>
        </div>
      </nav>
      <section
        className="min-h-screen overflow-hidden bg-cover"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/ddlo3v9hx/image/upload/v1727535456/bg-cover-main_lhun5z.png')`,
        }}
      >
        <div className="py-5 px-8 mt-3 mx-0 ">
          {filteredOprec.length > 0 ? (
            <>
                <div className="flex mt-20 justify-center mb-14">
                <img
                src='https://res.cloudinary.com/ddlo3v9hx/image/upload/v1727535685/tulisan-daftar_udcvfz.png'
                className="lg:w-1/3 md:w-1/3 sm:w-full"
                />
                </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center mb-8">
                {filteredOprec.map((oprec, idx) => (
                  <Card
                    key={idx}
                    id={oprec.id.split("-")}
                    image={oprec.landingImage}
                    name={oprec.name}
                    description={oprec.description.concat().join(" ")}
                    closeDate={oprec.closeDate}
                    isExtend={oprec.extends}
                    announceDate={oprec.announceDate}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-screen bg-cover"
            >
              <h1 className="text-center font-bold text-black text-4xl mb-5 ">
                Maaf, belum ada event yang buka 🙏
              </h1>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
export default Main;
