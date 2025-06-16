// SSR False
import CounterUp from "./CounterUp";
// const CounterUp = dynamic(() => import("./CounterUp"), {
//   ssr: false,
// });

export default function CounterNumber({ count }) {
  return (
    <>
      <CounterUp count={count} time={3} />
    </>
  );
}
