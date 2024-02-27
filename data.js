import { Github, Instagram, Mail, Phone } from "lucide-react";

export const data = {
    name: "Thiago Barreto Rodrigues",
    formed: "Ciência da Computação",
    avatar: "https://github.com/Thiago-Barreto-R.png",
    cards: [
        {
            id: 1,
            title: "Meu portfolio",
            url: "",
            image: "",
            target: "_blank"
        },
        {
            id: 2,
            title: "Meu CV",
            url: "./cv.pdf",
            image: "",
            cv_download: "Thiago_Barreto_R.pdf",
            target: "_self"
        },
        {
            id: 3,
            title: "Projetos",
            url: "./cv.pdf",
            image: "",
            cv_download: "Thiago_Barreto_R.pdf",
            target: "_self",
        },
    ],
    links: [
        {
            id: 1,
            icon: Github,
            url: "#",
            target: "_blank"
        },
        {
            id: 2,
            icon: Instagram,
            url: "#",
            target: "_blank"
        },
        {
            id: 3,
            icon: Mail,
            url: "mailto:tabrreto585@gmail.com",
            target: "_self"
        },
        {
            id: 4,
            icon: Phone,
            url: `https://wa.me/${import.meta.env.VITE_PHONE}?text=Olá,%20gostaria%20de%20mais%20informações.`,
            target: "_blank"
        },
    ]
};
