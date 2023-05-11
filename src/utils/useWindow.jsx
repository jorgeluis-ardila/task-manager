import React from "react";

export function useWindow (){
  const [isMobile, setIsMobile] = React.useState(false);

  const detectSize = () => {
    const container = document.getElementById('root');
    setIsMobile(window.innerWidth <= 768 ? true : false);
    container.style.height = `${document.documentElement.clientHeight}px`;
  }
  
  return {
    isMobile,
    detectSize
  }
}