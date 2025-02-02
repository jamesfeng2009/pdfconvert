from .base import SupabaseClient

class DocumentDAO:
    def __init__(self):
        self.supabase = SupabaseClient.get_instance()
        
    async def create_document(self, document_data: dict):
        return self.supabase.table('documents').insert(document_data).execute()
        
    async def get_document(self, document_id: str):
        return self.supabase.table('documents').select("*").eq('id', document_id).execute()