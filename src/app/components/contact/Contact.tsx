"use client";

import { scrollToTarget } from "@/app/utilts/utils";

export default function Contact() {
  return (
    <div className="mb-24">
      <div className="w-3/5 flex xl:flex-row flex-col-reverse gap-12 mx-auto justify-between relative z-10 bg-white px-40 py-20 rounded-lg shadow-2xl">
        <div className="flex flex-col gap-2">
          <input
            className="border border-black rounded-lg px-4 py-3"
            placeholder="John Smith"
          />
          <input
            className="border border-black rounded-lg px-4 py-3"
            placeholder="johnsmith@gmail.com"
          />
          <textarea
            className="border border-black rounded-lg px-4 py-3"
            placeholder="Your message"
          />

          <button
            onClick={() => scrollToTarget("contact")}
            className="btn btn-primary mt-6"
          >
            Get started
          </button>
        </div>

        <div>
          <h2>Contact Sales</h2>
          <div className="item links mt-4 flex flex-col gap-2">
            <a
              className="flex gap-2"
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
              className="flex gap-2"
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

      <div className="bg-blue-600 w-full h-96 absolute left-0 z-0 -mt-48"></div>
    </div>
  );
}
