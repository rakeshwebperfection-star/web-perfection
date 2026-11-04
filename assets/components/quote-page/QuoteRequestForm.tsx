"use client";

import { useState, type FormEvent } from "react";
import { CloudUpload } from "lucide-react";
import Image from "next/image";

import quoteLeft from "@/assets/images/quote/get-left-pattern.png";
import quoteRight from "@/assets/images/quote/get-right-pattern.png";

const budgetOptions = [
  "$1k-$5k",
  "$5k-$8k",
  "$8k-$15k+",
  "$15k-$25k+",
  "$25k-$35k",
  "$35k-$45k+",
  "$45k-$60k+",
  "$60k-$70k+",
  "$70k-$80k+",
  "$80k-$90k",
  "$90k-$100k+",
  "$100k-$120k+",
  "$20k-$140k+",
  "$140k-$160k+",
  "$200k+",
];

const fieldClass =
  "w-full min-w-0 rounded-lg border border-[#123e59] bg-transparent px-4 py-[12px] text-sm text-white outline-none transition placeholder:text-white/70 focus:border-blue-400 focus:ring-1 focus:ring-blue-400/30";

export default function QuoteRequestForm() {
  const [budgetIndex, setBudgetIndex] = useState(2);
  const [fileName, setFileName] = useState("");
  const [submitMessage, setSubmitMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const message = [
      `Name: ${formData.get("firstName")} ${formData.get("lastName")}`,
      `Email: ${formData.get("email")}`,
      `Mobile: ${formData.get("mobile")}`,
      `Business: ${formData.get("businessName") || "Not provided"}`,
      `Website: ${formData.get("website") || "Not provided"}`,
      `Need help with: ${formData.get("projectType") || "Not provided"}`,
      `How we can help: ${formData.get("helpDetails") || "Not provided"}`,
      `Availability date: ${formData.get("availability") || "Not provided"}`,
      `Preferred contact: ${formData.get("contactMethod")}`,
      `Project budget: ${budgetOptions[budgetIndex]}`,
      `Requirement file: ${fileName || "Not provided"}`,
    ].join("\n");

    setSubmitMessage(
      fileName
        ? "Your email app will open with the quote details. Please attach your selected file before sending."
        : "Your email app will open with the quote details. Review them and send the email to submit your request.",
    );
    window.location.href = `mailto:hrwebperfection@gmail.com?subject=${encodeURIComponent("New project quote request")}&body=${encodeURIComponent(message)}`;
  }

  return (
    <section className="bg-[#06131e] px-4 py-10 text-white sm:px-6 sm:py-12 lg:px-12 lg:py-18">
      <div className="relative mx-auto max-w-300 overflow-hidden rounded-xl bg-linear-to-br from-[#0c1c2a] via-black to-[#0c1c2a] px-4 py-7 sm:px-8 sm:py-9 lg:px-10 lg:py-14">
        {/* Decorative background */}
      <div className="absolute -left-14 top-0 opacity-50">
        <Image className="about-illustration" src={quoteLeft.src ?? quoteLeft} alt="Creative team working together on digital projects" width={255} height={666} />
      </div>
      <div className="absolute -right-14 bottom-0 opacity-50">
        <Image className="about-illustration" src={quoteRight.src ?? quoteRight} alt="Creative team working together on digital projects" width={253} height={552} />
      </div>

        <form
          onSubmit={handleSubmit}
          className="relative z-10 mx-auto max-w-2xl rounded-xl bg-[#071521]/95 p-4 shadow-2xl sm:p-8"
        >
          <div className="grid gap-2.5 sm:grid-cols-2">
            <input
              className={fieldClass}
              name="firstName"
              placeholder="First Name*"
              aria-label="First name"
              autoComplete="given-name"
              required
            />
            <input
              className={fieldClass}
              name="lastName"
              placeholder="Last Name*"
              aria-label="Last name"
              autoComplete="family-name"
              required
            />
            <input
              className={fieldClass}
              name="email"
              type="email"
              placeholder="Email*"
              aria-label="Email"
              autoComplete="email"
              required
            />
            <input
              className={fieldClass}
              name="mobile"
              type="tel"
              placeholder="Mobile Number*"
              aria-label="Mobile number"
              autoComplete="tel"
              required
            />
            <input
              className={fieldClass}
              name="businessName"
              placeholder="Business Name"
              aria-label="Business name"
              autoComplete="organization"
            />
            <input
              className={fieldClass}
              name="website"
              type="url"
              placeholder="Website URL"
              aria-label="Website URL"
            />
            <input
              className={fieldClass}
              name="projectType"
              placeholder="What Do You Need Help With?"
              aria-label="What do you need help with"
            />
            <input
              className={fieldClass}
              name="helpDetails"
              placeholder="How Can We Help?"
              aria-label="How can we help"
            />
            <input
              className={`${fieldClass}`}
              name="availability"
              type="date"
              aria-label="Availability date"
            />

            <fieldset className="flex min-h-11 flex-wrap items-center gap-x-3 gap-y-2 text-sm text-white/85 sm:pl-2">
              <legend className="sr-only">Preferred contact method</legend>
              <span aria-hidden="true">Connect Via</span>
              {["Skype", "WhatsApp"].map((method) => (
                <label key={method} className="inline-flex items-center gap-1.5">
                  <input
                    className="accent-sky-500"
                    type="radio"
                    name="contactMethod"
                    value={method}
                    required
                  />
                  {method}
                </label>
              ))}
            </fieldset>
          </div>

          <div className="mt-6">
            <div className="mb-2 flex items-center justify-between gap-3 text-md text-white/85">
              <label htmlFor="project-budget">Project Budget</label>
              <output htmlFor="project-budget" className="font-medium text-cyan-300">
                {budgetOptions[budgetIndex]}
              </output>
            </div>
            <input
              id="project-budget"
              type="range"
              min={0}
              max={budgetOptions.length - 1}
              step={1}
              value={budgetIndex}
              onChange={(event) => setBudgetIndex(Number(event.target.value))}
              className="h-2 w-full cursor-pointer accent-violet-600"
              aria-label="Project budget"
            />
          </div>

          <label
            htmlFor="requirements-file"
            className="mt-6 flex min-h-40 cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-sky-500/80 bg-[#102b4e] px-4 py-5 text-center transition hover:bg-[#15365f]"
          >
            <CloudUpload aria-hidden="true" className="h-9 w-9" />
            <span className="mt-2 text-xs text-white/85">
              {fileName || "Click here to upload your requirement"}
            </span>
            <span className="mt-1 text-[11px] text-white/55">
              PDF, DOC, DOCX, PNG or JPG · Max 10 MB
            </span>
            <input
              id="requirements-file"
              name="requirementsFile"
              type="file"
              accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
              className="sr-only"
              onChange={(event) => {
                const file = event.target.files?.[0];
                if (!file) {
                  setFileName("");
                  return;
                }

                if (file.size > 10 * 1024 * 1024) {
                  event.target.value = "";
                  setFileName("");
                  setSubmitMessage("Please choose a file smaller than 10 MB.");
                  return;
                }

                setSubmitMessage("");
                setFileName(file.name);
              }}
            />
          </label>

          {submitMessage && (
            <p role="status" className="mt-3 text-xs leading-5 text-cyan-200">
              {submitMessage}
            </p>
          )}

          <button type="submit" className="about-button mt-5 min-h-0 px-4 py-2 text-xs cursor-pointer">
            Submit <span aria-hidden="true">→</span>
          </button>
        </form>
      </div>
    </section>
  );
}
