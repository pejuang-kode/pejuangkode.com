const title = "Pejuang Kode";
const description =
  "Pejuang Kode sebagai wadah belajar bersama dengan beragam topik bahasan mulai dari pemrograman, karir, hingga keluarga.";

const SEO = {
  title,
  description,
  canonical: "https://pejuangkode.vercel.app",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://pejuangkode.vercel.app",
    title,
    description,
    images: [
      {
        url: "https://pejuangkode.vercel.app/images/banner.jpg",
        alt: title,
        width: 1024,
        height: 1024,
      },
    ],
  },
  twitter: {
    handle: "@pejuangkode",
    site: "@pejuangkode",
    cardType: "summary_large_image",
  },
};

export default SEO;
