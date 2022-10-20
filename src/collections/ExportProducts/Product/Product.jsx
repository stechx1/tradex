export const Product = ({ name }) => {
  return (
    <div className="flex flex-col justify-center items-center bg-white min-h-[200px] rounded">
      <h2 className="text-3xl">{name}</h2>
      <p>{name} Export</p>
    </div>
  );
};
