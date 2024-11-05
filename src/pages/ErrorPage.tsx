import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError() as { status: string; statusText: string; message: string };

  return (
    <>
      {error.status === '404' &&
        <div>
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <h2>{error?.status}</h2>
          <p>
            <i>{error?.statusText || error?.message}</i>
          </p>
        </div>
      }
    </>
  );
}
