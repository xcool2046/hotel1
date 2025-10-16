"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Car, Train, Plane, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { hotelData } from "@/lib/utils"

export default function Location() {
  const transportationOptions = [
    {
      icon: <Plane className="w-6 h-6" />,
      title: "机场交通",
      distance: "浦东国际机场 45km",
      time: "约45分钟车程",
      description: "提供机场接送服务，或乘坐磁悬浮列车转地铁"
    },
    {
      icon: <Train className="w-6 h-6" />,
      title: "火车站",
      distance: "上海站 12km",
      time: "约25分钟车程",
      description: "多条地铁线路直达，交通便利"
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: "自驾停车",
      distance: "市中心 8km",
      time: "约20分钟车程",
      description: "酒店提供免费停车位，代客泊车服务"
    },
    {
      icon: <Navigation className="w-6 h-6" />,
      title: "地铁出行",
      distance: "陆家嘴站 500m",
      time: "步行5分钟",
      description: "地铁2号线陆家嘴站，出站即达"
    }
  ]

  const nearbyAttractions = [
    {
      name: "东方明珠塔",
      distance: "800m",
      type: "地标建筑"
    },
    {
      name: "上海中心大厦",
      distance: "600m",
      type: "观光建筑"
    },
    {
      name: "外滩",
      distance: "2.5km",
      type: "历史文化区"
    },
    {
      name: "南京路步行街",
      distance: "3km",
      type: "购物区"
    },
    {
      name: "豫园",
      distance: "4km",
      type: "古典园林"
    },
    {
      name: "新天地",
      distance: "5km",
      type: "休闲娱乐"
    }
  ]

  return (
    <section id="location" className="py-20 bg-gradient-to-b from-background to-background/95">
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
            位置交通
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            坐落于陆家嘴金融中心核心区域，交通便利，周边商业配套设施完善
          </p>
        </motion.div>

        {/* 地图区域 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="bg-card border-border overflow-hidden">
            <div className="relative h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg">
              {/* 地图占位符 */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">交互式地图</h3>
                  <p className="text-muted-foreground">{hotelData.contact.address}</p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      <Navigation className="w-4 h-4 mr-2" />
                      获取导航路线
                    </Button>
                  </motion.div>
                </div>
              </div>

              {/* 地图标记 */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-8 h-8 bg-primary rounded-full flex items-center justify-center"
                >
                  <div className="w-3 h-3 bg-primary-foreground rounded-full" />
                </motion.div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* 联系信息卡片 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <Card className="bg-card border-border">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">酒店地址</h3>
              <p className="text-muted-foreground">{hotelData.contact.address}</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">联系电话</h3>
              <p className="text-muted-foreground">{hotelData.contact.phone}</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">电子邮箱</h3>
              <p className="text-muted-foreground">{hotelData.contact.email}</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* 交通方式 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">交通指南</h3>
            <p className="text-muted-foreground">多种交通方式，轻松抵达酒店</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {transportationOptions.map((transport, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-card border-border h-full">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
                      {transport.icon}
                    </div>
                    <h4 className="font-semibold text-foreground">{transport.title}</h4>
                    <p className="text-primary font-medium">{transport.distance}</p>
                    <p className="text-sm text-muted-foreground">{transport.time}</p>
                    <p className="text-sm text-muted-foreground">{transport.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 周边景点 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">周边景点</h3>
            <p className="text-muted-foreground">探索上海的城市魅力</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {nearbyAttractions.map((attraction, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ x: 5 }}
                className="bg-card border border-border rounded-lg p-4 flex items-center justify-between"
              >
                <div>
                  <h4 className="font-semibold text-foreground">{attraction.name}</h4>
                  <p className="text-sm text-muted-foreground">{attraction.type}</p>
                </div>
                <div className="text-right">
                  <p className="text-primary font-medium">{attraction.distance}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 服务时间 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/20 text-center space-y-6"
        >
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">服务时间</h3>
            <div className="max-w-2xl mx-auto text-sm text-muted-foreground space-y-2">
              <p>前台服务：24小时</p>
              <p>餐厅营业：早餐 06:30-10:30 | 午餐 11:30-14:30 | 晚餐 17:30-22:00</p>
              <p>水疗中心：每日 09:00-22:00</p>
              <p>健身中心：24小时开放</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
                onClick={() => {
                  const element = document.querySelector("#booking")
                  element?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                立即预订
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8"
              >
                <Navigation className="w-4 h-4 mr-2" />
                获取路线
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}