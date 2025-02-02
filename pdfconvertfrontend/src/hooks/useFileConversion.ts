import { useState } from 'react'
import { convertDocument } from '@/services/api'

export const useFileConversion = () => {
  const [status, setStatus] = useState<'idle' | 'converting' | 'success' | 'error'>('idle')
  const [result, setResult] = useState<{ url?: string; message?: string }>({})

  const handleConversion = async (file: File) => {
    try {
      setStatus('converting')
      const response = await convertDocument(file)
      setStatus('success')
      setResult({
        url: response.data.converted_file,
        message: response.message
      })
    } catch (error) {
      setStatus('error')
      setResult({
        message: error instanceof Error ? error.message : '转换失败'
      })
    }
  }

  return {
    status,
    result,
    handleConversion
  }
}