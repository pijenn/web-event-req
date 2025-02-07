import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router";
import { CheckUser, getUserData } from "../components/helpers/SessionHelper";
import { getPathName, getDataOprec } from "../components/helpers/DataHelper";

const After = () => {
  const { year, oprec } = useParams();
  const pathname = getPathName(useLocation().pathname);
  const dataOprec = getDataOprec(`${year}-${oprec}`);
  const [announcement, setAnnouncement] = useState([
    "Harap tunggu",
    "Lagi loading nih...",
    "Kami sedang menyiapkan yang kamu tunggu-tunggu... ⏳",
  ]);

  useEffect(() => {
    document.title = dataOprec
      ? `${dataOprec.title[0]} ${dataOprec.title[1]}`
      : "Web Event Request SGE FILKOM 2025";
  }, [year, oprec]);

  useEffect(() => {
    if (Object.keys(getUserData) < 1) return;

    const announceNim = async () =>
      await fetch(`${dataOprec.api.announce}/${getUserData.nim}`, {
        method: "GET",
      })
        .then((reply) => {
          if (reply.status !== 200) throw Error;
          return reply.json();
        })
        .then((reply) => {
          if (dataOprec.id === "2024-OprecStafmuda2024") {
            fetch(
              `https://oprec-stafmud-be.vercel.app/transparansi/${getUserData.nim}`,
              {
                method: "GET",
              }
            )
              .then((reply) => {
                if (reply.status !== 200) throw Error;
                return reply.json();
              })
              .then((res) => {
                if (reply.success === true) {
                  setAnnouncement(
                    dataOprec.acceptMessage.concat(
                      `
SELAMAT!! Kamu telah terpilih menjadi salah satu Staf Muda BEM FILKOM UB 2024!\n
Selamat telah menjadi bagian dari Keluarga Arthakara. Nantikan informasi First Gathering Staf Muda BEM FILKOM UB 2024 yaa!\n
<a target='_blank' href='${res.data.link_transparansi}' class='font-bold underline text-blue-900'>Klik di sini</a> untuk melihat transparansi nilai kamu!`
                    )
                  );
                } else {
                  setAnnouncement(
                    dataOprec.rejectMessage.concat(
                      `<a target='_blank' href='${res.data.link_transparansi}' class='font-bold underline text-blue-900'>Klik di sini</a> untuk melihat transparansi nilai kamu!`
                    )
                  );
                }
              })
              .catch((err) => {
                setAnnouncement([
                  "Waduh",
                  "Kamu kan gak daftar...",
                  "Kok ngecek pengumuman :(",
                ]);
              });
          } else {
            if (reply.success === true) {
              setAnnouncement(dataOprec.acceptMessage);
            } else {
              setAnnouncement(dataOprec.rejectMessage);
            }
          }
        })
        .catch((err) => {
          setAnnouncement([
            "Waduh",
            "Kamu kan gak daftar...",
            "Kok ngecek pengumuman :(",
          ]);
        });

    if (Date.now() <= dataOprec.closeDate) {
      setAnnouncement(dataOprec.afterMessage);
    } else if (
      Date.now() > dataOprec.closeDate &&
      Date.now() <= dataOprec.announceDate
    ) {
      setAnnouncement(dataOprec.closedMessage);
    } else if (Date.now() > dataOprec.announceDate) {
      announceNim();
    }
  }, [getUserData]);

  return (
    <>
      {dataOprec ? (
        <>
          <CheckUser redirect pathname={pathname} />

          <section className="relative flex flex-col content-center h-full min-h-screen py-24 px-16 justify-center flex-grow overflow-y-hidden bg-cover"
           style={{
            backgroundImage: `url('https://res.cloudinary.com/ddlo3v9hx/image/upload/v1727535456/bg-cover-main_lhun5z.png')`,
          }}
          >
            <header className="relative z-10 flex flex-col content-center justify-center flex-grow space-x-0 md:space-x-6 md:flex-row md:justify-center">
              <div className="self-center text-center md:text-left">
                <h1 className="text-3xl uppercase font-extrabold mt-4 text-center md:mb-0 md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-newOrange to-newPurple">
                  {announcement[0]}
                </h1>
                <div className="max-w-xl text-center">
                  <div className="flex flex-col justify-center md:justify-start text-md leading-snug tracking-tighter text-gray-900 mt-5 ml-1">
                    {announcement[0] === "Selamat!!!" ? (
                      <div className="flex flex-col space-y-3 p-4 bg-green text-white rounded-lg shadow-md transition ease-linear">
                        <span className="font-bold">{announcement[1]}</span>
                        <p
                          className="whitespace-pre-wrap leading-normal"
                          dangerouslySetInnerHTML={{ __html: announcement[2] }}
                        />
                      </div>
                    ) : announcement[0] === "Mohon maaf.." ? (
                      <div className="flex flex-col space-y-3 p-4 bg-red text-white rounded-lg shadow-md transition ease-linear">
                        <span className="font-bold">{announcement[1]}</span>
                        <p
                          className="whitespace-pre-wrap leading-normal"
                          dangerouslySetInnerHTML={{ __html: announcement[2] }}
                        />
                      </div>
                    ) : (
                      <div className="flex flex-col space-y-3 p-4 bg-newBlue text-white rounded-lg shadow-md transition ease-linear">
                        <span className="font-bold">{announcement[1]}</span>
                        <p
                          className="whitespace-pre-wrap leading-normal"
                          dangerouslySetInnerHTML={{ __html: announcement[2] }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </header>
          </section>
        </>
      ) : (
        <>
          <section className="relative flex flex-col content-center justify-center flex-grow h-screen overflow-hidden bg-cover"
           style={{
            backgroundImage: `url('https://res.cloudinary.com/ddlo3v9hx/image/upload/v1727535456/bg-cover-main_lhun5z.png')`,
          }}>
            <div className="self-center max-w-5xl text-4xl text-center text-newPurple font-bold">
              Halaman Tidak Ditemukan
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default After;
