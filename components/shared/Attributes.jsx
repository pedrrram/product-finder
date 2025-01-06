import { useAppSelector } from "@/store/hooks";
import Badge from "./Badge";

const Attributes = () => {
  const { selected: attributes } = useAppSelector((state) => state.attributes);
  return (
    <div className="flex flex-wrap justify-center sm:justify-start max-w-sm sm:max-w-full gap-4 mt-5">
      {attributes.map((att, index) => (
        <Badge key={index}>{att}</Badge>
      ))}
    </div>
  );
};

export default Attributes;
