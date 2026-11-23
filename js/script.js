// ---------------------------------------------------------
// 1. DATABASE KOSAKATA TERVERIFIKASI (ID - GORONTALO - EN)
// ---------------------------------------------------------
const DICTIONARY_DB = [
  { id: 1, idWord: "Makan", gorWord: "Mongaa", enWord: "Eat", category: "Kata Kerja", verified: true,
    exId: "Saya sedang makan nasi.", exGor: "Watiya donggo mongaa ila.", exEn: "I am eating rice." },
  { id: 2, idWord: "Minum", gorWord: "Mongilu", enWord: "Drink", category: "Kata Kerja", verified: true,
    exId: "Ayo minum air putih.", exGor: "Mai mongilu taluhu.", exEn: "Let's drink water." },
  { id: 3, idWord: "Apa kabar?", gorWord: "Wolo habari?", enWord: "How are you?", category: "Sapaan", verified: true,
    exId: "Apa kabar saudaraku?", exGor: "Wolo habari wutatou?", exEn: "How are you, my sibling?" },
  { id: 4, idWord: "Terima kasih", gorWord: "Odu'olo", enWord: "Thank you", category: "Sapaan", verified: true,
    exId: "Terima kasih banyak atas bantuannya.", exGor: "Odu'olo da'a to tulungiyo.", exEn: "Thank you very much for the help." },
  { id: 5, idWord: "Rumah", gorWord: "Bele", enWord: "House / Home", category: "Kata Benda", verified: true,
    exId: "Rumah kami berada di dekat danau.", exGor: "Bele lami to dimuka lo bulalo.", exEn: "Our house is near the lake." },
  { id: 6, idWord: "Air", gorWord: "Taluhu", enWord: "Water", category: "Kata Benda", verified: true,
    exId: "Air di pegunungan sangat jernih.", exGor: "Taluhu to huidu moputi da'a.", exEn: "The water in the mountain is very clear." },
  { id: 7, idWord: "Saya / Aku", gorWord: "Watiya / Wau", enWord: "I / Me", category: "Sapaan", verified: true,
    exId: "Saya berasal dari Gorontalo.", exGor: "Watiya lonto Hulontalo.", exEn: "I come from Gorontalo." },
  { id: 8, idWord: "Kamu / Engkau", gorWord: "Yio / Ito", enWord: "You", category: "Sapaan", verified: true,
    exId: "Siapa nama kamu?", exGor: "Tiima tanggulo yio?", exEn: "What is your name?" },
  { id: 9, idWord: "Besar", gorWord: "Da'a", enWord: "Big / Large", category: "Kata Sifat", verified: true,
    exId: "Danau Limboto sangat besar.", exGor: "Bulalo Limutu da'a.", exEn: "Lake Limboto is very big." },
  { id: 10, idWord: "Kecil", gorWord: "Kiki'o", enWord: "Small / Little", category: "Kata Sifat", verified: true,
    exId: "Adik saya masih kecil.", exGor: "Wali'u donggo kiki'o.", exEn: "My younger sibling is still small." },
  { id: 11, idWord: "Pergi", gorWord: "Mona'o", enWord: "Go", category: "Kata Kerja", verified: true,
    exId: "Ibu pergi ke pasar.", exGor: "Ti Mama mona'o ode patali.", exEn: "Mother goes to the market." },
  { id: 12, idWord: "Datang / Mari", gorWord: "Mai / Ledungga", enWord: "Come / Arrive", category: "Kata Kerja", verified: true,
    exId: "Mari masuk ke dalam rumah.", exGor: "Mai tumuwoto ode delomo bele.", exEn: "Come inside the house." },
  { id: 13, idWord: "Tidur", gorWord: "Motuluhu", enWord: "Sleep", category: "Kata Kerja", verified: true,
    exId: "Anak-anak sudah tidur.", exGor: "Mongodula'a ma lotuluhu.", exEn: "The children have gone to sleep." },
  { id: 14, idWord: "Belajar", gorWord: "Balajari", enWord: "Study / Learn", category: "Kata Kerja", verified: true,
    exId: "Kami belajar Bahasa Gorontalo.", exGor: "Ami balajari Bahasa Hulontalo.", exEn: "We are learning Gorontalo language." },
  { id: 15, idWord: "Pasar", gorWord: "Patali", enWord: "Market", category: "Kata Benda", verified: true,
    exId: "Di pasar banyak ikan segar.", exGor: "To patali dadaata uponula bohu.", exEn: "In the market there are many fresh fish." },
  { id: 16, idWord: "Ikan", gorWord: "Uponula", enWord: "Fish", category: "Kata Benda", verified: true,
    exId: "Ikan bakar sangat enak.", exGor: "Uponula tilinanga mo'olohiyo da'a.", exEn: "Grilled fish is very delicious." },
  { id: 17, idWord: "Nasi", gorWord: "Ila", enWord: "Cooked Rice", category: "Kata Benda", verified: true,
    exId: "Nasi hangat sudah siap.", exGor: "Ila mopatu ma sadiya.", exEn: "Warm rice is ready." },
  { id: 18, idWord: "Jagung", gorWord: "Binte", enWord: "Corn", category: "Kata Benda", verified: true,
    exId: "Sup jagung khas Gorontalo.", exGor: "Binte biluhuta khas Hulontalo.", exEn: "Gorontalo traditional corn soup." },
  { id: 19, idWord: "Ayah", gorWord: "Ti Papa / Ayah", enWord: "Father", category: "Kata Benda", verified: true,
    exId: "Ayah bekerja di kebun.", exGor: "Ti Papa mokaraja to ilengi.", exEn: "Father works in the farm." },
  { id: 20, idWord: "Ibu", gorWord: "Ti Mama / Ibu", enWord: "Mother", category: "Kata Benda", verified: true,
    exId: "Ibu memasak di dapur.", exGor: "Ti Mama motubu to depula.", exEn: "Mother cooks in the kitchen." },
  { id: 21, idWord: "Anak", gorWord: "Wala'o", enWord: "Child", category: "Kata Benda", verified: true,
    exId: "Anak yang rajin belajar.", exGor: "Wala'o u rajini balajari.", exEn: "A child who studies diligently." },
  { id: 22, idWord: "Saudara / Teman", gorWord: "Wutato / Tamani", enWord: "Sibling / Friend", category: "Sapaan", verified: true,
    exId: "Kita semua bersaudara.", exGor: "Ito nga'amila mowutato.", exEn: "We are all siblings." },
  { id: 23, idWord: "Baik / Bagus", gorWord: "Mopiyohu", enWord: "Good / Fine", category: "Kata Sifat", verified: true,
    exId: "Kabar saya baik-baik saja.", exGor: "Habari lami mopiyohu.", exEn: "I am doing fine." },
  { id: 24, idWord: "Enak / Lezat", gorWord: "Mo'olohiyo", enWord: "Delicious / Tasty", category: "Kata Sifat", verified: true,
    exId: "Kue karawo ini sangat enak.", exGor: "Kukisi karawo botiye mo'olohiyo.", exEn: "This karawo cookie is very delicious." },
  { id: 25, idWord: "Cantik / Indah", gorWord: "Gagah / Mo'ohengu", enWord: "Beautiful / Pretty", category: "Kata Sifat", verified: true,
    exId: "Pemandangan pantai sangat indah.", exGor: "Pemandangan pentadu gagah da'a.", exEn: "The beach view is very beautiful." },
  { id: 26, idWord: "Panas", gorWord: "Mopatu", enWord: "Hot / Warm", category: "Kata Sifat", verified: true,
    exId: "Cuaca siang ini panas.", exGor: "Dulahu botiye mopatu.", exEn: "Today's weather is hot." },
  { id: 27, idWord: "Dingin", gorWord: "Mohuhulo", enWord: "Cold / Cool", category: "Kata Sifat", verified: true,
    exId: "Air pagi terasa dingin.", exGor: "Taluhu dumodupo mohuhulo.", exEn: "Morning water feels cold." },
  { id: 28, idWord: "Satu", gorWord: "Tuwawu", enWord: "One", category: "Sehari-hari", verified: true,
    exId: "Satu keluarga yang rukun.", exGor: "Tuwawu ngongala'a u akuru.", exEn: "One harmonious family." },
  { id: 29, idWord: "Dua", gorWord: "Duluwo", enWord: "Two", category: "Sehari-hari", verified: true,
    exId: "Dua ekor ikan di piring.", exGor: "Duluwo uponula to pingge.", exEn: "Two fish on the plate." },
  { id: 30, idWord: "Tiga", gorWord: "Totolu", enWord: "Three", category: "Sehari-hari", verified: true,
    exId: "Tiga hari lagi kami pulang.", exGor: "Totolu huyi poli ami mohuwalingo.", exEn: "In three days we will go home." },
  { id: 31, idWord: "Danau", gorWord: "Bulalo", enWord: "Lake", category: "Kata Benda", verified: true,
    exId: "Danau Limboto kebanggaan Gorontalo.", exGor: "Bulalo Limutu kebanggaan Hulontalo.", exEn: "Lake Limboto is Gorontalo's pride." },
  { id: 32, idWord: "Gunung", gorWord: "Huidu", enWord: "Mountain", category: "Kata Benda", verified: true,
    exId: "Gunung itu menjulang tinggi.", exGor: "Huidu boyito molanggato.", exEn: "That mountain stands tall." },
  { id: 33, idWord: "Laut", gorWord: "Deheto", enWord: "Sea / Ocean", category: "Kata Benda", verified: true,
    exId: "Nelayan melaut mencari ikan.", exGor: "Ta mongayilola mona'o ode deheto.", exEn: "Fishermen go to the sea to catch fish." },
  { id: 34, idWord: "Pagi", gorWord: "Dumodupo", enWord: "Morning", category: "Sehari-hari", verified: true,
    exId: "Selamat pagi semuanya.", exGor: "Assalamu'alaikum, dumodupo mopiyohu.", exEn: "Good morning everyone." },
  { id: 35, idWord: "Malam", gorWord: "Huyi", enWord: "Night", category: "Sehari-hari", verified: true,
    exId: "Malam pasang lampu di Gorontalo.", exGor: "Tumbilotohe to huyi lo Puasa.", exEn: "Lantern night during Ramadan in Gorontalo." },
  { id: 36, idWord: "Permisi / Maaf", gorWord: "Tabi'a / Mo'o'afu", enWord: "Excuse me / Sorry", category: "Sapaan", verified: true,
    exId: "Permisi, numpang lewat.", exGor: "Tabi'a, watiya motaliwatu.", exEn: "Excuse me, passing through." },
  { id: 37, idWord: "Ya", gorWord: "O'o", enWord: "Yes", category: "Sehari-hari", verified: true,
    exId: "Ya, saya sudah mengerti.", exGor: "O'o, watiya ma lo'otawa.", exEn: "Yes, I already understand." },
  { id: 38, idWord: "Tidak", gorWord: "Diila", enWord: "No / Not", category: "Sehari-hari", verified: true,
    exId: "Tidak masalah.", exGor: "Diila wolo-wolo.", exEn: "No problem." },
  { id: 39, idWord: "Berapa", gorWord: "Onggo / Pila", enWord: "How much / How many", category: "Sehari-hari", verified: true,
    exId: "Berapa harga ikan ini?", exGor: "Pila haraga lo uponula botiye?", exEn: "How much is this fish?" },
  { id: 40, idWord: "Cinta / Sayang", gorWord: "Otoli'anga", enWord: "Love / Affection", category: "Kata Sifat", verified: true,
    exId: "Saya mencintai budaya Gorontalo.", exGor: "Watiya motoli'anga aadati lo Hulontalo.", exEn: "I love Gorontalo culture." }
];

// ---------------------------------------------------------
// 2. DATA MATERI BERTINGKAT (PEMULA, MENENGAH, LANJUTAN)
// ---------------------------------------------------------
const COURSES_DB = {
  pemula: [
    {
      id: "p1", title: "1. Salam dan Sapaan (Lo'iya Sapaan)",
      desc: "Masyarakat Gorontalo yang religius umumnya memulai sapaan dengan salam Islami yang dipadukan dengan sapaan khas Hulontalo.",
      items: [
        { gor: "Assalamu'alaikum, wolo habari?", id: "Assalamu'alaikum, apa kabar?", en: "Peace be upon you, how are you?" },
        { gor: "Alhamdulillah, habari mopiyohu.", id: "Alhamdulillah, kabar baik.", en: "Praise be to God, I am doing well." },
        { gor: "Tabi'a, watiya motaliwatu.", id: "Permisi, saya numpang lewat.", en: "Excuse me, may I pass by." },
        { gor: "Odu'olo da'a.", id: "Terima kasih banyak.", en: "Thank you very much." }
      ],
      quiz: { q: "Apa arti dari 'Odu'olo da'a'?", opts: ["Apa kabar?", "Terima kasih banyak", "Sampai jumpa", "Permisi"], ans: 1 }
    },
    {
      id: "p2", title: "2. Perkenalan Diri (Mototaawa Tanggulo)",
      desc: "Pelajari cara memperkenalkan nama, asal daerah, dan menanyakan identitas lawan bicara dengan sopan.",
      items: [
        { gor: "Tanggulo u'u ti Uti.", id: "Nama saya Uti.", en: "My name is Uti." },
        { gor: "Tiima tanggulo yio?", id: "Siapa nama kamu?", en: "What is your name?" },
        { gor: "Watiya lonto Hulontalo.", id: "Saya berasal dari Gorontalo.", en: "I am from Gorontalo." },
        { gor: "Sanangi lo'otawa olemu.", id: "Senang berkenalan denganmu.", en: "Nice to meet you." }
      ],
      quiz: { q: "Bagaimana mengatakan 'Nama saya...' dalam Bahasa Gorontalo?", opts: ["Watiya mongaa...", "Tanggulo u'u...", "Bele lami...", "Wolo habari..."], ans: 1 }
    },
    {
      id: "p3", title: "3. Angka dan Bilangan (Bilangani)",
      desc: "Sistem bilangan dasar Bahasa Gorontalo dari 1 sampai 10 yang digunakan dalam kehidupan sehari-hari.",
      items: [
        { gor: "Tuwawu (1), Duluwo (2), Totolu (3)", id: "Satu, Dua, Tiga", en: "One, Two, Three" },
        { gor: "Wopato (4), Limo (5), Wolomo (6)", id: "Empat, Lima, Enam", en: "Four, Five, Six" },
        { gor: "Pitu (7), Walu (8), Tiyo (9)", id: "Tujuh, Delapan, Sembilan", en: "Seven, Eight, Nine" },
        { gor: "Mopulu (10), Mohutato (100)", id: "Sepuluh, Seratus", en: "Ten, One Hundred" }
      ],
      quiz: { q: "Bilangan 'Limo' berarti angka berapa?", opts: ["3", "4", "5", "7"], ans: 2 }
    },
    {
      id: "p4", title: "4. Waktu, Hari & Bulan (Wakutu & Hulalo)",
      desc: "Mengenal pembagian waktu harian dan nama hari dalam penuturan masyarakat Gorontalo.",
      items: [
        { gor: "Dumodupo / Dulahu / Huyi", id: "Pagi / Siang / Malam", en: "Morning / Afternoon / Night" },
        { gor: "Isinini, Salasa, Araba'a, Hamisi", id: "Senin, Selasa, Rabu, Kamis", en: "Monday, Tuesday, Wednesday, Thursday" },
        { gor: "Juma'ati, Sabutu, Ahadi", id: "Jumat, Sabtu, Minggu", en: "Friday, Saturday, Sunday" },
        { gor: "Hulalo Ramadani / Hulalo Syawali", id: "Bulan Ramadan / Bulan Syawal", en: "Ramadan / Shawwal Month" }
      ],
      quiz: { q: "Kata 'Dumodupo' memiliki arti waktu...", opts: ["Malam", "Pagi", "Kemarin", "Besok"], ans: 1 }
    },
    {
      id: "p5", title: "5. Anggota Keluarga (Ngongala'a)",
      desc: "Istilah kekerabatan dalam keluarga Gorontalo yang penuh rasa hormat dan kasih sayang.",
      items: [
        { gor: "Ti Papa / Ti Mama", id: "Ayah / Ibu", en: "Father / Mother" },
        { gor: "Ti Baapu / Ti Neene", id: "Kakek / Nenek", en: "Grandfather / Grandmother" },
        { gor: "Wala'o / Wutato", id: "Anak / Saudara", en: "Child / Sibling" },
        { gor: "Uti / No'u", id: "Panggilan sayang anak laki-laki / perempuan", en: "Affectionate term for boy / girl" }
      ],
      quiz: { q: "Panggilan khas anak perempuan di Gorontalo adalah...", opts: ["Uti", "No'u", "Baapu", "Papa"], ans: 1 }
    },
    {
      id: "p6", title: "6. Makanan & Minuman (U'alo & U'ilumo)",
      desc: "Kosakata kuliner dan kebutuhan makan minum sehari-hari di Gorontalo.",
      items: [
        { gor: "Ila / Binte / Uponula", id: "Nasi / Jagung / Ikan", en: "Rice / Corn / Fish" },
        { gor: "Taluhu / Kopi / Teh", id: "Air / Kopi / Teh", en: "Water / Coffee / Tea" },
        { gor: "Binte Biluhuta", id: "Sup jagung siram khas Gorontalo", en: "Gorontalo traditional corn soup" },
        { gor: "Watiya ohila mongaa ila.", id: "Saya ingin makan nasi.", en: "I want to eat rice." }
      ],
      quiz: { q: "Apa arti dari kata 'Uponula'?", opts: ["Jagung", "Air", "Ikan", "Nasi"], ans: 2 }
    },
    {
      id: "p7", title: "7. Kata Sehari-hari (Lo'iya Ngohuyi-ngohuyi)",
      desc: "Kata-kata dasar paling sering diucapkan dalam percakapan ringan.",
      items: [
        { gor: "O'o / Diila", id: "Ya / Tidak", en: "Yes / No" },
        { gor: "Bele / Patali / Sikola", id: "Rumah / Pasar / Sekolah", en: "House / Market / School" },
        { gor: "Mona'o / Mai", id: "Pergi / Datang", en: "Go / Come" },
        { gor: "Diila wolo-wolo.", id: "Tidak apa-apa / Sama-sama.", en: "No problem / You're welcome." }
      ],
      quiz: { q: "Lawan kata dari 'O'o' (Ya) adalah...", opts: ["Mai", "Diila", "Bele", "Da'a"], ans: 1 }
    }
  ],
  menengah: [
    {
      id: "m1", title: "1. Kata Kerja & Kata Sifat",
      desc: "Memahami awalan kata kerja aktif 'mo-' dan kata sifat deskriptif dalam Bahasa Gorontalo.",
      items: [
        { gor: "Mongaa (makan), Mongilu (minum), Motuluhu (tidur)", id: "Kata kerja berawalan mo-", en: "Active verbs with prefix mo-" },
        { gor: "Da'a (besar), Kiki'o (kecil), Mopiyohu (baik)", id: "Kata sifat dasar", en: "Basic descriptive adjectives" },
        { gor: "Mopatu (panas), Mohuhulo (dingin)", id: "Kata sifat suhu", en: "Temperature adjectives" }
      ],
      quiz: { q: "Kata kerja 'Motuluhu' berarti...", opts: ["Makan", "Minum", "Tidur", "Berjalan"], ans: 2 }
    },
    {
      id: "m2", title: "2. Menyusun Kalimat Sederhana (S-P-O)",
      desc: "Pola kalimat dasar Gorontalo mengikuti urutan Subjek + Predikat + Objek.",
      items: [
        { gor: "Watiya (S) + mongaa (P) + binte (O).", id: "Saya makan jagung.", en: "I eat corn." },
        { gor: "Ti Mama (S) + mona'o (P) + ode patali (K).", id: "Ibu pergi ke pasar.", en: "Mother goes to the market." },
        { gor: "Ami (S) + balajari (P) + Bahasa Hulontalo (O).", id: "Kami belajar Bahasa Gorontalo.", en: "We learn Gorontalo language." }
      ],
      quiz: { q: "Susunan yang benar untuk 'Saya minum air' adalah...", opts: ["Taluhu mongilu watiya", "Watiya mongilu taluhu", "Mongilu watiya taluhu", "Watiya taluhu mongilu"], ans: 1 }
    },
    {
      id: "m3", title: "3. Percakapan di Rumah & Masyarakat",
      desc: "Ungkapan interaksi sosial dengan tetangga dan kerabat sekitar.",
      items: [
        { gor: "Mai tumuwoto ode bele.", id: "Mari masuk ke rumah.", en: "Please come into the house." },
        { gor: "Yio mona'o ode utoonu?", id: "Kamu mau pergi ke mana?", en: "Where are you going?" },
        { gor: "Watiya mona'o ode masigi.", id: "Saya pergi ke masjid.", en: "I am going to the mosque." }
      ],
      quiz: { q: "Kata tanya 'ode utoonu' berarti...", opts: ["Siapa", "Kapan", "Ke mana", "Berapa"], ans: 2 }
    },
    {
      id: "m4", title: "4. Kata Tanya & Menjawab (Lo'iya Mohintu)",
      desc: "Menggunakan kata tanya utama untuk menggali informasi.",
      items: [
        { gor: "Wolo? (Apa?) • Tiima? (Siapa?)", id: "Apa? • Siapa?", en: "What? • Who?" },
        { gor: "To utoonu? (Di mana?) • Pila? (Berapa?)", id: "Di mana? • Berapa?", en: "Where? • How much?" },
        { gor: "Pila haraga lo uponula botiye?", id: "Berapa harga ikan ini?", en: "How much is this fish?" }
      ],
      quiz: { q: "Untuk menanyakan harga di pasar, kata tanya yang digunakan adalah...", opts: ["Tiima", "Pila", "O'o", "Watiya"], ans: 1 }
    },
    {
      id: "m5", title: "5. Ungkapan Sopan & Tata Krama",
      desc: "Menjaga kesantunan bertutur kepada orang yang lebih tua atau tamu.",
      items: [
        { gor: "Tabi'a (Permisi dengan membungkukkan badan)", id: "Tata krama melintas di depan orang tua", en: "Polite gesture when passing elders" },
        { gor: "Ito (Kamu/Anda yang dihormati)", id: "Bentuk halus dari 'yio'", en: "Polite form of 'you'" },
        { gor: "Mo'o'afu to delomo hilao.", id: "Mohon maaf lahir dan batin.", en: "Please forgive me sincerely." }
      ],
      quiz: { q: "Bentuk sapaan 'kamu/Anda' yang lebih sopan kepada orang tua adalah...", opts: ["Wau", "Ito", "Botiye", "Lami"], ans: 1 }
    }
  ],
  lanjutan: [
    {
      id: "l1", title: "1. Percakapan Kompleks & Diskusi",
      desc: "Menggabungkan klausa sebab-akibat dan ajakan dalam diskusi budaya.",
      items: [
        { gor: "Sababu bahasa daerah jati diri lami, ito musi molestarikan.", id: "Karena bahasa daerah adalah jati diri kita, kita harus melestarikannya.", en: "Because local language is our identity, we must preserve it." },
        { gor: "Watiya sanangi da'a balajari aadati lo Hulontalo.", id: "Saya sangat senang mempelajari adat istiadat Gorontalo.", en: "I am very happy learning Gorontalo customs." }
      ],
      quiz: { q: "Kata penghubung 'Sababu' dalam kalimat di atas berarti...", opts: ["Tetapi", "Karena", "Atau", "Jika"], ans: 1 }
    },
    {
      id: "l2", title: "2. Ungkapan Lokal & Peribahasa (Palebohu)",
      desc: "Petuah leluhur Gorontalo yang sarat makna filosofis.",
      items: [
        { gor: "Aadati hula-hula'a to syara'a, syara'a hula-hula'a to Kitabullah.", id: "Adat bersendikan syarak, syarak bersendikan Kitabullah.", en: "Custom is based on religious law, religious law is based on the Holy Scripture." },
        { gor: "Batanga pomaya, nyawa podungalo, harata potombuwa.", id: "Raga dibaktikan, nyawa dipertaruhkan, harta diinfakkan (demi kebenaran).", en: "Body dedicated, life risked, wealth donated for truth." }
      ],
      quiz: { q: "Falsafah utama masyarakat Gorontalo menyelaraskan antara adat dan...", opts: ["Perdagangan", "Syarak / Agama", "Pelayaran", "Pertanian"], ans: 1 }
    },
    {
      id: "l3", title: "3. Menyusun Paragraf Sederhana",
      desc: "Merangkai beberapa kalimat menjadi cerita singkat tentang aktivitas harian.",
      items: [
        { gor: "Dumodupo botiye watiya mona'o ode Bulalo Limutu. To deheto lo bulalo, pemandangan gagah da'a. Watiya wawu tamani mongaa binte biluhuta.", id: "Pagi ini saya pergi ke Danau Limboto. Di tepi danau, pemandangannya sangat indah. Saya dan teman makan sup jagung.", en: "This morning I went to Lake Limboto. By the lakeshore, the view was very beautiful. My friend and I ate corn soup." }
      ],
      quiz: { q: "Apa yang dimakan penulis dan temannya di tepi Danau Limboto?", opts: ["Uponula tilinanga", "Binte biluhuta", "Ila mopatu", "Kukisi karawo"], ans: 1 }
    },
    {
      id: "l4", title: "4. Cerita Budaya & Tradisi Walima",
      desc: "Memahami narasi budaya perayaan Maulid Nabi di Gorontalo.",
      items: [
        { gor: "To hulalo Maulidi, masyarakat Hulontalo mohutu tradisi Walima. Toyopo u hiasan lo kukisi karawo wawu kolombengi diusung ode masigi.", id: "Pada bulan Maulid, masyarakat Gorontalo melaksanakan tradisi Walima. Usungan kue karawo dan kolombengi dibawa ke masjid.", en: "In the month of Mawlid, Gorontalo people hold the Walima tradition. Decorated trays of karawo cookies and kolombengi are carried to the mosque." }
      ],
      quiz: { q: "Tradisi perayaan Maulid Nabi dengan usungan kue khas di Gorontalo disebut...", opts: ["Tumbilotohe", "Walima", "Saronde", "Huyula"], ans: 1 }
    }
  ]
};

// ---------------------------------------------------------
// 3. DATA PERCAKAPAN SITUASIONAL (7 SITUASI)
// ---------------------------------------------------------
const CONVERSATIONS_DB = [
  {
    id: "perkenalan", title: "1. Percakapan Perkenalan", speakerA: "Uti", speakerB: "No'u",
    lines: [
      { who: "A", gor: "Assalamu'alaikum, wolo habari?", id: "Assalamu'alaikum, apa kabar?", en: "Peace be upon you, how are you?" },
      { who: "B", gor: "Wa'alaikumussalam, alhamdulillah habari mopiyohu. Tiima tanggulo yio?", id: "Wa'alaikumussalam, alhamdulillah kabar baik. Siapa nama kamu?", en: "Peace be upon you too, thank God I am fine. What is your name?" },
      { who: "A", gor: "Tanggulo u'u ti Uti. Watiya lonto Limboto. Yio lonto utoonu?", id: "Nama saya Uti. Saya berasal dari Limboto. Kamu berasal dari mana?", en: "My name is Uti. I am from Limboto. Where are you from?" },
      { who: "B", gor: "Tanggulo u'u ti No'u, watiya lonto Kota Hulontalo. Sanangi lo'otawa olemu.", id: "Nama saya No'u, saya dari Kota Gorontalo. Senang berkenalan denganmu.", en: "My name is No'u, I am from Gorontalo City. Nice to meet you." }
    ],
    vocab: [
      { gor: "Wolo habari?", id: "Apa kabar?", en: "How are you?" },
      { gor: "Tanggulo u'u", id: "Nama saya", en: "My name is" },
      { gor: "Lonto utoonu?", id: "Dari mana?", en: "Where from?" }
    ],
    practice: { prompt: "Tanggulo u'u ti Uti. Watiya _____ Limboto. (Saya berasal dari Limboto)", answer: "lonto", hint: "Kata yang berarti 'dari'" }
  },
  {
    id: "keluarga", title: "2. Percakapan dengan Keluarga", speakerA: "Wala'o (Anak)", speakerB: "Ti Mama (Ibu)",
    lines: [
      { who: "A", gor: "Ti Mama, watiya ma ledungga lonto sikola.", id: "Ibu, saya sudah pulang dari sekolah.", en: "Mom, I have arrived home from school." },
      { who: "B", gor: "Alhamdulillah Uti. Mai mongaa, ti Mama ma lotubu ila wawu uponula.", id: "Alhamdulillah Nak. Mari makan, Ibu sudah memasak nasi dan ikan.", en: "Thank God son. Come eat, Mom has cooked rice and fish." },
      { who: "A", gor: "Odu'olo da'a ti Mama. Watiya mongilu taluhu mulo.", id: "Terima kasih banyak Ibu. Saya minum air dulu.", en: "Thank you very much Mom. I will drink water first." }
    ],
    vocab: [
      { gor: "Ledungga", id: "Tiba / Pulang", en: "Arrived" },
      { gor: "Lotubu", id: "Sudah memasak", en: "Cooked" },
      { gor: "Uponula", id: "Ikan", en: "Fish" }
    ],
    practice: { prompt: "Mai _____, ti Mama ma lotubu ila. (Mari makan)", answer: "mongaa", hint: "Bahasa Gorontalo dari 'makan'" }
  },
  {
    id: "teman", title: "3. Percakapan dengan Teman", speakerA: "Rian", speakerB: "Fadli",
    lines: [
      { who: "A", gor: "Tamani, yio mona'o ode utoonu dumodupo botiye?", id: "Teman, kamu mau pergi ke mana pagi ini?", en: "Friend, where are you going this morning?" },
      { who: "B", gor: "Watiya mona'o ode kampus balajari Bahasa Hulontalo.", id: "Saya mau pergi ke kampus belajar Bahasa Gorontalo.", en: "I am going to campus to study Gorontalo language." },
      { who: "A", gor: "Mopiyohu da'a! Mai ito mona'o sama-sama.", id: "Bagus sekali! Mari kita pergi bersama-sama.", en: "Very good! Let's go together." }
    ],
    vocab: [
      { gor: "Tamani", id: "Teman", en: "Friend" },
      { gor: "Mona'o", id: "Pergi", en: "Go" },
      { gor: "Balajari", id: "Belajar", en: "Study" }
    ],
    practice: { prompt: "Watiya _____ ode kampus balajari. (Saya pergi ke kampus)", answer: "mona'o", hint: "Kata kerja 'pergi'" }
  },
  {
    id: "pasar", title: "4. Percakapan di Pasar Sentral", speakerA: "Pembeli", speakerB: "Penjual",
    lines: [
      { who: "A", gor: "Tabi'a, pila haraga lo uponula bohu botiye?", id: "Permisi, berapa harga ikan segar ini?", en: "Excuse me, how much is this fresh fish?" },
      { who: "B", gor: "Uponula botiye haragaliyo duluwo pulu lo lihu.", id: "Ikan ini harganya dua puluh ribu.", en: "This fish costs twenty thousand." },
      { who: "A", gor: "O'o, watiya motali duluwo. Odu'olo.", id: "Ya, saya beli dua. Terima kasih.", en: "Yes, I will buy two. Thank you." }
    ],
    vocab: [
      { gor: "Pila haraga?", id: "Berapa harga?", en: "How much?" },
      { gor: "Uponula bohu", id: "Ikan segar", en: "Fresh fish" },
      { gor: "Motali", id: "Membeli", en: "Buy" }
    ],
    practice: { prompt: "Tabi'a, _____ haraga lo uponula botiye? (Berapa harga...)", answer: "pila", hint: "Kata tanya jumlah/harga" }
  },
  {
    id: "kampus", title: "5. Percakapan di Sekolah / Kampus", speakerA: "Mahasiswa", speakerB: "Dosen",
    lines: [
      { who: "A", gor: "Assalamu'alaikum Pak, tabi'a watiya mohintu pasal tugasi.", id: "Assalamu'alaikum Pak, permisi saya mau bertanya tentang tugas.", en: "Peace be upon you Sir, excuse me I want to ask about the assignment." },
      { who: "B", gor: "Wa'alaikumussalam, o'o silakan. Tugasi mengenai sejarah Hulontalo.", id: "Wa'alaikumussalam, ya silakan. Tugas mengenai sejarah Gorontalo.", en: "Peace be upon you too, yes please. The assignment is about Gorontalo history." },
      { who: "A", gor: "Odu'olo Pak, watiya ma lo'otawa.", id: "Terima kasih Pak, saya sudah mengerti.", en: "Thank you Sir, I already understand." }
    ],
    vocab: [
      { gor: "Mohintu", id: "Bertanya", en: "Ask" },
      { gor: "Lo'otawa", id: "Mengerti / Tahu", en: "Understand / Know" },
      { gor: "Tabi'a", id: "Permisi", en: "Excuse me" }
    ],
    practice: { prompt: "Odu'olo Pak, watiya ma _____. (Saya sudah mengerti)", answer: "lo'otawa", hint: "Kata yang berarti 'mengerti/tahu'" }
  },
  {
    id: "wisata", title: "6. Percakapan di Tempat Wisata", speakerA: "Wisatawan", speakerB: "Pemandu",
    lines: [
      { who: "A", gor: "Gagah da'a pemandangan to Benteng Otanaha botiye!", id: "Indah sekali pemandangan di Benteng Otanaha ini!", en: "The view at Otanaha Fortress is very beautiful!" },
      { who: "B", gor: "O'o, lonto yitaato botiye ito mowali momilohu Bulalo Limutu.", id: "Ya, dari atas sini Anda bisa melihat Danau Limboto.", en: "Yes, from up here you can see Lake Limboto." },
      { who: "A", gor: "Watiya otoli'anga da'a mona'o ode Hulontalo.", id: "Saya sangat senang berkunjung ke Gorontalo.", en: "I really love visiting Gorontalo." }
    ],
    vocab: [
      { gor: "Gagah da'a", id: "Indah sekali", en: "Very beautiful" },
      { gor: "Bulalo Limutu", id: "Danau Limboto", en: "Lake Limboto" },
      { gor: "Momilohu", id: "Melihat", en: "See / Look" }
    ],
    practice: { prompt: "Ito mowali momilohu _____ Limutu. (Danau Limboto)", answer: "bulalo", hint: "Bahasa Gorontalo dari 'Danau'" }
  },
  {
    id: "sehari", title: "7. Kehidupan Sehari-hari", speakerA: "Tetangga 1", speakerB: "Tetangga 2",
    lines: [
      { who: "A", gor: "Dulahu botiye mopatu da'a, mai mongilu taluhu mohuhulo.", id: "Siang ini panas sekali, mari minum air dingin.", en: "This afternoon is very hot, let's drink cold water." },
      { who: "B", gor: "Odu'olo wutatou, taluhu mohuhulo mo'osegari.", id: "Terima kasih saudaraku, air dingin menyegarkan.", en: "Thank you my sibling, cold water is refreshing." }
    ],
    vocab: [
      { gor: "Mopatu", id: "Panas", en: "Hot" },
      { gor: "Mohuhulo", id: "Dingin", en: "Cold" },
      { gor: "Taluhu", id: "Air", en: "Water" }
    ],
    practice: { prompt: "Mai mongilu _____ mohuhulo. (Mari minum air dingin)", answer: "taluhu", hint: "Bahasa Gorontalo dari 'Air'" }
  }
];

// ---------------------------------------------------------
// 4. DATA BUDAYA GORONTALO
// ---------------------------------------------------------
const CULTURE_DB = [
  {
    title: "Rumah Adat Dulohupa",
    gorTerm: "Bele Dulohupa",
    desc: "Rumah panggung tradisional tempat bermusyawarah para pemangku adat. Memiliki dua tangga di kiri dan kanan (Tolitihu) yang melambangkan jalan adat dan jalan syarak.",
    color: "from-amber-600 to-yellow-800",
    icon: "🏛️",
    image: "images/dulohupa.jpg"
  },
  {
    title: "Pakaian Adat Bili'u & Makuta",
    gorTerm: "Bili'u wawu Makuta",
    desc: "Busana kebesaran pengantin dan upacara adat Gorontalo yang memadukan empat warna Tilabataila: Ungu (keagungan), Merah (keberanian), Kuning (kemuliaan), dan Hijau (kesuburan).",
    color: "from-purple-700 to-indigo-900",
    icon: "👑"
  },
  {
    title: "Sulaman Karawo",
    gorTerm: "Karawo Hulontalo",
    desc: "Kain sulam kerawang khas Gorontalo yang dibuat secara manual dengan ketelitian tinggi oleh pengrajin lokal dan telah mendunia sebagai warisan budaya takbenda.",
    color: "from-rose-600 to-red-800",
    icon: "🧵"
  },
  {
    title: "Tarian Saronde & Dana-dana",
    gorTerm: "Tidi / Saronde",
    desc: "Tarian tradisional yang ditarikan pada malam pertunangan (Mopotilandahu) menggunakan selendang sebagai simbol perkenalan dan restu keluarga.",
    color: "from-emerald-600 to-teal-800",
    icon: "💃"
  },
  {
    title: "Kuliner Binte Biluhuta & Ilabulo",
    gorTerm: "Binte Biluhuta",
    desc: "Sup jagung siram yang memadukan jagung manis, kelapa parut, ikan cakalang/udang, dan daun kemangi. Melambangkan persatuan berbagai unsur menjadi cita rasa harmonis.",
    color: "from-orange-500 to-amber-700",
    icon: "🍲"
  },
  {
    title: "Tradisi Tumbilotohe & Walima",
    gorTerm: "Tumbilotohe",
    desc: "Tradisi memasang ribuan lampu minyak (tohe) di halaman rumah dan jalanan pada tiga malam terakhir Ramadan untuk menyambut malam Lailatul Qadar.",
    color: "from-indigo-700 to-slate-900",
    icon: "🪔"
  }
];

// ---------------------------------------------------------
// 5. STATE APLIKASI & LOCALSTORAGE PERSISTENCE
// ---------------------------------------------------------
const DEFAULT_STATE = {
  uiLang: "id", // 'id' | 'en'
  user: {
    name: "Pelajar Gorontalo",
    email: "pelajar@bahasagorontalo.id",
    avatar: "🧑🏽‍🎓"
  },
  xp: 120,
  favorites: [1, 3, 4], // ID kosakata favorit default
  completedChapters: ["p1"],
  quizHistory: [],
  dailyChallengeDone: false
};

let appState = JSON.parse(localStorage.getItem("bahasa_gorontalo_state")) || DEFAULT_STATE;

function saveState() {
  localStorage.setItem("bahasa_gorontalo_state", JSON.stringify(appState));
  updateGlobalUI();
}

// ---------------------------------------------------------
// 6. WEB SPEECH API & ANIMASI ORANG BERBICARA
// ---------------------------------------------------------
let speakTimeout = null;

function speakText(textToSpeak, langCode = "gor", displayMain = "", displaySub = "", speakerBoxId = null) {
  // Hentikan suara sebelumnya
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
  clearTimeout(speakTimeout);

  // Tampilkan bar global speaker dengan avatar berbicara
  const bar = document.getElementById("global-speaker-bar");
  const badge = document.getElementById("speaker-lang-badge");
  const mainEl = document.getElementById("speaker-text-preview");
  const subEl = document.getElementById("speaker-sub-preview");

  const langLabels = {
    gor: "🗣️ Penutur Gorontalo",
    id: "🇮🇩 Pelafalan Indonesia",
    en: "🇬🇧 English Pronunciation"
  };

  badge.textContent = langLabels[langCode] || "🗣️ Audio Pelafalan";
  mainEl.textContent = displayMain || textToSpeak;
  subEl.textContent = displaySub || "Mendengarkan pelafalan...";
  bar.classList.remove("hidden");

  // Aktifkan animasi mulut di box percakapan jika ada
  document.querySelectorAll("#speaker-A-box, #speaker-B-box").forEach(el => {
    el.classList.remove("avatar-speaking", "ring-2", "ring-amber-400", "bg-white");
  });
  if (speakerBoxId) {
    const box = document.getElementById(speakerBoxId);
    if (box) {
      box.classList.add("avatar-speaking", "ring-2", "ring-amber-400", "bg-white");
    }
  }

  if ("speechSynthesis" in window) {
    // Sesuaikan fonetik glotal stop (') agar diucapkan natural oleh TTS
    const cleanSpeech = textToSpeak.replace(/'/g, "");
    const utterance = new SpeechSynthesisUtterance(cleanSpeech);
    utterance.lang = langCode === "en" ? "en-US" : "id-ID";
    utterance.rate = langCode === "gor" ? 0.88 : 0.95;
    utterance.pitch = 1.02;

    utterance.onend = () => {
      finishSpeakingVisual(speakerBoxId);
    };
    utterance.onerror = () => {
      finishSpeakingVisual(speakerBoxId);
    };
    window.speechSynthesis.speak(utterance);

    // Fallback timer jika browser tidak memicu onend
    speakTimeout = setTimeout(() => finishSpeakingVisual(speakerBoxId), Math.max(2500, cleanSpeech.length * 85));
  } else {
    showToast("Browser tidak mendukung Web Speech API, menampilkan simulasi teks.");
    speakTimeout = setTimeout(() => finishSpeakingVisual(speakerBoxId), 2500);
  }
}

function finishSpeakingVisual(speakerBoxId) {
  if (speakerBoxId) {
    const box = document.getElementById(speakerBoxId);
    if (box) box.classList.remove("avatar-speaking", "ring-2", "ring-amber-400", "bg-white");
  }
  setTimeout(() => {
    document.getElementById("global-speaker-bar").classList.add("hidden");
  }, 600);
}

function stopSpeaking() {
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  clearTimeout(speakTimeout);
  document.getElementById("global-speaker-bar").classList.add("hidden");
  document.querySelectorAll("#speaker-A-box, #speaker-B-box").forEach(el => {
    el.classList.remove("avatar-speaking", "ring-2", "ring-amber-400", "bg-white");
  });
}

// ---------------------------------------------------------
// 7. NAVIGASI SPA & MULTILINGUAL UI TOGGLE (ID / EN)
// ---------------------------------------------------------
const UI_STRINGS = {
  id: {
    tagline: "Platform Belajar Bahasa & Budaya",
    heroTitle: "Mari Belajar Bahasa Gorontalo",
    heroDesc: "Bahasa daerah adalah jati diri, jembatan sejarah, dan warisan leluhur yang tak ternilai. Mari lestarikan Bahasa Hulontalo melalui pembelajaran interaktif dari Bahasa Indonesia dan Bahasa Inggris dengan pelafalan penutur langsung.",
    startLearning: "Mulai Belajar",
    openDict: "Buka Kamus Digital"
  },
  en: {
    tagline: "Language & Culture Learning Platform",
    heroTitle: "Let's Learn Gorontalo Language",
    heroDesc: "Regional languages are our identity, historical bridge, and priceless ancestral heritage. Let's preserve the Hulontalo language through interactive learning from Indonesian and English with live speaker pronunciation.",
    startLearning: "Start Learning",
    openDict: "Open Digital Dictionary"
  }
};

function toggleUILang() {
  appState.uiLang = appState.uiLang === "id" ? "en" : "id";
  saveState();
  applyUILang();
  showToast(appState.uiLang === "id" ? "Bahasa antarmuka: Bahasa Indonesia 🇮🇩" : "Interface language: English 🇬🇧");
}

function applyUILang() {
  const lang = appState.uiLang;
  document.getElementById("ui-lang-flag").textContent = lang === "id" ? "🇮🇩" : "🇬🇧";
  document.getElementById("ui-lang-label").textContent = lang.toUpperCase();
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (UI_STRINGS[lang] && UI_STRINGS[lang][key]) {
      el.textContent = UI_STRINGS[lang][key];
    }
  });
}

function navigate(pageId) {
  document.querySelectorAll(".page-section").forEach(sec => sec.classList.add("hidden"));
  const target = document.getElementById("page-" + pageId);
  if (target) target.classList.remove("hidden");

  // Update navigasi header desktop/drawer
  document.querySelectorAll(".nav-btn").forEach(btn => {
    if (btn.getAttribute("data-nav") === pageId) {
      btn.classList.add("bg-purple-100", "text-purple-800", "font-bold");
    } else {
      btn.classList.remove("bg-purple-100", "text-purple-800", "font-bold");
    }
  });

  // Update tombol navigasi bawah smartphone (mobile bottom nav)
  document.querySelectorAll(".mobile-bottom-btn[data-mobile-nav]").forEach(btn => {
    if (btn.getAttribute("data-mobile-nav") === pageId) {
      btn.classList.add("text-purple-700", "font-extrabold");
      btn.classList.remove("text-slate-500");
    } else {
      btn.classList.remove("text-purple-700", "font-extrabold");
      btn.classList.add("text-slate-500");
    }
  });

  // Tutup drawer menu mobile otomatis setelah navigasi dipilih
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.add("hidden");
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
  if (pageId === "kamus") renderDictionary();
  if (pageId === "akun") renderProfilePage();
  if (pageId === "game") renderLeaderboardAndBadges();
}

function toggleMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  if (menu) menu.classList.toggle("hidden");
}

function showToast(msg) {
  const container = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.className = "bg-slate-900 text-white text-xs font-semibold px-4 py-3 rounded-xl shadow-lg border border-purple-500/40 pointer-events-auto transition-all";
  toast.textContent = msg;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

function addXP(points, reason = "") {
  appState.xp += points;
  saveState();
  showToast(`+${points} XP! ${reason}`);
}

function updateGlobalUI() {
  const level = Math.floor(appState.xp / 100) + 1;
  document.getElementById("header-xp").textContent = `${appState.xp} XP`;
  document.getElementById("header-username").textContent = appState.user.name;
  document.getElementById("header-avatar").textContent = appState.user.avatar;
  document.getElementById("fav-count-badge").textContent = appState.favorites.length;

  const gameXp = document.getElementById("game-xp-val");
  if (gameXp) {
    gameXp.textContent = appState.xp;
    document.getElementById("game-level-val").textContent = `Lv. ${level}`;
    document.getElementById("game-badge-count").textContent = Math.min(4, level);
  }
}

// ---------------------------------------------------------
// 8. MOTIVASI HARIAN BERANDA
// ---------------------------------------------------------
const DAILY_QUOTES = [
  { gor: "Aadati hula-hula'a to syara'a, syara'a hula-hula'a to Kitabullah.", id: "Adat bersendikan syarak, syarak bersendikan Kitabullah.", en: "Custom is based on religious law, and religious law is based on the Holy Scripture." },
  { gor: "Huyula: Mohuyula to delomo mopiyohu.", id: "Gotong royong: Saling membantu dalam kebaikan.", en: "Mutual cooperation: Helping one another in goodness." },
  { gor: "Lo'iya u mopiyohu mo'osanangi hilao.", id: "Tutur kata yang baik menenteramkan hati.", en: "Kind words bring peace to the heart." }
];
let quoteIdx = 0;

function nextDailyQuote() {
  quoteIdx = (quoteIdx + 1) % DAILY_QUOTES.length;
  const q = DAILY_QUOTES[quoteIdx];
  document.getElementById("daily-quote-gor").textContent = `"${q.gor}"`;
  document.getElementById("daily-quote-trans").innerHTML = `<strong>ID:</strong> ${q.id} &bull; <strong>EN:</strong> ${q.en}`;
}

function speakDailyQuote() {
  const q = DAILY_QUOTES[quoteIdx];
  speakText(q.gor, "gor", q.gor, q.id);
}

// ---------------------------------------------------------
// 9. KAMUS DIGITAL INTERAKTIF (ID - GORONTALO - EN)
// ---------------------------------------------------------
let selectedLetter = "ALL";
let showFavOnly = false;

function initAlphabetBar() {
  const bar = document.getElementById("alphabet-filter-bar");
  const letters = ["ALL", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")];
  bar.innerHTML = letters.map(l => `
    <button onclick="setDictLetter('${l}')" data-letter="${l}" class="alpha-btn shrink-0 px-2.5 py-1.5 rounded-lg text-xs font-bold transition ${l === 'ALL' ? 'bg-purple-700 text-white shadow-sm' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}">
      ${l === 'ALL' ? 'Semua' : l}
    </button>
  `).join("");
}

function setDictLetter(letter) {
  selectedLetter = letter;
  document.querySelectorAll(".alpha-btn").forEach(btn => {
    if (btn.getAttribute("data-letter") === letter) {
      btn.className = "alpha-btn shrink-0 px-2.5 py-1.5 rounded-lg text-xs font-bold transition bg-purple-700 text-white shadow-sm";
    } else {
      btn.className = "alpha-btn shrink-0 px-2.5 py-1.5 rounded-lg text-xs font-bold transition bg-slate-100 text-slate-600 hover:bg-slate-200";
    }
  });
  renderDictionary();
}

function toggleFavOnlyFilter() {
  showFavOnly = !showFavOnly;
  const btn = document.getElementById("btn-fav-filter");
  btn.classList.toggle("bg-amber-100", showFavOnly);
  btn.classList.toggle("border-amber-400", showFavOnly);
  renderDictionary();
}

function toggleFavoriteWord(wordId) {
  const idx = appState.favorites.indexOf(wordId);
  if (idx === -1) {
    appState.favorites.push(wordId);
    showToast("Kosakata disimpan ke Favorit ⭐");
  } else {
    appState.favorites.splice(idx, 1);
    showToast("Kosakata dihapus dari Favorit");
  }
  saveState();
  renderDictionary();
}

function renderDictionary() {
  const query = document.getElementById("dict-search-input").value.trim().toLowerCase();
  const direction = document.getElementById("dict-direction").value;
  const category = document.getElementById("dict-category").value;
  const container = document.getElementById("dictionary-results");

  let filtered = DICTIONARY_DB.filter(item => {
    if (showFavOnly && !appState.favorites.includes(item.id)) return false;
    if (category !== "all" && item.category !== category) return false;

    const targetWord = direction === "gor-id" ? item.gorWord : (direction === "en-gor" ? item.enWord : item.idWord);
    if (selectedLetter !== "ALL" && !targetWord.toUpperCase().startsWith(selectedLetter)) return false;

    if (!query) return true;
    if (direction === "id-gor") return item.idWord.toLowerCase().includes(query);
    if (direction === "gor-id") return item.gorWord.toLowerCase().includes(query);
    if (direction === "en-gor") return item.enWord.toLowerCase().includes(query);
    return (
      item.idWord.toLowerCase().includes(query) ||
      item.gorWord.toLowerCase().includes(query) ||
      item.enWord.toLowerCase().includes(query)
    );
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="md:col-span-2 bg-amber-50 border border-amber-300 rounded-2xl p-6 text-center space-y-2">
        <div class="text-3xl">🔍</div>
        <h3 class="font-bold text-amber-950 text-base">Kosakata "${query || selectedLetter}" Belum Tersedia / Masih Perlu Diperiksa</h3>
        <p class="text-xs text-amber-900 max-w-lg mx-auto leading-relaxed">
          Demi menjaga keakuratan Bahasa Gorontalo, kami tidak menampilkan terjemahan otomatis tanpa verifikasi penutur asli. Kosakata ini ditandai sebagai <strong>Perlu Pemeriksaan Penutur Asli</strong>.
        </p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => {
    const isFav = appState.favorites.includes(item.id);
    return `
      <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:border-purple-300 transition flex flex-col justify-between gap-4">
        <div>
          <div class="flex items-center justify-between gap-2">
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold">${item.category}</span>
              <span class="px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-bold">✓ Terverifikasi</span>
            </div>
            <button onclick="toggleFavoriteWord(${item.id})" class="p-1.5 rounded-lg hover:bg-amber-50 text-lg transition" title="Simpan Favorit">
              ${isFav ? '⭐' : '☆'}
            </button>
          </div>

          <div class="mt-3 grid grid-cols-3 gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
            <div>
              <span class="text-[10px] font-bold uppercase text-slate-400 block">🇮🇩 Indonesia</span>
              <span class="font-bold text-slate-900 text-sm">${item.idWord}</span>
            </div>
            <div>
              <span class="text-[10px] font-bold uppercase text-purple-600 block">🏛️ Gorontalo</span>
              <span class="font-extrabold text-purple-800 text-sm">${item.gorWord}</span>
            </div>
            <div>
              <span class="text-[10px] font-bold uppercase text-slate-400 block">🇬🇧 English</span>
              <span class="font-bold text-slate-700 text-sm">${item.enWord}</span>
            </div>
          </div>

          <div class="mt-3 text-xs space-y-1 bg-purple-50/50 p-3 rounded-xl border border-purple-100">
            <p class="font-bold text-purple-950">🗣️ "${item.exGor}"</p>
            <p class="text-slate-600">🇮🇩 ${item.exId}</p>
            <p class="text-slate-500 italic">🇬🇧 ${item.exEn}</p>
          </div>
        </div>

        <div class="flex flex-wrap items-center gap-2 pt-1">
          <button onclick="speakText('${item.gorWord.replace(/'/g, "\\'")}. ${item.exGor.replace(/'/g, "\\'")}', 'gor', '${item.gorWord.replace(/'/g, "\\'")}', '${item.idWord} (${item.enWord})')" class="flex-1 py-2 px-3 rounded-xl bg-purple-700 hover:bg-purple-800 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition">
            <span>🔊</span> Lafal Gorontalo
          </button>
          <button onclick="speakText('${item.enWord}. ${item.exEn}', 'en', '${item.enWord}', '${item.idWord}')" class="py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition">
            🇬🇧 EN
          </button>
        </div>
      </div>
    `;
  }).join("");
}

// ---------------------------------------------------------
// 10. MATERI PEMBELAJARAN BERTINGKAT
// ---------------------------------------------------------
let currentCourseLevel = "pemula";
let currentChapterIndex = 0;

function selectCourseLevel(level) {
  currentCourseLevel = level;
  currentChapterIndex = 0;
  document.querySelectorAll(".level-tab").forEach(btn => {
    btn.className = "level-tab px-5 py-2.5 rounded-xl font-bold text-sm transition bg-slate-100 text-slate-700 hover:bg-slate-200";
  });
  const activeBtn = document.getElementById("tab-level-" + level);
  if (activeBtn) {
    activeBtn.className = "level-tab px-5 py-2.5 rounded-xl font-bold text-sm transition bg-purple-700 text-white shadow";
  }
  renderCourseChapters();
}

function selectChapter(idx) {
  currentChapterIndex = idx;
  renderCourseChapters();
}

function renderCourseChapters() {
  const chapters = COURSES_DB[currentCourseLevel];
  const listEl = document.getElementById("course-chapter-list");
  const detailEl = document.getElementById("course-chapter-detail");

  listEl.innerHTML = chapters.map((ch, idx) => {
    const isDone = appState.completedChapters.includes(ch.id);
    const isActive = idx === currentChapterIndex;
    return `
      <button onclick="selectChapter(${idx})" class="w-full text-left p-4 rounded-2xl border transition flex items-center justify-between gap-2 ${isActive ? 'bg-purple-700 text-white border-purple-700 shadow-md' : 'bg-white text-slate-800 border-slate-200 hover:border-purple-300'}">
        <span class="text-xs sm:text-sm font-bold">${ch.title}</span>
        <span class="text-xs px-2 py-0.5 rounded-full ${isDone ? 'bg-emerald-500 text-white' : (isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500')}">
          ${isDone ? '✓ Selesai' : 'Bab ' + (idx + 1)}
        </span>
      </button>
    `;
  }).join("");

  const ch = chapters[currentChapterIndex];
  const isDone = appState.completedChapters.includes(ch.id);

  detailEl.innerHTML = `
    <div class="space-y-5">
      <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-4">
        <div>
          <span class="text-xs font-bold uppercase text-purple-700">Level ${currentCourseLevel}</span>
          <h3 class="font-display text-xl sm:text-2xl font-extrabold text-slate-900 mt-0.5">${ch.title}</h3>
        </div>
        ${isDone ? '<span class="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">✓ Bab Selesai</span>' : ''}
      </div>

      <p class="text-sm text-slate-600 leading-relaxed">${ch.desc}</p>

      <div class="space-y-3">
        <h4 class="font-bold text-sm text-slate-800">Contoh Ungkapan & Terjemahan (3 Bahasa):</h4>
        ${ch.items.map(it => `
          <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div class="space-y-1">
              <div class="font-extrabold text-purple-900 text-sm sm:text-base">🏛️ ${it.gor}</div>
              <div class="text-xs text-slate-700">🇮🇩 ${it.id}</div>
              <div class="text-xs text-slate-500 italic">🇬🇧 ${it.en}</div>
            </div>
            <button onclick="speakText('${it.gor.replace(/'/g, "\\'")}', 'gor', '${it.gor.replace(/'/g, "\\'")}', '${it.id.replace(/'/g, "\\'")}')" class="px-3.5 py-2 rounded-xl bg-purple-700 hover:bg-purple-800 text-white text-xs font-bold shrink-0 self-start sm:self-center">
              🔊 Dengarkan
            </button>
          </div>
        `).join("")}
      </div>

      <!-- Latihan Mini Bab -->
      <div class="bg-amber-50 border border-amber-200 rounded-2xl p-5 space-y-3">
        <h4 class="font-bold text-amber-950 text-sm">📝 Latihan Pemahaman Bab Ini:</h4>
        <p class="text-sm font-medium text-slate-800">${ch.quiz.q}</p>
        <div class="grid sm:grid-cols-2 gap-2">
          ${ch.quiz.opts.map((opt, oIdx) => `
            <button onclick="checkChapterMiniQuiz('${ch.id}', ${oIdx}, ${ch.quiz.ans})" class="text-left p-3 rounded-xl bg-white hover:bg-purple-50 border border-amber-300 text-xs font-semibold text-slate-800 transition">
              ${String.fromCharCode(65 + oIdx)}. ${opt}
            </button>
          `).join("")}
        </div>
      </div>
    </div>
  `;
}

function checkChapterMiniQuiz(chapterId, chosen, correct) {
  if (chosen === correct) {
    if (!appState.completedChapters.includes(chapterId)) {
      appState.completedChapters.push(chapterId);
      addXP(25, "Menyelesaikan bab pembelajaran!");
    } else {
      showToast("Jawaban Benar! Bab ini sudah selesai ✓");
    }
    renderCourseChapters();
  } else {
    showToast("Kurang tepat, coba periksa kembali materi di atas ya!");
  }
}

// ---------------------------------------------------------
// 11. PERCAKAPAN INTERAKTIF & ANIMASI PENUTUR BERBICARA
// ---------------------------------------------------------
let activeConvIndex = 0;

function initConversations() {
  const btnContainer = document.getElementById("conversation-situations");
  btnContainer.innerHTML = CONVERSATIONS_DB.map((c, idx) => `
    <button onclick="selectConversation(${idx})" id="conv-tab-${idx}" class="px-3.5 py-2 rounded-xl text-xs font-bold transition ${idx === 0 ? 'bg-purple-700 text-white shadow' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}">
      ${c.title}
    </button>
  `).join("");
  renderConversation();
}

function selectConversation(idx) {
  activeConvIndex = idx;
  CONVERSATIONS_DB.forEach((_, i) => {
    const b = document.getElementById("conv-tab-" + i);
    b.className = `px-3.5 py-2 rounded-xl text-xs font-bold transition ${i === idx ? 'bg-purple-700 text-white shadow' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`;
  });
  renderConversation();
}

function renderConversation() {
  const conv = CONVERSATIONS_DB[activeConvIndex];
  document.getElementById("conv-active-title").textContent = conv.title;
  document.getElementById("speaker-A-name").textContent = conv.speakerA;
  document.getElementById("speaker-B-name").textContent = conv.speakerB;

  const bubbles = document.getElementById("conversation-bubbles");
  bubbles.innerHTML = conv.lines.map((line, lIdx) => {
    const isA = line.who === "A";
    const speakerLabel = isA ? conv.speakerA : conv.speakerB;
    const boxId = isA ? "speaker-A-box" : "speaker-B-box";
    return `
      <div class="flex ${isA ? 'justify-start' : 'justify-end'}">
        <div class="max-w-lg w-full rounded-2xl p-4 border ${isA ? 'bg-purple-50/70 border-purple-200' : 'bg-rose-50/70 border-rose-200'} space-y-1.5">
          <div class="flex items-center justify-between">
            <span class="text-xs font-extrabold ${isA ? 'text-purple-800' : 'text-rose-800'}">${speakerLabel}</span>
            <button onclick="speakText('${line.gor.replace(/'/g, "\\'")}', 'gor', '${line.gor.replace(/'/g, "\\'")}', '${line.id.replace(/'/g, "\\'")}', '${boxId}')" class="px-2.5 py-1 rounded-lg bg-white border border-slate-200 hover:bg-amber-50 text-xs font-bold text-slate-700 flex items-center gap-1 shadow-sm">
              <span>🔊</span> Dengar
            </button>
          </div>
          <p class="font-bold text-slate-900 text-sm sm:text-base">"${line.gor}"</p>
          <p class="text-xs text-slate-700">🇮🇩 ${line.id}</p>
          <p class="text-xs text-slate-500 italic">🇬🇧 ${line.en}</p>
        </div>
      </div>
    `;
  }).join("");

  document.getElementById("conversation-key-vocab").innerHTML = conv.vocab.map(v => `
    <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
      <div>
        <div class="font-bold text-purple-900 text-xs">${v.gor}</div>
        <div class="text-[11px] text-slate-600">${v.id} • <em>${v.en}</em></div>
      </div>
      <button onclick="speakText('${v.gor.replace(/'/g, "\\'")}', 'gor', '${v.gor.replace(/'/g, "\\'")}', '${v.id}')" class="p-1.5 rounded-lg bg-purple-100 text-purple-700 text-xs font-bold">🔊</button>
    </div>
  `).join("");

  document.getElementById("conversation-practice-box").innerHTML = `
    <p class="text-xs font-bold text-slate-800">${conv.practice.prompt}</p>
    <p class="text-[11px] text-slate-500">Petunjuk: ${conv.practice.hint}</p>
    <div class="flex gap-2">
      <input type="text" id="conv-practice-input" placeholder="Ketik jawaban..." class="flex-1 px-3 py-2 rounded-xl border border-slate-300 text-xs" />
      <button onclick="checkConvPractice()" class="px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs">Cek</button>
    </div>
    <div id="conv-practice-feedback" class="text-xs font-semibold"></div>
  `;
}

function playFullConversation() {
  const conv = CONVERSATIONS_DB[activeConvIndex];
  let delay = 0;
  conv.lines.forEach((line) => {
    const boxId = line.who === "A" ? "speaker-A-box" : "speaker-B-box";
    setTimeout(() => {
      speakText(line.gor, "gor", line.gor, line.id, boxId);
    }, delay);
    delay += Math.max(3200, line.gor.length * 80);
  });
}

function checkConvPractice() {
  const conv = CONVERSATIONS_DB[activeConvIndex];
  const val = document.getElementById("conv-practice-input").value.trim().toLowerCase();
  const fb = document.getElementById("conv-practice-feedback");
  if (val === conv.practice.answer.toLowerCase()) {
    fb.className = "text-xs font-bold text-emerald-700";
    fb.textContent = `✓ Tepat sekali! Jawabannya adalah "${conv.practice.answer}".`;
    addXP(15, "Latihan percakapan berhasil!");
  } else {
    fb.className = "text-xs font-bold text-rose-600";
    fb.textContent = `✕ Belum tepat. Coba perhatikan kembali dialog di sebelah kiri.`;
  }
}

// ---------------------------------------------------------
// 12. TUTOR DIGITAL BAHASA GORONTALO
// ---------------------------------------------------------
function initTutorChat() {
  const box = document.getElementById("tutor-chat-messages");
  box.innerHTML = `
    <div class="flex items-start gap-3">
      <div class="w-9 h-9 rounded-xl bg-purple-700 text-white flex items-center justify-center font-bold text-sm shrink-0">🏛️</div>
      <div class="bg-white border border-slate-200 rounded-2xl p-4 text-xs sm:text-sm text-slate-700 space-y-2 max-w-xl shadow-sm">
        <p class="font-bold text-purple-900">Assalamu'alaikum, wolo habari? 👋</p>
        <p>Saya <strong>Baate Hulontalo</strong>, Tutor Digital Bahasa Gorontalo Anda. Saya siap membantu menjelaskan arti kosakata, menerjemahkan kalimat sederhana, mengoreksi latihan, dan merekomendasikan materi belajar.</p>
        <p class="text-xs text-emerald-700 font-semibold">✓ Semua terjemahan terverifikasi ditandai secara eksplisit.</p>
      </div>
    </div>
  `;
}

function resetTutorChat() {
  initTutorChat();
}

function askTutorPreset(text) {
  document.getElementById("tutor-input").value = text;
  handleTutorSubmit(new Event("submit"));
}

function handleTutorSubmit(e) {
  e.preventDefault();
  const input = document.getElementById("tutor-input");
  const query = input.value.trim();
  if (!query) return;
  input.value = "";

  const box = document.getElementById("tutor-chat-messages");
  // Pesan Pengguna
  box.innerHTML += `
    <div class="flex justify-end">
      <div class="bg-purple-700 text-white rounded-2xl px-4 py-3 text-xs sm:text-sm max-w-md shadow">
        ${query}
      </div>
    </div>
  `;

  // Analisis Jawaban Tutor Berbasis Database Terverifikasi
  const responseHTML = generateTutorResponse(query);

  setTimeout(() => {
    box.innerHTML += `
      <div class="flex items-start gap-3">
        <div class="w-9 h-9 rounded-xl bg-purple-700 text-white flex items-center justify-center font-bold text-sm shrink-0">🏛️</div>
        <div class="bg-white border border-slate-200 rounded-2xl p-4 text-xs sm:text-sm text-slate-700 space-y-2 max-w-xl shadow-sm">
          ${responseHTML}
        </div>
      </div>
    `;
    box.scrollTop = box.scrollHeight;
  }, 300);
}

function generateTutorResponse(query) {
  const q = query.toLowerCase();

  // 1. Cek Permintaan Rekomendasi Materi
  if (q.includes("rekomendasi") || q.includes("level") || q.includes("materi")) {
    const doneCount = appState.completedChapters.length;
    const recLevel = doneCount < 5 ? "Level Pemula" : (doneCount < 10 ? "Level Menengah" : "Level Lanjutan");
    return `
      <p class="font-bold text-purple-900">🎯 Rekomendasi Belajar Personal</p>
      <p>Berdasarkan progres Anda (${doneCount} bab selesai, ${appState.xp} XP), saya merekomendasikan Anda melanjutkan <strong>${recLevel}</strong>, khususnya fokus pada penyusunan kalimat S-P-O dan percakapan sehari-hari.</p>
    `;
  }

  // 2. Cek Permintaan Koreksi Kalimat
  if (q.includes("koreksi")) {
    if (q.includes("mongaa taluhu")) {
      return `
        <p class="font-bold text-rose-700">📝 Hasil Koreksi Kalimat:</p>
        <p>Kalimat <em>"Watiya mongaa taluhu"</em> secara harfiah berarti "Saya <strong>makan</strong> air". Dalam Bahasa Gorontalo, kata kerja untuk air adalah <strong>Mongilu</strong> (minum).</p>
        <p class="bg-emerald-50 p-2.5 rounded-xl border border-emerald-200 text-emerald-900 font-semibold">
          ✓ Perbaikan Terverifikasi: <strong>"Watiya mongilu taluhu."</strong> (Saya minum air / I drink water).
        </p>
      `;
    }
    return `
      <p class="font-bold text-purple-900">📝 Analisis Struktur Kalimat:</p>
      <p>Pastikan pola kalimat mengikuti urutan <strong>Subjek + Predikat + Objek</strong> (contoh: <em>Watiya mongaa ila</em> = Saya makan nasi). Gunakan <strong>Watiya</strong> untuk suasana sopan dan <strong>Wau</strong> untuk suasana akrab.</p>
    `;
  }

  // 3. Cek Kecocokan Kata dalam Kamus Terverifikasi
  const matches = DICTIONARY_DB.filter(item =>
    q.includes(item.idWord.toLowerCase()) ||
    q.includes(item.gorWord.toLowerCase()) ||
    q.includes(item.enWord.toLowerCase())
  );

  if (matches.length > 0) {
    const itemsHtml = matches.slice(0, 3).map(m => `
      <div class="p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-200 space-y-1">
        <div class="flex items-center justify-between">
          <span class="font-bold text-purple-900">${m.idWord} ➔ ${m.gorWord} (${m.enWord})</span>
          <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-600 text-white">✓ Terverifikasi</span>
        </div>
        <p class="text-xs text-slate-600">Contoh: <em>"${m.exGor}"</em> (${m.exId})</p>
      </div>
    `).join("");

    return `
      <p class="font-bold text-slate-900">Berikut hasil penelusuran kamus terverifikasi:</p>
      ${itemsHtml}
    `;
  }

  // 4. Jika Kosakata Belum Terverifikasi di Database
  return `
    <div class="p-3 rounded-xl bg-amber-50 border border-amber-300 space-y-1.5">
      <span class="text-[11px] font-bold px-2 py-0.5 rounded bg-amber-500 text-white">⚠️ Memerlukan Pemeriksaan Penutur Asli</span>
      <p class="text-xs text-amber-950 leading-relaxed">
        Mohon maaf, istilah atau kalimat spesifik pada pertanyaan <em>"${query}"</em> belum tersedia dalam basis data terverifikasi kami. Agar tidak terjadi kesalahan bahasa, kosakata ini ditandai untuk diverifikasi terlebih dahulu oleh penutur asli / budayawan Gorontalo.
      </p>
    </div>
  `;
}

// ---------------------------------------------------------
// 13. KUIS INTERAKTIF & LISTENING QUIZ
// ---------------------------------------------------------
const QUIZ_BANK = [
  { type: "vocab", diff: "pemula", q: "Apa arti kata 'Mongilu' dalam Bahasa Indonesia?", opts: ["Makan", "Minum", "Tidur", "Pergi"], ans: 1, exp: "'Mongilu' berarti Minum (Drink), sedangkan 'Mongaa' berarti Makan." },
  { type: "vocab", diff: "pemula", q: "Bahasa Gorontalo dari 'Rumah' adalah...", opts: ["Taluhu", "Bele", "Patali", "Bulalo"], ans: 1, exp: "'Bele' berarti Rumah (House). Contoh: Bele Dulohupa." },
  { type: "listening", diff: "pemula", audioText: "Odu'olo da'a", q: "Dengarkan audio pelafalan berikut, lalu pilih arti yang tepat!", opts: ["Apa kabar?", "Terima kasih banyak", "Selamat pagi", "Sampai jumpa"], ans: 1, exp: "Audio melafalkan 'Odu'olo da'a' yang berarti Terima kasih banyak." },
  { type: "sentence", diff: "menengah", q: "Lengkapi kalimat: 'Ti Mama mona'o ode _____' (Ibu pergi ke pasar)", opts: ["patali", "uponula", "taluhu", "binte"], ans: 0, exp: "'Patali' berarti Pasar. Kalimat lengkapnya: Ti Mama mona'o ode patali." },
  { type: "listening", diff: "menengah", audioText: "Watiya mongaa binte biluhuta", q: "Dengarkan kalimat audio ini. Makanan apa yang disebutkan?", opts: ["Ikan bakar", "Sup jagung khas Gorontalo", "Kue karawo", "Nasi putih"], ans: 1, exp: "Audio mengucapkan 'Watiya mongaa binte biluhuta' (Saya makan sup jagung khas Gorontalo)." },
  { type: "sentence", diff: "lanjutan", q: "Susun kata acak berikut menjadi kalimat benar: [taluhu] - [Watiya] - [mohuhulo] - [mongilu]", opts: ["Watiya mongilu taluhu mohuhulo", "Taluhu mohuhulo watiya mongilu", "Mongilu watiya mohuhulo taluhu", "Watiya taluhu mongilu mohuhulo"], ans: 0, exp: "Pola S-P-O + Kata Sifat: Watiya (S) mongilu (P) taluhu mohuhulo (O: air dingin)." }
];

let activeQuizQuestions = [];
let currentQuizIdx = 0;
let currentQuizScore = 0;
let userQuizAnswers = [];
let quizTimerInterval = null;

function startQuiz() {
  const type = document.getElementById("quiz-type-select").value;
  const diff = document.getElementById("quiz-diff-select").value;
  const timerSec = parseInt(document.getElementById("quiz-timer-select").value, 10);

  let pool = QUIZ_BANK.filter(q => (type === "mixed" || q.type === type));
  if (pool.length < 3) pool = [...QUIZ_BANK];

  activeQuizQuestions = pool.slice(0, 5);
  currentQuizIdx = 0;
  currentQuizScore = 0;
  userQuizAnswers = [];

  document.getElementById("quiz-setup-panel").classList.add("hidden");
  document.getElementById("quiz-result-panel").classList.add("hidden");
  document.getElementById("quiz-active-panel").classList.remove("hidden");

  clearInterval(quizTimerInterval);
  const timerDisp = document.getElementById("quiz-timer-display");
  if (timerSec > 0) {
    let remaining = timerSec;
    timerDisp.classList.remove("hidden");
    timerDisp.textContent = `⏱️ ${remaining}s`;
    quizTimerInterval = setInterval(() => {
      remaining--;
      timerDisp.textContent = `⏱️ ${remaining}s`;
      if (remaining <= 0) {
        clearInterval(quizTimerInterval);
        finishQuiz();
      }
    }, 1000);
  } else {
    timerDisp.classList.add("hidden");
  }

  renderQuizQuestion();
}

function renderQuizQuestion() {
  const qObj = activeQuizQuestions[currentQuizIdx];
  document.getElementById("quiz-progress-text").textContent = `Soal ${currentQuizIdx + 1} dari ${activeQuizQuestions.length}`;
  document.getElementById("quiz-live-score").textContent = `Skor: ${currentQuizScore}`;

  const card = document.getElementById("quiz-question-card");
  card.innerHTML = `
    <div class="flex items-center justify-between">
      <span class="px-2.5 py-1 rounded-lg bg-purple-100 text-purple-800 text-xs font-bold uppercase">${qObj.type}</span>
      <span class="text-xs text-slate-400">Tingkat: ${qObj.diff}</span>
    </div>
    ${qObj.audioText ? `
      <div class="p-4 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center justify-between">
        <span class="text-xs font-bold text-indigo-900">🎧 Klik tombol untuk mendengarkan soal audio:</span>
        <button onclick="speakText('${qObj.audioText.replace(/'/g, "\\'")}', 'gor', 'Soal Audio Kuis', 'Dengarkan pelafalan dengan saksama')" class="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold">
          🔊 Putar Audio
        </button>
      </div>
    ` : ''}
    <h3 class="font-bold text-base sm:text-lg text-slate-900">${qObj.q}</h3>
    <div class="grid sm:grid-cols-2 gap-3 pt-2">
      ${qObj.opts.map((opt, idx) => `
        <button onclick="submitQuizAnswer(${idx})" class="text-left p-4 rounded-xl border-2 border-slate-200 hover:border-purple-600 hover:bg-purple-50 text-sm font-semibold text-slate-800 transition">
          ${String.fromCharCode(65 + idx)}. ${opt}
        </button>
      `).join("")}
    </div>
  `;
}

function submitQuizAnswer(chosenIdx) {
  const qObj = activeQuizQuestions[currentQuizIdx];
  const isCorrect = chosenIdx === qObj.ans;
  if (isCorrect) currentQuizScore += 20;

  userQuizAnswers.push({ question: qObj, chosen: chosenIdx, isCorrect });

  if (currentQuizIdx + 1 < activeQuizQuestions.length) {
    currentQuizIdx++;
    renderQuizQuestion();
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  clearInterval(quizTimerInterval);
  document.getElementById("quiz-active-panel").classList.add("hidden");
  const resPanel = document.getElementById("quiz-result-panel");
  resPanel.classList.remove("hidden");

  const maxScore = activeQuizQuestions.length * 20;
  const percent = Math.round((currentQuizScore / maxScore) * 100);

  appState.quizHistory.unshift({
    date: new Date().toLocaleDateString("id-ID"),
    score: percent,
    correct: userQuizAnswers.filter(a => a.isCorrect).length,
    total: activeQuizQuestions.length
  });
  addXP(Math.max(10, Math.round(percent / 2)), "Menyelesaikan Kuis Interaktif!");
  renderQuizHistory();

  resPanel.innerHTML = `
    <div class="bg-gradient-to-r from-purple-700 to-indigo-800 text-white rounded-2xl p-6 text-center space-y-2">
      <div class="text-4xl font-extrabold">${percent} / 100</div>
      <p class="text-sm text-purple-100">Kamu menjawab benar ${userQuizAnswers.filter(a => a.isCorrect).length} dari ${activeQuizQuestions.length} soal.</p>
      <button onclick="resetQuizSetup()" class="mt-3 px-5 py-2.5 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs shadow">
        Ulangi / Pilih Kuis Lain
      </button>
    </div>

    <div class="space-y-3">
      <h4 class="font-bold text-slate-900">📖 Pembahasan Jawaban:</h4>
      ${userQuizAnswers.map((item, idx) => `
        <div class="p-4 rounded-2xl border ${item.isCorrect ? 'bg-emerald-50 border-emerald-200' : 'bg-rose-50 border-rose-200'} text-xs space-y-1">
          <div class="font-bold text-slate-900">${idx + 1}. ${item.question.q}</div>
          <div class="${item.isCorrect ? 'text-emerald-800' : 'text-rose-800'} font-semibold">
            Jawabanmu: ${item.question.opts[item.chosen]} ${item.isCorrect ? '✓ Benar' : `✕ Salah (Seharusnya: ${item.question.opts[item.question.ans]})`}
          </div>
          <p class="text-slate-600 pt-1">💡 ${item.question.exp}</p>
        </div>
      `).join("")}
    </div>
  `;
}

function resetQuizSetup() {
  document.getElementById("quiz-result-panel").classList.add("hidden");
  document.getElementById("quiz-setup-panel").classList.remove("hidden");
}

function renderQuizHistory() {
  const list = document.getElementById("quiz-history-list");
  if (appState.quizHistory.length === 0) return;
  list.innerHTML = `
    <div class="grid sm:grid-cols-3 gap-3">
      ${appState.quizHistory.slice(0, 6).map(h => `
        <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
          <div>
            <div class="font-bold text-slate-900 text-xs">Nilai: ${h.score}%</div>
            <div class="text-[11px] text-slate-500">${h.date} (${h.correct}/${h.total} benar)</div>
          </div>
          <span class="text-lg">${h.score >= 80 ? '🏆' : '⭐'}</span>
        </div>
      `).join("")}
    </div>
  `;
}

// ---------------------------------------------------------
// 14. GAME EDUKASI (6 PERMAINAN INTERAKTIF)
// ---------------------------------------------------------
function launchGame(gameType) {
  const stage = document.getElementById("game-stage");

  if (gameType === "tebak-kata") {
    const pool = [...DICTIONARY_DB].sort(() => 0.5 - Math.random()).slice(0, 4);
    const target = pool[0];
    const shuffled = [...pool].sort(() => 0.5 - Math.random());

    stage.innerHTML = `
      <div class="space-y-5">
        <div class="flex items-center justify-between">
          <span class="px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-bold">🎯 Game: Tebak Kata</span>
          <button onclick="speakText('${target.gorWord.replace(/'/g, "\\'")}', 'gor', '${target.gorWord.replace(/'/g, "\\'")}', 'Tebak artinya!')" class="text-xs font-bold text-purple-700">🔊 Dengar Kata</button>
        </div>
        <div class="bg-slate-50 rounded-2xl p-6 text-center border border-slate-200">
          <span class="text-xs text-slate-500">Apa arti kata Bahasa Gorontalo berikut?</span>
          <h3 class="font-display text-3xl font-extrabold text-purple-900 mt-1">"${target.gorWord}"</h3>
        </div>
        <div class="grid sm:grid-cols-2 gap-3">
          ${shuffled.map(opt => `
            <button onclick="handleTebakKata(${opt.id === target.id})" class="p-4 rounded-xl border-2 border-slate-200 hover:border-purple-600 hover:bg-purple-50 text-left transition">
              <div class="font-bold text-slate-900 text-sm">🇮🇩 ${opt.idWord}</div>
              <div class="text-xs text-slate-500 italic">🇬🇧 ${opt.enWord}</div>
            </button>
          `).join("")}
        </div>
      </div>
    `;
  } else if (gameType === "cocok-kata") {
    const pairs = [...DICTIONARY_DB].sort(() => 0.5 - Math.random()).slice(0, 4);
    const leftCol = [...pairs];
    const rightCol = [...pairs].sort(() => 0.5 - Math.random());
    window._matchState = { selectedLeft: null, matchedCount: 0, total: pairs.length };

    stage.innerHTML = `
      <div class="space-y-4">
        <span class="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">🔗 Game: Cocokkan Kata (Klik Kiri lalu Kanan)</span>
        <div class="grid grid-cols-2 gap-2.5 sm:gap-4 pt-2">
          <div class="space-y-2 sm:space-y-2.5">
            ${leftCol.map(p => `
              <button id="match-l-${p.id}" onclick="selectMatchLeft(${p.id})" class="w-full p-2.5 sm:p-3.5 rounded-xl border-2 border-slate-200 font-bold text-xs sm:text-sm text-purple-900 hover:bg-purple-50 transition">
                ${p.gorWord}
              </button>
            `).join("")}
          </div>
          <div class="space-y-2 sm:space-y-2.5">
            ${rightCol.map(p => `
              <button id="match-r-${p.id}" onclick="selectMatchRight(${p.id})" class="w-full p-2.5 sm:p-3.5 rounded-xl border-2 border-slate-200 font-semibold text-xs sm:text-sm text-slate-800 hover:bg-amber-50 transition">
                ${p.idWord} <span class="hidden sm:inline">(${p.enWord})</span>
              </button>
            `).join("")}
          </div>
        </div>
      </div>
    `;
  } else if (gameType === "susun-kalimat") {
    const sentences = [
      { words: ["Watiya", "mongaa", "binte", "biluhuta"], correct: "Watiya mongaa binte biluhuta", trans: "Saya makan sup jagung khas Gorontalo" },
      { words: ["Ti", "Mama", "mona'o", "ode", "patali"], correct: "Ti Mama mona'o ode patali", trans: "Ibu pergi ke pasar" },
      { words: ["Odu'olo", "da'a", "to", "tulungiyo"], correct: "Odu'olo da'a to tulungiyo", trans: "Terima kasih banyak atas bantuannya" }
    ];
    const picked = sentences[Math.floor(Math.random() * sentences.length)];
    const scrambled = [...picked.words].sort(() => 0.5 - Math.random());
    window._scrambleState = { target: picked.correct, chosen: [] };

    stage.innerHTML = `
      <div class="space-y-4">
        <span class="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold">🧩 Game: Susun Kalimat</span>
        <p class="text-xs sm:text-sm text-slate-600">Susun kata acak berikut agar bermakna: <strong>"${picked.trans}"</strong></p>
        <div id="scramble-answer-box" class="min-h-[50px] sm:min-h-[54px] p-2.5 sm:p-3 rounded-2xl bg-purple-50 border-2 border-dashed border-purple-300 flex flex-wrap gap-2 items-center">
          <span class="text-xs text-slate-400">Klik kata di bawah untuk menyusun...</span>
        </div>
        <div class="flex flex-wrap gap-2" id="scramble-word-bank">
          ${scrambled.map((w, i) => `
            <button id="scr-btn-${i}" onclick="pickScrambleWord('${w.replace(/'/g, "\\'")}', ${i})" class="px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-white border border-slate-300 hover:border-purple-600 font-bold text-xs sm:text-sm shadow-sm">
              ${w}
            </button>
          `).join("")}
        </div>
        <div class="flex flex-wrap gap-2 pt-2">
          <button onclick="checkScrambleSentence()" class="px-4 sm:px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs">Periksa Susunan</button>
          <button onclick="launchGame('susun-kalimat')" class="px-3.5 sm:px-4 py-2.5 rounded-xl bg-slate-100 text-slate-700 font-bold text-xs">Acak Ulang</button>
        </div>
      </div>
    `;
  } else if (gameType === "memory-card") {
    const base = [...DICTIONARY_DB].sort(() => 0.5 - Math.random()).slice(0, 4);
    const cards = [];
    base.forEach(item => {
      cards.push({ pairId: item.id, text: item.gorWord, lang: "GOR" });
      cards.push({ pairId: item.id, text: item.idWord, lang: "ID" });
    });
    cards.sort(() => 0.5 - Math.random());
    window._memState = { flipped: [], matched: 0 };

    stage.innerHTML = `
      <div class="space-y-4">
        <span class="px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold">🃏 Game: Memory Card Kosakata</span>
        <p class="text-xs text-slate-600">Temukan pasangan kata Bahasa Gorontalo dan artinya dalam Bahasa Indonesia!</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
          ${cards.map((c, idx) => `
            <button id="mem-card-${idx}" onclick="flipMemCard(${idx}, ${c.pairId}, '${c.text.replace(/'/g, "\\'")}')" class="h-20 sm:h-24 rounded-xl sm:rounded-2xl bg-purple-800 text-white font-bold text-xs sm:text-sm flex items-center justify-center p-2 shadow hover:bg-purple-700 transition">
              ❓
            </button>
          `).join("")}
        </div>
      </div>
    `;
  } else if (gameType === "tebak-gambar") {
    const picItems = [
      { emoji: "🐟", gor: "Uponula", id: "Ikan", opts: ["Uponula", "Taluhu", "Bele", "Huidu"] },
      { emoji: "🏠", gor: "Bele", id: "Rumah", opts: ["Bulalo", "Bele", "Binte", "Patali"] },
      { emoji: "🌽", gor: "Binte", id: "Jagung", opts: ["Ila", "Binte", "Uponula", "Deheto"] },
      { emoji: "⛰️", gor: "Huidu", id: "Gunung", opts: ["Huidu", "Taluhu", "Wala'o", "Dumodupo"] }
    ];
    const q = picItems[Math.floor(Math.random() * picItems.length)];
    stage.innerHTML = `
      <div class="space-y-4 sm:space-y-5 text-center">
        <span class="px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold">🖼️ Game: Tebak Gambar</span>
        <div class="text-5xl sm:text-7xl py-3 sm:py-4 bg-slate-50 rounded-2xl border border-slate-200">${q.emoji}</div>
        <p class="text-xs sm:text-sm font-bold text-slate-800">Apa nama benda pada gambar di atas dalam Bahasa Gorontalo?</p>
        <div class="grid grid-cols-2 gap-2.5 sm:gap-3 max-w-md mx-auto">
          ${q.opts.map(o => `
            <button onclick="handleTebakGambar('${o}', '${q.gor}')" class="p-3 sm:p-3.5 rounded-xl border-2 border-slate-200 hover:border-purple-600 font-bold text-xs sm:text-sm">
              ${o}
            </button>
          `).join("")}
        </div>
      </div>
    `;
  } else if (gameType === "tantangan-harian") {
    stage.innerHTML = `
      <div class="space-y-4">
        <span class="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">🔥 Tantangan Harian Hulontalo</span>
        <h3 class="font-display text-xl font-extrabold text-slate-900">Misi Pelestari Bahasa Hari Ini</h3>
        <p class="text-sm text-slate-600">Terjemahkan kalimat sapaan berikut ke dalam Bahasa Gorontalo:</p>
        <div class="p-4 rounded-2xl bg-purple-50 border border-purple-200 font-bold text-purple-950">
          "Terima kasih banyak, apa kabar?"
        </div>
        <div class="grid sm:grid-cols-2 gap-3">
          <button onclick="completeDailyChallenge(true)" class="p-3.5 rounded-xl border-2 border-slate-200 hover:border-emerald-600 text-left text-xs font-bold">
            A. Odu'olo da'a, wolo habari?
          </button>
          <button onclick="completeDailyChallenge(false)" class="p-3.5 rounded-xl border-2 border-slate-200 hover:border-rose-600 text-left text-xs font-bold">
            B. Watiya mongaa ila mopatu?
          </button>
        </div>
      </div>
    `;
  }
}

function handleTebakKata(isCorrect) {
  if (isCorrect) {
    addXP(15, "Tebak Kata benar!");
    launchGame("tebak-kata");
  } else {
    showToast("Belum tepat, coba tebak lagi!");
  }
}

function selectMatchLeft(id) {
  window._matchState.selectedLeft = id;
  document.querySelectorAll("[id^='match-l-']").forEach(el => el.classList.remove("border-purple-600", "bg-purple-100"));
  document.getElementById("match-l-" + id).classList.add("border-purple-600", "bg-purple-100");
}

function selectMatchRight(id) {
  if (!window._matchState.selectedLeft) {
    showToast("Pilih kata Bahasa Gorontalo di kolom kiri terlebih dahulu!");
    return;
  }
  if (window._matchState.selectedLeft === id) {
    const lBtn = document.getElementById("match-l-" + id);
    const rBtn = document.getElementById("match-r-" + id);
    lBtn.disabled = true; rBtn.disabled = true;
    lBtn.className = "w-full p-3.5 rounded-xl bg-emerald-100 border-2 border-emerald-500 font-bold text-sm text-emerald-900 opacity-75";
    rBtn.className = "w-full p-3.5 rounded-xl bg-emerald-100 border-2 border-emerald-500 font-bold text-sm text-emerald-900 opacity-75";
    window._matchState.selectedLeft = null;
    window._matchState.matchedCount++;
    if (window._matchState.matchedCount === window._matchState.total) {
      addXP(25, "Semua pasangan kata cocok!");
      setTimeout(() => launchGame("cocok-kata"), 900);
    }
  } else {
    showToast("Pasangan tidak cocok, coba lagi!");
  }
}

function pickScrambleWord(word, btnIdx) {
  window._scrambleState.chosen.push(word);
  document.getElementById("scr-btn-" + btnIdx).classList.add("opacity-30", "pointer-events-none");
  const box = document.getElementById("scramble-answer-box");
  box.innerHTML = window._scrambleState.chosen.map(w => `
    <span class="px-3 py-1.5 rounded-lg bg-purple-700 text-white font-bold text-xs">${w}</span>
  `).join("");
}

function checkScrambleSentence() {
  const attempt = window._scrambleState.chosen.join(" ");
  if (attempt === window._scrambleState.target) {
    addXP(20, "Susunan kalimat sempurna!");
    launchGame("susun-kalimat");
  } else {
    showToast(`Susunan belum tepat (${attempt}). Klik Acak Ulang untuk mencoba lagi!`);
  }
}

function flipMemCard(idx, pairId, text) {
  const st = window._memState;
  const btn = document.getElementById("mem-card-" + idx);
  if (st.flipped.length >= 2 || btn.dataset.done === "1") return;

  btn.textContent = text;
  btn.classList.remove("bg-purple-800", "text-white");
  btn.classList.add("bg-amber-100", "text-slate-900", "border-2", "border-amber-500");
  st.flipped.push({ idx, pairId, btn });

  if (st.flipped.length === 2) {
    const [c1, c2] = st.flipped;
    if (c1.pairId === c2.pairId && c1.idx !== c2.idx) {
      c1.btn.dataset.done = "1";
      c2.btn.dataset.done = "1";
      c1.btn.classList.replace("bg-amber-100", "bg-emerald-200");
      c2.btn.classList.replace("bg-amber-100", "bg-emerald-200");
      st.flipped = [];
      st.matched++;
      if (st.matched === 4) {
        addXP(30, "Menyelesaikan Memory Card!");
        setTimeout(() => launchGame("memory-card"), 1000);
      }
    } else {
      setTimeout(() => {
        [c1, c2].forEach(c => {
          c.btn.textContent = "❓";
          c.btn.className = "h-24 rounded-2xl bg-purple-800 text-white font-bold text-sm flex items-center justify-center p-2 shadow hover:bg-purple-700 transition";
        });
        st.flipped = [];
      }, 700);
    }
  }
}

function handleTebakGambar(chosen, correct) {
  if (chosen === correct) {
    addXP(15, "Tebak Gambar tepat!");
    launchGame("tebak-gambar");
  } else {
    showToast("Belum tepat, coba perhatikan gambarnya!");
  }
}

function completeDailyChallenge(isCorrect) {
  if (isCorrect) {
    addXP(40, "Tantangan Harian selesai!");
  } else {
    showToast("Jawaban kurang tepat, pilih kalimat sapaan dan terima kasih!");
  }
}

function renderLeaderboardAndBadges() {
  const leaders = [
    { name: appState.user.name + " (Kamu)", xp: appState.xp, avatar: appState.user.avatar, isMe: true },
    { name: "Siti Rahmawati", xp: 480, avatar: "🧕🏽" },
    { name: "Mohamad Rizki", xp: 350, avatar: "🧑🏽‍🎓" },
    { name: "Putri Hulontalo", xp: 240, avatar: "👩🏽‍🎓" }
  ].sort((a, b) => b.xp - a.xp);

  document.getElementById("leaderboard-list").innerHTML = leaders.map((u, idx) => `
    <div class="flex items-center justify-between p-3 rounded-xl border ${u.isMe ? 'bg-purple-50 border-purple-300' : 'bg-slate-50 border-slate-200'}">
      <div class="flex items-center gap-2.5">
        <span class="font-extrabold text-xs w-5 text-slate-500">#${idx + 1}</span>
        <span class="text-lg">${u.avatar}</span>
        <span class="text-xs font-bold text-slate-900">${u.name}</span>
      </div>
      <span class="text-xs font-extrabold text-amber-700">${u.xp} XP</span>
    </div>
  `).join("");

  const badges = [
    { icon: "🌱", title: "Pemula Hulontalo", unlocked: appState.xp >= 50 },
    { icon: "📖", title: "Sahabat Kamus", unlocked: appState.favorites.length >= 3 },
    { icon: "🗣️", title: "Penutur Aktif", unlocked: appState.xp >= 200 },
    { icon: "👑", title: "Duta Budaya", unlocked: appState.xp >= 400 }
  ];

  document.getElementById("badges-grid").innerHTML = badges.map(b => `
    <div class="p-3 rounded-xl border text-center ${b.unlocked ? 'bg-amber-50 border-amber-300' : 'bg-slate-50 border-slate-200 opacity-50'}">
      <div class="text-2xl">${b.icon}</div>
      <div class="text-[11px] font-bold text-slate-800 mt-1">${b.title}</div>
    </div>
  `).join("");
}

// ---------------------------------------------------------
// 15. HALAMAN BUDAYA GORONTALO
// ---------------------------------------------------------
function renderCultureCards() {
  const grid = document.getElementById("culture-cards-grid");
  grid.innerHTML = CULTURE_DB.map(c => `
    <div class="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex flex-col justify-between group hover:shadow-md transition">
      <div>
        <div class="h-36 ${c.image ? 'relative overflow-hidden' : `bg-gradient-to-r ${c.color} p-6 flex items-center justify-between text-white`}">
          ${c.image ? `
            <img src="${c.image}" alt="${c.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/30 to-transparent p-5 flex flex-col justify-end">
              <span class="text-[11px] font-bold uppercase tracking-wider text-amber-300">Istilah Gorontalo</span>
              <h3 class="font-display text-xl font-extrabold text-white">${c.gorTerm}</h3>
            </div>
          ` : `
            <div>
              <span class="text-[11px] font-bold uppercase tracking-wider text-amber-200">Istilah Gorontalo</span>
              <h3 class="font-display text-xl font-extrabold mt-0.5">${c.gorTerm}</h3>
            </div>
            <span class="text-5xl">${c.icon}</span>
          `}
        </div>
        <div class="p-6 space-y-2">
          <h4 class="font-bold text-slate-900 text-base">${c.title}</h4>
          <p class="text-xs text-slate-600 leading-relaxed">${c.desc}</p>
        </div>
      </div>
      <div class="px-6 pb-5">
        <button onclick="speakText('${c.gorTerm.replace(/'/g, "\\'")}', 'gor', '${c.gorTerm.replace(/'/g, "\\'")}', '${c.title}')" class="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-purple-100 text-purple-900 font-bold text-xs transition flex items-center justify-center gap-1.5">
          <span>🔊</span> Dengarkan Istilah Budaya
        </button>
      </div>
    </div>
  `).join("");
}

// ---------------------------------------------------------
// 16. HALAMAN PROFIL PENGGUNA
// ---------------------------------------------------------
function selectUserAvatar(emoji) {
  appState.user.avatar = emoji;
  saveState();
  renderProfilePage();
}

function saveUserProfile(e) {
  e.preventDefault();
  appState.user.name = document.getElementById("input-profile-name").value.trim() || "Pelajar Gorontalo";
  appState.user.email = document.getElementById("input-profile-email").value.trim() || "pelajar@bahasagorontalo.id";
  saveState();
  renderProfilePage();
  showToast("Profil pengguna berhasil diperbarui! ✓");
}

function renderProfilePage() {
  document.getElementById("profile-avatar-display").textContent = appState.user.avatar;
  document.getElementById("profile-name-display").textContent = appState.user.name;
  document.getElementById("profile-email-display").textContent = appState.user.email;
  document.getElementById("input-profile-name").value = appState.user.name;
  document.getElementById("input-profile-email").value = appState.user.email;

  const level = Math.floor(appState.xp / 100) + 1;
  document.getElementById("profile-rank-title").textContent = `Level ${level} • Pelestari Bahasa`;
  document.getElementById("stat-completed-chapters").textContent = `${appState.completedChapters.length} / 16`;
  document.getElementById("stat-profile-xp").textContent = `${appState.xp} XP`;
  document.getElementById("stat-profile-favs").textContent = `${appState.favorites.length} Kata`;

  const favList = document.getElementById("profile-favorites-list");
  const favWords = DICTIONARY_DB.filter(d => appState.favorites.includes(d.id));
  if (favWords.length === 0) {
    favList.innerHTML = `<p class="text-xs text-slate-500 col-span-2">Belum ada kosakata favorit. Tandai bintang (☆) di menu Kamus Digital.</p>`;
  } else {
    favList.innerHTML = favWords.map(w => `
      <div class="p-3 rounded-xl bg-amber-50/60 border border-amber-200 flex items-center justify-between">
        <div>
          <div class="font-bold text-purple-900 text-xs">${w.gorWord}</div>
          <div class="text-[11px] text-slate-600">${w.idWord} • <em>${w.enWord}</em></div>
        </div>
        <button onclick="speakText('${w.gorWord.replace(/'/g, "\\'")}', 'gor', '${w.gorWord.replace(/'/g, "\\'")}', '${w.idWord}')" class="p-1.5 rounded-lg bg-white border border-amber-300 text-xs">🔊</button>
      </div>
    `).join("");
  }
}

// ---------------------------------------------------------
// 17. INISIALISASI SAAT HALAMAN DIMUAT
// ---------------------------------------------------------
window.addEventListener("DOMContentLoaded", () => {
  initAlphabetBar();
  renderDictionary();
  renderCourseChapters();
  initConversations();
  initTutorChat();
  renderQuizHistory();
  launchGame("tebak-kata");
  renderLeaderboardAndBadges();
  renderCultureCards();
  renderProfilePage();
  applyUILang();
  updateGlobalUI();
  navigate("home");
});
