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
  }
];
