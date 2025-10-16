"use client"

import { motion } from "framer-motion"
import { Users, Monitor, Wifi, Coffee, Car, Award, Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Meetings() {
  const meetingRooms = [
    {
      id: 1,
      name: "云境大宴会厅",
      capacity: "300人",
      size: "600㎡",
      price: "¥18,800/天",
      features: ["LED大屏", "专业音响", "同声传译", "舞台灯光"],
      description: "适合大型会议、婚礼晚宴、产品发布等大型活动",
      image: "/api/placeholder/400/300"
    },
    {
      id: 2,
      name: "董事会议室",
      capacity: "20人",
      size: "80㎡",
      price: "¥3,800/天",
      features: ["高清投影", "视频会议", "专属服务", "茶歇服务"],
      description: "专为高端商务会议设计，确保私密性与专业性",
      image: "/api/placeholder/400/300"
    },
    {
      id: 3,
      name: "多功能厅",
      capacity: "80人",
      size: "200㎡",
      price: "¥8,800/天",
      features: ["灵活布局", "隔音设计", "自然采光", "高速网络"],
      description: "可灵活调整布局，适合各种中小型会议活动",
      image: "/api/placeholder/400/300"
    }
  ]

  const meetingServices = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "专业团队",
      description: "经验丰富的会务策划团队，全程跟进"
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "技术支持",
      description: "先进音响设备，高清投影，专业IT支持"
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "餐饮服务",
      description: "定制茶歇，商务午餐，晚宴服务"
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: "停车服务",
      description: "充足停车位，代客泊车服务"
    }
  ]

  const venueTypes = [
    {
      name: "剧院式",
      capacity: "最多300人",
      description: "适合演讲、报告会、大型会议"
    },
    {
      name: "课堂式",
      capacity: "最多120人",
      description: "适合培训、研讨会、学习会议"
    },
    {
      name: "宴会式",
      capacity: "最多200人",
      description: "适合晚宴、庆典、联欢活动"
    },
    {
      name: "U型式",
      capacity: "最多60人",
      description: "适合董事会议、高级研讨会"
    }
  ]

  return (
    <section id="meetings" className="py-20 bg-gradient-to-b from-background to-background/95">
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
            会议活动
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            专业的会议设施与完善的服务支持，为您的商务活动成功举办提供保障
          </p>
        </motion.div>

        {/* 会议室展示 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {meetingRooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="h-full"
            >
              <Card className="h-full bg-card border-border overflow-hidden group">
                {/* 会议室图片 */}
                <div className="relative h-64 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />

                  {/* 容量和价格标签 */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between">
                    <span className="bg-primary/10 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-sm font-medium">
                      <Users className="w-4 h-4 inline mr-1" />
                      {room.capacity}
                    </span>
                    <span className="bg-accent/10 backdrop-blur-sm text-accent px-3 py-1 rounded-full text-sm font-semibold">
                      {room.price}
                    </span>
                  </div>

                  {/* 会议室名称 */}
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-foreground mb-1">{room.name}</h3>
                    <p className="text-muted-foreground text-sm">{room.size}</p>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* 描述 */}
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {room.description}
                  </p>

                  {/* 设施特色 */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">设施配备</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {room.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.6 + featureIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center space-x-2 text-sm text-muted-foreground"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* 咨询按钮 */}
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
                      咨询预订
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* 会议服务特色 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/20 mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">专业服务支持</h3>
            <p className="text-muted-foreground">为您提供全方位的会议服务保障</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {meetingServices.map((service, index) => (
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
                  {service.icon}
                </div>
                <h4 className="font-semibold text-foreground">{service.title}</h4>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 场地布置方案 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">场地布置方案</h3>
            <p className="text-muted-foreground">根据您的活动需求，提供灵活的场地布置</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {venueTypes.map((venue, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-card border border-border rounded-xl p-6 text-center space-y-3"
              >
                <h4 className="font-semibold text-foreground text-lg">{venue.name}</h4>
                <p className="text-primary font-medium">{venue.capacity}</p>
                <p className="text-sm text-muted-foreground">{venue.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 会议预订须知 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">预订须知</h3>
            <div className="max-w-3xl mx-auto text-sm text-muted-foreground space-y-2">
              <p>建议提前7-14天预订，以确保场地可用性</p>
              <p>提供免费WiFi、投影设备、基础音响系统</p>
              <p>可根据需求提供额外设备租赁服务</p>
              <p>专业会务策划团队全程跟进，确保活动顺利进行</p>
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
                <Calendar className="w-5 h-5 mr-2" />
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
                <MapPin className="w-5 h-5 mr-2" />
                查看场地
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}