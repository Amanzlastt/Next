import Navbar from'@/app/components/Navbar';
// import Home from '.page
import '../globals.css';

export default function Layout ( { children }: Readonly<{children: React.ReactNode }>){
    return (
        <main>
            <Navbar/>
            {/* <Home/> */}
            {children}
        </main>
    )
}


