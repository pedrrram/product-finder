import { useRef, useState } from "react";
import AttributesSelectors from "./AttributesSelectors";
import CategoriesSelectors from "./CategoriesSelectors";
import FormActions from "./FormActions";
import ResultDialog from "../ResultDialog";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

const Form = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const mainCatRef = useRef(null);

  return (
    <>
      <ScrollArea className="h-72 relative overflow-y p-5">
        <div className="w-full space-y-3 mb-5">
          <CategoriesSelectors mainCatRef={mainCatRef} />
          <AttributesSelectors mainCatRef={mainCatRef} />
        </div>
        <ScrollBar />
      </ScrollArea>
      <FormActions setIsModalOpen={setIsModalOpen} />
      <ResultDialog isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};

export default Form;
