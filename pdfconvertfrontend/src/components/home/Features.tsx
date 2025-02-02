import { Card, CardBody } from '@nextui-org/react'

const features = [
  {
    title: '多格式支持',
    description: '支持 Word、Excel、PDF 等多种格式的互相转换',
    icon: '📄'
  },
  {
    title: '快速转换',
    description: '采用高效的转换引擎，确保快速完成转换任务',
    icon: '⚡'
  },
  {
    title: '安全可靠',
    description: '所有文件都经过加密处理，确保您的数据安全',
    icon: '🔒'
  },
  {
    title: '免费使用',
    description: '提供基础的转换功能，无需付费即可使用',
    icon: '🎁'
  }
]

export default function Features() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          为什么选择我们
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardBody className="text-center p-6">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}