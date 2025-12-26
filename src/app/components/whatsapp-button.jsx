import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
    const phoneNumber = "6287862207901";
    const message = "Halo, saya ingin bertanya tentang layanan Anda!";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
                fixed bottom-5 left-5 z-[1000]
                bg-[#4d9952] text-white
                w-14 h-14 rounded-full
                flex items-center justify-center
                text-2xl shadow-md
                transition-transform duration-300 ease-out
                hover:scale-110
            "
        >
            <FaWhatsapp />
        </a>
    );
};

export default WhatsappButton;