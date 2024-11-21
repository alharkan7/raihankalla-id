import React, { useEffect } from 'react';

interface TwitterEmbedProps {
  tweetUrl: string;
}

const TwitterEmbed: React.FC<TwitterEmbedProps> = ({ tweetUrl }) => {
  useEffect(() => {
    // Dynamically load the Twitter widget script
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    script.charset = 'utf-8';
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <blockquote
      className="twitter-tweet"
      data-dnt="true"
      style={{ textAlign: 'center' }}
    >
      <a href={tweetUrl}></a>
    </blockquote>
  );
};

export default TwitterEmbed;
