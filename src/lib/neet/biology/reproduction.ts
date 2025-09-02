
import type { NeetModule } from '@/lib/types';

export const reproduction: NeetModule = {
  id: 'biology-reproduction',
  title: 'Reproduction',
  chapter: 'Reproduction',
  subject: 'Biology',
  conceptNotes: `
### 1. Reproduction in Organisms (உயிரினங்களில் இனப்பெருக்கம்)

*   **Reproduction (இனப்பெருக்கம்):** A biological process by which new individual organisms – "offspring" – are produced from their "parents".
*   **Asexual Reproduction (பாலில்லா இனப்பெருக்கம்):** A single parent gives rise to offspring. The offspring are genetically identical to the parent (clones).
    *   Modes: Fission (பிளவுபடுதல்), Budding (மொட்டு விடுதல்), Spore formation (ஸ்போர் உருவாக்கம்), Fragmentation (துண்டாதல்), Vegetative propagation (உடல இனப்பெருக்கம்).
*   **Sexual Reproduction (பாலினப் பெருக்கம்):** Involves the formation and fusion of gametes from two parents. The offspring are genetically different from the parents.
    *   Events: Pre-fertilization (gametogenesis, gamete transfer), Fertilization (syngamy), Post-fertilization (zygote formation, embryogenesis).

### 2. Sexual Reproduction in Flowering Plants (பூக்கும் தாவரங்களில் பாலினப் பெருக்கம்)

*   **Flower (மலர்):** The reproductive unit in angiosperms.
*   **Structure of a Flower:**
    *   **Androecium (மகரந்தத்தாள் வட்டம்):** Male reproductive part, consists of stamens. The anther produces pollen grains (male gametophytes).
    *   **Gynoecium (சூலக வட்டம்):** Female reproductive part, consists of the pistil/carpel (stigma, style, ovary). The ovary contains ovules, which house the female gametophyte (embryo sac).
*   **Pollination (மகரந்தச் சேர்க்கை):** Transfer of pollen grains from the anther to the stigma.
    *   Types: Autogamy (self-pollination), Geitonogamy, Xenogamy (cross-pollination).
    *   Agents: Wind (anemophily), Water (hydrophily), Insects (entomophily).
*   **Double Fertilization (இரட்டைக் கருவுறுதல்):** A unique event in angiosperms. One male gamete fuses with the egg cell (syngamy) to form the zygote. The other male gamete fuses with the two polar nuclei to form the primary endosperm nucleus (PEN), which develops into the endosperm.
*   **Post-fertilization Events:** The ovule develops into a seed, and the ovary develops into a fruit.

### 3. Human Reproduction (மனித இனப்பெருக்கம்)

*   **Male Reproductive System (ஆண் இனப்பெருக்க மண்டலம்):** Includes testes (produce sperm and testosterone), accessory ducts, and glands.
    *   **Spermatogenesis (விந்து உருவாக்கம்):** The process of sperm formation in the testes.
*   **Female Reproductive System (பெண் இனப்பெருக்க மண்டலம்):** Includes a pair of ovaries (produce ova/eggs and female hormones like estrogen and progesterone), oviducts (fallopian tubes), uterus, cervix, and vagina.
    *   **Oogenesis (அண்டம் உருவாக்கம்):** The process of ovum formation in the ovaries.
*   **Menstrual Cycle (மாதவிடாய் சுழற்சி):** The reproductive cycle in female primates. It involves cyclical changes in the ovary and uterus. Regulated by hormones like LH, FSH, estrogen, and progesterone.
*   **Fertilization and Implantation (கருவுறுதல் மற்றும் பதித்தல்):** Fertilization usually occurs in the fallopian tube. The resulting zygote undergoes cleavage and develops into a blastocyst, which gets implanted in the uterine wall (endometrium).
*   **Pregnancy and Embryonic Development (கர்ப்பம் மற்றும் கரு வளர்ச்சி):** After implantation, the chorionic villi and uterine tissue form the placenta, which connects the fetus to the mother.
*   **Parturition and Lactation (குழந்தைப்பேறு மற்றும் பால் சுரத்தல்):** Parturition is the process of childbirth, induced by complex neuroendocrine mechanisms. Lactation is the production of milk by the mammary glands after childbirth.

  `,
  workedExamples: [
    {
        problem: 'A flower has a feathery stigma, light-weight non-sticky pollen grains, and well-exposed stamens. What is the most likely mode of pollination and why?',
        solution: 'The most likely mode of pollination is **Anemophily (wind pollination)**. \n**Justification:**\n1.  **Feathery Stigma:** This is an adaptation to efficiently trap airborne pollen grains. \n2.  **Light-weight, non-sticky pollen:** This allows the pollen to be easily carried by the wind over long distances. \n3.  **Well-exposed stamens:** This facilitates the easy dispersal of pollen into the wind currents. \nThese are all classic characteristics of wind-pollinated plants. (காற்றினால் மகரந்தச் சேர்க்கை நடைபெறும் மலர்கள், காற்றில் பரவ ஏதுவாக இலகுவான மகரந்தத் தூள் மற்றும் அவற்றை எளிதில் பிடிக்க இறகு போன்ற சூலகமுடியைக் கொண்டுள்ளன.)'
    },
    {
        problem: 'Trace the path of a sperm cell from the site of its production to the point of fertilization in humans.',
        solution: 'The path of a sperm cell is as follows:\n1.  **Seminiferous Tubules (in Testes):** Production site.\n2.  **Rete Testis**\n3.  **Vasa Efferentia**\n4.  **Epididymis:** Maturation and storage.\n5.  **Vas Deferens**\n6.  **Ejaculatory Duct**\n7.  **Urethra:** Passes out of the male body.\n8.  **Vagina (in female)**\n9.  **Cervix**\n10. **Uterus**\n11. **Fallopian Tube (Oviduct):** Site where fertilization with the ovum occurs. (விந்து செல், விந்தகங்களிலிருந்து தொடங்கி, பெலோப்பியன் குழாயில் அண்டத்துடன் கருவுறும் வரை நீண்ட பாதையில் பயணிக்கிறது.)'
    },
    {
        problem: 'In double fertilization, what are the two fusion events and what do they result in?',
        solution: 'Double fertilization involves two key events:\n1.  **Syngamy (உண்மையான கருவுறுதல்):** One male gamete fuses with the egg cell. This results in the formation of a diploid **Zygote (2n)**, which develops into the embryo.\n2.  **Triple Fusion (மூவிணைவு):** The second male gamete fuses with the two polar nuclei (which together form the secondary nucleus) in the central cell. This results in the formation of a triploid **Primary Endosperm Nucleus (PEN) (3n)**, which develops into the endosperm, a nutritive tissue for the embryo. (இரட்டைக் கருவுறுதலில், ஒரு ஆண் கேமட் அண்டத்துடன் இணைந்து சைகோட்டையும், மற்றொரு ஆண் கேமட் துருவ நியூக்ளியஸ்களுடன் இணைந்து கருவூணையும் உருவாக்குகிறது.)'
    }
  ],
  mcqs: [
    {
      question: 'Which of the following is a form of asexual reproduction?',
      options: ['Syngamy', 'Pollination', 'Budding', 'Fertilization'],
      answer: 'Budding',
      explanation: 'Budding, as seen in yeast and Hydra, is a type of asexual reproduction where a new individual develops from an outgrowth or bud on the parent.'
    },
    {
      question: 'Double fertilization is a characteristic feature of:',
      options: ['Algae', 'Bryophytes', 'Gymnosperms', 'Angiosperms'],
      answer: 'Angiosperms',
      explanation: 'Double fertilization, involving both syngamy and triple fusion, is a unique and defining characteristic of flowering plants (Angiosperms).'
    },
    {
      question: 'The hormone responsible for the maintenance of the endometrium during pregnancy is:',
      options: ['LH (Luteinizing Hormone)', 'FSH (Follicle-Stimulating Hormone)', 'Progesterone', 'Testosterone'],
      answer: 'Progesterone',
      explanation: 'Progesterone, secreted by the corpus luteum and later the placenta, is essential for maintaining the uterine lining (endometrium) to support a pregnancy.'
    },
    {
      question: 'The process of release of sperm from the seminiferous tubules is called:',
      options: ['Spermatogenesis', 'Spermiogenesis', 'Spermiation', 'Ejaculation'],
      answer: 'Spermiation',
      explanation: 'Spermiation is the specific process where mature spermatozoa are released from the Sertoli cells into the lumen of the seminiferous tubules.'
    },
    {
      question: 'The part of the flower that develops into a fruit is the:',
      options: ['Ovule', 'Ovary', 'Stigma', 'Petal'],
      answer: 'Ovary',
      explanation: 'After fertilization, the ovary of the flower matures and develops into the fruit, while the ovules inside it develop into seeds.'
    },
    {
      question: 'Which of the following is a male accessory gland in humans?',
      options: ['Ovary', 'Testis', 'Seminal vesicle', 'Bartholin\'s gland'],
      answer: 'Seminal vesicle',
      explanation: 'Seminal vesicles, prostate gland, and bulbourethral glands are the male accessory glands.'
    },
    {
      question: 'The transfer of pollen from the anther to the stigma of another flower of the same plant is called:',
      options: ['Autogamy', 'Geitonogamy', 'Xenogamy', 'Allogamy'],
      answer: 'Geitonogamy',
      explanation: 'Geitonogamy is functionally cross-pollination involving a pollinating agent, but genetically it is similar to autogamy since the pollen grains come from the same plant.'
    },
    {
      question: 'The LH surge during the menstrual cycle triggers:',
      options: ['Menstruation', 'Ovulation', 'Fertilization', 'Implantation'],
      answer: 'Ovulation',
      explanation: 'The rapid secretion of LH (Luteinizing Hormone) during the mid-cycle (around day 14) induces the rupture of the Graafian follicle and release of the ovum (ovulation).'
    },
    {
      question: 'The nutritive tissue for the developing embryo in an angiosperm seed is the:',
      options: ['Zygote', 'Endosperm', 'Integument', 'Cotyledon'],
      answer: 'Endosperm',
      explanation: 'The endosperm is a product of triple fusion and serves as the food-storing tissue for the embryo.'
    },
    {
      question: 'The acrosome of the sperm contains:',
      options: ['Mitochondria for energy', 'The nucleus with genetic material', 'Enzymes for fertilization', 'The tail for motility'],
      answer: 'Enzymes for fertilization',
      explanation: 'The acrosome is a cap-like structure filled with enzymes (like hyaluronidase) that help the sperm penetrate the layers of the ovum.'
    },
    {
      question: 'A clone is a group of individuals obtained through:',
      options: ['Self-pollination', 'Cross-pollination', 'Sexual reproduction', 'Asexual reproduction'],
      answer: 'Asexual reproduction',
      explanation: 'Clones are organisms that are genetically identical to each other and to the parent, which is a result of asexual reproduction.'
    },
    {
      question: 'The placenta in humans acts as an endocrine tissue and produces several hormones. Which of the following is NOT produced by the placenta?',
      options: ['hCG (Human Chorionic Gonadotropin)', 'hPL (Human Placental Lactogen)', 'Relaxin', 'LH (Luteinizing Hormone)'],
      answer: 'LH (Luteinizing Hormone)',
      explanation: 'LH is produced by the anterior pituitary gland. The placenta produces hCG, hPL, estrogens, and progestogens. Relaxin is also produced by the ovary in later stages.'
    },
    {
        question: 'What is the function of the Sertoli cells in the testes?',
        options: ['Synthesize testosterone', 'Undergo meiosis to form sperm', 'Provide nutrition to the germ cells', 'Store sperm'],
        answer: 'Provide nutrition to the germ cells',
        explanation: 'Sertoli cells provide structural support and nutrition to the developing spermatogonia and spermatozoa.'
    },
    {
        question: 'Pollination by wind is called:',
        options: ['Hydrophily', 'Entomophily', 'Anemophily', 'Ornithophily'],
        answer: 'Anemophily',
        explanation: 'Anemophily refers to pollination facilitated by wind.'
    },
    {
        question: 'The signals for parturition originate from:',
        options: ['The fully developed fetus and the placenta', 'The mother\'s pituitary gland only', 'The mother\'s ovary only', 'The endometrium of the uterus'],
        answer: 'The fully developed fetus and the placenta',
        explanation: 'The signals for childbirth originate from the fully developed fetus and the placenta which induce mild uterine contractions called the foetal ejection reflex.'
    }
  ],
  assertionReasons: [
    {
      assertion: 'Not all sexual reproduction is oogamous.',
      reason: 'In isogamy, the fusing gametes are morphologically similar.',
      answer: 'B',
      explanation: 'Both statements are true. Oogamy (large, non-motile female gamete and small, motile male gamete) is one type of sexual reproduction. Isogamy and Anisogamy are other types. The reason correctly describes isogamy but doesn\'t directly explain the assertion, which is a statement about oogamy.'
    },
    {
      assertion: 'The endosperm in angiosperms is generally triploid (3n).',
      reason: 'It is formed by the fusion of one male gamete with the two polar nuclei.',
      answer: 'A',
      explanation: 'The reason correctly explains the assertion. The fusion of one haploid male gamete (n) with the two haploid polar nuclei (n+n) results in a triploid (3n) primary endosperm nucleus.'
    },
    {
        assertion: 'In humans, the testes are located outside the abdominal cavity in a scrotum.',
        reason: 'The scrotum helps in maintaining a lower temperature than the normal body temperature, which is necessary for spermatogenesis.',
        answer: 'A',
        explanation: 'The reason correctly explains the assertion. Spermatogenesis requires a temperature 2-2.5°C lower than the internal body temperature.'
    },
    {
        assertion: 'Cross-pollination is genetically more advantageous than self-pollination.',
        reason: 'Cross-pollination brings genetically different types of pollen grains to the stigma, leading to genetic recombination.',
        answer: 'A',
        explanation: 'The reason correctly explains the assertion. The genetic variation introduced by cross-pollination is crucial for adaptation and evolution.'
    },
    {
        assertion: 'The corpus luteum is essential for the maintenance of pregnancy in the initial stages.',
        reason: 'It secretes large amounts of progesterone.',
        answer: 'A',
        explanation: 'The reason correctly explains the assertion. Progesterone is essential for maintaining the endometrium, and the corpus luteum is the primary source of progesterone after ovulation until the placenta takes over.'
    }
  ],
  matchTheColumns: [
    {
      column1: ['a) Corpus Luteum', 'b) Leydig cells', 'c) Placenta', 'd) Sertoli cells'],
      column2: ['i) hCG', 'ii) Progesterone', 'iii) Testosterone', 'iv) Nourishment to sperm'],
      answer: 'a-ii, b-iii, c-i, d-iv'
    },
    {
      column1: ['a) Wind Pollination', 'b) Water Pollination', 'c) Animal Pollination', 'd) Self Pollination'],
      column2: ['i) Geitonogamy', 'ii) Zoophily', 'iii) Hydrophily', 'iv) Anemophily'],
      answer: 'a-iv, b-iii, c-ii, d-i'
    },
    {
      "column1": ["a) Pistils fused together", "b) Formation of gametes", "c) Unisexual female flower", "d) Male flower"],
      "column2": ["i) Gametogenesis", "ii) Pistillate", "iii) Staminate", "iv) Syncarpous"],
      "answer": "a-iv, b-i, c-ii, d-iii"
    },
    {
      "column1": ["a) Ejaculatory duct", "b) Fallopian tube", "c) Uterus", "d) Vagina"],
      "column2": ["i) Site of Implantation", "ii) Receives sperm during coitus", "iii) Site of Fertilization", "iv) Stores and transports sperm"],
      "answer": "a-iv, b-iii, c-i, d-ii"
    },
    {
      "column1": ["a) Morula", "b) Blastocyst", "c) Trophoblast", "d) Inner cell mass"],
      "column2": ["i) Differentiates as the embryo", "ii) Attaches to the endometrium", "iii) Embryo with 8 to 16 blastomeres", "iv) Hollow sphere of cells"],
      "answer": "a-iii, b-iv, c-ii, d-i"
    }
  ]
};
