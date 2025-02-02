from fastapi import APIRouter, UploadFile, File, HTTPException
from typing import Optional
from app.services.conversion_service import ConversionService
from app.core.logging import logger

router = APIRouter()
conversion_service = ConversionService()

@router.post("/convert/{target_format}")
async def convert_file(
    file: UploadFile = File(...),
    target_format: str = "pdf",
    source_format: Optional[str] = None
):
    try:
        if not source_format:
            source_format = file.filename.split('.')[-1].lower()
            
        if source_format not in ['docx', 'xlsx', 'pdf']:
            raise HTTPException(
                status_code=400,
                detail=f"不支持的源文件格式: {source_format}"
            )
            
        # 保存上传的文件
        file_path = f"uploads/{file.filename}"
        with open(file_path, "wb") as buffer:
            content = await file.read()
            buffer.write(content)
            
        # 转换文件
        result = await conversion_service.convert_file(
            file_path,
            source_format,
            target_format
        )
        
        return {
            "status": "success",
            "message": "文件转换成功",
            "data": {
                "converted_file": result
            }
        }
        
    except Exception as e:
        logger.error(f"文件转换失败: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )