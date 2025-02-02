export interface ConversionResponse {
  status: string
  message: string
  data: {
    converted_file: string
  }
}

export interface FileUploadProps {
  onConversionStart: () => void
  onConversionSuccess: (data: { url?: string; message?: string }) => void
  onConversionError: (error: string) => void
}

export interface ConversionStatusProps {
  status: 'idle' | 'converting' | 'success' | 'error'
  result?: {
    url?: string
    message?: string
  }
}