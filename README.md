# 云境华庭酒店官网

一个使用 Next.js 构建的五星级酒店官网，展示奢华酒店服务的现代化响应式网站。

## 项目概览

云境华庭酒店官网是一个完整的酒店展示和预订平台，采用现代化的设计风格和流畅的用户体验。

### 主要功能

- 🏨 **首页展示** - 沉浸式首屏体验，展示酒店特色
- 🛏️ **客房展示** - 详细展示各类房型和设施
- 🍽️ **餐饮服务** - 展示餐厅、酒吧等餐饮设施
- 💆 **水疗中心** - 水疗服务和健身设施介绍
- 🏢 **会议设施** - 会议厅和商务设施展示
- 🖼️ **图片画廊** - 酒店环境和设施图片展示
- 📍 **位置交通** - 地理位置和交通指南
- ⭐ **用户评价** - 客人评价和评分展示
- ❓ **常见问题** - FAQ问答系统
- 📧 **邮件订阅** - 会员订阅功能
- 📞 **在线预订** - 即时预订系统

### 技术栈

- **框架**: Next.js 15 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **动画**: Framer Motion
- **UI组件**: shadcn/ui
- **字体**: Geist Sans & Geist Mono

### 设计特色

- 🎨 **高级克制的设计风格** - 参考Apple官网的沉浸式体验
- 🌙 **深海蓝配色方案** - #0A192F (深海蓝) + #D4AF37 (暖金色) + #F8F9FA (月白)
- ✨ **流畅动画效果** - 使用Framer Motion实现顺滑的页面过渡
- 📱 **完全响应式** - 适配桌面、平板和移动设备
- 🎯 **用户友好** - 直观的导航和交互设计

## 项目结构

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   └── page.tsx           # 主页面
├── components/            # React组件
│   ├── ui/               # shadcn/ui基础组件
│   ├── navigation.tsx    # 导航栏
│   ├── hero.tsx          # 首屏横幅
│   ├── booking.tsx       # 预订组件
│   ├── rooms.tsx         # 客房展示
│   ├── dining.tsx        # 餐饮展示
│   ├── spa.tsx           # 水疗展示
│   ├── meetings.tsx      # 会议展示
│   ├── gallery.tsx       # 图片画廊
│   ├── location.tsx      # 位置信息
│   ├── reviews.tsx       # 用户评价
│   ├── faq.tsx           # 常见问题
│   ├── newsletter.tsx    # 订阅组件
│   └── footer.tsx        # 页面底部
└── lib/
    └── utils.ts          # 工具函数和数据
```

## 开始使用

### 环境要求

- Node.js 18.17 或更高版本
- npm、yarn、pnpm 或 bun

### 安装依赖

```bash
npm install
# 或
yarn install
# 或
pnpm install
```

### 启动开发服务器

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看网站。

### 构建生产版本

```bash
npm run build
npm start
```

## 环境变量配置

### 复制环境变量模板

```bash
cp .env.local.example .env.local
```

### 配置环境变量

在 `.env.local` 文件中配置以下变量：

```bash
# 酒店基本信息
NEXT_PUBLIC_HOTEL_NAME=云境华庭酒店
NEXT_PUBLIC_HOTEL_PHONE=+86 21 6888 8888
NEXT_PUBLIC_HOTEL_EMAIL=reservation@yunjinggrand.com
NEXT_PUBLIC_HOTEL_ADDRESS=上海市浦东新区陆家嘴环路1000号

# 社交媒体
NEXT_PUBLIC_SOCIAL_WECHAT=yunjinggrand
NEXT_PUBLIC_SOCIAL_WEIBO=@云境华庭酒店
NEXT_PUBLIC_SOCIAL_INSTAGRAM=yunjinggrandhotel

# 地图服务（可选）
NEXT_PUBLIC_MAP_API_KEY=your_map_api_key_here

# 分析工具（可选）
NEXT_PUBLIC_GA_ID=your_google_analytics_id_here
NEXT_PUBLIC_HOTJAR_ID=your_hotjar_id_here

# 邮件服务（用于订阅功能）
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password_here
```

## 自定义配置

### 修改酒店信息

在 `src/lib/utils.ts` 文件中修改 `hotelData` 对象：

```typescript
export const hotelData = {
  name: "您的酒店名称",
  tagline: "您的宣传语",
  description: "酒店描述",
  contact: {
    phone: "联系电话",
    email: "邮箱地址",
    address: "酒店地址"
  },
  social: {
    wechat: "微信账号",
    weibo: "微博账号",
    instagram: "Instagram账号"
  }
}
```

### 修改颜色主题

在 `src/app/globals.css` 文件中修改CSS变量：

```css
:root {
  --background: #0A192F;  /* 背景色 - 深海蓝 */
  --foreground: #F8F9FA;  /* 前景色 - 月白 */
  --primary: #D4AF37;     /* 主色调 - 暖金色 */
  --secondary: #495057;   /* 辅助色 - 炭灰 */
  --accent: #E8B4B8;      /* 强调色 - 玫瑰金 */
}
```

### 修改导航菜单

在 `src/lib/utils.ts` 文件中修改 `navigation` 数组：

```typescript
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
```

### 修改房间数据

在 `src/lib/utils.ts` 文件中修改 `roomsData` 数组：

```typescript
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
  // 添加更多房型...
]
```

### 修改餐饮数据

在 `src/lib/utils.ts` 文件中修改 `diningData` 数组：

```typescript
export const diningData = [
  {
    id: 1,
    name: "云境餐厅",
    cuisine: "法式料理",
    hours: "午餐 12:00-14:30 | 晚餐 18:00-22:00",
    description: "餐厅描述...",
    image: "/api/placeholder/400/300"
  },
  // 添加更多餐厅...
]
```

## 部署

### Vercel部署（推荐）

#### 一键部署

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/yunjing-grand-hotel)

#### 手动部署

1. 将代码推送到GitHub仓库
2. 在 [Vercel](https://vercel.com) 导入项目
3. 配置环境变量
4. 自动部署完成

#### 环境变量配置（Vercel）

在Vercel项目设置中添加以下环境变量：

```
NEXT_PUBLIC_HOTEL_NAME=云境华庭酒店
NEXT_PUBLIC_HOTEL_PHONE=+86 21 6888 8888
NEXT_PUBLIC_HOTEL_EMAIL=reservation@yunjinggrand.com
NEXT_PUBLIC_HOTEL_ADDRESS=上海市浦东新区陆家嘴环路1000号
```

### 其他部署方式

项目支持部署到任何支持Next.js的平台：

- **Netlify**: 支持 Git 集成和持续部署
- **AWS Amplify**: AWS 无服务器部署
- **阿里云**: 中国大陆用户首选
- **腾讯云**: 腾讯云静态网站托管
- **Docker**: 支持容器化部署

#### Docker 部署

```dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

```bash
# 构建镜像
docker build -t yunjing-grand-hotel .

# 运行容器
docker run -p 3000:3000 yunjing-grand-hotel
```

## 功能特性

### 🎨 设计系统

- **色彩系统**: 基于深海蓝的奢华配色方案
- **字体系统**: 现代化中文字体栈
- **间距系统**: 统一的间距和布局规范
- **动画系统**: 流畅的页面过渡和微交互

### 📱 响应式设计

- **移动优先**: 320px - 768px
- **平板适配**: 768px - 1024px
- **桌面体验**: 1024px+
- **大屏优化**: 1440px+

### ⚡ 性能优化

- **代码分割**: 自动路由级别代码分割
- **图片优化**: Next.js Image 组件优化
- **懒加载**: 组件和图片按需加载
- **缓存策略**: 智能缓存配置

### 🔧 开发体验

- **TypeScript**: 完整类型安全
- **ESLint**: 代码质量保证
- **热重载**: 快速开发反馈
- **组件库**: shadcn/ui 高质量组件

### 🌐 SEO 优化

- **Meta 标签**: 完整的 SEO 元数据
- **结构化数据**: JSON-LD 格式
- **Open Graph**: 社交媒体分享优化
- **语义化 HTML**: 提升搜索引擎友好度

## 维护指南

### 内容更新

#### 更新酒店图片

1. 将新图片放入 `public/images/` 目录
2. 更新 `src/lib/utils.ts` 中的图片路径
3. 重新构建项目

#### 更新价格信息

在 `src/lib/utils.ts` 中修改 `roomsData` 数组：

```typescript
export const roomsData = [
  {
    id: 1,
    name: "豪华客房",
    price: "¥1,280",  // 更新价格
    // 其他信息...
  }
]
```

#### 更新促销活动

修改相应的组件文案和价格显示：

```typescript
// 在 booking.tsx 中更新优惠信息
const discountInfo = {
  earlyBooking: "9折优惠",
  extendedStay: "8.5折优惠",
  memberExclusive: "会员专享价格"
}
```

### 性能监控

#### Google Analytics

配置环境变量：

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

#### Vercel Analytics

Vercel 项目中自动启用 Analytics 功能。

### 安全考虑

- **HTTPS**: 强制使用 HTTPS
- **CSP**: 内容安全策略配置
- **XSS 防护**: 输入验证和转义
- **依赖安全**: 定期更新依赖包

### 备份策略

- **代码备份**: Git 版本控制
- **数据备份**: 定期数据库备份
- **图片备份**: CDN 和本地备份

## 贡献

欢迎提交Issue和Pull Request来改进这个项目。

## 许可证

MIT License

## 技术支持

如有技术问题，请通过以下方式联系：

- 📧 Email: support@yunjinggrand.com
- 📱 电话: +86 21 6888 8888

---

© 2024 云境华庭酒店. 保留所有权利.
