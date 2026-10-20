
"use client";

import React, { useState } from "react";

export default function FormSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    organization: "",
    service: "",
    comment: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Contact form data:", formData);
  };

  const inputClass =
    "w-full min-w-0 rounded-lg border border-[#123e59] bg-transparent px-4 py-4 text-[15px] text-white outline-none placeholder:text-white/85 transition focus:border-blue-400 focus:ring-1 focus:ring-blue-400/30 text-ellipsis";

  return (
    <section className="bg-[#06131e] px-4 py-12 text-white sm:px-6 sm:py-16 lg:px-12 lg:py-20">
      <div className="relative mx-auto max-w-[1200px] overflow-hidden rounded-xl bg-gradient-to-b from-[#0c1c2a] via-black to-[#0c1c2a] px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-14 shadow-2xs">
        {/* Decorative background curves */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-36 top-1/2 h-[430px] w-[430px] -translate-y-1/2 rounded-full border border-white/10 sm:-left-44 sm:h-[500px] sm:w-[500px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-1/2 h-[380px] w-[380px] -translate-y-1/2 rounded-full border border-white/[0.08] sm:-left-40 sm:h-[450px] sm:w-[450px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-28 top-1/2 h-[330px] w-[330px] -translate-y-1/2 rounded-full border border-white/[0.07] sm:-left-36 sm:h-[400px] sm:w-[400px]"
        />

        <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1fr_1.08fr] lg:gap-14">
          {/* Left content */}
          <div className="px-1 py-2 sm:px-3 lg:py-8">
            <span className="inline-flex rounded-full border border-sky-500 px-4 py-1 text-[13px] text-white/90">
              Get in Touch with
            </span>

            <h2 className="mt-5 text-4xl font-normal sm:text-5xl lg:text-[42px] xl:text-6xl">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text font-medium text-transparent">
                Experts
              </span>
            </h2>

            <p className="mt-4 max-w-[390px] text-xs leading-6 text-white/85 sm:text-[16px]">
              Connect seamlessly with the brilliance of Web Perfection. Our
              dedicated experts await your queries, ready to transform your
              ideas into digital excellence. Elevate your online presence—get
              in touch with the masters at Web Perfection today.
            </p>

            {/* Social links */}
            <div className="mt-5 flex items-center gap-2">
              <a
                href="https://www.facebook.com/"
                aria-label="Facebook"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#15304e] text-lg font-bold transition hover:bg-blue-600"
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 155.139 155.139"
                    width="14"
                    height="14"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path
                    fill="#ffffff"
                    d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761z"
                    />
                </svg>
              </a>
              <a
                href="https://www.twitter.com/"
                aria-label="Twitter"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#15304e] text-lg font-bold transition hover:bg-blue-600"
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 512 512"
                    fill="none"
                    aria-hidden="true"
                    >
                    <path
                        d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496"
                        fill="#ffffff"
                    />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/"
                aria-label="LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#15304e] text-lg font-bold transition hover:bg-blue-600"
              >                
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 93.06 93.06"
                aria-hidden="true"
                >
                <path
                    d="M11.185.08C5.004.08.001 5.092 0 11.259c0 6.173 5.003 11.184 11.186 11.184 6.166 0 11.176-5.011 11.176-11.184C22.362 5.091 17.351.08 11.185.08M1.538 30.926h19.287V92.98H1.538zM69.925 29.383c-9.382 0-15.673 5.144-18.248 10.022h-.258v-8.479H32.92v62.053h19.27V62.281c0-8.093 1.541-15.932 11.575-15.932 9.89 0 10.022 9.256 10.022 16.451v30.178H93.06V58.942c0-16.707-3.605-29.559-23.135-29.559"
                    fill="#ffffff"
                />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/"
                aria-label="Instagram"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#15304e] text-lg transition hover:bg-purple-600"
              >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 511 511.9"
                aria-hidden="true"
                >
                <path
                    fill="#ffffff"
                    d="M510.95 150.5c-1.2-27.2-5.598-45.898-11.9-62.102-6.5-17.199-16.5-32.597-29.6-45.398-12.802-13-28.302-23.102-45.302-29.5-16.296-6.3-34.898-10.7-62.097-11.898C334.648.3 325.949 0 256.449 0s-78.199.3-105.5 1.5c-27.199 1.2-45.898 5.602-62.097 11.898-17.204 6.5-32.602 16.5-45.403 29.602-13 12.8-23.097 28.3-29.5 45.3-6.3 16.302-10.699 34.9-11.898 62.098C.75 177.801.449 186.5.449 256s.301 78.2 1.5 105.5c1.2 27.2 5.602 45.898 11.903 62.102 6.5 17.199 16.597 32.597 29.597 45.398 12.801 13 28.301 23.102 45.301 29.5 16.3 6.3 34.898 10.7 62.102 11.898 27.296 1.204 36 1.5 105.5 1.5s78.199-.296 105.5-1.5c27.199-1.199 45.898-5.597 62.097-11.898a130.93 130.93 0 0 0 74.903-74.898c6.296-16.301 10.699-34.903 11.898-62.102 1.2-27.3 1.5-36 1.5-105.5s-.102-78.2-1.3-105.5m-46.098 209c-1.102 25-5.301 38.5-8.801 47.5-8.602 22.3-26.301 40-48.602 48.602-9 3.5-22.597 7.699-47.5 8.796-27 1.204-35.097 1.5-103.398 1.5s-76.5-.296-103.403-1.5c-25-1.097-38.5-5.296-47.5-8.796C94.551 451.5 84.45 445 76.25 436.5c-8.5-8.3-15-18.3-19.102-29.398-3.5-9-7.699-22.602-8.796-47.5-1.204-27-1.5-35.102-1.5-103.403s.296-76.5 1.5-103.398c1.097-25 5.296-38.5 8.796-47.5C61.25 94.199 67.75 84.1 76.352 75.898c8.296-8.5 18.296-15 29.398-19.097 9-3.5 22.602-7.7 47.5-8.801 27-1.2 35.102-1.5 103.398-1.5 68.403 0 76.5.3 103.403 1.5 25 1.102 38.5 5.3 47.5 8.8 11.097 4.098 21.199 10.598 29.398 19.098 8.5 8.301 15 18.301 19.102 29.403 3.5 9 7.699 22.597 8.8 47.5 1.2 27 1.5 35.097 1.5 103.398s-.3 76.301-1.5 103.301m0 0"
                />
                <path
                    fill="#ffffff"
                    d="M256.45 124.5c-72.598 0-131.5 58.898-131.5 131.5s58.902 131.5 131.5 131.5c72.6 0 131.5-58.898 131.5-131.5s-58.9-131.5-131.5-131.5m0 216.8c-47.098 0-85.302-38.198-85.302-85.3s38.204-85.3 85.301-85.3c47.102 0 85.301 38.198 85.301 85.3s-38.2 85.3-85.3 85.3M423.852 119.3c0 16.954-13.747 30.7-30.704 30.7-16.953 0-30.699-13.746-30.699-30.7 0-16.956 13.746-30.698 30.7-30.698 16.956 0 30.703 13.742 30.703 30.699m0 0"
                />
                </svg>

              </a>
            </div>
          </div>

          {/* Right contact form */}
          <div className="rounded-xl bg-[#071521]/95 p-5 shadow-2xl sm:p-7 lg:p-5 xl:p-7">
            <h3 className="mb-5 text-lg font-medium sm:text-3xl">
              Let’s Get To Know You
            </h3>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                <input
                  className={inputClass}
                  type="text"
                  name="firstName"
                  placeholder="First Name*"
                  aria-label="First Name"
                  autoComplete="given-name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />

                <input
                  className={inputClass}
                  type="text"
                  name="lastName"
                  placeholder="Last Name*"
                  aria-label="Last Name"
                  autoComplete="family-name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />

                <input
                  className={inputClass}
                  type="email"
                  name="email"
                  placeholder="Email*"
                  aria-label="Email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <input
                  className={inputClass}
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number*"
                  aria-label="Mobile Number"
                  autoComplete="tel"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />

                <input
                  className={inputClass}
                  type="text"
                  name="organization"
                  placeholder="Organization"
                  aria-label="Organization"
                  autoComplete="organization"
                  value={formData.organization}
                  onChange={handleChange}
                />

                <input
                  className={inputClass}
                  type="text"
                  name="service"
                  placeholder="How Can We Help You With?"
                  aria-label="How can we help you"
                  value={formData.service}
                  onChange={handleChange}
                />
              </div>

              <textarea
                className={`${inputClass} mt-2 min-h-[100px] resize-y sm:min-h-[80px]`}
                name="comment"
                placeholder="Comment"
                aria-label="Comment"
                value={formData.comment}
                onChange={handleChange}
              />

              <button type="submit" className="mt-4 about-button cursor-pointer">
                SEND
                <span aria-hidden="true" className="text-sm">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.1381 7.52867L10.4714 2.86201C10.3457 2.74057 10.1773 2.67337 10.0025 2.67489C9.82768 2.67641 9.66047 2.74652 9.53687 2.87013C9.41326 2.99373 9.34315 3.16094 9.34163 3.33574C9.34011 3.51054 9.40731 3.67894 9.52875 3.80467L13.0574 7.33334H1.33341C1.1566 7.33334 0.987034 7.40358 0.86201 7.5286C0.736986 7.65363 0.666748 7.8232 0.666748 8.00001C0.666748 8.17682 0.736986 8.34639 0.86201 8.47141C0.987034 8.59644 1.1566 8.66667 1.33341 8.66667H13.0574L9.52875 12.1953C9.46507 12.2568 9.41429 12.3304 9.37935 12.4117C9.34441 12.4931 9.32602 12.5806 9.32525 12.6691C9.32448 12.7576 9.34135 12.8454 9.37487 12.9273C9.40839 13.0092 9.45789 13.0837 9.52048 13.1463C9.58308 13.2089 9.65751 13.2584 9.73945 13.2919C9.82138 13.3254 9.90916 13.3423 9.99768 13.3415C10.0862 13.3407 10.1737 13.3223 10.255 13.2874C10.3364 13.2525 10.4099 13.2017 10.4714 13.138L15.1381 8.47134C15.2631 8.34632 15.3333 8.17678 15.3333 8.00001C15.3333 7.82323 15.2631 7.65369 15.1381 7.52867Z" fill="white"></path></svg>
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
