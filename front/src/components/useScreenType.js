import { useMediaQuery } from "react-responsive";

export const UseScreenType = () => {
  const screen3 = useMediaQuery({ minWidth: 1024 });
  const screen2 = useMediaQuery({ minWidth: 768 });
  const screen1 = useMediaQuery({ minWidth: 425 });

  if (screen3) {
    return "full-screen";
  }
  if (screen2) {
    return "medium";
  }
  if (screen1) {
    return "small";
  }
};
