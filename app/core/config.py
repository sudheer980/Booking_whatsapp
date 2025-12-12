from functools import lru_cache
from pydantic import BaseSettings, AnyUrl, Field


class Settings(BaseSettings):
    app_name: str = "Marketplace Backend"
    debug: bool = True
    database_url: AnyUrl = Field(
        default="postgresql+asyncpg://postgres:postgres@localhost:5432/postgres",
        env="DATABASE_URL",
    )
    secret_key: str = Field("super-secret-key", env="SECRET_KEY")
    access_token_expire_minutes: int = Field(60 * 24, env="ACCESS_TOKEN_EXPIRE_MINUTES")
    cors_origins: list[str] = Field(default_factory=lambda: ["*"])

    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"


@lru_cache()
def get_settings() -> Settings:
    return Settings()
