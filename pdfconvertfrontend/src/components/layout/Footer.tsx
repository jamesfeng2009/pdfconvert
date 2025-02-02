import { Link } from "@nextui-org/react"

export default function Footer() {
  return (
    <footer className="w-full py-6 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div>
            <h3 className="font-semibold mb-3">关于我们</h3>
            <p className="text-gray-600">提供高效、安全的文档转换服务</p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">快速链接</h3>
            <div className="space-y-2">
              <div><Link href="#features">功能特点</Link></div>
              <div><Link href="#demo">立即使用</Link></div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-3">联系我们</h3>
            <p className="text-gray-600">support@pdfconverter.com</p>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} PDF转换器. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  )
}