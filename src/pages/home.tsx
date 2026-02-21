import HeroBanner from "../components/Hero-Banner";
import ProjectCardList from "../components/project-card";
import Techbox from "../components/tech-box";

export default function Home() {
  return (
    <>
      <section style={{ background: 'rgba(255,255,255,0.8)', borderRadius: 24, padding: '48px 0', margin: '32px 0' }}>
        <HeroBanner />
      </section>
      <section style={{ background: '#f7f7fa', borderRadius: 24, padding: '48px 0', margin: '32px 0' }}>
        <ProjectCardList />
      </section>
      <section style={{ background: 'rgba(255,255,255,0.8)', borderRadius: 24, padding: '48px 0', margin: '32px 0' }}>
        <Techbox />
      </section>
    </>
  );
}
