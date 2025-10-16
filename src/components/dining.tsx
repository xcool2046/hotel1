"use client"

import { motion } from "framer-motion"
import { Clock, Star, Utensils, Coffee, Wine } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { diningData } from "@/lib/utils"

export default function Dining() {
  const getCuisineIcon = (cuisine: string) => {
    switch (cuisine) {
      case "法式料理":
        return <Utensils className="w-6 h-6" />
      case "中式茶点":
        return <Coffee className="w-6 h-6" />
      case "鸡尾酒与轻食":
        return <Wine className="w-6 h-6" />
      default:
        return <Utensils className="w-6 h-6" />
    }
  }

  return (
    <section id="dining" className="py-20 bg-gradient-to-b from-background to-background/95">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题区域 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            精致餐饮
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            汇聚全球美食精华，由星级厨师团队精心烹饪，为您呈现难忘的味蕾体验
          </p>
        </motion.div>

        {/* 餐厅展示卡片 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {diningData.map((restaurant, index) => (
            <motion.div
              key={restaurant.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="h-full"
            >
              <Card className="h-full bg-card border-border overflow-hidden group">
                {/* 餐厅图片 */}
                <div className="relative h-64 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />

                  {/* 餐厅图标 */}
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center text-primary">
                      {getCuisineIcon(restaurant.cuisine)}
                    </div>
                  </div>

                  {/* 餐厅类型标签 */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary/10 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {restaurant.cuisine}
                    </span>
                  </div>

                  {/* 餐厅名称和营业时间 */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{restaurant.name}</h3>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{restaurant.hours}</span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* 餐厅描述 */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {restaurant.description}
                  </p>

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
                      预订餐桌
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* 特色服务亮点 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/20"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">餐饮服务特色</h3>
            <p className="text-muted-foreground">为您提供卓越的用餐体验</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Star className="w-6 h-6" />,
                title: "星级厨师",
                description: "米其林星级厨师主理，创意与传统并重"
              },
              {
                icon: <Utensils className="w-6 h-6" />,
                title: "新鲜食材",
                description: "严选时令食材，确保品质与口感"
              },
              {
                icon: <Wine className="w-6 h-6" />,
                title: "精选酒单",
                description: "来自世界各地的精选葡萄酒与烈酒"
              },
              {
                icon: <Coffee className="w-6 h-6" />,
                title: "私人定制",
                description: "可定制私人宴会与特殊场合用餐"
              }
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

        {/* 餐饮温馨提示 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center space-y-4"
        >
          <h3 className="text-xl font-semibold text-foreground">温馨提示</h3>
          <div className="max-w-3xl mx-auto text-sm text-muted-foreground space-y-2">
            <p>营业时间：各餐厅营业时间有所不同，请参考具体餐厅信息</p>
            <p>预订建议：为确保用餐体验，建议提前预订，特别是周末和节假日</p>
            <p>特殊需求：如有饮食禁忌或特殊需求，请提前告知我们的服务团队</p>
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
                const element = document.querySelector("#booking")
                element?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              立即预订餐位
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}