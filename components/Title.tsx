import { Rock_Salt } from "next/font/google";

const sacramento = Rock_Salt({ subsets: ["latin"], weight: "400" });

type Props = {
    classnames: string;
    text: string;
}

const Title = ({classnames, text}: Props) => {
  return (
    <h1
      className={`${sacramento.className} ${classnames}  text-sky-600`}>
      {text}
    </h1>
  );
};

export default Title;
