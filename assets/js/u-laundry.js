$(document).on("click", ".send_form", function () {
  var input_blanter = document.getElementById("wa_name");

  /* Whatsapp Settings */
  var walink = "https://web.whatsapp.com/send",
    phone = "6282253701847",
    walink2 = "Halo *U-Laundry*, saya ingin laundry :",
    text_yes = "Terkirim.",
    text_no = "Isi semua Formulir lalu klik Send.";

  /* Smartphone Support */
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    var walink = "whatsapp://send";
  }

  if ("" != input_blanter.value) {
    /* Call Input Form */
    var input_orderid = $("#wa_orderid").text(),
      input_select1 = $("#wa_select :selected").text(),
      input_name1 = $("#wa_name").val(),
      input_number1 = $("#wa_number").val(),
      input_textarea1 = $("#wa_textarea").val();

    /* Final Whatsapp URL */
    var blanter_whatsapp =
      walink +
      "?phone=" +
      phone +
      "&text=" +
      walink2 +
      "%0A%0A" +
      "*ID Order* : " +
      input_orderid +
      "%0A" +
      "*Nama* : " +
      input_name1 +
      "%0A" +
      "*Nomor Hp* : " +
      input_number1 +
      "%0A" +
      "*Service* : " +
      input_select1 +
      "%0A" +
      "*Alamat* : " +
      input_textarea1 +
      "%0A";

    /* Whatsapp Window Open */
    window.open(blanter_whatsapp, "_blank");
    document.getElementById("text-info").innerHTML =
      '<span class="yes">' + text_yes + "</span>";
  } else {
    document.getElementById("text-info").innerHTML =
      '<span class="no">' + text_no + "</span>";
  }
});
