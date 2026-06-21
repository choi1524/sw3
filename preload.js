const { contextBridge } = require('electron');
const { restaurants, recommend } = require('./app.js');

let logListener = null;

function log(message) {
  if (logListener) {
    logListener(message);
  }
}

contextBridge.exposeInMainWorld('antigravity', {
  run: async (agentName, params) => {
    if (agentName === 'food-agent') {
      const { category, budget } = params;
      
      log(`🤖 [System] Initializing Agent: "${agentName}"...`);
      await new Promise(resolve => setTimeout(resolve, 500));
      
      log(`🤖 [Agent] Input variables loaded: category = "${category}", budget = ${budget.toLocaleString()}원`);
      await new Promise(resolve => setTimeout(resolve, 700));
      
      log(`🤖 [Agent] Analyzing constraints: Filter database for category === "${category}" && price <= ${budget}`);
      await new Promise(resolve => setTimeout(resolve, 800));
      
      log(`🛠️ [Agent] Action: Calling external tool recommend(category="${category}", budget=${budget})`);
      await new Promise(resolve => setTimeout(resolve, 900));
      
      const result = recommend(category, budget);
      
      if (result && result.name) {
        log(`📡 [Tool] Return: Match found -> "${result.name}" (${result.price.toLocaleString()}원)`);
        await new Promise(resolve => setTimeout(resolve, 700));
        log(`🤖 [Agent] Recommendation selected. Formatting payload...`);
        await new Promise(resolve => setTimeout(resolve, 400));
        return result;
      } else {
        log(`📡 [Tool] Return: Null (No restaurant meets the budget or category constraint)`);
        await new Promise(resolve => setTimeout(resolve, 700));
        log(`🤖 [Agent] Output: "조건에 맞는 식당이 없습니다."`);
        return { message: "조건에 맞는 식당이 없습니다." };
      }
    }
    throw new Error(`Unknown agent: ${agentName}`);
  },
  onLog: (callback) => {
    logListener = callback;
  },
  getRestaurants: () => {
    // Expose the static restaurant list
    return restaurants;
  }
});
