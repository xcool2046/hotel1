"use client"

import { motion } from "framer-motion"
import { Bath, Bed, Wifi, Coffee, Car, Dumbbell, Home, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { roomsData } from "@/lib/utils"

export default function Rooms() {
  const getIcon = (feature: string) => {
    switch (feature) {
      case "城市景观":
      case "黄浦江景":
      case "360°全景":
        return <Home className="w-5 h-5" />
      case "免费WiFi":
        return <Wifi className="w-5 h-5" />
      case "迷你吧":
        return <Coffee className="w-5 h-5" />
      case "工作区域":
        return <Home className="w-5 h-5" />
      case "行政酒廊":
      case "独立会议室":
        return <Home className="w-5 h-5" />
      case "免费洗衣":
        return <Home className="w-5 h-5" />
      case "机场接送":
        return <Car className="w-5 h-5" />
      case "私人管家":
        return <Home className="w-5 h-5" />
      case "按摩浴缸":
        return <Bath className="w-5 h-5" />
      default:
        return <Star className="w-5 h-5" />
    }
  }

  return (
    <section id="rooms" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            奢华客房
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            精心设计的客房空间，融合现代舒适与经典雅致，为您打造完美的休憩之所
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {roomsData.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className="h-full bg-card border-border overflow-hidden group">
                {/* 房间图片 */}
                <div className="relative h-64 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />

                  {/* 价格标签 */}
                  <motion.div
                    className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    {room.price}/晚
                  </motion.div>

                  {/* 房间类型标签 */}
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-foreground">{room.name}</h3>
                    <p className="text-muted-foreground">{room.size} · {room.bed}</p>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* 特色设施 */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {room.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 + featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-2 text-sm text-muted-foreground"
                      >
                        <div className="text-primary">{getIcon(feature)}</div>
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* 预订按钮 */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      onClick={() => {
                        const element = document.querySelector("#booking")
                        element?.scrollIntoView({ behavior: "smooth" })
                      }}
                    >
                      立即预订
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* 客房设施亮点 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/20"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">客房设施亮点</h3>
            <p className="text-muted-foreground">每间客房都配备高品质设施，确保您的舒适体验</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <Bed className="w-6 h-6" />, title: "高品质床品", description: "埃及棉床品，多种枕头选择" },
              { icon: <Bath className="w-6 h-6" />, title: "奢华浴室", description: "大理石装修，品牌洗浴用品" },
              { icon: <Wifi className="w-6 h-6" />, title: "高速网络", description: "免费WiFi，智能电视" },
              { icon: <Coffee className="w-6 h-6" />, title: "迷你吧", description: "精选饮品，小食" },
              { icon: <Dumbbell className="w-6 h-6" />, title: "健身中心", description: "24小时开放，专业器材" },
              { icon: <Car className="w-6 h-6" />, title: "停车服务", description: "免费停车，代客泊车" },
              { icon: <Home className="w-6 h-6" />, title: "客房服务", description: "24小时送餐服务" },
              { icon: <Star className="w-6 h-6" />, title: "VIP服务", description: "个性化定制服务" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="text-center space-y-3"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
                  {item.icon}
                </div>
                <h4 className="font-semibold text-foreground">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 入住须知 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center space-y-4"
        >
          <h3 className="text-xl font-semibold text-foreground">入住须知</h3>
          <div className="max-w-3xl mx-auto text-sm text-muted-foreground space-y-2">
            <p>入住时间：下午 15:00 后 | 退房时间：中午 12:00 前</p>
            <p>可接受信用卡：Visa、MasterCard、American Express、银联</p>
            <p>酒店政策：禁止吸烟 | 可携带宠物（需额外收费）| 可加床</p>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="inline-block"
          >
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => {
                const element = document.querySelector("#faq")
                element?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              查看更多常见问题
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}