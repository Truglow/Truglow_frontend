export type FAQItem = {
  question: string
  answer: string
  category: "general" | "skin" | "hair" | "laser" | "transplant" | "iv"
}

export const faqItems: FAQItem[] = [
  // General Category
  {
    category: "general",
    question: "How do I schedule an appointment at Tru Glow Clinic?",
    answer: "You can schedule an appointment easily in three ways: by filling out our online [Appointment Booking Form](/appointment), sending us a direct message on [WhatsApp](https://wa.me/917799427273), or calling us directly at [+91 7799427273](tel:+917799427273) or [+91 7799127273](tel:+917799127273). Our support team will coordinate with you to find a convenient date and time slot.",
  },
  {
    category: "general",
    question: "Where are your clinics located and what are the working hours?",
    answer: "We have two state-of-the-art clinics in Hyderabad:\n\n• **Manikonda Branch:** Tru Glow, Alkapur Township, Manikonda.\n• **HITEC City Branch:** Tru Glow, 1st Floor, SMR Vinay Technopolis (beside Google Office), Kothaguda.\n\nBoth locations are open Monday through Sunday, from 9:00 AM to 7:00 PM.",
  },
  {
    category: "general",
    question: "Are consultation fees adjustable against procedure costs?",
    answer: "Yes, in many cases, if you choose to proceed with a treatment package or procedure immediately following your consultation, our team can adjust the initial doctor consultation fee against your package billing. Please check with our clinic receptionist during your visit to confirm eligibility for specific procedures.",
  },
  {
    category: "general",
    question: "Why choose Truglow Hair & Skin Clinic for hair and skin treatments?",
    answer: "Truglow Hair & Skin Clinic offers advanced dermatology, hair restoration, laser, and aesthetic treatments at both Hitech City and Manikonda locations. Our experienced dermatologists focus on personalized treatment plans, advanced technology, patient education, and evidence-based care to help patients achieve healthy skin, stronger hair, and long-term confidence.",
  },

  // Hair Fall & Hair Growth Category
  {
    category: "hair",
    question: "Which is the best hair fall treatment in Manikonda?",
    answer: "There is no single treatment that works for everyone because hair fall can occur due to genetics, stress, dandruff, nutritional deficiencies, hormonal imbalances, or underlying medical conditions. At Truglow Hair & Skin Clinic in Manikonda, our dermatologists perform a detailed scalp and hair analysis to identify the root cause before recommending a personalized treatment plan. Depending on the diagnosis, treatments may include GFC Therapy, PRP, medications, anti-dandruff treatments, scalp therapies, or hair transplantation. Early diagnosis and timely treatment can help reduce hair fall, improve hair density, and promote healthier hair growth.",
  },
  {
    category: "hair",
    question: "Which is the best hair fall treatment in Hitech City?",
    answer: "There is no single treatment that works for everyone because hair fall can occur due to genetics, stress, dandruff, nutritional deficiencies, hormonal imbalances, or medical conditions. At Truglow Hair & Skin Clinic in Hitech City, our dermatologists perform a detailed scalp and hair analysis to identify the root cause before recommending a personalized treatment plan. Depending on the diagnosis, treatments may include GFC Therapy, PRP, medications, anti-dandruff treatments, scalp therapies, or hair transplantation. Early diagnosis and treatment often lead to better results and improved hair density.",
  },
  {
    category: "hair",
    question: "Does GFC treatment really work for hair fall?",
    answer: "Yes, GFC (Growth Factor Concentrate) treatment is one of the most advanced non-surgical treatments for hair fall and hair thinning. At Truglow Hair & Skin Clinic in Manikonda and Hitech City, our dermatologists recommend GFC therapy for patients experiencing excessive hair shedding, reduced hair density, or early-stage hair loss. The treatment uses concentrated growth factors derived from the patient's own blood to stimulate weakened hair follicles, improve scalp health, and promote healthier hair growth. Many patients experience reduced hair fall, improved hair density, and stronger hair after completing the recommended treatment sessions.",
  },
  {
    category: "hair",
    question: "Is GFC better than PRP for hair loss treatment?",
    answer: "Both GFC and PRP are effective hair restoration treatments, but they work in slightly different ways. GFC contains a highly concentrated preparation of growth factors that may provide more targeted stimulation to hair follicles. At Truglow Hair & Skin Clinic in Manikonda and Hitech City, our experienced dermatologists evaluate your scalp condition, hair loss pattern, and medical history before recommending the most suitable treatment. The choice between GFC and PRP depends on factors such as the severity of hair loss, scalp health, age, and your individual treatment goals, ensuring a personalized approach for the best possible results.",
  },
  {
    category: "hair",
    question: "When should I visit a dermatologist for hair fall?",
    answer: "If you are experiencing excessive hair shedding, noticeable hair thinning, a widening hair part, a receding hairline, or scalp concerns such as dandruff, itching, or irritation, it is important to consult a dermatologist as soon as possible. At Truglow Hair & Skin Clinic in Manikonda and Hitech City, our dermatologists conduct a comprehensive scalp and hair evaluation to identify the underlying cause of hair fall and create a personalized treatment plan. Early diagnosis and timely treatment can help slow hair loss, improve scalp health, and enhance the effectiveness of treatments such as GFC, PRP, medications, or hair transplantation when required.",
  },
  {
    category: "hair",
    question: "What are the early signs of hair thinning and baldness?",
    answer: "The early signs of hair thinning may include increased hair shedding, a widening hair part, reduced hair volume, a receding hairline, or visible scalp in certain areas. Many people ignore these symptoms until significant hair density is lost. At Truglow Hair & Skin Clinic in Hitech City and Manikonda, our dermatologists perform detailed scalp evaluations to identify hair loss at an early stage and recommend appropriate treatments before the condition progresses.",
  },
  {
    category: "hair",
    question: "Can hair fall be treated without a hair transplant?",
    answer: "Yes. Not everyone experiencing hair fall requires a hair transplant. At Truglow Hair & Skin Clinic, many patients achieve excellent results through non-surgical treatments such as GFC Therapy, PRP, medications, scalp treatments, and personalized hair care plans. A hair transplant is usually recommended only when hair follicles have become permanently inactive or when significant hair loss has occurred.",
  },
  {
    category: "hair",
    question: "Which treatment is best for reducing hair fall and improving hair density?",
    answer: "The ideal treatment depends on the cause and severity of hair loss. At Truglow Hair & Skin Clinic in Hitech City and Manikonda, our dermatologists assess factors such as scalp health, hair density, medical history, and lifestyle before recommending treatments like GFC Therapy, PRP, anti-hair fall medications, or hair transplantation. Personalized treatment plans generally provide the best outcomes.",
  },
  {
    category: "hair",
    question: "Does stress-related hair fall grow back?",
    answer: "In many cases, yes. Stress-related hair loss, commonly known as telogen effluvium, is often temporary when the underlying trigger is addressed. At Truglow Hair & Skin Clinic, our dermatologists evaluate each patient thoroughly to determine whether stress is contributing to hair fall and recommend suitable treatments and lifestyle modifications to support hair recovery.",
  },
  {
    category: "hair",
    question: "Can vitamin deficiencies cause hair loss?",
    answer: "Yes. Deficiencies in nutrients such as iron, vitamin D, vitamin B12, zinc, and protein can contribute to excessive hair shedding and poor hair growth. At Truglow Hair & Skin Clinic in Hitech City and Manikonda, our dermatologists may recommend diagnostic tests to identify nutritional deficiencies and create a comprehensive treatment plan to restore scalp and hair health.",
  },
  {
    category: "hair",
    question: "What is the latest treatment available for hair loss?",
    answer: "Advanced treatments such as GFC (Growth Factor Concentrate), PRP, regenerative therapies, and modern hair transplantation techniques have significantly improved hair restoration outcomes. At Truglow Hair & Skin Clinic, our dermatologists stay updated with the latest advancements in hair restoration and recommend evidence-based treatments based on individual patient needs.",
  },
  {
    category: "hair",
    question: "Can GFC treatment regrow thinning hair?",
    answer: "GFC treatment is designed to support healthier hair growth by delivering concentrated growth factors directly to the scalp. At Truglow Hair & Skin Clinic in Hitech City and Manikonda, GFC is commonly recommended for patients experiencing hair thinning, reduced density, and early-stage hair loss. While individual results vary, many patients notice healthier, stronger, and denser-looking hair after completing their treatment plan.",
  },
  {
    category: "hair",
    question: "How do I know if I need GFC, PRP, or a hair transplant?",
    answer: "The right treatment depends on the stage of hair loss and the condition of your hair follicles. At Truglow Hair & Skin Clinic, our dermatologists perform a detailed scalp assessment before recommending GFC, PRP, medications, or hair transplantation. Patients with active follicles often benefit from non-surgical treatments, while advanced hair loss may require hair transplantation.",
  },
  {
    category: "hair",
    question: "What is the best treatment for a receding hairline?",
    answer: "Treatment for a receding hairline depends on factors such as age, genetics, and the severity of hair loss. At Truglow Hair & Skin Clinic in Hitech City and Manikonda, treatment options may include GFC Therapy, PRP, medications, and hair transplantation. Early intervention often helps preserve existing hair and slow further progression.",
  },
  {
    category: "hair",
    question: "Why is my hair becoming thinner even though I'm young?",
    answer: "Hair thinning at a young age can occur due to genetics, stress, hormonal changes, nutritional deficiencies, scalp conditions, or lifestyle factors. At Truglow Hair & Skin Clinic, our dermatologists identify the underlying cause through a detailed consultation and scalp evaluation before recommending a customized treatment plan.",
  },
  {
    category: "hair",
    question: "Which hair treatments are available at Truglow Hair & Skin Clinic?",
    answer: "Truglow Hair & Skin Clinic offers a wide range of hair restoration solutions at both our Hitech City and Manikonda branches. Treatments include GFC Therapy, PRP, anti-dandruff treatments, scalp therapies, hair growth medications, hair transplantation, and personalized hair care programs. Every treatment plan is customized based on the patient's scalp condition and hair restoration goals.",
  },
  {
    category: "hair",
    question: "What is PRP therapy and how many sessions will I need?",
    answer: "PRP (Platelet-Rich Plasma) therapy is a non-surgical hair regrowth treatment. We collect a small sample of your blood, centrifuge it to separate the growth-factor-rich platelets, and micro-inject it across thinning areas of the scalp. Most patients need 6 to 8 sessions spaced 4 weeks apart to achieve optimum density and hair follicle revitalization, followed by maintenance sessions every 6 months.",
  },

  // Hair Transplant Category
  {
    category: "transplant",
    question: "When should someone consider a Hair Transplant?",
    answer: "Hair Transplantation may be considered when hair follicles have become permanently inactive and non-surgical treatments alone may not provide sufficient improvement. At Truglow Hair & Skin Clinic in Hitech City and Manikonda, our hair restoration specialists perform detailed evaluations before recommending Hair Transplantation.",
  },
  {
    category: "transplant",
    question: "Does a Hair Transplant look natural?",
    answer: "Modern Hair Transplant techniques are designed to create natural-looking results. At Truglow Hair & Skin Clinic, careful planning of the hairline and graft placement helps ensure a natural appearance that blends with existing hair.",
  },
  {
    category: "transplant",
    question: "Can Hair Transplantation be combined with GFC treatment?",
    answer: "Yes. In many cases, GFC Therapy may be recommended alongside Hair Transplantation to support scalp health and existing hair follicles. At Truglow Hair & Skin Clinic, treatment plans are customized based on individual hair restoration goals.",
  },
  {
    category: "transplant",
    question: "How long does it take to see results after a hair transplant?",
    answer: "Hair transplant results appear gradually in stages. The implanted hairs will shed within the first 2 to 4 weeks (this is normal and called 'shock loss'). The roots remain healthy and active, and new hair shafts begin to emerge at 3 months. Visible density gains will be apparent at 6 months, and you will see the final, mature, high-density results at the 12-month mark.",
  },

  // Skin Care & Dermatology Category
  {
    category: "skin",
    question: "Which is the best skin care clinic in Hitech City and Manikonda for personalized skin treatments?",
    answer: "Choosing the right skin care clinic depends on factors such as dermatologist expertise, treatment options, technology, and personalized care. At Truglow Hair & Skin Clinic in Hitech City and Manikonda, our dermatologists provide customized treatment plans for concerns such as acne, pigmentation, dull skin, aging skin, open pores, and skin rejuvenation. Every treatment begins with a detailed skin assessment to ensure the most suitable approach for each patient.",
  },
  {
    category: "skin",
    question: "What are Skin Boosters and who should consider them?",
    answer: "Skin Boosters are injectable treatments designed to improve skin hydration, texture, elasticity, and overall skin quality. At Truglow Hair & Skin Clinic, Skin Boosters are commonly recommended for individuals experiencing dull, dehydrated, or tired-looking skin. Unlike fillers, Skin Boosters focus on improving skin quality rather than adding volume, helping patients achieve healthier and naturally glowing skin.",
  },
  {
    category: "skin",
    question: "Are Skin Boosters better than regular facials?",
    answer: "Facials primarily work on the surface of the skin, while Skin Boosters help improve hydration and skin quality from within. At Truglow Hair & Skin Clinic in Hitech City and Manikonda, dermatologists may recommend Skin Boosters for patients seeking long-term skin rejuvenation, improved elasticity, and a healthy glow that cannot always be achieved with topical treatments alone.",
  },
  {
    category: "skin",
    question: "What is a Carbon Laser Peel and what are its benefits?",
    answer: "Carbon Laser Peel is a non-invasive skin rejuvenation treatment that helps reduce oiliness, improve skin texture, minimize pores, and brighten the complexion. At Truglow Hair & Skin Clinic, Carbon Laser Peel is a popular choice among patients with oily skin, blackheads, acne-prone skin, and enlarged pores. The treatment also promotes smoother and healthier-looking skin with minimal downtime.",
  },
  {
    category: "skin",
    question: "Is Carbon Laser Peel suitable for acne-prone skin?",
    answer: "Yes. Carbon Laser Peel is often recommended for individuals with oily and acne-prone skin because it helps remove excess oil, cleanse pores, and improve skin texture. At Truglow Hair & Skin Clinic, our dermatologists evaluate the patient's skin condition before recommending Carbon Laser Peel as part of a personalized acne management plan.",
  },
  {
    category: "skin",
    question: "What are Chemical Peels and how do they improve skin?",
    answer: "Chemical Peels use carefully selected solutions to exfoliate damaged skin layers and encourage healthy skin renewal. At Truglow Hair & Skin Clinic in Hitech City and Manikonda, Chemical Peels are commonly used to address acne, pigmentation, tanning, uneven skin tone, fine lines, and dull skin. The treatment is customized based on the patient's skin type and concerns.",
  },
  {
    category: "skin",
    question: "Which skin concerns can be treated with Chemical Peels?",
    answer: "Chemical Peels can help improve acne, acne marks, pigmentation, sun damage, uneven skin tone, and early signs of aging. At Truglow Hair & Skin Clinic, our dermatologists recommend specific peel formulations depending on the patient's skin condition and treatment goals.",
  },
  {
    category: "skin",
    question: "How do dermatologists decide the right skin treatment?",
    answer: "The right treatment depends on factors such as skin type, medical history, concerns, and desired outcomes. At Truglow Hair & Skin Clinic, every treatment begins with a detailed consultation and skin assessment to ensure personalized care.",
  },
  {
    category: "skin",
    question: "Which treatment is best for dull and tired-looking skin?",
    answer: "The ideal treatment depends on the cause of the concern. At Truglow Hair & Skin Clinic, dermatologists may recommend Skin Boosters, Chemical Peels, Carbon Laser Peel, Hydrafacial, or IV Therapy depending on the patient's skin condition and goals.",
  },
  {
    category: "skin",
    question: "What is the difference between a Hydrafacial and a clinical Medifacial?",
    answer: "A Hydrafacial is a standardized treatment using vortex-extraction technology to deep-cleanse pores, remove blackheads, and infuse antioxidant serums, providing an instant glow with zero downtime. A Medifacial (Medical Facial) is customized by our dermatologists, combining clinical peeling agents (like salicylic or glycolic acid), custom ampoules, and tools like microcurrent or LED phototherapy to treat deep-seated concerns such as active acne, stubborn melasma, or fine lines.",
  },
  {
    category: "skin",
    question: "Are chemical peels safe for sensitive skin?",
    answer: "Absolutely. Chemical peels are safe when chosen and administered by certified medical professionals. For sensitive skin, our dermatologists use gentle, superficial peels (such as Mandelic acid or Lactic acid) that lightly dissolve dead skin cells without stripping the skin barrier. We track your skin's healing and prescribe soothing barrier-repair creams and high-SPF sunscreens for post-peel care.",
  },

  // IV Therapy Category
  {
    category: "iv",
    question: "What is IV Therapy and how does it support skin health?",
    answer: "IV Therapy delivers vitamins, minerals, antioxidants, and hydration directly into the bloodstream. At Truglow Hair & Skin Clinic, IV Therapy is often chosen by patients looking to support skin health, hydration, energy levels, and overall wellness. The treatment is administered under medical supervision and tailored to individual wellness goals.",
  },
  {
    category: "iv",
    question: "Can IV Drips improve skin glow?",
    answer: "IV Drips may help support healthier-looking skin by delivering hydration and essential nutrients directly into the body. At Truglow Hair & Skin Clinic in Hitech City and Manikonda, IV Therapy is commonly selected by patients looking to complement their skincare routine and maintain healthy skin from within.",
  },
  {
    category: "iv",
    question: "Is IV Therapy safe?",
    answer: "When administered by trained medical professionals, IV Therapy is generally considered safe. At Truglow Hair & Skin Clinic, every patient undergoes a consultation before treatment to ensure the selected IV Therapy is appropriate for their individual needs and goals.",
  },

  // Laser Hair Removal Category
  {
    category: "laser",
    question: "Is Laser Hair Removal permanent?",
    answer: "Laser Hair Removal provides long-term hair reduction by targeting hair follicles during their active growth phase. At Truglow Hair & Skin Clinic, our dermatologists create customized Laser Hair Removal plans based on the patient's skin type, hair type, and treatment area to achieve optimal results.",
  },
  {
    category: "laser",
    question: "How many Laser Hair Removal sessions are usually needed?",
    answer: "The number of sessions varies depending on factors such as hair thickness, treatment area, and hormonal influences. At Truglow Hair & Skin Clinic in Hitech City and Manikonda, our dermatologists assess each patient individually and recommend a treatment plan designed to achieve long-term hair reduction.",
  },
  {
    category: "laser",
    question: "Is Laser Hair Removal painful?",
    answer: "Most patients describe Laser Hair Removal as a mild snapping sensation rather than pain. At Truglow Hair & Skin Clinic, advanced laser technology is used to enhance patient comfort while maintaining treatment effectiveness.",
  },
  {
    category: "laser",
    question: "Can men undergo Laser Hair Removal?",
    answer: "Yes. Laser Hair Removal is a popular treatment among both men and women. At Truglow Hair & Skin Clinic, common treatment areas for men include the beard line, chest, back, shoulders, and neck.",
  },
  {
    category: "laser",
    question: "Is Laser Hair Removal permanent and safe for all skin types?",
    answer: "Yes, Laser Hair Removal is highly safe and offers permanent hair reduction of up to 80-90%. Any hair that regrows over time is extremely thin, light, and sparse. At Tru Glow, we use US-FDA approved diode and Nd:YAG lasers designed specifically to safeguard melanin-rich Indian skin. Integrated cooling plates keep the skin at 0-4°C, making the procedure virtually painless.",
  },
  {
    category: "laser",
    question: "How should I prepare for my laser hair removal session?",
    answer: "To prepare for your session, please cleanly shave the treatment area 24 hours before your appointment. Do not pluck, wax, thread, or use depilatory creams for 4 weeks prior, as the laser requires the hair root to be present inside the follicle to work. Additionally, avoid heavy sun exposure, sunburns, or tanning creams for 2 weeks before your session.",
  },
]
