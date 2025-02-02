import { Spinner, Button } from "@nextui-org/react"
import type { ConversionStatusProps } from '@/types/api'

export default function ConversionStatus({ status, result }: ConversionStatusProps) {
  if (status === 'idle') return null

  return (
    <div className="mt-6 text-center">
      {status === 'converting' && (
        <div className="flex items-center justify-center space-x-2">
          <Spinner size="sm" />
          <span>正在转换中...</span>
        </div>
      )}

      {status === 'success' && result?.url && (
        <div className="space-y-2">
          <p className="text-green-600">转换成功！</p>
          <Button
            as="a"
            href={result.url}
            download
            color="success"
          >
            下载文件
          </Button>
        </div>
      )}

      {status === 'error' && (
        <p className="text-red-600">
          {result?.message || '转换失败，请重试'}
        </p>
      )}
    </div>
  )
}