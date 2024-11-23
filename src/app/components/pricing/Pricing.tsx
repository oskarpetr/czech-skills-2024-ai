"use client";

import { scrollToTarget } from "@/app/utilts/utils";
import Image from "next/image";

export default function Pricing() {
  return (
    <div className="container flex flex-col gap-8 items-center">
      <h2>Pricing</h2>

      <div className="row grid gap-12 2xl:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:w-4/5 w-full">
        <div className="flex flex-col items-center border-2 border-blue-600 rounded-xl p-8">
          <div className="font-semibold text-blue-600 text-xl">BASIC</div>
          <div className="text-3xl font-semibold">$9/month</div>

          <div className="mt-6">
            <div className="flex items-center gap-2">
              <Image
                src="/images/check.webp"
                alt=""
                draggable="false"
                loading="lazy"
                width={25}
                height={0}
              />
              <div>Up to 10 3D character generations per month.</div>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/images/check.webp"
                alt=""
                draggable="false"
                loading="lazy"
                width={25}
                height={0}
              />
              <div>Access to standard character styles and presets.</div>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/images/check.webp"
                alt=""
                draggable="false"
                loading="lazy"
                width={25}
                height={0}
              />
              <div>Download in standard file formats (FBX, OBJ).</div>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/images/check.webp"
                alt=""
                draggable="false"
                loading="lazy"
                width={25}
                height={0}
              />
              <div>Email support for troubleshooting and inquiries.</div>
            </div>
          </div>

          <button
            onClick={() => scrollToTarget("contact")}
            className="btn btn-primary mt-6"
          >
            Get started
          </button>
        </div>

        <div className="flex flex-col shadow-custom items-center *:text-white bg-gradient-to-b from-blue-300 to-blue-600 rounded-xl p-8">
          <div className="font-semibold text-xl">ADVANCED</div>
          <div className="text-3xl font-semibold">$15/month</div>

          <div className="mt-6">
            <div className="flex items-center gap-2">
              <Image
                src="/images/check-white.webp"
                alt=""
                draggable="false"
                loading="lazy"
                width={25}
                height={0}
              />
              <div>Up to 10 3D character generations per month.</div>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/images/check-white.webp"
                alt=""
                draggable="false"
                loading="lazy"
                width={25}
                height={0}
              />
              <div>Access to standard character styles and presets.</div>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/images/check-white.webp"
                alt=""
                draggable="false"
                loading="lazy"
                width={25}
                height={0}
              />
              <div>Download in standard file formats (FBX, OBJ).</div>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/images/check-white.webp"
                alt=""
                draggable="false"
                loading="lazy"
                width={25}
                height={0}
              />
              <div>Email support for troubleshooting and inquiries.</div>
            </div>
          </div>

          <button
            onClick={() => scrollToTarget("contact")}
            className="btn btn-secondary mt-6 !text-blue-600"
          >
            Get started
          </button>
        </div>

        <div className="flex flex-col items-center border-2 border-blue-600 rounded-xl p-8">
          <div className="font-semibold text-blue-600 text-xl">BASIC</div>
          <div className="text-3xl font-semibold">$9/month</div>

          <div className="mt-6">
            <div className="flex items-center gap-2">
              <Image
                src="/images/check.webp"
                alt=""
                draggable="false"
                loading="lazy"
                width={25}
                height={0}
              />
              <div>Up to 10 3D character generations per month.</div>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/images/check.webp"
                alt=""
                draggable="false"
                loading="lazy"
                width={25}
                height={0}
              />
              <div>Access to standard character styles and presets.</div>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/images/check.webp"
                alt=""
                draggable="false"
                loading="lazy"
                width={25}
                height={0}
              />
              <div>Download in standard file formats (FBX, OBJ).</div>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/images/check.webp"
                alt=""
                draggable="false"
                loading="lazy"
                width={25}
                height={0}
              />
              <div>Email support for troubleshooting and inquiries.</div>
            </div>
          </div>

          <button
            onClick={() => scrollToTarget("contact")}
            className="btn btn-primary mt-6"
          >
            Get started
          </button>
        </div>
      </div>
    </div>
  );
}
