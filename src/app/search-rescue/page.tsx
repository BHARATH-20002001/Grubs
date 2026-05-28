import SearchRescueHero from "@/components/SearchRescueHero";
import ThermalDrones from "@/components/ThermalDrones";

export default function SearchRescuePage() {
  return (
    <div className="flex flex-col w-full flex-grow">
      <SearchRescueHero />
      <ThermalDrones />
    </div>
  );
}
