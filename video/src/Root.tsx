import { Composition } from "remotion";
import { CommerceTour, DURATION } from "./CommerceTour";

export const Root = () => (
  <Composition
    id="CommerceTour"
    component={CommerceTour}
    durationInFrames={DURATION}
    fps={30}
    width={1920}
    height={1080}
  />
);
