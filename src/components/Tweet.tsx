import type { FC } from 'react';
import { useEffect } from 'react';

interface TweetProps {
  id: string;
}

const Tweet: FC<TweetProps> = ({ id }) => {
  useEffect(() => {
    const scriptExists = document.querySelector(`script[src="https://platform.twitter.com/widgets.js"]`);

    if (!scriptExists) {
      const script = document.createElement('script');
      script.src = 'https://platform.twitter.com/widgets.js';
      script.async = true;
      document.body.appendChild(script);
    } else {
      refreshWidgets();
    }

    function refreshWidgets() {
      if (window.twttr) {
        window.twttr.widgets.load();
      }
    }
  }, []);

  return (
    <blockquote className="twitter-tweet">
      <a href={`https://twitter.com/alhrkn/status/${id}`}></a>
    </blockquote>
  );
};

export default Tweet;