function copyImagePath(element) {
  // الحصول على الصورة القريبة من الزر الذي تم النقر عليه
  var imagePath = element.previousElementSibling.getAttribute('src');

  // إنشاء عنصر input من النوع text
  var input = document.createElement('input');
  input.setAttribute('value', imagePath);
  document.body.appendChild(input);

  // تحديد نص مسار الصورة
  input.select();

  // نسخ النص إلى الحافظة
  document.execCommand('copy');

  // إزالة العنصر input
  document.body.removeChild(input);

  // إظهار رسالة تأكيد النسخ
  alert('تم نسخ مسار الصورة بنجاح: ' + imagePath);
}
