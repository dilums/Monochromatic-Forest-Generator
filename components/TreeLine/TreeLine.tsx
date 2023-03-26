import Tree from "components/Tree";
import { random, cut, rand } from "@/utils";
type Props = {
  color: string;
  scale: number;
  count: number;
};
export default function TreeLine({ color, scale, count }: Props) {
  return (
    <>
      {cut(1280, count)
        .filter(() => random() > 0.25)
        .map((i) => (
          <Tree x={rand(-100, 1280)} color={color} scale={scale} key={i} />
        ))}
    </>
  );
}
