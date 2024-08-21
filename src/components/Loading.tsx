import Image from "next/image";

const Loading = () => {
  return (
    <div>
      <Image src="/logo.svg" alt='loading logo' height={120} width={120} className="animate-pulse duration-700"/>
    </div>
  );
};

export default Loading;
