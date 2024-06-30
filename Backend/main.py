from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from . import models, crud, database

app = FastAPI()

models.Base.metadata.create_all(bind=database.engine)

def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/words/", response_model=list[models.Word])
def read_words(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    words = crud.get_words(db, skip=skip, limit=limit)
    return words

@app.get("/words/{word_id}", response_model=models.Word)
def read_word(word_id: int, db: Session = Depends(get_db)):
    db_word = crud.get_word(db, word_id=word_id)
    if db_word is None:
        raise HTTPException(status_code=404, detail="Word not found")
    return db_word

@app.post("/words/", response_model=models.Word)
def create_word(word: models.Word, db: Session = Depends(get_db)):
    return crud.create_word(db=db, word=word)
