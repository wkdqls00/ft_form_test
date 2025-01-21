document.getElementById('ft-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const parent_phone = document.getElementById('parent_phone').value;
  const eng_name = document.getElementById('eng_name').value;
  const birth = document.getElementById('birth').value;
  const grade = document.getElementById('grade').value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const pc_have = document.getElementById('pc_have').value;
  const mic_have = document.getElementById('mic_have').value;
  const current_etc = document.getElementById('current_etc').value;
  const past_etc = document.getElementById('past_etc').value;
  const eng_level = document.getElementById('eng_level').value;
  const pl_help = document.getElementById('pl_help').value;
  const game_have = document.getElementById('game_have').value;
  const private_agree = document.getElementById('private_agree').value;
  const past_overseas_country = document.getElementById('past_overseas_country').value;
  const current_overseas_country = document.getElementById('current_overseas_country').value;

  // 하위 기간 값 수집 시 상위 체크박스 확인
  function getCheckedValue(name, dateId) {
    const checkbox = document.querySelector(`input[name="${name}"][value="${dateId}"]`);
    return checkbox?.checked ? document.getElementById(dateId).value : null;
  }

  // 체크박스 값 수집
  const learningPastMethods = Array.from(
    document.querySelectorAll('input[name="past_eng_learning"]:checked') // 체크된 항목만 선택
  ).map(checkbox => checkbox.nextElementSibling.textContent); // 체크박스의 레이블 값 가져오기
  const learningCurrentMethods = Array.from(
    document.querySelectorAll('input[name="current_eng_learning"]:checked') // 체크된 항목만 선택
  ).map(checkbox => checkbox.nextElementSibling.textContent); // 체크박스의 레이블 값 가져오기
  const gameTypeMethods = Array.from(
    document.querySelectorAll('input[name="game_type"]:checked') // 체크된 항목만 선택
  ).map(checkbox => checkbox.nextElementSibling.textContent); // 체크박스의 레이블 값 가져오기
  const gameDeviceMethods = Array.from(
    document.querySelectorAll('input[name="game_device"]:checked') // 체크된 항목만 선택
  ).map(checkbox => checkbox.nextElementSibling.textContent); // 체크박스의 레이블 값 가져오기


  fetch('https://api.airtable.com/v0/appPiYXEtFPbUQZ2y/tblDGbgZOK4k2n5TD', {
      method: 'POST',
      headers: {
          'Authorization': 'Bearer patgJAU8JDPoHCT5Z.33b7f114c1809cfb7c49c9a3fb74455a994844ee553d9a4c8f81462d6403205f',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          fields: {
              "아이의 영어 이름": eng_name,
              "부모님 연락처": parent_phone,
              "아이의 출생 연도": birth,
              "아이의 성별": gender,
              "아이의 학년": grade,
              "PC 보유 여부": pc_have,
              "MIC 보유 여부": mic_have,
              "과거 영어 학습 방식": learningPastMethods,
              "현재 영어 학습 방식": learningCurrentMethods,
              "과거 영어 학습 방식 (기타)": past_etc,
              "현재 영어 학습 방식 (기타)": current_etc,
              // 과거 기간
              "과거) 국제학교 교육 기간": getCheckedValue('past_eng_learning', 'past_global_date'),
              "과거) 학교 정규 수업 / 원어민 교육 기간": getCheckedValue('past_eng_learning', 'past_school_native_date'),
              "과거) 학교 정규 수업 / 내국인 교육 기간": getCheckedValue('past_eng_learning', 'past_school_korean_date'),
              "과거) 학교 방과후 수업 / 원어민 교육 기간": getCheckedValue('past_eng_learning', 'past_after_native'),
              "과거) 학교 방과후 수업 / 내국인 교육 기간": getCheckedValue('past_eng_learning', 'past_after_korean'),
              "과거) 원어민 그룹 수업 교육 기간": getCheckedValue('past_eng_learning', 'past_native_group_date'),
              "과거) 내국인 영어 그룹 수업 교육 기간": getCheckedValue('past_eng_learning', 'past_korean_group_date'),
              "과거) 랩실 교육 기간": getCheckedValue('past_eng_learning', 'past_lab_date'),
              "과거) 영어도서관 교육 기간": getCheckedValue('past_eng_learning', 'past_library_date'),
              "과거) 영어 공부방 및 교습소 교육 기간": getCheckedValue('past_eng_learning', 'past_study_room_date'),
              "과거) 영어유치원 교육 기간": getCheckedValue('past_eng_learning', 'past_eng_kindergraden_date'),
              "과거) 유치원 및 놀이 학교 내 영어 수업 교육 기간": getCheckedValue('past_eng_learning', 'past_normal_kindergarden_date'),
              "과거) 엄마표 영어 코칭 센터 교육 기간": getCheckedValue('past_eng_learning', 'past_mother_date'),
              "과거) 원어민 과외 교육 기간": getCheckedValue('past_eng_learning', 'past_native_class_date'),
              "과거) 내국인 영어 과외 교육 기간": getCheckedValue('past_eng_learning', 'past_korean_class_date'),
              "과거) 방문 영어 교육 기간": getCheckedValue('past_eng_learning', 'past_visit_date'),
              "과거) 영어키즈카페 교육 기간": getCheckedValue('past_eng_learning', 'past_kids_cafe_date'),
              "과거) 화상영어 교육 기간": getCheckedValue('past_eng_learning', 'past_virtual_date'),
              "과거) 전화영어 교육 기간": getCheckedValue('past_eng_learning', 'past_call_date'),
              "과거) 영어앱 교육 기간": getCheckedValue('past_eng_learning', 'past_app_date'),
              "과거) 학습지 교육 기간": getCheckedValue('past_eng_learning', 'past_worksheet_date'),
              "과거) 인강 교육 기간": getCheckedValue('past_eng_learning', 'past_internet_class_date'),
              "과거) 영어 원서 구독 교육 기간": getCheckedValue('past_eng_learning', 'past_original_date'),
              "과거) 해외 거주 기간": getCheckedValue('past_eng_learning', 'past_overseas_date'),
              "과거) 가정교육 기간": getCheckedValue('past_eng_learning', 'past_home_class_date'),
              "과거) 해외 거주 국가": past_overseas_country,
              // 현재 기간
              "현재) 국제학교 교육 기간": getCheckedValue('current_eng_learning', 'current_global_date'),
              "현재) 학교 정규 수업 / 원어민 교육 기간": getCheckedValue('current_eng_learning', 'current_school_native_date'),
              "현재) 학교 정규 수업 / 내국인 교육 기간": getCheckedValue('current_eng_learning', 'current_school_korean_date'),
              "현재) 학교 방과후 수업 / 원어민 교육 기간": getCheckedValue('current_eng_learning', 'current_after_native'),
              "현재) 학교 방과후 수업 / 내국인 교육 기간": getCheckedValue('current_eng_learning', 'current_after_korean'),
              "현재) 원어민 그룹 수업 교육 기간": getCheckedValue('current_eng_learning', 'current_native_group_date'),
              "현재) 내국인 영어 그룹 수업 교육 기간": getCheckedValue('current_eng_learning', 'current_korean_group_date'),
              "현재) 랩실 교육 기간": getCheckedValue('current_eng_learning', 'current_lab_date'),
              "현재) 영어도서관 교육 기간": getCheckedValue('current_eng_learning', 'current_library_date'),
              "현재) 영어 공부방 및 교습소 교육 기간": getCheckedValue('current_eng_learning', 'current_study_room_date'),
              "현재) 영어유치원 교육 기간": getCheckedValue('current_eng_learning', 'current_eng_kindergraden_date'),
              "현재) 유치원 및 놀이 학교 내 영어 수업 교육 기간": getCheckedValue('current_eng_learning', 'current_normal_kindergarden_date'),
              "현재) 엄마표 영어 코칭 센터 교육 기간": getCheckedValue('current_eng_learning', 'current_mother_date'),
              "현재) 원어민 과외 교육 기간": getCheckedValue('current_eng_learning', 'current_native_class_date'),
              "현재) 내국인 영어 과외 교육 기간": getCheckedValue('current_eng_learning', 'current_korean_class_date'),
              "현재) 방문 영어 교육 기간": getCheckedValue('current_eng_learning', 'current_visit_date'),
              "현재) 영어키즈카페 교육 기간": getCheckedValue('current_eng_learning', 'current_kids_cafe_date'),
              "현재) 화상영어 교육 기간": getCheckedValue('current_eng_learning', 'current_virtual_date'),
              "현재) 전화영어 교육 기간": getCheckedValue('current_eng_learning', 'current_call_date'),
              "현재) 영어앱 교육 기간": getCheckedValue('current_eng_learning', 'current_app_date'),
              "현재) 학습지 교육 기간": getCheckedValue('current_eng_learning', 'current_worksheet_date'),
              "현재) 인강 교육 기간": getCheckedValue('current_eng_learning', 'current_internet_class_date'),
              "현재) 영어 원서 구독 교육 기간": getCheckedValue('current_eng_learning', 'current_original_date'),
              "현재) 해외 거주 기간": getCheckedValue('current_eng_learning', 'current_overseas_date'),
              "현재) 가정교육 기간": getCheckedValue('current_eng_learning', 'past_home_class_date'),
              "현재) 해외 거주 국가": current_overseas_country,
              // 영어 레벨
              "아이의 영어 말하기 수준": eng_level,
              "플랭귀지 코멘트": pl_help,
              // 게임 경험
              "게임을 해 본 적이 있나요?": game_have,
              "어떤 게임을 해 본 적이 있나요?": gameTypeMethods,
              "어떤 디바이스로 하나요?": gameDeviceMethods,
              // 개인 정보
              "개인 정보 수집 및 이용 동의": private_agree 
          }
      })
  })
  .then(response => response.json())
  .then(data => {
      console.log('Success:', data);
      alert('데이터가 성공적으로 저장되었습니다!');
  })
  .catch((error) => {
      console.error('Error:', error);
  });
});