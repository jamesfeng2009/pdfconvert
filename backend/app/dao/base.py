from supabase import create_client, Client
from app.core.config import settings

class SupabaseClient:
    _instance = None

    @classmethod
    def get_instance(cls) -> Client:
        if cls._instance is None:
            cls._instance = create_client(
                settings.SUPABASE_URL,
                settings.SUPABASE_KEY
            )
        return cls._instance