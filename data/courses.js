window.courseCatalog = [
  {
    id: "python-basics",
    title: "Python 基礎知識",
    shortTitle: "Python",
    description: "用短課程、圖解和小測驗建立 Python 入門觀念。",
    lessons: [
      {
        title: "變數是資料的名字",
        body: "變數可以把一個值暫時保存起來，之後用名字取出。Python 不需要先宣告型別，直接用等號指定即可。",
        code: "name = \"小羽\"\nlevel = 1\nprint(name, level)",
        terms: [
          {
            name: "變數",
            short: "幫資料取一個名字。",
            detail: "把變數想成貼了標籤的小盒子：盒子上寫 name，裡面放的是 \"小羽\"。之後看到 name，Python 就會去拿盒子裡的值。"
          },
          {
            name: "指定",
            short: "用 = 把右邊的值放到左邊名字裡。",
            detail: "name = \"小羽\" 不是數學等於，而是把 \"小羽\" 存進 name。"
          }
        ],
        diagram: {
          title: "變數圖解",
          type: "boxes",
          rows: [
            { left: "name", right: "\"小羽\"", note: "文字資料" },
            { left: "level", right: "1", note: "數字資料" }
          ]
        },
        quiz: [
          {
            question: "哪一行可以建立一個叫 age 的變數並存入 18？",
            options: ["age = 18", "18 = age", "let age = 18"],
            answer: 0,
            explain: "Python 用名字在左、值在右的方式指定變數。",
            why: "讀成「把 18 放進 age」。如果反過來寫 18 = age，Python 會看不懂，因為數字不能拿來當盒子的名字。"
          },
          {
            question: "執行 x = 5 後，x 代表什麼？",
            options: ["數字 5", "文字 x", "錯誤語法"],
            answer: 0,
            explain: "x 是變數名稱，它目前保存數字 5。",
            why: "程式後面只要寫 x，Python 就會取出 x 裡目前存的值，也就是 5。"
          },
          {
            question: "Python 字串通常可以用哪個符號包起來？",
            options: ["引號", "大括號", "井字號"],
            answer: 0,
            explain: "像 \"hello\" 或 'hello' 都是常見字串寫法。",
            why: "引號是在告訴 Python：這是一段文字，不是變數名稱。"
          }
        ]
      },
      {
        title: "條件判斷讓程式做選擇",
        body: "if 可以根據條件決定要不要執行某段程式。條件成立時跑 if 區塊，不成立時可以跑 else 區塊。",
        code: "score = 80\nif score >= 60:\n    print(\"通過\")\nelse:\n    print(\"再練習\")",
        terms: [
          {
            name: "if",
            short: "如果條件成立，就執行下面那一區。",
            detail: "if 後面會放一個可以判斷真假的條件，例如 score >= 60。成立才會走進 if 區塊。"
          },
          {
            name: "縮排",
            short: "行首空白，代表這行屬於哪個區塊。",
            detail: "Python 不用大括號包住 if 內容，而是看前面的空白。往右縮進的行，就是 if 裡面的動作。"
          },
          {
            name: "else",
            short: "if 不成立時走的路線。",
            detail: "else 可以想成「不然」。如果 score 沒有達到 60，就執行 else 底下的內容。"
          }
        ],
        diagram: {
          title: "縮排圖解",
          type: "indent",
          rows: [
            { indent: 0, text: "if score >= 60:", tag: "條件" },
            { indent: 1, text: "print(\"通過\")", tag: "屬於 if" },
            { indent: 0, text: "else:", tag: "否則" },
            { indent: 1, text: "print(\"再練習\")", tag: "屬於 else" }
          ]
        },
        quiz: [
          {
            question: "if 後面的條件成立時，會執行哪一段？",
            options: ["縮排在 if 底下的程式", "所有檔案", "else 底下的程式"],
            answer: 0,
            explain: "Python 用縮排表示區塊，if 成立就執行它底下的縮排內容。",
            why: "看這題時不要背答案，先找「哪幾行往右縮」。那些往右縮、而且在 if 下方的行，就是 if 成立時會執行的內容。"
          },
          {
            question: "score >= 60 的意思是什麼？",
            options: ["score 大於或等於 60", "score 一定等於 60", "score 小於 60"],
            answer: 0,
            explain: ">= 是大於或等於，用來比較數值。",
            why: "把它念成「score 有沒有至少 60 分？」結果只會是真或假，if 就靠這個結果選路。"
          },
          {
            question: "else 通常在什麼時候執行？",
            options: ["if 條件不成立時", "程式一開始", "每次都會執行"],
            answer: 0,
            explain: "else 是條件沒有通過時的備用路線。",
            why: "else 不會自己判斷分數，它只是接住 if 失敗的情況。"
          }
        ]
      },
      {
        title: "迴圈用來重複做事",
        body: "for 迴圈常用來走訪一串資料，或搭配 range 產生固定次數。它可以讓重複動作保持簡潔。",
        code: "for i in range(3):\n    print(\"練習\", i)",
        terms: [
          {
            name: "for",
            short: "依序拿出資料並重複執行。",
            detail: "for 會一輪一輪跑，每一輪把下一個值放進暫時的變數，例如 i。"
          },
          {
            name: "range",
            short: "產生一串數字。",
            detail: "range(3) 會給 0、1、2。它到 3 之前停止，所以不包含 3。"
          },
          {
            name: "迴圈區塊",
            short: "縮排在 for 底下、每一輪都會執行的程式。",
            detail: "和 if 一樣，for 也靠縮排決定哪些行屬於迴圈。"
          }
        ],
        diagram: {
          title: "for 迴圈圖解",
          type: "loop",
          rows: [
            { left: "第 1 輪", right: "i = 0" },
            { left: "第 2 輪", right: "i = 1" },
            { left: "第 3 輪", right: "i = 2" }
          ]
        },
        quiz: [
          {
            question: "range(3) 會產生哪些數字？",
            options: ["0, 1, 2", "1, 2, 3", "3, 2, 1"],
            answer: 0,
            explain: "range(3) 從 0 開始，到 3 之前停止。",
            why: "Python 很多計數都從 0 開始。range(3) 的 3 是停止點，不是最後一個數字。"
          },
          {
            question: "for item in items: 最適合做什麼？",
            options: ["逐一處理 items 裡的資料", "建立資料庫", "結束程式"],
            answer: 0,
            explain: "for 會一個一個取出集合中的項目。",
            why: "把 items 想成一排卡片，for 每輪拿一張，放到 item 這個名字裡。"
          },
          {
            question: "Python 迴圈區塊靠什麼判斷範圍？",
            options: ["縮排", "分號", "檔名"],
            answer: 0,
            explain: "縮排是 Python 非常重要的語法訊號。",
            why: "往右縮排的行會被視為同一個區塊；回到左邊，就代表離開那個區塊。"
          }
        ]
      },
      {
        title: "函式把步驟整理成技能",
        body: "def 可以定義函式。函式能把常用步驟包起來，需要時再呼叫，讓程式更容易閱讀與重複使用。",
        code: "def greet(name):\n    return \"你好，\" + name\n\nprint(greet(\"小羽\"))",
        terms: [
          {
            name: "函式",
            short: "一組取好名字的步驟。",
            detail: "把常用動作包成函式後，只要呼叫名字就能重複使用。"
          },
          {
            name: "參數",
            short: "呼叫函式時交給它的資料。",
            detail: "greet(name) 裡的 name 是入口，呼叫 greet(\"小羽\") 時，\"小羽\" 會被放進 name。"
          },
          {
            name: "return",
            short: "把函式算出的結果送回去。",
            detail: "return 後面的值會成為這次函式呼叫的結果。"
          }
        ],
        diagram: {
          title: "函式圖解",
          type: "flow",
          rows: [
            { left: "輸入", right: "\"小羽\"" },
            { left: "函式", right: "greet(name)" },
            { left: "輸出", right: "\"你好，小羽\"" }
          ]
        },
        quiz: [
          {
            question: "定義函式要使用哪個關鍵字？",
            options: ["def", "make", "function"],
            answer: 0,
            explain: "Python 使用 def 來定義函式。",
            why: "看到 def greet(name): 可以念成「定義一個叫 greet 的技能，它需要 name 這個資料」。"
          },
          {
            question: "return 的用途是什麼？",
            options: ["把結果傳回函式外", "刪除變數", "開始迴圈"],
            answer: 0,
            explain: "return 會把函式的結果交回給呼叫它的地方。",
            why: "如果沒有 return，函式可能有做事，但外面拿不到它算出的結果。"
          },
          {
            question: "greet(\"小羽\") 裡的小羽是什麼？",
            options: ["傳入函式的參數", "Python 檔名", "錯誤訊息"],
            answer: 0,
            explain: "呼叫函式時可以把資料放進括號，交給函式使用。",
            why: "\"小羽\" 會進入 greet 的 name 位置，所以函式裡可以拿 name 來組合問候語。"
          }
        ]
      }
    ]
  },
  {
    id: "git-basics",
    title: "Git 基礎概念",
    shortTitle: "Git",
    description: "示範同一個載體可以載入不同領域課程。",
    lessons: [
      {
        title: "版本控制像學習存檔點",
        body: "Git 可以記錄檔案變化，讓你知道每次改了什麼，也能回頭查看過去的狀態。",
        code: "git status\ngit add index.html\ngit commit -m \"Add first lesson\"",
        terms: [
          {
            name: "repository",
            short: "Git 追蹤的專案資料夾。",
            detail: "可以把 repository 想成一個有時間軸的專案盒子，裡面記錄每次重要變化。"
          },
          {
            name: "commit",
            short: "一次有說明的存檔點。",
            detail: "commit 會保存目前變更，並附上一句說明，方便之後理解當時做了什麼。"
          }
        ],
        diagram: {
          title: "Git 流程圖解",
          type: "flow",
          rows: [
            { left: "修改", right: "working tree" },
            { left: "準備", right: "git add" },
            { left: "存檔", right: "git commit" }
          ]
        },
        quiz: [
          {
            question: "commit 最像下面哪一種概念？",
            options: ["有說明的存檔點", "刪除整個專案", "更換電腦名稱"],
            answer: 0,
            explain: "commit 是一次保存變更的紀錄。",
            why: "每個 commit 都會留下 ID、作者、時間和訊息，所以很適合回顧專案演進。"
          },
          {
            question: "git status 常用來看什麼？",
            options: ["目前檔案變更狀態", "網路速度", "電腦電量"],
            answer: 0,
            explain: "git status 會顯示哪些檔案被修改、暫存或尚未追蹤。",
            why: "開始提交前先看 status，可以避免漏掉檔案或提交錯東西。"
          }
        ]
      }
    ]
  },
  {
    id: "english-basics",
    title: "英文基礎入門",
    shortTitle: "英文",
    description: "從句子結構、be 動詞、一般動詞和疑問句開始建立英文基礎。",
    lessons: [
      {
        title: "英文句子的基本順序",
        body: "英文最常見的句子順序是「誰 + 做什麼 / 是什麼」。先抓住主詞和動詞，就比較不會被一整句英文嚇到。",
        code: "I like cats.\nShe is a student.\nThey play games.",
        terms: [
          {
            name: "主詞 Subject",
            short: "句子裡的「誰」或「什麼東西」。",
            detail: "例如 I、She、They、Tom 都可以當主詞。看到英文句子時，先找主詞，可以知道這句話在講誰。"
          },
          {
            name: "動詞 Verb",
            short: "句子裡的動作或狀態。",
            detail: "like、play 是動作；is、are 則常用來表示「是」或「處於某種狀態」。"
          },
          {
            name: "受詞 Object",
            short: "動作影響到的對象。",
            detail: "在 I like cats. 裡，cats 是被喜歡的對象，所以是受詞。"
          }
        ],
        diagram: {
          title: "句子順序圖解",
          type: "flow",
          rows: [
            { left: "主詞", right: "I" },
            { left: "動詞", right: "like" },
            { left: "受詞", right: "cats" }
          ]
        },
        quiz: [
          {
            question: "在句子 I like cats. 裡，主詞是哪一個？",
            options: ["I", "like", "cats"],
            answer: 0,
            explain: "I 是這句話裡的「誰」，所以是主詞。",
            why: "先問自己：這句話是誰在做動作？答案是 I，所以 I 是主詞。like 是動詞，cats 是受詞。"
          },
          {
            question: "在 They play games. 裡，動詞是哪一個？",
            options: ["play", "They", "games"],
            answer: 0,
            explain: "play 是動作，所以是動詞。",
            why: "動詞通常回答「做什麼」。They 做什麼？play。games 是玩的對象。"
          },
          {
            question: "英文最基本的肯定句常見順序是什麼？",
            options: ["主詞 + 動詞", "動詞 + 主詞", "受詞 + 主詞"],
            answer: 0,
            explain: "英文常見順序是先說誰，再說做什麼。",
            why: "例如 I study.、She runs. 都是主詞在前，動詞在後。先掌握這個順序，後面加受詞或時間地點會更容易。"
          }
        ]
      },
      {
        title: "be 動詞：am / is / are",
        body: "be 動詞常用來表示「是」或「狀態」。主詞不同，搭配的 be 動詞也不同：I 用 am，單數用 is，複數和 you 用 are。",
        code: "I am happy.\nShe is a teacher.\nYou are ready.\nThey are friends.",
        terms: [
          {
            name: "be 動詞",
            short: "am、is、are 這一類表示狀態的動詞。",
            detail: "be 動詞常把主詞和後面的身分、狀態、位置連起來。"
          },
          {
            name: "單數",
            short: "一個人或一個東西。",
            detail: "She、He、It、Tom 都常視為單數，所以搭配 is。"
          },
          {
            name: "複數",
            short: "兩個以上的人或東西。",
            detail: "They、we、my friends 都是複數概念，通常搭配 are。"
          }
        ],
        diagram: {
          title: "be 動詞配對",
          type: "boxes",
          rows: [
            { left: "I", right: "am", note: "I am" },
            { left: "She / He / It", right: "is", note: "單數" },
            { left: "You / We / They", right: "are", note: "你、我們、他們" }
          ]
        },
        quiz: [
          {
            question: "I ___ happy. 空格應該填什麼？",
            options: ["am", "is", "are"],
            answer: 0,
            explain: "I 要搭配 am。",
            why: "I 的 be 動詞很固定，通常是 I am。可以先把 I am 當成一組記起來。"
          },
          {
            question: "She ___ a teacher. 空格應該填什麼？",
            options: ["is", "am", "are"],
            answer: 0,
            explain: "She 是單數，所以搭配 is。",
            why: "She 代表一位女性，屬於單數主詞。單數第三人稱常用 is。"
          },
          {
            question: "They ___ friends. 空格應該填什麼？",
            options: ["are", "is", "am"],
            answer: 0,
            explain: "They 是複數，所以搭配 are。",
            why: "They 表示他們或她們，通常是兩個以上，所以用 are。"
          }
        ]
      },
      {
        title: "一般動詞：每天做的事",
        body: "一般動詞用來描述動作，例如 study、eat、play、read。當主詞是 he / she / it 這類單數第三人稱時，現在式動詞常會加 s。",
        code: "I study English.\nShe studies English.\nThey read books.",
        terms: [
          {
            name: "一般動詞",
            short: "描述動作的字。",
            detail: "study、eat、play、read 都是一般動詞，可以說明主詞做了什麼。"
          },
          {
            name: "第三人稱單數",
            short: "he、she、it 或單一名字。",
            detail: "現在式裡，第三人稱單數主詞後面的動詞常加 s 或 es，例如 likes、studies。"
          },
          {
            name: "現在式",
            short: "描述現在、習慣或事實。",
            detail: "I study English. 可以表示我現在學英文，也可以表示我平常有學英文。"
          }
        ],
        diagram: {
          title: "動詞加 s 圖解",
          type: "boxes",
          rows: [
            { left: "I / You / We / They", right: "study", note: "不加 s" },
            { left: "He / She / It", right: "studies", note: "加 s / es" },
            { left: "Tom", right: "likes", note: "單一名字" }
          ]
        },
        quiz: [
          {
            question: "She ___ English every day. 空格應該填什麼？",
            options: ["studies", "study", "studying"],
            answer: 0,
            explain: "She 是第三人稱單數，現在式動詞 study 變 studies。",
            why: "看到 She / He / It 當主詞時，要提醒自己檢查一般動詞有沒有加 s 或 es。study 結尾 y 變 ies。"
          },
          {
            question: "They ___ books. 空格應該填什麼？",
            options: ["read", "reads", "reading"],
            answer: 0,
            explain: "They 是複數主詞，現在式一般動詞用 read。",
            why: "They 不需要讓動詞加 s。reads 通常會搭配 he、she、it 或單一名字。"
          },
          {
            question: "Tom likes music. 這裡 likes 為什麼有 s？",
            options: ["Tom 是第三人稱單數", "music 是複數", "like 一定要加 s"],
            answer: 0,
            explain: "Tom 是一個人，屬於第三人稱單數。",
            why: "不是因為 music，也不是 like 永遠加 s，而是因為主詞 Tom 決定了動詞形式。"
          }
        ]
      },
      {
        title: "疑問句：把問題問清楚",
        body: "英文問問題時，常把 be 動詞或助動詞放到主詞前面。be 動詞句直接把 am / is / are 提前；一般動詞句常用 do / does 幫忙。",
        code: "Are you ready?\nIs she a student?\nDo you like cats?\nDoes he play games?",
        terms: [
          {
            name: "疑問句",
            short: "用來問問題的句子。",
            detail: "英文疑問句常會調整字序，不一定和中文一樣只在句尾加嗎。"
          },
          {
            name: "助動詞 do / does",
            short: "幫一般動詞形成問題。",
            detail: "一般動詞要問問題時，常用 Do 或 Does 放到句首，例如 Do you like cats?"
          },
          {
            name: "字序",
            short: "單字排列的順序。",
            detail: "Are you ready? 的順序是 Are + you，而不是 You are ready 的原本順序。"
          }
        ],
        diagram: {
          title: "問句轉換",
          type: "flow",
          rows: [
            { left: "肯定句", right: "You are ready." },
            { left: "be 提前", right: "Are you ready?" },
            { left: "一般動詞", right: "Do you like cats?" }
          ]
        },
        quiz: [
          {
            question: "You are ready. 變成問句最自然是哪一個？",
            options: ["Are you ready?", "Do you are ready?", "You ready are?"],
            answer: 0,
            explain: "be 動詞句變問句時，常把 are 放到主詞 you 前面。",
            why: "原句 You are ready. 有 be 動詞 are，所以問句直接把 are 提前：Are you ready?"
          },
          {
            question: "___ you like cats? 空格應該填什麼？",
            options: ["Do", "Are", "Is"],
            answer: 0,
            explain: "like 是一般動詞，問句常用 Do 幫忙。",
            why: "You like cats. 沒有 be 動詞，所以不能直接用 Are。一般動詞問句常用 Do + 主詞 + 動詞。"
          },
          {
            question: "Does he play games? 裡為什麼用 Does？",
            options: ["he 是第三人稱單數", "games 是遊戲", "play 已經加 s"],
            answer: 0,
            explain: "he 是第三人稱單數，所以問句用 does。",
            why: "用 does 之後，後面的主要動詞要回到原形 play，不寫 plays。"
          }
        ]
      }
    ]
  },
  {
    id: "sql-basics",
    title: "SQL 基礎入門",
    shortTitle: "SQL",
    description: "從資料表、查詢、篩選和排序開始學會讀懂資料庫。",
    lessons: [
      {
        title: "資料表像一張有欄位的表格",
        body: "SQL 常用來跟資料庫溝通。資料通常放在資料表裡，資料表像試算表：直向是欄位，橫向是一筆一筆資料。",
        code: "users\n\nid | name | age\n1  | Amy  | 18\n2  | Ben  | 21",
        terms: [
          {
            name: "資料庫 Database",
            short: "存放資料的地方。",
            detail: "資料庫像一個整理好的資料櫃，裡面可以有很多張資料表，例如 users、orders、products。"
          },
          {
            name: "資料表 Table",
            short: "同一類資料放在一起的表格。",
            detail: "users 資料表可以放使用者資料，products 資料表可以放商品資料。"
          },
          {
            name: "欄位 Column",
            short: "每筆資料有哪些屬性。",
            detail: "name、age、email 都可以是欄位。欄位像表格最上方的標題。"
          }
        ],
        diagram: {
          title: "資料表圖解",
          type: "boxes",
          rows: [
            { left: "Table", right: "users", note: "資料表" },
            { left: "Columns", right: "id, name, age", note: "欄位" },
            { left: "Rows", right: "1, Amy, 18", note: "一筆資料" }
          ]
        },
        quiz: [
          {
            question: "在 users 表中，name、age 通常叫做什麼？",
            options: ["欄位", "資料庫", "排序"],
            answer: 0,
            explain: "name、age 是資料表裡的欄位。",
            why: "欄位描述每筆資料有哪些屬性。每一列資料都會依照欄位放入對應的值。"
          },
          {
            question: "一筆使用者資料，例如 1, Amy, 18，通常叫做什麼？",
            options: ["一列資料", "一個資料庫", "一個指令"],
            answer: 0,
            explain: "橫向的一筆資料通常稱為 row，也就是一列資料。",
            why: "欄位是直向分類；row 是把同一個人的 id、name、age 串在一起的一筆紀錄。"
          },
          {
            question: "SQL 主要用來做什麼？",
            options: ["跟資料庫溝通", "畫圖片", "製作音樂"],
            answer: 0,
            explain: "SQL 是常見的資料庫查詢語言。",
            why: "你可以用 SQL 查資料、篩資料、排序資料，也可以新增、修改或刪除資料。"
          }
        ]
      },
      {
        title: "SELECT：選出想看的欄位",
        body: "SELECT 用來指定你想看哪些欄位，FROM 用來指定資料來自哪一張資料表。最基本的查詢就是 SELECT ... FROM ...。",
        code: "SELECT name, age\nFROM users;",
        terms: [
          {
            name: "SELECT",
            short: "選出要看的欄位。",
            detail: "SELECT name, age 代表只看 name 和 age 這兩個欄位。"
          },
          {
            name: "FROM",
            short: "指定資料表來源。",
            detail: "FROM users 代表資料要從 users 這張資料表拿。"
          },
          {
            name: "*",
            short: "代表所有欄位。",
            detail: "SELECT * FROM users; 會查出 users 表裡所有欄位。剛開始方便，但正式查詢時通常會指定需要的欄位。"
          }
        ],
        diagram: {
          title: "SELECT 查詢圖解",
          type: "flow",
          rows: [
            { left: "選欄位", right: "SELECT name, age" },
            { left: "選資料表", right: "FROM users" },
            { left: "得到結果", right: "name + age" }
          ]
        },
        quiz: [
          {
            question: "SELECT name FROM users; 會查出哪個欄位？",
            options: ["name", "users", "所有欄位"],
            answer: 0,
            explain: "SELECT 後面寫 name，所以查出 name 欄位。",
            why: "FROM users 只是告訴 SQL 資料來源是 users 表，不是要顯示 users 這個欄位。"
          },
          {
            question: "FROM users 的意思是什麼？",
            options: ["從 users 資料表取資料", "建立 users 欄位", "刪除 users"],
            answer: 0,
            explain: "FROM 用來指定資料表來源。",
            why: "SQL 查詢常像一句話：SELECT 要看什麼，FROM 從哪裡看。"
          },
          {
            question: "SELECT * FROM users; 裡的 * 代表什麼？",
            options: ["所有欄位", "只有第一筆", "錯誤符號"],
            answer: 0,
            explain: "* 代表查出所有欄位。",
            why: "星號很方便，但資料多時可能查出太多不需要的欄位，所以之後要學會只選需要的欄位。"
          }
        ]
      },
      {
        title: "WHERE：只留下符合條件的資料",
        body: "WHERE 用來加條件，讓查詢結果只留下你想看的資料。例如只看年齡大於等於 18 的使用者。",
        code: "SELECT name, age\nFROM users\nWHERE age >= 18;",
        terms: [
          {
            name: "WHERE",
            short: "設定篩選條件。",
            detail: "WHERE age >= 18 代表只留下 age 大於或等於 18 的資料。"
          },
          {
            name: "條件",
            short: "判斷資料要不要留下的規則。",
            detail: "age >= 18、name = 'Amy' 都是條件。符合條件的資料會出現在結果裡。"
          },
          {
            name: "比較運算子",
            short: "用來比較大小或是否相等。",
            detail: "=、>、<、>=、<= 都是常見比較運算子。SQL 判斷相等通常用單一等號 =。"
          }
        ],
        diagram: {
          title: "WHERE 篩選圖解",
          type: "flow",
          rows: [
            { left: "原始資料", right: "所有 users" },
            { left: "條件", right: "age >= 18" },
            { left: "結果", right: "成年使用者" }
          ]
        },
        quiz: [
          {
            question: "WHERE age >= 18 代表什麼？",
            options: ["只留下 age 大於或等於 18 的資料", "把 age 改成 18", "刪除 age 欄位"],
            answer: 0,
            explain: "WHERE 是篩選條件，不是修改資料。",
            why: "這句話只是查詢時過濾結果，符合 age >= 18 的 row 才會被顯示。"
          },
          {
            question: "如果想找 name 等於 Amy 的資料，哪個條件比較合理？",
            options: ["WHERE name = 'Amy'", "WHERE name > 'Amy'", "SELECT name = Amy"],
            answer: 0,
            explain: "SQL 判斷相等常用 =，文字通常用引號包起來。",
            why: "name 是欄位，'Amy' 是文字值。WHERE name = 'Amy' 的意思是只留下 name 欄位等於 Amy 的資料。"
          },
          {
            question: "WHERE 放在查詢裡主要負責什麼？",
            options: ["篩選資料", "指定資料表", "指定顯示欄位"],
            answer: 0,
            explain: "WHERE 負責篩選資料。",
            why: "SELECT 指定欄位，FROM 指定資料表，WHERE 指定哪些 row 要留下來。"
          }
        ]
      },
      {
        title: "ORDER BY 與 LIMIT：排序和取前幾筆",
        body: "ORDER BY 可以排序結果，LIMIT 可以限制顯示幾筆。這很適合用來看最高分、最新資料或前幾名。",
        code: "SELECT name, score\nFROM students\nORDER BY score DESC\nLIMIT 3;",
        terms: [
          {
            name: "ORDER BY",
            short: "依照欄位排序。",
            detail: "ORDER BY score 代表依照 score 欄位排序。"
          },
          {
            name: "ASC / DESC",
            short: "升冪與降冪。",
            detail: "ASC 是小到大，DESC 是大到小。分數排行榜通常會用 DESC。"
          },
          {
            name: "LIMIT",
            short: "限制結果筆數。",
            detail: "LIMIT 3 代表只顯示前三筆結果。"
          }
        ],
        diagram: {
          title: "排行榜查詢圖解",
          type: "flow",
          rows: [
            { left: "選資料", right: "SELECT name, score" },
            { left: "排序", right: "ORDER BY score DESC" },
            { left: "取前三", right: "LIMIT 3" }
          ]
        },
        quiz: [
          {
            question: "ORDER BY score DESC 代表什麼？",
            options: ["依 score 從大到小排序", "依 score 從小到大排序", "只顯示 score 欄位"],
            answer: 0,
            explain: "DESC 是降冪，也就是從大到小。",
            why: "如果你要做分數排行榜，通常希望高分在前面，所以會用 ORDER BY score DESC。"
          },
          {
            question: "LIMIT 3 的意思是什麼？",
            options: ["只顯示 3 筆結果", "把分數變成 3", "從第 3 欄開始查"],
            answer: 0,
            explain: "LIMIT 會限制查詢結果的筆數。",
            why: "排序後再 LIMIT 3，就能拿到排序結果的前三筆。"
          },
          {
            question: "如果想看最新的 5 筆資料，通常會用哪種組合？",
            options: ["ORDER BY created_at DESC LIMIT 5", "WHERE created_at LIMIT DESC", "SELECT LIMIT created_at"],
            answer: 0,
            explain: "先依時間由新到舊排序，再限制 5 筆。",
            why: "created_at 通常代表建立時間。DESC 讓新的在前面，LIMIT 5 只取前五筆。"
          }
        ]
      }
    ]
  }
];
