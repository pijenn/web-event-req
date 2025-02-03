import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { CheckUser, setUserData } from "../components/helpers/SessionHelper";
import { getPathName, getDataOprec } from "../components/helpers/DataHelper";

const Login = () => {
  const { year, oprec } = useParams();
  const pathname = getPathName(useLocation().pathname);
  const dataOprec = getDataOprec(`${year}-${oprec}`);

  const [nim, setNim] = useState("");
  const [password, setPassword] = useState("");
  const [onProgress, setProgress] = useState(false);
  const [message, setMessage] = useState("🔐 Pakai Akun SIAM Ya!");

  useEffect(() => {
    document.title = dataOprec
      ? `${dataOprec.title[0]} ${dataOprec.title[1]}`
      : "Web Event Request BEM FILKOM 2025";
  }, [year, oprec]);

  useEffect(() => {
    if (!onProgress) return;

    // Check nim & pass
    if (nim.length !== 15 || password.length < 6) {
      setMessage("❌  Format Inputan Salah");
      setProgress(false);
      return;
    }

    // Check filkom
    if (nim.substring(2, 6) !== "5150") {
      setMessage(`🙏  Khusus Mahasiswa FILKOM ya`);
      setProgress(false);
      return;
    }

    // Check angkatan
    if (dataOprec.onlyFor.every((x) => x !== parseInt(nim.substring(0, 2)))) {
      setMessage(`🙏  Mahasiswa 20${nim.substring(0, 2)} Gaboleh Daftar`);
      setProgress(false);
      return;
    }

    setMessage("⏳ Mengautentikasi...");

    fetch(dataOprec.api.auth, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nim,
        password,
      }),
    })
      .then((reply) => {
        return reply.json();
      })
      .then((reply) => {
        if (reply.success) {
          setUserData(reply.data, reply.token);
          setMessage("⏳  Redirecting...");
          setProgress(false);
          window.location.reload();
        } else {
          setProgress(false);
          setMessage("❌  Credentials incorrect");
        }
      })
      .catch((err) => {
        setMessage("❌  Error occurred");
        setProgress(false);
      });
  }, [onProgress]);

  return (
    <>
      {dataOprec ? (
        <>
          <CheckUser forLoggedOut redirect pathname={pathname} />

          <section
            className="relative flex flex-col content-center justify-center flex-grow h-screen min-h-full overflow-y-hidden bg-cover"
            style={{
              backgroundImage: `url('https://res.cloudinary.com/ddlo3v9hx/image/upload/v1727535456/bg-cover-main_lhun5z.png')`,
            }}
          >
            <header className="relative z-10 flex flex-col content-center justify-center flex-grow h-full min-h-screen p-16 space-x-0 md:space-x-6 md:flex-col md:justify-center">
              <img
                className="hidden md:block self-center h-40 rounded-3xl md:h-64 md:ml-6"
                src={dataOprec.logo}
                alt="Logo"
              />
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setProgress(true);
                }}
                className="self-center text-center md:text-left w-full max-w-sm text-gray-900 font-bold"
              >
                <div className="mb-4">
                  <label className="block text-md mb-2">NIM</label>
                  <input
                    className="shadow appearance-none border rounded-md w-full px-4 py-3 focus:outline-none focus:shadow-lg"
                    name="nim"
                    type="text"
                    required
                    autoFocus
                    pattern="[0-9]{15}"
                    placeholder="NIM"
                    value={nim}
                    onChange={(e) => setNim(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-md mb-2">Password</label>
                  <input
                    className="shadow appearance-none border rounded-md w-full px-4 py-3 focus:outline-none focus:shadow-lg"
                    name="password"
                    type="password"
                    pattern=".{6,}"
                    required
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-4 md:space-y-0 pt-4 md:pt-2 md:flex-col items-end justify-between mb-4">
                  <span
                    className={`${
                      onProgress && "animate-pulse"
                    } text-sm text-end text-gray-700 font-normal mb-4`}
                  >
                    {message}
                  </span>
                  <button
                    type="submit"
                    className="font-bold py-2 w-full bg-gradient-to-r bg-newOrange text-white rounded-full shadow-md hover:from-gray-50 hover:to-gray-300  hover:text-newOrange transition ease-linear focus:outline-none"
                    tabIndex="-1"
                  >
                    Masuk
                  </button>
                </div>
              </form>
            </header>
          </section>
        </>
      ) : (
        <>
          <section className="relative flex flex-col content-center justify-center flex-grow h-screen overflow-hidden bg-cover"
           style={{
            backgroundImage: `url('https://res.cloudinary.com/ddlo3v9hx/image/upload/v1727535456/bg-cover-main_lhun5z.png')`,
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

export default Login;
