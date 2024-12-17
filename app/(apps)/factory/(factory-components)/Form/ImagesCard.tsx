import { Button } from "@/ui/button";
import { Card, CardContent } from "@/ui/card";
import { X } from "lucide-react";
import { useState } from "react";

interface ImagesCardProps {
  imageSrc: string;
}

export const ImagesCard = ({ imageSrc }: ImagesCardProps) => {
  const [isImageError, setIsImageError] = useState(false);

  const stockImage =
    "https://i.pinimg.com/736x/a6/1c/e6/a61ce67d398fa6c109267c67a92eb7a1.jpg";

  return (
    <Card className="items-center">
      <CardContent className="p-0 items-center ">
        <img
          src={isImageError ? stockImage : imageSrc}
          alt="Product image"
          className="rounded-md w-24 h-24"
          onError={() => setIsImageError(true)}
        />
      </CardContent>
      <Button size={"icon"} variant={"ghost"}>
        <X />
      </Button>
    </Card>
  );
};
