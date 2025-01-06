import { useAppSelector } from "@/store/hooks";
import Attributes from "../components/shared/Attributes";
import BreadCrumbs from "../components/shared/BreadCrumbs";
import Form from "../components/form/Form";

const ProductFinder = () => {
  const categories = useAppSelector((state) => state.categories);
  const lastCategory = categories.third || categories.second || categories.main;

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
          <div className="mb-5 text-zinc-400">
            <BreadCrumbs />
          </div>
          <Form />
        </div>
      </div>
      <Attributes />
    </main>
  );
};

export default ProductFinder;
