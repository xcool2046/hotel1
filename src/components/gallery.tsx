"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryCategories = [
    {
      id: 1,
      name: "酒店外观",
      images: [
        { id: 1, caption: "酒店主楼外观" },
        { id: 2, caption: "夜晚灯光效果" },
        { id: 3, caption: "酒店大门入口" },
        { id: 4, caption: "建筑细节特写" }
      ]
    },
    {
      id: 2,
      name: "豪华客房",
      images: [
        { id: 5, caption: "总统套房客厅" },
        { id: 6, caption: "豪华客房卧室" },
        { id: 7, caption: "大理石浴室" },
        { id: 8, caption: "城市景观阳台" }
      ]
    },
    {
      id: 3,
      name: "餐饮空间",
      images: [
        { id: 9, caption: "云境餐厅" },
        { id: 10, caption: "江南茶室" },
        { id: 11, caption: "空中酒吧" },
        { id: 12, caption: "私人包厢" }
      ]
    },
    {
      id: 4,
      name: "水疗健身",
      images: [
        { id: 13, caption: "恒温泳池" },
        { id: 14, caption: "健身中心" },
        { id: 15, caption: "水疗理疗室" },
        { id: 16, caption: "桑拿房" }
      ]
    },
    {
      id: 5,
      name: "会议设施",
      images: [
        { id: 17, caption: "大宴会厅" },
        { id: 18, caption: "董事会议室" },
        { id: 19, caption: "多功能厅" },
        { id: 20, caption: "休息区" }
      ]
    },
    {
      id: 6,
      name: "公共区域",
      images: [
        { id: 21, caption: "酒店大堂" },
        { id: 22, caption: "礼宾服务台" },
        { id: 23, caption: "休息区" },
        { id: 24, caption: "艺术品展示" }
      ]
    }
  ]

  const allImages = galleryCategories.flatMap(category =>
    category.images.map(image => ({
      ...image,
      category: category.name
    }))
  )

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return

    const currentIndex = allImages.findIndex(img => img.id === selectedImage)
    let newIndex

    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : allImages.length - 1
    } else {
      newIndex = currentIndex < allImages.length - 1 ? currentIndex + 1 : 0
    }

    setSelectedImage(allImages[newIndex].id)
  }

  const currentImage = selectedImage ? allImages.find(img => img.id === selectedImage) : null

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-background/95 to-background">
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
            精彩图集
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            通过镜头感受云境华庭的奢华与雅致，每一处细节都彰显品质生活
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
          {galleryCategories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-card border border-primary/20 text-primary rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* 图片网格 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {allImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="relative group cursor-pointer"
              onClick={() => openLightbox(image.id)}
            >
              <div className="relative h-64 rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* 分类标签 */}
                <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-primary/10 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-xs font-medium">
                    {image.category}
                  </span>
                </div>

                {/* 查看按钮 */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Maximize2 className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* 图片说明 */}
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-foreground text-sm font-medium">{image.caption}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 查看更多按钮 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="inline-block"
          >
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8"
            >
              查看更多图片
            </Button>
          </motion.div>
        </motion.div>

        {/* 图片预览说明 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: true }}
          className="mt-16 text-center space-y-4"
        >
          <h3 className="text-xl font-semibold text-foreground">探索更多</h3>
          <div className="max-w-3xl mx-auto text-sm text-muted-foreground space-y-2">
            <p>点击任意图片可查看大图</p>
            <p>所有图片均为实景拍摄，真实展示酒店设施与环境</p>
            <p>如有特定区域需求，欢迎联系我们的客服团队获取更多信息</p>
          </div>
        </motion.div>
      </div>

      {/* 图片灯箱 */}
      {selectedImage && currentImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* 关闭按钮 */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            onClick={(e) => {
              e.stopPropagation()
              closeLightbox()
            }}
          >
            <X className="w-5 h-5" />
          </motion.button>

          {/* 导航按钮 */}
          {allImages.length > 1 && (
            <>
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="absolute left-4 z-10 w-10 h-10 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                onClick={(e) => {
                  e.stopPropagation()
                  navigateImage('prev')
                }}
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>

              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="absolute right-4 z-10 w-10 h-10 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                onClick={(e) => {
                  e.stopPropagation()
                  navigateImage('next')
                }}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </>
          )}

          {/* 图片容器 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-4xl max-h-[80vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
              {/* 图片占位符 */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                    <Maximize2 className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-foreground font-medium">{currentImage.caption}</p>
                  <p className="text-muted-foreground text-sm">{currentImage.category}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 图片信息 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center"
          >
            <p className="text-foreground font-medium">{currentImage.caption}</p>
            <p className="text-muted-foreground text-sm">{currentImage.category}</p>
            {allImages.length > 1 && (
              <p className="text-muted-foreground text-xs mt-2">
                {allImages.findIndex(img => img.id === selectedImage) + 1} / {allImages.length}
              </p>
            )}
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}