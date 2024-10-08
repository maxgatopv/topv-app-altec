export default function LoadingProductDescription() {
  return (
    <>
      <div role="status" className="w-full animate-pulse">
        <div className="mb-4 h-2.5 w-2/6 rounded-full bg-gray-200"></div>
        <div className="mb-2.5 h-2 w-4/5 rounded-full bg-gray-200"></div>
        <div className="mb-2.5 h-2 rounded-full bg-gray-200"></div>
        <div className="mb-2.5 h-2 w-5/6 rounded-full bg-gray-200"></div>
        <div className="mb-2.5 h-2 w-3/6 rounded-full bg-gray-200"></div>
        <div className="h-2 max-w-[360px] rounded-full bg-gray-200"></div>
        <span className="sr-only">Loading...</span>
      </div>
    </>
  );
}
