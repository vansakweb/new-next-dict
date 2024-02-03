import BihuaItem from "@/components/BihuaItem";

export default function Bihua({ hanzhis }: { hanzhis: string[] }) {
  return (
    <div className=" h-full- overflow-auto">
      {hanzhis.map((hanzhi: string, index: number) => (
        <BihuaItem key={index} hanzhi={hanzhi} />
      ))}
    </div>
  );
}
