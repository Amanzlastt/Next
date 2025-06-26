// app/components/Navbar.tsx
import Link from 'next/link';
import Image from 'next/image';
import { auth, signIn, signOut } from '@/auth'; // or '@/auth' depending on your path

const Navbar = async () => {
  const session = await auth();

  return (
    <header className='bg-white py-3 px-5'>
      <nav className='flex justify-between items-center text-black'>
        <Link href='/'>
          <Image src='/logo.png' alt='logo' width={44} height={10} />
        </Link>

        <div className='flex items-center gap-5'>
          {session?.user ? (
            <>
              <Link href='/startup/create'>Create</Link>

              <form action={async () => {
                "use server";
                await signOut();
              }}>
                <button type='submit' className="text-sm px-2 py-1 border rounded">
                  Logout
                </button>
              </form>

              <Link href={`/user/${session.user.id}`}>
                <span>{session.user.name}</span>
              </Link>
            </>
          ) : (
            <form action={async () => {
              "use server";
              await signIn("github");
            }}>
              <button type='submit' className="text-sm px-2 py-1 border rounded">
                Login
              </button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
