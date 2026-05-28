import DroneHero from "@/components/DroneHero";
import AboutDrone from "@/components/AboutDrone";
import AerialPhotography from "@/components/AerialPhotography";

export default function DronesPage() {
  return (
    <div className="flex flex-col w-full flex-grow">
      <DroneHero />
      <AboutDrone />
      <AerialPhotography />
    </div>
  );
}

