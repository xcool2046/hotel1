"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Star, Quote, ChevronLeft, ChevronRight, MapPin, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { reviewsData } from "@/lib/utils"

export default function Reviews() {
  const [currentReview, setCurrentReview] = useState(0)

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviewsData.length)
  }

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviewsData.length) % reviewsData.length)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? "fill-primary text-primary" : "text-muted-foreground"
        }`}
      />
    ))
  }

  const reviewStats = {
    totalReviews: 2847,
    averageRating: 4.8,
    distribution: [
      { stars: 5, count: 2156, percentage: 75.7 },
      { stars: 4, count: 512, percentage: 18.0 },
      { stars: 3, count: 134, percentage: 4.7 },
      { stars: 2, count: 35, percentage: 1.2 },
      { stars: 1, count: 10, percentage: 0.4 }
    ]
  }

  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-background/95 to-background">
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
            客人评价
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            真实客人的入住体验分享，见证我们的用心服务
          </p>
        </motion.div>

        {/* 评价统计 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <Card className="bg-card border-border text-center">
            <CardContent className="p-8 space-y-4">
              <div className="flex justify-center space-x-1">
                {renderStars(Math.round(reviewStats.averageRating))}
              </div>
              <div className="text-4xl font-bold text-primary">{reviewStats.averageRating}</div>
              <p className="text-muted-foreground">综合评分</p>
              <p className="text-sm text-muted-foreground">基于 {reviewStats.totalReviews} 条评价</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <h4 className="font-semibold text-foreground mb-4 text-center">评分分布</h4>
              <div className="space-y-3">
                {reviewStats.distribution.map((item) => (
                  <div key={item.stars} className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1 w-16">
                      <Star className="w-4 h-4 fill-primary text-primary" />
                      <span className="text-sm text-muted-foreground">{item.stars}.0</span>
                    </div>
                    <div className="flex-1 bg-muted rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.percentage}%` }}
                        transition={{ duration: 1, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="h-full bg-primary rounded-full"
                      />
                    </div>
                    <span className="text-sm text-muted-foreground w-12 text-right">
                      {item.percentage}%
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border text-center">
            <CardContent className="p-8 space-y-4">
              <div className="text-4xl font-bold text-primary">95%</div>
              <p className="text-muted-foreground">推荐率</p>
              <p className="text-sm text-muted-foreground">客人愿意再次入住</p>
              <div className="pt-4 space-y-2">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-sm text-muted-foreground">服务态度 4.9</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <span className="text-sm text-muted-foreground">环境卫生 4.8</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full" />
                  <span className="text-sm text-muted-foreground">设施舒适 4.7</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* 主要评价展示 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative mb-16"
        >
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 overflow-hidden">
            <CardContent className="p-8 md:p-12">
              {/* 引用图标 */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Quote className="w-8 h-8 text-primary" />
                </div>
              </div>

              {/* 评价内容 */}
              <div className="text-center max-w-3xl mx-auto mb-8">
                <motion.p
                  key={currentReview}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-lg md:text-xl text-foreground leading-relaxed mb-6"
                >
                  "{reviewsData[currentReview].content}"
                </motion.p>

                <motion.div
                  key={`meta-${currentReview}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="space-y-3"
                >
                  <h4 className="text-xl font-semibold text-foreground">
                    {reviewsData[currentReview].title}
                  </h4>

                  <div className="flex justify-center space-x-1">
                    {renderStars(reviewsData[currentReview].rating)}
                  </div>

                  <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">
                      {reviewsData[currentReview].name}
                    </span>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{reviewsData[currentReview].location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{reviewsData[currentReview].date}</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* 导航按钮 */}
              <div className="flex justify-center space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={prevReview}
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <div className="flex space-x-2 items-center">
                  {reviewsData.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentReview(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentReview ? "bg-primary" : "bg-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={nextReview}
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* 评价列表 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {reviewsData.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="bg-card border-border h-full">
                <CardContent className="p-6 space-y-4">
                  {/* 评分 */}
                  <div className="flex justify-center space-x-1">
                    {renderStars(review.rating)}
                  </div>

                  {/* 评价标题 */}
                  <h4 className="font-semibold text-foreground text-center">
                    {review.title}
                  </h4>

                  {/* 评价内容 */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    "{review.content}"
                  </p>

                  {/* 客人信息 */}
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-foreground">{review.name}</p>
                        <p className="text-xs text-muted-foreground">{review.location}</p>
                      </div>
                      <p className="text-xs text-muted-foreground">{review.date}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* 评价平台 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <h3 className="text-xl font-semibold text-foreground">来自各大平台的真实评价</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {["携程", "去哪儿", "Booking.com", "Agoda", "飞猪"].map((platform, index) => (
              <div key={index} className="text-muted-foreground font-medium">
                {platform}
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            我们在各大旅游预订平台均保持高分评价，致力于为每一位客人提供优质的入住体验
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="inline-block"
          >
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8"
              onClick={() => {
                const element = document.querySelector("#booking")
                element?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              查看更多评价
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}