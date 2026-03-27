export default function AdminAddProduct() {
  return (
    <div className="w-full h-full flex">
      <label className="text-xl font-bold m-2">Product ID :</label>
      <input
        type="text"
        placeholder="Ex: ID001"
        className="border-4 border-accent"
      />
    </div>
  );
}
