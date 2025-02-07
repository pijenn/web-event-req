import React, { useRef, useEffect, useState } from "react";
import { Redirect, useLocation, useParams } from "react-router";
import { ConversationalForm } from "conversational-form/dist/conversational-form.min";
import {
  CheckUser,
  getToken,
  getUserData,
} from "../components/helpers/SessionHelper";
import {
  getPathName,
  getDataOprec,
  getFormFields,
} from "../components/helpers/DataHelper";
import {
  getRandomColor,
  createImageFromInitials,
} from "../components/helpers/DataHelper";

const Form = () => {
  const { year, oprec } = useParams();
  const pathname = getPathName(useLocation().pathname);
  const dataOprec = getDataOprec(`${year}-${oprec}`);
  const form = dataOprec ? getFormFields(dataOprec) : [];

  const chatRef = useRef(null);
  const [finished, setFinished] = useState(false);

  const options1 = dataOprec.options;

  const options2 = ["--- TIDAK MEMILIH ---", ...dataOprec.options];

  useEffect(() => {
    document.title = dataOprec
      ? `${dataOprec.title[0]} ${dataOprec.title[1]}`
      : "Web Event Request SGE FILKOM 2025";
  }, [year, oprec]);

  useEffect(() => {
    if (Date.now() >= dataOprec.closeDate) {
      setFinished(true);
      return;
    }
    // Check when all is finished/submitted
    const submitCallback = () => {
      let { setuju1, setuju2, ...payload } =
        conversationalForm.getFormData(true);
      payload = {
        nim: getUserData.nim,
        nama: getUserData.nama,
        prodi: getUserData.prodi,
        ...payload,
      };

      conversationalForm.addRobotChatResponse(
        "Tunggu sebentar, kami sedang memproses pendaftaranmu..."
      );

      const register = async () =>
        await fetch(dataOprec.api.register, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken}`,
          },
          body: JSON.stringify(payload),
        })
          .then((reply) => {
            return reply.json();
          })
          .then((reply) => {
            console.log(reply);
            if (reply.success) {
              conversationalForm.addRobotChatResponse(
                "Pendaftaran kamu berhasil! Sesaat lagi kamu akan dialihkan ke halaman berikutnya..."
              );
              setTimeout(() => setFinished(true), 3000);
            } else {
              conversationalForm.addRobotChatResponse(
                "Pendaftaran kamu gagal. Silahkan refresh dan coba lagi, atau hubungi narahubung BEM."
              );
            }
          })
          .catch((err) => {
            conversationalForm.addRobotChatResponse(
              "Pendaftaran kamu gagal. Silahkan refresh dan coba lagi, atau hubungi narahubung BEM."
            );
          });

      register();
    };

    const checkNim = async () =>
      fetch(`${dataOprec.api.check}/${getUserData.nim}`, {
        method: "GET",
      })
        .then((reply) => {
          return reply.json();
        })
        .then((reply) => {
          if (reply.success === false) {
            // User already registered
            setFinished(true);
          } else {
            conversationalForm.start();
          }
        })
        .catch((err) => {
          console.log("Error:", err);
        });
    checkNim();

    const conversationalForm = ConversationalForm.startTheConversation({
      options: {
        submitCallback,
        showProgressBar: true,
        hideUserInputOnNoneTextInput: true,
        preventAutoStart: true,
        preventAutoAppend: true,
        robotImage: dataOprec.logo,
        userImage: createImageFromInitials(
          500,
          getUserData.nama,
          getRandomColor()
        ),
      },
      tags: form,
    });

    chatRef.current.appendChild(conversationalForm.el);
  }, []);

  return (
    <>
      {dataOprec ? (
        <>
          {finished && <Redirect to={pathname + "/after"} />}

          <CheckUser redirect pathname={pathname} />
          <datalist id="options1">
            {options1.map((item, index) => (
              <option key={index} value={item} />
            ))}
          </datalist>
          <datalist id="options2">
            {options2.map((item, index) => (
              <option key={index} value={item} />
            ))}
          </datalist>
          <div className="z-10">
            <div ref={chatRef} />
          </div>

          <section
            id="register"
            className="fixed w-full h-full z-10 flex flex-col content-center justify-center flex-grow bg-white"
          >
            <div className="self-center flex flex-col gap-8 md:gap-0 md:flex-row content-center justify-center flex-grow w-full max-w-6xl md:text-left">
              <div className="self-center animate-pulse text-4xl md:text-4xl font-extrabold leading-relaxed tracking-tighter text-gray-800 text-center md:text-left">
                Tunggu Sebentar ya...
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          <section className="relative flex flex-col content-center justify-center flex-grow h-screen overflow-hidden bg-cover"
           style={{
            backgroundImage: `url('https://res.cloudinary.com/ddlo3v9hx/image/upload/v1727535456/bg-cover-main_lhun5z.png')`,
          }}
          >
            <div className="self-center max-w-6xl text-4xl text-center text-newOrange font-bold">
              Halaman Tidak Ditemukan
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Form;
