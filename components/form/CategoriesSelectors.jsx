import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { categories as CategoriesDATA } from "@/constants/mockData";
import { selectCategory } from "@/store/slices/categories.slice";
import { clearAttributes } from "@/store/slices/attributes.slice";

const CategoriesSelectors = ({mainCatRef}) => {
  const selectedCategories = useAppSelector((state) => state.categories);
  const dispatch = useAppDispatch();

  const handleCategoryChange = (level, value) => {
    if (level === "main") {
      dispatch(
        selectCategory({
          main: value,
          second: "",
          third: "",
        })
      );
    } else if (level === "second") {
      dispatch(
        selectCategory({
          second: value,
          third: "",
        })
      );
    } else {
      dispatch(
        selectCategory({
          third: value,
        })
      );
      // scroll to main category
      if (mainCatRef.current) {
        mainCatRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
    if (level === "main") dispatch(clearAttributes());
  };
  return (
    <>
      <Select
        value={selectedCategories.main}
        onValueChange={(val) => handleCategoryChange("main", val)}
      >
        <SelectTrigger>
          <SelectValue ref={mainCatRef} placeholder="Main Category" />
        </SelectTrigger>
        <SelectContent>
          {CategoriesDATA.main.map((cat) => (
            <SelectItem key={cat} value={cat}>
              {cat}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select
        disabled={!selectedCategories.main}
        value={selectedCategories.second}
        onValueChange={(val) => handleCategoryChange("second", val)}
      >
        <SelectTrigger>
          <SelectValue placeholder="Second Category" />
        </SelectTrigger>
        <SelectContent>
          {CategoriesDATA[selectedCategories.main]?.map((cat) => (
            <SelectItem key={cat} value={cat}>
              {cat}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select
        disabled={!selectedCategories.second}
        value={selectedCategories.third}
        onValueChange={(val) => handleCategoryChange("third", val)}
      >
        <SelectTrigger>
          <SelectValue placeholder="Third Category" />
        </SelectTrigger>
        <SelectContent>
          {CategoriesDATA[selectedCategories.second]?.map((cat) => (
            <SelectItem key={cat} value={cat}>
              {cat}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
};

export default CategoriesSelectors;
