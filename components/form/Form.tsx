import { useRef, useState } from "react";
import AttributesSelectors from "./AttributesSelectors";
import CategoriesSelectors from "./CategoriesSelectors";
import FormActions from "./FormActions";
import ResultDialog from "../ResultDialog";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

const Form = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const lastChildRef = useRef(null);

  return (
    <>
      <ScrollArea className="h-48 relative overflow-y-hidden p-4">
        <div className="w-full space-y-3 min-h-full">
          <CategoriesSelectors lastChildRef={lastChildRef} />
          <AttributesSelectors lastChildRef={lastChildRef} />
          <div className="h-[15px]" ref={lastChildRef}></div>
        </div>
        <ScrollBar />
      </ScrollArea>
      <FormActions setIsModalOpen={setIsModalOpen} />
      <ResultDialog isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};

export default Form;
