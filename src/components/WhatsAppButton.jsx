import { PHONE_NUMBER } from "../data/servicesData";

export default function WhatsAppButton() {
    const defaultMessage = encodeURIComponent("¡Hola! Quiero agendar una cita.");
    const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${defaultMessage}`;

    return (
        <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-600 text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center text-3xl z-50 transition transform hover:scale-110">
            <i className="fa-brands fa-whatsapp"></i> </a>  );
}