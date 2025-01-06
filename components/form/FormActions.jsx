import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { clearAttributes } from "@/store/slices/attributes.slice";
import { selectCategory } from "@/store/slices/categories.slice";

const FormActions = ({ setIsModalOpen }) => {
  const attributes = useAppSelector((state) => state.attributes);
  const dispatch = useAppDispatch();

  const handleClearForm = () => {
    dispatch(selectCategory({ main: "", second: "", third: "" }));
    dispatch(clearAttributes());
  };
  return (
    <div className="flex items-center">
      <button
        onClick={() => {
          attributes.selected.length > 3 && setIsModalOpen(true);
        }}
        className="flex-1 bg-emerald-700 hover:bg-emerald-700 text-zinc-900 px-4 py-2.5 rounded-xl outline-none font-medium"
      >
        Find Product
      </button>
      <button
        onClick={handleClearForm}
        className="bg-zinc-950 text-rose-800 border border-rose-800 hover:border-rose-900 hover:text-rose-900 px-4 py-2.5 rounded-xl outline-none font-medium ml-3"
      >
        Clear
      </button>
    </div>
  );
};

export default FormActions;
