export const WHATSAPP_NUMBER = "0777257964";

export const businessInfo = {
  shopName: "VR Tailors",
  tagline: "Beautifully tailored. Perfectly yours.",
  phone: "0777257964",
  whatsappNumber: WHATSAPP_NUMBER,
  whatsappMessage: "Hi, I would like to enquire about your tailoring services.",
  address: "VR Tailors location on Google Maps",
  locationUrl:
    "https://www.google.com/local/place/fid/0x3afe57007684af0d:0xeb36a49d6ce53762/photosphere?iu=https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid%3DnGmA5Q11LzJwcj1V6hx0fg%26cb_client%3Dsearch.gws-prod.gps%26yaw%3D127.73228%26pitch%3D0%26thumbfov%3D100%26w%3D0%26h%3D0&ik=CAISFm5HbUE1UTExTHpKd2NqMVY2aHgwZmc%3D&sa=X&ved=2ahUKEwi8w47FpJGWAxWGzDgGHXjsCX4Qpx96BAgvEAU",
  openingHours: "Mon-Sun 9.00AM - 5.00 PM",
  email: "radhiradhiga3@gmail.com",
  seo: {
    canonicalUrl: "https://example.com/",
    description:
      "Professional ladies tailoring, saree blouse stitching, gown stitching and dress alterations. Custom fitting and beautiful finishing for every occasion.",
  },
  socialLinks: {
    instagram: "https://instagram.com/REPLACE_WITH_HANDLE",
    facebook: "https://facebook.com/REPLACE_WITH_PAGE",
  },
  tailor: {
    name: "Rathika",
    role: "Founder & Tailor",
    intro:
      "With a passion for beautiful fitting and thoughtful finishing, every customer is welcomed with care, clear guidance and personal attention.",
    signature: "Rathika",
    portrait:
      "https://images.pexels.com/photos/3984871/pexels-photo-3984871.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=800",
  },
  images: {
    hero:
      "https://images.pexels.com/photos/38826113/pexels-photo-38826113.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1600&w=1200",
    featured:
      "https://images.pexels.com/photos/8526968/pexels-photo-8526968.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1100&w=1400",
    before:
      "https://images.pexels.com/photos/6461076/pexels-photo-6461076.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
    after:
      "https://images.pexels.com/photos/17184885/pexels-photo-17184885.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
    about:
      "https://images.pexels.com/photos/8769327/pexels-photo-8769327.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1200",
    finalCta:
      "https://images.pexels.com/photos/19567882/pexels-photo-19567882.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1600",
  },
};

export function isConfigured(value: string) {
  return Boolean(value && !value.includes("REPLACE_WITH"));
}

export function getWhatsAppHref() {
  if (!isConfigured(businessInfo.whatsappNumber)) {
    return "#contact";
  }

  const number = businessInfo.whatsappNumber.replace(/\D/g, "");
  const whatsappNumber = number.startsWith("0") && number.length === 10 ? `94${number.slice(1)}` : number;
  const text = encodeURIComponent(businessInfo.whatsappMessage);
  return `https://wa.me/${whatsappNumber}?text=${text}`;
}
