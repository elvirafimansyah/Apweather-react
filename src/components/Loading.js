import { useEffect, useState } from "react";
const Loading = () => {
  const [hide, setHide] = useState(true);
  return(
    <div class={`middle ${hide ? "hidden" : ""}`}>
      <div class="bar bar1"></div>
      <div class="bar bar2"></div>
      <div class="bar bar3"></div>
      <div class="bar bar4"></div>
      <div class="bar bar5"></div>
      <div class="bar bar6"></div>
      <div class="bar bar7"></div>
      <div class="bar bar8"></div>
    </div>
  )
}

export default Loading;