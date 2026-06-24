/** 홈 페이지 섹션 컴포넌트를 순서대로 조합합니다. */
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import { INTRO_VIEWPORT_CLASS, MAIN_AFTER_INTRO_CLASS } from "@/constants/layout";

export default function Home() {
  return (
    <>
      <Header />
      <div
        className={`mx-auto max-w-5xl px-4 md:px-8 ${INTRO_VIEWPORT_CLASS}`}
      >
        <Intro />
      </div>
      <main className={MAIN_AFTER_INTRO_CLASS}>
        <Education />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
