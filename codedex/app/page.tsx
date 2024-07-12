import Image from 'next/image';

const HomePage = () => {
  return (
    <div className="hero bg-base-200 min-h-screen relative flex flex-col justify-start items-center">
      <div className="max-w-md text-center z-10 relative p-20">
        <Image
        src="/sipnplay.png"
        alt="Sip & Play Image"
        width={800}
        height={800}
      />
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1/2 bg-orange-300 rounded-t-full flex justify-center items-center z-0">
        <span className="text-white text-4xl font-bold">🧁</span>
      </div>
    </div>
  );
};

export default HomePage;