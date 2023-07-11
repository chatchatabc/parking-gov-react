type Props = {
  src: string;
  alt?: string;
};

function ImageComp(props: Props) {
  return <img className="w-full h-full object-cover" {...props} />;
}

export default ImageComp;
