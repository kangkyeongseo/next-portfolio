import Header from "@/components/Header";
import Wave from "@/components/Wave";

export default function Home() {
  return (
    <>
      <Header />
      <div className="w-100 h-[100vh] pt-24">
        <Wave />
      </div>
    </>
  );
}
