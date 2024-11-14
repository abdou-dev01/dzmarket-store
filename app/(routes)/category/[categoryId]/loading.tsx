import { Skeleton } from "@/components/Skeleton";

const Loading = () => {
  const array = new Array(7);
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between">
          <Skeleton className="w-full h-96" />
        </div>
        <hr />
        <Skeleton className="w-40 h-9" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {array.map((_, index) => (
            <Skeleton
              key={index}
              className="w-auto h-96 border border-gray-500"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;
