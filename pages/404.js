import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import style from "../styles/404.module.scss"

export default function NotFound() {
    return (
        <>
            <Navbar />
            <main className={style.main}>
                <div className={style.container}>
                    <h1 className={`${style.code} gradientTitle`}>404</h1>
                    <h1 className={`${style.message} gradientTitle`}>This page could not be found.</h1>
                </div>
            </main>
            <Footer />
        </>
    )
}