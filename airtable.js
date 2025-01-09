document.getElementById('ft-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const parent_phone = document.getElementById('parent_phone').value;
  const eng_name = document.getElementById('eng_name').value;
  const birth = document.getElementById('birth').value;
  const grade = document.getElementById('grade').value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const pc_have = document.getElementById('pc_have').value;
  const mic_have = document.getElementById('mic_have').value;

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
              "아이의 성별": gender
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