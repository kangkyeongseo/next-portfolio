import Header from "@/components/laytout/Header";
import Wave from "@/components/section/intro/Wave";
import Title from "@/components/section/intro/Title";

export default function Home() {
  return (
    <>
      <Header />
      <div className="w-full h-[100vh] relative flex justify-center items-center">
        <Wave />
        <Title />
      </div>
    </>
  );
}
