import { useEffect } from "react";
const NotFound = () => {
  useEffect(() => {
    document.title = `Web Event Request SGE FILKOM 2025`;
  }, []);
  return (
    <>
      <section className="relative flex flex-col content-center justify-center flex-grow h-screen overflow-hidden bg-coffeetint">
        <div className="self-center max-w-5xl text-4xl text-center text-orange font-bold">
          Halaman Tidak Ditemukan
        </div>
      </section>
    </>
  );
};

export default NotFound;
