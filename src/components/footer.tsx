"use client"

import { motion } from "framer-motion"
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  MessageCircle,
  Heart,
  ChevronUp,
  Clock,
  Wifi,
  Car,
  Shield
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { hotelData, navigation } from "@/lib/utils"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "关于我们", href: "#about" },
    { name: "客房预订", href: "#booking" },
    { name: "餐饮服务", href: "#dining" },
    { name: "会议设施", href: "#meetings" },
    { name: "水疗中心", href: "#spa" },
    { name: "优惠活动", href: "#offers" }
  ]

  const services = [
    {
      icon: <Wifi className="w-5 h-5" />,
      name: "免费WiFi"
    },
    {
      icon: <Car className="w-5 h-5" />,
      name: "免费停车"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      name: "24小时服务"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      name: "安全保障"
    }
  ]

  const legalLinks = [
    { name: "隐私政策", href: "#privacy" },
    { name: "使用条款", href: "#terms" },
    { name: "Cookie政策", href: "#cookies" },
    { name: "法律声明", href: "#legal" }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gradient-to-b from-background to-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* 主要内容区域 */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 酒店信息 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">云境华庭酒店</h3>
                <p className="text-muted-foreground leading-relaxed">
                  坐落于城市之巅，致力于为每一位宾客提供超越期待的奢华体验。
                  在这里，时间仿佛静止，让您在繁华都市中找到一片宁静天地。
                </p>
              </div>

              {/* 服务特色 */}
              <div className="grid grid-cols-2 gap-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="text-primary">{service.icon}</div>
                    <span className="text-sm text-muted-foreground">{service.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 快速链接 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h4 className="text-lg font-semibold text-foreground">快速链接</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* 联系信息 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h4 className="text-lg font-semibold text-foreground">联系我们</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-muted-foreground text-sm">
                      {hotelData.contact.address}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <a
                    href={`tel:${hotelData.contact.phone}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {hotelData.contact.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <a
                    href={`mailto:${hotelData.contact.email}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {hotelData.contact.email}
                  </a>
                </div>
              </div>

              {/* 服务时间 */}
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground mb-2">服务时间</p>
                <p className="text-xs text-muted-foreground">
                  前台服务：24小时<br />
                  餐厅：06:30-22:00<br />
                  水疗中心：09:00-22:00
                </p>
              </div>
            </motion.div>

            {/* 关注我们 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h4 className="text-lg font-semibold text-foreground">关注我们</h4>

              {/* 社交媒体 */}
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">获取最新优惠和活动信息</p>
                <div className="grid grid-cols-3 gap-3">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Youtube className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>

              {/* 微信公众号 */}
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground mb-3">微信公众号</p>
                <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MessageCircle className="w-8 h-8 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">扫码关注</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 分隔线 */}
        <div className="border-t border-border"></div>

        {/* 底部信息 */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* 版权信息 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <p className="text-sm text-muted-foreground">
                © {currentYear} 云境华庭酒店. 保留所有权利.
              </p>
              <div className="flex flex-wrap items-center justify-center md:justify-start space-x-4 mt-2">
                {legalLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* 备案信息 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center md:text-right"
            >
              <p className="text-xs text-muted-foreground mb-2">
                沪ICP备2024888888号 | 沪公网安备 31011502012345号
              </p>
              <div className="flex items-center justify-center md:justify-end space-x-2 text-xs text-muted-foreground">
                <span>用</span>
                <Heart className="w-3 h-3 text-primary" />
                <span>设计开发</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 返回顶部按钮 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="fixed bottom-8 right-8 z-40"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              onClick={scrollToTop}
              size="icon"
              className="w-12 h-12 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg"
            >
              <ChevronUp className="w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}