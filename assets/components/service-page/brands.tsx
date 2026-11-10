const brands = [
  { name: "Tahiro", wordmark: "TAHIRO", style: "font-medium tracking-[0.3em] text-[#314c77]" },
  { name: "PhytoQuant", wordmark: "PhytoQuant", style: "font-heading italic text-[#91a900]" },
  { name: "Releaf", wordmark: "RELEAF", style: "font-semibold tracking-[0.12em] text-[#557d83]" },
  { name: "Moc", wordmark: "mōc", style: "text-5xl font-bold tracking-tight text-[#3d3d3d]" },
  { name: "DailyShake", wordmark: "DAILYSHAKE", style: "font-semibold tracking-tight text-[#273449]" },
  { name: "Stirling Farms", wordmark: "STIRLING FARMS", style: "font-heading text-xs tracking-[0.2em] text-[#536b68]" },
  { name: "Yookidoo", wordmark: "Yookidoo", style: "rounded-full bg-[#9f351e] px-4 py-2 font-bold text-[#f4d24b]" },
  { name: "Louise Roe", wordmark: "LOUISE ROE", style: "font-semibold tracking-[0.16em] text-[#171717]" },
  { name: "Aussie Sleep", wordmark: "Aussie Sleep", style: "font-semibold text-[#145b9d]" },
  { name: "Borrelli", wordmark: "BORRELLI", style: "border-2 border-[#888] px-3 py-1 font-medium tracking-wide text-[#555]" },
  { name: "Wirkaufendeinmöbel", wordmark: "wirkaufendeinmöbel.de", style: "text-[10px] font-semibold text-[#2e6390] sm:text-xs" },
  { name: "Shavik AI", wordmark: "SHAVIK.AI", style: "text-2xl font-black tracking-tight text-[#12384b]" },
  { name: "Bimaclaxx", wordmark: "Bimaclaxx", style: "text-xl font-bold tracking-tight text-[#2156a0]" },
  { name: "Cybercheck", wordmark: "cybercheck", style: "text-xl font-bold tracking-tight text-[#161616]" },
  { name: "Make the Shift", wordmark: "MAKE THE SHIFT", style: "font-black italic tracking-wide text-[#171717]" },
];

export default function BrandsSection() {
  return (
    <section className="bg-linear-to-b from-[#07182a] via-[#030609] to-[#07182a] px-5 py-14 text-white sm:px-8 sm:py-16">
      <div className="mx-auto max-w-280">
        <h2 className="mx-auto mb-9 max-w-3xl text-center text-3xl font-medium leading-[1.15] sm:mb-10 sm:text-4xl lg:text-5xl">
          We are Happy to work with
          <br />
          Global{" "}
          <span className="bg-linear-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Largest Brands
          </span>
        </h2>

        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
          {brands.map((brand) => (
            <li
              key={brand.name}
              aria-label={brand.name}
              className="group flex aspect-2/1 items-center justify-center overflow-hidden rounded-xl border border-blue-100/70 bg-linear-to-b from-white via-[#f8fafc] to-[#91d1f6] p-3 text-center transition duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:border-sky-300 hover:shadow-[0_12px_32px_rgba(56,189,248,0.3)] motion-reduce:transition-none">
              <span className={`transition-transform duration-300 ease-out group-hover:scale-110 motion-reduce:transition-none ${brand.style}`}>
                {brand.wordmark}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
