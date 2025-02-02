import axios from 'axios'
import type { ConversionResponse } from '@/types/api'

const baseURL = 'http://localhost:8000/api/v1'

const api = axios.create({
  baseURL,
  timeout: 30000,
  headers: {
    'Accept': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  },
  withCredentials: true,
  maxContentLength: 10 * 1024 * 1024
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 413) {
      throw new Error('文件大小超过限制')
    }
    if (error.response?.status === 415) {
      throw new Error('不支持的文件类型')
    }
    throw new Error(error.response?.data?.message || '服务器错误')
  }
)

export const convertDocument = async (file: File) => {
  const formData = new FormData()
  formData.append('file', file)

  const response = await api.post<ConversionResponse>('/convert', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    onUploadProgress: (progressEvent) => {
      const percentCompleted = Math.round((progressEvent.loaded * 100) / (progressEvent.total || 1))
      console.log(`上传进度: ${percentCompleted}%`)
    }
  })

  return response.data
}