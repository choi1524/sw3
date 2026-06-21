// Browser Fallback for Antigravity API (to support running in Safari/Chrome on GitHub Pages)
if (!window.antigravity) {
  console.log("Antigravity API not found. Running in browser simulation mode.");
  
  let logListener = null;
  
  window.antigravity = {
    getRestaurants: () => {
      return [
        {
          name: "고른햇살",
          category: "한식",
          price: 9000,
          time: "3분",
          description: "참치김밥과 라볶이가 매우 유명한 고려대학교 학생들의 국가대표급 소울 분식점.",
          tags: ["참치김밥", "라볶이맛집", "가성비최고"]
        },
        {
          name: "본죽",
          category: "한식",
          price: 10000,
          time: "6분",
          description: "속을 편안하게 달래주는 든든한 죽 전문점. 아플 때나 해장할 때 제격입니다.",
          tags: ["죽전문점", "속편한식사", "건강식"]
        },
        {
          name: "고대분식",
          category: "한식",
          price: 7000,
          time: "3분",
          description: "푸짐한 양의 제육덮밥과 보글보글 끓여 나오는 순두부찌개가 일품인 노포 분식집.",
          tags: ["제육덮밥", "순두부찌개", "학생소울푸드"]
        },
        {
          name: "김밥천국",
          category: "한식",
          price: 6000,
          time: "2분",
          description: "빠르고 가성비 좋게 한 끼를 해결할 수 있는, 없는 메뉴가 없는 대표 분식 브랜드.",
          tags: ["간편식사", "초가성비", "메뉴다양"]
        },
        {
          name: "엽기떡볶이",
          category: "한식",
          price: 14000,
          time: "5분",
          description: "화끈하고 강력한 매운맛으로 학업 스트레스를 한 번에 날려주는 중독성 강한 떡볶이.",
          tags: ["엽떡", "매운맛", "스트레스해소"]
        },
        {
          name: "맘스터치",
          category: "양식",
          price: 8000,
          time: "4분",
          description: "바삭하고 매콤한 통닭다리살 패티가 가득 들어간 싸이버거가 대표적인 버거 맛집.",
          tags: ["싸이버거", "치킨버거", "갓성비"]
        },
        {
          name: "버거킹",
          category: "양식",
          price: 11000,
          time: "5분",
          description: "직화로 구워 불맛 가득한 100% 순쇠고기 패티와 신선한 야채가 듬뿍 들어간 와퍼 맛집.",
          tags: ["와퍼", "프리미엄버거", "든든한한끼"]
        },
        {
          name: "롤링파스타",
          category: "양식",
          price: 12000,
          time: "5분",
          description: "백종원의 캐주얼 이탈리안 레스토랑. 저렴한 가격에 고급 파스타와 피자를 즐길 수 있습니다.",
          tags: ["가성비파스타", "이탈리안", "데이트코스"]
        },
        {
          name: "피자스쿨",
          category: "양식",
          price: 9000,
          time: "6분",
          description: "갓 구워 쫄깃하고 달콤한 고구마피자와 짭조름한 페퍼로니피자를 합리적인 가격에 즐기는 곳.",
          tags: ["고구마피자", "가성비피자", "단체주문"]
        },
        {
          name: "서브웨이",
          category: "양식",
          price: 8000,
          time: "4분",
          description: "신선한 빵, 야채, 소스를 입맛에 맞게 커스텀하여 먹는 웰빙 샌드위치 전문점.",
          tags: ["샌드위치", "웰빙푸드", "커스텀식사"]
        },
        {
          name: "멘야산다이메",
          category: "일식",
          price: 11000,
          time: "4분",
          description: "24시간 우려낸 깊고 구수한 돈코츠 육수에 직접 뽑은 생면으로 만든 정통 일본식 라멘.",
          tags: ["라멘맛집", "돈코츠라멘", "자가제면"]
        },
        {
          name: "역전우동",
          category: "일식",
          price: 7000,
          time: "3분",
          description: "가볍고 시원한 가쓰오부시 우동 국물에 쫄깃한 면발, 가성비 덮밥이 일품인 우동집.",
          tags: ["우동전문점", "가성비일식", "혼밥환영"]
        },
        {
          name: "스시노칸도",
          category: "일식",
          price: 13000,
          time: "5분",
          description: "모든 접시 균일가로 다양한 회전초밥을 편안하게 즐길 수 있는 안암의 인기 스시 전문점.",
          tags: ["회전초밥", "초밥맛집", "균일가스시"]
        },
        {
          name: "홍콩반점",
          category: "중식",
          price: 8000,
          time: "4분",
          description: "강한 불향을 입혀 칼칼하고 진한 짬뽕 국물과 바삭하고 쫀득한 찹쌀 탕수육의 최강 조합.",
          tags: ["불향짬뽕", "찹쌀탕수육", "짜장맛집"]
        },
        {
          name: "마라공방",
          category: "중식",
          price: 12000,
          time: "3분",
          description: "깔끔하고 청결한 매장에서 얼큰하고 알싸한 마라 맛을 마음껏 조절해 먹는 마라탕 맛집.",
          tags: ["마라탕", "마라샹궈", "매콤중독"]
        }
      ];
    },
    onLog: (callback) => {
      logListener = callback;
    },
    run: async (agentName, params) => {
      if (agentName === 'food-agent') {
        const { category, budget } = params;
        
        if (logListener) logListener(`🤖 [System] Initializing Agent: "${agentName}"...`);
        await new Promise(resolve => setTimeout(resolve, 500));
        
        if (logListener) logListener(`🤖 [Agent] Input variables loaded: category = "${category}", budget = ${budget.toLocaleString()}원`);
        await new Promise(resolve => setTimeout(resolve, 700));
        
        if (logListener) logListener(`🤖 [Agent] Analyzing constraints: Filter database for category === "${category}" && price <= ${budget}`);
        await new Promise(resolve => setTimeout(resolve, 800));
        
        if (logListener) logListener(`🛠️ [Agent] Action: Calling external tool recommend(category="${category}", budget=${budget})`);
        await new Promise(resolve => setTimeout(resolve, 900));
        
        const list = window.antigravity.getRestaurants();
        const filtered = list.filter(r => r.category === category && r.price <= budget);
        
        if (filtered.length > 0) {
          const result = filtered[Math.floor(Math.random() * filtered.length)];
          if (logListener) logListener(`📡 [Tool] Return: Match found -> "${result.name}" (${result.price.toLocaleString()}원)`);
          await new Promise(resolve => setTimeout(resolve, 700));
          if (logListener) logListener(`🤖 [Agent] Recommendation selected. Formatting payload...`);
          await new Promise(resolve => setTimeout(resolve, 400));
          return result;
        } else {
          if (logListener) logListener(`📡 [Tool] Return: Null (No restaurant meets the budget or category constraint)`);
          await new Promise(resolve => setTimeout(resolve, 700));
          if (logListener) logListener(`🤖 [Agent] Output: "조건에 맞는 식당이 없습니다."`);
          return { message: "조건에 맞는 식당이 없습니다." };
        }
      }
    }
  };
}

// Globals
let restaurants = [];
const terminalLogs = document.getElementById("terminal-logs");
const categoryInput = document.getElementById("category");
const budgetInput = document.getElementById("budget");
const budgetVal = document.getElementById("budget-val");
const recommendBtn = document.getElementById("recommend-btn");
const resultCard = document.getElementById("result-card");
const noResultCard = document.getElementById("no-result-card");
const resultText = document.getElementById("result");
const resultCat = document.getElementById("result-cat");
const resultTime = document.getElementById("result-time");
const resultDesc = document.getElementById("result-desc");
const resultTags = document.getElementById("result-tags");
const catalogList = document.getElementById("catalog-list");
const activeCatName = document.getElementById("active-cat-name");

// Load data exposed via Electron Preload
function loadData() {
  try {
    restaurants = window.antigravity.getRestaurants();
    renderCatalog();
  } catch (error) {
    console.error("Failed to load restaurant database from preload:", error);
  }
}

// Format number helper
function formatNumber(num) {
  return num.toLocaleString();
}

// Log formatting helper
function appendLog(message) {
  const line = document.createElement("div");
  line.className = "log-line";
  
  if (message.startsWith("🤖 [System]")) {
    line.classList.add("system-line");
  } else if (message.startsWith("🤖 [Agent]")) {
    line.classList.add("agent-line");
  } else if (message.startsWith("🛠️ [Agent]")) {
    line.classList.add("command-line");
  } else if (message.startsWith("📡 [Tool]")) {
    line.classList.add("tool-line");
  } else {
    line.classList.add("info-line");
  }
  
  line.textContent = message;
  terminalLogs.appendChild(line);
  terminalLogs.scrollTop = terminalLogs.scrollHeight;
}

// Render Catalog of Restaurants
function renderCatalog() {
  const currentCategory = categoryInput.value;
  activeCatName.textContent = currentCategory;
  
  // Filter restaurants by active category
  const filtered = restaurants.filter(r => r.category === currentCategory);
  
  catalogList.innerHTML = "";
  
  filtered.forEach(r => {
    const item = document.createElement("div");
    item.className = "catalog-item";
    
    // Create tags HTML
    const tagsHTML = r.tags.map(t => `<span class="tag">#${t}</span>`).join(" ");
    
    item.innerHTML = `
      <div>
        <div class="item-top">
          <span class="item-name">${r.name}</span>
          <span class="item-price">${formatNumber(r.price)}원</span>
        </div>
        <p class="item-desc">${r.description}</p>
      </div>
      <div class="item-meta">
        <span>🕒 도보 ${r.time}</span>
        <div class="tags-container" style="margin-top: 6px;">
          ${tagsHTML}
        </div>
      </div>
    `;
    catalogList.appendChild(item);
  });
}

// Update Budget Display on Slider Input
budgetInput.addEventListener("input", (e) => {
  budgetVal.textContent = formatNumber(parseInt(e.target.value));
});

// Category Buttons Click Event
document.querySelectorAll(".category-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    // Update active class
    document.querySelectorAll(".category-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    
    // Update category value
    categoryInput.value = btn.dataset.value;
    
    // Re-render restaurant list
    renderCatalog();
    
    // Append console log for feedback
    appendLog(`[System] Selected category changed to "${btn.dataset.value}"`);
  });
});

// Setup Antigravity log listener
window.antigravity.onLog((message) => {
  appendLog(message);
});

// User's recommended recommendUI function (Implemented EXACTLY as requested)
async function recommendUI() {
  const category = document.getElementById("category").value;
  const budget = parseInt(document.getElementById("budget").value);

  const result = await window.antigravity.run("food-agent", {
    category,
    budget
  });

  document.getElementById("result").innerText =
    result.name ? `${result.name} (${result.price}원)` : result.message;
}

// Expose recommendUI to global scope so the button or any code can trigger it
window.recommendUI = recommendUI;

// Handle Recommend Button Trigger and UI flow
recommendBtn.addEventListener("click", async () => {
  // Reset outputs
  resultCard.classList.add("hide");
  noResultCard.classList.add("hide");
  
  // Set UI state to active run
  recommendBtn.classList.add("disabled");
  recommendBtn.querySelector("span").textContent = "⚙️ 에이전트 실행 중...";
  
  // Clear logs and print starting execution
  terminalLogs.innerHTML = "";
  appendLog(`> recommend(category="${categoryInput.value}", budget=${budgetInput.value})`);
  
  try {
    // Execute user's recommendUI function
    await recommendUI();
    
    // Retrieve what recommendUI wrote to the DOM
    const resultTextContent = resultText.innerText;
    
    if (resultTextContent && resultTextContent !== "조건에 맞는 식당이 없습니다.") {
      // It found a restaurant! Let's extract name
      // The format is "식당이름 (가격원)"
      const match = resultTextContent.match(/^(.+?)\s*\(/);
      const restaurantName = match ? match[1].trim() : resultTextContent;
      
      // Look up full details from our database
      const fullDetails = restaurants.find(r => r.name === restaurantName);
      
      if (fullDetails) {
        // Populating extra visual card details
        resultCat.textContent = fullDetails.category;
        resultTime.textContent = `도보 ${fullDetails.time}`;
        resultDesc.textContent = fullDetails.description;
        
        resultTags.innerHTML = "";
        fullDetails.tags.forEach(t => {
          const tagSpan = document.createElement("span");
          tagSpan.className = "tag";
          tagSpan.textContent = `#${t}`;
          resultTags.appendChild(tagSpan);
        });
        
        // Show recommended result card
        resultCard.classList.remove("hide");
      } else {
        // Fallback if detail is not found in database (should not happen)
        resultCat.textContent = categoryInput.value;
        resultTime.textContent = "도보 5분";
        resultDesc.textContent = "조건에 딱 맞는 근처 식당입니다!";
        resultTags.innerHTML = `<span class="tag">#맛집</span>`;
        resultCard.classList.remove("hide");
      }
    } else {
      // No restaurant matches constraints
      noResultCard.classList.remove("hide");
    }
    
  } catch (error) {
    appendLog(`❌ [System Error] Execution failed: ${error.message}`);
  } finally {
    // Restore UI state
    recommendBtn.classList.remove("disabled");
    recommendBtn.querySelector("span").textContent = "✨ 맛집 추천 받기";
  }
});

// Load the restaurant database on startup
loadData();
