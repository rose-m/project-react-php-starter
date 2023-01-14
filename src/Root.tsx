import { Outlet } from 'react-router-dom';

export function Root() {
  return (
    <>
      <h1 className='font-extrabold text-xl text-center my-10'>Root</h1>
      <Outlet />
    </>
  );
}
