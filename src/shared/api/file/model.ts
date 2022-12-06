export const readFile = (file: File) => {
  let fileData;

  const handleLoad = () => {
    fileData = reader.result as string;
  };

  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.addEventListener("load", handleLoad);

  return fileData;
};
