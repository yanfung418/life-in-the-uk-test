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
      isMultipleChoice: false
    },
    {
      id: 102,
      question: "Who is the patron saint of Scotland?",
      question_zh: "蘇格蘭的守護聖人是誰？",
      options: ["St George", "St Andrew", "St Patrick", "St David"],
      correctAnswers: [1],
      explanation: "St Andrew is the patron saint of Scotland. St George is for England, St David for Wales, and St Patrick for Northern Ireland.",
      isMultipleChoice: false
    },
    {
      id: 103,
      question: "When is Remembrance Day commemorated?",
      question_zh: "陣亡將士紀念日（Remembrance Day）是哪一天？",
      options: ["11th November", "11th October", "5th November", "1st January"],
      correctAnswers: [0],
      explanation: "Remembrance Day is celebrated on 11th November each year to commemorate those who died in wars.",
      isMultipleChoice: false
    },
    {
      id: 104,
      question: "Which of these is a famous garden in London?",
      question_zh: "以下哪一個是倫敦著名的花園？",
      options: ["Kew Gardens", "Snowdonia", "The Lake District", "Loch Lomond"],
      correctAnswers: [0],
      explanation: "Kew Gardens is a world-famous botanical garden in southwest London.",
      isMultipleChoice: false
    },
    {
      id: 105,
      question: "Which king won the Battle of Agincourt in 1415?",
      question_zh: "哪位國王在 1415 年贏得了阿金庫爾戰役？",
      options: ["Henry V", "Edward III", "Richard III", "Henry VIII"],
      correctAnswers: [0],
      explanation: "Henry V won the Battle of Agincourt against the French in 1415.",
      isMultipleChoice: false
    },
    {
      id: 106,
      question: "What is the capital city of Northern Ireland?",
      question_zh: "北愛爾蘭的首都是哪座城市？",
      options: ["Belfast", "Londonderry", "Armagh", "Newry"],
      correctAnswers: [0],
      explanation: "Belfast is the capital city of Northern Ireland.",
      isMultipleChoice: false
    },
    {
      id: 107,
      question: "How often are general elections held in the UK?",
      question_zh: "英國一般多久舉行一次國會大選？",
      options: ["Every 5 years", "Every 4 years", "Every 3 years", "Every 6 years"],
      correctAnswers: [0],
      explanation: "General elections are held at least every five years, as set by the Fixed-term Parliaments Act.",
      isMultipleChoice: false
    },
    {
      id: 108,
      question: "Which landmark is located in Wiltshire, England?",
      question_zh: "哪個地標位於英格蘭威爾特郡（Wiltshire）？",
      options: ["Stonehenge", "Hadrian's Wall", "The Giant's Causeway", "Loch Ness"],
      correctAnswers: [0],
      explanation: "Stonehenge is a prehistoric monument located in Wiltshire, England.",
      isMultipleChoice: false
    },
    {
      id: 109,
      question: "Who was the first woman Prime Minister of the UK?",
      question_zh: "英國第一位女首相是誰？",
      options: ["Margaret Thatcher", "Theresa May", "Angela Merkel", "Nicola Sturgeon"],
      correctAnswers: [0],
      explanation: "Margaret Thatcher was the first female Prime Minister of the UK, serving from 1979 to 1990.",
      isMultipleChoice: false
    },
    {
      id: 110,
      question: "Which of these is a UK territory?",
      question_zh: "以下哪一個是英國的領土？",
      options: ["Gibraltar", "Malta", "Cyprus", "Iceland"],
      correctAnswers: [0],
      explanation: "Gibraltar is a British Overseas Territory located at the southern tip of the Iberian Peninsula.",
      isMultipleChoice: false
    },
    {
      id: 111,
      question: "What is the name of the official home of the Prime Minister?",
      question_zh: "首相的官方住所名稱是什麼？",
      options: ["10 Downing Street", "Buckingham Palace", "The White House", "Windsor Castle"],
      correctAnswers: [0],
      explanation: "10 Downing Street in London is the official residence and office of the Prime Minister.",
      isMultipleChoice: false
    },
    {
      id: 112,
      question: "Which flower is the symbol of England?",
      question_zh: "以下哪一種花是英格蘭的象徵？",
      options: ["The Rose", "The Thistle", "The Daffodil", "The Shamrock"],
      correctAnswers: [0],
      explanation: "The Tudor Rose is the national emblem of England.",
      isMultipleChoice: false
    },
    {
      id: 113,
      question: "When did the UK join the European Economic Community (EEC)?",
      question_zh: "英國於哪一年加入歐洲經濟共同體（EEC）？",
      options: ["1973", "1963", "1983", "1953"],
      correctAnswers: [0],
      explanation: "The UK joined the EEC (the precursor to the EU) in 1973.",
      isMultipleChoice: false
    },
    {
      id: 114,
      question: "What is the maximum amount you can claim in a small claims court in England and Wales?",
      question_zh: "在英格蘭及威爾斯，小額索償法庭可申索的最高金額是多少？",
      options: ["£10,000", "£5,000", "£15,000", "£20,000"],
      correctAnswers: [0],
      explanation: "In England and Wales, the small claims limit is generally £10,000.",
      isMultipleChoice: false
    },
    {
      id: 115,
      question: "Which of these is a famous British writer?",
      question_zh: "以下哪一位是著名的英國作家？",
      options: ["Charles Dickens", "Albert Einstein", "Isaac Newton", "Alexander Fleming"],
      correctAnswers: [0],
      explanation: "Charles Dickens was a famous English writer and social critic.",
      isMultipleChoice: false
    },
    {
      id: 116,
      question: "What is 'The Cenotaph'?",
      question_zh: "「The Cenotaph」是指什麼？",
      options: ["A war memorial", "A museum", "A royal palace", "A theatre"],
      correctAnswers: [0],
      explanation: "The Cenotaph is a war memorial on Whitehall in London.",
      isMultipleChoice: false
    },
    {
      id: 117,
      question: "How many members does the Scottish Parliament have?",
      question_zh: "蘇格蘭議會（Scottish Parliament）有多少名議員？",
      options: ["129", "650", "60", "90"],
      correctAnswers: [0],
      explanation: "The Scottish Parliament consists of 129 Members (MSPs).",
      isMultipleChoice: false
    },
    {
      id: 118,
      question: "Which of these sports originated in the UK?",
      question_zh: "以下哪一項運動起源於英國？",
      options: ["Cricket", "Basketball", "Baseball", "Volleyball"],
      correctAnswers: [0],
      explanation: "Cricket is a bat-and-ball game that originated in south-east England.",
      isMultipleChoice: false
    },
    {
      id: 119,
      question: "Who is the head of the Church of England?",
      question_zh: "英格蘭教會（Church of England）的領袖是誰？",
      options: ["The Monarch", "The Archbishop of Canterbury", "The Pope", "The Prime Minister"],
      correctAnswers: [0],
      explanation: "The Monarch (currently King Charles III) is the Supreme Governor of the Church of England.",
      isMultipleChoice: false
    },
    {
      id: 120,
      question: "Which festival is celebrated on 31st October?",
      question_zh: "哪個節日是在10月31日慶祝？",
      options: ["Halloween", "Easter", "Christmas", "Guy Fawkes Night"],
      correctAnswers: [0],
      explanation: "Halloween is celebrated on 31st October.",
      isMultipleChoice: false
    },
    {
      id: 121,
      question: "What is the minimum age to buy alcohol in the UK?",
      question_zh: "在英國購買酒精的最低法定年齡是多少？",
      options: ["18", "16", "21", "25"],
      correctAnswers: [0],
      explanation: "The minimum legal age to buy alcohol in the UK is 18.",
      isMultipleChoice: false
    },
    {
      id: 122,
      question: "Which of these is a primary school stage?",
      question_zh: "以下哪一個是小學教育階段？",
      options: ["Key Stage 1", "Key Stage 3", "GCSE", "A-Levels"],
      correctAnswers: [0],
      explanation: "Key Stage 1 and 2 are primary school stages in England.",
      isMultipleChoice: false
    },
    {
      id: 123,
      question: "What is the Koh-i-Noor?",
      question_zh: "什麼是 Koh-i-Noor？",
      options: ["A diamond", "A mountain", "A river", "A city"],
      correctAnswers: [0],
      explanation: "The Koh-i-Noor is one of the largest cut diamonds in the world, part of the Crown Jewels.",
      isMultipleChoice: false
    },
    {
      id: 124,
      question: "Who was the Prime Minister during the Second World War?",
      question_zh: "第二次世界大戰期間的英國首相是誰？",
      options: ["Winston Churchill", "Clement Attlee", "Neville Chamberlain", "Anthony Eden"],
      correctAnswers: [0],
      explanation: "Winston Churchill was the UK Prime Minister during most of the Second World War.",
      isMultipleChoice: false
    }
  ]
};
