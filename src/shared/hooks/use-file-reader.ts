import { useEffect, useState } from "react";

export const useFileReader = (file: File) => {
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    const handleLoad = async () => {
      const imageData = reader.result as string;
      setImage(imageData);
    }

    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.addEventListener("load", handleLoad);

    return () => {
      reader.removeEventListener("load", handleLoad);
    };
  }, [file]);

  return image;
};
