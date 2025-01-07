from fastapi import FastAPI, Form
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
import httpx
from pydantic import BaseModel
from pyairtable import Table, Base

app = FastAPI()

# 데이터 모델 정의
class UserProfile(BaseModel):
    name: str
    email: str
    selected_option: str
  
# Airtable 설정
AIRTABLE_BASE_ID = "appPiYXEtFPbUQZ2y"
AIRTABLE_API_TOKEN = "patgJAU8JDPoHCT5Z.33b7f114c1809cfb7c49c9a3fb74455a994844ee553d9a4c8f81462d6403205f"
AIRTABLE_TABLE_NAME = "tblDGbgZOK4k2n5TD"

table = Table(AIRTABLE_API_TOKEN, AIRTABLE_BASE_ID, AIRTABLE_TABLE_NAME)

# HTML 폼 템플릿
HTML_FORM = """
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>User Profile</title>
</head>
<body>
    <h1>사용자 프로필 입력</h1>
    <form method="post">
        <label for="name">이름:</label><br>
        <input type="text" id="name" name="name" required><br>
        <label for="email">이메일:</label><br>
        <input type="email" id="email" name="email" required><br>
        <label for="option">선택지:</label><br>
        <select id="option" name="selected_option" required>
            <option value="1">옵션 1</option>
            <option value="2">옵션 2</option>
            <option value="3">옵션 3</option>
        </select><br>
        <button type="submit">제출</button>
    </form>
</body>
</html>
"""

@app.get("/", response_class=HTMLResponse)
async def read_form():
    return HTML_FORM

@app.post("/")
async def handle_form(name: str = Form(...), email: str = Form(...), selected_option: str = Form(...)):
    user_profile = UserProfile(name=name, email=email, selected_option=selected_option)
    
    # Airtable에 데이터 삽입
    record = table.create({
        "이름": user_profile.name,  # '이름' 컬럼에 name 값을 넣음
        "이메일": user_profile.email,  # '이메일' 컬럼에 email 값을 넣음
        "선택지": user_profile.selected_option
    })
    
    return {"message": "폼이 성공적으로 제출되었습니다!", "data": user_profile}