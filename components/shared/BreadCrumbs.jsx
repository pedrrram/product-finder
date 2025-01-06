import { getBreadcrumbs } from "@/lib/utils";
import { useAppSelector } from "@/store/hooks";

const BreadCrumbs = () => {
  const categories = useAppSelector((state) => state.categories);
  return <p className="text-zinc-300 text-sm">{getBreadcrumbs(categories)}</p>;
};

export default BreadCrumbs;
