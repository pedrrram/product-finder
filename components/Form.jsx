import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { attributes, categories } from "@/constants/mockData";
import { useState } from "react";
import ResultDialog from "./ResultDialog";
import { getBreadcrumbs } from "@/lib/utils";

const Form = ({
  selectedAttributes,
  selectedCategories,
  onClear,
  onCategoryChange,
  onAttributeSelect,
  mainCatRef
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="w-full space-y-3 mb-5" ref={mainCatRef}>
        <Select
          value={selectedCategories.main}
          onValueChange={(val) => onCategoryChange("main", val)}
        >
          <SelectTrigger className="">
            <SelectValue placeholder="Main Category" />
          </SelectTrigger>
          <SelectContent avoidCollisions>
            {categories.main.map((cat) => (
              <SelectItem key={cat} value={cat}>
                {cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select
          disabled={!selectedCategories.main}
          value={selectedCategories.second}
          onValueChange={(val) => onCategoryChange("second", val)}
        >
          <SelectTrigger className="">
            <SelectValue placeholder="Second Category" />
          </SelectTrigger>
          <SelectContent>
            {categories[selectedCategories.main]?.map((cat) => (
              <SelectItem key={cat} value={cat}>
                {cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select
          disabled={!selectedCategories.second}
          value={selectedCategories.third}
          onValueChange={(val) => onCategoryChange("third", val)}
        >
          <SelectTrigger className="">
            <SelectValue placeholder="Third" />
          </SelectTrigger>
          <SelectContent>
            {categories[selectedCategories.second]?.map((cat) => (
              <SelectItem key={cat} value={cat}>
                {cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select
          disabled={!selectedCategories.third}
          onValueChange={onAttributeSelect}
          value=""
        >
          <SelectTrigger className="">
            <SelectValue placeholder="Attributes" />
          </SelectTrigger>
          <SelectContent>
            {attributes.common.map((attr) => (
              <SelectItem key={attr} value={attr}>
                {attr}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center">
        <button
          onClick={() => {
            selectedAttributes.length > 0 && setIsModalOpen(true);
          }}
          className="flex-1 bg-emerald-700 hover:bg-emerald-700 text-zinc-900 px-4 py-2.5 rounded-xl outline-none font-medium"
        >
          Find Prodcut
        </button>
        <button
          onClick={onClear}
          className="bg-zinc-950  text-rose-800 border border-rose-800 hover:border-rose-900 hover:text-rose-900 px-4 py-2.5 rounded-xl outline-none font-medium ml-3"
        >
          Clear
        </button>
      </div>
      <ResultDialog
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        selectedAttributes={selectedAttributes}
        breadcrumbs={getBreadcrumbs(selectedCategories)}
      />
    </>
  );
};

export default Form;
