export default function LoadingProductInfo() {
  return (
    <>
      <div className="animate-pulse divide-y *:py-7">
        {/* !-- info --> */}
        <div>
          <div className="h-6 w-3/4 rounded bg-gray-300"></div>
          <div className="mt-3 flex items-center divide-x *:px-2">
            <div className="flex space-x-1">
              <div className="h-4 w-4 rounded-full bg-gray-300"></div>
              <div className="h-4 w-4 rounded-full bg-gray-300"></div>
              <div className="h-4 w-4 rounded-full bg-gray-300"></div>
              <div className="h-4 w-4 rounded-full bg-gray-300"></div>
              <div className="h-4 w-4 rounded-full bg-gray-300"></div>
            </div>
            <div className="ml-3 h-4 w-8 rounded bg-gray-300"></div>
            <div className="ml-3 h-4 w-16 rounded bg-gray-300"></div>
          </div>
        </div>

        {/* !-- Price --> */}
        <div>
          <div className="mt-3 h-10 w-full rounded bg-gray-300"></div>
        </div>

        {/* <!-- Online --> */}
        <div className="mt-3">
          <div className="mb-2 h-6 w-32 rounded bg-gray-300"></div>
          <div className="grid grid-cols-2 justify-center gap-2 p-3 md:grid-cols-4">
            <div className="h-16 w-full rounded-lg bg-gray-300"></div>
            <div className="h-16 w-full rounded-lg bg-gray-300"></div>
            <div className="h-16 w-full rounded-lg bg-gray-300"></div>
            <div className="h-16 w-full rounded-lg bg-gray-300"></div>
          </div>
        </div>
      </div>
    </>
  );
}
