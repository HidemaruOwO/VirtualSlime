import { useEffect, useRef } from "react";

const PageCard = ({ url }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    if (iframeRef.current) {
      const encodedUrl = encodeURIComponent(url);
      const iframeSrc = `https://hatenablog-parts.com/embed?url=${encodedUrl}`;
      iframeRef.current.src = iframeSrc;
    }
  }, [url]);

  return (
    <iframe
      ref={iframeRef}
      className="m-auto w-full"
      frameBorder="0"
      scrolling="no"
      loading="lazy"
    />
  );
};

export default PageCard;
