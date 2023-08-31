import { useEffect } from "react";
const UseCustomHook = (counter) =>
  useEffect(() => {
    alert("UseEffect 1");
    if (counter > 0) {
      document.title = ` Chats (${counter})`;
    } else {
      document.title = `Chats`;
    }
  }, [counter]);

export default UseCustomHook;
