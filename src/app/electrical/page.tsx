import ElectricalHero from "@/components/ElectricalHero";
import ElectricalContent from "@/components/ElectricalContent";

export default function ElectricalPage() {
  return (
    <div className="flex flex-col w-full flex-grow">
      <ElectricalHero />
      <ElectricalContent />
    </div>
  );
}
