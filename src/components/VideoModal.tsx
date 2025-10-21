import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const VideoModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        size="lg"
        className="bg-primary hover:bg-primary/90 text-white rounded-full w-16 h-16 p-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      >
        <Play className="h-8 w-8 ml-1" />
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl p-0">
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Company Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default VideoModal;
