import { Button } from '@nextui-org/react'

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
            轻松转换文档格式
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
            快速、安全地将您的文档转换为 PDF 或其他格式。支持 Word、Excel 等多种格式互转。
          </p>
          <div className="space-x-4">
            <Button
              size="lg"
              color="default"
              variant="solid"
              href="#demo"
              as="a"
            >
              立即开始
            </Button>
            <Button
              size="lg"
              color="default"
              variant="ghost"
              href="#features"
              as="a"
            >
              了解更多
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}