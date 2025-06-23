'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useSession, signIn, signOut } from 'next-auth/react';

const Navbar = () => {
  const { data: session, status } = useSession();

  return (
    <header className='px-5 py-3 bg-white shadow-md font-work-sans'>
      <nav className='flex justify-between items-center'>
        <Link href='/'>
          <Image src='/logo.png' alt='logo' width={144} height={30} />
        </Link>

        <div className='flex items-center gap-5 text-black'>
          {status === 'loading' ? (
            <span>Loading...</span>
          ) : session?.user ? (
            <>
              <Link href='/startup/create'>
                <span>Create</span>
              </Link>

              <button onClick={() => signOut()} className="text-sm px-2 py-1 border rounded">
                Logout
              </button>

              <Link href={`/user/${session.user.id}`}>
                <span>{session.user.name}</span>
              </Link>
            </>
          ) : (
            <button onClick={() => signIn('github')} className="text-sm px-2 py-1 border rounded">
              Login
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
