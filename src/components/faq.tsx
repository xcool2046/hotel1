"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown, ChevronUp, HelpCircle, Phone, MessageCircle, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { faqData } from "@/lib/utils"

export default function FAQ() {
  const [expandedItems, setExpandedItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setExpandedItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "电话咨询",
      description: "24小时客服热线",
      value: "+86 21 6888 8888",
      action: "立即拨打"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "在线客服",
      description: "实时对话解答",
      value: "平均响应时间 < 1分钟",
      action: "开始对话"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "邮件咨询",
      description: "详细问题解答",
      value: "reservation@yunjinggrand.com",
      action: "发送邮件"
    }
  ]

  const categories = [
    { name: "预订相关", count: 3 },
    { name: "入住须知", count: 2 },
    { name: "设施服务", count: 2 },
    { name: "其他问题", count: 1 }
  ]

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-background to-background/95">
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
            常见问题
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            快速解答您的疑问，让您的预订和入住体验更加顺畅
          </p>
        </motion.div>

        {/* 分类标签 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-card border border-primary/20 text-primary rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {category.name} ({category.count})
            </motion.button>
          ))}
        </motion.div>

        {/* FAQ 列表 */}
        <div className="max-w-4xl mx-auto mb-16">
          {faqData.map((item, index) => {
            const isExpanded = expandedItems.includes(index)

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-4"
              >
                <Card className="bg-card border-border overflow-hidden">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-lg"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <HelpCircle className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground pr-4">
                          {item.question}
                        </h3>
                      </div>
                      <div className="flex-shrink-0">
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-primary"
                        >
                          <ChevronDown className="w-5 h-5" />
                        </motion.div>
                      </div>
                    </div>
                  </button>

                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: isExpanded ? "auto" : 0,
                      opacity: isExpanded ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2">
                      <div className="pl-14 text-muted-foreground leading-relaxed">
                        {item.answer}
                      </div>
                    </div>
                  </motion.div>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* 联系支持 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/20"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">需要更多帮助？</h3>
            <p className="text-muted-foreground">
              如果您没有找到想要的答案，欢迎通过以下方式联系我们
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-card border-border h-full text-center">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
                      {method.icon}
                    </div>
                    <h4 className="font-semibold text-foreground">{method.title}</h4>
                    <p className="text-sm text-muted-foreground">{method.description}</p>
                    <p className="text-primary font-medium">{method.value}</p>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="inline-block"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        {method.action}
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* 快速链接 */}
          <div className="text-center space-y-4">
            <h4 className="text-lg font-semibold text-foreground">快速帮助</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "预订政策",
                "退改规则",
                "发票说明",
                "会员权益",
                "投诉建议",
                "合作洽谈"
              ].map((link, index) => (
                <motion.button
                  key={link}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-card border border-primary/20 text-primary rounded-full hover:bg-primary hover:text-primary-foreground transition-colors text-sm"
                >
                  {link}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 服务时间 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center space-y-4"
        >
          <h4 className="text-lg font-semibold text-foreground">客服服务时间</h4>
          <div className="max-w-2xl mx-auto text-sm text-muted-foreground space-y-2">
            <p>电话客服：24小时全天候服务</p>
            <p>在线客服：每日 08:00-22:00</p>
            <p>邮件回复：24小时内回复您的咨询</p>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="inline-block mt-6"
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
        </motion.div>
      </div>
    </section>
  )
}