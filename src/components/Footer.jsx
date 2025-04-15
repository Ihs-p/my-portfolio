import { RevealOnScroll } from "./RevealOnScroll";

export const Footer = () => {
  return (
    <>
      <section className="border-t border-gray-400 mx-60 py-5 text-sm text-gray-300 flex justify-between ">
        
        <div>
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

        <div className="flex items-center justify-between ">
          <a href="https://github.com/Ihs-p" target="_blank" className="mx-10">
            GitHub
          </a>
          <a target="_blank" href="www.linkedin.com/in/ihsan-p">
            Linked In
          </a>
        </div>
      </section>
    </>
  );
};
