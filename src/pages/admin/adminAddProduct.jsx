import { useState } from "react";

export default function AdminAddProduct() {
  const [productID, setProductID] = useState("");
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [alternativeNames, setAlternativeNames] = useState("");
  const [price, setPrice] = useState("");
  const [labelledPrice, setLabelledPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [isVisible, setIsVisible] = useState("");
  return (
    <div className="w-full max-h-full flex flex-wrap items-start">
      <div className="w-[50%] h-[120px] flex flex-col">
        <label className="text-xl font-bold m-2">Product ID </label>
        <input
          value={productID}
          onChange={(e) => setProductID(e.target.value)}
          type="text"
          placeholder="Ex: ID001"
          className="border-3 border-accent rounded-[10px] h-[70px] p-2 m-2 flex-1 focus:outline-white"
        />
      </div>
      <div className="w-[50%] h-[120px] flex flex-col">
        <label className="text-xl font-bold m-2">Product Name</label>
        <input
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          type="text"
          placeholder="Ex: Laptop"
          className="border-3 border-accent rounded-[10px] h-[70px] p-2 m-2 flex-1 focus:outline-white"
        />
      </div>
      <div className="w-full h-[170px] flex flex-col">
        <label className="text-xl font-bold m-2">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Ex: Laptop"
          className="border-3 border-accent rounded-[10px] h-[70px] p-2 m-2 flex-1 focus:outline-white"
        />
      </div>
      <div className="w-full h-[120px] flex flex-col">
        <label className="text-xl font-bold m-2">Alternative Names</label>
        <input
          value={alternativeNames}
          onChange={(e) => setAlternativeNames(e.target.value)}
          type="text"
          placeholder="Ex: Notebook, Notebook Computer"
          className="border-3 border-accent rounded-[10px] h-[70px] p-2 m-2 flex-1 focus:outline-white"
        />
      </div>
      <div className="w-[50%] h-[120px] flex flex-col">
        <label className="text-xl font-bold m-2">Price</label>
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="text"
          placeholder="Ex: 10000"
          className="border-3 border-accent rounded-[10px] h-[70px] p-2 m-2 flex-1 focus:outline-white"
        />
      </div>
      <div className="w-[33%] h-[120px] flex flex-col">
        <label className="text-xl font-bold m-2">Labelled Price</label>
        <select
          value={labelledPrice}
          onChange={(e) => setLabelledPrice(e.target.value)}
          type="text"
          placeholder="Ex: 10000"
          className="border-3 border-accent rounded-[10px] h-[70px] p-2 m-2 flex-1 focus:outline-white"
        >
          <option value="Others">Others</option>
          <option value="Laptops">Laptops</option>
          <option value="Desktops">Desktops</option>
          <option value="Printers">Printers</option>
          <option value="Accessories">Accessories</option>
          <option value="Networking">Networking</option>
          <option value="Printers">Printers</option>
          <option value="Accessories">Accessories</option>
          <option value="Networking">Networking</option>
        </select>
      </div>
      <div className="w-[33%] h-[120px] flex flex-col">
        <label className="text-xl font-bold m-2">Brand</label>
        <select
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="border-3 border-accent rounded-[10px] h-[70px] p-2 m-2 flex-1 focus:outline-white"
        >
          <option value="Generic">Generic</option>
          <option value="HP">HP</option>
          <option value="Dell">Dell</option>
          <option value="Lenovo">Lenovo</option>
          <option value="Acer">Acer</option>
          <option value="Asus">Asus</option>
          <option value="Apple">Apple</option>
        </select>
      </div>
      <div className="w-[33%] h-[120px] flex flex-col">
        <label className="text-xl font-bold m-2">Model</label>
        <input
          value={model}
          onChange={(e) => setModel(e.target.value)}
          type="text"
          placeholder="Ex: HP"
          className="border-3 border-accent rounded-[10px] h-[70px] p-2 m-2 flex-1 focus:outline-white"
        />
      </div>
      <div className="w-[25%] h-[120px] flex flex-col">
        <label className="text-xl font-bold m-2">Is Visible</label>
        <select
          value={isVisible}
          onChange={(e) => setIsVisible(e.target.value)}
          className="border-3 border-accent rounded-[10px] h-[70px] p-2 m-2 flex-1 focus:outline-white"
        >
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
      </div>
    </div>
  );
}
