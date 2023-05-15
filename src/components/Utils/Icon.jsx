import sprites from "../../assets/sprites/sprites.svg";

export const Icon = ({ id, ...props }) => {
  return (
    <svg {...props}>
      <use href={`${sprites}#${id}`} />
    </svg>
  );
};
