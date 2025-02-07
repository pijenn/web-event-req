import React from 'react';

const Footer = () => {
  return (
    <footer
      id="footer"
      className="relative flex flex-col content-center justify-center flex-grow overflow-y-hidden bg-cover pt-20 pb-16 px-12"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/ddlo3v9hx/image/upload/v1727535063/footer_r9ijpi.png')`,
      }}
    >
      <div className="text-center text-white">
        <h1 className="mb-3 text-xl font-semibold font-Lato leading-tight tracking-tighter">
          Made with 🧡️ by Biro Pengembangan Informasi & Teknologi 2025
        </h1>
        <p className="tracking-tight">
          <span className="font-semibold font-Lato">
            &copy; {new Date().getFullYear()} SGE FILKOM UB kabinet Vox Aeterna
          </span>
        </p>
        <div className="flex flex-wrap flex-row justify-center pb-10 pt-10 space-x-4">
          <a
            href="http://www.instagram.com/bemfilkomub/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 transform hover:scale-125"
          >
            <img
              src="https://res.cloudinary.com/dnnznx7sj/image/upload/v1738914068/instagram.png"
              alt="Instagram"
              className="w-12"
            />
          </a>
          <a
            href="http://page.line.me/?accountId=csj9184g&openerPlatform=webview&openerKey=webview%3AunifiedSearch"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 transform hover:scale-125"
          >
            <img
              src="https://ynftaugbdkwjeuzndwzp.supabase.co/storage/v1/object/public/web-bem-2024/asset/line.png"
              alt="Line"
              className="w-12"
            />
          </a>
          <a
            href="http://www.tiktok.com/@bemfilkomub"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 transform hover:scale-125"
          >
            <img
              src="https://ynftaugbdkwjeuzndwzp.supabase.co/storage/v1/object/public/web-bem-2024/asset/tiktok.png"
              alt="TikTok"
              className="w-12"
            />
          </a>
          <a
            href="http://www.youtube.com/c/BEMFILKOMUB"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 transform hover:scale-125"
          >
            <img
              src="https://ynftaugbdkwjeuzndwzp.supabase.co/storage/v1/object/public/web-bem-2024/asset/youtube.png"
              alt="YouTube"
              className="w-12"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
