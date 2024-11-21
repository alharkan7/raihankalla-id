import React, { useEffect } from 'react';

function TwitterScript() {
    useEffect(() => {
        <script async
            src="https://platform.twitter.com/widgets.js"
            charset="utf-8">
        </script>
    }, []);

    return null;
}

export default TwitterScript;

