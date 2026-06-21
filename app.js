// Detailed restaurant database with rich metadata for UI display
const restaurants = [
  // 한식 (Korean)
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

  // 양식 (Western)
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

  // 일식 (Japanese)
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

  // 중식 (Chinese)
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

// Recommend function using exact algorithm from the user request
function recommend(category, budget) {
  const restaurants = [
    { name: "고른햇살", category: "한식", price: 9000 },
    { name: "본죽", category: "한식", price: 10000 },
    { name: "맘스터치", category: "양식", price: 8000 },
    { name: "버거킹", category: "양식", price: 11000 },
    { name: "롤링파스타", category: "양식", price: 12000 },
    { name: "멘야산다이메", category: "일식", price: 11000 },
    { name: "역전우동", category: "일식", price: 7000 },
    { name: "스시노칸도", category: "일식", price: 13000 },
    { name: "홍콩반점", category: "중식", price: 8000 },
    { name: "마라공방", category: "중식", price: 12000 },
    { name: "고대분식", category: "한식", price: 7000 },
    { name: "김밥천국", category: "한식", price: 6000 },
    { name: "엽기떡볶이", category: "한식", price: 14000 },
    { name: "피자스쿨", category: "양식", price: 9000 },
    { name: "서브웨이", category: "양식", price: 8000 }
  ];

  const filtered = restaurants.filter(r =>
    r.category === category && r.price <= budget
  );

  if (filtered.length === 0) {
    return { message: "조건에 맞는 식당이 없습니다." };
  }

  const random = filtered[Math.floor(Math.random() * filtered.length)];
  return random;
}

// Export modules for CommonJS (Electron integration)
module.exports = {
  restaurants,
  recommend
};
