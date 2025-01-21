export function Home() {
  return (
    <div className="flex flex-1 text-gray-100">
      <div className="flex w-60 flex-col bg-gray-800">
        <div className="flex h-12 items-center px-3 font-medium text-white shadow-md">
          Server Name
        </div>
        <div className="flex-1 space-y-2 overflow-y-scroll p-3 text-gray-300">
          <p className="text-white">Channel</p>
          {[...Array(40)].map((_, i) => (
            <div key={i}>
              <p>Channel {i}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-60 flex-1 flex-col bg-gray-700">
        <div className="flex h-12 items-center px-3 font-medium text-white shadow-md">
          General
        </div>
        <div className="flex-1 space-y-4 overflow-y-scroll p-3">
          {[...Array(40)].map((_, i) => (
            <div key={i}>
              <p>
                Message {i}. Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Voluptates, cum. Doloribus hic blanditiis velit eum
                suscipit minima, ab recusandae cumque. Suscipit, consequuntur
                facilis odio doloribus corporis iusto molestiae et magni.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
