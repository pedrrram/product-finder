import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import Badge from "./Badge";

const ResultDialog = ({
  isModalOpen,
  setIsModalOpen,
  selectedAttributes,
  breadcrumbs,
}) => {
  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogContent className="max-w-xs sm:max-w-3xl bg-zinc-900 text-gray-100 border border-zinc-800 rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-zinc-500">Matching Products</DialogTitle>
        </DialogHeader>
        <div className="bg-zinc-800 p-4 border rounded-xl border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-semibold text-sm text-zinc-500 mb-2">
              Selected Categories:
            </h3>
            <p className="text-zinc-300 text-sm">{breadcrumbs}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {selectedAttributes.map((attr) => (
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
