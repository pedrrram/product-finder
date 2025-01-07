import { ATTRIBUTES } from "@/constants/mockData";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { selectAttribute } from "@/store/slices/attributes.slice";
import { MutableRefObject, RefObject } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface IProps {
  lastChildRef: MutableRefObject<HTMLSpanElement> | RefObject<null>;
}

const AttributesSelectors = ({ lastChildRef }: IProps) => {
  const { selected: selectedAttributes } = useAppSelector(
    (state) => state.attributes
  );
  const selectedCategories = useAppSelector((state) => state.categories);
  const dispatch = useAppDispatch();

  // Calculate the number of attribute selectors to show - minimum 4 attribute selectors
  const totalSelectors = Math.max(1, selectedAttributes.length + 1);

  const getAvailableAttributes = (currentIndex: number) => {
    const selectedAttrs = new Set(selectedAttributes);
    return ATTRIBUTES.common.filter(
      (attr) =>
        !selectedAttrs.has(attr) || selectedAttributes[currentIndex] === attr
    );
  };

  const handleSelectAttribute = (index: number, value: string) => {
    dispatch(selectAttribute({ index, value }));
    // scroll to last selector
    if (lastChildRef.current) {
      setTimeout(() => {
        lastChildRef.current.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "end",
        });
      }, 10);
    }
  };

  return Array.from({ length: totalSelectors }, (_, index) => {
    const isDisabled =
      !selectedCategories.third ||
      (index > 0 && !selectedAttributes[index - 1]);

    if (ATTRIBUTES.common.length <= index || !selectedCategories.third)
      return null;
    return (
      <Select
        key={index}
        disabled={isDisabled}
        value={selectedAttributes[index] || ""}
        onValueChange={(value) => handleSelectAttribute(index, value)}
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
