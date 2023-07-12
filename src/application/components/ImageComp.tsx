type Props = {
  src: string;
  alt?: string;
  className: string;
};

function ImageComp(props: Props) {
  return (
    <img
      onError={(e) => {
        e.currentTarget.src = "/images/lto.png";
      }}
      {...props}
    />
  );
}

export default ImageComp;
