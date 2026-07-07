export type BlogContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string }

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  category: "skin" | "hair" | "laser" | "plastic" | "drips"
  categoryLabel: string
  image: string
  emoji: string
  author: string
  authorRole: string
  date: string
  readTime: string
  content: BlogContentBlock[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: "fue-dhi",
    title: "FUE vs DHI Hair Transplant: Which One is Right for You?",
    excerpt: "Both FUE and DHI are world-class hair restoration techniques — but they work differently and suit different patients. Here's everything you need to know before deciding.",
    category: "hair",
    categoryLabel: "Hair Transplant",
    image: "/hair-hero.webp",
    emoji: "💆",
    author: "Dr. Pranay Reddy",
    authorRole: "Consultant Hair Transplant Surgeon",
    date: "June 2024",
    readTime: "8 min read",
    content: [
      {
        type: "paragraph",
        text: "If you've researched hair transplants, you've almost certainly come across two acronyms: FUE (Follicular Unit Extraction) and DHI (Direct Hair Implantation). Both are modern, minimally invasive, and highly effective — but they differ in technique, ideal candidate profile, and what kind of result they're best suited to deliver.",
      },
      {
        type: "heading",
        text: "What is FUE?",
      },
      {
        type: "paragraph",
        text: "FUE is the world's most widely performed hair transplant technique. Individual hair follicles are extracted one by one from the donor area (typically the back and sides of the scalp) using a precision micro-punch tool — typically 0.6–0.9mm in diameter. These grafts are then implanted into pre-made recipient channels at the front, top, or crown of the scalp.",
      },
      {
        type: "paragraph",
        text: "Key advantages of FUE: no linear scar, faster recovery than older strip techniques, highly natural results when performed by an experienced surgeon, and the ability to harvest up to 4000+ grafts in a single session.",
      },
      {
        type: "heading",
        text: "What is DHI?",
      },
      {
        type: "paragraph",
        text: "DHI (Direct Hair Implantation) uses the same extraction process as FUE — but changes the implantation step entirely. Instead of pre-making channels and inserting grafts, a specialist device called the Choi pen simultaneously creates the channel and implants the follicle in a single motion.",
      },
      {
        type: "paragraph",
        text: "The main benefits: higher graft survival rate (because grafts spend less time outside the body), the ability to implant among existing hair without shaving, and theoretically higher density in a given area.",
      },
      {
        type: "heading",
        text: "FUE vs DHI: Key Differences",
      },
      {
        type: "list",
        items: [
          "<strong>Scarring:</strong> Both are scar-free in the traditional sense — no linear scar. Tiny dot marks from extraction heal invisibly in both techniques.",
          "<strong>Density:</strong> DHI can achieve slightly higher density per cm² due to the Choi pen's precision.",
          "<strong>Existing hair:</strong> DHI is preferred when implanting into areas with existing hair, as it avoids the need to shave those areas.",
          "<strong>Session time:</strong> DHI sessions are typically longer due to the more intricate implantation process.",
          "<strong>Cost:</strong> DHI is generally more expensive due to the specialised tools and technique.",
          "<strong>Graft survival:</strong> DHI has a slight edge in graft survival time as grafts are implanted more quickly.",
        ],
      },
      {
        type: "heading",
        text: "Which is Right for You?",
      },
      {
        type: "paragraph",
        text: "Choose <strong>FUE</strong> if: you have significant hair loss (Norwood scale 3–6), you want to cover large areas, or you're budget-conscious and want a proven, reliable result.",
      },
      {
        type: "paragraph",
        text: "Choose <strong>DHI</strong> if: you want to add density to an area with existing hair, you want a slightly higher density result, or you want to minimise shaving of your existing hair during the procedure.",
      },
      {
        type: "paragraph",
        text: "The honest truth? At Tru Glow, both techniques deliver outstanding results in the right hands. The most important factor is <em>who</em> performs your transplant — not which acronym they use. During your consultation, our surgeon will assess your hair loss pattern, donor density, and goals to recommend the right approach for you specifically.",
      },
    ],
  },
  {
    slug: "hair-loss-causes",
    title: "Why You're Losing Hair: The 7 Most Common Causes in India",
    excerpt: "From hormonal imbalances to diet deficiencies and stress — hair loss has many triggers. Understanding yours is the first step to stopping it.",
    category: "hair",
    categoryLabel: "Hair Loss",
    image: "/real-photos/13.webp",
    emoji: "🔬",
    author: "Dr. Pranay Reddy",
    authorRole: "Consultant Hair Transplant Surgeon",
    date: "June 2024",
    readTime: "10 min read",
    content: [
      {
        type: "paragraph",
        text: "Hair loss affects over 50% of Indian men by the age of 50, and increasingly impacts women in their 20s and 30s. But hair loss isn't a single condition — it's a symptom. And the right treatment depends entirely on identifying the right cause.",
      },
      {
        type: "heading",
        text: "1. Androgenetic Alopecia (Pattern Hair Loss)",
      },
      {
        type: "paragraph",
        text: "The most common cause — responsible for roughly 95% of hair loss in men and a significant proportion in women. It's genetic and driven by DHT (dihydrotestosterone), a hormone that miniaturises hair follicles over time. In men, it follows the classic Norwood pattern; in women, diffuse thinning across the top of the scalp. Treatment: FUE/DHI transplant, PRP, Minoxidil, Finasteride (men), Spironolactone (women).",
      },
      {
        type: "heading",
        text: "2. Nutritional Deficiencies",
      },
      {
        type: "paragraph",
        text: "India has some of the world's highest rates of iron deficiency anaemia — and iron is critical for hair growth. Vitamin D, B12, Biotin, Zinc, and Protein deficiencies are also extremely common causes of hair loss, particularly in vegetarians. A simple blood panel can identify and correct these deficiencies within weeks.",
      },
      {
        type: "heading",
        text: "3. Thyroid Disorders",
      },
      {
        type: "paragraph",
        text: "Both hypothyroidism and hyperthyroidism cause diffuse hair loss across the entire scalp. The good news: treat the thyroid condition effectively, and hair regrows fully. Always rule this out with a TSH, T3, and T4 blood test.",
      },
      {
        type: "heading",
        text: "4. Telogen Effluvium (Stress Shedding)",
      },
      {
        type: "paragraph",
        text: "A sudden stressful event — surgery, illness, childbirth, major weight loss, or emotional trauma — can push large numbers of hair follicles into the resting (telogen) phase simultaneously. The result: dramatic shedding 2–4 months after the trigger event. This is temporary and self-resolving, though PRP can accelerate recovery.",
      },
      {
        type: "heading",
        text: "5. Scalp Conditions",
      },
      {
        type: "paragraph",
        text: "Dandruff (seborrheic dermatitis), psoriasis, and fungal infections (tinea capitis) cause inflammation at the follicle level, disrupting growth cycles and causing patchy or diffuse loss. Treatment of the underlying scalp condition resolves the hair loss.",
      },
      {
        type: "heading",
        text: "6. PCOS in Women",
      },
      {
        type: "paragraph",
        text: "Polycystic Ovary Syndrome affects 1 in 5 Indian women and is a major driver of female pattern hair loss due to elevated androgen levels. Hair loss from PCOS responds well to hormonal management combined with topical treatments and PRP.",
      },
      {
        type: "heading",
        text: "7. Over-styling & Chemical Damage",
      },
      {
        type: "paragraph",
        text: "Frequent heat styling, harsh chemical treatments, tight hairstyles (traction alopecia), and poor-quality hair products cause cumulative damage that weakens follicles and breaks hair at the shaft. Often mistaken for 'genetic' loss.",
      },
      {
        type: "heading",
        text: "When to See a Specialist",
      },
      {
        type: "paragraph",
        text: "If you're losing more than 100 hairs per day, noticing a widening parting, visible thinning at the temples or crown, or patchy loss — book a trichology consultation at Tru Glow. We'll run a complete scalp analysis, blood panel review, and dermoscopy to identify your specific cause and recommend the right treatment plan.",
      },
    ],
  },
  {
    slug: "acne-scars",
    title: "Acne Scars in Your 20s & 30s: What Actually Works",
    excerpt: "Not all acne scar treatments are created equal. A dermatologist's honest guide to what works, what doesn't, and what to expect from professional treatment.",
    category: "skin",
    categoryLabel: "Skin Care",
    image: "/real-photos/11.webp",
    emoji: "✨",
    author: "Dr. Vijay Bhattipolu",
    authorRole: "Consultant Dermatologist",
    date: "June 2024",
    readTime: "7 min read",
    content: [
      {
        type: "paragraph",
        text: "Acne scars are one of the most emotionally difficult skin concerns — and one of the most commonly under-treated. Many patients spend years covering them with makeup or accepting them as permanent, when in reality, today's dermatological treatments can dramatically reduce even the deepest scars.",
      },
      {
        type: "heading",
        text: "Understanding Your Scar Type",
      },
      {
        type: "paragraph",
        text: "Treatment depends entirely on scar morphology. The main types:",
      },
      {
        type: "list",
        items: [
          "<strong>Ice-pick scars:</strong> Deep, narrow, V-shaped scars that extend into the dermis. Hardest to treat — require TCA CROSS (chemical reconstruction of skin scars).",
          "<strong>Boxcar scars:</strong> Broad, shallow-to-medium, U-shaped depressions with well-defined edges. Respond excellently to fractional laser and subcision.",
          "<strong>Rolling scars:</strong> Broad depressions with sloped edges that give the skin a wavy appearance. Caused by fibrous bands tethering the dermis — subcision is the gold-standard treatment.",
          "<strong>Hypertrophic / Keloid scars:</strong> Raised scars from excess collagen. Treated with intralesional steroid injections and laser.",
          "<strong>PIH (Post-Inflammatory Hyperpigmentation):</strong> Flat dark marks — technically not scars, but often mistaken for them. Respond excellently to Q-Switch laser, peels, and brightening protocols.",
        ],
      },
      {
        type: "heading",
        text: "The Treatments That Actually Work",
      },
      {
        type: "paragraph",
        text: "<strong>Fractional CO2 Laser:</strong> The most powerful resurfacing tool available. Ablates damaged skin in a controlled pattern, stimulating significant collagen remodelling. 3–5 sessions with 4–6 weeks between each typically achieve 50–70% improvement in boxcar and rolling scars. Requires 5–7 days downtime per session.",
      },
      {
        type: "paragraph",
        text: "<strong>Subcision:</strong> A needle is inserted under rolling scars to cut the fibrous bands tethering the scar to deeper tissue. Often the most dramatic single-treatment improvement for rolling scars. Usually combined with filler or PRP to prevent re-attachment.",
      },
      {
        type: "paragraph",
        text: "<strong>TCA CROSS:</strong> High-concentration TCA is applied precisely to the base of ice-pick scars with a toothpick, causing controlled destruction and regrowth of healthier tissue within the scar column. 3–5 monthly sessions typical.",
      },
      {
        type: "paragraph",
        text: "<strong>PRP Micro-needling:</strong> Micro-needles create controlled wound channels that trigger collagen synthesis; simultaneously PRP is infused to accelerate healing. Excellent for diffuse shallow scarring and PIH. Minimal downtime — redness for 24 hours.",
      },
      {
        type: "heading",
        text: "Realistic Expectations",
      },
      {
        type: "paragraph",
        text: "No treatment achieves 100% scar removal — but 60–80% improvement is realistic with a well-designed protocol. At Tru Glow, we create a combined treatment plan that addresses all scar types simultaneously, maximising your result across a 4–6 month course of treatment.",
      },
    ],
  },
  {
    slug: "melasma",
    title: "Melasma & Pigmentation: Why It Keeps Coming Back (And How to Stop It)",
    excerpt: "Melasma is one of the most stubborn skin concerns — especially for Indian women. Here's the dermatologist-approved protocol that actually works long-term.",
    category: "skin",
    categoryLabel: "Skin Care",
    image: "/real-photos/7.webp",
    emoji: "☀️",
    author: "Dr. Anusha Vadlapatla",
    authorRole: "Consultant Dermatologist & Cosmetologist",
    date: "June 2024",
    readTime: "6 min read",
    content: [
      {
        type: "paragraph",
        text: "Melasma is the skincare concern that frustrates patients and dermatologists alike — because it has a maddening tendency to return. Understanding why it comes back is the key to finally controlling it.",
      },
      {
        type: "heading",
        text: "What is Melasma?",
      },
      {
        type: "paragraph",
        text: "Melasma is a form of hyperpigmentation caused by overactive melanocytes (pigment-producing cells) triggered by UV exposure, hormonal changes, and heat. It typically appears as symmetrical brown or grey-brown patches on the face — most commonly on the cheeks, upper lip, forehead, and nose bridge. It's particularly prevalent in Indian women with Fitzpatrick skin types III–V.",
      },
      {
        type: "heading",
        text: "Why Does It Keep Coming Back?",
      },
      {
        type: "paragraph",
        text: "Most melasma treatments target the visible pigment — but leave the underlying overactive melanocytes intact. Without addressing the root cause (and crucially, without rigorous sun protection), pigment returns within weeks to months of treatment. This is why melasma requires a maintenance strategy, not a one-time treatment.",
      },
      {
        type: "heading",
        text: "The Protocol That Works",
      },
      {
        type: "paragraph",
        text: "<strong>Sun protection (non-negotiable):</strong> SPF 50+ with PA++++ rating, applied every 2 hours when outdoors. No treatment will hold without this. Iron-oxide-containing sunscreens additionally protect against visible light, which also triggers melasma.",
      },
      {
        type: "paragraph",
        text: "<strong>Topical depigmenting agents:</strong> Prescribed combinations of Tranexamic acid, Kojic acid, Azelaic acid, and Vitamin C work to suppress melanocyte activity while active treatment proceeds.",
      },
      {
        type: "paragraph",
        text: "<strong>Q-Switch Nd:YAG Laser (low fluence):</strong> Gentle laser toning shatters existing pigment clusters and suppresses melanocyte activity without triggering post-inflammatory hyperpigmentation. 6–8 sessions, fortnightly.",
      },
      {
        type: "paragraph",
        text: "<strong>Chemical Peels (glycolic / lactic):</strong> Accelerate cellular turnover and help pigment to shed faster when used as an adjunct to laser.",
      },
      {
        type: "paragraph",
        text: "<strong>Oral Tranexamic acid:</strong> An underused but highly effective adjunct — oral tranexamic acid significantly reduces melanocyte stimulation from within, helping to prevent recurrence.",
      },
      {
        type: "heading",
        text: "The Bottom Line",
      },
      {
        type: "paragraph",
        text: "Melasma can be controlled — but it requires a committed, multi-pronged approach and a dermatologist who understands its nuances. At Tru Glow, we have refined our melasma protocol over thousands of patients and consistently achieve lasting, visible clearing that patients maintain with simple monthly maintenance sessions.",
      },
    ],
  },
  {
    slug: "transplant-recovery",
    title: "Hair Transplant Recovery: Week-by-Week Timeline & What to Expect",
    excerpt: "The complete guide to hair transplant recovery — from the first 24 hours to month 12 when your results fully reveal themselves. No surprises.",
    category: "hair",
    categoryLabel: "Hair Transplant",
    image: "/real-photos/2.webp",
    emoji: "🌱",
    author: "Dr. Pranay Reddy",
    authorRole: "Consultant Hair Transplant Surgeon",
    date: "June 2024",
    readTime: "9 min read",
    content: [
      {
        type: "paragraph",
        text: "One of the most common questions our hair transplant patients ask is: 'What exactly happens after the procedure?' The honest answer is that recovery is straightforward — but understanding the timeline helps manage expectations and avoid unnecessary anxiety.",
      },
      {
        type: "heading",
        text: "First 24 Hours",
      },
      {
        type: "paragraph",
        text: "Immediately after your FUE or DHI procedure, the transplanted area will be slightly red and there may be minor swelling. Tiny scabs begin to form around each graft — this is normal and essential to graft healing. You'll leave the clinic with post-op instructions, antibiotics, anti-inflammatories, and a saline spray. Sleep with your head slightly elevated.",
      },
      {
        type: "heading",
        text: "Days 2–5",
      },
      {
        type: "paragraph",
        text: "Swelling (if any) peaks around day 2–3 and typically resolves by day 5. The tiny scabs in the recipient area will begin to harden. The donor area (back of head) heals very quickly — most patients report minimal discomfort. You can return to desk work within 3–5 days. Avoid hats, direct sun, and touching the grafts.",
      },
      {
        type: "heading",
        text: "Day 10–14: The Scab Shed",
      },
      {
        type: "paragraph",
        text: "Scabs gently shed between day 10–14, revealing clean healed skin underneath. By this point, most patients look completely normal and their transplant is essentially invisible to others.",
      },
      {
        type: "heading",
        text: "Weeks 3–6: Shock Loss",
      },
      {
        type: "paragraph",
        text: "This is the phase that catches patients off guard: the transplanted hairs shed. This is completely normal — called 'shock loss' or effluvium — and does not mean the transplant has failed. The follicle itself remains anchored in the scalp. The hair will regrow from the same follicle.",
      },
      {
        type: "heading",
        text: "Months 3–6: Early Growth",
      },
      {
        type: "paragraph",
        text: "New hair begins to emerge, initially as fine, soft 'baby' hairs. By month 6, approximately 50% of your final result is visible. The texture is still soft and the density still building.",
      },
      {
        type: "heading",
        text: "Month 9–12: Full Result",
      },
      {
        type: "paragraph",
        text: "By month 9, 80% of your result is visible. The final, complete result — in terms of density, texture, and coverage — is typically seen at month 12. At Tru Glow, we schedule a 12-month follow-up to assess your result and recommend any supplementary treatments (such as PRP maintenance) if desired.",
      },
    ],
  },
  {
    slug: "rhinoplasty-guide",
    title: "Rhinoplasty in India: What's Possible, What's Not, and How to Choose Your Surgeon",
    excerpt: "Nose surgery is one of the most requested and most misunderstood cosmetic procedures. An honest, detailed guide from our board-certified plastic surgeon.",
    category: "plastic",
    categoryLabel: "Plastic Surgery",
    image: "/plastic-hero.webp",
    emoji: "🌟",
    author: "Dr. Vijay Bhattipolu",
    authorRole: "Consultant Surgeon",
    date: "June 2024",
    readTime: "8 min read",
    content: [
      {
        type: "paragraph",
        text: "Rhinoplasty — nose surgery — is one of the most technically demanding procedures in plastic surgery, and one where the difference between a skilled and an unskilled surgeon is written permanently on your face. Here's everything you need to know before deciding.",
      },
      {
        type: "heading",
        text: "What Can Rhinoplasty Change?",
      },
      {
        type: "list",
        items: [
          "Reduce or refine a dorsal hump (bridge bump)",
          "Narrow a wide nose",
          "Reshape or refine a bulbous or drooping tip",
          "Reduce or reshape nostril size",
          "Correct a deviated septum (functional rhinoplasty)",
          "Improve breathing and airflow",
          "Address asymmetry",
        ],
      },
      {
        type: "heading",
        text: "What Rhinoplasty Cannot Do",
      },
      {
        type: "paragraph",
        text: "Rhinoplasty can't make you look like someone else — and responsible surgeons don't try. The goal is to improve harmony between your nose and your other features, not to impose an idealised 'template.' Show your surgeon what you dislike about your current nose, not a photo of a celebrity's nose.",
      },
      {
        type: "heading",
        text: "Open vs Closed Rhinoplasty",
      },
      {
        type: "paragraph",
        text: "<strong>Open rhinoplasty:</strong> A small incision across the columella (tissue between the nostrils) allows the surgeon to fully visualise and work with the nasal structures. Scar is nearly invisible once healed. Preferred for complex changes, tip work, and revision cases.",
      },
      {
        type: "paragraph",
        text: "<strong>Closed rhinoplasty:</strong> All incisions inside the nostrils — no external scar. Slightly less visibility for the surgeon but faster recovery. Suitable for simpler changes, such as hump reduction.",
      },
      {
        type: "heading",
        text: "Recovery Timeline",
      },
      {
        type: "paragraph",
        text: "A splint is worn for 7–10 days. Swelling peaks in the first week and gradually subsides. 80% of swelling resolves within 6 weeks — but the final refined result (especially at the tip) can take up to 12–18 months to fully reveal as residual swelling clears.",
      },
      {
        type: "heading",
        text: "Choosing Your Surgeon",
      },
      {
        type: "paragraph",
        text: "This is the most important decision. Look for: board certification in plastic surgery (not just general surgery), specific rhinoplasty experience and volume, before-and-after photos from their own patients (not stock photos), and a surgeon who listens more than they talk in your consultation. At Tru Glow, we offer computer simulated previews so you can see and approve your likely result before committing to surgery.",
      },
    ],
  },
  {
    slug: "prp-review",
    title: "PRP for Hair Loss: Is It Worth It? An Evidence-Based Review",
    excerpt: "PRP is everywhere — but does the science support the hype? Our dermatologist breaks down the research, realistic expectations, and who it works best for.",
    category: "hair",
    categoryLabel: "Hair Loss",
    image: "/real-photos/4.webp",
    emoji: "💊",
    author: "Dr. Vyshali Reddy",
    authorRole: "Senior Aesthetic Dermatologist",
    date: "June 2024",
    readTime: "7 min read",
    content: [
      {
        type: "paragraph",
        text: "PRP (Platelet-Rich Plasma) therapy for hair loss has become one of the most discussed treatments in dermatology — partly because of its genuine promise, and partly because of overselling by clinics that position it as a miracle cure. Here's an honest, evidence-based assessment.",
      },
      {
        type: "heading",
        text: "What is PRP?",
      },
      {
        type: "paragraph",
        text: "A small amount of your blood is drawn, placed in a centrifuge, and spun to separate and concentrate the platelet-rich plasma fraction. This PRP is then injected into the scalp using a fine mesotherapy needle. Platelets contain growth factors (PDGF, VEGF, EGF, IGF) that stimulate hair follicle activity, increase blood supply, and promote cellular proliferation.",
      },
      {
        type: "heading",
        text: "What Does the Research Say?",
      },
      {
        type: "paragraph",
        text: "Multiple randomised controlled trials (including studies published in the Journal of Cutaneous and Aesthetic Surgery) show that PRP significantly increases hair count, hair thickness, and the anagen (growth) phase in patients with androgenetic alopecia. A 2019 meta-analysis found PRP statistically superior to placebo in both hair count and density measures.",
      },
      {
        type: "heading",
        text: "Who Does PRP Work Best For?",
      },
      {
        type: "list",
        items: [
          "Early-to-moderate androgenetic alopecia (Norwood 1–4)",
          "Patients with active but miniaturised follicles — confirmed on dermoscopy",
          "Alopecia areata (patchy hair loss)",
          "Telogen effluvium (stress-related shedding)",
          "Post-hair transplant — as a healing and density booster",
        ],
      },
      {
        type: "heading",
        text: "Who Does PRP NOT Work For?",
      },
      {
        type: "paragraph",
        text: "PRP cannot revive completely dead follicles — if the follicle is gone (confirmed by dermoscopy showing absent follicular units), PRP will not produce regrowth in that area. Patients with very advanced hair loss (Norwood 5–7) typically need a transplant rather than PRP alone.",
      },
      {
        type: "heading",
        text: "What to Expect",
      },
      {
        type: "paragraph",
        text: "A standard PRP course at Tru Glow consists of 6 sessions, one month apart. Most patients notice reduced shedding from session 2–3, with visible improvement in density and thickness from session 4 onwards. Results continue improving for 3–6 months after the final session. Annual maintenance sessions are recommended to sustain the result.",
      },
      {
        type: "heading",
        text: "Is It Worth It?",
      },
      {
        type: "paragraph",
        text: "For the right patient — yes. PRP is one of the most evidence-supported non-surgical hair loss treatments available, with a strong safety profile and measurable results. It's not a replacement for a transplant in advanced cases, but as a standalone treatment for early loss or as an adjunct to a transplant, it's genuinely excellent.",
      },
    ],
  },
  {
    slug: "botox-30",
    title: "Botox at 30: Should You Start Early? A Dermatologist's Honest Answer",
    excerpt: "Preventative Botox is trending among younger patients. Is it a smart investment or an overreaction? We look at the evidence and give you a straight answer.",
    category: "skin",
    categoryLabel: "Anti-Ageing",
    image: "/real-photos/3.webp",
    emoji: "💎",
    author: "Dr. Vyshali Reddy",
    authorRole: "Senior Aesthetic Dermatologist",
    date: "June 2024",
    readTime: "6 min read",
    content: [
      {
        type: "paragraph",
        text: "'Baby Botox' and 'preventative Botox' have become buzzwords among patients in their late 20s and early 30s who want to get ahead of the ageing curve. But is early Botox a smart investment or an unnecessary intervention? Our answer might surprise you.",
      },
      {
        type: "heading",
        text: "How Wrinkles Actually Form",
      },
      {
        type: "paragraph",
        text: "Dynamic wrinkles — the lines you see when you frown, squint, or raise your eyebrows — form because repeated muscle contractions fold the overlying skin. Over years, the collagen in that skin breaks down at those fold points, creating static wrinkles (lines visible even when your face is completely relaxed). Botox prevents the muscle contraction — and therefore prevents the skin folding that causes the crease.",
      },
      {
        type: "heading",
        text: "The Case for Starting at 30",
      },
      {
        type: "paragraph",
        text: "If you already have visible dynamic lines (lines that appear when you move your face but disappear at rest), treating them in your late 20s or early 30s prevents those lines from becoming permanent. Many dermatologists argue that a small amount of Botox at 30 is far more effective than trying to reverse deep-set static wrinkles at 45.",
      },
      {
        type: "heading",
        text: "The Case Against Starting Too Early",
      },
      {
        type: "paragraph",
        text: "If you have no visible lines even with full facial expression, Botox at 25–27 is probably premature. Facial movement is a natural and important part of expression, and injecting muscles that don't yet need it provides no preventative benefit. The goal is to treat early, not pre-emptively.",
      },
      {
        type: "heading",
        text: "Baby Botox: The Right Approach for Young Patients",
      },
      {
        type: "paragraph",
        text: "Baby Botox refers to very small, conservative doses that soften lines without eliminating natural movement. This is the appropriate approach for patients in their late 20s–early 30s who have early dynamic lines. The result looks completely natural — friends won't notice Botox, they'll just notice you look well-rested.",
      },
      {
        type: "heading",
        text: "Our Recommendation",
      },
      {
        type: "paragraph",
        text: "If you're in your late 20s or 30s and see lines forms when you smile, frown, or squint — a conservative amount of Botox is a genuinely sensible preventative investment. If you're younger with no dynamic lines — focus on skincare, SPF, and sleep first. Come in for a consultation; we'll give you an honest assessment and recommend only what you actually need.",
      },
    ],
  },
  {
    slug: "glutathione",
    title: "IV Glutathione for Skin Brightening: What the Science Actually Says",
    excerpt: "Glutathione IV is the most requested beauty drip in Hyderabad. Here's what it does, what it doesn't do, how many sessions you need, and who it's best for.",
    category: "drips",
    categoryLabel: "IV Drips",
    image: "/ivdrips-hero.webp",
    emoji: "💧",
    author: "Dr. Anusha Vadlapatla",
    authorRole: "Consultant Dermatologist & Cosmetologist",
    date: "June 2024",
    readTime: "5 min read",
    content: [
      {
        type: "paragraph",
        text: "IV Glutathione is Hyderabad's most requested beauty drip — and it comes with more questions than almost any other treatment we offer. Does it work? Is it safe? How many sessions do you need? Here's our honest, science-based answer.",
      },
      {
        type: "heading",
        text: "What is Glutathione?",
      },
      {
        type: "paragraph",
        text: "Glutathione is a tripeptide (Glycine, Cysteine, Glutamic acid) produced naturally in every cell of your body. It's your primary antioxidant — protecting cells from oxidative stress, supporting liver detoxification, and regulating immune function. Its skin brightening effect comes from its ability to inhibit tyrosinase, the key enzyme in melanin production, and to shift melanogenesis from darker eumelanin to lighter phaeomelanin.",
      },
      {
        type: "heading",
        text: "Why IV and Not Oral?",
      },
      {
        type: "paragraph",
        text: "Oral glutathione supplements are poorly absorbed — the digestive system breaks them down before they reach systemic circulation. IV delivery bypasses digestion entirely, achieving near 100% bioavailability. This is why the results of IV glutathione are significantly more noticeable than oral supplementation.",
      },
      {
        type: "heading",
        text: "What Can IV Glutathione Actually Do?",
      },
      {
        type: "list",
        items: [
          "Reduce existing pigmentation and hyperpigmentation over a course of sessions",
          "Produce a general brightening and luminosity effect in the skin",
          "Improve skin clarity and reduce dullness",
          "Support antioxidant defence, reducing cellular ageing",
          "Complement and enhance results from laser pigmentation treatments",
        ],
      },
      {
        type: "heading",
        text: "What It Cannot Do",
      },
      {
        type: "paragraph",
        text: "IV glutathione is not a skin whitening treatment in the way bleaching creams work. It works by reducing melanin production — the effect is a brighter, more even version of your natural skin tone. It does not change your genetic skin colour and results reverse gradually if sessions are not maintained.",
      },
      {
        type: "heading",
        text: "How Many Sessions?",
      },
      {
        type: "paragraph",
        text: "Visible brightening typically begins around session 4–6, with significant improvement by session 10–12 for most patients. At Tru Glow, our Shine drip combines high-dose Glutathione with Vitamin C (which dramatically potentiates its effect) and Alpha Lipoic Acid for a synergistic brightening and antioxidant result that patients consistently describe as the most visible single-treatment glow they've experienced.",
      },
      {
        type: "heading",
        text: "Is It Safe?",
      },
      {
        type: "paragraph",
        text: "Yes — when administered by qualified medical professionals in a clinical setting, IV glutathione has a strong safety profile. It is not safe when administered by unqualified practitioners or in non-clinical environments. All Tru Glow IV sessions are administered by registered nurses under physician supervision.",
      },
    ],
  },
]
