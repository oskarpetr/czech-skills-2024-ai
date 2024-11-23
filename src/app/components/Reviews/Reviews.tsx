import { cn } from "@/app/utilts/cn";
import Marquee from "@/components/ui/marquee";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "/images/avatars/avatar1.png",
  },
  {
    name: "Sophia",
    username: "@sophiadev",
    body: "This tool saved me hours of work! The character creation process is so intuitive and fun.",
    img: "/images/avatars/avatar2.png",
  },
  {
    name: "Liam",
    username: "@liam.codes",
    body: "Incredible technology. The characters I created with this feel so lifelike and unique!",
    img: "/images/avatars/avatar3.png",
  },
  {
    name: "Emma",
    username: "@emma_ai",
    body: "The level of customization is unmatched. Perfect for adding personality to my projects.",
    img: "/images/avatars/avatar4.png",
  },
  {
    name: "Oliver",
    username: "@oliverDev",
    body: "Honestly, I was skeptical at first, but this tool is a game-changer for devs like me.",
    img: "/images/avatars/avatar5.png",
  },
  {
    name: "Ava",
    username: "@ava_code",
    body: "Seamless integration with my workflow. It feels like having an extra teammate!",
    img: "/images/avatars/avatar6.png",
  },
  {
    name: "Mason",
    username: "@masonJS",
    body: "The AI is brilliant. It’s as if it reads my mind when I describe a character.",
    img: "/images/avatars/avatar7.png",
  },
  {
    name: "Isabella",
    username: "@bella.codes",
    body: "This tool makes character creation effortless. Great for prototyping and storytelling.",
    img: "/images/avatars/avatar8.png",
  },
  {
    name: "Ethan",
    username: "@ethan_dev",
    body: "I can't recommend this enough. Every developer should try it out.",
    img: "/images/avatars/avatar9.png",
  },
  {
    name: "Mia",
    username: "@mia.codes",
    body: "From simple designs to complex personalities, this tool does it all. I’m impressed.",
    img: "/images/avatars/avatar10.png",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export default function Reviews() {
  return (
    <div className="flex flex-col gap-8 items-center w-screen relative">
      <h2>Reviews</h2>

      <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </div>
  );
}
