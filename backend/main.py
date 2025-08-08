from contextlib import asynccontextmanager
from fastapi import FastAPI
from database import engine
from models import Base


async def init_models():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

@asynccontextmanager
async def lifespan(app: FastAPI):
    await init_models()
    yield

app = FastAPI(lifespan=lifespan)

@app.get('/')
def main():
    return "hello"