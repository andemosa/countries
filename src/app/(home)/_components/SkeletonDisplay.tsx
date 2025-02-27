const SkeletonDisplay = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:justify-between animate-pulse">
        <div className="relative flex-1 md:max-w-md">
          <div className="absolute left-3 top-3 h-4 w-4 bg-gray-300 rounded-full" />
          <div className="pl-10 h-10 bg-gray-300 rounded-md w-full"></div>
        </div>
        <div className="w-[180px] h-10 bg-gray-300 rounded-md"></div>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, idx) => (
          <div className="h-full animate-pulse" key={idx}>
            <div className="w-full aspect-[3/2] bg-gray-300 rounded-md"></div>
            <div className="p-6">
              <div className="mb-4 h-6 w-3/4 bg-gray-300 rounded"></div>
              <div className="space-y-2">
                <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
                <div className="h-4 w-4/6 bg-gray-300 rounded"></div>
                <div className="h-4 w-3/6 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkeletonDisplay;
