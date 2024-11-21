import type { FC } from 'react';
import { useEffect } from 'react';

interface TweetProps {
  id: string;
}

const Tweet: FC<TweetProps> = ({ id }) => {
  useEffect(() => {
    // Load Twitter widget script
    const script = document.createElement('script');
    script.src = "https://platform.twitter.com/widgets.js";
    script.type = "text/javascript";
    script.crossOrigin = "anonymous";
    script.async = true;
    
    // Append script to document body
    document.body.appendChild(script);

    // Cleanup
    return () => {
      try {
        document.body.removeChild(script);
      } catch (e) {
        // Handle case where script was already removed
      }
    };
  }, []);

  return (
    <blockquote className="twitter-tweet">
      <a href={`https://x.com/alhrkn/status/${id}`}>
        Loading Tweet...
      </a>
    </blockquote>
  );
};

export default Tweet;