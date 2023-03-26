import { useState, useEffect } from "react";
import Main from "@/components/Main";
import RefreshButton from "@/components/RefreshButton";
import randomPallette from "@/utils/randomPallette";
import { random } from "@/utils";
import SEO from "components/common/SEO";

export default function Index() {
  const [{ key, pallette }, setConfig] = useState<{
    key: number;
    pallette: string[];
  }>({ key: 0, pallette: [] });
  const [isClient, setIsClient] = useState(false);
  const onClick = () => {
    setConfig({ key: random(), pallette: randomPallette() });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setConfig({ key: random(), pallette: randomPallette() });
      setIsClient(true);
    }
  }, []);

  if (!isClient) {
    return null;
  }
  return (
    <>
      <SEO title="Landscape Generator | Home" slug="/" />
      <RefreshButton onClick={onClick} pallette={pallette} />
      <Main key={key} pallette={pallette} />
    </>
  );
}
