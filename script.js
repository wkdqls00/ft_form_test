document.addEventListener('DOMContentLoaded', function () {
  // 상위 카테고리 체크박스 클릭 이벤트
  document.querySelectorAll('.form-checkbox-label > input.form-checkbox').forEach(function (checkbox) {
      checkbox.addEventListener('change', function () {
          const subMenu = this.closest('.form-checkbox-label').nextElementSibling;

          if (this.checked && subMenu && subMenu.classList.contains('input-sub-wrap')) {
              subMenu.style.display = 'block'; // 하위 메뉴 보이기
          } else if (subMenu && subMenu.classList.contains('input-sub-wrap')) {
              subMenu.style.display = 'none'; // 하위 메뉴 숨기기

              // 하위 체크박스 및 선택값 초기화
              const nestedInputs = subMenu.querySelectorAll('input.form-checkbox, select');
              nestedInputs.forEach(input => {
                  if (input.type === 'checkbox') {
                      input.checked = false;
                  } else if (input.tagName === 'SELECT') {
                      input.selectedIndex = 0;
                  }

                  // 하위 메뉴가 또 있을 경우 모두 숨기기
                  const nestedSubMenu = input.closest('.form-checkbox-label')?.nextElementSibling;
                  if (nestedSubMenu && nestedSubMenu.classList.contains('input-sub-wrap')) {
                      nestedSubMenu.style.display = 'none';
                  }
              });
          }
      });
  });
});

document.addEventListener('DOMContentLoaded', function () {
    // 없음 체크박스들
    const currentNoneOption = document.getElementById('current_none_option');
    const pastNoneOption = document.getElementById('past_none_option');
    
    // 체크박스 타입과 name 속성을 모두 조건으로 사용
    const currentAllCheckboxes = document.querySelectorAll('input[type="checkbox"][name="current_eng_category"]');
    const currentSubCheckboxes = document.querySelectorAll('input[type="checkbox"][name="current_eng_learning"]');
    const pastAllCheckboxes = document.querySelectorAll('input[type="checkbox"][name="past_eng_category"]');
    const pastSubCheckboxes = document.querySelectorAll('input[type="checkbox"][name="past_eng_learning"]');

    // 현재 학습 체크박스 처리
    if (currentNoneOption && currentAllCheckboxes.length > 0) {
        // 현재 없음 클릭 시 현재 체크박스들만 해제
        currentNoneOption.addEventListener('change', function () {
            if (this.checked) {
                currentAllCheckboxes.forEach(checkbox => {
                    checkbox.checked = false;
                    const subMenu = checkbox.closest('.form-checkbox-label')?.nextElementSibling;
                    if (subMenu && subMenu.classList.contains('input-sub-wrap')) {
                        subMenu.style.display = 'none';
                    }
                });
            }
        });
        // 현재 없음 클릭 시 현재 체크박스들만 해제
        currentNoneOption.addEventListener('change', function () {
            if (this.checked) {
                currentSubCheckboxes.forEach(checkbox => {
                    checkbox.checked = false;
                    const subMenu = checkbox.closest('.form-checkbox-label')?.nextElementSibling;
                    if (subMenu && subMenu.classList.contains('input-sub-wrap')) {
                        subMenu.style.display = 'none';
                    }
                });
            }
        });

        // 현재 체크박스 클릭 시 현재 없음 해제
        currentAllCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function () {
                if (this.checked) {
                    currentNoneOption.checked = false;
                    
                    const subMenu = this.closest('.form-checkbox-label')?.nextElementSibling;
                    if (subMenu && subMenu.classList.contains('input-sub-wrap')) {
                        subMenu.style.display = 'block';
                    }
                } else {
                    const subMenu = this.closest('.form-checkbox-label')?.nextElementSibling;
                    if (subMenu && subMenu.classList.contains('input-sub-wrap')) {
                        subMenu.style.display = 'none';
                    }
                }
            });
        });
    }

    // 과거 학습 체크박스 처리
    if (pastNoneOption && pastAllCheckboxes.length > 0) {
        // 현재 없음 클릭 시 현재 체크박스들만 해제
        pastNoneOption.addEventListener('change', function () {
            if (this.checked) {
                pastAllCheckboxes.forEach(checkbox => {
                    checkbox.checked = false;
                    const subMenu = checkbox.closest('.form-checkbox-label')?.nextElementSibling;
                    if (subMenu && subMenu.classList.contains('input-sub-wrap')) {
                        subMenu.style.display = 'none';
                    }
                });
            }
        });
        // 현재 없음 클릭 시 현재 체크박스들만 해제
        pastNoneOption.addEventListener('change', function () {
            if (this.checked) {
                pastSubCheckboxes.forEach(checkbox => {
                    checkbox.checked = false;
                    const subMenu = checkbox.closest('.form-checkbox-label')?.nextElementSibling;
                    if (subMenu && subMenu.classList.contains('input-sub-wrap')) {
                        subMenu.style.display = 'none';
                    }
                });
            }
        });

        // 현재 체크박스 클릭 시 현재 없음 해제
        pastAllCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function () {
                if (this.checked) {
                    pastNoneOption.checked = false;
                    
                    const subMenu = this.closest('.form-checkbox-label')?.nextElementSibling;
                    if (subMenu && subMenu.classList.contains('input-sub-wrap')) {
                        subMenu.style.display = 'block';
                    }
                } else {
                    const subMenu = this.closest('.form-checkbox-label')?.nextElementSibling;
                    if (subMenu && subMenu.classList.contains('input-sub-wrap')) {
                        subMenu.style.display = 'none';
                    }
                }
            });
        });
    }
});