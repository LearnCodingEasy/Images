function copyImagePath(element) {
  // الحصول على الصورة القريبة من الزر الذي تم النقر عليه
  var imagePath = element.previousElementSibling.getAttribute("src");

  // إنشاء عنصر input من النوع text
  var input = document.createElement("input");
  input.setAttribute("value", `https://learncodingeasy.github.io/Images/${imagePath}`);
  document.body.appendChild(input);

  // تحديد نص مسار الصورة
  input.select();

  // نسخ النص إلى الحافظة
  document.execCommand("copy");

  // إزالة العنصر input
  document.body.removeChild(input);

  // عرض رسالة الإشعار باستخدام Bulma Toast
  bulmaToast.toast({
    message: "تم نسخ مسار الصورة بنجاح",
    type: "is-success",
    dismissible: true,
    pauseOnHover: true,
    duration: 2000,
    position: "bottom-right"
  });
}
