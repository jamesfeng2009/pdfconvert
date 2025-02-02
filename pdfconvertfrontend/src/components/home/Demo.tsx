'use client'

import { Card, CardBody } from '@nextui-org/react'
import FileUpload from '@/components/shared/FileUpload'
import ConversionStatus from '@/components/shared/ConversionStatus'
import { useFileConversion } from '@/hooks/useFileConversion'

export default function Demo() {
  const { status, result, handleConversion } = useFileConversion()

  return (
    <section id="demo" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <Card className="max-w-3xl mx-auto">
          <CardBody className="p-6">
            <h2 className="text-2xl font-bold text-center mb-6">
              开始转换您的文件
            </h2>
            <FileUpload
              onConversionStart={() => handleConversion}
              onConversionSuccess={(data) => {
                // 处理成功
              }}
              onConversionError={(error) => {
                // 处理错误
              }}
            />
            <ConversionStatus
              status={status}
              result={result}
            />
          </CardBody>
        </Card>
      </div>
    </section>
  )
}