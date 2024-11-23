import Image from "next/image";

export default function Features() {
  return (
    <div className="container flex flex-col gap-8 items-center">
      <h2>Features</h2>

      <div className="row grid gap-12 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:w-5/6 w-full">
        <div className="item flex flex-col items-center gap-6">
          <Image
            src="/images/pyramid.webp"
            alt=""
            draggable="false"
            loading="lazy"
            width={75}
            height={0}
          />

          <div className="flex flex-col items-center gap-2">
            <div className="text-3xl font-semibold text-center">
              3D Frameworks
            </div>
            <div className="opacity-50 text-center">
              We support many modern 3D frameworks like ThreeJS
            </div>
          </div>
        </div>
        <div className="item flex flex-col items-center gap-6">
          <Image
            src="/images/calendar.webp"
            alt=""
            draggable="false"
            loading="lazy"
            width={75}
            height={0}
          />

          <div className="flex flex-col items-center gap-2">
            <div className="text-3xl font-semibold text-center">
              24/7 availability
            </div>
            <div className="opacity-50 text-center">
              We offer 24/7 available AI for each user no matter the pricing
              plan
            </div>
          </div>
        </div>
        <div className="item flex flex-col items-center gap-6">
          <Image
            src="/images/lock.webp"
            alt=""
            draggable="false"
            loading="lazy"
            width={75}
            height={0}
          />

          <div className="flex flex-col items-center gap-2">
            <div className="text-3xl font-semibold text-center">
              Top level security
            </div>
            <div className="opacity-50 text-center">
              Your data is safe with us. We have experts for top level security
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
