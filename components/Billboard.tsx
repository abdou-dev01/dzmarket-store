import { Billboard as BillboardTypes } from "@/types";

interface BillboardProps {
  data: BillboardTypes;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden"
        style={{
          backgroundImage: `url(${data.imageUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col justify-center items-center text-center h-full w-full gap-y-8">
          <div className="font-bold text-neutral-500 text-3xl sm:text-5xl lg:text-6xl max-w-xs sm:max-w-xl">
            {data.label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
