import Image from "next/image";
export const TitleLogo = ({ title, caption, className }) => {
  return (
    // <h1 className={`${className}  title-logo`}>
    //   <span>{caption}</span>
    //   {title}
    // </h1>
    <Image src="/images/pipralogo.png" width={155} height={120} />
  );
};

export const TitleSm = ({ title }) => {
  return <h1 className="titleSm">{title}</h1>;
};
export const Title = ({ title, className }) => {
  return <h1 className={`${className} title`}>{title}</h1>;
};
