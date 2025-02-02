from fastapi import APIRouter
from .endpoints import document_router

api_router = APIRouter()
api_router.include_router(document_router, prefix="/documents", tags=["documents"])