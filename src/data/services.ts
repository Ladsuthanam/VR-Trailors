import { CircleCheck, Gem, Heart, Ruler, Scissors, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Service = {
  title: string;
  category: string;
  description: string;
  image: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: "Custom Dress Stitching",
    category: "Custom Made",
    description: "Beautifully tailored dresses designed around your measurements and preferred style.",
    image:
      "https://images.pexels.com/photos/3984886/pexels-photo-3984886.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=760&w=900",
    icon: Scissors,
  },
  {
    title: "Saree Blouse Stitching",
    category: "Blouses",
    description: "Traditional and contemporary blouse designs with precise fitting and neat finishing.",
    image:
      "https://images.pexels.com/photos/17184885/pexels-photo-17184885.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=720",
    icon: Sparkles,
  },
  {
    title: "Gown Stitching",
    category: "Occasion Wear",
    description: "Elegant gowns for weddings, parties, engagements and special occasions.",
    image:
      "https://images.pexels.com/photos/30715590/pexels-photo-30715590.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=720",
    icon: Gem,
  },
  {
    title: "Dress Alterations",
    category: "Perfect Fit",
    description: "Adjust length, waist, sleeves, neckline and overall fitting with care.",
    image:
      "https://images.pexels.com/photos/6461076/pexels-photo-6461076.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=760&w=900",
    icon: Ruler,
  },
  {
    title: "Bridal & Occasion Wear",
    category: "Special Days",
    description: "Careful fitting and adjustments for outfits that matter most.",
    image:
      "https://images.pexels.com/photos/37207124/pexels-photo-37207124.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=720",
    icon: Heart,
  },
  {
    title: "Custom Adjustments",
    category: "Refinement",
    description: "Personalized modifications to help existing outfits fit beautifully.",
    image:
      "https://images.pexels.com/photos/6461156/pexels-photo-6461156.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=760&w=900",
    icon: CircleCheck,
  },
];

export const serviceOptions = [
  "Dress Stitching",
  "Saree Blouse",
  "Gown",
  "Dress Alteration",
  "Bridal / Occasion Wear",
  "Other",
];
