import { useEffect } from "react";

export default function Give() {
  useEffect(() => {
    window.location.replace("https://yourgivinglink.com");
  }, []);

  return null;
}