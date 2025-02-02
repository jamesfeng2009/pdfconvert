from fastapi import APIRouter, UploadFile, File
from app.services.document_service import DocumentService

router = APIRouter()
document_service = DocumentService()

@router.post("/convert")
async def convert_document(
    file: UploadFile = File(...),
    output_format: str = "pdf"
):
    # 处理文件转换
    result = await document_service.convert_to_pdf(file.filename, output_format)
    return {"status": "success", "data": result}