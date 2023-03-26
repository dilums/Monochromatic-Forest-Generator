import Animal from "components/Animal";
import Bird from "components/Bird";
import Grass from "components/Grass";
import TreeLine from "components/TreeLine";
import { rand, range, random } from "@/utils";

type Props = {
  pallette: string[];
};
export default function Main({ pallette }: Props) {
  return (
    <div className="container" style={{ background: pallette[5] }}>
      <svg id="svg" viewBox="0 0 1280 640" className="svg-main">
        <g clipPath="url(#clip0)" transform={`translate(${rand(950, -150)},0)`}>
          <circle cx="262" cy="187" r="148" fill={pallette[6]} />
          <circle cx="262" cy="187" r="110.863" fill={pallette[7]} />
          <circle cx="262" cy="187" r="85.1956" fill={pallette[8]} />
          <circle cx="262" cy="187" r="60.6199" fill={pallette[9]} />
        </g>
        {range(5)
          .filter(() => random() < 0.75)
          .map((i) => (
            <Bird color={pallette[4]} key={i} />
          ))}
        <TreeLine color={pallette[4]} scale={0.6} count={16} />
        <Animal color={pallette[4]} scale={0.4} />
        <TreeLine color={pallette[3]} scale={0.8} count={8} />
        <Animal color={pallette[3]} scale={0.6} />
        <TreeLine color={pallette[2]} scale={1} count={1} />
        <Animal color={pallette[2]} scale={0.8} />
        <TreeLine color={pallette[1]} scale={1.2} count={3} />
        <Animal color={pallette[0]} />
        <rect y="640" width="1280" height="16" fill={pallette[0]} />
        <Grass color={pallette[0]} />
        <defs>
          <clipPath id="clip0">
            <rect width="1280" height="640" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
