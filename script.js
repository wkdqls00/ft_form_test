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
