"use client";
import { useRef, useState } from "react";
import Badge from "@/components/Badge";
import Form from "@/components/Form";
import { getBreadcrumbs } from "@/lib/utils";

const ProductFinder = () => {
  const [selectedCategories, setSelectedCategories] = useState({
    main: "",
    second: "",
    third: "",
  });
  const [attributeSelections, setAttributeSelections] = useState([]);
  const mainCatRef = useRef(null);

  const handleCategoryChange = (level, value) => {
    const newCategories = { ...selectedCategories };

    if (level === "main") {
      newCategories.main = value;
      newCategories.second = "";
      newCategories.third = "";
    } else if (level === "second") {
      newCategories.second = value;
      newCategories.third = "";
    } else {
      newCategories.third = value;
      if (mainCatRef.current) {
        mainCatRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
    setSelectedCategories(newCategories);
    if (level === "main") setAttributeSelections([]);
  };

  const handleAttributeSelect = (index, value) => {
    const newSelections = [...attributeSelections];
    newSelections[index] = value;
    setAttributeSelections(newSelections);
  };

  const handleClearForm = () => {
    setSelectedCategories({ main: "", second: "", third: "" });
    setAttributeSelections([]);
  };

  const lastCategory =
    selectedCategories.third ||
    selectedCategories.second ||
    selectedCategories.main;

  return (
    <main className="flex flex-col items-center justify-center py-5">
      <div className="flex flex-col sm:flex-row items-center sm:justify-between max-w-screen-lg gap-5">
        <div className="h-80 w-80 sm:w-[400px] sm:h-[400px] bg-zinc-900 rounded-3xl flex flex-col items-center justify-center self-start">
          <span className="text-6xl font-thin text-emerald-600 mb-5">
            Qpket
          </span>
          <span className="text-zinc-300">
            {lastCategory && `${lastCategory}'s photo`}
          </span>
        </div>
        <div className="h-full flex-1 flex flex-col justify-between">
          <h1 className="text-2xl font-bold mb-3 text-zinc-200">
            Qpket Product Finder
          </h1>
          <p className="mb-5 text-zinc-400">
            {getBreadcrumbs(selectedCategories)}
          </p>
          <Form
            selectedCategories={selectedCategories}
            attributeSelections={attributeSelections}
            onClear={handleClearForm}
            onCategoryChange={handleCategoryChange}
            onAttributeSelect={handleAttributeSelect}
            mainCatRef={mainCatRef}
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center sm:justify-start max-w-sm sm:max-w-full gap-4 mt-5">
        {attributeSelections.map((att, index) => (
          <Badge key={index}>{att}</Badge>
        ))}
      </div>
    </main>
  );
};

export default ProductFinder;
