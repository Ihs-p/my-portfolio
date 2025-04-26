import { RevealOnScroll } from "./RevealOnScroll";

export const Footer = () => {
  return (
    <>
      <section className="border-t border-gray-400 mx-10 md:mx-30 lg:mx-60 py-5 md:py-5 text-sm text-gray-300  md:flex justify-between items-center md:justify-between ">
        
        <div className="flex  justify-center md:justify-start pb-3">
          <span>
            ©
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
            -Ihsan. All Rights Reserved.
          </span>
        </div>

        <div className="flex items-center justify-center ">
          <a href="https://github.com/Ihs-p" target="_blank" className="mx-10 text-white">
            GitHub
          </a>
          <a target="_blank" href="www.linkedin.com/in/ihsan-p" className="text-white">
            Linked In
          </a>
        </div>
      </section>
    </>
  );
};
