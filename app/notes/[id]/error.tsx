'use client';

type Props = {
    error: Error;
    reset: () => void;
};

const Error = ({ error, reset }: Props) => {
  return (
      <div>
        <h2>Could not fetch note details.</h2>
          <p>{error.message}</p>
          <button onClick={reset}>Try again</button>
      </div>
  );
};

export default Error;