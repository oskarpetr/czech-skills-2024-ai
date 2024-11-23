"use client";

import { scrollToTarget } from "@/app/utilts/utils";

export default function Contact() {
  return (
    <div>
      <div className="container flex xl:flex-row flex-col-reverse gap-12 mx-auto justify-between relative z-10 bg-white xl:!px-40 xl:!py-20 !px-0 !py-12 rounded-lg shadow-2xl">
        <div className="flex flex-col gap-4 w-full">
          <input
            className="border border-black border-opacity-40 rounded-lg px-4 py-3 md:w-3/5 w-4/5 xl:mx-0 mx-auto"
            placeholder="John Smith"
          />
          <input
            className="border border-black border-opacity-40 rounded-lg px-4 py-3 md:w-3/5 w-4/5 xl:mx-0 mx-auto"
            placeholder="johnsmith@gmail.com"
          />
          <textarea
            className="border border-black border-opacity-40 rounded-lg px-4 py-3 md:w-3/5 w-4/5 xl:mx-0 mx-auto"
            placeholder="Your message"
          />

          <button
            onClick={() => scrollToTarget("contact")}
            className="btn btn-primary mt-6 md:w-3/5 w-4/5 xl:mx-0 mx-auto"
          >
            Get started
          </button>
        </div>

        <div className="xl:w-1/2 w-full flex flex-col xl:items-start items-center">
          <h2>Contact Sales</h2>
          <div className="item links mt-4 flex flex-col gap-2">
            <a
              className="flex gap-2 hover:text-blue-600"
              href="tel:777777777"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/footerphone.svg"
                alt="Telephone number"
                width={25}
                height={25}
                draggable="false"
                loading="lazy"
              />{" "}
              +420 123 456 789
            </a>
            <a
              className="flex gap-2 hover:text-blue-600"
              href="mailto:info@pixelforge.cz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/footeremail.svg"
                alt="Email addres"
                width={25}
                height={25}
                draggable="false"
                loading="lazy"
              />
              info@morphly.com
            </a>
          </div>
        </div>
      </div>

      <div className="bg-blue-600 w-full h-72 absolute left-0 z-0 -mt-48"></div>
    </div>
  );
}
