from sqlalchemy.orm import Session
from . import models

def get_word(db: Session, word_id: int):
    return db.query(models.Word).filter(models.Word.id == word_id).first()

def get_words(db: Session, skip: int = 0, limit: int = 10):
    return db.query(models.Word).offset(skip).limit(limit).all()

def create_word(db: Session, word: models.Word):
    db.add(word)
    db.commit()
    db.refresh(word)
    return word
