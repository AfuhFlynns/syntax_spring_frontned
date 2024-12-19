import { Loader2Icon } from "lucide-react";

const CustomLoader1 = ({ customClassName }: { customClassName?: string }) => {
  return <Loader2Icon className={`loader ${customClassName}`} />;
};

export default CustomLoader1;
