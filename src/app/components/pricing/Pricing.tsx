"use client";

import { scrollToTarget } from "@/app/utilts/utils";
import Image from "next/image";

export default function Pricing() {
  return (
    <div className="container flex flex-col gap-8 items-center">
      <h2>Pricing</h2>

      <div className="row grid gap-12 2xl:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:w-5/6 w-full">
        <div className="flex flex-col justify-between items-center border-2 border-blue-600 rounded-xl p-8">
          <div className="flex flex-col items-center">
            <div className="font-semibold text-blue-600 text-xl">BASIC</div>
            <div className="text-3xl font-semibold">$9/month</div>

            <div className="mt-6 flex flex-col gap-2">
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
          </div>

          <button
            onClick={() => scrollToTarget("contact")}
            className="btn btn-primary mt-6"
          >
            Get started
          </button>
        </div>

        <div className="flex flex-col justify-between shadow-custom items-center *:text-white bg-gradient-to-b from-blue-300 to-blue-600 rounded-xl p-8">
          <div className="font-semibold text-xl">ADVANCED</div>
          <div className="text-3xl font-semibold">$15/month</div>

          <div className="mt-6 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Image
                src="/images/check-white.webp"
                alt=""
                draggable="false"
                loading="lazy"
                width={25}
                height={0}
              />
              <div>Up to 50 3D character generations per month.</div>
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
              <div>
                Advanced customization (facial expressions, accessories, and
                textures).
              </div>
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
              <div>Access to premium styles and high-detail assets.</div>
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
              <div>Priority email support with faster response times.</div>
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
              <div>Early access to new features and updates.</div>
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
          <div className="font-semibold text-blue-600 text-xl">
            PROFESSIONAL
          </div>
          <div className="text-3xl font-semibold">$59/month</div>

          <div className="mt-6 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Image
                src="/images/check.webp"
                alt=""
                draggable="false"
                loading="lazy"
                width={25}
                height={0}
              />
              <div>Unlimited 3D character generations.</div>
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
              <div>
                Full access to all styles, presets, and advanced customization
                options.
              </div>
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
              <div>Team collaboration tools (shared assets and projects).</div>
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
              <div>Dedicated account manager for personalized support.</div>
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
              <div>
                Custom API access for large-scale or automated workflows.
              </div>
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
