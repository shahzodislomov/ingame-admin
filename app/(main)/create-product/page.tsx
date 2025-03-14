"use client";

import React, { FormEvent, useState } from "react";

const CreateProductPage = () => {
  const [name_ru, setNameRu] = useState("");
  const [name_uz, setNameUz] = useState("");
  const [description_ru, setDescriptionRu] = useState("");
  const [description_uz, setDescriptionUz] = useState("");
  const [price_usd, setPriceUsd] = useState("");
  const [price_uzs, setPriceUzs] = useState("");
  const [image, setImage] = useState<null | File>(null);
  const [slug, setSlug] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({
      name_ru,
      name_uz,
      description_ru,
      description_uz,
      price_usd,
      price_uzs,
      image,
      slug,
    });
  };

  return (
    <div className="h-screen overflow-scroll bg-slate-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Create New Product</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-lg font-semibold" htmlFor="name_ru">
            Product Name (RU)
          </label>
          <input
            type="text"
            id="name_ru"
            value={name_ru}
            onChange={(e) => setNameRu(e.target.value)}
            className="w-full p-3 bg-slate-800 text-white rounded-lg"
            placeholder="Enter product name in Russian"
            required
          />
        </div>

        <div>
          <label className="block text-lg font-semibold" htmlFor="name_uz">
            Product Name (UZ)
          </label>
          <input
            type="text"
            id="name_uz"
            value={name_uz}
            onChange={(e) => setNameUz(e.target.value)}
            className="w-full p-3 bg-slate-800 text-white rounded-lg"
            placeholder="Enter product name in Uzbek"
            required
          />
        </div>
        <div>
          <label
            className="block text-lg font-semibold"
            htmlFor="description_ru"
          >
            Product Description (RU)
          </label>
          <textarea
            id="description_ru"
            value={description_ru}
            onChange={(e) => setDescriptionRu(e.target.value)}
            className="w-full p-3 bg-slate-800 text-white rounded-lg"
            placeholder="Enter product description in Russian"
            required
          />
        </div>

        <div>
          <label
            className="block text-lg font-semibold"
            htmlFor="description_uz"
          >
            Product Description (UZ)
          </label>
          <textarea
            id="description_uz"
            value={description_uz}
            onChange={(e) => setDescriptionUz(e.target.value)}
            className="w-full p-3 bg-slate-800 text-white rounded-lg"
            placeholder="Enter product description in Uzbek"
            required
          />
        </div>

        <div>
          <label className="block text-lg font-semibold" htmlFor="price_usd">
            Product Price (USD)
          </label>
          <input
            type="number"
            id="price_usd"
            value={price_usd}
            onChange={(e) => setPriceUsd(e.target.value)}
            className="w-full p-3 bg-slate-800 text-white rounded-lg"
            placeholder="Enter product price in USD"
            required
          />
        </div>

        <div>
          <label className="block text-lg font-semibold" htmlFor="price_uzs">
            Product Price (UZS)
          </label>
          <input
            type="number"
            id="price_uzs"
            value={price_uzs}
            onChange={(e) => setPriceUzs(e.target.value)}
            className="w-full p-3 bg-slate-800 text-white rounded-lg"
            placeholder="Enter product price in UZS"
            required
          />
        </div>

        <div>
          <label className="block text-lg font-semibold" htmlFor="slug">
            Product Slug
          </label>
          <input
            type="text"
            id="slug"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className="w-full p-3 bg-slate-800 text-white rounded-lg"
            placeholder="Enter product slug"
            required
          />
        </div>
        <div>
          <label className="block text-lg font-semibold" htmlFor="image">
            Product Image
          </label>
          <input
            type="file"
            id="image"
            onChange={handleImageChange}
            className="w-full p-3 bg-slate-800 text-white rounded-lg"
            accept="image/*"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
        >
          Create Product
        </button>
      </form>
    </div>
  );
};

export default CreateProductPage;
