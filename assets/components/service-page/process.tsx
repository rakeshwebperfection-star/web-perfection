const serviceSteps = [
  {
    title: "UI/UX Design",
    description:
      "Beginning with a comprehensive understanding of your requirements, we meticulously craft a planning template, followed by the creation of wireframes and mockups tailored to your needs.",
  },
  {
    title: "Web Development",
    description:
      "Utilizing skilled Website Developers, we specialize in popular CMS platforms (WordPress, Joomla, Drupal) and excel in Ecommerce Development with Magento, Shopify, Opencart.",
  },
  {
    title: "App Development",
    description:
      "Our adept developers excel in mobile app creation, leveraging expertise in CMS and Ecommerce to deliver top-tier functionality and user experience.",
  },
  {
    title: "Software Testing",
    description:
      "Our quality assurance and control services are performed by the same team of expert testers who helped deliver more than 300 bug-free, high-quality websites to global clients.",
  },
  {
    title: "SEO",
    description:
      "We enhance your website's visibility on search engines through strategic SEO techniques, attracting organic traffic and expanding your customer base.",
  },
];

export default function ServiceProcess() {
  return (
    <section className="bg-linear-to-b from-[#10213b] via-[#000000] to-[#10213b] px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-360">
        <header className="mb-10 text-center sm:mb-12">
          <span className="mb-3 inline-flex rounded-full border border-sky-500 px-4 py-1 text-sm font-medium">
            How We <span className="ml-1 text-sky-400">Work</span>
          </span>
          <h2 className="mb-3 text-4xl font-medium sm:text-5xl">
            Our Service{" "}
            <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Process
            </span>
          </h2>
          <p className="mx-auto max-w-150 text-sm leading-6 text-white/85 sm:text-base">
            From planning to delivery, we follow a streamlined process to
            ensure you get the best results, on time and within your budget.
          </p>
        </header>

        <ol className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {serviceSteps.map((step, index) => (
            <li
              key={step.title}
              className="rounded-xl bg-[#1b1928] px-4 py-6 text-center border border-gray-800">
              <span className="mb-3 block text-4xl font-semibold text-sky-500">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mb-3 text-xl font-bold">{step.title}</h3>
              <p className="text-xs leading-[1.6] text-white/90 sm:text-[13px]">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
