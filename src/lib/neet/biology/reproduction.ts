
import type { NeetModule } from '@/lib/types';

export const reproduction: NeetModule = {
    id: 'neet-biology-reproduction',
    title: 'Biology - Reproduction (இனப்பெருக்கம்)',
    chapter: 'Reproduction',
    subject: 'Biology',
    learningObjectives: [
        "Differentiate between asexual and sexual reproduction, providing examples of various types like fission, budding, and fragmentation.",
        "Describe the complete process of sexual reproduction in flowering plants, from flower structure to pollination, fertilization, and post-fertilization changes (seed and fruit development).",
        "Explain the structure and function of the human male and female reproductive systems.",
        "Understand the process of gametogenesis (spermatogenesis and oogenesis) and the hormonal control of the menstrual cycle.",
        "Describe the key events of fertilization, implantation, pregnancy, and embryonic development in humans.",
        "Discuss various methods of birth control (contraception) and the causes and prevention of common sexually transmitted diseases (STDs)."
    ],
    prerequisites: [
        "Knowledge of plant and animal cell structure.",
        "Understanding of cell division (mitosis and meiosis).",
        "Basic familiarity with the human body systems and plant morphology."
    ],
    conceptOverview: "This unit covers the fundamental biological process of reproduction, ensuring the continuity of species from one generation to the next. It explores the diversity of reproductive strategies, from simple asexual methods to the complexity of sexual reproduction in flowering plants and humans. The unit provides a detailed look at the anatomical structures, physiological processes, and hormonal controls involved in producing offspring. It concludes with the important topic of reproductive health, which is crucial for individual and societal well-being.",
    tamilConnection: "சங்க இலக்கியங்களில் அகத்திணைகள், காதல் மற்றும் குடும்ப வாழ்க்கையின் முக்கியத்துவத்தை விவரிக்கின்றன. இது, மனித இனப்பெருக்கத்தின் சமூக மற்றும் கலாச்சார அம்சங்களைப் பிரதிபலிக்கிறது. இந்த அத்தியாயம், அந்த வாழ்க்கைச் சுழற்சியின் உயிரியல் அடிப்படையை, அதாவது இனப்பெருக்க உறுப்புகளின் அமைப்பு மற்றும் செயல்பாடுகளை விளக்குகிறது.",
    culturalContext: "Traditional Indian wedding ceremonies often include rituals and symbolism associated with fertility and the continuation of the family line. These cultural practices are deeply connected to the biological imperatives of reproduction, which are explained scientifically in this chapter, covering everything from the menstrual cycle to fertilization.",
    syllabusMapping: [{
        topic: 'Reproduction in Organisms, Sexual Reproduction in Flowering Plants, Human Reproduction, Reproductive Health',
        tnBoardChapter: '12th Std Botany Ch 1; 12th Std Zoology Ch 1, 2',
        ncertReference: 'Class 12 Biology - Unit 6',
        notes: 'High weightage unit. Diagrams from human reproduction (male/female systems, spermatogenesis, oogenesis, menstrual cycle) and processes in plant reproduction (pollination, fertilization, double fertilization) are very important.',
        mappingDescription: 'Maps to the first few chapters of TN Board Std 12 Botany and Zoology.'
    }],
    stateBoardGaps: [
      "NCERT provides a more detailed description of certain types of asexual reproduction like gemmule formation in sponges.",
      "The hormonal control of the menstrual cycle, with graphical representations showing the interplay of FSH, LH, estrogen, and progesterone, is a key focus in NCERT and frequently tested.",
      "While both syllabi cover it, NEET questions often focus on the specific events of embryogenesis (cleavage, morula, blastocyst, gastrulation) based on NCERT terminology.",
      "The section on assisted reproductive technologies (ART) like IVF, ZIFT, GIFT is more detailed and a source of direct questions in NEET."
    ],
    extraNeetConcepts: [
      "Parthenogenesis (development of an organism from an unfertilized egg) and its types (arrhenotoky, thelytoky).",
      "Apomixis and Polyembryony in plants, which are special mechanisms of asexual reproduction that mimic sexual reproduction.",
      "The detailed structure and function of different parts of the sperm (acrosome, neck, middle piece).",
      "The specific roles of placental hormones like hCG, hPL, estrogen, and progesterone during pregnancy."
    ],
    ncertReadingGuide: [
      "In 'Sexual Reproduction in Flowering Plants', Figures 2.7 (structure of anatropous ovule), 2.8 (pollen grain), and 2.13 (double fertilization) are extremely important for diagram-based questions.",
      "For 'Human Reproduction', master the schematic representations of spermatogenesis and oogenesis (Figures 3.5 and 3.7) and the diagram of the menstrual cycle (Figure 3.9).",
      "Pay close attention to the functions of each part of the male and female reproductive systems as listed in the text.",
      "In 'Reproductive Health', the table listing various contraceptive methods with their mechanisms of action is a very high-yield area for MCQs.",
      "The table listing common STDs, their causative organisms, and symptoms should be memorized."
    ],
    keyFormulasAndDiagrams: {
        formulas: [],
        diagrams: []
    },
    workedExamples: [],
    mcqs: [
        { question: "Double fertilization is a characteristic feature of:", options: ["A. Algae", "B. Fungi", "C. Gymnosperms", "D. Angiosperms"], answer: "D. Angiosperms", explanation: "Double fertilization, involving the fusion of one male gamete with the egg cell (syngamy) and the other with the central cell (triple fusion), is a unique feature of flowering plants (Angiosperms).", neetFrequency: 5 },
        { question: "The part of the human male reproductive system where sperms are temporarily stored is:", options: ["A. Vas deferens", "B. Seminal vesicles", "C. Epididymis", "D. Urethra"], answer: "C. Epididymis", explanation: "Sperms undergo maturation and are stored in the epididymis before ejaculation.", neetFrequency: 4 },
        { question: "Which hormone is primarily responsible for ovulation?", options: ["A. FSH", "B. LH", "C. Progesterone", "D. Estrogen"], answer: "B. LH", explanation: "A rapid surge in Luteinizing Hormone (LH) level around mid-cycle (about 14th day) induces rupture of the Graafian follicle and release of the ovum (ovulation).", neetFrequency: 5 },
        { question: "Which of the following is a barrier method of contraception?", options: ["A. IUD", "B. Oral pills", "C. Condoms", "D. Vasectomy"], answer: "C. Condoms", explanation: "Condoms are physical barriers that prevent the entry of sperm into the female reproductive tract.", neetFrequency: 3 },
        { question: "The endosperm in angiosperms is typically:", options: ["A. Haploid (n)", "B. Diploid (2n)", "C. Triploid (3n)", "D. Tetraploid (4n)"], answer: "C. Triploid (3n)", explanation: "The endosperm develops from the primary endosperm nucleus, which is formed by the fusion of a male gamete (n) with the central cell containing two polar nuclei (n+n). Thus, it is triploid.", neetFrequency: 4 },
        { question: "The acrosome of the sperm is derived from the:", options: ["A. Mitochondria", "B. Nucleus", "C. Golgi complex", "D. Centriole"], answer: "C. Golgi complex", explanation: "The acrosome is a cap-like structure containing enzymes to help fertilization, and it is formed from the Golgi apparatus during spermiogenesis.", neetFrequency: 3 },
        { question: "The menstrual cycle ceases during pregnancy due to the high levels of:", options: ["A. FSH", "B. LH", "C. Progesterone", "D. Oxytocin"], answer: "C. Progesterone", explanation: "The corpus luteum (and later the placenta) produces high levels of progesterone, which maintains the endometrium and inhibits the release of gonadotropins (FSH and LH), thus preventing new follicular development and menstruation.", neetFrequency: 4 },
        { question: "Which of the following sexually transmitted diseases is caused by a bacterium?", options: ["A. AIDS", "B. Genital herpes", "C. Syphilis", "D. Genital warts"], answer: "C. Syphilis", explanation: "Syphilis is caused by the bacterium Treponema pallidum. AIDS, herpes, and genital warts are caused by viruses.", neetFrequency: 3 },
        { question: "Wind pollination (anemophily) is common in:", options: ["A. Roses", "B. Sunflowers", "C. Grasses", "D. Water lilies"], answer: "C. Grasses", explanation: "Grasses have small, inconspicuous flowers with well-exposed stamens and large, feathery stigmas to trap airborne pollen, which are all characteristics of wind-pollinated plants.", neetFrequency: 2 },
        { question: "The implantation of the blastocyst occurs in which part of the female reproductive system?", options: ["A. Ovary", "B. Fallopian tube", "C. Uterus", "D. Vagina"], answer: "C. Uterus", explanation: "The blastocyst implants into the endometrium, the inner lining of the uterus.", neetFrequency: 4 },
        { question: "The technique of 'Amniocentesis' is used for:", options: ["A. Determining the sex of the foetus", "B. Detecting chromosomal abnormalities in the foetus", "C. Inducing ovulation", "D. Both A and B"], answer: "D. Both A and B", explanation: "Amniocentesis analyzes fetal cells from the amniotic fluid to detect genetic disorders, but it can also reveal the sex of the foetus, leading to its misuse for female foeticide.", neetFrequency: 2 },
        { question: "In a typical angiosperm, the number of nuclei in the embryo sac is:", options: ["A. 7", "B. 8", "C. 3", "D. 1"], answer: "B. 8", explanation: "A mature embryo sac is a 7-celled, 8-nucleate structure, comprising an egg cell, two synergids, three antipodal cells, and a central cell with two polar nuclei.", neetFrequency: 4 },
        { question: "The function of Sertoli cells is to:", options: ["A. Synthesize androgens", "B. Produce sperm", "C. Provide nutrition to the developing sperm", "D. Secrete LH"], answer: "C. Provide nutrition to the developing sperm", explanation: "Sertoli cells, found in the seminiferous tubules, provide structural support and nutrition to the germ cells during spermatogenesis.", neetFrequency: 3 },
        { question: "The corpus luteum secretes a hormone called:", options: ["A. LH", "B. FSH", "C. Progesterone", "D. Testosterone"], answer: "C. Progesterone", explanation: "After ovulation, the ruptured Graafian follicle transforms into the corpus luteum, which secretes large amounts of progesterone.", neetFrequency: 4 },
        { question: "The first movements of the foetus and the appearance of hair on the head are usually observed during which month of pregnancy?", options: ["A. Third month", "B. Fourth month", "C. Fifth month", "D. Sixth month"], answer: "C. Fifth month", explanation: "These are key developmental milestones that occur during the fifth month of gestation.", neetFrequency: 2 },
        { question: "A method of birth control which prevents the ovum from reaching the uterus is:", options: ["A. Tubectomy", "B. Vasectomy", "C. Condom", "D. IUD"], answer: "A. Tubectomy", explanation: "Tubectomy is a surgical method where the fallopian tubes are blocked or cut, preventing the ovum from traveling to the uterus and sperm from reaching the ovum.", neetFrequency: 3 },
        { question: "Which of the following is an example of an organism that reproduces by budding?", options: ["A. Amoeba", "B. Paramecium", "C. Hydra", "D. Planaria"], answer: "C. Hydra", explanation: "Hydra reproduces asexually by developing buds that grow into new individuals and detach from the parent body.", neetFrequency: 1 },
        { question: "The transfer of pollen grains from the anther to the stigma of another flower of the same plant is called:", options: ["A. Autogamy", "B. Geitonogamy", "C. Xenogamy", "D. Cleistogamy"], answer: "B. Geitonogamy", explanation: "Geitonogamy is functionally cross-pollination but genetically similar to self-pollination (autogamy) as the pollen comes from the same plant.", neetFrequency: 4 },
        { question: "The human placenta acts as an endocrine tissue and produces several hormones. Which of the following is NOT produced by the placenta?", options: ["A. Human chorionic gonadotropin (hCG)", "B. Human placental lactogen (hPL)", "C. Relaxin", "D. Luteinizing hormone (LH)"], answer: "D. Luteinizing hormone (LH)", explanation: "LH is produced by the anterior pituitary gland. hCG, hPL, estrogens, and progestogens are produced by the placenta. Relaxin is produced by the ovary in later stages.", neetFrequency: 3 },
        { question: "The part of the fallopian tube closest to the ovary is the:", options: ["A. Isthmus", "B. Ampulla", "C. Infundibulum", "D. Cervix"], answer: "C. Infundibulum", explanation: "The infundibulum is the funnel-shaped part of the fallopian tube that lies close to the ovary and has finger-like projections called fimbriae to collect the ovum.", neetFrequency: 2 },
        { question: "A 'Diaphragm' used as a contraceptive is a:", options: ["A. Barrier method", "B. Hormonal method", "C. Natural method", "D. Surgical method"], answer: "A. Barrier method", explanation: "Diaphragms, cervical caps, and vaults are barrier methods made of rubber that are inserted into the female reproductive tract to cover the cervix.", neetFrequency: 2 },
        { question: "Which layer of the uterus undergoes cyclical changes during the menstrual cycle?", options: ["A. Perimetrium", "B. Myometrium", "C. Endometrium", "D. Epimetrium"], answer: "C. Endometrium", explanation: "The endometrium is the inner glandular layer that proliferates during each cycle in preparation for implantation and is shed during menstruation if fertilization does not occur.", neetFrequency: 4 },
        { question: "The fusion of a male gamete with the secondary nucleus in an embryo sac is known as:", options: ["A. Syngamy", "B. Triple fusion", "C. Parthenogenesis", "D. Apogamy"], answer: "B. Triple fusion", explanation: "The fusion of the second male gamete with the two polar nuclei (which form the secondary nucleus) is called triple fusion, as it involves the fusion of three haploid nuclei.", neetFrequency: 3 },
        { question: "Spermiation is the process of:", options: ["A. Formation of spermatids", "B. Maturation of sperm", "C. Release of sperm from Sertoli cells", "D. Ejaculation of semen"], answer: "C. Release of sperm from Sertoli cells", explanation: "Spermiation is the final stage where mature spermatozoa are released from the Sertoli cells into the lumen of the seminiferous tubules.", neetFrequency: 3 },
        { question: "The function of the fimbriae of the fallopian tube is to:", options: ["A. Secrete hormones", "B. Move the sperm towards the egg", "C. Help in the development of the embryo", "D. Collect the ovum after ovulation"], answer: "D. Collect the ovum after ovulation", explanation: "The fimbriae are finger-like projections that help in the collection of the ovum from the peritoneal cavity after it is released from the ovary.", neetFrequency: 2 },
        { question: "Which of the following is NOT a characteristic of insect-pollinated flowers?", options: ["A. Large and colorful petals", "B. Production of nectar", "C. Light and non-sticky pollen grains", "D. Fragrance"], answer: "C. Light and non-sticky pollen grains", explanation: "Light and non-sticky pollen is a characteristic of wind-pollinated flowers. Insect-pollinated flowers have sticky pollen to adhere to the insect's body.", neetFrequency: 3 },
        { question: "The signals for parturition (childbirth) originate from:", options: ["A. The fully developed foetus and the placenta", "B. The mother's pituitary gland only", "C. The mother's ovary only", "D. The endometrium of the uterus"], answer: "A. The fully developed foetus and the placenta", explanation: "The signals for parturition originate from the fully developed foetus and the placenta, which induce mild uterine contractions called the foetal ejection reflex.", neetFrequency: 2 },
        { question: "Test-tube baby program employs which one of the following techniques?", options: ["A. Gamete intra-fallopian transfer (GIFT)", "B. Zygote intra-fallopian transfer (ZIFT)", "C. Intra-cytoplasmic sperm injection (ICSI)", "D. Intrauterine insemination (IUI)"], answer: "B. Zygote intra-fallopian transfer (ZIFT)", explanation: "IVF (in vitro fertilization), commonly known as the test-tube baby program, involves fertilizing the egg outside the body and then transferring the resulting zygote or early embryo (up to 8 blastomeres) into the fallopian tube (ZIFT) or uterus (IUT).", neetFrequency: 3 },
        { question: "The nutritive tissue in the seeds of most angiosperms is:", options: ["A. Endosperm", "B. Perisperm", "C. Cotyledons", "D. Nucellus"], answer: "A. Endosperm", explanation: "The endosperm is a nutritive tissue formed as a result of triple fusion and provides nourishment to the developing embryo.", neetFrequency: 3 },
        { question: "Leydig cells are found in the:", options: ["A. Ovary", "B. Liver", "C. Testis", "D. Pituitary gland"], answer: "C. Testis", explanation: "Leydig cells or interstitial cells are found in the interstitial spaces outside the seminiferous tubules in the testis. They synthesize and secrete androgens like testosterone.", neetFrequency: 4 },
        { question: "Cleavage is a type of cell division where:", options: ["A. The number of cells increases but the size of the embryo does not", "B. The size of the cells increases", "C. The number of cells remains constant", "D. The embryo grows in size"], answer: "A. The number of cells increases but the size of the embryo does not", explanation: "Cleavage refers to the rapid mitotic divisions of the zygote where the resulting blastomeres become smaller with each division, and the overall size of the embryo does not increase.", neetFrequency: 2 },
        { question: "The 'pollen kit' is found on the surface of pollen grains in:", options: ["A. Anemophilous flowers", "B. Entomophilous flowers", "C. Hydrophilous flowers", "D. Gymnosperms"], answer: "B. Entomophilous flowers", explanation: "The pollen kit is a sticky, oily layer found on the pollen of insect-pollinated (entomophilous) flowers, which helps it to adhere to insects.", neetFrequency: 1 },
        { question: "The layer of cells immediately surrounding the ovum at ovulation is called:", options: ["A. Zona pellucida", "B. Corona radiata", "C. Theca interna", "D. Granulosa"], answer: "B. Corona radiata", explanation: "The ovum is surrounded by the non-cellular zona pellucida, which is in turn surrounded by a layer of granulosa cells called the corona radiata.", neetFrequency: 3 },
        { question: "The technique called 'GIFT' is the transfer of:", options: ["A. A zygote into the fallopian tube", "B. An embryo into the uterus", "C. An ovum from a donor into the fallopian tube of another female", "D. A sperm directly into an ovum"], answer: "C. An ovum from a donor into the fallopian tube of another female", explanation: "GIFT stands for Gamete Intra-Fallopian Transfer. It is used for females who cannot produce an ovum but can provide a suitable environment for fertilization and development.", neetFrequency: 3 },
        { question: "In a flowering plant, a tetrad of megaspores is formed from the:", options: ["A. Nucellus", "B. Megaspore mother cell", "C. Egg cell", "D. Antipodal cells"], answer: "B. Megaspore mother cell", explanation: "The diploid megaspore mother cell undergoes meiosis to form a linear tetrad of four haploid megaspores.", neetFrequency: 3 },
        { question: "Capacitation of sperm occurs in the:", options: ["A. Testis", "B. Epididymis", "C. Vas deferens", "D. Female reproductive tract"], answer: "D. Female reproductive tract", explanation: "Capacitation refers to the physiological changes that sperm must undergo in the female reproductive tract before they are capable of fertilizing an egg.", neetFrequency: 2 },
        { question: "The human embryo gets its nourishment from the mother's blood through the:", options: ["A. Uterus", "B. Fallopian tube", "C. Placenta", "D. Yolk sac"], answer: "C. Placenta", explanation: "The placenta is the structural and functional unit between the developing embryo (foetus) and the maternal body, facilitating the supply of nutrients and oxygen.", neetFrequency: 4 },
        { question: "Which contraceptive method also provides protection from sexually transmitted diseases?", options: ["A. Oral pills", "B. IUDs", "C. Sterilization", "D. Condoms"], answer: "D. Condoms", explanation: "Barrier methods like condoms are the only contraceptives that also offer protection against STDs.", neetFrequency: 4 },
        { question: "A flower that contains both stamens and carpels is called:", options: ["A. Unisexual", "B. Bisexual", "C. Staminate", "D. Pistillate"], answer: "B. Bisexual", explanation: "A bisexual or hermaphrodite flower has both male (androecium) and female (gynoecium) reproductive parts.", neetFrequency: 1 },
        { question: "The morphogenetic movements and differentiation of germ layers occur during:", options: ["A. Cleavage", "B. Blastulation", "C. Gastrulation", "D. Neurulation"], answer: "C. Gastrulation", explanation: "Gastrulation is the process where the blastocyst transforms into a gastrula with three primary germ layers (ectoderm, mesoderm, and endoderm) through cell rearrangement.", neetFrequency: 3 },
        { question: "Pollination by water is known as:", options: ["A. Anemophily", "B. Entomophily", "C. Hydrophily", "D. Ornithophily"], answer: "C. Hydrophily", explanation: "Hydrophily is pollination by water, which is quite rare in flowering plants.", neetFrequency: 1 },
        { question: "The hormone hCG is secreted by the:", options: ["A. Ovary", "B. Pituitary gland", "C. Placenta", "D. Uterus"], answer: "C. Placenta", explanation: "Human Chorionic Gonadotropin (hCG) is produced by the placenta shortly after implantation. Its presence in urine is the basis for pregnancy tests.", neetFrequency: 3 },
        { question: "The correct sequence of male accessory ducts is:", options: ["A. Rete testis → Vasa efferentia → Epididymis → Vas deferens", "B. Rete testis → Epididymis → Vasa efferentia → Vas deferens", "C. Epididymis → Rete testis → Vasa efferentia → Vas deferens", "D. Vasa efferentia → Rete testis → Vas deferens → Epididymis"], answer: "A. Rete testis → Vasa efferentia → Epididymis → Vas deferens", explanation: "Sperm travels from the seminiferous tubules to the rete testis, then through the vasa efferentia to the epididymis, and finally through the vas deferens.", neetFrequency: 2 },
        { question: "The part of the plant that persists in some seeds like black pepper and beet is:", options: ["A. Nucellus", "B. Endosperm", "C. Cotyledon", "D. Integument"], answer: "A. Nucellus", explanation: "The persistent nucellus in the seed is called perisperm. It is found in black pepper and beet.", neetFrequency: 1 },
        { question: "What is the function of the copper ions in a copper-releasing IUD?", options: ["A. They increase phagocytosis of sperm", "B. They suppress sperm motility and fertilizing capacity", "C. They make the uterus unsuitable for implantation", "D. Both A and B"], answer: "D. Both A and B", explanation: "Copper ions released suppress sperm motility and their ability to fertilize the ovum, and also appear to increase phagocytosis of sperm within the uterus.", neetFrequency: 3 },
        { question: "A dioecious flowering plant prevents:", options: ["A. Both autogamy and geitonogamy", "B. Autogamy but not geitonogamy", "C. Geitonogamy but not autogamy", "D. Neither autogamy nor geitonogamy"], answer: "A. Both autogamy and geitonogamy", explanation: "Dioecious plants have male and female flowers on different plants. This prevents both self-pollination (autogamy) and pollination between different flowers of the same plant (geitonogamy).", neetFrequency: 4 },
        { question: "The transformation of a spermatid into a spermatozoon is called:", options: ["A. Spermatogenesis", "B. Spermiation", "C. Spermiogenesis", "D. Capacitation"], answer: "C. Spermiogenesis", explanation: "Spermiogenesis is the differentiation process where a non-motile spermatid transforms into a motile spermatozoon.", neetFrequency: 3 },
        { question: "In a Graafian follicle, the antrum is:", options: ["A. The fluid-filled cavity", "B. The outer layer", "C. The layer surrounding the oocyte", "D. The developing egg cell"], answer: "A. The fluid-filled cavity", explanation: "The antrum is the characteristic fluid-filled cavity of a tertiary and mature Graafian follicle.", neetFrequency: 2 },
        { question: "Which of the following hormones is not a steroid?", options: ["A. Estrogen", "B. Progesterone", "C. Testosterone", "D. Gonadotropin-releasing hormone (GnRH)"], answer: "D. Gonadotropin-releasing hormone (GnRH)", explanation: "GnRH is a peptide hormone. Estrogen, progesterone, and testosterone are steroid hormones derived from cholesterol.", neetFrequency: 2 }
    ],
    assertionReasons: [
        {
            assertion: "In a mature embryo sac, the egg apparatus consists of one egg cell and two synergids.",
            reason: "Synergids have special cellular thickenings at the micropylar tip called the filiform apparatus.",
            answer: "B",
            explanation: "Both statements are true. The egg apparatus is indeed composed of one egg and two synergids. The synergids do have a filiform apparatus. However, the presence of the filiform apparatus is a feature of the synergids, not the reason why the egg apparatus has that specific composition.",
            neetFrequency: 3
        },
        {
            assertion: "All sexually transmitted diseases are completely curable.",
            reason: "Genital herpes and AIDS, once contracted, cannot be cured completely.",
            answer: "D",
            explanation: "The assertion is false. Some STDs like Genital herpes and AIDS are currently not curable. The reason is a true statement that contradicts the assertion.",
            neetFrequency: 4
        },
        {
            assertion: "The corpus luteum is essential for the maintenance of pregnancy.",
            reason: "It secretes large amounts of progesterone, which is required to maintain the endometrium.",
            answer: "A",
            explanation: "Assertion is true. The reason is also true and is the correct explanation. Progesterone maintains the uterine lining and prevents menstruation, thus supporting the pregnancy.",
            neetFrequency: 5
        },
        {
            assertion: "Geitonogamy is functionally cross-pollination but genetically it is similar to autogamy.",
            reason: "In geitonogamy, pollen grains are transferred from the anther to the stigma of another flower of the same plant.",
            answer: "A",
            explanation: "The assertion is true. The reason is also true and correctly explains the assertion. Since the pollen comes from the same plant, there is no new genetic variation, making it genetically self-pollination.",
            neetFrequency: 4
        },
        {
            assertion: "Not all copulations lead to fertilization and pregnancy.",
            reason: "Fertilization can only occur if the ovum and sperms are transported simultaneously to the ampullary-isthmic junction.",
            answer: "A",
            explanation: "Assertion is true. The reason is also true and is the correct explanation. The timing of intercourse relative to ovulation is critical for fertilization to occur.",
            neetFrequency: 3
        }
    ],
    matchTheColumns: [
        {
            column1: ["(a) Proliferative Phase", "(b) Secretory Phase", "(c) Menstruation", "(d) Ovulation"],
            column2: ["(p) Breakdown of endometrium", "(q) LH surge", "(r) Follicular phase", "(s) Luteal phase"],
            answer: "a-r, b-s, c-p, d-q",
            explanation: "Matching the phases of the menstrual cycle with their alternative names or key events.",
            neetFrequency: 5
        },
        {
            column1: ["(a) Pistils fused together", "(b) Formation of gametes", "(c) Flowers possessing only stamens", "(d) Pollination by wind"],
            column2: ["(p) Gametogenesis", "(q) Syncarpous", "(r) Staminate", "(s) Anemophily"],
            answer: "a-q, b-p, c-r, d-s",
            explanation: "Matching botanical terms with their correct definitions.",
            neetFrequency: 3
        },
        {
            column1: ["(a) Vasectomy", "(b) Tubectomy", "(c) IUDs", "(d) Saheli"],
            column2: ["(p) Oral contraceptive for females", "(q) Increases phagocytosis of sperms", "(r) Sterilization in male", "(s) Sterilization in female"],
            answer: "a-r, b-s, c-q, d-p",
            explanation: "Matching contraceptive methods with their mechanism or description.",
            neetFrequency: 4
        },
        {
            column1: ["(a) Leydig cells", "(b) Sertoli cells", "(c) Corpus luteum", "(d) Placenta"],
            column2: ["(p) Progesterone", "(q) hCG", "(r) Androgens", "(s) Nourishment to sperm"],
            answer: "a-r, b-s, c-p, d-q",
            explanation: "Matching structures with the hormones they secrete or their primary function.",
            neetFrequency: 4
        },
        {
            column1: ["(a) Morula", "(b) Blastocyst", "(c) Parturition", "(d) Colostrum"],
            column2: ["(p) Embryo with 8 to 16 blastomeres", "(q) Delivery of the foetus", "(r) Milk produced during initial days", "(s) Implants into the endometrium"],
            answer: "a-p, b-s, c-q, d-r",
            explanation: "Matching terms related to human development and birth with their definitions.",
            neetFrequency: 3
        }
    ],
    keyTakeaways: [
        "Sexual reproduction in flowering plants involves a unique process called double fertilization, leading to a diploid zygote and a triploid endosperm.",
        "The human reproductive cycles (spermatogenesis and the menstrual cycle) are under complex hormonal control involving the hypothalamus, pituitary, and gonads.",
        "Fertilization in humans occurs in the ampullary region of the fallopian tube.",
        "Reproductive health encompasses physical, emotional, and social well-being, and contraception plays a key role in family planning."
    ],
    mnemonics: [
        {
            text: "For the path of sperm: 'SEVEN UP' - Seminiferous tubules, Epididymis, Vas deferens, Ejaculatory duct, Nothing, Urethra, Penis.",
            tamil: "விந்தணுவின் பாதைக்கு: 'SEVEN UP' - செமினிஃபெரஸ் குழாய்கள், எபிடிடைமிஸ், விந்து நாளம், விந்து வெளியேற்று நாளம், ஒன்றும் இல்லை, சிறுநீர்க்குழாய், ஆண்குறி."
        },
        {
            text: "Hormones of the menstrual cycle in order: 'FOL(d) M(a)P' - FSH, Oestrogen, LH, Progesterone.",
            tamil: "மாதவிடாய் சுழற்சியின் ஹார்மோன்கள் வரிசைப்படி: 'FOL(d) M(a)P' - FSH, ஈஸ்ட்ரோஜன், LH, புரோஜெஸ்ட்டிரோன்."
        }
    ],
    neetTips: [
        {
            text: "The diagram of the menstrual cycle showing the levels of pituitary and ovarian hormones, and the uterine events, is extremely high-yield. Practice drawing it and explaining the events at each stage.",
            tamil: "பிட்யூட்டரி மற்றும் கருப்பை ஹார்மோன்களின் அளவுகள், மற்றும் கருப்பை நிகழ்வுகளைக் காட்டும் மாதவிடாய் சுழற்சியின் வரைபடம் மிகவும் அதிக மகசூல் தரும். அதை வரைந்து ஒவ்வொரு கட்டத்திலும் நிகழும் நிகழ்வுகளை விளக்கிப் பயிற்சி செய்யுங்கள்."
        },
        {
            text: "Understand the functions of each male accessory gland (seminal vesicles, prostate, bulbourethral glands) and what they contribute to semen.",
            tamil: "ஒவ்வொரு ஆண் துணைச் சுரப்பியின் (செமினல் வெசிக்கிள்கள், புரோஸ்டேட், பல்போயுரெத்ரல் சுரப்பிகள்) செயல்பாடுகளையும், அவை விந்துவில் என்ன பங்களிக்கின்றன என்பதையும் புரிந்து கொள்ளுங்கள்."
        }
    ],
    studentTip: {
        english: "Use flowcharts to trace the path of sperm and the ovum, and to map out the complex hormonal interactions in the menstrual cycle. This makes the sequences easier to remember.",
        tamil: "விந்தணு மற்றும் அண்ட அணுவின் பாதையைக் கண்டறியவும், மாதவிடாய் சுழற்சியில் உள்ள சிக்கலான ஹார்மோன் இடைவினைகளை வரைபடமாக்கவும் பாய்வு வரைபடங்களைப் பயன்படுத்தவும். இது வரிசைகளை நினைவில் கொள்வதை எளிதாக்குகிறது."
    },
    peerDiscussion: {
        english: "Discuss with a friend the social implications of Assisted Reproductive Technologies (ART). What are the ethical considerations involved in techniques like IVF and surrogacy?",
        tamil: "உதவி இனப்பெருக்கத் தொழில்நுட்பங்களின் (ART) சமூகத் தாக்கங்கள் பற்றி உங்கள் நண்பருடன் விவாதிக்கவும். IVF மற்றும் வாடகைத் தாய் போன்ற நுட்பங்களில் உள்ள நெறிமுறைக் கருத்தாய்வுகள் யாவை?"
    },
    nextChapter: {
        title: "Genetics and Evolution",
        titleTamil: "மரபியல் மற்றும் பரிணாமம்"
    },
    validationReport: []
};
