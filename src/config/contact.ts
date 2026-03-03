// ============================================
// dyyProject - Contact Configuration
// ============================================
// Edit nomor WhatsApp, email, dan social media di sini.
// Perubahan akan otomatis diterapkan di seluruh website.

interface WhatsApp {
    number: string;
    message: string;
    getLink: (customMessage?: string) => string;
}

interface SocialLink {
    username: string;
    url: string;
}

interface Brand {
    name: string;
    tagline: string;
    description: string;
}

export interface ContactConfig {
    whatsapp: WhatsApp;
    email: string;
    instagram: SocialLink;
    github: SocialLink;
    brand: Brand;
}

const contact: ContactConfig = {
    whatsapp: {
        number: "628xxxxxxxxxx", // Ganti dengan nomor WhatsApp Business
        message: "Halo saya tertarik dengan layanan dyyProject",
        getLink: function (this: WhatsApp, customMessage?: string) {
            const msg = encodeURIComponent(customMessage || this.message);
            return `https://wa.me/${this.number}?text=${msg}`;
        },
    },
    email: "adi317242@gmail.com",
    instagram: {
        username: "dyyproject",
        url: "https://instagram.com/dyyproject_",
    },
    github: {
        username: "dyyproject",
        url: "https://github.com/dyyproject",
    },
    brand: {
        name: "dyyProject",
        tagline: "IT Services Solution",
        description:
            "Menjadi penyedia solusi teknologi informasi dan elektronik terdepan yang inovatif, andal, dan terpercaya dalam mendukung transformasi digital bagi bisnis dan masyarakat.",
    },
};

export default contact;
