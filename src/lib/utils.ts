import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const hotelData = {
  name: "云境华庭酒店",
  tagline: "云端之上，静谧之中",
  description: "坐落于城市之巅，云境华庭酒店致力于为每一位宾客提供超越期待的奢华体验。在这里，时间仿佛静止，让您在繁华都市中找到一片宁静天地。",

  contact: {
    phone: "+86 21 6888 8888",
    email: "reservation@yunjinggrand.com",
    address: "上海市浦东新区陆家嘴环路1000号"
  },

  social: {
    wechat: "yunjinggrand",
    weibo: "@云境华庭酒店",
    instagram: "yunjinggrandhotel"
  }
}

export const navigation = [
  { name: "首页", href: "#hero" },
  { name: "客房", href: "#rooms" },
  { name: "餐饮", href: "#dining" },
  { name: "水疗", href: "#spa" },
  { name: "会议", href: "#meetings" },
  { name: "画廊", href: "#gallery" },
  { name: "位置", href: "#location" },
  { name: "评价", href: "#reviews" },
  { name: "常见问题", href: "#faq" }
]

export const roomsData = [
  {
    id: 1,
    name: "豪华客房",
    size: "45㎡",
    bed: "大床",
    price: "¥1,280",
    features: ["城市景观", "免费WiFi", "迷你吧", "工作区域"],
    image: "/api/placeholder/400/300"
  },
  {
    id: 2,
    name: "行政套房",
    size: "65㎡",
    bed: "特大床",
    price: "¥2,180",
    features: ["黄浦江景", "行政酒廊", "免费洗衣", "机场接送"],
    image: "/api/placeholder/400/300"
  },
  {
    id: 3,
    name: "总统套房",
    size: "120㎡",
    bed: "定制特大床",
    price: "¥5,880",
    features: ["360°全景", "私人管家", "独立会议室", "按摩浴缸"],
    image: "/api/placeholder/400/300"
  }
]

export const diningData = [
  {
    id: 1,
    name: "云境餐厅",
    cuisine: "法式料理",
    hours: "午餐 12:00-14:30 | 晚餐 18:00-22:00",
    description: "由米其林星级主厨主理，呈现经典法式美食与现代烹饪艺术的完美融合。",
    image: "/api/placeholder/400/300"
  },
  {
    id: 2,
    name: "江南茶室",
    cuisine: "中式茶点",
    hours: "每日 10:00-22:00",
    description: "传统茶文化与现代空间的优雅结合，精选各地名茶，配以精致茶点。",
    image: "/api/placeholder/400/300"
  },
  {
    id: 3,
    name: "空中酒吧",
    cuisine: "鸡尾酒与轻食",
    hours: "每日 17:00-01:00",
    description: "位于酒店顶层的空中酒吧，360度城市夜景，为您呈现调酒师的创意之作。",
    image: "/api/placeholder/400/300"
  }
]

export const reviewsData = [
  {
    id: 1,
    name: "张先生",
    location: "北京",
    rating: 5,
    title: "完美的商务之旅",
    content: "从入住到离店，每一个细节都体现出专业水准。房间宽敞舒适，商务设施齐全，服务团队响应迅速。",
    date: "2024年10月"
  },
  {
    id: 2,
    name: "李女士",
    location: "上海",
    rating: 5,
    title: "难忘的周年纪念",
    content: "为了庆祝结婚纪念日选择了这里，从房间布置到晚餐安排都让人惊喜。特别感谢前台的小王，非常贴心。",
    date: "2024年9月"
  },
  {
    id: 3,
    name: "王先生",
    location: "深圳",
    rating: 4,
    title: "高品质的住宿体验",
    content: "酒店位置绝佳，房间视野开阔。水疗中心很棒，不过早餐品种可以更丰富一些。总体来说还是很满意的。",
    date: "2024年8月"
  }
]

export const faqData = [
  {
    question: "酒店提供哪些便利设施？",
    answer: "我们提供24小时客房服务、免费WiFi、健身房、室内泳池、水疗中心、商务中心、礼宾服务等。所有客房均配备迷你吧、保险箱、智能电视等现代化设施。"
  },
  {
    question: "如何预订酒店房间？",
    answer: "您可以通过官网在线预订、拨打预订电话+86 21 6888 8888，或通过各大OTA平台进行预订。官网预订可享专属优惠。"
  },
  {
    question: "酒店的入住和退房时间是什么时候？",
    answer: "标准入住时间为下午15:00后，退房时间为中午12:00前。我们提供灵活的入住时间安排，请提前与前台联系。"
  },
  {
    question: "酒店是否提供机场接送服务？",
    answer: "是的，我们为行政套房及以上房型客人提供免费机场接送服务。其他客人也可预订接送服务，费用根据距离计算。"
  },
  {
    question: "酒店内有餐饮选择吗？",
    answer: "酒店内设有云境餐厅（法式料理）、江南茶室（中式茶点）、空中酒吧等餐饮场所。24小时客房服务随时为您提供美食。"
  },
  {
    question: "是否可以携带宠物入住？",
    answer: "很抱歉，为了确保所有客人的舒适体验，酒店不允许携带宠物入住。导盲犬等服务性动物除外。"
  }
]