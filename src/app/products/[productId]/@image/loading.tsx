export default function LoadingProductImage() {
    return (
        <>
        {/* Main Image Skeleton */}
        <div className="px-3">
          <div className="h-80 bg-gray-200 animate-pulse rounded-lg" />
        </div>
  
        {/* Thumbnail Images Skeleton */}
        <div className="flex space-x-3 p-3">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="w-1/4">
              <div className="h-24 bg-gray-200 animate-pulse rounded-lg" />
            </div>
          ))}
        </div>
      </>
    );
}