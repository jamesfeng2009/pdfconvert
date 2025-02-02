'use client'

import { useState } from 'react'
import { Button, Input } from "@nextui-org/react"
import type { FileUploadProps } from '@/types/api'

export default function FileUpload({
  onConversionStart,
  onConversionSuccess,
  onConversionError
}: FileUploadProps) {
  const [file, setFile] = useState<File | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFile(e.target.files[0])
    }
  }

  return (
    <div className="space-y-4">
      <Input
        type="file"
        accept=".doc,.docx,.xls,.xlsx,.pdf"
        onChange={handleFileChange}
        className="w-full"
      />
      <Button
        color="primary"
        onClick={() => file && onConversionStart()}
        disabled={!file}
        className="w-full"
      >
        开始转换
      </Button>
    </div>
  )
}