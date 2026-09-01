import Hero from "../components/Hero";
import OrderOfService from "../components/OrderOfService";
import WeeklyFellowships from "../components/WeeklyFellowships";
import AboutPreview from "../components/AboutPreview";
import NewToChurch from "../components/NewToChurch";
import MapSection from "../components/MapSection";
import ArchDivider from "../components/ArchDivider";

export default function Home() {
  return (
    <>
      <Hero />
      <ArchDivider className="text-navy" />
      <OrderOfService />
      <WeeklyFellowships />
      <AboutPreview />
      <ArchDivider className="text-navy" />
      <NewToChurch />
      <MapSection />
    </>
  );
}
