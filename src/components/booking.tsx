"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, Users, MapPin, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Booking() {
  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    guests: "1",
    roomType: "standard"
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("预订信息:", formData)
    // 这里可以添加预订逻辑
  }

  return (
    <section id="booking" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            即时预订
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            选择您的入住日期，即刻开启云端奢华体验
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card rounded-2xl shadow-2xl p-8 border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* 日期和房客信息 */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* 入住日期 */}
                <div className="space-y-2">
                  <label className="flex items-center text-sm font-medium text-foreground">
                    <Calendar className="w-4 h-4 mr-2 text-primary" />
                    入住日期
                  </label>
                  <Input
                    type="date"
                    value={formData.checkIn}
                    onChange={(e) => handleInputChange("checkIn", e.target.value)}
                    className="bg-background border-border"
                    required
                  />
                </div>

                {/* 退房日期 */}
                <div className="space-y-2">
                  <label className="flex items-center text-sm font-medium text-foreground">
                    <Calendar className="w-4 h-4 mr-2 text-primary" />
                    退房日期
                  </label>
                  <Input
                    type="date"
                    value={formData.checkOut}
                    onChange={(e) => handleInputChange("checkOut", e.target.value)}
                    className="bg-background border-border"
                    required
                  />
                </div>

                {/* 房客数量 */}
                <div className="space-y-2">
                  <label className="flex items-center text-sm font-medium text-foreground">
                    <Users className="w-4 h-4 mr-2 text-primary" />
                    房客数量
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => handleInputChange("guests", e.target.value)}
                    className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    {[1, 2, 3, 4].map(num => (
                      <option key={num} value={num}>{num} 位</option>
                    ))}
                  </select>
                </div>

                {/* 房间类型 */}
                <div className="space-y-2">
                  <label className="flex items-center text-sm font-medium text-foreground">
                    <MapPin className="w-4 h-4 mr-2 text-primary" />
                    房间类型
                  </label>
                  <select
                    value={formData.roomType}
                    onChange={(e) => handleInputChange("roomType", e.target.value)}
                    className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="standard">豪华客房</option>
                    <option value="deluxe">行政套房</option>
                    <option value="presidential">总统套房</option>
                  </select>
                </div>
              </div>

              {/* 特殊要求 */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  特殊要求
                </label>
                <textarea
                  placeholder="如有特殊要求，请在此说明..."
                  className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
                  rows={4}
                />
              </div>

              {/* 提交按钮 */}
              <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
                <div className="text-sm text-muted-foreground">
                  <p>预订热线：{process.env.NEXT_PUBLIC_HOTEL_PHONE || "+86 21 6888 8888"}</p>
                  <p>邮箱：{process.env.NEXT_PUBLIC_HOTEL_EMAIL || "reservation@yunjinggrand.com"}</p>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
                  >
                    <Search className="w-5 h-5 mr-2" />
                    查询可用房间
                  </Button>
                </motion.div>
              </div>
            </form>

            {/* 优惠政策提示 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/20"
            >
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-xs text-primary-foreground font-bold">!</span>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  <p className="font-medium text-foreground mb-1">限时优惠</p>
                  <p>提前预订可享 9 折优惠，连续入住 3 晚及以上可享额外 8.5 折优惠。会员专享价格及更多惊喜福利等待您的探索。</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* 额外信息 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div className="space-y-3">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Calendar className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">灵活预订</h3>
            <p className="text-sm text-muted-foreground">
              支持24小时免费取消，灵活调整入住计划
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">专享服务</h3>
            <p className="text-sm text-muted-foreground">
              VIP客户专享管家服务，定制化入住体验
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">绝佳位置</h3>
            <p className="text-sm text-muted-foreground">
              市中心黄金地段，交通便利，周边配套齐全
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}