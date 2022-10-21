import { useRouter } from "next/router";

export const Product = ({ name, route }) => {
  const router = useRouter();
  return (
    <div onClick={() => router.push({route})} className="flex flex-col justify-center items-center bg-white min-h-[200px] rounded cursor-pointer">
      <h2 className="text-3xl">{name}</h2>
      <p>{name} Export</p>
    </div>
  );
};
