"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import { CloudUpload } from "lucide-react";

const fieldClass =
  "h-10 w-full min-w-0 rounded rounded-md border border-[#123e59] bg-[#06131e] px-3 text-xs text-white outline-none placeholder:text-white/75 transition focus:border-sky-400 focus:ring-1 focus:ring-sky-400/30 sm:h-12 sm:text-sm";

export default function CareerApplicationForm() {
  const [resumeName, setResumeName] = useState("");
  const [submissionMessage, setSubmissionMessage] = useState("");

  function handleResumeChange(event: ChangeEvent<HTMLInputElement>) {
    setResumeName(event.currentTarget.files?.[0]?.name ?? "");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmissionMessage(
      "Your details haven't been sent: application delivery isn't configured yet.",
    );
  }

  return (
    <section className="bg-[#06131e] px-4 py-8 text-white sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="relative mx-auto max-w-360 overflow-hidden rounded-lg bg-linear-to-b from-[#0c1c2a] via-black to-[#0c1c2a] p-4 shadow-2xs sm:p-7 lg:p-12">
        <div aria-hidden="true" className="pointer-events-none absolute -left-28 top-1/2 size-64 -translate-y-1/2 rounded-full border border-white/10 sm:-left-40 sm:size-96" />
        <div aria-hidden="true" className="pointer-events-none absolute -left-24 top-1/2 size-56 -translate-y-1/2 rounded-full border border-white/[0.07] sm:-left-32 sm:size-80" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-36 -bottom-32 size-72 rounded-full border border-white/10 sm:-right-44 sm:-bottom-48 sm:size-96" />

        <h2 className="mb-5 text-center text-3xl font-semibold sm:mb-7 sm:text-4xl">
            Tell Us What Are You{" "}
            <span className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Working On
            </span>
        </h2>

        <div className="relative z-10 mx-auto max-w-210 rounded-md bg-[#06131e]/90 p-5 sm:p-8 lg:p-10">

          <form
            className="space-y-2.5"
            onSubmit={handleSubmit}
            onChange={() => setSubmissionMessage("")}
          >
            <div className="grid grid-cols-2 gap-3">
              <label className="sr-only" htmlFor="career-first-name">First name</label>
              <input
                className={fieldClass}
                id="career-first-name"
                name="firstName"
                placeholder="First Name*"
                autoComplete="given-name"
                required
              />

              <label className="sr-only" htmlFor="career-last-name">Last name</label>
              <input
                className={fieldClass}
                id="career-last-name"
                name="lastName"
                placeholder="Last Name*"
                autoComplete="family-name"
                required
              />

              <label className="sr-only" htmlFor="career-email">Email</label>
              <input
                className={fieldClass}
                id="career-email"
                name="email"
                type="email"
                placeholder="Email*"
                autoComplete="email"
                required
              />

              <label className="sr-only" htmlFor="career-mobile">Mobile number</label>
              <input
                className={fieldClass}
                id="career-mobile"
                name="mobile"
                type="tel"
                placeholder="Mobile Number*"
                autoComplete="tel"
                required
              />

              <label className="sr-only" htmlFor="career-company">Company name</label>
              <input
                className={fieldClass}
                id="career-company"
                name="company"
                placeholder="Company Name"
                autoComplete="organization"
              />

              <label className="sr-only" htmlFor="career-skills">Skills</label>
              <input
                className={fieldClass}
                id="career-skills"
                name="skills"
                placeholder="Skills*"
                required
              />

              <label className="sr-only" htmlFor="career-reason">Why are you leaving your current company?</label>
              <input
                className={fieldClass}
                id="career-reason"
                name="reasonForLeaving"
                placeholder="Why Are You Left Current Company"
              />

              <label className="sr-only" htmlFor="career-experience">Total experience</label>
              <input
                className={fieldClass}
                id="career-experience"
                name="experience"
                placeholder="Total Experience"
              />

              <label className="sr-only" htmlFor="career-current-ctc">Current CTC</label>
              <input
                className={fieldClass}
                id="career-current-ctc"
                name="currentCtc"
                placeholder="Current CTC"
              />

              <label className="sr-only" htmlFor="career-expected-ctc">Expected CTC</label>
              <input
                className={fieldClass}
                id="career-expected-ctc"
                name="expectedCtc"
                placeholder="Expected CTC"
              />

              <label className="sr-only" htmlFor="career-designation">Designation</label>
              <textarea
                className={`${fieldClass} col-span-2 h-20 resize-y py-3 sm:h-38`}
                id="career-designation"
                name="designation"
                placeholder="Designation"
              />
            </div>

            <label className="relative flex min-h-30 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-lg border border-dashed border-[#164c75] bg-[#102e50] px-4 py-3 text-center transition hover:border-sky-400 focus-within:ring-2 focus-within:ring-sky-400/50 sm:min-h-45">
              <CloudUpload
                aria-hidden="true"
                className="size-7 text-white sm:size-8"
              />
              <span className="text-[10px] text-white/85 sm:text-xs">
                {resumeName || "Choose a file to upload your resume"}
              </span>
              <span className="text-[9px] text-white/55 sm:text-[10px]">PDF, DOC, or DOCX</span>
              <input
                className="absolute inset-0 cursor-pointer opacity-0"
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                aria-label="Upload your resume"
                onChange={handleResumeChange}
                required
              />
            </label>

            <button type="submit" className="about-button min-h-8 cursor-pointer px-3 text-[10px] sm:min-h-9 sm:text-xs mt-4">
              Submit
              <span aria-hidden="true">→</span>
            </button>

            {submissionMessage && (
              <p className="text-xs text-amber-200" role="status">
                {submissionMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
