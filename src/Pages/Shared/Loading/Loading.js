import React from 'react';

const Loading = () => {
    return (
<span class="flex h-3 w-3 mx-auto mt-40 mb-40">
  <span class="animate-ping absolute inline-flex h-10 w-10 rounded-full bg-sky-400 opacity-75"></span>
</span>
    );
};

export default Loading;