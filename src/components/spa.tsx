"use client"

import { motion } from "framer-motion"
import { Heart, Droplets, Flower, Sparkles, Clock, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Spa() {
  const spaServices = [
    {
      id: 1,
      name: "云境焕活护理",
      duration: "90分钟",
      price: "¥880",
      description: "结合传统中医理论与现代美容技术，深度滋养肌肤，焕发自然光彩。",
      features: ["深层清洁", "面部按摩", "营养导入", "舒缓面膜"],
      image: "/api/placeholder/400/300"
    },
    {
      id: 2,
      name: "热石能量疗法",
      duration: "120分钟",
      price: "¥1,280",
      description: "使用天然火山热石，通过温热疗法深度放松肌肉，促进血液循环。",
      features: ["热石按摩", "肌肉放松", "能量平衡", "精油香薰"],
      image: "/api/placeholder/400/300"
    },
    {
      id: 3,
      name: "云端冥想体验",
      duration: "60分钟",
      price: "¥580",
      description: "在宁静的环境中，通过引导冥想和轻柔按摩，达到身心平衡。",
      features: ["引导冥想", "头部按摩", "芳香疗法", "音乐疗愈"],
      image: "/api/placeholder/400/300"
    }
  ]

  const spaFacilities = [
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "恒温泳池",
      description: "25米室内恒温泳池，水质清澈，环境优雅"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "健身中心",
      description: "专业健身器材，私人教练服务"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "桑拿房",
      description: "干湿桑拿，蒸汽房，促进血液循环"
    },
    {
      icon: <Flower className="w-6 h-6" />,
      title: "芳香疗法",
      description: "进口精油，个性化调配"
    }
  ]

  return (
    <section id="spa" className="py-20 bg-gradient-to-b from-background/95 to-background">
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
            云境水疗
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            远离城市喧嚣，在宁静雅致的环境中享受身心的全面放松与重生
          </p>
        </motion.div>

        {/* 水疗服务卡片 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {spaServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="h-full"
            >
              <Card className="h-full bg-card border-border overflow-hidden group">
                {/* 服务图片 */}
                <div className="relative h-64 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />

                  {/* 价格标签 */}
                  <motion.div
                    className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    {service.price}
                  </motion.div>

                  {/* 服务名称和时长 */}
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-foreground mb-1">{service.name}</h3>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{service.duration}</span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* 服务描述 */}
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* 服务特色 */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">服务特色</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
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

        {/* 水疗设施介绍 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/20 mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">水疗设施</h3>
            <p className="text-muted-foreground">配备一流的设施，为您提供完美的水疗体验</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {spaFacilities.map((facility, index) => (
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
                  {facility.icon}
                </div>
                <h4 className="font-semibold text-foreground">{facility.title}</h4>
                <p className="text-sm text-muted-foreground">{facility.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 水疗特色服务 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">专属服务</h3>
            <p className="text-muted-foreground">为您量身定制的奢华水疗体验</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-6 space-y-4"
            >
              <Shield className="w-12 h-12 text-primary mx-auto" />
              <h4 className="font-semibold text-foreground">专业团队</h4>
              <p className="text-sm text-muted-foreground">
                国际认证理疗师，资深护理专家，为您提供专业的水疗服务
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-6 space-y-4"
            >
              <Sparkles className="w-12 h-12 text-primary mx-auto" />
              <h4 className="font-semibold text-foreground">私人定制</h4>
              <p className="text-sm text-muted-foreground">
                根据您的需求定制专属护理方案，确保最佳效果
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-6 space-y-4"
            >
              <Heart className="w-12 h-12 text-primary mx-auto" />
              <h4 className="font-semibold text-foreground">私密环境</h4>
              <p className="text-sm text-muted-foreground">
                独立理疗室，宁静氛围，确保您在舒适的环境中享受护理
              </p>
            </motion.div>
          </div>

          {/* 预订提示 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <h4 className="text-lg font-semibold text-foreground mb-4">温馨提示</h4>
            <div className="max-w-2xl mx-auto text-sm text-muted-foreground space-y-2">
              <p>建议提前30分钟到达，以便享受水疗中心的各项设施</p>
              <p>如有特殊健康状况，请提前告知我们的理疗师</p>
              <p>水疗中心营业时间：每日 09:00-22:00</p>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="inline-block mt-6"
            >
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => {
                  const element = document.querySelector("#booking")
                  element?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                预订水疗服务
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}