import { PHONE_NUMBER } from "../data/servicesData";

export default function Navbar() {
    const waLink = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent("¡Hola! Me gustaria hacer una cita.")}`;

    return (
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-rose-100">
            <a ></a>
        </header>
    )
}