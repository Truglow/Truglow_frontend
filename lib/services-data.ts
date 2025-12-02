export type ServiceCategoryKey = "skin" | "hair" | "plastic" | "laser" | "ivdrips"

export type ServiceDetail = {
  title: string
  description: string
  icon: string
  details: string[]
}

export type ServiceCategoryMap = Record<ServiceCategoryKey, ServiceDetail[]>

export const serviceCategories: ServiceCategoryMap = {
  skin: [
    {
      title: "Anti-Ageing Treatments",
      description: "Advanced treatments to reduce fine lines, wrinkles, and restore youthful skin",
      icon: "✨",
      details: [
        "Dermatologists start with a diagnostic analysis of laxity, skin texture, and lifestyle to tailor your rejuvenation plan.",
        "Energy devices such as HIFU and RF, plus targeted injectables, are layered to lift, firm, and soften lines while maintaining natural expression.",
        "Post-care guidance covers collagen-supporting nutrition, SPF discipline, and maintenance boosters so the lifting effect keeps improving.",
      ],
    },
    {
      title: "Acne & Scar Treatment",
      description: "Comprehensive solutions for acne and scar reduction",
      icon: "🩺",
      details: [
        "Active acne is controlled first using prescription therapeutics, clarifying peels, and LED therapy before resurfacing begins.",
        "Textural scars are revised via staged subcision, microneedling RF, and fractional lasers so collagen rebuilds from deep within.",
        "Barrier-repair serums and pigmentation control finish the plan, leaving skin smoother and more even-toned.",
      ],
    },
    {
      title: "Pigmentation Correction",
      description: "Treatment for uneven skin tone and dark spots",
      icon: "🎭",
      details: [
        "Layered therapy blends pigment-targeted peels, Q-switched or pico lasers, and antioxidant infusions to fade melasma, tanning, and post-inflammatory marks.",
        "Fluence and peel strength are customised to protect delicate Indian skin while delivering progressive clarity.",
        "A tyrosinase-inhibiting home routine plus SPF 50+ keeps the complexion bright between visits.",
      ],
    },
    {
      title: "Skin Rejuvenation",
      description: "Revitalizing treatments for brighter, more radiant skin",
      icon: "💫",
      details: [
        "Hydra-dermabrasion, oxygen infusion, and gentle exfoliation detox pores while drenching skin in antioxidants.",
        "Boosters—PRP/GFC, Vitamin C, or glutathione—are selected to target dullness, dehydration, or fine lines in one sitting.",
        "Finishing masks and LED enhance glow, making this ideal for monthly maintenance or pre-event prep.",
      ],
    },
    {
      title: "Laser Scar Reduction",
      description: "Advanced laser treatments for scar reduction",
      icon: "🔬",
      details: [
        "Fractional erbium or CO₂ lasers resurface uneven texture while collagen remodelling smooths depressed scars.",
        "Dermatologists may combine subcision or microneedling RF to tackle deeper, tethered scars for dramatic refinement.",
        "Cooling gels, barrier creams, and sun protection ensure a swift, complication-free recovery.",
      ],
    },
    {
      title: "Skin Lifting & Tightening",
      description: "Non-surgical skin tightening and lifting treatments",
      icon: "🎯",
      details: [
        "HIFU and monopolar RF send focused energy to deep tissue planes, tightening collagen without downtime.",
        "Dermatologists often pair skin tightening with biostimulators or fillers to re-sculpt youthful contours.",
        "Results improve over 3–6 months as collagen rebuilds, offering a lifted face and refined jawline.",
      ],
    },
    {
      title: "Hyperpigmentation Solutions",
      description: "Specialized treatments for hyperpigmentation issues",
      icon: "🌈",
      details: [
        "Sequential peels, depigmenting cocktails, and gentle lasers work together to disperse stubborn hormonal or sun-induced patches.",
        "Dermatologist oversight ensures gradual lightening so the skin barrier stays healthy throughout treatment.",
        "Niacinamide- and azelaic-rich home care keeps tone uniform long after the clinic visit.",
      ],
    },
    {
      title: "Dull Skin Revitalisation",
      description: "Treatments to restore glow and vitality to dull skin",
      icon: "💎",
      details: [
        "Signature facials combine lymphatic massage, exfoliation, and antioxidant infusions to recharge tired skin.",
        "Powerful brightening boosters—Vitamin C, glutathione, or kojic—deliver an Instaglow finish.",
        "Great for frequent travellers, new moms, or brides needing an instant radiance reset.",
      ],
    },
    {
      title: "Laser Tanning Removal",
      description: "Effective laser treatments to remove tan and even out skin tone",
      icon: "☀️",
      details: [
        "Q-switched and pico lasers break down excess melanin to reverse sun-induced darkening on the face and body.",
        "Integrated cooling and calming serums prevent post-laser sensitivity, keeping treatment comfortable.",
        "High-SPF protection and antioxidant home care help you maintain a smooth, even complexion.",
      ],
    },
    {
      title: "Hydrafacial",
      description: "Deep cleansing and hydrating facial treatment",
      icon: "💧",
      details: [
        "Vortex technology exfoliates, extracts, and drenches pores with hydrating serums in a single pass.",
        "Dermatologists tailor boosters—clarifying salicylic, brightening Vitamin C, or peptide-powered anti-ageing—just like clinical medifacials.",
        "With zero downtime, it’s ideal monthly to keep skin fresh, plump, and clear.",
      ],
    },
    {
      title: "Vampire Facial",
      description: "PRP-based facial for skin rejuvenation",
      icon: "🧛",
      details: [
        "After a small blood draw, plasma rich in growth factors is microneedled into the skin to trigger repair.",
        "Collagen synthesis increases, softening fine lines and boosting luminosity over 3–4 weekly sessions.",
        "Downtime is limited to mild redness; results include firmer texture and improved elasticity.",
      ],
    },
    {
      title: "Korean Facial",
      description: "Multi-step Korean skincare facial treatment",
      icon: "🇰🇷",
      details: [
        "Double cleansing, enzymatic exfoliation, and ampoule layering form the core of this K-beauty-inspired ritual.",
        "LED therapy and sheet masks supply moisture, leaving a translucent glass-skin finish.",
        "Suitable even for sensitive skin, with custom actives selected at each step.",
      ],
    },
    {
      title: "Medifacial",
      description: "Medical-grade facial with active ingredients",
      icon: "💉",
      details: [
        "Clinical facials are tailored with lactic acid, peptides, retinoids, or antioxidants to address specific skin concerns.",
        "Therapists follow dermatologist prescriptions similar to medifacial playbooks for acne, dryness, or pigmentation.",
        "Massage, masking, and LED add a spa-like feel while delivering corrective results.",
      ],
    },
  ],
  hair: [
    {
      title: "Hair Regrowth & Transplantation",
      description: "Comprehensive hair regrowth and transplant solutions",
      icon: "🌱",
      details: [
        "Trichoscopy, blood tests, and lifestyle analysis determine candidacy for FUE, DHI, or a hybrid plan tailored to your scalp condition.",
        "Follicular units are harvested and implanted under magnification to recreate natural density, direction, and hairline design.",
        "Structured reviews include PRP boosters, scalp hygiene coaching, and nutrition tweaks so newly implanted grafts thrive.",
        "Mirrors premium four-step transplant philosophy—diagnosis, custom plan, execution, and aftercare—for predictable outcomes.",
      ],
    },
    {
      title: "PRP Therapy for Hair Growth",
      description: "Platelet-rich plasma therapy to stimulate natural hair growth",
      icon: "💉",
      details: [
        "A small blood sample is centrifuged to concentrate growth factors that are then injected across thinning zones.",
        "Sessions follow best-practice protocols—collection, activation, injection, and cooling—delivering fuller strands from the third or fourth visit.",
        "Dermatologists recommend 6–8 sessions at monthly intervals with maintenance boosters to sustain the results.",
        "Post-care tips include gentle cleansing and avoiding heat styling for 24–48 hours.",
      ],
    },
    {
      title: "Exosome Therapy",
      description: "Advanced exosome therapy for hair restoration",
      icon: "🔬",
      details: [
        "Lab-cultured exosomes deliver potent cellular messengers that extend the hair growth phase and improve scalp vitality.",
        "Often paired with PRP or low-level laser therapy for synergistic regrowth while staying minimally invasive.",
        "Ideal when you want cutting-edge science behind your hair restoration without surgical downtime.",
      ],
    },
    {
      title: "Anti-Dandruff Treatments",
      description: "Effective solutions for dandruff and scalp conditions",
      icon: "🧴",
      details: [
        "Keratolytic peels, antifungal lotions, and low-level lasers detox the scalp and calm inflammation.",
        "Dermatologist-designed regimes relieve flakes and itching quickly and restore scalp comfort.",
        "Custom home maintenance—medicated shampoos, scalp serums, and lifestyle tweaks—prevents relapse.",
      ],
    },
    {
      title: "Alopecia & Psoriasis Care",
      description: "Specialized care for alopecia and psoriasis conditions",
      icon: "🏥",
      details: [
        "Autoimmune or inflammatory scalp conditions are calmed with prescription immunomodulators, phototherapy, and barrier-restoring topicals.",
        "Dermatologists set realistic regrowth timelines and adjust plans based on response.",
        "Emotional support, camouflage options, and nutritional counselling round out a holistic care journey.",
      ],
    },
    {
      title: "Hair Patch Integration",
      description: "Custom hair patch solutions for natural-looking coverage",
      icon: "🧩",
      details: [
        "Bespoke systems are colour- and texture-matched, then integrated with your natural hair for undetectable coverage.",
        "Maintenance visits teach bonding, cleaning, and styling routines so results stay seamless.",
        "Ideal when you want immediate density or prefer a non-surgical alternative to transplantation.",
      ],
    },
    {
      title: "Advanced Laser Hair Reduction",
      description: "Permanent hair reduction using advanced laser technology",
      icon: "⚡",
      details: [
        "US-FDA diode and Nd:YAG lasers precisely target follicles while integrated cooling safeguards melanin-rich skin.",
        "Patch testing, fluence tracking, and dermatologist oversight ensure a standardised, safe workflow.",
        "Regularly scheduled sessions produce long-lasting smoothness with minimal discomfort.",
      ],
    },
    {
      title: "Hair Loss Treatment",
      description: "Comprehensive solutions for hair loss and thinning",
      icon: "💪",
      details: [
        "Consultations cover history, scalp imaging, blood work, and lifestyle to map out the precise trigger of hair fall.",
        "Dermatologists deploy nutraceuticals, FDA-approved topicals, PRP, or LLLT in phased treatment cycles.",
        "Digital scalp imaging during reviews keeps progress transparent and lets the team fine-tune therapy.",
      ],
    },
    {
      title: "Low Level Laser Therapy (LLLT)",
      description: "Non-invasive laser therapy for hair growth stimulation",
      icon: "🔴",
      details: [
        "Red-light laser domes invigorate follicles, boost microcirculation, and reduce inflammatory scalp stress.",
        "Used alongside PRP, medical therapy, or after transplants to accelerate recovery and density gains.",
        "Each painless session lasts around 20 minutes with zero downtime, making it easy to fit into busy schedules.",
      ],
    },
  ],
  plastic: [
    {
      title: "Botox & Fillers",
      description: "Natural-looking facial enhancement and volume restoration",
      icon: "💉",
      details: [
        "Expert injectors map facial musculature to soften lines, lift features, and restore youthful volume without overfilling.",
        "Premium, long-lasting products are chosen to ensure results stay natural and expressive.",
        "Aftercare includes gentle facial movement, hydration, and follow-up checks for optimal finishing.",
      ],
    },
    {
      title: "Hair Transplant (FUE / DHI / Sapphire)",
      description: "Advanced hair transplant techniques for natural-looking results",
      icon: "🌱",
      details: [
        "Surgeons choose between FUE, DHI pens, or sapphire blades depending on donor density and hairstyle goals.",
        "Implantation respects natural growth angles and density so results look seamless even up close.",
        "Post-op kits include antibiotics, anti-swelling medication, and PRP boosters to nourish the grafts.",
      ],
    },
    {
      title: "Eyebrow & Beard Transplant",
      description: "Specialized transplant procedures for eyebrows and beard",
      icon: "👨",
      details: [
        "Design consultations map desired brow arches or beard lines before micro-grafts are created.",
        "Ultra-fine instruments place follicles at precise angles, duplicating natural direction and density.",
        "Excellent for correcting scarring, patchiness, or restoring facial hair after trauma.",
      ],
    },
    {
      title: "Rhinoplasty (Nose Surgery)",
      description: "Cosmetic and functional nose reshaping surgery",
      icon: "👃",
      details: [
        "Board-certified plastic surgeons balance aesthetics and breathing, refining the bridge, tip, and septum as needed.",
        "Pre-surgical simulations help align expectations, while meticulous techniques protect nasal structure.",
        "Structured aftercare—splints, taping, and review visits—controls swelling and safeguards cartilage.",
      ],
    },
    {
      title: "Lip Augmentation",
      description: "Natural-looking lip enhancement and volume restoration",
      icon: "💋",
      details: [
        "Hyaluronic fillers define the cupid’s bow, add moisture, and balance asymmetry with minimal downtime.",
        "Micro-cannula techniques reduce bruising and keep results even across the lips.",
        "Enhancement typically lasts 9–12 months, with follow-up tweaks scheduled as needed.",
      ],
    },
    {
      title: "Brazilian Butt Lift",
      description: "Body contouring procedure for enhanced curves",
      icon: "🍑",
      details: [
        "Liposuction sculpts donor areas and gathers healthy fat, which is purified and transferred to sculpt the hips and buttocks.",
        "Safety protocols maintain graft viability and minimise risks, matching global best practices.",
        "Compression garments, staged activity resumption, and follow-up checks support a smooth recovery.",
      ],
    },
    {
      title: "Cosmetic Gynecology",
      description: "Specialized cosmetic procedures in gynecology",
      icon: "🌸",
      details: [
        "Procedures include vaginal tightening, labiaplasty, and rejuvenation to improve comfort and aesthetics.",
        "Performed by women’s health specialists who maintain strict privacy and compassionate care.",
        "Recovery protocols feature tailored aftercare, pelvic floor exercises, and gradual return to activity.",
      ],
    },
    {
      title: "Scar Revision & Management",
      description: "Advanced techniques for scar reduction and management",
      icon: "✂️",
      details: [
        "Surgeons combine excision, punch grafting, fillers, and lasers to smooth surgical or traumatic scars.",
        "Treatment unfolds in phases so the skin can remodel safely and blend with surrounding tissue.",
        "Silicone therapy, SPF, and collagen-supporting supplements lock in long-term refinement.",
      ],
    },
    {
      title: "Breast Surgery",
      description: "Comprehensive breast enhancement and reconstruction procedures",
      icon: "💎",
      details: [
        "Procedures cover augmentation, reduction, lifts, and reconstruction using the latest surgical techniques.",
        "Consultations explore implant choices, fat grafting, and symmetry planning to match your body goals.",
        "Enhanced recovery protocols reduce downtime and manage discomfort efficiently.",
      ],
    },
    {
      title: "Gynecomastia Correction",
      description: "Male breast reduction surgery",
      icon: "👔",
      details: [
        "A day-care procedure combines liposuction and gland excision to create a flatter, contoured chest.",
        "Compression garments, posture guidance, and exercise advice help maintain the new shape.",
        "Results can be long-lasting when paired with healthy lifestyle habits.",
      ],
    },
  ],
  laser: [
    {
      title: "Full Body Laser Hair Removal",
      description: "Complete body laser hair removal treatment",
      icon: "⚡",
      details: [
        "US-FDA diode platforms glide across large zones quickly, while sapphire cooling plates keep the skin comfortable.",
        "Clients follow a safety checklist—shaving prep, sunscreen, and soothing gels—that mirrors top dermatology protocols.",
        "Session data is tracked so your dermatologist can adjust fluence, ensuring long-term hair reduction.",
      ],
    },
    {
      title: "Face, Underarms & Bikini Laser",
      description: "Targeted laser hair removal for face, underarms, and bikini area",
      icon: "✨",
      details: [
        "Precision tips and low fluence settings are used on delicate zones to avoid irritation while clearing hair.",
        "Dermatologist oversight minimises the risk of pigmentation changes and ensures the finish is ultra-smooth.",
        "Maintenance sessions every few months keep regrowth sparse and easy to manage.",
      ],
    },
  ],
  ivdrips: [
    {
      title: "After Party",
      description: "Keep the night. Lose the hangover.",
      icon: "🍹",
      details: [
        "This doctor-designed drip works fast—rehydrating, restoring, and bringing you back to life.",
        "A powerful blend of electrolytes, vitamins, and antioxidants fights fatigue, fuels recovery, and gets you glowing.",
        "Rapid rehydration, puffiness & dull skin recovery, energy & clarity boost.",
        "Bounce back. Feel fresh. Do it all again. (Not that we recommend)",
        "Ingredients: Hydration Base, Vitamin B Complex, Vitamin B-12, Vitamin C, Glutathione, Electrolytes",
      ],
    },
    {
      title: "Ageless",
      description: "Age is just a number. Let's keep it that way.",
      icon: "⏳",
      details: [
        "This doctor-designed drip fuels longevity—restoring lost NAD+, boosting cellular repair, and keeping you sharp.",
        "A next-level blend of antioxidants, vitamins, and deep hydration fights fatigue, smooths skin, and powers up your body's defense against aging.",
        "Cellular repair & longevity boost, hydration for smoother, firmer skin, energy & mental clarity support.",
        "Feel better. Think faster. Stay timeless.",
        "Ingredients: NAD+, Electrolytes, COQ10, Vitamin B Complex",
      ],
    },
    {
      title: "Shine",
      description: "Glow from within. Shine without limits.",
      icon: "✨",
      details: [
        "This doctor-backed formula is your skin's ultimate reset—hydrating, brightening, and fighting oxidative stress.",
        "Packed with Glutathione, Vitamin C, and potent antioxidants, it clears dullness, evens out skin tone, and brings back that effortless radiance.",
        "Brightens & evens skin tone, hydration for a dewy, plump look, fights oxidative stress & aging.",
        "Glow now. Stay radiant. Keep them guessing.",
        "Ingredients: High dose Glutathione, Vitamin C, Biotin, Vitamin B12, Vitamin B Complex, Electrolytes, Zinc",
      ],
    },
    {
      title: "Immunity",
      description: "Immunity on demand.",
      icon: "🛡️",
      details: [
        "A precision-crafted blend of high-dose vitamins, minerals, and antioxidants to keep your immune system primed.",
        "Whether you're bouncing back from illness or staying ahead of the game, this drip is your ultimate health armor.",
        "Boosts immune function, fights fatigue & inflammation, faster recovery from illness.",
        "Stay ready. Stay strong. Keep moving.",
        "Ingredients: Hydration, High dose Vitamin C, Zinc, Glutathione, NAC, Electrolytes, Vitamin B Complex, Vitamin B12, Vitamin D3 (IM)",
      ],
    },
    {
      title: "Hair Fall",
      description: "Nourish your hair from within for stronger, healthier growth.",
      icon: "💆",
      details: [
        "Targeted IV therapy delivers essential vitamins and minerals directly to your bloodstream to combat hair loss.",
        "Biotin, B-complex vitamins, and antioxidants strengthen follicles and promote healthy hair growth.",
        "Supports scalp health, reduces hair thinning, and enhances hair vitality.",
        "Stronger roots. Fuller strands. Confident you.",
        "Ingredients: Biotin, Vitamin B Complex, Vitamin B12, Zinc, Vitamin C, Glutathione, Electrolytes",
      ],
    },
  ],
}

export const serviceCategoryOptions: { value: ServiceCategoryKey; label: string }[] = [
  { value: "plastic", label: "Plastic Surgery" },
  { value: "hair", label: "Hair" },
  { value: "skin", label: "Skin" },
  { value: "laser", label: "Laser" },
  { value: "ivdrips", label: "IV Drips" },
]

export const serviceTitlesByCategory: Record<ServiceCategoryKey, string[]> = {
  skin: serviceCategories.skin.map((service) => service.title),
  hair: serviceCategories.hair.map((service) => service.title),
  plastic: serviceCategories.plastic.map((service) => service.title),
  laser: serviceCategories.laser.map((service) => service.title),
  ivdrips: serviceCategories.ivdrips.map((service) => service.title),
}

