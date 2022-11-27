export type RowProps = {
  photo: string;
  name: string;
  id: string;
  size: string;
};

export const Row = ({ photo, name, id, size }: RowProps) => {
  return (
    <div>
      <div>{photo}</div>
      <div>{name}</div>
    </div>
  );
};
