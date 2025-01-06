import { useAppSelector } from "@/store/hooks";
import Badge from "./shared/Badge";
import BreadCrumbs from "./shared/BreadCrumbs";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

interface IProps {
  isModalOpen: boolean;
  setIsModalOpen: (state: boolean) => void;
}

const ResultDialog = ({ isModalOpen, setIsModalOpen }: IProps) => {
  const { selected: attributes } = useAppSelector((state) => state.attributes);
  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogContent
        className="max-w-xs sm:max-w-3xl bg-zinc-900 text-gray-100 border border-zinc-800 rounded-xl"
        aria-describedby={undefined}
      >
        <DialogHeader>
          <DialogTitle className="text-zinc-500">Matching Products</DialogTitle>
        </DialogHeader>
        <div className="bg-zinc-800 p-4 border rounded-xl border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="">
            <h3 className="font-semibold text-sm text-zinc-500 mb-2">
              Selected Categories:
            </h3>
            <BreadCrumbs />
          </div>
          <div className="flex flex-wrap gap-2 flex-1 justify-center">
            {attributes.map((attr) => (
              <Badge key={attr} className="bg-emerald-900 text-xs">
                {attr}
              </Badge>
            ))}
          </div>
        </div>
        <p className="text-sm text-zinc-400">show maching product here...</p>
      </DialogContent>
    </Dialog>
  );
};

export default ResultDialog;
