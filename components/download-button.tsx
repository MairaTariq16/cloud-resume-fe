import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";

const DownloadButton = () => {
  const downloadResume = async () => {
    // TODO: Implement download resume functionality
  };
  const { toast } = useToast();
  return (
    <>
      <Button
        onClick={() => {
          toast({
            title: "This feature is not implemented yet!",
            variant: "information",
          });
        }}
        className="bg-gr bg-primary text-secondary my-5 before:ease relative overflow-hidden border transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-primary hover:before:-translate-x-40"
      >
        Download Resume
      </Button>
    </>
  );
};

export default DownloadButton;
