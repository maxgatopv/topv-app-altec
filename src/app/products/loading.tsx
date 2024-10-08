export default function LoadingProductCard() {
  const CardSkeleton = () => (
    <div className="h-full animate-pulse rounded-2xl bg-gray-200 p-1 text-center transition duration-500">
      <div className="h-36 lg:h-64 w-full rounded-t-xl bg-gray-300"></div>
      <div className="my-3 space-y-2 px-2 md:space-y-3 md:px-6">
        <div className="mx-auto h-4 w-3/4 rounded bg-gray-300"></div>
        <div className="mx-auto h-4 w-1/2 rounded bg-gray-300"></div>
        <div className="flex justify-center space-x-1">
          <div className="h-4 w-4 rounded-full bg-gray-300"></div>
          <div className="h-4 w-10 rounded bg-gray-300"></div>
        </div>
        <div className="h-10 w-full rounded bg-gray-300"></div>
        <div className="flex items-center justify-center space-x-1">
          <div className="h-4 w-4 rounded-full bg-gray-300"></div>
          <div className="h-4 w-3/4 rounded bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
  const skeletonCount = 6;

  return (
    <>
      <div className="container mx-auto grid grid-cols-2 gap-3 p-4 md:grid-cols-3">
        {Array.from({ length: skeletonCount }).map((_, index) => (
          <CardSkeleton key={index} />
        ))}
      </div>
    </>
  );
}
