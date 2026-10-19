import Header from "@/assets/components/header";
import Footer from "@/assets/components/footer";
import Homepage from "@/pages/home-page";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex w-full max-w-full flex-col justify-between">
        <Homepage />
      </main>
      <Footer />
    </>
  );
}
