/**
 * Mock data for the Life in the UK test.
 * Keys are exam IDs (as strings or numbers).
 * Values are arrays of question objects.
 */
export const examQuestions = {
  1: [
    {
      id: 101,
      question: "Where is Big Ben located?",
      question_zh: "大本鐘 (Big Ben) 位於哪裡？",
      options: [
        "Buckingham Palace",
        "The Tower of London",
        "Trafalgar Square",
        "The Houses of Parliament"
      ],
      correctAnswers: [3],
      explanation: "Big Ben is the nickname for the Great Bell of the striking clock at the north end of the Palace of Westminster, commonly known as the Houses of Parliament.",
      explanation_zh: "大本鐘是威斯敏斯特宮（俗稱國會大廈）北端報時鐘的大鐘的暱稱。",
      category: "Geography",
      isMultipleChoice: false
    },
    {
      id: 102,
      question: "Who is the patron saint of Scotland?",
      question_zh: "蘇格蘭的守護聖人是誰？",
      options: ["St George", "St Andrew", "St Patrick", "St David"],
      correctAnswers: [1],
      explanation: "St Andrew is the patron saint of Scotland. St George is for England, St David for Wales, and St Patrick for Northern Ireland.",
      explanation_zh: "聖安德魯是蘇格蘭的守護聖人。聖喬治是英格蘭的，聖大衛是威爾斯的，聖派翠克是北愛爾蘭的。",
      category: "Culture",
      isMultipleChoice: false
    },
    {
      id: 103,
      question: "When is Remembrance Day commemorated?",
      question_zh: "陣亡將士紀念日（Remembrance Day）是哪一天？",
      options: ["11th November", "11th October", "5th November", "1st January"],
      correctAnswers: [0],
      explanation: "Remembrance Day is celebrated on 11th November each year to commemorate those who died in wars.",
      explanation_zh: "陣亡將士紀念日於每年11月11日舉行，以紀念在戰爭中犧牲的人們。",
      category: "History",
      isMultipleChoice: false
    },
    {
      id: 104,
      question: "Which of these is a famous garden in London?",
      question_zh: "以下哪一個是倫敦著名的花園？",
      options: ["Kew Gardens", "Snowdonia", "The Lake District", "Loch Lomond"],
      correctAnswers: [0],
      explanation: "Kew Gardens is a world-famous botanical garden in southwest London.",
      explanation_zh: "邱園（Kew Gardens）是位於倫敦西南部的世界著名植物園。",
      category: "Geography",
      isMultipleChoice: false
    },
    {
      id: 105,
      question: "Which king won the Battle of Agincourt in 1415?",
      question_zh: "哪位國王在 1415 年贏得了阿金庫爾戰役？",
      options: ["Henry V", "Edward III", "Richard III", "Henry VIII"],
      correctAnswers: [0],
      explanation: "Henry V won the Battle of Agincourt against the French in 1415.",
      explanation_zh: "亨利五世在1415年的阿金庫爾戰役中擊敗了法國。",
      category: "History",
      isMultipleChoice: false
    },
    {
      id: 106,
      question: "What is the capital city of Northern Ireland?",
      question_zh: "北愛爾蘭的首都是哪座城市？",
      options: ["Belfast", "Londonderry", "Armagh", "Newry"],
      correctAnswers: [0],
      explanation: "Belfast is the capital city of Northern Ireland.",
      explanation_zh: "貝爾法斯特是北愛爾蘭的首都。",
      category: "Geography",
      isMultipleChoice: false
    },
    {
      id: 107,
      question: "How often are general elections held in the UK?",
      question_zh: "英國一般多久舉行一次國會大選？",
      options: ["Every 5 years", "Every 4 years", "Every 3 years", "Every 6 years"],
      correctAnswers: [0],
      explanation: "General elections are held at least every five years, as set by the Fixed-term Parliaments Act.",
      explanation_zh: "根據《固定任期議會法》，英國至少每五年舉行一次大選。",
      category: "Government",
      isMultipleChoice: false
    },
    {
      id: 108,
      question: "Which landmark is located in Wiltshire, England?",
      question_zh: "哪個地標位於英格蘭威爾特郡（Wiltshire）？",
      options: ["Stonehenge", "Hadrian's Wall", "The Giant's Causeway", "Loch Ness"],
      correctAnswers: [0],
      explanation: "Stonehenge is a prehistoric monument located in Wiltshire, England.",
      explanation_zh: "巨石陣是位於英格蘭威爾特郡的史前遺跡。",
      category: "Geography",
      isMultipleChoice: false
    },
    {
      id: 109,
      question: "Who was the first woman Prime Minister of the UK?",
      question_zh: "英國第一位女首相是誰？",
      options: ["Margaret Thatcher", "Theresa May", "Angela Merkel", "Nicola Sturgeon"],
      correctAnswers: [0],
      explanation: "Margaret Thatcher was the first female Prime Minister of the UK, serving from 1979 to 1990.",
      explanation_zh: "瑪格麗特·撒切尔是第一位女首相，她在1979年至1990年擔任首相。",
      category: "Government",
      isMultipleChoice: false
    },
    {
      id: 110,
      question: "Which of these is a UK territory?",
      question_zh: "以下哪一個是英國的領土？",
      options: ["Gibraltar", "Malta", "Cyprus", "Iceland"],
      correctAnswers: [0],
      explanation: "Gibraltar is a British Overseas Territory located at the southern tip of the Iberian Peninsula.",
      explanation_zh: "直布罗陀是英國海外領土，位於伊比利亞半島南部。",
      category: "Geography",
      isMultipleChoice: false
    },
    {
      id: 111,
      question: "What is the name of the official home of the Prime Minister?",
      question_zh: "首相的官方住所名稱是什麼？",
      options: ["10 Downing Street", "Buckingham Palace", "The White House", "Windsor Castle"],
      correctAnswers: [0],
      explanation: "10 Downing Street in London is the official residence and office of the Prime Minister.",
      explanation_zh: "倫敦的10號唐寧街是首相的官方住所和辦公地。",
      category: "Geography",
      isMultipleChoice: false
    },
    {
      id: 112,
      question: "Which flower is the symbol of England?",
      question_zh: "以下哪一種花是英格蘭的象徵？",
      options: ["The Rose", "The Thistle", "The Daffodil", "The Shamrock"],
      correctAnswers: [0],
      explanation: "The Tudor Rose is the national emblem of England.",
      explanation_zh: " Tudor Rose 是英格蘭的國徽。",
      category: "Culture",
      isMultipleChoice: false
    },
    {
      id: 113,
      question: "When did the UK join the European Economic Community (EEC)?",
      question_zh: "英國於哪一年加入歐洲經濟共同體（EEC）？",
      options: ["1973", "1963", "1983", "1953"],
      correctAnswers: [0],
      explanation: "The UK joined the EEC (the precursor to the EU) in 1973.",
      explanation_zh: "英國於1973年加入歐洲經濟共同體（EEC）（前稱歐洲聯盟）。",
      category: "History",
      isMultipleChoice: false
    },
    {
      id: 114,
      question: "What is the maximum amount you can claim in a small claims court in England and Wales?",
      question_zh: "在英格蘭及威爾斯，小額索償法庭可申索的最高金額是多少？",
      options: ["£10,000", "£5,000", "£15,000", "£20,000"],
      correctAnswers: [0],
      explanation: "In England and Wales, the small claims limit is generally £10,000.",
      explanation_zh: "在英格蘭及威爾斯，小額索償法庭可申索的最高金額是 £10,000。",
      category: "Law",
      isMultipleChoice: false
    },
    {
      id: 115,
      question: "Which of these is a famous British writer?",
      question_zh: "以下哪一位是著名的英國作家？",
      options: ["Charles Dickens", "Albert Einstein", "Isaac Newton", "Alexander Fleming"],
      correctAnswers: [0],
      explanation: "Charles Dickens was a famous English writer and social critic.",
      explanation_zh: "查爾斯·狄更斯是著名的英國作家和社会評論家。",
      category: "Culture",
      isMultipleChoice: false
    },
    {
      id: 116,
      question: "What is 'The Cenotaph'?",
      question_zh: "「The Cenotaph」是指什麼？",
      options: ["A war memorial", "A museum", "A royal palace", "A theatre"],
      correctAnswers: [0],
      explanation: "The Cenotaph is a war memorial on Whitehall in London.",
      explanation_zh: "The Cenotaph 是倫敦白Hall的一個戰爭紀念碑。",
      category: "Culture",
      isMultipleChoice: false
    },
    {
      id: 117,
      question: "How many members does the Scottish Parliament have?",
      question_zh: "蘇格蘭議會（Scottish Parliament）有多少名議員？",
      options: ["129", "650", "60", "90"],
      correctAnswers: [0],
      explanation: "The Scottish Parliament consists of 129 Members (MSPs).",
      explanation_zh: "蘇格蘭議會（Scottish Parliament）由129名議員組成（MSPs）。",
      category: "Government",
      isMultipleChoice: false
    },
    {
      id: 118,
      question: "Which of these sports originated in the UK?",
      question_zh: "以下哪一項運動起源於英國？",
      options: ["Cricket", "Basketball", "Baseball", "Volleyball"],
      correctAnswers: [0],
      explanation: "Cricket is a bat-and-ball game that originated in south-east England.",
      explanation_zh: "Cricket 是起源于南英格兰的一种板球游戏。",
      category: "Culture",
      isMultipleChoice: false
    },
    {
      id: 119,
      question: "Who is the head of the Church of England?",
      question_zh: "英格蘭教會（Church of England）的領袖是誰？",
      options: ["The Monarch", "The Archbishop of Canterbury", "The Pope", "The Prime Minister"],
      correctAnswers: [0],
      explanation: "The Monarch (currently King Charles III) is the Supreme Governor of the Church of England.",
      explanation_zh: "The Monarch (目前為查爾斯三世)是英格蘭教會的最高首領。",
      category: "Culture",
      isMultipleChoice: false
    },
    {
      id: 120,
      question: "Which festival is celebrated on 31st October?",
      question_zh: "哪個節日是在10月31日慶祝？",
      options: ["Halloween", "Easter", "Christmas", "Guy Fawkes Night"],
      correctAnswers: [0],
      explanation: "Halloween is celebrated on 31st October.",
      explanation_zh: "Halloween 是在10月31日慶祝的節日。",
      category: "Culture",
      isMultipleChoice: false
    },
    {
      id: 121,
      question: "What is the minimum age to buy alcohol in the UK?",
      question_zh: "在英國購買酒精的最低法定年齡是多少？",
      options: ["18", "16", "21", "25"],
      correctAnswers: [0],
      explanation: "The minimum legal age to buy alcohol in the UK is 18.",
      explanation_zh: "在英國購買酒精的最低法定年齡是18歲。",
      category: "Law",
      isMultipleChoice: false
    },
    {
      id: 122,
      question: "Which of these is a primary school stage?",
      question_zh: "以下哪一個是小學教育階段？",
      options: ["Key Stage 1", "Key Stage 3", "GCSE", "A-Levels"],
      correctAnswers: [0],
      explanation: "Key Stage 1 and 2 are primary school stages in England.",
      explanation_zh: "Key Stage 1和2是英格蘭的小學教育階段。",
      category: "Education",
      isMultipleChoice: false
    },
    {
      id: 123,
      question: "What is the Koh-i-Noor?",
      question_zh: "什麼是 Koh-i-Noor？",
      options: ["A diamond", "A mountain", "A river", "A city"],
      correctAnswers: [0],
      explanation: "The Koh-i-Noor is one of the largest cut diamonds in the world, part of the Crown Jewels.",
      explanation_zh: "Koh-i-Noor 是世界上最大的切割鑽石之一，是皇冠寶石的一部分。",
      category: "Culture",
      isMultipleChoice: false
    },
    {
      id: 124,
      question: "Who was the Prime Minister during the Second World War?",
      question_zh: "第二次世界大戰期間的英國首相是誰？",
      options: ["Winston Churchill", "Clement Attlee", "Neville Chamberlain", "Anthony Eden"],
      correctAnswers: [0],
      explanation: "Winston Churchill was the UK Prime Minister during most of the Second World War.",
      explanation_zh: "Winston Churchill是第二次世界大戰期間的英國首相。",
      category: "Government",
      isMultipleChoice: false
    }
  ],
  2: [
    {
      id: 201,
      question: "What is the Home Secretary responsible for?",
      question_zh: "內政大臣負責什麼？",
      options: ["Health", "Defence", "Education", "Policing and immigration"],
      correctAnswers: [3],
      explanation: "The Home Secretary is responsible for policing and immigration.",
      explanation_zh: "內政大臣負責警務和移民事務。",
      category: "Government",
      isMultipleChoice: false
    },
    {
      id: 202,
      question: "St Helena is a British overseas territory and it is part of the United Kingdom.",
      question_zh: "聖赫勒拿是英國的海外領土，也是聯合王國的一部分。",
      options: ["True", "False"],
      correctAnswers: [1],
      explanation: "St Helena is a British overseas territory, but it is not part of the United Kingdom.",
      explanation_zh: "聖赫勒拿是英國的海外領土，但它不是聯合王國的一部分。",
      category: "Government",
      isMultipleChoice: false
    },
    {
      id: 203,
      question: "Several Church of England bishops sit in the House of Lords.",
      question_zh: "數名英格蘭教會的主教在貴族院中任職。",
      options: ["True", "False"],
      correctAnswers: [0],
      explanation: "There are 26 bishops of the Church of England who sit in the House of Lords.",
      explanation_zh: "有26名英格蘭教會的主教在貴族院中任職。",
      category: "Government",
      isMultipleChoice: false
    },
    {
      id: 204,
      question: "When walking your dog in a public place, you must ensure:",
      question_zh: "帶狗在公共場所散步時，必須確保：",
      options: ["That your dog does not bark", "That your dog wears a high visibility jacket", "That your dog wears a collar showing the name and address of the owner", "That your dog wears a high visibility jacket"],
      correctAnswers: [2],
      explanation: "You must ensure your dog is microchipped and wearing a collar with your name and address on it, is on a lead if required by local byelaws, and you clean up after it if it defecates in a public place.",
      explanation_zh: "您必須確保您的狗已植入微晶片並佩戴帶有您的姓名和地址的項圈，如果當地法規要求，必須戴上牽繩，並且在狗在公共場所排便時清理乾淨。",
      category: "Government",
      isMultipleChoice: false
    },
    {
      id: 205,
      question: "Women over the age of 30 were given the right to vote as a result of their contribution towards the war effort. Which war was that?",
      question_zh: "30歲以上的女性因其對戰爭努力的貢獻而獲得投票權。那是哪場戰爭？",
      options: ["World War I", "World War II", "The Boer War", "The Crimean War"],
      correctAnswers: [0],
      explanation: "Women over the age of 30 were given the right to vote as a result of their contribution towards the war effort during World War I.",
      explanation_zh: "30歲以上的女性因其對第一次世界大戰的貢獻而獲得投票權。",
      category: "History",
      isMultipleChoice: false
    },
    {
      id: 206,
      question: "When did Ireland become a republic?",
      question_zh: "愛爾蘭何時成為共和國？",
      options: ["1916", "1922", "1937", "1949"],
      correctAnswers: [3],
      explanation: "Ireland became a republic in 1949.",
      explanation_zh: "愛爾蘭於1949年成為共和國。",
      category: "Culture",
      isMultipleChoice: false
    },
    {
      id: 207,
      question: "Where did the first farmers come from?",
      question_zh: "第一批農民來自哪裡？",
      options: ["South-west Europe", "South-east Europe", "North-east Europe", "North-west Europe"],
      correctAnswers: [1],
      explanation: "The first farmers came from South-east Europe.",
      explanation_zh: "第一批農民來自東南歐。",
      category: "Culture",
      isMultipleChoice: false
    },
    {
      id: 208,
      question: "Who was an important contributor to the ‘pop art’ movement of the 1960’s?",
      question_zh: "誰是20世紀60年代‘波普藝術’運動的重要貢獻者？",
      options: ["David Hockney", "William Hogarth", "J.M.W. Turner", "John Constable"],
      correctAnswers: [0],
      explanation: "David Hockney was an important contributor to the ‘pop art’ movement of the 1960’s.",
      explanation_zh: "David Hockney 是20世紀60年代‘波普藝術’運動的重要貢獻者。",
      category: "Culture",
      isMultipleChoice: false
    },
    {
      id: 209,
      question: "Who became Prime Minister and was an inspirational leader to the British people during WWII?",
      question_zh: "誰在二戰期間成為首相並鼓舞了英國人民？",
      options: ["Clement Attlee", "Winston Churchill", "Neville Chamberlain", "Anthony Eden"],
      correctAnswers: [1],
      explanation: "Winston Churchill was the UK Prime Minister during most of the Second World War.",
      explanation_zh: "Winston Churchill是第二次世界大戰期間的英國首相。",
      category: "History",
      isMultipleChoice: false
    },
    {
      id: 210,
      question: "Who led the first invasion of Britain?",
      question_zh: "誰領導了第一次入侵英國？",
      options: ["William, the Duke of Normandy", "Julius Caesar", "William the Conqueror", "Henry VIII"],
      correctAnswers: [1],
      explanation: "Julius Caesar led a Roman invasion of Britain in 55 BC. This was unsuccessful and for nearly 100 years Britain remained separate from the Roman Empire. In AD 43 the Emperor Claudius led the Roman army in a new invasion. This time, there was resistance from some of the British tribes but the Romans were successful in occupying almost all of Britain.",
      explanation_zh: "Julius Caesar是第一次入侵英國的領導者。這次入侵不成功，近100年來，英國一直與羅馬帝國分離。公元43年，皇帝克勞狄烏斯領導羅馬軍隊發動了新的入侵。這一次，儘管遭到一些英國部落的抵抗，但羅馬人成功佔領了幾乎整個英國。",
      category: "History",
      isMultipleChoice: false
    },
    {
      id: 211,
      question: "Under which king did the Anglo-Saxon kingdoms in England unite to defeat the Vikings?",
      question_zh: "在哪位國王的領導下，英格蘭的盎格魯-撒克遜王國聯合起來擊敗了維京人？",
      options: ["William the Conqueror", "Edward the Confessor", "Robert the Bruce", "Alfred the Great"],
      correctAnswers: [3],
      explanation: "Alfred the Great united the Anglo-Saxon kingdoms in England to defeat the Vikings.",
      explanation_zh: "Alfred the Great是都鐸王朝的第一位君主。",
      category: "Culture",
      isMultipleChoice: false
    },
    { 
      id: 212,
      question: "When was the Magna Carta created?",
      question_zh: "麥格納卡塔是在什麼時候制定的？",
      options: ["1066", "1215", "1485", "1603"],
      correctAnswers: [1],
      explanation: "The Magna Carta was created in 1215.",
      explanation_zh: "麥格納卡塔是在1215年制定的。",
      category: "Culture",
      isMultipleChoice: false
    },
    {
      id: 213,
      question: "Northern Ireland has its own banknotes, which are valid everywhere in the UK.",
      question_zh: "北愛爾蘭有自己的鈔票，在英國各地都有效。",
      options: ["False", "True"],
      correctAnswers: [1],
      explanation: "Northern Ireland has its own banknotes, which are valid everywhere in the UK.",
      explanation_zh: "北愛爾蘭有自己的鈔票，在英國各地都有效。",
      category: "Culture",
      isMultipleChoice: false
    },
    {
      id: 214,
      question: "Which of the following plays was written by William Shakespeare?",
      question_zh: "以下哪部戲劇是由威廉·莎士比亞創作的？",
      options: ["The Importance of Being Earnest", "The School for Scandal", "The Rivals", "A Midsummer Night’s dream"],
      correctAnswers: [3],
      explanation: "A Midsummer Night’s dream was written by William Shakespeare.",
      explanation_zh: "仲夏夜之夢是由威廉·莎士比亞創作的。",
      category: "Culture",
      isMultipleChoice: false
    },
    {
      id: 215,
      question: "How many members does a jury have in England, Wales and Northern Ireland?",
      question_zh: "英格蘭、威爾士和北愛爾蘭的陪審團有多少名成員？",
      options: ["9", "11", "12", "15"],
      correctAnswers: [2],
      explanation: "A jury has 12 members in England, Wales and Northern Ireland.",
      explanation_zh: "英格蘭、威爾士和北愛爾蘭的陪審團有12名成員。",
      category: "Culture",
      isMultipleChoice: false
    },
    {
      id: 216,
      question: "Which two of the following religious communities celebrate Diwali?",
      question_zh: "以下哪兩個宗教社群慶祝排燈節？",
      options: ["Jews", "Sikhs", "Buddhists", "Hindus"],
      correctAnswers: [1, 3],
      explanation: "Sikhs and Hindus celebrate Diwali.",
      explanation_zh: "錫克教徒和印度教徒慶祝排燈節。",
      category: "Culture",
      isMultipleChoice: true
    },
    {
      id: 217,
      question: "What is Good Friday?",
      question_zh: "Good Friday是什麼？",
      options: [ "The day when Jesus Christ rose from the dead","The day when Jesus Christ died", "The day when Jesus Christ was born", "The day when Jesus Christ became 30 years old"],
      correctAnswers: [1],
      explanation: "Good Friday is the day when Jesus Christ died.",
      explanation_zh: "Good Friday是耶穌受难日。",
      category: "Culture",
      isMultipleChoice: false
    },
    {
      id: 218,
      question: "St Patrick’s day is a public holiday in Northern Ireland.",
      question_zh: "聖帕特里克節(St Patrick’s day)是北愛爾蘭的公共假日。",
      options: ["False", "True"],
      correctAnswers: [1],
      explanation: "St Patrick’s day is a public holiday in Northern Ireland.",
      explanation_zh: "聖帕特里克節是北愛爾蘭的公共假日。",
      category: "Culture",
      isMultipleChoice: false
    },
    {
      id: 219,
      question: "Which was the last successful foreign invasion of England that took place in 1066?",
      question_zh: "1066年發生的最後一次成功的對英格蘭的外國入侵是？",
      options: ["The Norman Conquest", "The Viking Invasion", "The Roman Invasion", "The Anglo-Saxon Invasion"],
      correctAnswers: [0],
      explanation: "The Norman Conquest was the last successful foreign invasion of England that took place in 1066.",
      explanation_zh: "諾曼征服(The Norman Conquest)是1066年發生的最後一次成功的對英格蘭的外國入侵。",
      category: "History",
      isMultipleChoice: false
    },
    {
      id: 220,
      question: "Where are the Crown Jewels kept?",
      question_zh: "皇冠珠寶存放在哪裡？",
      options: ["Buckingham Palace", "The Tower of London", "Windsor Castle", "Edinburgh Castle"],
      correctAnswers: [1],
      explanation: "The Crown Jewels are kept in the Tower of London.",
      explanation_zh: "皇冠珠寶存放在倫敦塔。",
      category: "Culture",
      isMultipleChoice: false
    },
    {
      id: 221,
      question: "Which sport can be traced back to the 15th century in Scotland?",
      question_zh: "哪項運動可以追溯到15世紀的蘇格蘭？",
      options: ["Football", "Rugby", "Golf", "Cricket"],
      correctAnswers: [2],
      explanation: "Golf can be traced back to the 15th century in Scotland.",
      explanation_zh: "高爾夫球可以追溯到15世紀的蘇格蘭。",
      category: "Culture",
      isMultipleChoice: false
    },
    {
      id: 222,
      question: "Who was the first person in England to print books using a printing press?",
      question_zh: "誰是英格蘭第一位使用印刷機印刷書籍的人？",
      options: ["William Shakespeare", "William the Conqueror", "William Wallace", "William Caxton"],
      correctAnswers: [3],
      explanation: "William Caxton was the first person in England to print books using a printing press.",
      explanation_zh: "威廉·卡克斯頓(William Caxton)是英格蘭第一位使用印刷機印刷書籍的人。",
      category: "Culture",
      isMultipleChoice: false
    },
    {
      id: 223,
      question: "Which court deals with minor criminal cases in England, Wales and Northern Ireland?",
      question_zh: "在英格蘭、威爾士和北愛爾蘭，哪個法院處理輕微刑事案件？",
      options: ["Crown Court", "Magistrates' Court", "High Court", "Justice of the Peace Court"],
      correctAnswers: [1],
      explanation: "Magistrates' Court deals with minor criminal cases in England, Wales and Northern Ireland.",
      explanation_zh: "治安官法庭(Magistrates' Court)處理英格蘭、威爾士和北愛爾蘭的輕微刑事案件。",
      category: "Culture",
      isMultipleChoice: false
    },
    {
      id: 224,
      question: "What did the Scottish John Logie Baird develop?",
      question_zh: "蘇格蘭的約翰·洛吉·貝爾德(John Logie Baird)發明了什麼？",
      options: ["The telephone", "The steam engine", "The television", "The computer"],
      correctAnswers: [2],
      explanation: "John Logie Baird developed the television.",
      explanation_zh: "約翰·洛吉·貝爾德(John Logie Baird)發明了電視。",
      category: "Culture",
      isMultipleChoice: false
    }
  ],
  3: [
    {
      id: 301,
      question: "Which of the following is a fundamental principle of British life?",
      question_zh: "以下哪一個是英國生活的基本原則？",
      options: ["Communism", "The monarchy", "The welfare state", "Individual liberty"],
      correctAnswers: [3],
      explanation: "Individual liberty is a fundamental principle of British life.",
      explanation_zh: "個人自由是英國生活的基本原則。",
      category: "Culture",
      isMultipleChoice: false
    },
    {
      id: 302,
      question: "Wales has its own established church.",
      question_zh: "威爾士有獨立於英國國教的教會制度",
      options: ["False", "True"],
      correctAnswers: [0],
      explanation: "Wales does not have its own established church.",
      explanation_zh: "威爾士沒有獨立於英國國教的教會制度",
      category: "Culture",
      isMultipleChoice: false
    },
    {
      id: 303,
      question: "How is New Year’s Eve called in Scotland?",
      question_zh: "蘇格蘭新年的前一晚叫什麼？",
      options: ["Hogmanay", "New Year’s Eve", "New Year’s Day", "New Year’s Night"],
      correctAnswers: [0],
      explanation: "Hogmanay is how New Year’s Eve is called in Scotland.",
      explanation_zh: "蘇格蘭新年的前一晚是 Hogmanay。",
      category: "Geography",
      isMultipleChoice: false
    },
    {
      id: 304,
      question: "Why did Henry VIII establish the church of England?",
      question_zh: "亨利八世為什麼要建立英國國教？",
      options: ["Because the Pope didn’t let him marry Catherine Howard", "Because the Pope wanted England to be a Catholic country", "Because the Pope didn’t let him divorce his first wife, Catherine of Aragon", "Because the Pope didn’t let him divorce his wife, Anne of Cleves"],
      correctAnswers: [2],
      explanation: "Because the Pope didn’t let him divorce his first wife, Catherine of Aragon",
      explanation_zh: "亨利八世要建立英國國教是因為他不能離婚",
      category: "History",
      isMultipleChoice: false
    },
    {
      id: 305,
      question: "What is the name of the long war that English kings fought with France in the middle ages?",
      question_zh: "中世紀英王同法國打的長戰叫咩？",
      options: ["The Thirty Years' War", "The Seven Years' War", "The Eight Years' War","The Hundred Years' War"],
      correctAnswers: [3],
      explanation: "The Hundred Years' War is the name of the long war that English kings fought with France in the middle ages.",
      explanation_zh: "中世紀英王同法國打的長戰叫 The Hundred Years' War。",
      category: "History",
      isMultipleChoice: false
    },
    {
      id: 306,
      question: "Who was supported by clansmen from the Scottish highlands and raised and army in 1745?",
      question_zh: "誰在1745年得到蘇格蘭高地部隊的支持並組成軍隊？",
      options: [ "Robert Burns", "Bonnie Prince Charlie", "Oliver Cromwell", "Kenneth MacAlpin"],
      correctAnswers: [1],
      explanation: "In 1745 there was another attempt to put a Stuart king back on the throne in place of George I’s son, George II. Charles Edward Stuart (Bonnie Prince Charlie), the grandson of James II, landed in Scotland. He was supported by clansmen from the Scottish highlands and raised and army.",
      explanation_zh: "1745年，有人試圖擁立一位斯圖亞特王朝的國王重返王位，取代喬治一世之子喬治二世。詹姆斯二世的孫子查理·愛德華·斯圖亞特（Bonnie Prince Charlie）登陸蘇格蘭。他得到了蘇格蘭高地氏族的支持，並組建了一支軍隊。",
      category: "History",
      isMultipleChoice: false
    },
    {
      id: 307,
      question: "If you think someone is trying to persuade you to join an extremist or terrorist activity, who should you contact?",
      question_zh: "如果有人試圖勸你加入極端或恐怖活動，你應該聯絡誰？",
      options: ["The Home Office", "Your local MP", "Your local police force", "The Ministry of Defence"],
      correctAnswers: [2],
      explanation: "Your local police force should be contacted if you think someone is trying to persuade you to join an extremist or terrorist activity.",
      explanation_zh: "如果有人試圖勸你加入極端或恐怖活動，你應該聯絡當地警察。",
      category: "Safety and Security",
      isMultipleChoice: false
    },
    {
      id: 308,
      question: "It is compulsory for 16 and 17-year-olds to join the National Citizen Service programme.",
      question_zh: "16和17歲的人必須加入國家公民服務計劃。",
      options: ["True", "False"],
      correctAnswers: [1],
      explanation: "It is not compulsory for 16 and 17-year-olds to join the National Citizen Service programme.",
      explanation_zh: "16和17歲的人不一定要加入國家公民服務計劃。",
      category: "Education",
      isMultipleChoice: false
    },
    {
      id: 309,
      question: "What is the name of the tour guides that tell visitors stories about the Tower of London’s history?",
      question_zh: "給遊客講述倫敦塔歷史故事的導遊叫什麼名字？",
      options: ["Knights", "Beefeaters", "Suffragettes", "Chartists"],
      correctAnswers: [1],
      explanation: "Beefeaters are the name of the tour guides that tell visitors stories about the Tower of London’s history.",
      explanation_zh: "Beefeaters是給遊客講述倫敦塔歷史故事的導遊的名字。",
      category: "Culture",
      isMultipleChoice: false
    },
    {
      id: 310,
      question: "Which two countries developed the Concorde, the world’s only supersonic commercial airliner?",
      question_zh: "哪兩個國家開發了世界上唯一的超音速商用飛機 Concorde？",
      options: ["France", "Italy", "Germany", "United Kingdom"],
      correctAnswers: [0, 3],
      explanation: "The Concorde was developed by France and the United Kingdom.",
      explanation_zh: "Concorde是法國和英國開發的。",
      category: "History",
      isMultipleChoice: true
    },
    {
      id: 311,
      question: "Where is Snowdonia located?",
      question_zh: "雪登尼亞(Snowdonia)位於哪裡？",
      options: ["Scotland", "England", "Northern Ireland", "Wales"],
      correctAnswers: [3],
      explanation: "Snowdonia is located in Wales.",
      explanation_zh: "雪登尼亞(Snowdonia)位於威爾士。",
      category: "Geography",
      isMultipleChoice: false
    },
    {
      id: 312,
      question: "Who wrote Sherlock Holmes?",
      question_zh: "誰寫了Sherlock Holmes？",
      options: ["Agatha Christie", "H.G. Wells", "Arthur Conan Doyle", "J.K. Rowling"],
      correctAnswers: [2],
      explanation: "Arthur Conan Doyle wrote Sherlock Holmes.",
      explanation_zh: "Arthur Conan Doyle寫了Sherlock Holmes。",
      category: "Culture",
      isMultipleChoice: false
    },
    {
      id: 313,
      question: "Which country was invaded by Germany in 1939?",
      question_zh: "哪個國家在1939年被德國入侵？",
      options: ["France", "Italy", "Germany", "Poland"],
      correctAnswers: [3],
      explanation: "Germany invaded Poland in 1939.",
      explanation_zh: "德國在1939年入侵波蘭。",
      category: "History",
      isMultipleChoice: false
    },
    {
      id: 314,
      question: "Who is the patron Saint of Wales?",
      question_zh: "威爾斯的守護聖人是誰？",
      options: ["St. David", "St. George", "St. Patrick", "St. Andrew"],
      correctAnswers: [0],
      explanation: "St. David is the patron Saint of Wales.",
      explanation_zh: "St. David是威爾士的守護聖人。",
      category: "Culture",
      isMultipleChoice: false
    },
    {
      id: 315,
      question: "Lake District is the largest national park of England.",
      question_zh: "Lake District是英國最大的國家公園。",
      options: ["False", "True"],
      correctAnswers: [1],
      explanation: "Lake District is the largest national park of England.",
      explanation_zh: "Lake District是英國最大的國家公園。",
      category: "Geography",
      isMultipleChoice: false
    },
    {
      id: 316,
      question: "What is the name of the area in London where famous theatres are located?",
      question_zh: "倫敦哪個區域集中了許多著名劇院？",
      options: ["Soho", "Theatreland", "Westminster", "Hyde Park"],
      correctAnswers: [1],
      explanation: "Theatreland is the name of the area in London where famous theatres are located.",
      explanation_zh: "Theatreland是倫敦集中許多著名劇院的區域。",
      category: "Culture",
      isMultipleChoice: false
    },
    {
      id: 317,
      question: "Which two of the following are key roles of school governors?",
      question_zh: "以下哪兩個是學校董事會的關鍵角色？",
      options: ["Giving awards to the best students of the school", "Setting the strategic direction of the school", "Monitoring and evaluating school performance", "Monitoring student’s behaviour"],
      correctAnswers: [1, 2],
      explanation: "Setting the strategic direction of the school and Monitoring and evaluating school performance are key roles of school governors.",
      explanation_zh: "制定學校的策略方向以及監督和評估學校的辦學績效是學校理事的主要職責。",
      category: "Education",
      isMultipleChoice: true
    },
    {
      id: 318,
      question: "What led the American colonies to want their independence from Britain?",
      question_zh: "什麼讓美洲殖民地想要獨立？",
      options: ["The British government wanted to control their borders", "They were running out of resources", "The British government wanted to tax them", "There were not enough jobs for the local people"],
      correctAnswers: [2],
      explanation: "The British government wanted to tax them led the American colonies to want their independence from Britain.",
      explanation_zh: "英國政府想要向他們徵稅，這導緻美洲殖民地想要脫離英國獨立。",
      category: "History",
      isMultipleChoice: false
    },
    {
      id: 319,
      question: "When did the Black Death take place?",
      question_zh: "黑死病是什麼時候發生的？",
      options: ["The Golden Age", "The Middle Ages", "The Stone Age", "The Iron Age"],
      correctAnswers: [1],
      explanation: "The Black Death took place in the Middle Ages.",
      explanation_zh: "瘟疫是在中世紀發生的。",
      category: "History",
      isMultipleChoice: false
    },
    {
      id: 320,
      question: "Who was the leader of the suffragettes, the group that campaigned for women’s rights to vote?",
      question_zh: "誰是爭取婦女投票權的婦女參政運動的領導人？",
      options: ["Florence Nightingale", "Queen Victoria", "Mary Wollstonecraft","Emmeline Pankhurst"],
      correctAnswers: [3],
      explanation: "Emmeline Pankhurst was the leader of the suffragettes, the group that campaigned for women’s rights to vote.",
      explanation_zh: " Emmeline Pankhurst是爭取婦女投票權的婦女參政運動的領導人。",
      category: "History",
      isMultipleChoice: false
    },
    {
      id: 321,
      question: "Cardiff is the capital city of which country?",
      question_zh: "卡迪夫(Cardiff)是哪個國家的首都？",
      options: ["Northern Ireland", "Scotland", "Wales", "England"],
      correctAnswers: [2],
      explanation: "Cardiff is the capital city of Wales.",
      explanation_zh: "卡迪夫(Cardiff)是威爾士的首都。",
      category: "Geography",
      isMultipleChoice: false
    },
    {
      id: 322,
      question: "During the Great Depression in the 1930s which industry was badly affected?",
      question_zh: "在1930年代的大蕭條時期，哪些行業受到嚴重影響？",
      options: ["Aviation", "Agriculture", "Shipbuilding", "Tourism"],
      correctAnswers: [2],
      explanation: "Shipbuilding was badly affected during the Great Depression in the 1930s.",
      explanation_zh: "在1930年代的大蕭條時期，造船業受到了嚴重影響。",
      category: "History",
      isMultipleChoice: false
    },
    {
      id: 323,
      question: "Who was the first man in the world to run 1 mile in under 4 minutes?",
      question_zh: "誰是世界上第一位在4分鐘以內跑完一英里的人？",
      options: ["John Landy", "Mo Farah", "Hicham El Guerrouj", "Roger Bannister"],
      correctAnswers: [3],
      explanation: "Roger Bannister was the first man in the world to run 1 mile in under 4 minutes.",
      explanation_zh: "Roger Bannister是世界上第一位在4分鐘以內跑完一英里的人。",
      category: "Culture",
      isMultipleChoice: false
    },
    {
      id: 324,
      question: "Which festival celebrates the end of Ramadan, when Muslims have fasted for a month?",
      question_zh: "哪個節日慶祝穆斯林齋戒月結束，齋戒月期間穆斯林禁食了一個月？",
      options: ["Vaisakhi", "Eid al-Fitr", "Hannukah", "Diwali"],
      correctAnswers: [1],
      explanation: "Eid al-Fitr celebrates the end of Ramadan, when Muslims have fasted for a month.",
      explanation_zh: "Eid al-Fitr慶祝穆斯林齋戒月結束，齋戒月期間穆斯林禁食了一個月。",
      category: "Culture",
      isMultipleChoice: false
    }
  ],
  4: [
    {
      id: 401,
      question: "What was the last battle between Great Britain and France?",
      question_zh: "英國與法國之間發生的最後一場戰役是什麼？",
      options: ["Battle of Waterloo", "Battle of Trafalgar", "Battle of Hastings", "Battle of Culloden"],
      correctAnswers: [0],
      explanation: "In 1815, the French Wars ended with the defeat of the Emperor Napoleon by the Duke of Wellington at the Battle of Waterloo.",
      explanation_zh: "1815年，法蘭西戰爭以拿破崙皇帝在滑鐵盧戰役(Battle of Waterloo)中被威靈頓公爵擊敗而告終。",
      category: "History",
      isMultipleChoice: false
    },
    {
      id: 402,
      question: "Which flower is associated with Wales?",
      question_zh: "哪個花朵與威爾士有關？",
      options: ["Rose", "Thistle", "Daffodil", "Shamrock"],
      correctAnswers: [2],
      explanation: "The daffodil is a flower associated with Wales.",
      explanation_zh: "水仙花是與威爾士相關的花朵。",
      category: "Culture",
      isMultipleChoice: false
    },
    {
      id: 403,
      question: "During the reign of Charles II parts of London were destroyed, what was the cause of this destruction?",
      question_zh: "查理二世統治期間，倫敦的部分地區被毀，這是什麼原因造成的？",
      options: ["A war", "A plague", "A fire", "A flood"],
      correctAnswers: [2],
      explanation: "The Great Fire of London destroyed much of the city in 1666.",
      explanation_zh: "1666年的倫敦大火摧毀了倫敦的大部分地區。",
      category: "History",
      isMultipleChoice: false
    },
    {
      id: 404,
      question: "How often are general elections held in the UK?",
      question_zh: "英國大選多久舉行一次？",
      options: ["Every 3 years", "Every 4 years", "Every 6 years", "Every 5 years"],
      correctAnswers: [3],
      explanation: "General elections are held every 5 years.",
      explanation_zh: "大選每五年舉行一次。",
      category: "Government",
      isMultipleChoice: false
    },
    {
      id: 405,
      question: "Scotland has its own banknotes, which are valid everywhere in the UK.",
      question_zh: "蘇格蘭有自己的鈔票，在英國各地都有效。",
      options: ["True", "False"],
      correctAnswers: [0],
      explanation: "Scotland has its own banknotes, which are valid everywhere in the UK.",
      explanation_zh: "蘇格蘭有自己的鈔票，在英國各地都有效。",
      category: "Culture",
      isMultipleChoice: false
    },
    {
      id: 406,
      question: "What charity works to preserve important buildings, coastline and countryside in the UK?",
      question_zh: "哪個慈善機構致力於保護英國重要的建築、海岸線和鄉村？",
      options: ["National Trust", "British Heart Foundation", "Cancer Research UK", "Royal National Lifeboat Institution"],
      correctAnswers: [0],
      explanation: "The National Trust works to preserve important buildings, coastline and countryside in the UK.",
      explanation_zh: "National Trust 致力於保護英國重要的建築、海岸線和鄉村。",
      category: "Culture",
      isMultipleChoice: false
    },
    {
      id: 407,
      question: "Great Britain refers only to England, Wales and Scotland.",
      question_zh: "大不列顛僅指英格蘭、威爾士和蘇格蘭。",
      options: ["False", "True"],
      correctAnswers: [1],
      explanation: "Great Britain refers only to England, Wales and Scotland.",
      explanation_zh: "大不列顛僅指英格蘭、威爾士和蘇格蘭。",
      category: "Culture",
      isMultipleChoice: false
    },
    {
      id: 408,
      question: "Who was the tribal leader who fought against the Romans?",
      question_zh: "誰是反抗羅馬人的部落領袖？",
      options: ["William the Conqueror", "King Arthur", "Boudicca", "Alfred the Great"],
      correctAnswers: [2],
      explanation: "One of the tribal leaders who fought against the Romans was Boudicca, the queen of the Iceni in what is now eastern England.",
      explanation_zh: "反抗羅馬人的部落領袖之一是布狄卡（Boudicca），她是現今英格蘭東部地區伊西尼族（Iceni）的女王。",
      category: "History",
      isMultipleChoice: false
    },
    {
      id: 409,
      question: "Who was voted the greatest Briton of all time in 2002?",
      question_zh: "誰在2002年被評為史上最偉大的英國人？",
      options: ["William Shakespeare", "Winston Churchill","Isaac Newton", "Charles Darwin"],
      correctAnswers: [1],
      explanation: "In 2002, Winston Churchill was voted the greatest Briton of all time.",
      explanation_zh: "2002年，溫斯頓·丘吉爾(Winston Churchill)被評為史上最偉大的英國人。",
      category: "Culture",
      isMultipleChoice: false
    },
    {
      id: 410,
      question: "Which two houses form the UK Parliament?",
      question_zh: "哪兩個議院組成英國議會？",
      options: ["The House of Commons","The House of Members","The House of Lords","The House of People"],
      correctAnswers: [0,2],
      explanation: "The UK Parliament is made up of two houses: the House of Commons and the House of Lords.",
      explanation_zh: "英國議會由兩個議院組成：下議院和上議院。",
      category: "Government",
      isMultipleChoice: false
    },
    {
      id: 411,
      question: "When did women get the right to vote at the same age as men?",
      question_zh: "女性在什麼時候獲得了與男性相同的投票年齡？",
      options: ["1918","1928","1938","1948"],
      correctAnswers: [1],
      explanation: "Women got the right to vote at the same age as men in 1928.",
      explanation_zh: "女性在1928年獲得了與男性相同的投票年齡。",
      category: "History",
      isMultipleChoice: false
    },
    {
      id: 412,
      question: "Who is the head of the Church of England?",
      question_zh: "英格蘭教會的領袖是誰？",
      options: ["The Pope","The Archbishop of Canterbury","The Monarch","The Prime Minister"],
      correctAnswers: [2],
      explanation: "The Monarch is the head of the Church of England.",
      explanation_zh: "君主是英格蘭教會的領袖。",
      category: "Culture",
      isMultipleChoice: false
    },
    {
      id: 413,
      question: "What sort of event is the Grand National?",
      question_zh: "大國民賽（Grand National）是哪種活動？",
      options: ["A car race","A boat race","A running race","A horse race"],
      correctAnswers: [3],
      explanation: "The Grand National is a horse race.",
      explanation_zh: "大國民賽是一場賽馬。",
      category: "Culture",
      isMultipleChoice: false
    },
    {
      id: 414,
      question: "What type of literature are the Canterbury Tales?",
      question_zh: "《坎特伯雷故事集》是哪種文學作品？",
      options: ["Novels","Poems","Plays","Short stories"],
      correctAnswers: [1],
      explanation: "Geoffrey Chaucer wrote a series of poems in English about a group of people going to Canterbury on a pilgrimage. This collection of poems is called The Canterbury Tales.",
      explanation_zh: "喬叟（Geoffrey Chaucer）用英語寫了一系列關於一群人前往坎特伯雷朝聖的詩歌。這本詩集被稱為《坎特伯雷故事集》。",
      category: "Culture",
      isMultipleChoice: false
    },
    {
      id: 415,
      question: "When is Christmas Day?",
      question_zh: "聖誕節是哪一天？",
      options: ["25th December","26th December","1st January","2nd January"],
      correctAnswers: [0],
      explanation: "Christmas Day is on 25th December.",
      explanation_zh: "聖誕節是12月25日。",
      category: "Culture",
      isMultipleChoice: false
    },
    {
      id: 416,
      question: "Who supported King Charles I during the Civil War?",
      question_zh: "內戰期間誰支持查理一世國王？",
      options: ["The Roundheads","The Parliamentarians","The Cavaliers","The Royalists"],
      correctAnswers: [2],
      explanation: "During the civil war between the king and Parliament the country split into those who supported the king (the Cavaliers) and those who supported Parliament (the Roundheads).",
      explanation_zh: "在國王與議會的內戰期間，國家分裂為支持國王的人（保皇黨）和支持議會的人（圓顱黨）。",
      category: "History",
      isMultipleChoice: false
    },
    {
      id: 417,
      question: "What battle is commemorated in the Bayeux Tapestry?",
      question_zh: "貝葉斯掛毯（Bayeux Tapestry）紀念的是哪場戰役？",
      options: ["The Battle of Trafalgar","The Battle of Waterloo","The Battle of Culloden","The Battle of Hastings"],
      correctAnswers: [3],
      explanation: "The Bayeux Tapestry commemorates the Battle of Hastings in 1066.",
      explanation_zh: "貝葉斯掛毯紀念的是1066年的黑斯廷斯戰役。",
      category: "History",
      isMultipleChoice: false
    },
    {
      id: 418,
      question: "Where was Anne Boleyn, the wife of Henry VIII, executed?",
      question_zh: "亨利八世的妻子安妮·博林在哪裡被處決？",
      options: ["Hampton Court Palace","Windsor Castle","Buckingham Palace","Tower of London"],
      correctAnswers: [3],
      explanation: "Anne Boleyn was executed at the Tower of London.",
      explanation_zh: "安妮·博林在倫敦塔被處決。",
      category: "History",
      isMultipleChoice: false
    },
    {
      id: 419,
      question: "Racial crime and smoking in public places are examples of:",
      question_zh: "種族犯罪和在公共場所吸煙都是以下方面的例子：",
      options: ["Civil offences","Criminal offences"],
      correctAnswers: [1],
      explanation: "Racial crime and smoking in public places are examples of criminal offences.",
      explanation_zh: "種族犯罪和在公共場所吸煙都是刑事犯罪的例子。",
      category: "Culture",
      isMultipleChoice: false
    },
    {
      id: 420,
      question: "What type of character was played by Charlie Chaplin?",
      question_zh: "查理·卓別林演的是什麼類型的人物？",
      options: ["A brandit","A tramp","A politician","A scientist"],
      correctAnswers: [1],
      explanation: "Sir Charles (Charlie) Chaplin became famous in silent movies for his tramp character and was one of many British actors to make a career in Hollywood.",
      explanation_zh: "查理·卓別林爵士以在無聲電影中扮演的流浪漢角色而聞名，他是許多在好萊塢發展事業的英國演員之一。",
      category: "General Knowledge",
      isMultipleChoice: false
    },
    {
      id: 421,
      question: "You have to be at least 21 years old to stand as MP.",
      question_zh: "要成為議員，你至少要年滿21歲。",
      options: ["True","False"],
      correctAnswers: [1],
      explanation: "This statement is false. Anyone aged 18 or over can stand for election as an MP but they are unlikely to win unless they have been nominated to represent one of the major political parties. These are the Conservative Party, the Labour Party, the Liberal Democrats, or one of the parties representing Scottish, Welsh or Northern Irish interests.",
      explanation_zh: "這種說法是錯誤的。任何年滿18歲的人都可以競選國會議員，但除非獲得主要政黨之一的提名，否則他們不太可能當選。這些主要政黨包括保守黨、工黨、自由民主黨，以及代表蘇格蘭、威爾斯或北愛爾蘭利益的政黨之一。",
      category: "General Knowledge",
      isMultipleChoice: false
    },
    {
      id: 422,
      question: "Who developed the radar?",
      question_zh: "誰開發了雷達？",
      options: ["John Logie Baird","Sir Frank Whittle","Robert Watson-Watt","Christopher Chataway"],
      correctAnswers: [2],
      explanation: "Robert Watson-Watt developed the radar.",
      explanation_zh: "羅伯特·沃森·瓦特開發了雷達。",
      category: "Culture",
      isMultipleChoice: false
    },
    {
      id: 423,
      question: "Where is the official home of the Prime Minister?",
      question_zh: "首相的官方住所是什麼？",
      options: ["10 Downing Street","11 Downing Street","12 Downing Street","13 Downing Street"],
      correctAnswers: [0],
      explanation: "The official home of the Prime Minister is 10 Downing Street.",
      explanation_zh: "首相的官方住所是10 Downing Street。",
      category: "General Knowledge",
      isMultipleChoice: false
    },
    {
      id: 424,
      question: "By law, which TWO types of media have to give a balanced coverage of all political parties and equal time to rival viewpoints before an election?",
      question_zh: "根據法律規定，哪兩種媒體必須在選舉前對所有政黨進行平衡報道，並給予不同觀點同等的報道時間？",
      options: ["Radio","Magazines","Newspapers","Television"],
      correctAnswers: [0,3],
      explanation: "Radio and Television have to give a balanced coverage of all political parties and equal time to rival viewpoints before an election.",
      explanation_zh: "選舉前，廣播和電視必須對所有政黨進行平衡報道，並給予不同觀點同等的報道時間。",
      category: "General Knowledge",
      isMultipleChoice: true
    }
  ],
  5: [
    {
      id: 501,
      question: "When does Easter take place?",
      question_zh: "復活節是什麼時候？",
      options: ["Novermber or December","March or April","January or February","May or June"],
      correctAnswers: [1],
      explanation: "Easter takes place in March or April.",
      explanation_zh: "復活節在3月或4月。",
      category: "General Knowledge",
      isMultipleChoice: false
    },
    {
      id: 502,
      question: "Which of the following is not a valid UK coin?",
      question_zh: "以下哪一枚不是有效的英國硬幣？",
      options: ["5p","10p","25p","£1"],
      correctAnswers: [2],
      explanation: "There are no 25p coins in the UK currency.",
      explanation_zh: "在英國貨幣中沒有25p的硬幣。",
      category: "General Knowledge",
      isMultipleChoice: false
    },
    {
      id: 503,
      question: "Where is the Eden Project located?",
      question_zh: "愛登(Eden)項目位於何處？",
      options: ["Edinburgh","Dorset","Devon","Cornwall"],
      correctAnswers: [3],
      explanation: "The Eden Project is located in Cornwall.",
      explanation_zh: "愛登(Eden)項目位於康沃尔。",
      category: "General Knowledge",
      isMultipleChoice: false
    },
    {
      id: 504,
      question: "St Helena and the Falkland Islands are part of Great Britain.",
      question_zh: "聖赫勒拿(St Helena)和福克蘭群島(Falkland Islands)是大不列颠的一部分。",
      options: ["True","False"],
      correctAnswers: [1],
      explanation: "St Helena and the Falkland Islands are not part of Great Britain.",
      explanation_zh: "聖赫勒拿(St Helena)和福克蘭群島(Falkland Islands)不是大不列颠的一部分。",
      category: "General Knowledge",
      isMultipleChoice: false
    },
    {
      id: 505,
      question: "Which two of the following are fundamental principles of British life?",
      question_zh: "以下哪兩個是英國生活的基本原則？",
      options: ["Monarchy","Democracy","Join a trade union","The rule of law"],
      correctAnswers: [1,3],
      explanation: "The fundamental principles of British life include: democracy, the rule of law, individual liberty, tolerance of those with different faiths and beliefs and participation in community life.",
      explanation_zh: "英國生活的基本原則包括：民主、法治、個人自由、對不同信念和信念的寬容以及參與社區生活。",
      category: "General Knowledge",
      isMultipleChoice: false
    },
    {
      id: 506,
      question: "Where should you register if you want to become part of a jury?",
      question_zh: "如果想成為陪審團成員，應該到哪裡註冊？",
      options: ["The British Embassy", "The electoral register", "The NHS", "Your local council"],
      correctAnswers: [1],
      explanation: "People on the electoral register are randomly selected to serve on a jury. Therefore, if you want to be selected to form part of a jury you have to be on the electoral register and be between 18 to 70 years old.",
      explanation_zh: "選民登記冊上的人會被隨機選中擔任陪審員。因此，如果你想被選中成為陪審員，你必須在選民登記冊上登記，並且年齡在18歲至70歲之間。",
      category: "General Knowledge",
      isMultipleChoice: false
    },
    {
      id: 507,
      question: "What sort of church is the Church of Scotland?",
      question_zh: "蘇格蘭教會是什麼類型的教會？",
      options: ["Catholic", "Baptist","Free Church","Presbyterian"],
      correctAnswers: [3],
      explanation: "In Scotland, the national Church is the Church of Scotland, which is a Presbyterian Church.",
      explanation_zh: "在蘇格蘭，國家教堂是蘇格蘭 Presbyterian 教會。",
      category: "General Knowledge",
      isMultipleChoice: false
    },
    {
      id: 508,
      question: "Where does golf come from?",
      question_zh: "高爾夫起源於哪裡？",
      options: ["Wales","Australia","Scotland","Northern Ireland"],
      correctAnswers: [2],
      explanation: "The modern game of golf can be traced back to 15th century Scotland.",
      explanation_zh: "現代高爾夫起源于15世紀的蘇格蘭。",
      category: "General Knowledge",
      isMultipleChoice: false
    },
    {
      id: 509,
      question: "When do the television and newspapers have stories that are jokes until midday?",
      question_zh: "電視和報紙什麼時候才會播出中午前都是笑話的新聞？",
      options: ["Valentine's Day","New Year's Day","Christmas Day","April Fool's Day"],
      correctAnswers: [3],
      explanation: "On April Fool’s Day, the 1st of April the television and newspapers often have stories that are April Fool jokes.",
      explanation_zh: "在4月1日愚人節，電視和報紙通常會播出愚人節玩笑的新聞。",
      category: "General Knowledge",
      isMultipleChoice: false
    },
    {
      id: 510,
      question: "What king was defeated by Oliver Cromwell during the Civil War and hid in an oak tree before escaping to Europe?",
      question_zh: "誰在內戰中被 Oliver Cromwell 打敗，躲在橡樹樹中，最後逃到歐洲？",
      options: ["Richard I", "Charles II", "James II", "Henry VIII"],
      correctAnswers: [1],
      explanation: "Charles II was defeated by Oliver Cromwell during the Civil War and hid in an oak tree before escaping to Europe.",
      explanation_zh: "查爾斯二世在內戰中被 Oliver Cromwell 打敗，躲在橡樹樹中，最後逃到歐洲。",
      category: "History",
      isMultipleChoice: false
    },
    {
      id: 511,
      question: "Who was the father of Queen Elizabeth I?",
      question_zh: "誰是女王伊麗莎白一世的父親？",
      options: ["Henry VIII", "Edward I", "James II", "Henry VII"],
      correctAnswers: [0],
      explanation: "Henry VIII was the father of Queen Elizabeth I.",
      explanation_zh: "亨利八世是女王伊麗莎白一世的父親。",
      category: "History",
      isMultipleChoice: false
    },
    {
      id: 512,
      question: "Complaints against the police can ONLY be made by writing to the Police Complaints Commissioner.",
      question_zh: "對警方的投訴只能透過寫信給警察投訴專員的方式提出。",
      options: ["True", "False"],
      correctAnswers: [1],
      explanation: "Anyone can make a complaint about the police by going to a police station and writing to the Chief Constable of the police force involved. Complaints can also be made to an independent body: the Independent Police Complaints Commission in England and Wales, the Police Complaints Commissioner for Scotland or the Police Ombudsman for Northern Ireland.",
      explanation_zh: "任何人都可以前往警察局投訴警方，也可以寫信給相關警隊的警長。此外，也可以向獨立機構投訴：英格蘭和威爾斯的獨立警察投訴委員會、蘇格蘭的警察投訴專員或北愛爾蘭的警察監察專員。",
      category: "General Knowledge",
      isMultipleChoice: false
    },
    {
      id: 513,
      question: "Who is the patron Saint of Northern Ireland?",
      question_zh: "北愛爾蘭的守護聖人是誰？",
      options: ["St. Columba", "St. Patrick", "St. Brigid", "St. Martin"],
      correctAnswers: [1],
      explanation: "The patron Saint of Northern Ireland is St Patrick.",
      explanation_zh: "北愛爾蘭的守護聖人是聖派翠克(St. Patrick)。",
      category: "Culture",
      isMultipleChoice: false
    },
    {
      id: 514,
      question: "What is the name of the period when new ideas about politics, philosophy and science were developed?",
      question_zh: "發展出關於政治、哲學和科學的新思想的時期是什麼？",
      options: ["The Renaissance", "The Industrial Revolution", "The Scientific Revolution", "The Enlightenment"],
      correctAnswers: [3],
      explanation: "During the 18th century, new ideas about politics, philosophy and science were developed. This is often called ‘the Enlightenment’.",
      explanation_zh: "18世紀期間，政治、哲學和科學領域湧現許多新思想。這通常被稱為“啟蒙運動”。",
      category: "Culture",
      isMultipleChoice: false
    },
    {
      id: 515,
      question: "Which of the following statements is TRUE:",
      question_zh: "下列哪個陳述是正確的？",
      options: ["Mary Stuart (‘Mary, Queen of Scots’) was a Protestant", "Mary Stuart (‘Mary, Queen of Scots’) was a Catholic"],
      correctAnswers: [1],
      explanation: "Mary Stuart (Mary, Queen of Scots) was a Catholic.",
      explanation_zh: "瑪麗·斯圖亞特（“蘇格蘭女王瑪麗”）是一名天主教徒。",
      category: "History",
      isMultipleChoice: false
    },
    {
      id: 516,
      question: "Which of the following is an example of civil law?",
      question_zh: "下列哪個是民事法的範例？",
      options: ["To carry a weapon of any kind, even if it is for self-defence", "Discrimination in the workplace", "To own a pet dog", "To buy alcohol for people who are under the age of 18"],
      correctAnswers: [1],
      explanation: "Discrimination in the workplace is an example of civil law.",
      explanation_zh: "在工作場所的歧視是民事法的範例。",
      category: "Culture",
      isMultipleChoice: false
    },
    {
      id: 517,
      question: "In which battle did Admiral Nelson die?",
      question_zh: "納爾遜海軍上將(Admiral Nelson)在哪一場戰役中陣亡？",
      options: ["The Battle of Waterloo", "The Battle of Hastings", "The Battle of Bosworth Field","The Battle of Trafalgar"],
      correctAnswers: [3],
      explanation: "Admiral Nelson was in charge of the British fleet at the Battle of Trafalgar and was killed in the battle.",
      explanation_zh: "納爾遜海軍上將(Admiral Nelson)在特拉法加海戰中陣亡。",
      category: "History",
      isMultipleChoice: false
    },
    {
      id: 518,
      question: "William of Orange was asked by Protestants to invade England and proclaim himself king. But, when William reached England, there was no resistance and he took over the throne. This event was later known as:",
      question_zh: "奧蘭治威廉(William of Orange)受新教徒之託入侵英格蘭並自立為王。然而，當威廉抵達英格蘭時，並未遇到任何抵抗，他隨即奪取了王位。這事件後來被稱為：",
      options: ["The Glorious Revolution", "The Battle of Hastings", "The Battle of Bosworth Field","The Battle of Trafalgar"],
      correctAnswers: [0],
      explanation: "William of Orange was asked by Protestants to invade England and proclaim himself king. But, when William reached England, there was no resistance and he took over the throne. This event was later known as: The Glorious Revolution.",
      explanation_zh: "威廉·奧蘭治(William of Orange)受新教徒之託入侵英格蘭並自立為王。然而，當威廉抵達英格蘭時，並未遇到任何抵抗，他隨即奪取了王位。這事件後來被稱為「光榮革命」。",
      category: "History",
      isMultipleChoice: false
    },
    {
      id: 519,
      question: "What sort of charity is ‘Friends of the Earth’?",
      question_zh: "「Friends of the Earth」是什麼樣的慈善團體？",
      options: ["A charity working with older people", "A charity working with pets", "An environmental charity", "A medical research charity"],
      correctAnswers: [2],
      explanation: "Friends of the Earth is an environmental charity.",
      explanation_zh: "Friends of the Earth是環境慈善團體。",
      category: "Culture",
      isMultipleChoice: false
    },
    {
      id: 520,
      question: "If a husband forces his wife to have sex he can be charged with rape.",
      question_zh: "如果丈夫強迫妻子發生性行為，他可以被控告強姦。",
      options: ["True", "False"],
      correctAnswers: [0],
      explanation: "If a husband forces his wife to have sex he can be charged with rape.",
      explanation_zh: "如果丈夫強迫妻子發生性行為，他可以被控告強姦。",
      category: "Culture",
      isMultipleChoice: false
    },
    {
      id: 521,
      question: "In which country of the British Empire did the Boer War (1899-1902) take place?",
      question_zh: "布爾戰爭（1899-1902）發生在英帝國的哪個國家？",
      options: ["Zimbabwe", "Namibia", "South Africa", "Zambia"],
      correctAnswers: [2],
      explanation: "The Boer War of 1899 to 1902 took place in South Africa with settlers from the Netherlands called the Boers.",
      explanation_zh: "布爾戰爭（1899-1902）發生在南非，由荷蘭移民組成的布爾人（Boers）參與。",
      category: "History",
      isMultipleChoice: false
    },
    {
      id: 522,
      question: "Which of the following actions is known as “canvassing”?",
      question_zh: "下列哪個行為被稱為“ canvassing”？",
      options: ["Volunteering for an environmental charity", "Donating blood to help people", "Persuading people to vote for a political party", "Caring for animals at a local rescue shelter"],
      correctAnswers: [2],
      explanation: "Persuading people to vote for a political party is known as canvassing.",
      explanation_zh: "說服人們投票給某個政黨的行為稱為拉票。",
      category: "General Knowledge",
      isMultipleChoice: false
    },
    {
      id: 523,
      question: "Which novel written by JRR Tolkien was voted the country’s best-loved novel in 2003?",
      question_zh: "哪本由JRR Tolkien所寫的小說在2003年被選為英國最愛的小說？",
      options: ["The Hobbit", "The Silmarillion", "The Children of Húrin", "The Lord of the Rings"],
      correctAnswers: [3],
      explanation: "The Lord of the Rings was voted the country’s best-loved novel in 2003.",
      explanation_zh: "2003年，JRR Tolkien的《魔戒》被評為英國最受歡迎的小說。",
      category: "Culture",
      isMultipleChoice: false
    },
    {
      id: 524,
      question: "When did Germany invade Poland?",
      question_zh: "德國是什麼時候入侵波蘭？",
      options: ["1941", "1942", "1939", "1944"],
      correctAnswers: [2],
      explanation: "Germany invaded Poland in 1939.",
      explanation_zh: "德國在1939年入侵波蘭。",
      category: "History",
      isMultipleChoice: false
    },
  ],
  6: [
    {
      id: 601,
      question: "As a British citizen what are your responsibilities (choose two answers)?",
      question_zh: "作為英國公民，你的責任有哪些（選擇兩個答案）？",
      options: ["To look after yourself and your family", "To walk your day only during the day", "To respect and obey the law", "To go to church on Sunday"],
      correctAnswers: [0, 2],
      explanation: "If you wish to be a permanent resident or citizen of the UK, you should: respect and obey the law, look after yourself and your family, respect the rights of others, including their right to their own opinions, treat others with fairness and look after the area in which you live and the environment.",
      explanation_zh: "如果你想成為英國的永久居民或公民，你應該：尊重並遵守法律，照顧好自己和家人，尊重他人的權利，包括他們表達自己意見的權利，公平地對待他人，並愛護你居住的地區和環境。",
      category: "General Knowledge",
      isMultipleChoice: true
    },
    {
      id: 602,
      question: "Who made the first coins to be minted in Britain?",
      question_zh: "誰製造了第一枚在英國鑄造的硬幣？",
      options: ["The Romans", "The Anglo-Saxons", "The people of the Stone Age", "The people of the Iron Age"],
      correctAnswers: [3],
      explanation: "The people of the Iron Age made the first coins to be minted in Britain, some inscribed with the names of Iron Age kings. This marks the beginnings of British history.",
      explanation_zh: "鐵器時代的人製造了第一枚在英國鑄造的硬幣，一些硬幣上刻有鐵器時代君主的名字。這標誌著英國歷史的開始。",
      category: "History",
      isMultipleChoice: false
    },
    {
      id: 603,
      question: "Who built the Tower of London?",
      question_zh: "誰建造了倫敦塔？",
      options: ["Oliver Cromwell", "William the Conqueror", "Queen Elizabeth I", "Queen Victoria"],
      correctAnswers: [1],
      explanation: "The Tower of London was built by William the Conqueror.",
      explanation_zh: "倫敦塔是由威廉征服者建造的。",
      category: "History",
      isMultipleChoice: false
    },
    {
      id: 604,
      question: "There are 15 national parks in England, Wales and Scotland. What are national parks?",
      question_zh: "英格蘭、威爾斯和蘇格蘭共有15個國家公園。什麼是國家公園？",
      options: ["Medieval buildings", "Protected areas of countryside", "Giant greenhouses", "Land formations of columns made from volcanic lava"],
      correctAnswers: [1],
      explanation: "National Parks are areas of protected countryside that everyone can visit, and where people live, work and look after the landscape.",
      explanation_zh: "國家公園是受保護的鄉村地區，任何人都可以參觀，人們在那裡生活、工作並保護景觀。",
      category: "General Knowledge",
      isMultipleChoice: false
    },
    {
      id: 605,
      question: "Northern Ireland has its own established church.",
      question_zh: "北愛爾蘭有自己的國教教堂。",
      options: ["True", "False"],
      correctAnswers: [1],
      explanation: "There is no established Church in Wales or Northern Ireland.",
      explanation_zh: "威爾斯和北愛爾蘭沒有自己的官方教堂。",
      category: "Culture",
      isMultipleChoice: false
    },
    {
      id: 606,
      question: "Which three territories form Great Britain?",
      question_zh: "哪三個領土組成大不列颠(Great Britain)?",
      options: ["Scotland", "Northern Ireland", "Wales", "England"],
      correctAnswers: [0,2,3],
      explanation: "‘Great Britain’ refers only to England, Scotland and Wales, not to Northern Ireland.",
      explanation_zh: "大不列颠只包括英格蘭、蘇格蘭和威爾斯，不包括北愛爾蘭。",
      category: "General Knowledge",
      isMultipleChoice: true
    },
    {
      id: 607,
      question: "How often are Prime Minister’s Questions held in the parliament?",
      question_zh: "首相質詢在議會多久舉行一次？",
      options: ["Every day", "Every week", "Every two weeks", "Every month"],
      correctAnswers: [1],
      explanation: "Prime Minister’s Questions are held every week.",
      explanation_zh: "首相質詢每周舉行一次。",
      category: "General Knowledge",
      isMultipleChoice: false
    },
    {
      id: 608,
      question: "Which king was executed in 1649?",
      question_zh: "哪位君主在1649年被處決？",
      options: ["James II", "Charles III", "Charles I", "James IV"],
      correctAnswers: [2],
      explanation: "Charles I was executed in 1649.",
      explanation_zh: "查爾斯一世在1649年被處決。",
      category: "General Knowledge",
      isMultipleChoice: false
    },
    {
      id: 609,
      question: "Where was William Shakespeare born?",
      question_zh: "威廉·莎士比亞在哪裡出生？",
      options: ["London", "Birmingham", "Manchester","Stratford-upon-Avon"],
      correctAnswers: [3],
      explanation: "William Shakespeare was born in Stratford-upon-Avon.",
      explanation_zh: "莎士比亞出生於英國斯特拉特福鎮。",
      category: "General Knowledge",
      isMultipleChoice: false
    },
    {
      id: 610,
      question: "Which two of the following are famous British Paralympians?",
      question_zh: "以下哪兩個是著名的英國殘疾奧運選手？",
      options: ["Jayne Torvill", "Ellie Simmonds", "Dame Kelly Holmes", "Baroness Tanni Grey-Thompson"],
      correctAnswers: [1,3],
      explanation: "Baroness Tanni Grey-Thompson and Ellie Simmonds are famous British Paralympians.",
      explanation_zh: "Baroness Tanni Grey-Thompson 和 Ellie Simmonds是英國著名的殘疾奧運選手。",
      category: "General Knowledge",
      isMultipleChoice: true
    },
    {
      id: 611,
      question: "Who was reigning in England when English settlers first began to colonise the eastern coast of America?",
      question_zh: "當英國殖民者開始在美洲東海岸定居時，英國的統治者是誰？",
      options: ["Queen Victoria", "Henry VIII", "Elizabeth I", "Charles I"],
      correctAnswers: [2],
      explanation: "In Elizabeth I’s time, English settlers first began to colonise the eastern coast of America.",
      explanation_zh: "在伊莉莎白一世時期，英國殖民者開始在美洲東海岸進行殖民活動。",
      category: "History",
      isMultipleChoice: false
    },
    {
      id: 612,
      question: "Scotland and Wales use a system called ‘individual registration’ where all those entitled to vote must complete their own registration form.",
      question_zh: "蘇格蘭和威爾斯使用一種稱為‘個人注冊’的系統，所有有權投票的人都必須完成自己的注冊表。",
      options: ["True", "False"],
      correctAnswers: [1],
      explanation: "Northern Ireland uses a system called ‘individual registration’ and all those entitled to vote must complete their own registration form.",
      explanation_zh: "北愛爾蘭採用「個人登記」制度，所有有權投票的人都必須填寫自己的登記表。",
      category: "General Knowledge",
      isMultipleChoice: false
    },
    {
      id: 613,
      question: "On what day is the birth of Jesus Christ celebrated?",
      question_zh: "基督誕生是什麼時候？",
      options: ["Boxing Day", "New Year's Day", "Christmas Day", "Easter Sunday"],
      correctAnswers: [2],
      explanation: "Christmas Day is celebrated on December 25th.",
      explanation_zh: "基督誕生是12月25日。",
      category: "General Knowledge",
      isMultipleChoice: false
    },
    {
      id: 614,
      question: "What sort of battle was the ’Battle of Britain’, fought between Germany and Britain in the summer of 1940?",
      question_zh: "1940 年夏天，德國和英國之間爆發了“不列顛之戰”，這是一場什麼樣的戰役？",
      options: ["A battle without rifles", "A battle in the mountains", "An aerial battle", "A battle in the sea"],
      correctAnswers: [2],
      explanation: "‘The Battle of Britain’ was a crucial aerial battle fought between Germany and Britain in the summer of 1940.",
      explanation_zh: "不列顛之戰是1940年夏天德國和英國之間爆發的一場關鍵空軍戰役。",
      category: "History",
      isMultipleChoice: false
    },
    {
      id: 615,
      question: "Where is Swansea located?",
      question_zh: "斯旺西(Swansea)位於哪裡？",
      options: ["Wales", "England", "Scotland", "Northern Ireland"],
      correctAnswers: [0],
      explanation: "Swansea is located in Wales.",
      explanation_zh: "斯旺西(Swansea)位於威爾斯。",
      category: "General Knowledge",
      isMultipleChoice: false
    },
    {
      id: 616,
      question: "Which two political parties formed a coalition in 2010?",
      question_zh: "2010年，哪兩個政治黨派組成了一個聯盟？",
      options: ["The Labour Party", "The Conservative Party", "The Liberal Democrat Party", "The SNP"],
      correctAnswers: [1,2],
      explanation: "In May 2010 the Conservative and Liberal Democrat parties formed a coalition and the leader of the Conservative Party, David Cameron, became Prime Minister.",
      explanation_zh: "2010 年 5 月，保守黨和自由民主黨組成聯合政府，保守黨領袖戴維·卡梅倫出任首相。",
      category: "General Knowledge",
      isMultipleChoice: true
    },
    {
      id: 617,
      question: "Who established the Church of England?",
      question_zh: "誰建立了英國國教？",
      options: ["William of Orange", "Winston Churchill", "Henry VIII", "Oliver Cromwell"],
      correctAnswers: [2],
      explanation: "Henry VIII established the Church of England.",
      explanation_zh: "亨利八世建立了英國國教。",
      category: "History",
      isMultipleChoice: false
    },
    {
      id: 618,
      question: "In 1348, one third of the population in England, Wales and Scotland died as a result of which disease?",
      question_zh: "1348年，英格蘭、威爾斯和蘇格蘭三分之一的人口死於哪一種疾病？",
      options: ["The black death", "The flu", "The measles", "The cold"],
      correctAnswers: [0],
      explanation: "The black death killed one third of the population in England, Wales and Scotland in 1348.",
      explanation_zh: "瘟疫在1348年使英格蘭、威爾斯和蘇格蘭三分之一的人口死亡。",
      category: "General Knowledge",
      isMultipleChoice: false
    },
    {
      id: 619,
      question: "Haggis is a traditional food from which area?",
      question_zh: "哈吉斯(Haggis)是從哪個地區的传统食物？",
      options: ["Wales", "England","Scotland", "Northern Ireland"],
      correctAnswers: [2],
      explanation: "Haggis is a traditional food from Scotland.",
      explanation_zh: "哈吉斯(Haggis)是蘇格蘭的傳統食物。",
      category: "Culture",
      isMultipleChoice: false
    },
    {
      id: 620,
      question: "Which court deals with minor criminal offences in Scotland?",
      question_zh: "蘇格蘭處理輕微刑事犯罪的法院是什麼？",
      options: ["The Sheriff Court", "The Justice of the Peace Court", "The Court of Session", "The Court of Appeal"],
      correctAnswers: [1],
      explanation: "The Justice of the Peace Court deals with minor criminal offences in Scotland.",
      explanation_zh: "蘇格蘭處理輕微刑事犯罪的法院是 Justice of the Peace Court。",
      category: "General Knowledge",
      isMultipleChoice: false
    },
    {
      id: 621,
      question: "Which two of the following records give us information about England during the reign of William I?",
      question_zh: "以下哪兩項記錄提供了有關威廉一世統治時期英格蘭的資訊？",
      options: ["The Bayeux Tapestry", "The Magna Carta", "The Canterbury Tales", "The Domesday Book"],
      correctAnswers: [0, 3],
      explanation: "The Bayeux Tapestry and The Domesday Book give us information about England during the reign of William I.",
      explanation_zh: "The Bayeux Tapestry和 TheDomesday Book 提供了威廉一世統治時期英格蘭的資訊。",
      category: "History",
      isMultipleChoice: false
    },
    {
      id: 622,
      question: "In 1913, the British government promised ‘Home Rule’ for Ireland, why were changes in Ireland delayed until 1921?",
      question_zh: "1913年，英國政府承諾為愛爾蘭提供「自治權」，為什麼愛爾蘭的改革要等到1921年才開始？",
      options: ["Due to the outbreak of the Black Death", "Due to the outbreak of the Second World War", "Due to the outbreak of the First World War", "Because there was not a king on the British throne"],
      correctAnswers: [2],
      explanation: "The outbreak of the First World War delayed changes in Ireland until 1921.",
      explanation_zh: "第一次世界大戰使愛爾蘭的改革延遲到1921年。",
      category: "History",
      isMultipleChoice: false
    },
    {
      id: 623,
      question: "Which of the following statements is true?",
      question_zh: "以下哪一個陳述是正確的？",
      options: ["Elizabeth I was a Protestant and she succeeded in finding a balance between the views of the Catholics and the more extreme Protestants.", "Elizabeth I was a Catholic and she succeeded in finding a balance between the views of the Catholics and the more extreme Protestants."],
      correctAnswers: [0],
      explanation: "Elizabeth I was a Protestant and she succeeded in finding a balance between the views of the Catholics and the more extreme Protestants.",
      explanation_zh: "伊莉莎白一世是新教徒，她成功地在天主教徒和較為激進的新教徒的觀點之間找到了平衡。",
      category: "History",
      isMultipleChoice: false
    },
    {
      id: 624,
      question: "Which two documents do you need to apply for a National Insurance number?",
      question_zh: "申請國民保險號碼需要哪些文件？",
      options: ["Documents that prove your identity", "A contract from your employer", "A letter from your doctor", "Documents that prove that you have permission to work in the UK"],
      correctAnswers: [0, 3],
      explanation: "Documents that prove your identity and Documents that prove that you have permission to work in the UK are required to apply for a National Insurance number.",
      explanation_zh: "申請國民保險號碼需要提供身份證明文件和證明您有權在英國工作的文件。",
      category: "General Knowledge",
      isMultipleChoice: false
    }
  ],
  7: [
      {
        "id": 701,
        "question": "As a British citizen, you should:",
        "question_zh": "作為英國公民，您應該：",
        "options": [
            "Respect and obey the law",
            "Vote in all elections",
            "Take part in religious activities",
            "Look after the area in which you live and the environment"
        ],
        "correctAnswers": [0, 3],
        "explanation": "As a British citizen you should respect and obey the law and look after the area in which you live and the environment are the correct answers.",
        "explanation_zh": "作為英國公民，你應該尊重和遵守法律，愛護你所居住的地區和環境，這是正確的答案。",
        "category": "General Knowledge",
        "isMultipleChoice": true
    },
    {
        "id": 702,
        "question": "When is Halloween celebrated?",
        "question_zh": "萬聖節什麼時候慶祝？",
        "options": [
            "5th of November",
            "11th of November",
            "31st of October",
            "1st of April"
        ],
        "correctAnswers": [2],
        "explanation": "Halloween is celebrated on the 31st of October .",
        "explanation_zh": "10 月 31 日慶祝萬聖節。",
        "category": "General Knowledge",
        "isMultipleChoice": false
    },
    {
        "id": 703,
        "question": "The Bill of Rights in 1689 gave women the right to vote.",
        "question_zh": "1689 年的《權利法案》賦予婦女投票權。",
        "options": [
            "True",
            "False"
        ],
        "correctAnswers": [1],
        "explanation": "The Bill of Rights, 1689, confirmed the rights of Parliament and the limits of the king’s power.",
        "explanation_zh": "1689 年的《權利法案》確認了議會的權利和國王權力的限制。",
        "category": "History",
        "isMultipleChoice": false
    },
    {
        "id": 704,
        "question": "What is the name of the most famous cricket competition played between England and Australia?",
        "question_zh": "英格蘭和澳大利亞之間最著名的板球比賽的名稱是什麼？",
        "options": [
            "The Ashes",
            "The Six Nations Championship",
            "The Grand National",
            "The Australian Open"
        ],
        "correctAnswers": [0],
        "explanation": "The most famous cricket competition is the Ashes , which is a series of Test matches played between England and Australia.",
        "explanation_zh": "最著名的板球比賽是灰燼杯，這是英格蘭和澳大利亞之間進行的一系列測試賽。",
        "category": "General Knowledge",
        "isMultipleChoice": false
    },
    {
        "id": 705,
        "question": "What was the biggest source of employment during the 18th century?",
        "question_zh": "18世紀最大的就業來源是什麼？",
        "options": [
            "Fishing",
            "Teaching",
            "Aircraft industry",
            "Manufacturing"
        ],
        "correctAnswers": [3],
        "explanation": "During the 18th century, manufacturing jobs became the main source of employment in Britain.",
        "explanation_zh": "18世紀，製造業工作成為英國就業的主要來源。",
        "category": "General Knowledge",
        "isMultipleChoice": false
    },
    {
        "id": 706,
        "question": "In 1314 the Scottish, led by Robert the Bruce, defeated the English at the battle of Bannockburn, and Scotland remained unconquered by the English.",
        "question_zh": "1314年，羅伯特·布魯斯領導的蘇格蘭人在班諾克本戰役中擊敗了英國人，蘇格蘭至今仍未被英國人征服。",
        "options": [
            "True",
            "False"
        ],
        "correctAnswers": [0],
        "explanation": "This statement is true .",
        "explanation_zh": "這句話是正確的。",
        "category": "History",
        "isMultipleChoice": false
    },
    {
        "id": 707,
        "question": "Which of the following is an example of criminal offence?",
        "question_zh": "以下哪項是刑事犯罪的例子？",
        "options": [
            "A dispute between the landlord and the tenants who have not paid the rent",
            "Disputes about faulty goods or services",
            "Disputes about an unfair dismissal in the workplace",
            "Smoking in public places where it is not allowed"
        ],
        "correctAnswers": [3],
        "explanation": "Smoking in public places. It is against the law to smoke tobacco products in nearly every enclosed public place in the UK. There are signs displayed to tell you where you cannot smoke.",
        "explanation_zh": "在公共場所吸煙。在英國幾乎所有封閉的公共場所吸食煙草製品都是違法的。有標誌告訴您哪裡不能吸煙。",
        "category": "General Knowledge",
        "isMultipleChoice": false
    },
    {
        "id": 708,
        "question": "Which Scottish clan was killed for not taking the oath?",
        "question_zh": "哪個蘇格蘭氏族因未宣誓而被殺害？",
        "options": [
            "The MacLaine of Lochbuie",
            "The McDowalls of Garthland",
            "The MacDonalds of Glencoe",
            "The Macpherson of Cluny"
        ],
        "correctAnswers": [2],
        "explanation": "The correct answer is the MacDonalds of Glencoe .",
        "explanation_zh": "正確答案是格倫科麥當勞(MacDonalds of Glencoe)。",
        "category": "History",
        "isMultipleChoice": false
    },
    {
        "id": 709,
        "question": "Which two issues can the devolved administrations pass laws on?",
        "question_zh": "權力下放的政府可以就哪兩個問題通過法律？",
        "options": [
            "Defence",
            "Social security",
            "Health",
            "Education"
        ],
        "correctAnswers": [2, 3],
        "explanation": "Policy and laws governing defence, foreign affairs, immigration, taxation and social security all remain under central UK government control. However, many other public services, such as health and education , are controlled by the devolved administrations.",
        "explanation_zh": "有關國防、外交、移民、稅收和社會保障的政策和法律仍然處於英國中央政府的控制之下。然而，許多其他公共服務，例如衛生和教育，由權力下放的政府控制。",
        "category": "General Knowledge",
        "isMultipleChoice": true
    },
    {
        "id": 710,
        "question": "The assassination of the Archduke Franz Ferdinand of Austria in 1914 led to which of the following wars?",
        "question_zh": "1914 年奧地利大公弗朗茨·費迪南德遇刺導致了以下哪場戰爭？",
        "options": [
            "The Crimean War",
            "The First World War",
            "The Civil War",
            "The Second World War"
        ],
        "correctAnswers": [1],
        "explanation": "On 28 June 1914, Archduke Franz Ferdinand of Austria was assassinated. This set off a chain of events leading to the First World War (1914-18).",
        "explanation_zh": "1914年6月28日，奧地利大公弗朗茨·費迪南大公被暗殺。這引發了導致第一次世界大戰（1914-18）的一系列事件。",
        "category": "History",
        "isMultipleChoice": false
    },
    {
        "id": 711,
        "question": "What is the capital city of Scotland?",
        "question_zh": "蘇格蘭的首都是哪座城市？",
        "options": [
            "Edinburgh",
            "Glasgow",
            "St Andrews",
            "Aberdeen"
        ],
        "correctAnswers": [0],
        "explanation": "The capital city of Scotland is Edinburgh.",
        "explanation_zh": "蘇格蘭的首都是愛丁堡。",
        "category": "General Knowledge",
        "isMultipleChoice": false
    },
    {
        "id": 712,
        "question": "In 1833 the Emancipation Act abolished slavery throughout the British Empire.",
        "question_zh": "1833年，《解放奴隸法》廢除了整個大英帝國的奴隸制。",
        "options": [
            "True",
            "False"
        ],
        "correctAnswers": [0],
        "explanation": "This statement is true .",
        "explanation_zh": "這句話是正確的。",
        "category": "History",
        "isMultipleChoice": false
    },
    {
        "id": 713,
        "question": "What is the name of the process by which many Scottish landlords destroyed individual small farms (known as ‘crofts’) to make space for large flocks of sheep and cattle?",
        "question_zh": "許多蘇格蘭地主摧毀了個別小農場（稱為“小農場”），為大群羊和牛騰出空間，這一過程的名稱是什麼？",
        "options": [
            "The Black Death",
            "The Corn Removal",
            "The Enlightenment",
            "The Highland Clearances"
        ],
        "correctAnswers": [3],
        "explanation": "A process began which became known as the ‘Highland Clearances’ . Many Scottish landlords destroyed individual small farms (known as ‘crofts’) to make space for large flocks of sheep and cattle.",
        "explanation_zh": "一個被稱為“高地清理”的過程開始了。許多蘇格蘭地主摧毀了個別的小農場（稱為“小農場”），為大群羊和牛騰出空間。",
        "category": "General Knowledge",
        "isMultipleChoice": false
    },
    {
        "id": 714,
        "question": "The Falkland Islands are a British overseas territory and are part of the United Kingdom.",
        "question_zh": "福克蘭群島是英國海外領土，是英國的一部分。",
        "options": [
            "True",
            "False"
        ],
        "correctAnswers": [1],
        "explanation": "The Falkland Islands are a British overseas territory. They are also linked to the UK but are not part of it.",
        "explanation_zh": "福克蘭群島是英國海外領土。它們也與英國有聯繫，但不屬於英國。",
        "category": "General Knowledge",
        "isMultipleChoice": false
    },
    {
        "id": 715,
        "question": "Which two of the following are Civil War Battles?",
        "question_zh": "以下哪兩項是內戰？",
        "options": [
            "The Battle of Waterloo",
            "The Battle of Naseby",
            "The Battle of Marston Moor",
            "The Battle of Agincourt"
        ],
        "correctAnswers": [1, 2],
        "explanation": "The Battles of Marston Moor and the Battle of Naseby .",
        "explanation_zh": "馬斯頓荒原和內斯比之戰。",
        "category": "History",
        "isMultipleChoice": true
    },
    {
        "id": 716,
        "question": "What was the name of the activist group who fought for the women‘s right to vote?",
        "question_zh": "為婦女投票權而奮鬥的活動團體叫什麼名字？",
        "options": [
            "Quakers",
            "Beefeaters",
            "Suffragettes",
            "Chartists"
        ],
        "correctAnswers": [2],
        "explanation": "In the late 19th and early 20th centuries, an increasing number of women campaigned and demonstrated for greater rights and, in particular, the right to vote. They formed the women’s suffrage movement and became known as the ‘suffragettes’ .",
        "explanation_zh": "在 19 世紀末和 20 世紀初，越來越多的婦女為爭取更大的權利，特別是投票權而進行競选和示威。他們發起了婦女選舉權運動，並被稱為“婦女參政論者”。",
        "category": "History",
        "isMultipleChoice": false
    },
    {
        "id": 717,
        "question": "What UK landmark was voted as Britain’s favourite view in 2007?",
        "question_zh": "2007 年，哪個英國地標被評為英國最受歡迎的景觀？",
        "options": [
            "The Big Ben",
            "Snowdonia",
            "The London Eye",
            "Lake District"
        ],
        "correctAnswers": [3],
        "explanation": "In 2007, television viewers voted Wastwater (Lake District) as Britain’s favourite view.",
        "explanation_zh": "2007 年，電視觀眾將沃斯特沃特（湖區）評選為英國最受歡迎的景觀。",
        "category": "General Knowledge",
        "isMultipleChoice": false
    },
    {
        "id": 718,
        "question": "Who were the first people to live in Britain in what we call the Stone Age?",
        "question_zh": "誰是第一批生活在我們所說的石器時代的英國的人？",
        "options": [
            "Farmers",
            "Hunter-gatherers",
            "Peasants",
            "Pirates"
        ],
        "correctAnswers": [1],
        "explanation": "The first people to live in Britain were hunter-gatherers .",
        "explanation_zh": "第一批生活在英國的人是狩獵採集者。",
        "category": "General Knowledge",
        "isMultipleChoice": false
    },
    {
        "id": 719,
        "question": "What is the name of the movement against the authority of the Pope and the ideas of the Catholic Church that took place during the reign of Henry VIII?",
        "question_zh": "亨利八世統治期間發生的反對教皇權威和天主教會思想的運動的名稱是什麼？",
        "options": [
            "The Reformation",
            "The Enlightenment",
            "The Glorious Revolution",
            "The Renaissance"
        ],
        "correctAnswers": [0],
        "explanation": "The Reformation was a movement against the authority of the Pope and the ideas of the Catholic Church that took place during the reign of Henry VIII.",
        "explanation_zh": "宗教改革是一場反對教皇權威和天主教會思想的運動，發生在亨利八世統治期間。",
        "category": "History",
        "isMultipleChoice": false
    },
    {
        "id": 720,
        "question": "What do you need to do to apply for a National Insurance Number?",
        "question_zh": "您需要做什麼才能申請國民保險號碼？",
        "options": [
            "Contact the NHS",
            "Contact the Department for Work and Pensions (DWP)",
            "Contact your local MP",
            "Ask you employer to get it for you"
        ],
        "correctAnswers": [1],
        "explanation": "If you have permission to work in the UK, you will need to telephone the Department for Work and Pensions (DWP) to arrange to get a National Insurance number.",
        "explanation_zh": "如果您擁有在英國工作的許可，您需要致電工作和退休金部 (DWP) 以安排獲取國民保險號碼。",
        "category": "General Knowledge",
        "isMultipleChoice": false
    },
    {
        "id": 721,
        "question": "Which of the following is a major horse-racing event in England?",
        "question_zh": "以下哪項是英格蘭的主要賽馬活動？",
        "options": [
            "The Wimbledon Championship",
            "The Open Championship",
            "The Six Nations Championship",
            "Royal Ascot"
        ],
        "correctAnswers": [3],
        "explanation": "Royal Ascot is a five-day horse-racing event in Berkshire attended by members of the Royal Family.",
        "explanation_zh": "皇家阿斯科特賽馬會是伯克郡舉行的為期五天的賽馬盛會，英國王室成員均會出席。",
        "category": "General Knowledge",
        "isMultipleChoice": false
    },
    {
        "id": 722,
        "question": "How many members form a jury in Scotland?",
        "question_zh": "蘇格蘭的陪審團有多少名成員？",
        "options": [
            "12",
            "14",
            "15",
            "20"
        ],
        "correctAnswers": [2],
        "explanation": "In Scotland a jury has 15 members .",
        "explanation_zh": "在蘇格蘭，陪審團有 15 名成員。",
        "category": "General Knowledge",
        "isMultipleChoice": false
    },
    {
        "id": 723,
        "question": "What is known as Lent?",
        "question_zh": "什麼是四旬齋？",
        "options": [
            "The 40 days before Easter",
            "The 40 days before Christmas",
            "The 40 days after Easter",
            "The 40 days after Christmas"
        ],
        "correctAnswers": [0],
        "explanation": "The 40 days before Easter are known as Lent.",
        "explanation_zh": "復活節前的 40 天被稱為四旬期。",
        "category": "General Knowledge",
        "isMultipleChoice": false
    },
    {
        "id": 724,
        "question": "When was the last successful foreign invasion of England?",
        "question_zh": "外國上次成功入侵英格蘭是什麼時候？",
        "options": [
            "1415",
            "1314",
            "1066",
            "1200"
        ],
        "correctAnswers": [2],
        "explanation": "The Norman Conquest was the last successful foreign invasion of England in 1066 .",
        "explanation_zh": "諾曼征服是 1066 年最後一次成功的外國入侵英格蘭。",
        "category": "History",
        "isMultipleChoice": false
    }
  ],
  8: [
    {
        "id": 801,
        "question": "World War II started as a result of Germany invading which country?",
        "question_zh": "第二次世界大戰因德國入侵哪個國家而爆發？",
        "options": [
          "France",
          "Poland",
          "Russia",
          "Austria"
        ],
        "correctAnswers": [1],
        "explanation": "The Second World War started when Hitler invaded Poland in 1939. Britain and France declared war in order to stop his aggression.",
        "explanation_zh": "1939年希特勒入侵波蘭，第二次世界大戰爆發。英法兩國為製止侵略而宣戰。",
        "category": "History",
        "isMultipleChoice": false
    },
    {
        "id": 802,
        "question": "Which flower is associated with Scotland?",
        "question_zh": "哪種花與蘇格蘭有關？",
        "options": [
            "The Shamrock",
            "The Rose",
            "The Daffodil",
            "The Thistle"
        ],
        "correctAnswers": [3],
        "explanation": "The flower associated with Scotland is the thistle .",
        "explanation_zh": "與蘇格蘭相關的花是薊。",
        "category": "Culture",
        "isMultipleChoice": false
    },
    {
        "id": 803,
        "question": "Police complaints can only be made by writing to the Chief Constable of the police force involved.",
        "question_zh": "警方投訴只能通過寫信給相關警察部隊的警察局長提出。",
        "options": [
            "True",
            "False"
        ],
        "correctAnswers": [1],
        "explanation": "Anyone can make a complaint about the police by going to a police station and writing to the Chief Constable of the police force involved. Complaints can also be made to an independent body: the Independent Police Complaints Commission in England and Wales, the Police Complaints Commissioner for Scotland or the Police Ombudsman for Northern Ireland .",
        "explanation_zh": "任何人都可以前往警察局並寫信給相關警察部隊的警察局長來投訴警察。投訴也可以向獨立機構提出：英格蘭和威爾士的獨立警察投訴委員會、蘇格蘭的警察投訴專員或北愛爾蘭的警察監察員。",
        "category": "General Knowledge",
        "isMultipleChoice": false
    },
    {
        "id": 804,
        "question": "Which of the following is a responsibility of the Home Secretary?",
        "question_zh": "以下哪項是內政大臣的職責？",
        "options": [
            "Economy",
            "Education",
            "Defence",
            "Crime"
        ],
        "correctAnswers": [3],
        "explanation": "The Home Secretary is responsible for crime, policing and immigration .",
        "explanation_zh": "內政大臣負責犯罪、治安和移民。",
        "category": "General Knowledge",
        "isMultipleChoice": false
    },
    {
        "id": 805,
        "question": "When is St David’s day celebrated?",
        "question_zh": "聖大衛節什麼時候慶祝？",
        "options": [
            "1st March",
            "17th March",
            "23rd April",
            "17th April"
        ],
        "correctAnswers": [0],
        "explanation": "St  David’s day, patron of Wales, is celebrated on the 1st of March .",
        "explanation_zh": "3 月 1 日是威爾士的守護神聖大衛節。",
        "category": "Culture",
        "isMultipleChoice": false
    },
    {
        "id": 806,
        "question": "What happened to ‘Mary, Queen of Scots’ after she spent 20 years in prison?",
        "question_zh": "“蘇格蘭女王瑪麗”入獄20年後怎麼樣了？",
        "options": [
          "She became Queen of England",
          "She was executed",
          "She was sent to France",
          "She escaped to Denmark"
        ],
        "correctAnswers": [1],
        "explanation": "Mary was eventually executed , accused of plotting against Elizabeth I.",
        "explanation_zh": "瑪麗最終因被指控密謀反對伊麗莎白一世而被處決。",
        "category": "History",
        "isMultipleChoice": false
    },
    {
        "id": 807,
        "question": "What did Francis Crick discover?",
        "question_zh": "弗朗西斯·克里克(Francis Crick)發現了什麼？",
        "options": [
            "The MRI (magnetic resonance imaging) scanner",
            "The jet engine",
            "The structure of the DNA molecule",
            "The IVF (in-vitro fertilisation) therapy"
        ],
        "correctAnswers": [2],
        "explanation": "Francis Crick discovered the structure of the DNA molecule .",
        "explanation_zh": "弗朗西斯·克里克(Francis Crick)發現了 DNA 分子的結構。",
        "category": "General Knowledge",
        "isMultipleChoice": false
    },
    {
        "id": 808,
        "question": "Northern Ireland and Scotland have their own banknotes, which are valid everywhere in the UK.",
        "question_zh": "北愛爾蘭和蘇格蘭有自己的紙幣，在英國各地都有效。",
        "options": [
            "True",
            "False"
        ],
        "correctAnswers": [0],
        "explanation": "This statement is true .",
        "explanation_zh": "這句話是正確的。",
        "category": "General Knowledge",
        "isMultipleChoice": false
    },
    {
        "id": 809,
        "question": "How many national parks are there in England, Wales and Scotland?",
        "question_zh": "英格蘭、威爾士和蘇格蘭有多少個國家公園？",
        "options": [
            "15",
            "18",
            "25",
            "42"
        ],
        "correctAnswers": [0],
        "explanation": "There are 15 national parks in England, Wales and Scotland.",
        "explanation_zh": "英格蘭、威爾士和蘇格蘭有 15 個國家公園。",
        "category": "General Knowledge",
        "isMultipleChoice": false
    },
    {
        "id": 810,
        "question": "Is Northern Ireland part of Great Britain?",
        "question_zh": "北愛爾蘭是英國的一部分嗎？",
        "options": [
            "Yes",
            "No"
        ],
        "correctAnswers": [1],
        "explanation": "‘Great Britain’ refers only to England, Scotland and Wales, not to Northern Ireland.",
        "explanation_zh": "“大不列顛”僅指英格蘭、蘇格蘭和威爾士，而不是北愛爾蘭。",
        "category": "General Knowledge",
        "isMultipleChoice": false
    },
    {
        "id": 811,
        "question": "If you are a dog owner, which two things should your dog’s collar have when you go out for a walk?",
        "question_zh": "如果你是狗主人，外出散步時你的狗的項圈應該有哪兩樣東西？",
        "options": [
            "The owner’s address",
            "The dog’s breed",
            "The owner’s name",
            "The dog’s name"
        ],
        "correctAnswers": [0, 2],
        "explanation": "All dogs in public places must wear a collar showing the name and address of the owner .",
        "explanation_zh": "公共場所的所有狗都必須佩戴顯示主人姓名和地址的項圈。",
        "category": "General Knowledge",
        "isMultipleChoice": true
    },
    {
        "id": 812,
        "question": "What day relates to the death of Jesus Christ?",
        "question_zh": "哪一天與耶穌基督的死有關？",
        "options": [
          "Easter Sunday",
          "Easter Monday",
          "Good Friday",
          "Ash Wednesday"
        ],
        "correctAnswers": [2],
        "explanation": "Easter takes place in March or April. It marks the death of Jesus Christ on Good Friday and his rising from the dead on Easter Sunday.",
        "explanation_zh": "復活節在三月或四月舉行。它標誌著耶穌基督在耶穌受難日的死亡和復活節星期日的複活。",
        "category": "Culture",
        "isMultipleChoice": false
    },
    {
        "id": 813,
        "question": "A responsibility of the MPs is to represent everyone in their _______.",
        "question_zh": "國會議員的責任是代表他們_______中的每個人。",
        "options": [
            "County",
            "Estate",
            "District",
            "Constituency"
        ],
        "correctAnswers": [3],
        "explanation": "A responsibility of the MPs is to represent everyone in their constituency .",
        "explanation_zh": "議員的責任是代表其選區的每個人。",
        "category": "General Knowledge",
        "isMultipleChoice": false
    },
    {
        "id": 814,
        "question": "What was achieved with the Magna Carta?",
        "question_zh": "《大憲章》取得了什麼成果？",
        "options": [
          "It increased the King’s power",
          "It restricted the King’s power",
          "It restricted the rights of the farmers",
          "It increased women’s power"
        ],
        "correctAnswers": [1],
        "explanation": "The Magna Carta established the idea that even the king was subject to the law. It protected the rights of the nobility and restricted the king’s power to collect taxes or to make and change laws. In future, the king would need to involve his noblemen in decisions.",
        "explanation_zh": "《大憲章》確立了即使國王也必須遵守法律的觀念。它保護貴族的權利，並限制國王徵稅或製定和修改法律的權力。將來，國王需要讓他的貴族參與決策。",
        "category": "History",
        "isMultipleChoice": false
    },
    {
        "id": 815,
        "question": "Female genital mutilation (FGM) or taking a girl or woman abroad for FGM is illegal in the UK and it is a criminal offence.",
        "question_zh": "在英國，女性生殖器切割 (FGM) 或將女孩或婦女帶到國外進行女性生殖器切割是非法的，並且屬於刑事犯罪。",
        "options": [
            "True",
            "False"
        ],
        "correctAnswers": [0],
        "explanation": "This statement is true .",
        "explanation_zh": "這句話是正確的。",
        "category": "General Knowledge",
        "isMultipleChoice": false
    },
    {
        "id": 816,
        "question": "What year were women given the right to vote?",
        "question_zh": "哪一年婦女被賦予投票權？",
        "options": [
            "1914",
            "1918",
            "1925",
            "1949"
        ],
        "correctAnswers": [1],
        "explanation": "In 1918 , women over the age of 30 were given voting rights and the right to stand for Parliament, partly in recognition of the contribution women made to the war effort during the First World War.",
        "explanation_zh": "1918年，30歲以上的女性被賦予投票權和代表議會的權利，部分是為了表彰女性在第一次世界大戰期間為戰爭做出的貢獻。",
        "category": "History",
        "isMultipleChoice": false
    },
    {
        "id": 817,
        "question": "Which two of the following are British overseas territories?",
        "question_zh": "以下哪兩個是英國海外領土？",
        "options": [
            "St Helena",
            "Solomon Islands",
            "Mauritius",
            "The Falkland Islands"
        ],
        "correctAnswers": [0, 3],
        "explanation": "There are several British overseas territories, such as St Helena and the Falkland Islands . They are linked to the UK but are not part of it.",
        "explanation_zh": "有幾個英國海外領土，例如聖赫勒拿島和福克蘭群島。它們與英國有聯繫，但不屬於英國。",
        "category": "General Knowledge",
        "isMultipleChoice": true
    },
    {
        "id": 818,
        "question": "Who did the English defeat in 1588?",
        "question_zh": "1588年英國人打敗了誰？",
        "options": [
            "The Normans",
            "The Romans",
            "The Saxons",
            "The Spanish Armada"
        ],
        "correctAnswers": [3],
        "explanation": "In 1588 the English defeated the Spanish Armada (a large fleet of ships).",
        "explanation_zh": "1588 年，英國人擊敗了西班牙無敵艦隊。",
        "category": "History",
        "isMultipleChoice": false
    },
    {
        "id": 819,
        "question": "Who designed the Cenotaph?",
        "question_zh": "誰設計了和平紀念碑？",
        "options": [
            "Sir Norman Foster",
            "Sir Edwin Lutyens",
            "Lancelot ‘Capability’ Brown",
            "Isambard Kingdom Brunel"
        ],
        "correctAnswers": [1],
        "explanation": "Sir Edwin Lutyens was responsible for designing many war memorials throughout the world, including the Cenotaph in Whitehall.",
        "explanation_zh": "埃德溫·勒琴斯爵士負責設計世界各地的許多戰爭紀念館，包括白廳的和平紀念碑。",
        "category": "History",
        "isMultipleChoice": false
    },
    {
        "id": 820,
        "question": "How often are the members of the Welsh government elected?",
        "question_zh": "威爾斯政府成員多久選舉一次？",
        "options": [
            "Every 5 years",
            "Every 2 years",
            "Every 3 years",
            "Every 4 years"
        ],
        "correctAnswers": [3],
        "explanation": "There are 60 members of the Welsh government or members of the Senedd (SMs) and elections are held every four years using a form of proportional representation.",
        "explanation_zh": "威爾斯政府有 60 名成員或參議院 (SM) 成員，每四年舉行一次選舉，採用比例代表制形式。",
        "category": "General Knowledge",
        "isMultipleChoice": false
    },
    {
        "id": 821,
        "question": "During which period did the Beatles become popular and social laws were liberalised?",
        "question_zh": "Beatles樂隊在哪個時期開始流行，社會法律也變得自由化？",
        "options": [
            "1950s",
            "1960s",
            "1970s",
            "1980s"
        ],
        "correctAnswers": [1],
        "explanation": "The decade of the 1960s was a period of significant social change. It was known as the ‘swinging sixties’. There was growth in British fashion, cinema and popular music. Two well-known pop music groups at the time were The Beatles and The Rolling Stones. It was also a time when social laws were liberalised, for example in relation to divorce and to abortion in England, Wales and Scotland. The position of women in the workplace also improved.",
        "explanation_zh": "20世紀60年代是社會發生重大變革的時期。它被稱為“搖擺的六十年代”。英國時尚、電影和流行音樂都有增長。當時兩個著名的流行音樂團體是披頭士樂隊和滾石樂隊。這也是社會法律自由化的時期，例如英格蘭、威爾士和蘇格蘭的離婚和墮胎問題。女性在職場中的地位也有所提高。",
        "category": "Culture",
        "isMultipleChoice": false
    },
    {
        "id": 822,
        "question": "The Man Booker Prize is awarded in which of the following categories?",
        "question_zh": "布克獎頒發給以下哪個類別？",
        "options": [
            "Films",
            "Sport",
            "Literature",
            "Music"
        ],
        "correctAnswers": [2],
        "explanation": "The Man Booker Prize for Fiction is awarded annually for the best fiction novel (literature) written by an author from the Commonwealth, Ireland or Zimbabwe. It has been awarded since 1968. Past winners include Ian McEwan, Hilary Mantel and Julian Barnes.",
        "explanation_zh": "曼布克小說獎每年頒發給來自英聯邦、愛爾蘭或津巴布韋的作家所寫的最佳小說（文學）。該獎項自 1968 年開始頒發。過去的獲獎者包括伊恩·麥克尤恩 (Ian McEwan)、希拉里·曼特爾 (Hilary Mantel) 和朱利安·巴恩斯 (Julian Barnes)。",
        "category": "General Knowledge",
        "isMultipleChoice": false
    },
    {
        "id": 823,
        "question": "What sort of election takes place when a member of the Parliament (MP) dies or resigns?",
        "question_zh": "當國會議員（MP）去世或辭職時，會進行什麼樣的選舉？",
        "options": [
            "By-election",
            "Coalition",
            "Pre-selection",
            "Random selection"
        ],
        "correctAnswers": [0],
        "explanation": "If an MP dies or resigns, there will be a fresh election, called a by-election , in his or her constituency.",
        "explanation_zh": "如果國會議員去世或辭職，他或她的選區將舉行新的選舉，稱為補選。",
        "category": "General Knowledge",
        "isMultipleChoice": false
    },
    {
        "id": 824,
        "question": "What is the Turner Prize?",
        "question_zh": "什麼是特納獎(Turner Prize)？",
        "options": [
          "A literature award",
          "A contemporary art award",
          "A music award",
          "A theatre award"
        ],
        "correctAnswers": [1],
        "explanation": "The Turner Prize was established in 1984 and celebrates contemporary art . The Turner Prize is recognised as one of the most prestigious visual art awards in Europe.",
        "explanation_zh": "特納獎(Turner Prize)成立於 1984 年，旨在表彰當代藝術。特納獎被公認為歐洲最負盛名的視覺藝術獎項之一。",
        "category": "Culture",
        "isMultipleChoice": false
    }
  ],
  9: [
    {
      "id": 901,
      "question": "What is the national flower symbol of Northern Ireland?",
      "question_zh": "北愛爾蘭的國花象徵是什麼？",
      "options": [
        "The shamrock",
        "The rose",
        "The daffodil",
        "The thistle"
      ],
      "correctAnswers": [0],
      "explanation": "Northern Ireland's national flower symbol is the shamrock.",
      "explanation_zh": "北愛爾蘭的國花象徵是三葉草。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 902,
      "question": "The battle of Waterloo was the final military engagement between Britain and France.",
      "question_zh": "滑鐵盧戰役是英法之間的最後一場軍事交鋒。",
      "options": [
        "True",
        "False"
      ],
      "correctAnswers": [0],
      "explanation": "This is correct.",
      "explanation_zh": "這是正確的。",
      "category": "History",
      "isMultipleChoice": false
    },
    {
      "id": 903,
      "question": "£100 is the highest value note in circulation in the UK",
      "question_zh": "英國目前流通的最高面額紙幣是 100 英鎊。",
      "options": [
        "True",
        "False"
      ],
      "correctAnswers": [1],
      "explanation": "This is incorrect.",
      "explanation_zh": "這是不正確的。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 904,
      "question": "Where is the Lake District National Park located?",
      "question_zh": "湖區國家公園位於哪個地方？",
      "options": [
        "England",
        "Wales",
        "Scotland",
        "Northern Ireland"
      ],
      "correctAnswers": [0],
      "explanation": "The Lake District National Park is located in England.",
      "explanation_zh": "湖區國家公園位於英格蘭。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 905,
      "question": "Select two duties that British citizens are expected to fulfill.",
      "question_zh": "選擇英國公民應履行的兩項義務。",
      "options": [
        "To respect the rights of others, including their right to their own opinions",
        "To look after yourself and your family",
        "To volunteer in a community project at least once a year",
        "To buy food locally"
      ],
      "correctAnswers": [0, 1],
      "explanation": "British citizens and permanent residents should: obey the law, care for themselves and their families, respect others' rights including their opinions, treat people fairly, and protect their local area and environment.",
      "explanation_zh": "英國公民和永久居民應該：遵守法律、照顧自己和家人、尊重他人的權利（包括他們的意見）、公平對待他人、並保護當地地區和環境。",
      "category": "General Knowledge",
      "isMultipleChoice": true
    },
    {
      "id": 906,
      "question": "Which famous author's birthplace is Stratford-upon-Avon?",
      "question_zh": "哪位著名作家的出生地是埃文河畔斯特拉特福？",
      "options": [
        "Thomas Hardy",
        "Jane Austen",
        "Charles Dickens",
        "William Shakespeare"
      ],
      "correctAnswers": [3],
      "explanation": "Stratford-upon-Avon, England is the birthplace of William Shakespeare.",
      "explanation_zh": "英國埃文河畔斯特拉特福是威廉·莎士比亞的出生地。",
      "category": "Culture",
      "isMultipleChoice": false
    },
    {
      "id": 907,
      "question": "What makes 1928 a significant year for women's suffrage?",
      "question_zh": "是什麼讓 1928 年成為女性選舉權的重要一年？",
      "options": [
        "Women were given the right to vote at the age of 30.",
        "Women were given the right to vote at the age of 18, the same as men.",
        "Women were given the right to vote at the age of 21, the same as men.",
        "Women were given the right to vote at the age of 25."
      ],
      "correctAnswers": [2],
      "explanation": "In 1928, women gained voting rights at age 21, equal to men.",
      "explanation_zh": "1928 年，女性獲得了 21 歲的投票權，與男性相同。",
      "category": "History",
      "isMultipleChoice": false
    },
    {
      "id": 908,
      "question": "What does the term Hogmanay refer to?",
      "question_zh": "Hogmanay 這個詞指的是什麼？",
      "options": [
        "New Year's Eve in Wales",
        "New Year's Eve in Scotland",
        "Christmas Day in Wales",
        "Christmas Day in Scotland"
      ],
      "correctAnswers": [1],
      "explanation": "Hogmanay is the Scottish name for New Year's Eve, celebrated on December 31st.",
      "explanation_zh": "Hogmanay 是蘇格蘭對除夕的稱呼，於 12 月 31 日慶祝。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 909,
      "question": "Which city serves as the capital of Northern Ireland?",
      "question_zh": "哪個城市是北愛爾蘭的首都？",
      "options": [
        "Belfast",
        "Dublin",
        "Cork",
        "Edinburgh"
      ],
      "correctAnswers": [0],
      "explanation": "Belfast is the capital of Northern Ireland.",
      "explanation_zh": "貝爾法斯特是北愛爾蘭的首都。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 910,
      "question": "What conflict occurred in South Africa from 1899 to 1902?",
      "question_zh": "1899 年至 1902 年間在南非發生了什麼衝突？",
      "options": [
        "The Crimean War",
        "The Hundred Years War",
        "The Boer War",
        "The First World War"
      ],
      "correctAnswers": [2],
      "explanation": "The Boer War took place from 1899 to 1902.",
      "explanation_zh": "布爾戰爭發生於 1899 年至 1902 年。",
      "category": "History",
      "isMultipleChoice": false
    },
    {
      "id": 911,
      "question": "In Northern Ireland, eligible voters must personally complete their own registration form under the 'individual registration' system.",
      "question_zh": "在北愛爾蘭，合格選民必須根據「個人登記」制度親自填寫自己的登記表。",
      "options": [
        "True",
        "False"
      ],
      "correctAnswers": [0],
      "explanation": "This is correct.",
      "explanation_zh": "這是正確的。",
      "category": "Government",
      "isMultipleChoice": false
    },
    {
      "id": 912,
      "question": "Which two policy areas remain outside the control of devolved administrations?",
      "question_zh": "哪兩個政策領域仍然不受權力下放政府的控制？",
      "options": [
        "Health",
        "Immigration",
        "Education",
        "Defence"
      ],
      "correctAnswers": [1, 3],
      "explanation": "The UK central government retains control over defence, foreign affairs, immigration, taxation, and social security. Devolved administrations manage areas like education and health.",
      "explanation_zh": "英國中央政府保留對國防、外交、移民、稅收和社會保障的控制。權力下放的政府管理教育和衛生等領域。",
      "category": "Government",
      "isMultipleChoice": true
    },
    {
      "id": 913,
      "question": "What is the minimum age requirement for UK, Irish Republic, or Commonwealth citizens to stand for public office?",
      "question_zh": "英國、愛爾蘭共和國或英聯邦公民競選公職的最低年齡要求是多少？",
      "options": [
        "16",
        "18",
        "21",
        "25"
      ],
      "correctAnswers": [1],
      "explanation": "Generally, UK, Irish, or Commonwealth citizens aged 18 and above may stand for public office, with certain exceptions including armed forces members, civil servants, and those convicted of specific crimes.",
      "explanation_zh": "一般來說，年滿 18 歲及以上的英國、愛爾蘭或英聯邦公民可以競選公職，但某些例外情況除外，包括武裝部隊成員、公務員和被判犯有特定罪行的人。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 914,
      "question": "How did Victorian-era governments advance free trade policies?",
      "question_zh": "維多利亞時代的政府如何推進自由貿易政策？",
      "options": [
        "Abolishing a number of taxes on imported goods",
        "Preventing the importation of cheap grain",
        "Abolishing the exportation of local produce",
        "Preventing the importation of cheap raw materials"
      ],
      "correctAnswers": [0],
      "explanation": "Victorian governments promoted free trade by removing various import taxes. A notable example was repealing the Corn Laws in 1846, which had blocked cheap grain imports. These changes aided British industry by enabling affordable raw material imports.",
      "explanation_zh": "維多利亞時代的政府通過取消各種進口稅來促進自由貿易。一個值得注意的例子是 1846 年廢除了阻止廉價穀物進口的《穀物法》。這些變化通過實現負擔得起的原材料進口來幫助英國工業。",
      "category": "Government",
      "isMultipleChoice": false
    },
    {
      "id": 915,
      "question": "What was Admiral Nelson's role?",
      "question_zh": "納爾遜海軍上將的職責是什麼？",
      "options": [
        "A British general who established the authority of the English Parliament",
        "One of the tribal leaders who fought against the Romans",
        "A British officer in charge of the British army at the Battle of Waterloo",
        "A British officer in charge of the British fleet at the Battle of Trafalgar against the Spanish fleet"
      ],
      "correctAnswers": [3],
      "explanation": "Admiral Nelson commanded the British naval forces at Trafalgar against Spain and died during the engagement.",
      "explanation_zh": "納爾遜海軍上將在特拉法加指揮英國海軍部隊對抗西班牙，並在交戰中陣亡。",
      "category": "History",
      "isMultipleChoice": false
    },
    {
      "id": 916,
      "question": "During the Middle Ages, who were the serfs?",
      "question_zh": "中世紀時期，農奴是誰？",
      "options": [
        "Peasants who had a small area of their lord's agricultural land",
        "A group of skilled people from Holland who came to England during the Middle Ages",
        "Noblemen who formed part of the king's council of advisers",
        "Soldiers who fought at the Battle of Trafalgar"
      ],
      "correctAnswers": [0],
      "explanation": "Serfs were farm workers who cultivated small plots on their lord's estate.",
      "explanation_zh": "農奴是在領主莊園上耕種小塊土地的農場工人。",
      "category": "History",
      "isMultipleChoice": false
    },
    {
      "id": 917,
      "question": "Which technological advancement drove Britain's industrial growth in the 18th and 19th centuries?",
      "question_zh": "哪項技術進步推動了 18 和 19 世紀英國的工業發展？",
      "options": [
        "The Turing Machine",
        "The Radar",
        "The Steam Power",
        "The Jet Engine"
      ],
      "correctAnswers": [2],
      "explanation": "Britain's Industrial Revolution during the 18th and 19th centuries was powered by machinery development and steam energy, making it the first nation to industrialize on a large scale.",
      "explanation_zh": "18 和 19 世紀英國的工業革命是由機械發展和蒸汽能源推動的，使其成為第一個大規模工業化的國家。",
      "category": "History",
      "isMultipleChoice": false
    },
    {
      "id": 918,
      "question": "The only way to contact MPs is through postal mail.",
      "question_zh": "聯繫國會議員的唯一方式是通過郵寄。",
      "options": [
        "True",
        "False"
      ],
      "correctAnswers": [1],
      "explanation": "Incorrect. MPs can be reached by letter or phone at constituency or House of Commons offices. Many also hold local surgeries where constituents can discuss concerns in person.",
      "explanation_zh": "不正確。可以通過信件或電話在選區或下議院辦公室聯繫議員。許多人還舉行當地諮詢會，選民可以在那裡親自討論問題。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 919,
      "question": "What movement challenged the authority of the Pope?",
      "question_zh": "哪個宗教運動挑戰了教皇的權威？",
      "options": [
        "The Enlightenment",
        "The Swinging Sixties",
        "The Reformation",
        "The Suffragettes"
      ],
      "correctAnswers": [2],
      "explanation": "The Reformation challenged papal authority and Roman Catholic Church doctrines and practices.",
      "explanation_zh": "宗教改革挑戰了教皇權威和羅馬天主教會的教義和實踐。",
      "category": "History",
      "isMultipleChoice": false
    },
    {
      "id": 920,
      "question": "Which English monarch introduced the Domesday Book?",
      "question_zh": "哪位英國君主引入了《末日審判書》？",
      "options": [
        "William the Conqueror",
        "Harold, the Saxon king of England",
        "King Henry V",
        "King Henry IV"
      ],
      "correctAnswers": [0],
      "explanation": "William the Conqueror ordered a comprehensive survey of England's towns, villages, landowners, residents, and livestock, resulting in the Domesday Book.",
      "explanation_zh": "征服者威廉下令對英格蘭的城鎮、村莊、地主、居民和牲畜進行全面調查，從而產生了《末日審判書》。",
      "category": "History",
      "isMultipleChoice": false
    },
    {
      "id": 921,
      "question": "What educational reform did 'the Butler Act' establish in 1944?",
      "question_zh": "1944 年「巴特勒法案」建立了什麼教育改革？",
      "options": [
        "Free primary and secondary education in England, Wales and Scotland",
        "Free secondary education in England and Wales",
        "Free primary education in England, Wales and Scotland",
        "Free university fees in England, Wales, Scotland and Northern Ireland"
      ],
      "correctAnswers": [1],
      "explanation": "Richard Austen Butler, a Conservative MP from 1923, oversaw the 1944 Education Act (the Butler Act) which provided free secondary schooling in England and Wales.",
      "explanation_zh": "1923 年起擔任保守黨議員的理查德·奧斯汀·巴特勒監督了 1944 年教育法（巴特勒法案），該法案在英格蘭和威爾士提供免費中學教育。",
      "category": "Government",
      "isMultipleChoice": false
    },
    {
      "id": 922,
      "question": "What is the small claims procedure?",
      "question_zh": "小額索賠程序是什麼？",
      "options": [
        "An informal way of helping people to settle minor disputes without spending a lot of time and money using a lawyer",
        "A procedure that helps people to make small home insurance claims in certain circumstances"
      ],
      "correctAnswers": [0],
      "explanation": "The small claims procedure provides an accessible method for resolving minor disputes without significant legal expenses or time commitment.",
      "explanation_zh": "小額索賠程序提供了一種無需大量法律費用或時間承諾即可解決小額糾紛的便捷方法。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 923,
      "question": "What building was constructed in Hyde Park to hold the Great Exhibition of 1851?",
      "question_zh": "海德公園的哪座建築舉辦了 1851 年世界博覽會？",
      "options": [
        "Apsley House",
        "Buckingham Palace",
        "Kensington Palace",
        "The Crystal Palace"
      ],
      "correctAnswers": [3],
      "explanation": "The 1851 Great Exhibition took place in the Crystal Palace, an impressive steel and glass structure in Hyde Park featuring exhibits from industrial machinery to handcrafted items.",
      "explanation_zh": "1851 年世界博覽會在水晶宮舉行，這是海德公園一座令人印象深刻的鋼鐵和玻璃結構，展出了從工業機械到手工藝品的展品。",
      "category": "History",
      "isMultipleChoice": false
    },
    {
      "id": 924,
      "question": "What was Florence Nightingale's profession?",
      "question_zh": "弗洛倫斯·南丁格爾的職業是什麼？",
      "options": [
        "A poet",
        "An economist",
        "A nurse",
        "A painter"
      ],
      "correctAnswers": [2],
      "explanation": "Florence Nightingale worked as a nurse and is widely considered the founder of modern nursing practice.",
      "explanation_zh": "弗洛倫斯·南丁格爾擔任護士，被廣泛認為是現代護理實踐的創始人。",
      "category": "History",
      "isMultipleChoice": false
    }
  ],
  10: [
    {
      "id": 1001,
      "question": "Who is England's patron saint?",
      "question_zh": "誰是英格蘭的守護聖人？",
      "options": [
        "St Patrick",
        "St David",
        "St George",
        "St Andrew"
      ],
      "correctAnswers": [2],
      "explanation": "St George is the patron saint of England.",
      "explanation_zh": "聖喬治是英格蘭的守護聖人。",
      "category": "Culture",
      "isMultipleChoice": false
    },
    {
      "id": 1002,
      "question": "In which country is Loch Lomond and the Trossachs National Park?",
      "question_zh": "洛蒙德湖和特羅薩克斯國家公園在哪個國家？",
      "options": [
        "England",
        "Northern Ireland",
        "Wales",
        "Scotland"
      ],
      "correctAnswers": [3],
      "explanation": "Loch Lomond and the Trossachs National Park is in western Scotland.",
      "explanation_zh": "洛蒙德湖和特羅薩克斯國家公園位於蘇格蘭西部。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1003,
      "question": "Wales has an official state church.",
      "question_zh": "威爾斯有官方國家教會。",
      "options": [
        "True",
        "False"
      ],
      "correctAnswers": [1],
      "explanation": "This is incorrect. Wales and Northern Ireland do not have official state churches.",
      "explanation_zh": "這是不正確的。威爾士和北愛爾蘭沒有官方國家教會。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1004,
      "question": "Which work is Geoffrey Chaucer famous for writing?",
      "question_zh": "杰弗裡·喬叟以哪部作品聞名？",
      "options": [
        "The London Tales",
        "The Cambridge Tales",
        "The Canterbury Tales",
        "The Eastbourne Tales"
      ],
      "correctAnswers": [2],
      "explanation": "Chaucer wrote The Canterbury Tales, a collection of poems about pilgrims traveling to Canterbury.",
      "explanation_zh": "喬叟創作了《坎特伯雷故事集》，這是一部關於前往坎特伯雷的朝聖者的詩集。",
      "category": "Culture",
      "isMultipleChoice": false
    },
    {
      "id": 1005,
      "question": "On what date is Boxing Day?",
      "question_zh": "節禮日是哪一天？",
      "options": [
        "24th December",
        "01st January",
        "26th December",
        "31st October"
      ],
      "correctAnswers": [2],
      "explanation": "Boxing Day is December 26th, the day following Christmas, and is a public holiday.",
      "explanation_zh": "節禮日是 12 月 26 日，即聖誕節後的第二天，是公眾假期。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1006,
      "question": "What are the public holidays called when banks and businesses close?",
      "question_zh": "銀行和企業關閉的公眾假期叫什麼？",
      "options": [
        "Business Holidays",
        "Credit Holidays",
        "Branch Holidays",
        "Bank Holidays"
      ],
      "correctAnswers": [3],
      "explanation": "These public holidays are called bank holidays.",
      "explanation_zh": "這些公眾假期稱為銀行假期。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1007,
      "question": "Why did women gain voting rights in 1918?",
      "question_zh": "為什麼女性在 1918 年獲得投票權？",
      "options": [
        "In recognition of the contribution women made to the war effort during the Civil War",
        "In recognition of the contribution women made to the war effort during the First World War",
        "In recognition of the contribution women made to the war effort during the Crimean War",
        "In recognition of the contribution women made to the war effort during the Second World War"
      ],
      "correctAnswers": [1],
      "explanation": "Women over 30 received voting rights in 1918, partly recognizing their contributions during World War I.",
      "explanation_zh": "30 歲以上的女性在 1918 年獲得投票權，部分原因是認可她們在第一次世界大戰期間的貢獻。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1008,
      "question": "What must you have to drive on UK public roads?",
      "question_zh": "在英國公共道路上駕駛必須擁有什麼？",
      "options": [
        "An 'R' plate",
        "A National Insurance Number",
        "A valid driving licence",
        "An 'L' plate"
      ],
      "correctAnswers": [2],
      "explanation": "You must hold a valid driving licence to drive on public roads in the UK.",
      "explanation_zh": "您必須持有有效的駕駛執照才能在英國公共道路上駕駛。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1009,
      "question": "Which city hosts the Fringe festival?",
      "question_zh": "哪個城市舉辦「the Fringe藝術節」？",
      "options": [
        "St Andrews",
        "Edinburgh",
        "Inverness",
        "Fraserburgh"
      ],
      "correctAnswers": [1],
      "explanation": "The Edinburgh Festival Fringe takes place every summer in Edinburgh, Scotland, and is the largest arts festival of its kind.",
      "explanation_zh": "愛丁堡the Fringe藝術節每年夏天在蘇格蘭愛丁堡舉行，是同類藝術節中規模最大的。",
      "category": "Culture",
      "isMultipleChoice": false
    },
    {
      "id": 1010,
      "question": "How many members are in the Welsh Parliament (Senedd)?",
      "question_zh": "威爾斯議會（Senedd）有多少名成員？",
      "options": [
        "150",
        "90",
        "120",
        "60"
      ],
      "correctAnswers": [3],
      "explanation": "The Welsh Parliament has 60 members, elected every four years using proportional representation.",
      "explanation_zh": "威爾士議會有 60 名成員，每四年通過比例代表制選舉產生。",
      "category": "Government",
      "isMultipleChoice": false
    },
    {
      "id": 1011,
      "question": "The names and photos of young people convicted of crimes can be published in newspapers.",
      "question_zh": "被定罪的青少年的姓名和照片可以在報紙上發表。",
      "options": [
        "True",
        "False"
      ],
      "correctAnswers": [1],
      "explanation": "This is incorrect. Youth Courts are closed to the public, and names or photos of young defendants cannot be published.",
      "explanation_zh": "這是不正確的。青少年法庭不對公眾開放，不能公佈年輕被告的姓名或照片。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1012,
      "question": "What was Sir Edward Elgar's profession?",
      "question_zh": "愛德華·埃爾加爵士的職業是什麼？",
      "options": [
        "He was an actor",
        "He was a tennis player",
        "He was a musician",
        "He was a comedian"
      ],
      "correctAnswers": [2],
      "explanation": "Edward Elgar (1857-1934) was a composer, best known for his Pomp and Circumstance Marches.",
      "explanation_zh": "愛德華·埃爾加（1857-1934）是一位作曲家，以其《威風凜凜進行曲》最為著名。",
      "category": "Culture",
      "isMultipleChoice": false
    },
    {
      "id": 1013,
      "question": "Which denomination is NOT a British banknote?",
      "question_zh": "哪種面額不是英國紙幣？",
      "options": [
        "£5",
        "£25",
        "£50",
        "£20"
      ],
      "correctAnswers": [1],
      "explanation": "The UK does not issue £25 banknotes.",
      "explanation_zh": "英國不發行 25 英鎊紙幣。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1014,
      "question": "Where is the Scottish Grand National horse race held?",
      "question_zh": "蘇格蘭國家大賽賽馬在哪裡舉行？",
      "options": [
        "Edinburgh",
        "St Andrews",
        "Ayr",
        "Fife"
      ],
      "correctAnswers": [2],
      "explanation": "The Scottish Grand National takes place at Ayr racecourse.",
      "explanation_zh": "蘇格蘭國家大賽在艾爾賽馬場舉行。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1015,
      "question": "What type of government began after the Glorious Revolution?",
      "question_zh": "光榮革命後開始了什麼類型的政府？",
      "options": [
        "Constitutional republic",
        "Constitutional monarchy"
      ],
      "correctAnswers": [1],
      "explanation": "The laws following the Glorious Revolution established a constitutional monarchy in Britain.",
      "explanation_zh": "光榮革命後的法律在英國建立了君主立憲制。",
      "category": "Government",
      "isMultipleChoice": false
    },
    {
      "id": 1016,
      "question": "Which country sent a fleet to invade England and restore Catholicism during Elizabeth I's reign?",
      "question_zh": "伊麗莎白一世統治期間，哪個國家派艦隊入侵英格蘭並恢復天主教？",
      "options": [
        "Portugal",
        "Italy",
        "Spain",
        "France"
      ],
      "correctAnswers": [2],
      "explanation": "Spain sent the Armada in 1588 to conquer England and restore Catholicism, but it was defeated.",
      "explanation_zh": "西班牙在 1588 年派遣無敵艦隊征服英格蘭並恢復天主教，但被擊敗。",
      "category": "History",
      "isMultipleChoice": false
    },
    {
      "id": 1017,
      "question": "What right did the Habeas Corpus Act of 1679 establish?",
      "question_zh": "1679 年的《人身保護令法》確立了什麼權利？",
      "options": [
        "Measures to improve the conditions of workers",
        "Financial help for the unemployed, old-age pensions and free school meals",
        "A salary for members of Parliament (MPs)",
        "That every prisoner has a right to a court hearing"
      ],
      "correctAnswers": [3],
      "explanation": "The Habeas Corpus Act guaranteed that no one could be imprisoned unlawfully and that every prisoner has the right to a court hearing.",
      "explanation_zh": "《人身保護令法》保證任何人都不會被非法監禁，每個囚犯都有權接受法庭審理。",
      "category": "History",
      "isMultipleChoice": false
    },
    {
      "id": 1018,
      "question": "What did Emmeline Pankhurst fight for?",
      "question_zh": "艾米琳·潘克赫斯特為什麼而戰？",
      "options": [
        "Freedom of expression",
        "The right for women to vote",
        "The right to liberty and security",
        "The right to a fair trial"
      ],
      "correctAnswers": [1],
      "explanation": "Emmeline Pankhurst founded the Women's Social and Political Union in 1903 and campaigned for women's voting rights.",
      "explanation_zh": "艾米琳·潘克赫斯特於 1903 年創立了婦女社會和政治聯盟，並為女性投票權而奮鬥。",
      "category": "History",
      "isMultipleChoice": false
    },
    {
      "id": 1019,
      "question": "What is the Proms?",
      "question_zh": "什麼是「逍遙音樂節」？",
      "options": [
        "Light-hearted plays with music and comedy",
        "An annual event that gives awards in a range of categories, such as best British group and best British solo artist",
        "An eight-week summer season of daily orchestral classical music concerts",
        "An annual cultural festival which includes music, dance, art and original performances largely in Welsh"
      ],
      "correctAnswers": [2],
      "explanation": "The Proms is an eight-week summer season of orchestral classical music held at various venues including the Royal Albert Hall.",
      "explanation_zh": "逍遙音樂節是為期八週的夏季管弦樂古典音樂季，在包括皇家阿爾伯特音樂廳在內的多個場地舉行。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1020,
      "question": "What scientific discovery is Isaac Newton famous for?",
      "question_zh": "艾薩克·牛頓以什麼科學發現聞名？",
      "options": [
        "The discovery of steam power",
        "The discovery of gravity",
        "The discovery of penicillin",
        "The discovery of insulin"
      ],
      "correctAnswers": [1],
      "explanation": "Newton is famous for his work on gravity, published in Principia Mathematica, which explained how gravity affects the universe.",
      "explanation_zh": "牛頓以其在《自然哲學的數學原理》中發表的重力研究而聞名，該研究解釋了重力如何影響宇宙。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1021,
      "question": "In what year did World War I end?",
      "question_zh": "第一次世界大戰在哪一年結束？",
      "options": [
        "In 1945",
        "In 1918",
        "In 1922",
        "In 1943"
      ],
      "correctAnswers": [1],
      "explanation": "World War I ended in 1918.",
      "explanation_zh": "第一次世界大戰於 1918 年結束。",
      "category": "History",
      "isMultipleChoice": false
    },
    {
      "id": 1022,
      "question": "Which Roman Emperor built a wall in northern England to keep out the Picts?",
      "question_zh": "哪位羅馬皇帝在英格蘭北部建造城牆以阻擋皮克特人？",
      "options": [
        "Julius Caesar",
        "Emperor Claudius",
        "Emperor Hadrian",
        "Boudicca"
      ],
      "correctAnswers": [2],
      "explanation": "Emperor Hadrian ordered the construction of Hadrian's Wall to defend against the Picts, ancestors of the Scottish people.",
      "explanation_zh": "哈德良皇帝下令建造哈德良長城以抵禦皮克特人（蘇格蘭人的祖先）。",
      "category": "History",
      "isMultipleChoice": false
    },
    {
      "id": 1023,
      "question": "Which two universities compete in the annual rowing race on the River Thames?",
      "question_zh": "哪兩所大學在泰晤士河上參加年度賽艇比賽？",
      "options": [
        "The University of Oxford",
        "The University of Cambridge",
        "The University of Warwick",
        "The University of Manchester"
      ],
      "correctAnswers": [0, 1],
      "explanation": "Oxford and Cambridge Universities compete in a famous annual rowing race on the Thames.",
      "explanation_zh": "牛津大學和劍橋大學在泰晤士河上參加著名的年度賽艇比賽。",
      "category": "General Knowledge",
      "isMultipleChoice": true
    },
    {
      "id": 1024,
      "question": "Does the UK have a written constitution?",
      "question_zh": "英國有成文憲法嗎？",
      "options": [
        "Yes",
        "No"
      ],
      "correctAnswers": [1],
      "explanation": "No. The British constitution is not written in a single document, so it is described as unwritten.",
      "explanation_zh": "沒有。英國憲法沒有寫在單一文件中，因此被稱為不成文憲法。",
      "category": "Government",
      "isMultipleChoice": false
    }
  ],
  11: [
    {
      "id": 1101,
      "question": "Is St Helena considered part of the UK?",
      "question_zh": "聖赫勒拿島被視為英國的一部分嗎？",
      "options": [
        "Yes",
        "No"
      ],
      "correctAnswers": [1],
      "explanation": "No. British overseas territories like St Helena and the Falkland Islands are connected to the UK but are not part of it.",
      "explanation_zh": "不是。像聖赫勒拿島和福克蘭群島這樣的英國海外領土與英國有聯繫，但不是其一部分。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1102,
      "question": "Where is Theatreland located?",
      "question_zh": "劇院區位於哪裡？",
      "options": [
        "London's South End",
        "Docklands",
        "London's West End",
        "London's East End"
      ],
      "correctAnswers": [2],
      "explanation": "Theatreland is located in London's West End, which is famous for its many theatres.",
      "explanation_zh": "劇院區位於倫敦西區，以其眾多劇院而聞名。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1103,
      "question": "What currency is used in the UK?",
      "question_zh": "英國使用什麼貨幣？",
      "options": [
        "Dollar",
        "Pound Sterling",
        "Euro",
        "Peso"
      ],
      "correctAnswers": [1],
      "explanation": "The UK uses the pound sterling (£).",
      "explanation_zh": "英國使用英鎊（£）。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1104,
      "question": "What is another name for Diwali?",
      "question_zh": "排燈節的另一個名稱是什麼？",
      "options": [
        "Easter Monday",
        "Good Friday",
        "The Festival of Lights",
        "Ash Wednesday"
      ],
      "correctAnswers": [2],
      "explanation": "Diwali is also known as the Festival of Lights.",
      "explanation_zh": "排燈節也被稱為燈節。",
      "category": "Culture",
      "isMultipleChoice": false
    },
    {
      "id": 1105,
      "question": "What was the Enlightenment?",
      "question_zh": "什麼是啟蒙運動？",
      "options": [
        "A period of economic recovery after the Second World War",
        "A period when new ideas about politics, philosophy and science were developed",
        "A period of total peace in England",
        "A period when England became the largest empire the world had ever seen"
      ],
      "correctAnswers": [1],
      "explanation": "The Enlightenment was an 18th-century period when new ideas emerged in politics, philosophy, and science.",
      "explanation_zh": "啟蒙運動是 18 世紀的一個時期，當時政治、哲學和科學領域出現了新思想。",
      "category": "History",
      "isMultipleChoice": false
    },
    {
      "id": 1106,
      "question": "Which charity focuses on environmental issues?",
      "question_zh": "哪個慈善機構專注於環境問題？",
      "options": [
        "Crisis",
        "NSPCC",
        "Shelter",
        "Friends of the Earth"
      ],
      "correctAnswers": [3],
      "explanation": "Friends of the Earth is an environmental charity organization.",
      "explanation_zh": "地球之友是一個環保慈善組織。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1107,
      "question": "Which major air battle was fought between Germany and Britain in World War II?",
      "question_zh": "二戰期間德國和英國之間發生了哪場重大空戰？",
      "options": [
        "The Battle of Dunbar",
        "The Battle of Worcester",
        "The Battle of Britain",
        "The Battle of Marston Moor"
      ],
      "correctAnswers": [2],
      "explanation": "The Battle of Britain was a crucial air campaign during WWII.",
      "explanation_zh": "不列顛之戰是二戰期間一場關鍵的空中戰役。",
      "category": "History",
      "isMultipleChoice": false
    },
    {
      "id": 1108,
      "question": "What achievement is Margaret Thatcher known for?",
      "question_zh": "瑪格麗特·撒切爾以什麼成就而聞名？",
      "options": [
        "She was the founder of modern nursing",
        "She was the first woman Prime Minister of the UK",
        "She fought for the right to vote for women",
        "She set up the women's Franchise League"
      ],
      "correctAnswers": [1],
      "explanation": "Margaret Thatcher became the UK's first female Prime Minister.",
      "explanation_zh": "瑪格麗特·撒切爾成為英國第一位女首相。",
      "category": "History",
      "isMultipleChoice": false
    },
    {
      "id": 1109,
      "question": "Which two languages merged to form English?",
      "question_zh": "哪兩種語言合併形成了英語？",
      "options": [
        "Anglo-Saxon",
        "Norman French",
        "Proto-Celtic",
        "Latin"
      ],
      "correctAnswers": [0, 1],
      "explanation": "After the Norman Conquest, Anglo-Saxon (spoken by peasants) and Norman French (spoken by nobles) gradually combined to form English.",
      "explanation_zh": "諾曼征服後，盎格魯-撒克遜語（農民使用）和諾曼法語（貴族使用）逐漸合併形成英語。",
      "category": "History",
      "isMultipleChoice": true
    },
    {
      "id": 1110,
      "question": "Radio and TV coverage of political parties must be balanced, giving equal time to different viewpoints.",
      "question_zh": "廣播和電視對政黨的報導必須平衡，給予不同觀點平等的時間。",
      "options": [
        "True",
        "False"
      ],
      "correctAnswers": [0],
      "explanation": "This is correct. By law, political coverage must be balanced.",
      "explanation_zh": "這是正確的。根據法律，政治報導必須保持平衡。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1111,
      "question": "Which country sent the Spanish Armada?",
      "question_zh": "哪個國家派遣了西班牙無敵艦隊？",
      "options": [
        "South America",
        "France",
        "Italy",
        "Spain"
      ],
      "correctAnswers": [3],
      "explanation": "Spain sent the Armada in 1588 to conquer England and restore Catholicism, but it was defeated.",
      "explanation_zh": "西班牙在 1588 年派遣無敵艦隊征服英格蘭並恢復天主教，但被擊敗。",
      "category": "History",
      "isMultipleChoice": false
    },
    {
      "id": 1112,
      "question": "What is the name of the war memorial in Whitehall?",
      "question_zh": "白廳的戰爭紀念碑叫什麼名字？",
      "options": [
        "Cenotaph",
        "Dumfries",
        "The White Tower",
        "Royal Crescent"
      ],
      "correctAnswers": [0],
      "explanation": "The Cenotaph is the war memorial located in Whitehall.",
      "explanation_zh": "和平紀念碑是位於白廳的戰爭紀念碑。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1113,
      "question": "The UK government has never suspended the Northern Ireland Assembly.",
      "question_zh": "英國政府從未中止過北愛爾蘭議會。",
      "options": [
        "True",
        "False" 
      ],
      "correctAnswers": [1],
      "explanation": "This is incorrect. The Northern Ireland Assembly has been suspended several times.",
      "explanation_zh": "這是不正確的。北愛爾蘭議會已多次被中止。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1114,
      "question": "What type of church did Scotland establish in 1560?",
      "question_zh": "蘇格蘭在 1560 年建立了什麼類型的教會？",
      "options": [
        "A Catholic church",
        "A Protestant church"
      ],
      "correctAnswers": [1],
      "explanation": "In 1560, Scotland established a Protestant Church with elected leadership, though it was not a state church like in England.",
      "explanation_zh": "1560 年，蘇格蘭建立了一個由選舉產生領導層的新教教會，儘管它不像英格蘭那樣是國家教會。",
      "category": "History",
      "isMultipleChoice": false
    },
    {
      "id": 1115,
      "question": "When was the Domesday Book created?",
      "question_zh": "《末日審判書》是什麼時候創建的？",
      "options": [
        "After the Anglo-Saxon invasion",
        "After the Viking invasion",
        "After the Norman conquest",
        "After the last Roman invasion"
      ],
      "correctAnswers": [2],
      "explanation": "William the Conqueror commissioned the Domesday Book after the Norman Conquest to record towns, villages, landowners, and livestock.",
      "explanation_zh": "征服者威廉在諾曼征服後委託編纂《末日審判書》，以記錄城鎮、村莊、地主和牲畜。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1116,
      "question": "Which two areas cannot the Northern Ireland Assembly make decisions on?",
      "question_zh": "北愛爾蘭議會不能就哪兩個領域做出決定？",
      "options": [
        "Defence",
        "Education",
        "Immigration",
        "Agriculture"
      ],
      "correctAnswers": [0, 2],
      "explanation": "The Northern Ireland Assembly can decide on education, agriculture, environment, and health, but not immigration or defence.",
      "explanation_zh": "北愛爾蘭議會可以就教育、農業、環境和衛生做出決定，但不能就移民或國防做出決定。",
      "category": "General Knowledge",
      "isMultipleChoice": true
    },
    {
      "id": 1117,
      "question": "What are two ways to file a complaint about the police?",
      "question_zh": "投訴警察的兩種方式是什麼？",
      "options": [
        "Go to the Police station directly",
        "Write to your MP",
        "Write to the Chief Constable of the police force involved",
        "Write a complaint letter to the House of Commons"
      ],
      "correctAnswers": [0, 2],
      "explanation": "You can complain by visiting a police station or writing to the Chief Constable. Complaints can also be made to independent bodies like the Independent Police Complaints Commission.",
      "explanation_zh": "您可以通過訪問警察局或寫信給警察局長來投訴。投訴也可以向獨立機構（如獨立警察投訴委員會）提出。",
      "category": "General Knowledge",
      "isMultipleChoice": true
    },
    {
      "id": 1118,
      "question": "Which flower did William Wordsworth write a famous poem about?",
      "question_zh": "威廉·華茲華斯寫了一首關於哪種花的著名詩歌？",
      "options": [
        "Shamrock",
        "Rose",
        "Thistle",
        "Daffodil"
      ],
      "correctAnswers": [3],
      "explanation": "Wordsworth wrote the famous poem 'The Daffodils'.",
      "explanation_zh": "華茲華斯寫了著名的詩歌《水仙花》。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1119,
      "question": "When is St Andrew's Day?",
      "question_zh": "聖安德魯日是什麼時候？",
      "options": [
        "1st March",
        "17th April",
        "30th November",
        "31st December"
      ],
      "correctAnswers": [2],
      "explanation": "St Andrew's Day, Scotland's patron saint day, is celebrated on November 30th.",
      "explanation_zh": "聖安德魯日，蘇格蘭的守護神日，在 11 月 30 日慶祝。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1120,
      "question": "Who designed the new St Paul's Cathedral after the Great Fire of 1666?",
      "question_zh": "1666 年大火後誰設計了新的聖保羅大教堂？",
      "options": [
        "Dame Zaha Hadid",
        "Sir Christopher Wren",
        "Robert Adam",
        "Sir Norman Foster"
      ],
      "correctAnswers": [1],
      "explanation": "Sir Christopher Wren designed the new St Paul's Cathedral that was built after the Great Fire destroyed the original.",
      "explanation_zh": "克里斯托弗·雷恩爵士設計了在大火摧毀原建築後建造的新聖保羅大教堂。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1121,
      "question": "In which period were the first British coins made?",
      "question_zh": "英國第一批硬幣是在哪個時期鑄造的？",
      "options": [
        "The Middle Ages",
        "The Bronze Age",
        "The Iron Age",
        "The Stone Age"
      ],
      "correctAnswers": [2],
      "explanation": "The first coins minted in Britain were made during the Iron Age.",
      "explanation_zh": "英國鑄造的第一批硬幣是在鐵器時代製作的。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1122,
      "question": "What was Emmeline Pankhurst known as?",
      "question_zh": "艾米琳·潘克赫斯特被稱為什麼？",
      "options": [
        "A suffragette",
        "A scientist",
        "A nurse",
        "A doctor"
      ],
      "correctAnswers": [0],
      "explanation": "Emmeline Pankhurst founded the Women's Social and Political Union in 1903, becoming a leading suffragette in the fight for women's voting rights.",
      "explanation_zh": "艾米琳·潘克赫斯特於 1903 年創立了婦女社會和政治聯盟，成為爭取女性投票權的主要婦女參政論者。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1123,
      "question": "Which country was Britain's opponent in the Crimean War?",
      "question_zh": "英國在克里米亞戰爭中的對手是哪個國家？",
      "options": [
        "Germany",
        "Russia",
        "Turkey",
        "France"
      ],
      "correctAnswers": [1],
      "explanation": "Britain fought alongside Turkey and France against Russia in the Crimean War from 1853 to 1856.",
      "explanation_zh": "1853 年至 1856 年，英國與土耳其和法國並肩對抗俄羅斯進行克里米亞戰爭。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1124,
      "question": "What is the legal age to purchase alcohol in the UK?",
      "question_zh": "在英國購買酒精飲料的法定年齡是多少？",
      "options": [
        "20",
        "17",
        "19",
        "18"
      ],
      "correctAnswers": [3],
      "explanation": "You must be 18 or older to buy alcohol in the UK. It's illegal to sell alcohol to anyone under 18 or to buy it for them.",
      "explanation_zh": "您必須年滿 18 歲才能在英國購買酒精飲料。向 18 歲以下的人出售酒精飲料或為他們購買酒精飲料是非法的。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    }
  ],
  12:[
    {
      "id": 1201,
      "question": "Which of these is a Crown Dependency but not part of the UK?",
      "question_zh": "以下哪個是皇家屬地但不是英國的一部分？",
      "options": [
        "Anglesey",
        "Isle of Wight",
        "Isle of Man",
        "Shetland"
      ],
      "correctAnswers": [2],
      "explanation": "The Isle of Man and the Channel Islands are Crown dependencies - they're closely linked to the UK but have their own governments and are not part of it.",
      "explanation_zh": "馬恩島和海峽群島是皇家屬地——它們與英國聯繫密切，但有自己的政府，不是其一部分。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1202,
      "question": "Is the BBC controlled by the government?",
      "question_zh": "BBC 是否由政府控制？",
      "options": [
        "Yes",
        "No"
      ],
      "correctAnswers": [1],
      "explanation": "No. The BBC is the world's largest broadcaster and the only fully state-funded media organization that operates independently of government.",
      "explanation_zh": "不。BBC 是世界上最大的廣播公司，也是唯一一家完全由國家資助但獨立於政府運作的媒體組織。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1203,
      "question": "How many elected members are in the Northern Ireland Assembly?",
      "question_zh": "北愛爾蘭議會有多少名民選議員？",
      "options": [
        "108",
        "12",
        "90",
        "60"
      ],
      "correctAnswers": [2],
      "explanation": "The Northern Ireland Assembly has 90 elected members called MLAs (Members of the Legislative Assembly).",
      "explanation_zh": "北愛爾蘭議會有 90 名民選議員，稱為 MLAs（立法議會成員）。",
      "category": "Government",
      "isMultipleChoice": false
    },
    {
      "id": 1204,
      "question": "Who commanded the British fleet at the Battle of Trafalgar?",
      "question_zh": "誰指揮了特拉法加海戰中的英國艦隊？",
      "options": [
        "The Duke of Wellington",
        "Robert the Bruce",
        "Oliver Cromwell",
        "Admiral Nelson"
      ],
      "correctAnswers": [3],
      "explanation": "Admiral Nelson commanded the British fleet at Trafalgar and died in the battle.",
      "explanation_zh": "納爾遜海軍上將指揮了特拉法加的英國艦隊，並在戰鬥中陣亡。",
      "category": "History",
      "isMultipleChoice": false
    },
    {
      "id": 1205,
      "question": "What appeared on the first coins minted in Britain during the Iron Age?",
      "question_zh": "鐵器時代在英國鑄造的第一批硬幣上出現了什麼？",
      "options": [
        "The names of Iron Age kings",
        "The names of animals",
        "The names of Iron Age Gods",
        "The names of trees"
      ],
      "correctAnswers": [0],
      "explanation": "The first British coins were made during the Iron Age, and some were inscribed with the names of Iron Age kings.",
      "explanation_zh": "英國第一批硬幣是在鐵器時代製作的，其中一些刻有鐵器時代國王的名字。",
      "category": "History",
      "isMultipleChoice": false
    },
    {
      "id": 1206,
      "question": "UK towns, cities, and rural areas are governed by government-appointed officials.",
      "question_zh": "英國的城鎮、城市和農村地區由政府任命的官員管理。",
      "options": [
        "True",
        "False"
      ],
      "correctAnswers": [1],
      "explanation": "This is incorrect. Towns, cities, and rural areas in the UK are governed by democratically elected councils, often called local authorities.",
      "explanation_zh": "這是不正確的。英國的城鎮、城市和農村地區由民主選舉產生的議會（通常稱為地方當局）管理。",
      "category": "Government",
      "isMultipleChoice": false
    },
    {
      "id": 1207,
      "question": "In which city are the Tate galleries located?",
      "question_zh": "泰特美術館位於哪個城市？",
      "options": [
        "Belfast",
        "Glasgow",
        "London",
        "Cardiff"
      ],
      "correctAnswers": [2],
      "explanation": "Both Tate Britain and Tate Modern are located in London.",
      "explanation_zh": "泰特英國美術館和泰特現代美術館都位於倫敦。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1208,
      "question": "What is King James I's Bible translation called?",
      "question_zh": "詹姆斯一世國王的聖經翻譯叫什麼？",
      "options": [
        "Authorised version",
        "Unique version",
        "Approved version",
        "Reformed version"
      ],
      "correctAnswers": [0],
      "explanation": "King James I commissioned a new English Bible translation known as the 'King James Version' or 'Authorised Version'.",
      "explanation_zh": "詹姆斯一世國王委託製作了一個新的英語聖經翻譯，稱為「詹姆斯國王版」或「授權版」。",
      "category": "History",
      "isMultipleChoice": false
    },
    {
      "id": 1209,
      "question": "What was the 1960s known for in Britain?",
      "question_zh": "1960 年代在英國以什麼而聞名？",
      "options": [
        "A blockage of social laws",
        "A growth in British fashion and pop music",
        "A downgrade in manufacturing",
        "A shortage of water"
      ],
      "correctAnswers": [1],
      "explanation": "The 1960s, known as the 'Swinging Sixties', was a period of major social change with growth in British fashion, cinema, and popular music.",
      "explanation_zh": "1960 年代被稱為「搖擺的六十年代」，是一個重大社會變革時期，英國時尚、電影和流行音樂蓬勃發展。",
      "category": "History",
      "isMultipleChoice": false
    },
    {
      "id": 1210,
      "question": "From which country did the Huguenot refugees come between 1680 and 1720?",
      "question_zh": "1680 年至 1720 年間，胡格諾派難民來自哪個國家？",
      "options": [
        "India",
        "Germany",
        "Pakistan",
        "France"
      ],
      "correctAnswers": [3],
      "explanation": "The Huguenots were refugees who came from France between 1680 and 1720.",
      "explanation_zh": "胡格諾派是 1680 年至 1720 年間從法國來的難民。",
      "category": "History",
      "isMultipleChoice": false
    },
    {
      "id": 1211,
      "question": "What is the UK's most famous tennis tournament?",
      "question_zh": "英國最著名的網球錦標賽是什麼？",
      "options": [
        "The Aegon Championships",
        "Wimbledon",
        "The Queen's Club Championships",
        "Roland Garros"
      ],
      "correctAnswers": [1],
      "explanation": "The Wimbledon Championships, held annually at the All England Lawn Tennis and Croquet Club, is the UK's most famous tennis tournament.",
      "explanation_zh": "每年在全英草地網球和槌球俱樂部舉行的溫布爾登錦標賽是英國最著名的網球錦標賽。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1212,
      "question": "MPs can only be contacted at their House of Commons office.",
      "question_zh": "只能在下議院辦公室聯繫議員。",
      "options": [
        "True",
        "False"
      ],
      "correctAnswers": [1],
      "explanation": "This is incorrect. You can contact MPs at their constituency office or House of Commons office by letter or phone. Many also hold local surgeries for in-person meetings.",
      "explanation_zh": "這是不正確的。您可以通過信件或電話在選區辦公室或下議院辦公室聯繫議員。許多人還舉行當地諮詢會進行面對面會議。",
      "category": "Government",
      "isMultipleChoice": false
    },
    {
      "id": 1213,
      "question": "On which day do newspapers and TV broadcast jokes and pranks?",
      "question_zh": "報紙和電視在哪一天播放笑話和惡作劇？",
      "options": [
        "April Fool's Day",
        "Valentine's Day",
        "Boxing Day",
        "Halloween"
      ],
      "correctAnswers": [0],
      "explanation": "April Fool's Day (April 1st) is when people play jokes on each other until midday, and media outlets often publish joke stories.",
      "explanation_zh": "愚人節（4 月 1 日）是人們互相開玩笑直到中午的日子，媒體通常會發布笑話故事。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1214,
      "question": "Which Scottish king won the Battle of Bannockburn against England?",
      "question_zh": "哪位蘇格蘭國王在班諾克本戰役中戰勝了英格蘭？",
      "options": [
        "Admiral Nelson",
        "King James I",
        "Robert the Bruce",
        "King Charles I"
      ],
      "correctAnswers": [2],
      "explanation": "In 1314, Robert the Bruce led the Scots to victory over England at the Battle of Bannockburn, keeping Scotland unconquered.",
      "explanation_zh": "1314 年，羅伯特·布魯斯率領蘇格蘭人在班諾克本戰役中戰勝英格蘭，使蘇格蘭保持未被征服。",
      "category": "History",
      "isMultipleChoice": false
    },
    {
      "id": 1215,
      "question": "Who created the World Wide Web?",
      "question_zh": "誰創建了萬維網？",
      "options": [
        "Sir Robert Edwards",
        "Sir Ian Wilmot",
        "Sir Tim Berners-Lee",
        "Sir Peter Mansfield"
      ],
      "correctAnswers": [2],
      "explanation": "Sir Tim Berners-Lee invented the World Wide Web.",
      "explanation_zh": "蒂姆·伯納斯·李爵士發明了萬維網。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1216,
      "question": "How are civil servants selected and what is their political position?",
      "question_zh": "公務員如何選拔，他們的政治立場是什麼？",
      "options": [
        "They are chosen randomly and are politically neutral",
        "They are chosen randomly and form part of the Conservative party",
        "They are chosen on merit and form part of the Liberal Democrats party",
        "They are chosen on merit and are politically neutral"
      ],
      "correctAnswers": [3],
      "explanation": "Civil servants are selected based on merit and remain politically neutral - they are not political appointees.",
      "explanation_zh": "公務員根據績效選拔，保持政治中立——他們不是政治任命者。",
      "category": "Government",
      "isMultipleChoice": false
    },
    {
      "id": 1217,
      "question": "What does the Dunkirk spirit refer to?",
      "question_zh": "「敦刻爾克精神」指的是什麼？",
      "options": [
        "When the German air force bombed London and other British cities at night-time",
        "The evacuation of Allied soldiers from France during World War II",
        "When new social classes appeared after the Black Death",
        "The period when many refugees called Huguenots came from France"
      ],
      "correctAnswers": [1],
      "explanation": "The Dunkirk spirit refers to the WWII evacuation of over 300,000 British and French soldiers from Dunkirk beaches, aided by civilian volunteers in small boats.",
      "explanation_zh": "敦刻爾克精神指的是二戰期間從敦刻爾克海灘撤離超過 30 萬名英國和法國士兵，由駕駛小船的平民志願者協助。",
      "category": "History",
      "isMultipleChoice": false
    },
    {
      "id": 1218,
      "question": "You must be at least 21 to serve on a jury.",
      "question_zh": "您必須至少 21 歲才能擔任陪審員。",
      "options": [
        "True",
        "False"
      ],
      "correctAnswers": [1],
      "explanation": "This is incorrect. Anyone on the electoral register aged 18 to 70 can serve on a jury.",
      "explanation_zh": "這是不正確的。任何年齡在 18 至 70 歲之間且在選民登記冊上的人都可以擔任陪審員。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1219,
      "question": "To become a UK permanent resident or citizen, you should (choose TWO):",
      "question_zh": "要成為英國永久居民或公民，您應該（選擇兩個）：",
      "options": [
        "Respect the rights of others, including their right to their own opinions",
        "Marry a British citizen",
        "Look after yourself and your family",
        "Buy a house in the UK"
      ],
      "correctAnswers": [0, 2],
      "explanation": "To be a UK permanent resident or citizen, you should respect others' rights including their opinions, care for yourself and your family, obey the law, treat others fairly, and protect your local environment.",
      "explanation_zh": "要成為英國永久居民或公民，您應該尊重他人的權利（包括他們的意見）、照顧自己和家人、遵守法律、公平對待他人並保護當地環境。",
      "category": "General Knowledge",
      "isMultipleChoice": true
    },
    {
      "id": 1220,
      "question": "Which major sporting event did the UK host in 2012?",
      "question_zh": "英國在 2012 年主辦了哪項重大體育賽事？",
      "options": [
        "The Eurocup Basketball",
        "The Football World Cup",
        "The Rugby World Cup",
        "The Olympic games"
      ],
      "correctAnswers": [3],
      "explanation": "The UK hosted the Olympic Games in 2012, having previously hosted them in 1908 and 1948.",
      "explanation_zh": "英國在 2012 年主辦了奧運會，此前曾在 1908 年和 1948 年主辦過奧運會。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1221,
      "question": "Because Charles I believed in the 'Divine Right of Kings', he tried to:",
      "question_zh": "因為查理一世相信「君權神授」，他試圖：",
      "options": [
        "To restore Catholicism in Britain",
        "To raise money for the Parliament",
        "To rule without the Parliament",
        "To rule with the approval of the Parliament"
      ],
      "correctAnswers": [2],
      "explanation": "Charles I believed in the 'Divine Right of Kings' - that God appointed him to rule. He thought he should govern without Parliament's approval and tried to rule without it.",
      "explanation_zh": "查理一世相信「君權神授」——上帝任命他統治。他認為他應該在沒有議會批准的情況下統治，並試圖在沒有議會的情況下統治。",
      "category": "History",
      "isMultipleChoice": false
    },
    {
      "id": 1222,
      "question": "What is the Union Jack?",
      "question_zh": "什麼是英國國旗？",
      "options": [
        "The Flag of the United Kingdom",
        "A trade union to protect workers rights",
        "The Flag of the Commonwealth",
        "The shield used by British Knights"
      ],
      "correctAnswers": [0],
      "explanation": "The Union Jack is another name for the Union Flag, the national flag of the United Kingdom.",
      "explanation_zh": "英國國旗是聯合旗的另一個名稱，即英國的國旗。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1223,
      "question": "Who was voted the greatest Briton of all time in a 2002 poll?",
      "question_zh": "在 2002 年的民意調查中，誰被選為有史以來最偉大的英國人？",
      "options": [
        "Clement Attlee",
        "Admiral Nelson",
        "Winston Churchill",
        "Mo Farah"
      ],
      "correctAnswers": [2],
      "explanation": "In a 2002 public poll, Winston Churchill was voted the greatest Briton of all time.",
      "explanation_zh": "在 2002 年的公眾投票中，溫斯頓·丘吉爾被選為有史以來最偉大的英國人。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1224,
      "question": "Which statement is correct:",
      "question_zh": "哪個陳述是正確的：",
      "options": [
        "Women in Britain today make up about half of the workforce.",
        "Women in Britain today make up about one quarter of the workforce."
      ],
      "correctAnswers": [0],
      "explanation": "Women make up approximately half of the British workforce today.",
      "explanation_zh": "如今，女性約佔英國勞動力的一半。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    }
  ],
  13: [
    {
      "id": 1301,
      "question": "When is St George's Day celebrated?",
      "question_zh": "聖喬治日是什麼時候慶祝？",
      "options": [
        "1st March",
        "30th November",
        "23rd April",
        "17th March"
      ],
      "correctAnswers": [2],
      "explanation": "St George's Day, the patron saint day of England, is celebrated on April 23rd.",
      "explanation_zh": "聖喬治日，英格蘭的守護神日，在 4 月 23 日慶祝。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1302,
      "question": "What is England's largest national park?",
      "question_zh": "英格蘭最大的國家公園是什麼？",
      "options": [
        "The Giant's Causeway",
        "Snowdonia",
        "Loch Lomond and the Trossachs National Park",
        "The Lake District"
      ],
      "correctAnswers": [3],
      "explanation": "The Lake District is the largest national park in England.",
      "explanation_zh": "湖區是英格蘭最大的國家公園。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1303,
      "question": "Which invaders did the tribal leader Boudicca fight against?",
      "question_zh": "部落首領布迪卡與哪些入侵者作戰？",
      "options": [
        "The Anglo-Saxons",
        "The Romans",
        "The Vikings",
        "The Normans"
      ],
      "correctAnswers": [1],
      "explanation": "Boudicca, queen of the Iceni tribe, was one of the leaders who fought against the Romans.",
      "explanation_zh": "艾西尼部落的女王布迪卡是對抗羅馬人的領袖之一。",
      "category": "History",
      "isMultipleChoice": false
    },
    {
      "id": 1304,
      "question": "Which poem tells the story of pilgrims traveling to Canterbury?",
      "question_zh": "哪首詩講述了朝聖者前往坎特伯雷的故事？",
      "options": [
        "The Canterbury Tales",
        "Great Expectations",
        "A Midsummer Night's dream",
        "All the world's a stage"
      ],
      "correctAnswers": [0],
      "explanation": "Geoffrey Chaucer wrote The Canterbury Tales, a collection of poems about pilgrims traveling to Canterbury and the stories they told along the way.",
      "explanation_zh": "杰弗裡·喬叟創作了《坎特伯雷故事集》，這是一部關於前往坎特伯雷的朝聖者以及他們沿途講述的故事的詩集。",
      "category": "Culture",
      "isMultipleChoice": false
    },
    {
      "id": 1305,
      "question": "What are public holidays in the UK called?",
      "question_zh": "英國的公眾假期叫什麼？",
      "options": [
        "Bank Holidays",
        "Summer Holidays",
        "Business Holidays",
        "Workers Holidays"
      ],
      "correctAnswers": [0],
      "explanation": "Public holidays in the UK are called bank holidays, when banks and many businesses close for the day.",
      "explanation_zh": "英國的公眾假期稱為銀行假期，銀行和許多企業在這一天關閉。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1306,
      "question": "How did Charles II escape to Europe after the Civil War?",
      "question_zh": "查理二世在內戰後如何逃往歐洲？",
      "options": [
        "Swimming",
        "Riding a horse",
        "Hiding in an oak tree",
        "Hiding in a farmer's house"
      ],
      "correctAnswers": [2],
      "explanation": "Charles II escaped from Worcester, famously hiding in an oak tree during his escape, before eventually fleeing to Europe.",
      "explanation_zh": "查理二世從伍斯特逃脫，在逃亡期間躲在一棵橡樹中，最終逃往歐洲。",
      "category": "History",
      "isMultipleChoice": false
    },
    {
      "id": 1307,
      "question": "Which king united the Anglo-Saxon kingdoms and defeated the Vikings?",
      "question_zh": "哪位國王統一了盎格魯-撒克遜王國並擊敗了維京人？",
      "options": [
        "King Arthur",
        "Edward I of England",
        "King Alfred the Great",
        "Harold"
      ],
      "correctAnswers": [2],
      "explanation": "King Alfred the Great united the Anglo-Saxon kingdoms in England and defeated the Vikings.",
      "explanation_zh": "阿爾弗雷德大帝統一了英格蘭的盎格魯-撒克遜王國並擊敗了維京人。",
      "category": "History",
      "isMultipleChoice": false
    },
    {
      "id": 1308,
      "question": "What was William Caxton known for?",
      "question_zh": "威廉·卡克斯頓以什麼聞名？",
      "options": [
        "The inventor of the television",
        "The first person in England to print books using a printing press",
        "A poet who wrote about a group of people going to Canterbury on a pilgrimage",
        "The first person to sail singlehanded around the world"
      ],
      "correctAnswers": [1],
      "explanation": "William Caxton was the first person in England to use a printing press to print books.",
      "explanation_zh": "威廉·卡克斯頓是英格蘭第一個使用印刷機印刷書籍的人。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1309,
      "question": "Where do the Beefeaters work as tour guides?",
      "question_zh": "禦林軍在哪裡擔任導遊？",
      "options": [
        "The Tower of London",
        "The Big Ben",
        "The Houses of the Parliament",
        "The O2"
      ],
      "correctAnswers": [0],
      "explanation": "The Beefeaters (Yeoman Warders) work as tour guides at the Tower of London.",
      "explanation_zh": "禦林軍（倫敦塔衛兵）在倫敦塔擔任導遊。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1310,
      "question": "Which Scottish region supported Bonnie Prince Charlie during the clan rebellion?",
      "question_zh": "在氏族叛亂期間，蘇格蘭哪個地區支持邦妮王子查理？",
      "options": [
        "Edinburgh",
        "Galloway",
        "Glasgow",
        "The Highlands"
      ],
      "correctAnswers": [3],
      "explanation": "Charles Edward Stuart (Bonnie Prince Charlie) was supported by clansmen from the Scottish Highlands.",
      "explanation_zh": "查爾斯·愛德華·斯圖爾特（邦妮王子查理）得到了來自蘇格蘭高地的氏族成員的支持。",
      "category": "History",
      "isMultipleChoice": false
    },
    {
      "id": 1311,
      "question": "What was Elizabeth I's religion?",
      "question_zh": "伊麗莎白一世的宗教是什麼？",
      "options": [
        "She was a Protestant",
        "She was a Catholic"
      ],
      "correctAnswers": [0],
      "explanation": "Elizabeth I was a Protestant.",
      "explanation_zh": "伊麗莎白一世是新教徒。",
      "category": "History",
      "isMultipleChoice": false
    },
    {
      "id": 1312,
      "question": "Which actor became famous for playing a tramp in silent films?",
      "question_zh": "哪位演員因在無聲電影中扮演流浪漢而出名？",
      "options": [
        "Richard Burton",
        "David Niven",
        "Charlie Chaplin",
        "Sir Rex Harrison"
      ],
      "correctAnswers": [2],
      "explanation": "Charlie Chaplin became famous for his iconic tramp character in silent movies.",
      "explanation_zh": "查理·卓別林因其在無聲電影中的標誌性流浪漢角色而出名。",
      "category": "Culture",
      "isMultipleChoice": false
    },
    {
      "id": 1313,
      "question": "Which military force fought in the Battle of Britain?",
      "question_zh": "哪支軍事力量參加了不列顛之戰？",
      "options": [
        "The Naval Service",
        "The Police Force",
        "The Royal Air Force",
        "The Royal Navy"
      ],
      "correctAnswers": [2],
      "explanation": "The Royal Air Force (RAF) fought in the Battle of Britain.",
      "explanation_zh": "英國皇家空軍（RAF）參加了不列顛之戰。",
      "category": "History",
      "isMultipleChoice": false
    },
    {
      "id": 1314,
      "question": "You must be 21 to vote in a UK general election.",
      "question_zh": "您必須年滿 21 歲才能在英國大選中投票。",
      "options": [
        "True",
        "False"
      ],
      "correctAnswers": [1],
      "explanation": "This is incorrect. The voting age is 18, set in 1969. With few exceptions, all UK-born and naturalized adult citizens can vote.",
      "explanation_zh": "這是不正確的。投票年齡為 18 歲，於 1969 年設定。除少數例外，所有在英國出生和入籍的成年公民都可以投票。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1315,
      "question": "Which poet was known for being inspired by nature?",
      "question_zh": "哪位詩人以受大自然啟發而聞名？",
      "options": [
        "William Wordsworth",
        "Siegfried Sassoon",
        "Wilfred Owen",
        "John Masefield"
      ],
      "correctAnswers": [0],
      "explanation": "William Wordsworth and other British poets were inspired by nature in their work.",
      "explanation_zh": "威廉·華茲華斯和其他英國詩人在他們的作品中受到大自然的啟發。",
      "category": "Culture",
      "isMultipleChoice": false
    },
    {
      "id": 1316,
      "question": "Which nation did Britain fight at the Battle of Waterloo?",
      "question_zh": "英國在滑鐵盧戰役中與哪個國家作戰？",
      "options": [
        "Spain",
        "Italy",
        "France",
        "Germany"
      ],
      "correctAnswers": [2],
      "explanation": "In 1815, the Duke of Wellington defeated Emperor Napoleon of France at the Battle of Waterloo, ending the French Wars.",
      "explanation_zh": "1815 年，威靈頓公爵在滑鐵盧戰役中擊敗了法國的拿破崙皇帝，結束了法國戰爭。",
      "category": "History",
      "isMultipleChoice": false
    },
    {
      "id": 1317,
      "question": "What was William Wilberforce's profession?",
      "question_zh": "威廉·威爾伯福斯的職業是什麼？",
      "options": [
        "A musician",
        "A sportsman",
        "A politician",
        "A poet"
      ],
      "correctAnswers": [2],
      "explanation": "William Wilberforce was a politician and Member of Parliament who, as an evangelical Christian and abolitionist, helped turn public opinion against the slave trade.",
      "explanation_zh": "威廉·威爾伯福斯是一位政治家和議會議員，作為福音派基督徒和廢奴主義者，他幫助扭轉了公眾對奴隸貿易的看法。",
      "category": "History",
      "isMultipleChoice": false
    },
    {
      "id": 1318,
      "question": "Who is the spiritual leader of the Church of England?",
      "question_zh": "英國國教會的精神領袖是誰？",
      "options": [
        "The Archbishop of Manchester",
        "The Archbishop of London",
        "The Archbishop of Birmingham",
        "The Archbishop of Canterbury"
      ],
      "correctAnswers": [3],
      "explanation": "The Archbishop of Canterbury is the spiritual leader of the Church of England.",
      "explanation_zh": "坎特伯雷大主教是英國國教會的精神領袖。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1319,
      "question": "Which country's king was James I before he became King of England?",
      "question_zh": "詹姆斯一世在成為英格蘭國王之前是哪個國家的國王？",
      "options": [
        "France",
        "Scotland",
        "Ireland",
        "Wales"
      ],
      "correctAnswers": [1],
      "explanation": "James I was King James VI of Scotland before becoming King of England, Wales, and Ireland when Elizabeth I died.",
      "explanation_zh": "詹姆斯一世在伊麗莎白一世去世後成為英格蘭、威爾士和愛爾蘭國王之前是蘇格蘭的詹姆斯六世國王。",
      "category": "History",
      "isMultipleChoice": false
    },
    {
      "id": 1320,
      "question": "Which statement is correct about UK shop opening hours?",
      "question_zh": "關於英國商店營業時間，哪個陳述是正確的？",
      "options": [
        "Most shops in the UK open seven days a week.",
        "All shops in the UK close on Sundays and bank holidays."
      ],
      "correctAnswers": [0],
      "explanation": "Most UK shops open seven days a week, though trading hours on Sundays and public holidays are usually reduced.",
      "explanation_zh": "大多數英國商店每週營業七天，但周日和公眾假期的營業時間通常會縮短。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1321,
      "question": "Which country sent an Armada to England in 1588?",
      "question_zh": "1588 年哪個國家向英格蘭派遣了無敵艦隊？",
      "options": [
        "Italy",
        "Germany",
        "France",
        "Spain"
      ],
      "correctAnswers": [3],
      "explanation": "Spain sent the Armada in 1588 to conquer England and restore Catholicism, but it was defeated by the English.",
      "explanation_zh": "西班牙在 1588 年派遣無敵艦隊征服英格蘭並恢復天主教，但被英國人擊敗。",
      "category": "History",
      "isMultipleChoice": false
    },
    {
      "id": 1322,
      "question": "Where can you find the National Horseracing Museum?",
      "question_zh": "國家賽馬博物館在哪裡？",
      "options": [
        "Aintree near Liverpool",
        "St Andrews, Scotland",
        "Newmarket, Suffolk",
        "Edinburgh, Scotland"
      ],
      "correctAnswers": [2],
      "explanation": "The National Horseracing Museum is located in Newmarket, Suffolk.",
      "explanation_zh": "國家賽馬博物館位於薩福克郡的紐馬基特。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1323,
      "question": "Which castle is in Scotland?",
      "question_zh": "哪座城堡在蘇格蘭？",
      "options": [
        "Crathes Castle",
        "Powis Castle",
        "Bodiam Castle",
        "Caernarfon Castle"
      ],
      "correctAnswers": [0],
      "explanation": "Crathes Castle is located in Scotland.",
      "explanation_zh": "克拉斯城堡位於蘇格蘭。",
      "category": "History",
      "isMultipleChoice": false
    },
    {
      "id": 1324,
      "question": "Who was a renowned Art Deco ceramic designer?",
      "question_zh": "誰是著名的裝飾藝術陶瓷設計師？",
      "options": [
        "Mary Quant",
        "Thomas Chippendale",
        "Clarice Cliff",
        "Alexander McQueen"
      ],
      "correctAnswers": [2],
      "explanation": "Clarice Cliff was a famous Art Deco ceramic designer, among Britain's many great designers spanning from Thomas Chippendale to Sir Terence Conran.",
      "explanation_zh": "克拉麗斯·克里夫是一位著名的裝飾藝術陶瓷設計師，是從托馬斯·奇彭代爾到特倫斯·康蘭爵士等英國眾多偉大設計師之一。",
      "category": "Culture",
      "isMultipleChoice": false
    }
  ],
  14: [
    {
        "id": 1401,
        "question": "When is St Patrick’s day celebrated?",
        "question_zh": "聖帕特里克節什麼時候慶祝？",
        "options": [
            "23rd April",
            "30th November",
            "1st April",
            "17th March"
        ],
        "correctAnswers": [3],
        "explanation": "St Patrick’s day, patron of Northern Ireland is celebrated on the 17th of March .",
        "explanation_zh": "3 月 17 日是北愛爾蘭守護神聖帕特里克節。",
        "category": "Culture",
        "isMultipleChoice": false
    },
    {
        "id": 1402,
        "question": "How are the members of the Northern Ireland Parliament elected?",
        "question_zh": "北愛爾蘭議會議員是如何選舉產生的？",
        "options": [
            "By a system of proportional representation",
            "Using a system of ranked voting",
            "Using the first past the post system",
            "Using a runoff system"
        ],
        "correctAnswers": [0],
        "explanation": "The Northern Ireland Assembly has 90 elected members, known as MLAs (members of the Legislative Assembly). They are elected with a form of proportional representation .",
        "explanation_zh": "北愛爾蘭議會有 90 名民選議員，稱為 MLA（立法議會成員）。他們以比例代表制的形式選舉產生。",
        "category": "General Knowledge",
        "isMultipleChoice": false
    },
    {
        "id": 1403,
        "question": "Who was the first British Prime Minister?",
        "question_zh": "英國第一任首相是誰？",
        "options": [
            "Winston Churchill",
            "Earl of Wilmington",
            "Henry Pelham",
            "Sir Robert Walpole"
        ],
        "correctAnswers": [3],
        "explanation": "The most important minister in Parliament became known as the Prime Minister. The first man to be called this was Sir Robert Walpole , who was Prime Minister from 1721 to 1742.",
        "explanation_zh": "議會中最重要的部長被稱為總理。第一個被稱為這個名字的人是羅伯特·沃波爾爵士 (Sir Robert Walpole)，他於 1721 年至 1742 年擔任首相。",
        "category": "General Knowledge",
        "isMultipleChoice": false
    },
    {
        "id": 1404,
        "question": "Which of the following actresses has not won an Oscar?",
        "question_zh": "以下哪一位女演員沒有獲得過奧斯卡獎？",
        "options": [
            "Tilda Swinton",
            "Emily Watson",
            "Dame Judi Dench",
            "Kate Winslet"
        ],
        "correctAnswers": [1],
        "explanation": "British actors to have won Oscars include Colin Firth, Sir Antony Hopkins, Dame Judi Dench, Kate Winslet and Tilda Swinton. Emily Watson has not won an Oscar yet .",
        "explanation_zh": "獲得奧斯卡獎的英國演員包括科林·費爾斯、安東尼·霍普金斯爵士、朱迪·丹奇夫人、凱特·溫斯萊特和蒂爾達·斯文頓。艾米麗·沃森尚未獲得奧斯卡獎。",
        "category": "General Knowledge",
        "isMultipleChoice": false
    },
    {
        "id": 1405,
        "question": "During the Enlightenment, Adam Smith developed ideas about:",
        "question_zh": "在啟蒙運動期間，亞當·斯密提出了以下觀點：",
        "options": [
            "Physics",
            "Economics",
            "Science",
            "Engineering"
        ],
        "correctAnswers": [1],
        "explanation": "During ’the Enlightenment’ Adam Smith developed ideas about economics which are still referred to today.",
        "explanation_zh": "在“啟蒙運動”期間，亞當·斯密提出了至今仍被提及的經濟學思想。",
        "category": "General Knowledge",
        "isMultipleChoice": false
    },
    {
        "id": 1406,
        "question": "Who died at the Battle of Trafalgar?",
        "question_zh": "誰在特拉法加海戰中陣亡？",
        "options": [
            "Admiral Nelson",
            "Henry VIII",
            "Oliver Cromwell",
            "Napoleon"
        ],
        "correctAnswers": [0],
        "explanation": "Admiral Nelson was in charge of the British fleet at Trafalgar and was killed in the battle.",
        "explanation_zh": "納爾遜海軍上將在特拉法加指揮英國艦隊，並在戰鬥中陣亡。",
        "category": "History",
        "isMultipleChoice": false
    },
    {
        "id": 1407,
        "question": "When is Hogmanay celebrated?",
        "question_zh": "什麼時候慶祝除夕節？",
        "options": [
            "25th of December",
            "2nd of January",
            "1st of January",
            "31st of December"
        ],
        "correctAnswers": [3],
        "explanation": "In Scotland, the 31st of December is called Hogmanay.",
        "explanation_zh": "在蘇格蘭，12 月 31 日被稱為 Hogmanay。",
        "category": "General Knowledge",
        "isMultipleChoice": false
    },
    {
        "id": 1408,
        "question": "Proceedings in Parliament are broadcast on television and published in official reports known as:",
        "question_zh": "議會會議記錄在電視上播出並以官方報告形式發布，即：",
        "options": [
            "Canvassing",
            "Hansard",
            "Cabinets",
            "Domesday Book"
        ],
        "correctAnswers": [1],
        "explanation": "Proceedings in Parliament are broadcast on television and published in official reports called Hansard .",
        "explanation_zh": "議會的會議記錄在電視上播出，並在名為《議事錄》的官方報告中發表。",
        "category": "General Knowledge",
        "isMultipleChoice": false
    },
    {
        "id": 1409,
        "question": "Which of the following is a rugby competition?",
        "question_zh": "以下哪項是橄欖球比賽？",
        "options": [
            "The Scottish Grand National",
            "The Wimbledon Championships",
            "The Ashes",
            "The Six Nations Championship"
        ],
        "correctAnswers": [3],
        "explanation": "The most famous rugby union competition is the Six Nations Championship between England, Ireland, Scotland, Wales, France and Italy.",
        "explanation_zh": "最著名的橄欖球聯盟比賽是英格蘭、愛爾蘭、蘇格蘭、威爾士、法國和意大利之間的六國錦標賽。",
        "category": "General Knowledge",
        "isMultipleChoice": false
    },
    {
        "id": 1410,
        "question": "Who appoints life peers in the House of Lords?",
        "question_zh": "誰任命上議院終身貴族？",
        "options": [
            "The Speaker",
            "The Archbishop of Canterbury",
            "The Prime Minister",
            "The monarch"
        ],
        "correctAnswers": [3],
        "explanation": "Life peers are appointed by the monarch on the advice of the Prime Minister.",
        "explanation_zh": "終身貴族由君主根據首相的建議任命。",
        "category": "Government",
        "isMultipleChoice": false
    },
    {
        "id": 1411,
        "question": "Who mapped the coast of Australia?",
        "question_zh": "誰繪製了澳大利亞海岸地圖？",
        "options": [
            "James Cook",
            "Admiral Nelson",
            "Isaac Newton",
            "Sake Dean Mahomet"
        ],
        "correctAnswers": [0],
        "explanation": "Captain James Cook mapped the coast of Australia and a few colonies were established there.",
        "explanation_zh": "詹姆斯·庫克船長繪製了澳大利亞海岸地圖，並在那裡建立了一些殖民地。",
        "category": "History",
        "isMultipleChoice": false
    },
    {
        "id": 1412,
        "question": "What was the first war to be extensively covered by the media?",
        "question_zh": "第一次被媒體廣泛報導的戰爭是哪場戰爭？",
        "options": [
            "The Boer War",
            "The First World War",
            "The Second World War",
            "The Crimean War"
        ],
        "correctAnswers": [3],
        "explanation": "The Crimean War was the first war to be extensively covered by the media through news stories and photographs.",
        "explanation_zh": "克里米亞戰爭是第一次被媒體通過新聞故事和照片廣泛報導的戰爭。",
        "category": "History",
        "isMultipleChoice": false
    },
    {
        "id": 1413,
        "question": "Which of the following monuments is located in Wiltshire?",
        "question_zh": "以下哪座紀念碑位於威爾特郡？",
        "options": [
            "Hadrian’s Wall",
            "St Paul’s Cathedral",
            "Nelson’s Column",
            "Stonehenge"
        ],
        "correctAnswers": [3],
        "explanation": "Stonehenge stands in what is now the English county of Wiltshire.",
        "explanation_zh": "巨石陣位於現在的英國威爾特郡。",
        "category": "Culture",
        "isMultipleChoice": false
    },
    {
        "id": 1414,
        "question": "Who was the first Archbishop of Canterbury?",
        "question_zh": "誰是第一任坎特伯雷大主教？",
        "options": [
            "St Patrick",
            "St Augustine",
            "St Andrew",
            "St Columba"
        ],
        "correctAnswers": [1],
        "explanation": "St Augustine led missionaries from Rome, who spread Christianity in the south. St Augustine became the first Archbishop of Canterbury.",
        "explanation_zh": "聖奧古斯丁帶領來自羅馬的傳教士，在南方傳播基督教。聖奧古斯丁成為第一任坎特伯雷大主教。",
        "category": "History",
        "isMultipleChoice": false
    },
    {
        "id": 1415,
        "question": "How old do you have to be to go into betting shops or gambling clubs?",
        "question_zh": "您必須年滿多少歲才能進入投注店或賭博俱樂部？",
        "options": [
            "18",
            "20",
            "16",
            "21"
        ],
        "correctAnswers": [0],
        "explanation": "You have to be 18 to go into betting shops or gambling clubs.",
        "explanation_zh": "您必須年滿 18 歲才能進入投注店或賭博俱樂部。",
        "category": "General Knowledge",
        "isMultipleChoice": false
    },
    {
        "id": 1416,
        "question": "The system of government in the UK is a parliamentary democracy.",
        "question_zh": "英國的政體是議會民主制。",
        "options": [
            "True",
            "False"
        ],
        "correctAnswers": [0],
        "explanation": "This statement is true .",
        "explanation_zh": "這句話是正確的。",
        "category": "Government",
        "isMultipleChoice": false
    },
    {
        "id": 1417,
        "question": "What is the traditional food of Northern Ireland?",
        "question_zh": "北愛爾蘭的傳統食物是什麼？",
        "options": [
            "Haggis",
            "Pancakes",
            "Paella",
            "Ulster Fry"
        ],
        "correctAnswers": [3],
        "explanation": "Ulster fry is the correct answer.",
        "explanation_zh": "阿爾斯特炸薯條是正確的答案。",
        "category": "Culture",
        "isMultipleChoice": false
    },
    {
        "id": 1418,
        "question": "Who was elected as British Prime Minister in 1945?",
        "question_zh": "1945年誰當選為英國首相？",
        "options": [
            "Clement Attlee",
            "Winston Churchill",
            "Harold Wilson",
            "Harold Macmillan"
        ],
        "correctAnswers": [0],
        "explanation": "In 1945 the British people elected a Labour government. The new Prime Minister was Clement Attlee .",
        "explanation_zh": "1945年，英國人民選舉了工黨政府。新任首相是克萊門特·艾德禮。",
        "category": "History",
        "isMultipleChoice": false
    },
    {
        "id": 1419,
        "question": "How many times has the UK hosted the Olympic games?",
        "question_zh": "英國舉辦過多少次奧運會？",
        "options": [
            "5",
            "3",
            "4",
            "8"
        ],
        "correctAnswers": [1],
        "explanation": "The UK has hosted the Olympic games on three occasions: 1908, 1948 and 2012.",
        "explanation_zh": "英國曾三次主辦奧運會：1908年、1948年和2012年。",
        "category": "General Knowledge",
        "isMultipleChoice": false
    },
    {
        "id": 1420,
        "question": "Why were canals built during the Industrial Revolution?",
        "question_zh": "為什麼工業革命期間要修建運河？",
        "options": [
            "To make space for the large fleet of British ships",
            "To increase the number of water mills in the UK",
            "To increase the amount of water in towns and cities",
            "To link the factories to towns and cities and to the ports"
        ],
        "correctAnswers": [3],
        "explanation": "Canals were built to link the factories to towns and cities and to the ports , particularly in the new industrial areas in the middle and north of England.",
        "explanation_zh": "修建運河將工廠與城鎮和港口連接起來，特別是在英格蘭中部和北部的新工業區。",
        "category": "Culture",
        "isMultipleChoice": false
    },
    {
        "id": 1421,
        "question": "Are civil servants appointed by the government?",
        "question_zh": "公務員是政府任命的嗎？",
        "options": [
            "Yes",
            "No"
        ],
        "correctAnswers": [1],
        "explanation": "Civil servants are accountable to ministers. They are chosen on merit and are politically neutral – they are not political appointees .",
        "explanation_zh": "公務員對部長負責。他們是根據業績選拔的，並且在政治上保持中立——他們不是政治任命者。",
        "category": "Government",
        "isMultipleChoice": false
    },
    {
        "id": 1422,
        "question": "Which of the following countries helped Britain to develop the Concorde?",
        "question_zh": "以下哪個國家幫助英國研製了協和式飛機？",
        "options": [
            "Germany",
            "Norway",
            "Italy",
            "France"
        ],
        "correctAnswers": [3],
        "explanation": "Britain and France developed the world’s only supersonic commercial airliner, Concorde.",
        "explanation_zh": "英國和法國開發了世界上唯一的超音速商用客機——協和式客機。",
        "category": "Culture",
        "isMultipleChoice": false
    },
    {
        "id": 1423,
        "question": "Which invention led to the development of Britain during the Industrial Revolution?",
        "question_zh": "工業革命期間哪項發明促進了英國的發展？",
        "options": [
            "Magnetic Resonance Imaging",
            "Steam power",
            "Radar",
            "Hovercraft"
        ],
        "correctAnswers": [1],
        "explanation": "The Industrial Revolution was the rapid development of industry in Britain in the 18th and 19th centuries. Britain was the first country to industrialise on a large scale. It happened because of the development of machinery and the use of steam power .",
        "explanation_zh": "工業革命是18、19世紀英國工業的快速發展。英國是第一個大規模工業化的國家。這是由於機械的發展和蒸汽動力的使用而發生的。",
        "category": "General Knowledge",
        "isMultipleChoice": false
    },
    {
        "id": 1424,
        "question": "Who was the tribal leader who fought against the Romans?",
        "question_zh": "與羅馬人作戰的部落首領是誰？",
        "options": [
            "Columba",
            "Claudius",
            "Hadrian",
            "Boudicca"
        ],
        "correctAnswers": [3],
        "explanation": "One of the tribal leaders who fought against the Romans was Boudicca .",
        "explanation_zh": "布狄卡是與羅馬人作戰的部落首領之一。",
        "category": "History",
        "isMultipleChoice": false
    }
  ],
  15: [
    {
      "id": 1501,
      "question": "Which two languages were spoken in England during the Middle Ages?",
      "question_zh": "中世紀期間英格蘭使用哪兩種語言？",
      "options": [
        "Gaelic",
        "Norman French",
        "Welsh",
        "Anglo-Saxon"
      ],
      "correctAnswers": [1, 3],
      "explanation": "After the Norman Conquest, the nobility spoke Norman French while peasants continued to speak Anglo-Saxon. These two languages eventually merged to form English.",
      "explanation_zh": "諾曼征服後，貴族說諾曼法語，而農民繼續說盎格魯-撒克遜語。這兩種語言最終合併形成英語。",
      "category": "History",
      "isMultipleChoice": true
    },
    {
      "id": 1502,
      "question": "Which British colonies declared independence in 1776 demanding 'no taxation without representation'?",
      "question_zh": "1776 年哪些英國殖民地宣布獨立，要求「無代表不納稅」？",
      "options": [
        "South African",
        "Asian",
        "North American",
        "North African"
      ],
      "correctAnswers": [2],
      "explanation": "In 1776, 13 North American colonies declared independence, asserting people's right to establish their own governments.",
      "explanation_zh": "1776 年，13 個北美殖民地宣布獨立，主張人民有權建立自己的政府。",
      "category": "History",
      "isMultipleChoice": false
    },
    {
      "id": 1503,
      "question": "When was England governed as a republic instead of a monarchy?",
      "question_zh": "英格蘭何時以共和國而非君主制統治？",
      "options": [
        "When kind Harold died after the Battle of Hastings",
        "When the Carta Magna restricted the king's power",
        "When Elizabeth I died without any successor",
        "When Charles I was executed"
      ],
      "correctAnswers": [3],
      "explanation": "After Charles I was executed, England became a republic called the Commonwealth, without a monarch.",
      "explanation_zh": "查理一世被處決後，英格蘭成為了一個稱為英聯邦的共和國，沒有君主。",
      "category": "History",
      "isMultipleChoice": false
    },
    {
      "id": 1504,
      "question": "Which UK-produced film became one of the highest-grossing franchises of all time?",
      "question_zh": "哪部英國製作的電影成為有史以來票房最高的系列之一？",
      "options": [
        "Harry Potter",
        "Indiana Jones",
        "The Lord of the Rings",
        "Spider-man"
      ],
      "correctAnswers": [0],
      "explanation": "The UK has produced some of the most commercially successful films ever, including the two highest-grossing franchises: Harry Potter and James Bond.",
      "explanation_zh": "英國製作了一些有史以來商業上最成功的電影，包括兩個票房最高的系列：哈利波特和詹姆斯邦德。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1505,
      "question": "When did the first farmers arrive in Britain?",
      "question_zh": "第一批農民何時抵達英國？",
      "options": [
        "2,000 years ago",
        "6,000 years ago",
        "15,000 years ago",
        "10,000 years ago"
      ],
      "correctAnswers": [1],
      "explanation": "The first farmers came to Britain 6,000 years ago.",
      "explanation_zh": "第一批農民在 6,000 年前來到英國。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1506,
      "question": "When did World War I end?",
      "question_zh": "第一次世界大戰何時結束？",
      "options": [
        "At 11.00 am on 11th November 1914",
        "At 12.00 pm on 11th November 1914",
        "At 11.00 am on 11th November 1918",
        "At 12.00 pm on 11th November 1918"
      ],
      "correctAnswers": [2],
      "explanation": "World War I ended at 11:00 am on November 11th, 1918, with victory for Britain and its allies.",
      "explanation_zh": "第一次世界大戰於 1918 年 11 月 11 日上午 11 點結束，英國及其盟國獲勝。",
      "category": "History",
      "isMultipleChoice": false
    },
    {
      "id": 1507,
      "question": "Can court orders protect someone from forced marriage?",
      "question_zh": "法院命令能否保護某人免受強迫婚姻？",
      "options": [
        "Yes",
        "No"
      ],
      "correctAnswers": [0],
      "explanation": "Yes. Court orders can be obtained to protect someone from being forced into marriage or to protect someone already in a forced marriage.",
      "explanation_zh": "是的。可以獲得法院命令來保護某人免受強迫婚姻，或保護已經處於強迫婚姻中的人。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1508,
      "question": "What Olympic medal did Mary Peters win in 1972?",
      "question_zh": "瑪麗·彼得斯在 1972 年獲得了什麼奧運獎牌？",
      "options": [
        "Bronze",
        "Silver",
        "Gold",
        "She did not win any medals"
      ],
      "correctAnswers": [2],
      "explanation": "Mary Peters, who moved to Northern Ireland as a child, won an Olympic gold medal in the pentathlon in 1972.",
      "explanation_zh": "瑪麗·彼得斯小時候搬到北愛爾蘭，在 1972 年獲得了奧運五項全能金牌。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1509,
      "question": "In England, Wales, and Northern Ireland, who hears Youth Court cases? (choose TWO)",
      "question_zh": "在英格蘭、威爾士和北愛爾蘭，誰審理青年法庭案件？（選擇兩個）",
      "options": [
        "A sheriff",
        "A District Judge",
        "Up to 3 specially trained magistrates",
        "Up to 5 specially trained magistrates"
      ],
      "correctAnswers": [1, 2],
      "explanation": "Youth Court cases for those aged 10 to 17 are heard by up to three specially trained magistrates or a District Judge.",
      "explanation_zh": "10 至 17 歲青少年的青年法庭案件由最多三名受過專門訓練的治安法官或地區法官審理。",
      "category": "General Knowledge",
      "isMultipleChoice": true
    },
    {
      "id": 1510,
      "question": "What did Alan Turing invent in the 1930s?",
      "question_zh": "阿蘭·圖靈在 1930 年代發明了什麼？",
      "options": [
        "The ball pen",
        "The television",
        "The jet engine",
        "The Turing machine"
      ],
      "correctAnswers": [3],
      "explanation": "Alan Turing, a British mathematician, invented the Turing machine, a theoretical mathematical device, in the 1930s.",
      "explanation_zh": "英國數學家阿蘭·圖靈在 1930 年代發明了圖靈機，這是一種理論數學設備。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1511,
      "question": "Which document describes English society just after the Norman Conquest?",
      "question_zh": "哪份文件描述了諾曼征服後的英格蘭社會？",
      "options": [
        "The Carta Magna",
        "The Canterbury Tales",
        "The Domesday Book",
        "The Book of Common Prayer"
      ],
      "correctAnswers": [2],
      "explanation": "The Domesday Book, which still exists today, lists all towns, villages, landowners, and livestock, giving a picture of English society after the Norman Conquest.",
      "explanation_zh": "《末日審判書》至今仍存，列出了所有城鎮、村莊、地主和牲畜，描繪了諾曼征服後英格蘭社會的景象。",
      "category": "History",
      "isMultipleChoice": false
    },
    {
      "id": 1512,
      "question": "Who led the first team to successfully split the atom?",
      "question_zh": "誰領導了第一個成功分裂原子的團隊？",
      "options": [
        "Ernest Rutherford",
        "Sir Peter Mansfield",
        "Alan Turing",
        "Alexander Fleming"
      ],
      "correctAnswers": [0],
      "explanation": "Ernest Rutherford led scientists at Manchester and Cambridge University who first split the atom and later contributed to the Manhattan Project.",
      "explanation_zh": "歐內斯特·盧瑟福領導曼徹斯特和劍橋大學的科學家首次分裂原子，後來為曼哈頓計劃做出了貢獻。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1513,
      "question": "What song is traditionally sung at New Year celebrations in the UK?",
      "question_zh": "英國新年慶祝活動中傳統上唱什麼歌？",
      "options": [
        "White Christmas",
        "Jingle Bells",
        "Auld Lang Syne",
        "The British Anthem"
      ],
      "correctAnswers": [2],
      "explanation": "Auld Lang Syne is sung by people in the UK and other countries when celebrating New Year (called Hogmanay in Scotland).",
      "explanation_zh": "Auld Lang Syne 是英國和其他國家的人們在慶祝新年（在蘇格蘭稱為 Hogmanay）時演唱的歌曲。",
      "category": "Culture",
      "isMultipleChoice": false
    },
    {
      "id": 1514,
      "question": "Who fought in the 1642 English Civil War?",
      "question_zh": "誰在 1642 年英國內戰中作戰？",
      "options": [
        "The House of Fraser and the House of Stuart",
        "The Cavaliers and the Roundheads",
        "The Anglo-Saxons and the Vikings",
        "The House of York and the House of Lancaster"
      ],
      "correctAnswers": [1],
      "explanation": "The Civil War began in 1642 between the Cavaliers (who supported the king) and the Roundheads (who supported Parliament).",
      "explanation_zh": "內戰始於 1642 年，交戰雙方是騎士黨（支持國王）和圓頭黨（支持議會）。",
      "category": "History",
      "isMultipleChoice": false
    },
    {
      "id": 1515,
      "question": "Which two forts were part of Hadrian's Wall?",
      "question_zh": "哪兩個堡壘是哈德良長城的一部分？",
      "options": [
        "Housesteads",
        "Grimsby",
        "Vindolanda",
        "Maiden Castle"
      ],
      "correctAnswers": [0, 2],
      "explanation": "Hadrian's Wall includes the forts of Housesteads and Vindolanda.",
      "explanation_zh": "哈德良長城包括豪斯泰德和文德蘭達堡壘。",
      "category": "History",
      "isMultipleChoice": true
    },
    {
      "id": 1516,
      "question": "What was the religion of the Puritans?",
      "question_zh": "清教徒的宗教是什麼？",
      "options": [
        "Sikh",
        "Protestant",
        "Catholic",
        "Hindu"
      ],
      "correctAnswers": [1],
      "explanation": "The Puritans were Protestants who advocated strict and simple religious doctrine and worship.",
      "explanation_zh": "清教徒是新教徒，主張嚴格和簡單的宗教教義和崇拜。",
      "category": "Culture",
      "isMultipleChoice": false
    },
    {
      "id": 1517,
      "question": "What were 19th-century Irish people who wanted complete independence from the UK called?",
      "question_zh": "19 世紀想要從英國完全獨立的愛爾蘭人被稱為什麼？",
      "options": [
        "Suffragettes",
        "Highlanders",
        "Fenians",
        "Quakers"
      ],
      "correctAnswers": [2],
      "explanation": "The Irish Nationalist movement grew strongly through the 19th century. Some, like the Fenians, favored complete independence.",
      "explanation_zh": "愛爾蘭民族主義運動在整個 19 世紀蓬勃發展。一些人，如芬尼派，支持完全獨立。",
      "category": "History",
      "isMultipleChoice": false
    },
    {
      "id": 1518,
      "question": "Which two British pop groups were famous during the Swinging Sixties?",
      "question_zh": "在搖擺六十年代，哪兩個英國流行音樂團體著名？",
      "options": [
        "Radiohead",
        "ABBA",
        "The Beatles",
        "The Rolling Stones"
      ],
      "correctAnswers": [2, 3],
      "explanation": "The 1960s, known as the 'Swinging Sixties', saw growth in British fashion, cinema, and pop music. The Beatles and The Rolling Stones were two famous groups from this era.",
      "explanation_zh": "1960 年代被稱為「搖擺六十年代」，見證了英國時尚、電影和流行音樂的增長。披頭士和滾石樂隊是這個時代兩個著名的團體。",
      "category": "Culture",
      "isMultipleChoice": true
    },
    {
      "id": 1519,
      "question": "What is the minimum age to drive a motorcycle in the UK?",
      "question_zh": "在英國駕駛摩托車的最低年齡是多少？",
      "options": [
        "21 years old",
        "18 years old",
        "16 years old",
        "17 years old"
      ],
      "correctAnswers": [3],
      "explanation": "You must be at least 17 to drive a car or motorcycle in the UK, and you need a driving licence to drive on public roads.",
      "explanation_zh": "在英國，您必須至少 17 歲才能駕駛汽車或摩托車，並且需要駕駛執照才能在公共道路上駕駛。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1520,
      "question": "Members of the House of Lords (peers) are elected by the people.",
      "question_zh": "上議院成員（貴族）由人民選舉產生。",
      "options": [
        "True",
        "False"
      ],
      "correctAnswers": [1],
      "explanation": "This is incorrect. Members of the House of Lords, known as peers, are not elected by the people.",
      "explanation_zh": "這是不正確的。上議院成員，稱為貴族，不是由人民選舉產生的。",
      "category": "Government",
      "isMultipleChoice": false
    },
    {
      "id": 1521,
      "question": "When did the Emancipation Act abolish slavery in the British Empire?",
      "question_zh": "《解放法》何時廢除英國帝國的奴隸制？",
      "options": [
        "1807",
        "1823",
        "1833",
        "1835"
      ],
      "correctAnswers": [2],
      "explanation": "The Emancipation Act abolished slavery throughout the British Empire in 1833.",
      "explanation_zh": "《解放法》於 1833 年在整個英國帝國廢除了奴隸制。",
      "category": "History",
      "isMultipleChoice": false
    },
    {
      "id": 1522,
      "question": "Which government minister is responsible for crime, policing, and immigration?",
      "question_zh": "哪位政府部長負責犯罪、治安和移民？",
      "options": [
        "The Speaker",
        "The Foreign Secretary",
        "The Home Secretary",
        "The Chancellor of the Exchequer"
      ],
      "correctAnswers": [2],
      "explanation": "The Home Secretary is responsible for crime, policing, and immigration.",
      "explanation_zh": "內政大臣負責犯罪、治安和移民。",
      "category": "Government",
      "isMultipleChoice": false
    },
    {
      "id": 1523,
      "question": "What type of film was Wallace and Gromit, created by Nick Park?",
      "question_zh": "尼克·帕克創作的《超級無敵掌門狗》是什麼類型的電影？",
      "options": [
        "An action film",
        "A silent movie",
        "A soap opera",
        "An animated film"
      ],
      "correctAnswers": [3],
      "explanation": "Nick Park won four Oscars for his animated films, including three featuring Wallace and Gromit.",
      "explanation_zh": "尼克·帕克憑藉其動畫電影獲得四項奧斯卡獎，其中三部是《超級無敵掌門狗》。",
      "category": "Culture",
      "isMultipleChoice": false
    },
    {
      "id": 1524,
      "question": "Anyone who is violent towards their partner can be prosecuted, regardless of gender or marital status.",
      "question_zh": "任何對伴侶施暴的人都可能被起訴，無論性別或婚姻狀況如何。",
      "options": [
        "True",
        "False"
      ],
      "correctAnswers": [0],
      "explanation": "This is correct. Anyone violent towards their partner - whether man or woman, married or living together - can be prosecuted.",
      "explanation_zh": "這是正確的。任何對伴侶施暴的人——無論男性或女性、已婚或同居——都可能被起訴。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    }
  ],
  16: [
    {
      "id": 1601,
      "question": "When was the United Nations established?",
      "question_zh": "聯合國是什麼時候成立的？",
      "options": [
        "Before the Second World War.",
        "After the Second World War.",
        "Before the First World War.",
        "After the First World War."
      ],
      "correctAnswers": [1],
      "explanation": "The UN was established after World War II to prevent war and promote international peace and security.",
      "explanation_zh": "聯合國在第二次世界大戰後成立，旨在防止戰爭並促進國際和平與安全。",
      "category": "History",
      "isMultipleChoice": false
    },
    {
      "id": 1602,
      "question": "Where is the Giant's Causeway?",
      "question_zh": "巨人堤道在哪裡？",
      "options": [
        "Wales",
        "England",
        "Northern Ireland",
        "Scotland"
      ],
      "correctAnswers": [2],
      "explanation": "The Giant's Causeway is a volcanic rock formation on Northern Ireland's north-east coast, formed about 50 million years ago.",
      "explanation_zh": "巨人堤道是北愛爾蘭東北海岸的火山岩層，形成於約 5000 萬年前。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1603,
      "question": "What happened to Mary, Queen of Scots, after 20 years of imprisonment by Elizabeth I?",
      "question_zh": "蘇格蘭女王瑪麗被伊麗莎白一世監禁 20 年後發生了什麼？",
      "options": [
        "She was executed.",
        "She was sent to Scotland.",
        "She got married.",
        "She was sent to France."
      ],
      "correctAnswers": [0],
      "explanation": "Mary was executed after being accused of plotting against Elizabeth I.",
      "explanation_zh": "瑪麗被指控密謀反對伊麗莎白一世後被處決。",
      "category": "History",
      "isMultipleChoice": false
    },
    {
      "id": 1604,
      "question": "Which tribe invaded Britain from northern Europe after the Romans left in AD 410?",
      "question_zh": "公元 410 年羅馬人離開後，哪個部落從北歐入侵英國？",
      "options": [
        "The Burgundians",
        "The Frisians",
        "The Gepids",
        "The Jutes"
      ],
      "correctAnswers": [3],
      "explanation": "After the Romans left, Britain was invaded by the Jutes, Angles, and Saxons from northern Europe.",
      "explanation_zh": "羅馬人離開後，英國被來自北歐的朱特人、盎格魯人和撒克遜人入侵。",
      "category": "History",
      "isMultipleChoice": false
    },
    {
      "id": 1605,
      "question": "Which is one of the UK's highest-grossing film franchises?",
      "question_zh": "英國票房最高的電影系列之一是什麼？",
      "options": [
        "James Bond",
        "Superman",
        "Star Wars",
        "The Lord of the Rings"
      ],
      "correctAnswers": [0],
      "explanation": "The UK has produced some of the most successful films ever, including the two highest-grossing franchises: Harry Potter and James Bond.",
      "explanation_zh": "英國製作了一些有史以來最成功的電影，包括兩個票房最高的系列：哈利波特和詹姆斯邦德。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1606,
      "question": "Who can hear Youth Court cases in England, Wales, and Northern Ireland? (choose TWO)",
      "question_zh": "誰可以在英格蘭、威爾士和北愛爾蘭審理青年法庭案件？（選擇兩個）",
      "options": [
        "Specially trained magistrates.",
        "District judges.",
        "Members of the public.",
        "Social workers."
      ],
      "correctAnswers": [0, 1],
      "explanation": "Youth Court cases for 10-17 year olds are heard by up to three specially trained magistrates or a District Judge. Parents/carers must attend, and the public is not allowed.",
      "explanation_zh": "10-17 歲青少年的青年法庭案件由最多三名受過專門訓練的治安法官或地區法官審理。父母/照顧者必須出席，公眾不得入內。",
      "category": "General Knowledge",
      "isMultipleChoice": true
    },
    {
      "id": 1607,
      "question": "Which monarch returned from exile in the Netherlands in 1660?",
      "question_zh": "1660 年哪位君主從荷蘭流亡歸來？",
      "options": [
        "George II",
        "Edward II",
        "Charles II",
        "William II"
      ],
      "correctAnswers": [2],
      "explanation": "In 1660, Parliament invited Charles II to return from exile in the Netherlands, and he was crowned King of England, Wales, Scotland, and Ireland.",
      "explanation_zh": "1660 年，議會邀請查理二世從荷蘭流亡歸來，他加冕為英格蘭、威爾士、蘇格蘭和愛爾蘭國王。",
      "category": "History",
      "isMultipleChoice": false
    },
    {
      "id": 1608,
      "question": "Who is eligible for the National Citizen Service programme?",
      "question_zh": "誰有資格參加國家公民服務計劃？",
      "options": [
        "17- and 18-year-olds",
        "14- and 15-year-olds",
        "15- and 16-year-olds",
        "16- and 17-year-olds"
      ],
      "correctAnswers": [3],
      "explanation": "The National Citizen Service gives 16- and 17-year-olds opportunities for outdoor activities, skill development, and community projects.",
      "explanation_zh": "國家公民服務為 16 歲和 17 歲的青少年提供戶外活動、技能發展和社區項目的機會。",
      "category": "Government",
      "isMultipleChoice": false
    },
    {
      "id": 1609,
      "question": "Nick Park won four Oscars for animated films, three featuring which characters?",
      "question_zh": "尼克·帕克因動畫電影獲得四項奧斯卡獎，其中三部以哪些角色為主角？",
      "options": [
        "Wallace and Gromit",
        "Four Weddings and a Funeral",
        "Women in Love",
        "Chariots of Fire"
      ],
      "correctAnswers": [0],
      "explanation": "Nick Park has won four Oscars for animated films, including three featuring Wallace and Gromit.",
      "explanation_zh": "尼克·帕克因動畫電影獲得四項奧斯卡獎，其中三部以《超級無敵掌門狗》為主角。",
      "category": "Culture",
      "isMultipleChoice": false
    },
    {
      "id": 1610,
      "question": "Which British scientist co-discovered DNA's structure in the 1950s?",
      "question_zh": "1950 年代哪位英國科學家共同發現了 DNA 的結構？",
      "options": [
        "James Watt",
        "Francis Crick",
        "Keith Campbell",
        "Sir Ian Wilmot"
      ],
      "correctAnswers": [1],
      "explanation": "Francis Crick co-discovered DNA's structure in 1953 at British universities in London and Cambridge, earning a Nobel Prize for this breakthrough.",
      "explanation_zh": "弗朗西斯·克里克於 1953 年在倫敦和劍橋的英國大學共同發現了 DNA 的結構，因這一突破獲得諾貝爾獎。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1611,
      "question": "What percentage of UK residents have a parent or grandparent born outside the UK?",
      "question_zh": "有多少比例的英國居民的父母或祖父母在英國以外出生？",
      "options": [
        "Around 20%",
        "Around 5%",
        "Around 10%",
        "Around 15%"
      ],
      "correctAnswers": [2],
      "explanation": "Nearly 10% of the UK population has a parent or grandparent born outside the UK.",
      "explanation_zh": "近 10% 的英國人口的父母或祖父母在英國以外出生。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1612,
      "question": "What is the minimum age to ride a moped in the UK?",
      "question_zh": "在英國騎輕便摩托車的最低年齡是多少？",
      "options": [
        "16 years old",
        "15 years old",
        "18 years old",
        "17 years old"
      ],
      "correctAnswers": [0],
      "explanation": "You must be at least 16 to ride a moped in the UK. There are different age requirements and tests for larger vehicles.",
      "explanation_zh": "在英國，您必須至少 16 歲才能騎輕便摩托車。較大的車輛有不同的年齡要求和測試。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1613,
      "question": "Which Labour leader introduced the Scottish Parliament and Welsh Assembly?",
      "question_zh": "哪位工黨領袖引入了蘇格蘭議會和威爾士議會？",
      "options": [
        "Gordon Brown",
        "Clement Attlee",
        "James Callaghan",
        "Tony Blair"
      ],
      "correctAnswers": [3],
      "explanation": "Tony Blair's Labour government, elected in 1997, introduced the Scottish Parliament and Welsh Assembly.",
      "explanation_zh": "托尼·布萊爾的工黨政府於 1997 年當選，引入了蘇格蘭議會和威爾士議會。",
      "category": "Government",
      "isMultipleChoice": false
    },
    {
      "id": 1614,
      "question": "What is the maximum small claims limit in Scotland and Northern Ireland?",
      "question_zh": "蘇格蘭和北愛爾蘭的最高小額索賠限額是多少？",
      "options": [
        "£10,000",
        "£8,000",
        "£5,000",
        "£3,000"
      ],
      "correctAnswers": [2],
      "explanation": "The small claims procedure handles disputes under £10,000 in England and Wales, and under £5,000 in Scotland and Northern Ireland.",
      "explanation_zh": "小額索賠程序處理英格蘭和威爾士 10,000 英鎊以下以及蘇格蘭和北愛爾蘭 5,000 英鎊以下的糾紛。",
      "category": "Government",
      "isMultipleChoice": false
    },
    {
      "id": 1615,
      "question": "Which monument did William the Conqueror build?",
      "question_zh": "征服者威廉建造了哪座紀念碑？",
      "options": [
        "Dumfries House",
        "The Cenotaph",
        "The White Tower",
        "St Paul's Cathedral"
      ],
      "correctAnswers": [2],
      "explanation": "The White Tower in the Tower of London is a Norman castle keep built on William the Conqueror's orders.",
      "explanation_zh": "倫敦塔中的白塔是根據征服者威廉的命令建造的諾曼城堡主樓。",
      "category": "History",
      "isMultipleChoice": false
    },
    {
      "id": 1616,
      "question": "Who succeeded Margaret Thatcher as Prime Minister and helped the Northern Ireland peace process?",
      "question_zh": "誰繼瑪格麗特·撒切爾之後成為首相並幫助北愛爾蘭和平進程？",
      "options": [
        "John Major",
        "Harold Wilson",
        "James Callaghan",
        "Tony Blair"
      ],
      "correctAnswers": [0],
      "explanation": "John Major became Prime Minister after Margaret Thatcher and played an important role in the Northern Ireland peace process.",
      "explanation_zh": "約翰·梅傑繼瑪格麗特·撒切爾之後成為首相，並在北愛爾蘭和平進程中發揮了重要作用。",
      "category": "Government",
      "isMultipleChoice": false
    },
    {
      "id": 1617,
      "question": "Who should you contact to report terrorist activity?",
      "question_zh": "報告恐怖活動應該聯繫誰？",
      "options": [
        "The Prime Minister.",
        "Your local police force.",
        "Your local MP.",
        "Your local Council."
      ],
      "correctAnswers": [1],
      "explanation": "If someone tries to recruit you for extremism or terrorism, notify your local police force.",
      "explanation_zh": "如果有人試圖招募您從事極端主義或恐怖主義，請通知當地警察部門。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1618,
      "question": "Which Paralympic swimmer won gold at the 2008, 2012, and 2016 Games?",
      "question_zh": "哪位殘奧游泳運動員在 2008、2012 和 2016 年奧運會上獲得金牌？",
      "options": [
        "David Weir",
        "Ellie Simmonds",
        "Baroness Tanni Grey-Thompson",
        "Sophie Christiansen"
      ],
      "correctAnswers": [1],
      "explanation": "Ellie Simmonds won swimming gold medals at three consecutive Paralympic Games (2008, 2012, 2016) and holds several world records.",
      "explanation_zh": "艾莉·西蒙茲在三屆連續殘奧會（2008、2012、2016）上獲得游泳金牌，並保持多項世界紀錄。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1619,
      "question": "Which UK country is represented by the rose?",
      "question_zh": "哪個英國國家由玫瑰代表？",
      "options": [
        "England",
        "Scotland",
        "Northern Ireland",
        "Wales"
      ],
      "correctAnswers": [0],
      "explanation": "Each UK country has a flower symbol: England - rose, Scotland - thistle, Wales - daffodil, Northern Ireland - shamrock.",
      "explanation_zh": "每個英國國家都有一個花卉象徵：英格蘭 - 玫瑰，蘇格蘭 - 薊，威爾士 - 水仙花，北愛爾蘭 - 三葉草。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1620,
      "question": "What was Isambard Kingdom Brunel known for?",
      "question_zh": "伊桑巴德·金德姆·布魯內爾以什麼聞名？",
      "options": [
        "The discovery of insulin.",
        "The construction of the Great Western Railway.",
        "The construction of the Tower of London.",
        "The invention of the television."
      ],
      "correctAnswers": [1],
      "explanation": "Brunel was an engineer who built the Great Western Railway, Britain's first major railway, running from London to south-west England, the West Midlands, and Wales.",
      "explanation_zh": "布魯內爾是一位工程師，他建造了大西部鐵路，這是英國第一條主要鐵路，從倫敦延伸到英格蘭西南部、西米德蘭茲和威爾士。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1621,
      "question": "What is the Commonwealth?",
      "question_zh": "什麼是英聯邦？",
      "options": [
        "An international organization that aims to prevent war and promote international peace and security.",
        "A group of European and North American countries that have agreed to help each other if they come under attack.",
        "An association of countries that support each other and work together towards shared goals in democracy and development.",
        "An organization responsible for the protection and promotion of human rights in its member countries."
      ],
      "correctAnswers": [2],
      "explanation": "The Commonwealth is an association of countries working together toward shared goals in democracy and development. Most members were once part of the British Empire.",
      "explanation_zh": "英聯邦是一個為實現民主和發展的共同目標而共同努力的國家聯盟。大多數成員國曾經是大英帝國的一部分。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1622,
      "question": "What was the movement against papal authority during Henry VIII's time called?",
      "question_zh": "亨利八世時期反對教皇權威的運動叫什麼？",
      "options": [
        "The Enlightenment",
        "The Holy Wars",
        "The Spanish Inquisition",
        "The Reformation"
      ],
      "correctAnswers": [3],
      "explanation": "The Reformation was the movement against the Pope's authority and Roman Catholic Church practices.",
      "explanation_zh": "宗教改革是反對教皇權威和羅馬天主教會實踐的運動。",
      "category": "History",
      "isMultipleChoice": false
    },
    {
      "id": 1623,
      "question": "What did Isaac Newton discover?",
      "question_zh": "艾薩克·牛頓發現了什麼？",
      "options": [
        "Lightbulb",
        "Insulin",
        "Gravity",
        "Penicillin"
      ],
      "correctAnswers": [2],
      "explanation": "Newton's famous work showed how gravity applies to the universe. He also discovered that white light is composed of rainbow colors.",
      "explanation_zh": "牛頓的著名著作展示了重力如何應用於宇宙。他還發現白光是由彩虹顏色組成的。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1624,
      "question": "What type of films did Oscar winner Nick Park specialize in?",
      "question_zh": "奧斯卡獎得主尼克·帕克專攻哪種類型的電影？",
      "options": [
        "Animated movies",
        "Horror movies",
        "Thrillers",
        "Action movies"
      ],
      "correctAnswers": [0],
      "explanation": "Nick Park specializes in animated films and has won four Oscars, including three for Wallace and Gromit films.",
      "explanation_zh": "尼克·帕克專攻動畫電影，已獲得四項奧斯卡獎，其中三項是《超級無敵掌門狗》電影。",
      "category": "Culture",
      "isMultipleChoice": false
    }
  ],
  17: [
    {
      "id": 1701,
      "question": "Which of these is NOT a constitutional institution?",
      "question_zh": "以下哪個不是憲法機構？",
      "options": [
        "The Parliament",
        "The cabinet",
        "The armed forces",
        "The police"
      ],
      "correctAnswers": [2],
      "explanation": "UK constitutional institutions include: monarchy, Parliament (Commons and Lords), Prime Minister, cabinet, judiciary, police, civil service, and local government. The armed forces are not a constitutional institution.",
      "explanation_zh": "英國憲法機構包括：君主制、議會（下議院和上議院）、首相、內閣、司法機構、警察、公務員和地方政府。武裝部隊不是憲法機構。",
      "category": "Government",
      "isMultipleChoice": false
    },
    {
      "id": 1702,
      "question": "Which crop failure caused the Irish famine?",
      "question_zh": "哪種作物歉收導致了愛爾蘭飢荒？",
      "options": [
        "Potato",
        "Wheat",
        "Corn",
        "Oats"
      ],
      "correctAnswers": [0],
      "explanation": "In the mid-19th century, the potato crop failed, causing a famine in Ireland. A million people died from disease and starvation.",
      "explanation_zh": "19 世紀中葉，馬鈴薯歉收，導致愛爾蘭發生飢荒。一百萬人死於疾病和飢餓。",
      "category": "History",
      "isMultipleChoice": false
    },
    {
      "id": 1703,
      "question": "What is the group of senior opposition MPs who challenge the government called?",
      "question_zh": "挑戰政府的資深反對黨議員小組叫什麼？",
      "options": [
        "Lobby groups",
        "Civil servants",
        "Support peers",
        "Shadow Cabinet"
      ],
      "correctAnswers": [3],
      "explanation": "The opposition leader appoints senior MPs as 'shadow ministers' who challenge the government and propose alternative policies, forming the Shadow Cabinet.",
      "explanation_zh": "反對黨領袖任命資深議員為「影子部長」，他們挑戰政府並提出替代政策，組成影子內閣。",
      "category": "Government",
      "isMultipleChoice": false
    },
    {
      "id": 1704,
      "question": "What are TWO responsibilities of MPs?",
      "question_zh": "議員的兩項職責是什麼？",
      "options": [
        "Represent everyone in their constituency",
        "Scrutinise and comment on what the monarch is doing",
        "Help to create new laws",
        "Protect life and property"
      ],
      "correctAnswers": [0, 2],
      "explanation": "MPs represent everyone in their constituency, help create new laws, scrutinize government actions, and debate important national issues.",
      "explanation_zh": "議員代表選區內的每個人，幫助制定新法律，審查政府行為，並辯論重要的國家問題。",
      "category": "Government",
      "isMultipleChoice": true
    },
    {
      "id": 1705,
      "question": "Who was the longest-serving UK Prime Minister of the 20th century?",
      "question_zh": "誰是 20 世紀任期最長的英國首相？",
      "options": [
        "Robert Walpole",
        "Margaret Thatcher",
        "John Major",
        "Sir Alec Douglas-Home"
      ],
      "correctAnswers": [1],
      "explanation": "Margaret Thatcher was the first female UK Prime Minister and the longest-serving of the 20th century, in office from 1979 to 1990.",
      "explanation_zh": "瑪格麗特·撒切爾是英國第一位女首相，也是 20 世紀任期最長的首相，從 1979 年到 1990 年在任。",
      "category": "Government",
      "isMultipleChoice": false
    },
    {
      "id": 1706,
      "question": "What are territories linked to the UK but not part of it called?",
      "question_zh": "與英國有聯繫但不屬於英國的領土叫什麼？",
      "options": [
        "British Colonies",
        "Crown Independencies",
        "Crown Dependencies",
        "Offshore Territories"
      ],
      "correctAnswers": [2],
      "explanation": "The Channel Islands and Isle of Man are closely linked to the UK but have their own governments and are called Crown Dependencies.",
      "explanation_zh": "海峽群島和馬恩島與英國聯繫密切，但有自己的政府，被稱為皇家屬地。",
      "category": "Government",
      "isMultipleChoice": false
    },
    {
      "id": 1707,
      "question": "What field did David Hume contribute to during the Enlightenment?",
      "question_zh": "大衛·休謨在啟蒙運動期間為哪個領域做出了貢獻？",
      "options": [
        "Cinema",
        "Poetry",
        "Architecture",
        "Philosophy"
      ],
      "correctAnswers": [3],
      "explanation": "David Hume was a famous philosopher who developed ideas about human nature in the 18th century that continue to influence philosophers today.",
      "explanation_zh": "大衛·休謨是一位著名的哲學家，他在 18 世紀提出了關於人性的思想，至今仍影響著哲學家。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1708,
      "question": "What proportion of England's population died from the Black Death?",
      "question_zh": "英格蘭有多少人口死於黑死病？",
      "options": [
        "One third of the population",
        "Half of the population",
        "One quarter of the population",
        "55% of the population"
      ],
      "correctAnswers": [0],
      "explanation": "The Black Death killed one third of England's population, with similar proportions in Scotland and Wales.",
      "explanation_zh": "黑死病導致英格蘭三分之一的人口死亡，蘇格蘭和威爾士的比例類似。",
      "category": "History",
      "isMultipleChoice": false
    },
    {
      "id": 1709,
      "question": "What happened to Charles I after his imprisonment?",
      "question_zh": "查理一世被監禁後發生了什麼？",
      "options": [
        "He moved to Spain",
        "He was executed",
        "He became a priest",
        "He escaped to France"
      ],
      "correctAnswers": [1],
      "explanation": "After defeats at Marston Moor and Naseby, Charles I was imprisoned. Unwilling to reach agreement with Parliament, he was executed in 1649.",
      "explanation_zh": "在馬斯頓荒原和納斯比戰敗後，查理一世被監禁。因不願與議會達成協議，他於 1649 年被處決。",
      "category": "History",
      "isMultipleChoice": false
    },
    {
      "id": 1710,
      "question": "What are TWO responsibilities of the monarch?",
      "question_zh": "君主的兩項職責是什麼？",
      "options": [
        "To appoint the members of the cabinet",
        "To debate important national issues",
        "To appoint the government",
        "To advise, warn and encourage the Prime Minister's decisions on government policies"
      ],
      "correctAnswers": [2, 3],
      "explanation": "The monarch appoints the government chosen by democratic election and meets regularly with the Prime Minister to advise, warn, and encourage, though policy decisions are made by the PM and cabinet.",
      "explanation_zh": "君主任命通過民主選舉選出的政府，並定期與首相會面提供建議、警告和鼓勵，但政策決定由首相和內閣做出。",
      "category": "Government",
      "isMultipleChoice": true
    },
    {
      "id": 1711,
      "question": "What type of disaster was the Black Death?",
      "question_zh": "黑死病是什麼類型的災難？",
      "options": [
        "A famine",
        "A civil war",
        "A plague",
        "An earthquake"
      ],
      "correctAnswers": [2],
      "explanation": "The Black Death was a disease, probably a form of plague, that arrived in Britain in 1348.",
      "explanation_zh": "黑死病是一種疾病，可能是鼠疫的一種形式，於 1348 年傳入英國。",
      "category": "History",
      "isMultipleChoice": false
    },
    {
      "id": 1712,
      "question": "Which country had trading conflicts with the UK during the 18th century?",
      "question_zh": "18 世紀哪個國家與英國有貿易衝突？",
      "options": [
        "Luxembourg",
        "Germany",
        "Andorra",
        "France"
      ],
      "correctAnswers": [3],
      "explanation": "During the 18th century, overseas trading sometimes brought Britain into conflict with France, which was expanding similarly in many of the same areas.",
      "explanation_zh": "在 18 世紀，海外貿易有時使英國與法國發生衝突，法國在許多相同地區以類似方式擴張。",
      "category": "History",
      "isMultipleChoice": false
    },
    {
      "id": 1713,
      "question": "The Speaker is an MP who represents a constituency and deals with constituents.",
      "question_zh": "議長是代表選區並與選民打交道的議員。",
      "options": [
        "True",
        "False"
      ],
      "correctAnswers": [0],
      "explanation": "This is correct. The Speaker is an MP who represents a constituency.",
      "explanation_zh": "這是正確的。議長是代表選區的議員。",
      "category": "Government",
      "isMultipleChoice": false
    },
    {
      "id": 1714,
      "question": "Where is Skara Brae, northern Europe's best-preserved prehistoric village?",
      "question_zh": "北歐保存最完好的史前村莊斯卡拉布雷在哪裡？",
      "options": [
        "Northern Ireland",
        "Wales",
        "England",
        "Scotland"
      ],
      "correctAnswers": [3],
      "explanation": "Skara Brae on Orkney, off Scotland's north coast, is northern Europe's best-preserved prehistoric village.",
      "explanation_zh": "位於蘇格蘭北海岸奧克尼群島的斯卡拉布雷是北歐保存最完好的史前村莊。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1715,
      "question": "Which play was written by William Shakespeare?",
      "question_zh": "以下哪部戲劇是威廉·莎士比亞創作的？",
      "options": [
        "MacBeth",
        "The Canterbury Tales",
        "Doctor Faustus",
        "The Mikado"
      ],
      "correctAnswers": [0],
      "explanation": "MacBeth is one of William Shakespeare's most famous plays.",
      "explanation_zh": "《麥克白》是威廉·莎士比亞最著名的戲劇之一。",
      "category": "Culture",
      "isMultipleChoice": false
    },
    {
      "id": 1716,
      "question": "Where was William the Conqueror from?",
      "question_zh": "征服者威廉來自哪裡？",
      "options": [
        "Ireland",
        "France",
        "Italy",
        "Portugal"
      ],
      "correctAnswers": [1],
      "explanation": "William the Conqueror was Duke of Normandy (now northern France). He defeated Harold at the Battle of Hastings in 1066.",
      "explanation_zh": "征服者威廉是諾曼底公爵（現法國北部）。他在 1066 年黑斯廷斯戰役中擊敗了哈羅德。",
      "category": "History",
      "isMultipleChoice": false
    },
    {
      "id": 1717,
      "question": "What were the Dutch settlers called who fought the British in South Africa?",
      "question_zh": "在南非與英國人作戰的荷蘭定居者被稱為什麼？",
      "options": [
        "Beefeaters",
        "Conquistadors",
        "Boers",
        "Blacksmiths"
      ],
      "correctAnswers": [2],
      "explanation": "The British fought the Boers, Dutch settlers in South Africa, in a fierce war that lasted over three years.",
      "explanation_zh": "英國人與布爾人（南非的荷蘭定居者）進行了激烈的戰爭，持續了三年多。",
      "category": "History",
      "isMultipleChoice": false
    },
    {
      "id": 1718,
      "question": "In Northern Ireland, Youth Court cases require up to three specially trained magistrates or a District Judge.",
      "question_zh": "在北愛爾蘭，青年法庭案件需要最多三名受過專門訓練的治安法官或地區法官。",
      "options": [
        "True",
        "False"
      ],
      "correctAnswers": [0],
      "explanation": "This is correct. Youth Court cases in Northern Ireland are heard by up to three specially trained magistrates or a District Judge.",
      "explanation_zh": "這是正確的。北愛爾蘭的青年法庭案件由最多三名受過專門訓練的治安法官或地區法官審理。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1719,
      "question": "What made Roger Bannister famous?",
      "question_zh": "是什麼讓羅傑·班尼斯特出名？",
      "options": [
        "He won gold medals in rowing in five consecutive Olympic Games.",
        "He was the first British to climb Mount Everest.",
        "He won gold medals for ice dancing at the Olympic Games in 1984.",
        "He was the first man in the world to run a mile in under four minutes."
      ],
      "correctAnswers": [3],
      "explanation": "Sir Roger Bannister became the first person in the world to run a mile in under four minutes in 1954.",
      "explanation_zh": "羅傑·班尼斯特爵士在 1954 年成為世界上第一個在四分鐘內跑完一英里的人。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1720,
      "question": "Who was invited to invade and rule England in 1688?",
      "question_zh": "1688 年誰被邀請入侵並統治英格蘭？",
      "options": [
        "Napoleon",
        "William of Orange",
        "The Duke of Medina Sidonia",
        "King Philip II of Spain"
      ],
      "correctAnswers": [1],
      "explanation": "In 1688, important English Protestants invited William of Orange to invade England and become king.",
      "explanation_zh": "1688 年，英格蘭重要的新教徒邀請奧蘭治的威廉入侵英格蘭並成為國王。",
      "category": "History",
      "isMultipleChoice": false
    },
    {
      "id": 1721,
      "question": "Who was defeated at the Battle of the Boyne?",
      "question_zh": "誰在博因河戰役中被擊敗？",
      "options": [
        "Richard II",
        "James II",
        "James I",
        "Richard I"
      ],
      "correctAnswers": [1],
      "explanation": "William of Orange defeated James II at the Battle of the Boyne in Ireland in 1690.",
      "explanation_zh": "奧蘭治的威廉在 1690 年愛爾蘭博因河戰役中擊敗了詹姆斯二世。",
      "category": "History",
      "isMultipleChoice": false
    },
    {
      "id": 1722,
      "question": "What did the Factories Act of 1847 introduce?",
      "question_zh": "1847 年《工廠法》引入了什麼？",
      "options": [
        "It increased the number of hours that men could work to 12 hours per day.",
        "It increased the number of hours that women and children could work to 12 hours per day.",
        "It limited the number of hours that everybody could work to 10 hours per day.",
        "It limited the number of hours that women and children could work to 10 hours per day."
      ],
      "correctAnswers": [3],
      "explanation": "The Factories Act of 1847 limited women's and children's working hours to 10 hours per day.",
      "explanation_zh": "1847 年的《工廠法》將婦女和兒童的工作時間限制為每天 10 小時。",
      "category": "History",
      "isMultipleChoice": false
    },
    {
      "id": 1723,
      "question": "What is the group of opposition MPs called?",
      "question_zh": "反對黨議員小組叫什麼？",
      "options": [
        "Shadow Cabinet",
        "Cavaliers",
        "Roundheads",
        "Quakers"
      ],
      "correctAnswers": [0],
      "explanation": "Opposition MPs form the Shadow Cabinet, which challenges the government and proposes alternative policies.",
      "explanation_zh": "反對黨議員組成影子內閣，挑戰政府並提出替代政策。",
      "category": "Government",
      "isMultipleChoice": false
    },
    {
      "id": 1724,
      "question": "Which area can the Scottish Parliament legislate on?",
      "question_zh": "蘇格蘭議會可以就哪個領域立法？",
      "options": [
        "Defence",
        "Security",
        "Immigration",
        "Education"
      ],
      "correctAnswers": [3],
      "explanation": "The Scottish Parliament can legislate on civil and criminal law, health, education, planning, and additional tax-raising powers.",
      "explanation_zh": "蘇格蘭議會可以就民法和刑法、衛生、教育、規劃和其他徵稅權力進行立法。",
      "category": "Government",
      "isMultipleChoice": false
    }
  ],
  18: [
    {
      "id": 1801,
      "question": "In which year were women given the right to vote at age 21?",
      "question_zh": "女性在哪一年獲得21歲投票權？",
      "options": [
        "1918",
        "1928",
        "1945",
        "1969"
      ],
      "correctAnswers": [1],
      "explanation": "In 1928, women were given voting rights at age 21, equal to men.",
      "explanation_zh": "1928年，女性獲得了21歲的投票權，與男性相同。",
      "category": "History",
      "isMultipleChoice": false
    },
    {
      "id": 1802,
      "question": "Which building did William the Conqueror construct?",
      "question_zh": "征服者威廉建造了哪座建築？",
      "options": [
        "St Paul's Cathedral",
        "Westminster Abbey",
        "Edinburgh Castle",
        "The White Tower"
      ],
      "correctAnswers": [3],
      "explanation": "William the Conqueror built the White Tower in the Tower of London as a Norman castle keep.",
      "explanation_zh": "征服者威廉在倫敦塔建造了白塔作為諾曼城堡主樓。",
      "category": "History",
      "isMultipleChoice": false
    },
    {
      "id": 1803,
      "question": "Can court orders protect someone from being forced into a relationship or marriage?",
      "question_zh": "法院命令能否保護某人免受強迫關係或婚姻？",
      "options": [
        "Yes",
        "No"
      ],
      "correctAnswers": [0],
      "explanation": "Yes. Court orders can be obtained to protect a person from forced marriage or to protect someone already in a forced marriage.",
      "explanation_zh": "是的。可以獲得法院命令來保護某人免受強迫婚姻或保護已經處於強迫婚姻中的人。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1804,
      "question": "Who is the patron saint of England?",
      "question_zh": "誰是英格蘭的守護聖人？",
      "options": [
        "St Andrew",
        "St Patrick",
        "St George",
        "St David"
      ],
      "correctAnswers": [2],
      "explanation": "St George is the patron saint of England, celebrated on April 23rd.",
      "explanation_zh": "聖喬治是英格蘭的守護聖人，在4月23日慶祝。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1805,
      "question": "What are the fundamental rights of British people?",
      "question_zh": "英國人的基本權利是什麼？",
      "options": [
        "The right to free housing and healthcare",
        "The right to vote and own property only",
        "The right to work without paying taxes",
        "Freedom of speech and the right to a fair trial"
      ],
      "correctAnswers": [3],
      "explanation": "British people have fundamental rights including freedom of speech, freedom of religion, the right to a fair trial, and the right to participate in free elections.",
      "explanation_zh": "英國人擁有基本權利，包括言論自由、宗教自由、公平審判權和參加自由選舉的權利。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1806,
      "question": "Where did the Armada that attacked England in 1588 come from?",
      "question_zh": "1588年攻擊英格蘭的無敵艦隊來自哪裡？",
      "options": [
        "France",
        "Spain",
        "Portugal",
        "Italy"
      ],
      "correctAnswers": [1],
      "explanation": "The Spanish Armada was sent by Spain in 1588 to conquer England and restore Catholicism.",
      "explanation_zh": "西班牙無敵艦隊於1588年由西班牙派遣以征服英格蘭並恢復天主教。",
      "category": "History",
      "isMultipleChoice": false
    },
    {
      "id": 1807,
      "question": "How many jurors are there in a Scottish criminal court jury?",
      "question_zh": "蘇格蘭刑事法庭陪審團有多少名陪審員？",
      "options": [
        "12",
        "15",
        "10",
        "8"
      ],
      "correctAnswers": [1],
      "explanation": "In Scotland, criminal court juries have 15 members, unlike the 12-member juries in England, Wales, and Northern Ireland.",
      "explanation_zh": "在蘇格蘭，刑事法庭陪審團有15名成員，不同於英格蘭、威爾士和北愛爾蘭的12名陪審員。",
      "category": "Government",
      "isMultipleChoice": false
    },
    {
      "id": 1808,
      "question": "Which sport are Jackie Stewart, Jim Clark, and Damon Hill famous for?",
      "question_zh": "傑基·斯圖爾特、吉姆·克拉克和戴蒙·希爾以哪項運動聞名？",
      "options": [
        "Cricket",
        "Tennis",
        "Rugby",
        "Motor racing"
      ],
      "correctAnswers": [3],
      "explanation": "Jackie Stewart, Jim Clark, and Damon Hill are all famous British Formula One racing drivers.",
      "explanation_zh": "傑基·斯圖爾特、吉姆·克拉克和戴蒙·希爾都是著名的英國一級方程式賽車手。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1809,
      "question": "Where is England located within Europe?",
      "question_zh": "英格蘭在歐洲的哪個位置？",
      "options": [
        "South-east Europe",
        "North-west Europe",
        "Central Europe",
        "Southern Europe"
      ],
      "correctAnswers": [1],
      "explanation": "England is located in north-west Europe as part of the British Isles.",
      "explanation_zh": "英格蘭位於歐洲西北部，是不列顛群島的一部分。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1810,
      "question": "What major disaster occurred during Charles II's reign in London?",
      "question_zh": "查理二世統治期間倫敦發生了什麼重大災難？",
      "options": [
        "The Great Fire of London",
        "A plague outbreak",
        "A major flood",
        "An earthquake"
      ],
      "correctAnswers": [0],
      "explanation": "The Great Fire of London occurred in 1666 during Charles II's reign, destroying much of the city including St Paul's Cathedral.",
      "explanation_zh": "1666年查理二世統治期間發生了倫敦大火，摧毀了包括聖保羅大教堂在內的大部分城市。",
      "category": "History",
      "isMultipleChoice": false
    },
    {
      "id": 1811,
      "question": "Which TWO are British overseas territories?",
      "question_zh": "以下哪兩個是英國海外領土？",
      "options": [
        "The Falkland Islands",
        "Isle of Man",
        "Channel Islands",
        "St Helena"
      ],
      "correctAnswers": [0, 3],
      "explanation": "St Helena and the Falkland Islands are British overseas territories, while the Isle of Man and Channel Islands are Crown Dependencies.",
      "explanation_zh": "聖赫勒拿島和福克蘭群島是英國海外領土，而馬恩島和海峽群島是皇家屬地。",
      "category": "General Knowledge",
      "isMultipleChoice": true
    },
    {
      "id": 1812,
      "question": "Who became Prime Minister after the UK's first female Prime Minister?",
      "question_zh": "誰在英國第一位女首相之後成為首相？",
      "options": [
        "Tony Blair",
        "John Major",
        "Gordon Brown",
        "David Cameron"
      ],
      "correctAnswers": [1],
      "explanation": "John Major became Prime Minister in 1990 after Margaret Thatcher, the UK's first female Prime Minister.",
      "explanation_zh": "約翰·梅傑於1990年在英國第一位女首相瑪格麗特·撒切爾之後成為首相。",
      "category": "Government",
      "isMultipleChoice": false
    },
    {
      "id": 1813,
      "question": "Which poet wrote a famous poem about daffodils?",
      "question_zh": "哪位詩人寫了一首著名的水仙花詩？",
      "options": [
        "William Wordsworth",
        "Robert Burns",
        "William Shakespeare",
        "John Keats"
      ],
      "correctAnswers": [0],
      "explanation": "William Wordsworth wrote the famous poem 'The Daffodils' (also known as 'I Wandered Lonely as a Cloud').",
      "explanation_zh": "威廉·華茲華斯寫了著名的詩《水仙花》（也稱為《我孤獨地漫遊如一朵雲》）。",
      "category": "Culture",
      "isMultipleChoice": false
    },
    {
      "id": 1814,
      "question": "Which is one of the highest-grossing film franchises produced in the UK?",
      "question_zh": "英國製作的票房最高的電影系列之一是什麼？",
      "options": [
        "Star Wars",
        "James Bond",
        "Marvel Cinematic Universe",
        "The Lord of the Rings"
      ],
      "correctAnswers": [1],
      "explanation": "James Bond and Harry Potter are the two highest-grossing film franchises produced in the UK.",
      "explanation_zh": "詹姆斯·邦德和哈利·波特是英國製作的兩個票房最高的電影系列。",
      "category": "Culture",
      "isMultipleChoice": false
    },
    {
      "id": 1815,
      "question": "What is the minimum age to ride a motorcycle in the UK?",
      "question_zh": "在英國騎摩托車的最低年齡是多少？",
      "options": [
        "17 years old",
        "18 years old",
        "16 years old",
        "21 years old"
      ],
      "correctAnswers": [2],
      "explanation": "You must be at least 17 years old to ride a motorcycle in the UK.",
      "explanation_zh": "在英國，您必須至少17歲才能騎摩托車。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1816,
      "question": "What is the maximum amount for small claims in Scotland?",
      "question_zh": "蘇格蘭小額索賠的最高金額是多少？",
      "options": [
        "£3,000",
        "£5,000",
        "£10,000",
        "£15,000"
      ],
      "correctAnswers": [1],
      "explanation": "The small claims procedure in Scotland handles disputes of less than £5,000.",
      "explanation_zh": "蘇格蘭的小額索賠程序處理少於5,000英鎊的糾紛。",
      "category": "Government",
      "isMultipleChoice": false
    },
    {
      "id": 1817,
      "question": "When was the European Union established?",
      "question_zh": "歐盟是什麼時候成立的？",
      "options": [
        "Before World War I",
        "During World War II",
        "After World War I",
        "After World War II"
      ],
      "correctAnswers": [3],
      "explanation": "The European Union developed from organizations established after World War II to promote peace and economic cooperation.",
      "explanation_zh": "歐盟是從第二次世界大戰後建立的組織發展而來的，旨在促進和平與經濟合作。",
      "category": "History",
      "isMultipleChoice": false
    },
    {
      "id": 1818,
      "question": "Are the Channel Islands part of the UK?",
      "question_zh": "海峽群島是英國的一部分嗎？",
      "options": [
        "Yes",
        "No"
      ],
      "correctAnswers": [1],
      "explanation": "No. The Channel Islands are Crown Dependencies - they are closely linked to the UK but are not part of it.",
      "explanation_zh": "不是。海峽群島是皇家屬地——它們與英國聯繫密切，但不是其一部分。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1819,
      "question": "What position did Sir Robert Walpole hold in the 1720s?",
      "question_zh": "羅伯特·沃波爾爵士在1720年代擔任什麼職位？",
      "options": [
        "Foreign Secretary",
        "Chancellor",
        "Prime Minister",
        "Speaker of the House"
      ],
      "correctAnswers": [2],
      "explanation": "Sir Robert Walpole was the first person to be called Prime Minister, serving from 1721 to 1742.",
      "explanation_zh": "羅伯特·沃波爾爵士是第一個被稱為首相的人，任期從1721年到1742年。",
      "category": "Government",
      "isMultipleChoice": false
    },
    {
      "id": 1820,
      "question": "On which day is it believed that Jesus Christ died?",
      "question_zh": "人們相信耶穌基督在哪一天去世？",
      "options": [
        "Easter Sunday",
        "Easter Monday",
        "Ash Wednesday",
        "Good Friday"
      ],
      "correctAnswers": [3],
      "explanation": "Good Friday is the day Christians remember the crucifixion of Jesus Christ.",
      "explanation_zh": "耶穌受難日是基督徒紀念耶穌基督被釘十字架的日子。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    },
    {
      "id": 1821,
      "question": "Which court handles small claims in Scotland?",
      "question_zh": "蘇格蘭哪個法院處理小額索賠？",
      "options": [
        "The Crown Court",
        "The Magistrates' Court",
        "The High Court",
        "The Sheriff Court"
      ],
      "correctAnswers": [3],
      "explanation": "In Scotland, the Sheriff Court handles small claims procedures for disputes under £5,000.",
      "explanation_zh": "在蘇格蘭，郡法院處理5,000英鎊以下糾紛的小額索賠程序。",
      "category": "Government",
      "isMultipleChoice": false
    },
    {
      "id": 1822,
      "question": "What are candidates who do not represent any political party called?",
      "question_zh": "不代表任何政黨的候選人被稱為什麼？",
      "options": [
        "Neutral candidates",
        "Independent candidates",
        "Non-partisan candidates",
        "Free candidates"
      ],
      "correctAnswers": [1],
      "explanation": "Candidates who do not represent a political party are called Independent candidates.",
      "explanation_zh": "不代表政黨的候選人被稱為獨立候選人。",
      "category": "Government",
      "isMultipleChoice": false
      },
      {
      "id": 1823,
      "question": "Which sport is Wimbledon famous for?",
      "question_zh": "溫布爾登以哪項運動聞名？",
      "options": [
        "Cricket",
        "Football",
        "Tennis",
        "Rugby"
      ],
      "correctAnswers": [2],
      "explanation": "Wimbledon is the location of the famous annual tennis championship held at the All England Lawn Tennis and Croquet Club.",
      "explanation_zh": "溫布爾登是在全英草地網球和槌球俱樂部舉行的著名年度網球錦標賽的地點。",
      "category": "General Knowledge",
      "isMultipleChoice": false
      },
      {
      "id": 1824,
      "question": "Who discovered penicillin?",
      "question_zh": "誰發現了盤尼西林？",
      "options": [
        "Isaac Newton",
        "Charles Darwin",
        "James Watt",
        "Alexander Fleming"
      ],
      "correctAnswers": [3],
      "explanation": "Sir Alexander Fleming discovered penicillin in 1928, revolutionizing medicine.",
      "explanation_zh": "亞歷山大·弗萊明爵士於1928年發現了盤尼西林，徹底改變了醫學。",
      "category": "General Knowledge",
      "isMultipleChoice": false
    }
  ]
}
