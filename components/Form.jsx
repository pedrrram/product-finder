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
  attributeSelections,
  selectedCategories,
  onClear,
  onCategoryChange,
  onAttributeSelect,
  mainCatRef,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getAvailableAttributes = (currentIndex) => {
    const selectedAttrs = new Set(attributeSelections);
    return attributes.common.filter(
      (attr) =>
        !selectedAttrs.has(attr) || attributeSelections[currentIndex] === attr
    );
  };

  // Calculate the number of attribute selectors to show - minimum 4 attribute selectors
  const totalSelectors = Math.max(4, attributeSelections.length + 1);
  // generate attribute selectors
  const attributeSelectors = Array.from(
    { length: totalSelectors },
    (_, index) => {
      const isDisabled =
        !selectedCategories.third ||
        (index > 0 && !attributeSelections[index - 1]);

      if (attributes.common.length <= index) return null;
      return (
        <Select
          key={index}
          disabled={isDisabled}
          value={attributeSelections[index] || ""}
          onValueChange={(val) => onAttributeSelect(index, val)}
        >
          <SelectTrigger>
            <SelectValue placeholder={`Attribute ${index + 1}`} />
          </SelectTrigger>
          <SelectContent>
            {getAvailableAttributes(index).map((attr) => (
              <SelectItem key={attr} value={attr}>
                {attr}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      );
    }
  );

  return (
    <>
      <div className="w-full space-y-3 mb-5" ref={mainCatRef}>
        <Select
          value={selectedCategories.main}
          onValueChange={(val) => onCategoryChange("main", val)}
        >
          <SelectTrigger>
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
          <SelectTrigger>
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
          <SelectTrigger>
            <SelectValue placeholder="Third Category" />
          </SelectTrigger>
          <SelectContent>
            {categories[selectedCategories.second]?.map((cat) => (
              <SelectItem key={cat} value={cat}>
                {cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {attributeSelectors}
      </div>
      <div className="flex items-center">
        <button
          onClick={() => {
            attributeSelections.length > 3 && setIsModalOpen(true);
          }}
          className="flex-1 bg-emerald-700 hover:bg-emerald-700 text-zinc-900 px-4 py-2.5 rounded-xl outline-none font-medium"
        >
          Find Product
        </button>
        <button
          onClick={onClear}
          className="bg-zinc-950 text-rose-800 border border-rose-800 hover:border-rose-900 hover:text-rose-900 px-4 py-2.5 rounded-xl outline-none font-medium ml-3"
        >
          Clear
        </button>
      </div>
      <ResultDialog
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        selectedAttributes={attributeSelections}
        breadcrumbs={getBreadcrumbs(selectedCategories)}
      />
    </>
  );
};

export default Form;
