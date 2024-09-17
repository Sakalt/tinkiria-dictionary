const dictionaryData = [
    {"japanese": "私", "tisian": "sas", "definition": "話者自身を指す言葉", "examples": ["sas の学生です。"], "type": "pronoun"},
    {"japanese": "で", "tisian": "ki", "definition": "名詞の状況を説明する助詞", "examples": ["kint ki rebetes"], "type": "noun"},
    {"japanese": "は", "tisian": "sa", "definition": "主語を強調する助詞", "examples": ["これはペンです。"], "type": "particle"},
    {"japanese": "リンゴ", "tisian": "saklon", "definition": "果物の一種", "examples": ["saklon を食べます。"], "type": "noun"},
    {"japanese": "を", "tisian": "za", "definition": "目的語を示す助詞", "examples": ["本を読みます。"], "type": "particle"},
    {"japanese": "食べる", "tisian": "zak", "definition": "食物を摂取する行為", "examples": ["朝ご飯を zak。"], "type": "verb"},
    {"japanese": "過去形", "tisian": "zal", "definition": "動作や出来事が過去に行われたことを示す", "examples": ["昨日、映画を見た。"], "type": "grammar"},
    {"japanese": "現在形", "tisian": "zafta", "definition": "動作や出来事が現在行われていることを示す", "examples": ["今、本を読んでいます。"], "type": "grammar"},
    {"japanese": "命令形", "tisian": "yaf", "definition": "命令や指示を示す形", "examples": ["ドアを開けてください。"], "type": "grammar"},
    {"japanese": "月", "tisian": "yan", "definition": "1か月の期間または天体の月", "examples": ["月が綺麗です。"], "type": "noun"},
    {"japanese": "日", "tisian": "yag", "definition": "1日の期間または太陽", "examples": ["今日は晴れです。"], "type": "noun"},
    {"japanese": "火", "tisian": "yatok", "definition": "燃焼現象", "examples": ["火を使って料理する。"], "type": "noun"},
    {"japanese": "水", "tisian": "kafte", "definition": "無色透明の液体", "examples": ["水を飲む。"], "type": "noun"},
    {"japanese": "草", "tisian": "xesta", "definition": "地面に生える緑の植物", "examples": ["草を刈る。"], "type": "noun"},
    {"japanese": "木", "tisian": "xenta", "definition": "幹があり枝葉を持つ植物", "examples": ["庭に木がある。"], "type": "noun"},
    {"japanese": "金", "tisian": "xigda", "definition": "貴金属の一種", "examples": ["金の指輪。"], "type": "noun"},
    {"japanese": "土", "tisian": "taf", "definition": "地面を構成する物質", "examples": ["土を掘る。"], "type": "noun"},
    {"japanese": "串", "tisian": "tend", "definition": "食物を刺すための細長い棒", "examples": ["焼き鳥の串。"], "type": "noun"},
    {"japanese": "山", "tisian": "gafn", "definition": "地表が高く盛り上がった場所", "examples": ["山に登る。"], "type": "noun"},
    {"japanese": "牛", "tisian": "asta", "definition": "家畜の一種", "examples": ["牛が草を食べる。"], "type": "noun"},
    {"japanese": "猫", "tisian": "jain", "definition": "小型の家畜の一種", "examples": ["猫が寝ている。"], "type": "noun"},
    {"japanese": "犬", "tisian": "lomt", "definition": "家畜の一種", "examples": ["犬が吠える。"], "type": "noun"},
    {"japanese": "狸", "tisian": "vel", "definition": "野生動物の一種", "examples": ["狸が森にいる。"], "type": "noun"},
　　 {"japanese": "熊", "tisian": "heau", "definition": "危険な動物", "examples": ["熊が襲ってきた。"], "type": "noun"},
    {"japanese": "蜘蛛", "tisian": "dovekett", "definition": "8っ本足の虫", "examples": ["dovekett sa cuom za 退治してくれる"], "type": "noun"},
    {"japanese": "甘い", "tisian": "adenpa", "definition": "糖分が多く入っていること。", "examples": ["saklon sa adenpa"], "type": "adjective"},
    {"japanese": "コバルト", "tisian": "cobelen", "definition": "青い鉱石。", "examples": ["cobelen blave"], "type": "noun"},
    {"japanese": "キリン", "tisian": "kule", "definition": "大型の動物", "examples": ["kule が kafteを飲む。"], "type": "noun"},
    {"japanese": "辛い", "tisian": "petul", "definition": "味に刺激があること。", "examples": ["辛いカレー"], "type": "adjective"},
    {"japanese": "国", "tisian": "kint", "definition": "領土。", "examples": ["tisia kint"], "type": "noun"},
    {"japanese": "虫", "tisian": "cuom", "definition": "骨を持たない生物。", "examples": ["dovekett sa cuom za 退治してくれる"], "type": "noun"},
    {"japanese": "王", "tisian": "sazos", "definition": "国で一番権力を持つ人。", "examples": ["sazos sa cuomがkilaai"], "type": "noun"},
    {"japanese": "嫌い", "tisian": "kilaai", "definition": "このみを持たないこと。", "examples": ["cuom sa kilaai"], "type": "adjective"},
    {"japanese": "好き", "tisian": "flis", "definition": "嫌いの逆。", "examples": ["saklon sa flis"], "type": "adjective"},
    {"japanese": "赤", "tisian": "napt", "definition": "警告などにも使われる色。", "examples": ["napt alaat"], "type": "noun"},
    {"japanese": "青", "tisian": "pelek", "definition": "食欲をなくす色。", "examples": ["pelek saklon"], "type": "noun"},
    {"japanese": "緑", "tisian": "grattis", "definition": "草などの色。", "examples": ["grattis xesta"], "type": "noun"},
    {"japanese": "白", "tisian": "mechen", "definition": "漂白剤などの色。", "examples": ["mechen cuom"], "type": "noun"},
    {"japanese": "黒", "tisian": "kettis", "definition": "チシアでは悪を象徴する。", "examples": ["kettis dovekety"], "type": "noun"},
    {"japanese": "黄", "tisian": "codom", "definition": "光の色。", "examples": ["codom vatren"], "type": "noun"},
    {"japanese": "筆", "tisian": "fudu", "definition": "書くための物", "examples": ["fudu za beit"], "type": "noun"},
    {"japanese": "買う", "tisian": "beit", "definition": "お金をはらってものをてにいれること。", "examples": ["fudu za beit"], "type": "verb"},
    {"japanese": "売る", "tisian": "ribeit", "definition": "買うの逆", "examples": ["saklon za ribeit"], "type": "verb"},
    {"japanese": "花", "tisian": "vatren", "definition": "?", "examples": ["vatren grattis"], "type": "noun"},
    {"japanese": "シアン", "tisian": "chane", "definition": "00/255/255", "examples": ["chane kafte"], "type": "noun"},
    {"japanese": "マゼンタ", "tisian": "madyenta", "definition": "マゼンタ", "examples": ["madyenta vatren"], "type": "noun"},
    {"japanese": "黄緑", "tisian": "gratdom", "definition": "黄色と緑色の中間", "examples": ["gratdom xesta"], "type": "noun"},
    {"japanese": "缶", "tisian": "moga", "definition": "容器。", "examples": ["mogasin"], "type": "noun"},
    {"japanese": "トレー", "tisian": "mogadolqum", "definition": "レストランにある食べ物をのせるやつ。", "examples": ["mogadolqum の ador に　余りがあった。"], "type": "noun"},
    {"japanese": "食べ物", "tisian": "sin", "definition": "栄養や味を摂取する物", "examples": ["mogasin"], "type": "noun"},
    {"japanese": "使い", "tisian": "ita", "definition": "madicitaのようにかく", "examples": ["madicita"], "type": "suffix"},
    {"japanese": "魔法", "tisian": "madic", "definition": "非現実的な技", "examples": ["madicita"], "type": "noun"},
    {"japanese": "鬼", "tisian": "imaskyr", "definition": "?", "examples": ["tofone sa imaskyr za osur"], "type": "noun"},
    {"japanese": "子供", "tisian": "tofone", "definition": "技術的に未熟な人", "examples": ["tofone sa imaskyr za osur"], "type": "noun"},
　　 {"japanese": "恐れる", "tisian": "klet", "definition": "怖がること。", "examples": ["tofone sa imaskyr za osur"], "type": "verb"},
    {"japanese": "水素", "tisian": "kafteqink", "definition": "元素番号1", "examples": ["kafteqink"], "type": "noun"}
];
