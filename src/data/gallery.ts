export type GalleryCategory = "Blouses" | "Gowns" | "Dresses" | "Alterations" | "Occasion Wear";

export type GalleryImage = {
  id: number;
  title: string;
  category: GalleryCategory;
  src: string;
  alt: string;
  shape?: "tall" | "wide" | "standard";
};

export const galleryCategories: GalleryCategory[] = [
  "Blouses",
  "Gowns",
  "Dresses",
  "Alterations",
  "Occasion Wear",
];

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    title: "Contemporary Saree Blouse",
    category: "Blouses",
    src: "https://images.pexels.com/photos/17184885/pexels-photo-17184885.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1100&w=820",
    alt: "Placeholder portrait of a saree blouse style for a tailoring gallery.",
    shape: "tall",
  },
  {
    id: 2,
    title: "Elegant Gown Detail",
    category: "Gowns",
    src: "https://images.pexels.com/photos/30715590/pexels-photo-30715590.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1100&w=820",
    alt: "Placeholder close-up of an elegant gown with embroidered details.",
    shape: "tall",
  },
  {
    id: 3,
    title: "Tailoring Measurement",
    category: "Alterations",
    src: "https://images.pexels.com/photos/6461076/pexels-photo-6461076.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=760&w=1000",
    alt: "Hands measuring a garment as a placeholder for alteration work.",
    shape: "wide",
  },
  {
    id: 4,
    title: "Boutique Dress Rack",
    category: "Dresses",
    src: "https://images.pexels.com/photos/15893780/pexels-photo-15893780.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1100&w=820",
    alt: "Dresses hanging in a boutique as a placeholder gallery image.",
    shape: "tall",
  },
  {
    id: 5,
    title: "Occasion Saree Finish",
    category: "Occasion Wear",
    src: "https://images.pexels.com/photos/38826105/pexels-photo-38826105.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1100&w=820",
    alt: "Placeholder image of occasion wear with a saree finish.",
    shape: "tall",
  },
  {
    id: 6,
    title: "Finishing Details",
    category: "Alterations",
    src: "https://images.pexels.com/photos/6461156/pexels-photo-6461156.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=760&w=1000",
    alt: "Close-up of hand stitching as a placeholder for repair and finishing details.",
    shape: "wide",
  },
  {
    id: 7,
    title: "Bridal Silhouette",
    category: "Occasion Wear",
    src: "https://images.pexels.com/photos/37207124/pexels-photo-37207124.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1100&w=820",
    alt: "Placeholder bridal gown displayed on a mannequin.",
    shape: "tall",
  },
  {
    id: 8,
    title: "Studio Fitting Process",
    category: "Dresses",
    src: "https://images.pexels.com/photos/3984872/pexels-photo-3984872.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=760&w=1000",
    alt: "Dressmaker measuring a garment in a studio as a placeholder for custom stitching.",
    shape: "wide",
  },
  {
    id: 9,
    title: "Soft Blouse Inspiration",
    category: "Blouses",
    src: "https://images.pexels.com/photos/19567882/pexels-photo-19567882.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1100&w=820",
    alt: "Placeholder image of a soft saree blouse and saree look.",
    shape: "tall",
  },
  {
    id: 10,
    title: "Formal Dress Display",
    category: "Gowns",
    src: "https://images.pexels.com/photos/18600910/pexels-photo-18600910.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1100&w=820",
    alt: "Placeholder display of formal dresses in a boutique window.",
    shape: "tall",
  },
];
