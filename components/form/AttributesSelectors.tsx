import { ATTRIBUTES } from "@/constants/mockData";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { selectAttribute } from "@/store/slices/attributes.slice";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { MutableRefObject, RefObject } from "react";

interface IProps {
  mainCatRef: MutableRefObject<HTMLSpanElement> | RefObject<null>;
}

const AttributesSelectors = ({ mainCatRef }: IProps) => {
  const { selected: selectedAttributes } = useAppSelector(
    (state) => state.attributes
  );
  const selectedCategories = useAppSelector((state) => state.categories);
  const dispatch = useAppDispatch();

  // Calculate the number of attribute selectors to show - minimum 4 attribute selectors
  const totalSelectors = Math.max(4, selectedAttributes.length + 1);

  const getAvailableAttributes = (currentIndex: number) => {
    const selectedAttrs = new Set(selectedAttributes);
    return ATTRIBUTES.common.filter(
      (attr) =>
        !selectedAttrs.has(attr) || selectedAttributes[currentIndex] === attr
    );
  };

  const handleSelectCategory = (index: number, value: string) => {
    dispatch(selectAttribute({ index, value }));
    if (mainCatRef?.current) {
      mainCatRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return Array.from({ length: totalSelectors }, (_, index) => {
    const isDisabled =
      !selectedCategories.third ||
      (index > 0 && !selectedAttributes[index - 1]);

    if (ATTRIBUTES.common.length <= index) return null;
    return (
      <Select
        key={index}
        disabled={isDisabled}
        value={selectedAttributes[index] || ""}
        onValueChange={(value) => handleSelectCategory(index, value)}
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
  });
};

export default AttributesSelectors;
