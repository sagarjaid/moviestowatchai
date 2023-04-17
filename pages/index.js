import Head from "next/head";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import Script from "next/script";

const Home = () => {
  return (
    <>
      <Head>
        <title>Scrip AI — AI TikTok, Reel & YT Shorts Script Writer</title>
        <meta
          name="title"
          content="Scrip AI — AI TikTok, Reel & YT Shorts Script Writer"
        />
        <meta
          name="description"
          content="10X faster & better way to write viral 30 sec short video script for Instagram Reel, TikTok and Youtube shorts"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://scripai.com/" />
        <meta
          property="og:title"
          content="Scrip AI — AI TikTok, Reel & YT Shorts Script Writer"
        />
        <meta
          property="og:description"
          content="10X faster & better way to write viral 30 sec short video script for Instagram Reel, TikTok and Youtube shorts"
        />
        <meta
          property="og:image"
          content="https://scripai.com/scrip-ai-cover.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://scripai.com/" />
        <meta
          property="twitter:title"
          content="Scrip AI — AI TikTok, Reel & YT Shorts Script Writer"
        />
        <meta
          property="twitter:description"
          content="10X faster & better way to write viral 30 sec short video script for Instagram Reel, TikTok and Youtube shorts"
        />
        <meta
          property="twitter:image"
          content="https://scripai.com/scrip-ai-cover.png"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="https://scripai.com/favicon.png" />

        <meta
          name="google-site-verification"
          content="Yp9e-xgEgjFSdaOwKgO0bv66QN5ScCpFxlGr0F8qUWk"
        />
      </Head>
      <main className="bg-[url('/bg.png')] object-contain">
        <div className="m-auto flex h-screen max-w-5xl flex-col px-4 text-white">
          {/* <div className=" p-2 w-full text-center bg-yellow-400">NOTE: Due to overwhelming response we are out of capacity right now 🔥🔥🔥 please check us after 4 hours</div> */}
          <nav className="flex items-center justify-between py-4">
            {/* <a href="/">
              <img src="/scrip.svg" className="w-[80px]" />
            </a> */}
            {/* <span className=" rounded-r-full rounded-bl-full bg-gray-600 p-1 px-3 text-xl font-bold text-white "> */}
            <span className=" text-md rounded-r-full rounded-bl-full bg-blue-700 p-1 px-3 font-bold text-white ">
              WHAT TO WATCH AI
            </span>
            <div>
              <ul className="flex items-center gap-4 text-sm">
                <li className="hidden sd:inline">
                  <a
                    href="https://www.producthunt.com/posts/scrip-ai?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-scrip&#0045;ai"
                    target="_blank"
                  >
                    <img
                      className="w-36"
                      src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=384573&theme=light"
                    />
                  </a>
                </li>
                <li className="flex w-fit items-center gap-1 rounded-full bg-white p-1 px-3	 text-black shadow-sm ">
                  <a href="/app">Try for free!</a>
                  <a href="/app">
                    <svg
                      className="w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="flex flex-col items-start justify-start gap-6 p-2 py-10 ">
            {/* <span>WHAT_TO_WATCH_AI</span> */}
            <div className="line flex flex-col  text-base font-extrabold xs:text-lg sdm:text-3xl sm:gap-3 md:text-4xl mdx:text-5xl ">
              {/* <span> 10X faster & better way to write viral </span>
            <span> 30 sec short video script for </span> */}

              <span>AI-power recommendation</span>
              <spn className="text-blue-700">
                <Typewriter
                  options={{
                    strings: ["Movies", "Web Series", "TV Shows"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </spn>
            </div>
            <p className="text-center text-xs sm:text-base">
              not sure what to watch tonight? give it try!
            </p>
            <div className="flex w-fit items-center justify-around gap-2 rounded-full bg-blue-700 p-2 px-4	text-white shadow-xl hover:bg-blue-800 ">
              <a href="/app">Let's binge</a>
              <svg
                className="w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </div>
            <div className="flex flex-col gap-1 text-xs text-white sm:text-sm">
              <span>✓ No credit card required</span>
              <span>✓ No login is required</span>
            </div>
            <a
              className="sd:hidden"
              href="https://www.producthunt.com/posts/scrip-ai?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-scrip&#0045;ai"
              target="_blank"
            >
              <img
                className="w-36"
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=384573&theme=light"
              />
            </a>

            <img src="/logos.png" className="w-[70%] py-6" />
            <div className="absolute bottom-8 flex items-center gap-2 pt-10 sm:bottom-6">
              <a href="https://www.linkedin.com/in/sagarjaid/" target="_blank">
                DEV: Sagar Jaid
              </a>
              <span>|</span>

              <a href="https://scripai.com/privacy" target="_blank">
                Privacy
              </a>
              <span>|</span>
              <a href="https://scripai.com/tc" target="_blank">
                T&C
              </a>
              <span>|</span>
              <a href="https://scripai.com/gdrp" target="_blank">
                GDRP
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
