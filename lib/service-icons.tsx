import {
    Sparkles, Droplet, Palette, Zap, Lock, Sun,
    Heart, Syringe, FlaskConical, Leaf, Cross, Wrench,
    Users, Scissors, LucideIcon
} from "lucide-react"

// Map service titles to their corresponding Lucide icons
export const serviceIconMap: Record<string, LucideIcon> = {
    // Skin services
    "Anti-Ageing Treatments": Sparkles,
    "Acne & Scar Treatment": Cross,
    "Pigmentation Correction": Palette,
    "Skin Rejuvenation": Sparkles,
    "Laser Scar Reduction": Zap,
    "Skin Lifting & Tightening": Lock,
    "Hyperpigmentation Solutions": Palette,
    "Dull Skin Revitalisation": Sun,
    "Laser Tanning Removal": Sun,
    "Hydrafacial": Droplet,
    "Vampire Facial": Droplet,
    "Korean Facial": Heart,
    "Medifacial": Syringe,

    // Hair services
    "Hair Regrowth & Transplantation": Leaf,
    "PRP Therapy for Hair Growth": Syringe,
    "Exosome Therapy": FlaskConical,
    "Anti-Dandruff Treatments": Droplet,
    "Alopecia & Psoriasis Care": Cross,
    "Hair Patch Integration": Scissors,
    "Advanced Laser Hair Reduction": Zap,
    "Hair Loss Treatment": Leaf,
    "Low Level Laser Therapy (LLLT)": Zap,

    // Plastic surgery services  
    "Botox & Fillers": Syringe,
    "Hair Transplant (FUE / DHI / Sapphire)": Leaf,
    "Eyebrow & Beard Transplant": Scissors,
    "Rhinoplasty (Nose Surgery)": Scissors,
    "Lip Augmentation": Heart,
    "Brazilian Butt Lift": Users,
    "Cosmetic Gynecology": Heart,
    "Scar Revision & Management": Wrench,
    "Breast Surgery": Heart,
    "Gynecomastia Correction": Scissors,

    // Laser services
    "Full Body Laser Hair Removal": Zap,
    "Face, Underarms & Bikini Laser": Zap,

    // IV Drips services
    "After Party": Droplet,
    "Ageless": Sparkles,
    "Shine": Sparkles,
    "Immunity": Cross,
    "Hair Fall": Leaf,
}
