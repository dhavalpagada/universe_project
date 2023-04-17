/*Nav menu*/

$(document).on("click",".navbar-toggler",function(){
    $(this).toggleClass("open");
    $("body").toggleClass("overlay-main");
    $(".header-nav").toggleClass("open");
    $("#bodyoverlay").toggleClass("open");
});

$("#bodyoverlay").click(function(){
   $(this).removeClass("open");
   $("body").removeClass("overlay-main");
   $(".header-nav").removeClass("open");
   $(".navbar-toggler").removeClass("open");
});

/* heder search field */

$('.search-icon').click(function() {
    if($(this).hasClass('search')){
      $('.hdr-form-search').hide();
      $('.search-icon').removeClass('search');
    }else{

      $(this).addClass('search');
      $('.hdr-form-search').fadeIn();
    }
});


$(document).click(function (e)
{
    var container = $(".nav-search");

    if (!container.is(e.target)
        && container.has(e.target).length === 0) 
    {
      $('.hdr-form-search').hide();
      $('.header-search .search-icon').removeClass('search');

      }
});


/* header join button */

$('.join-btn-icon').click(function() {
    if($(this).hasClass('btn-join')){
      $('.hdr-join-btn').hide();
      $('.join-btn-icon').removeClass('btn-join');
    }else{

      $(this).addClass('btn-join');
      $('.hdr-join-btn').fadeIn();
    }
});


$(document).click(function (e)
{
    var container = $(".join-nav-btn");

    if (!container.is(e.target)
        && container.has(e.target).length === 0) 
    {
      $('.hdr-join-btn').hide();
      $('.join-btn-right .join-btn-icon').removeClass('btn-join');

      }
});

/* leave reply comment*/

$('.reply-link').click(function() {
    if($(this).hasClass('open')){
      $('.reply-comment').hide();
      $('.reply-link').removeClass('open');
    }else{

      $(this).addClass('open');
      $('.reply-comment').fadeIn();
    }
});

$('.btn-cancel').click(function() {
      $('.reply-comment').hide();
      $('.reply-link').removeClass('open');
    
});


/*edit profile js*/

$(".btnedit").click(function() {
  $($(this).attr("data-target")).css("display", "block");
  $($(this).attr("data-elem")).css("display", "none");
  $(this).hide()
});
$(".btnhide").click(function() {
  $(this).parent().hide();
  $($(this).attr("data-target")).css("display", "block");
  $(".btnedit").css("display", "block")
});
$(document).ready(function() {
  $(".btn-userdetail").click(function() {
    var e = $(this).attr("data-name");
    var d = "";
    if (e == "username") {
      if ($("#user_name").val() != "") {
        d = "user_name=" + $("#user_name").val()
      } else {
        displayErrorMsg("Please Insert User Name");
        return false
      }
    }
    if (e == "userphone") {
      if ($("#user_phone").val() != "") {
        var c = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (!$("#user_phone").val().match(c)) {
          displayErrorMsg("Please Insert valid Phone Number..!!");
          return false
        }
        d = "user_phone=" + $("#user_phone").val()
      } else {
        displayErrorMsg("Please Insert User Phone Number..!!");
        return false
      }
    }
    if (e == "usertags") {
      if ($("#user_tags").val() != "") {
        d = "user_tags=" + $("#user_tags").val()
      } else {
        displayErrorMsg("Please Insert Technology..!!");
        return false
      }
    }
    if (e == "changepassword") {
      if ($("#old_password").val() != "" && $("#new_password").val() != "" && $("#confirm_new_password").val()) {
        if ($("#new_password").val() != $("#confirm_new_password").val()) {
          displayErrorMsg("New Password and Confirm Password Not Same...!!");
          return false
        }
        d = "new_pass=" + $("#new_password").val() + "&old_pass=" + $("#old_password").val()
      } else {
        displayErrorMsg("Please Insert Password..!!");
        return false
      }
    }
    if (e == "userabout") {
      if ($("#user_about").val() != "") {
        d = "user_about=" + $("#user_about").val()
      } else {
        displayErrorMsg("Please Insert Description..!!");
        return false
      }
    }
    if (e == "userlink") {
      if ($("#facebook").val() != "") {
        var b = /^(http|https)\:\/\/www.facebook.com\/.*/i;
        if (!$("#facebook").val().match(b)) {
          displayErrorMsg("Please Insert valid Facebook URL..!!");
          return false
        }
      }
      if ($("#twitter").val() != "") {
        var a = /http(?:s)?:\/\/(?:www\.)?twitter\.com\/([a-zA-Z0-9_]+)/;
        if (!$("#twitter").val().match(a)) {
          displayErrorMsg("Please Insert valid Twitter URL..!!");
          return false
        }
      }
      if ($("#linkedin").val() != "") {
        var f = /^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile)/;
        if (!$("#linkedin").val().match(f)) {
          displayErrorMsg("Please Insert valid Linkedin URL..!!");
          return false
        }
      }
      if ($("#website").val() != "") {
        var g = /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/;
        if (!$("#website").val().match(g)) {
          displayErrorMsg("Please Insert valid Website URL..!!");
          return false
        }
      }
      d = "links=linksurl&facebook=" + $("#facebook").val() + "&twitter=" + $("#twitter").val() + "&linkedin=" + $("#linkedin").val() + "&website=" + $("#website").val()
    }
    $.ajax({
      type: "post",
      url: base_url + "DefaultController/UserProfileSetting/",
      data: d,
      beforeSend: function() {
        $(this).html("please wait..")
      },
      success: function(h) {
        var i = JSON.parse(h);
        if (i.result == "true") {
          if (e == "username") {
            $("#elem-name").text($("#user_name").val())
          }
          if (e == "userphone") {
            $("#elem-phone").text($("#user_phone").val())
          }
          if (e == "changepassword") {
            $(".user-pass").val("")
          }
          if (e == "userabout") {
            $("#elem-description").text($("#user_about").val())
          }
          if (e == "usertags") {
            $("#elem-tags").text($("#user_tags").val())
          }
          if (e == "userlink") {
            if ($("#facebook").val() == "" && $("#twitter").val() == "" && $("#linkedin").val() == "" && $("#website").val() == "") {
              $("#elem-links").css("display", "none");
              $("#linkmsg").css("display", "block")
            } else {
              $("#linkmsg").css("display", "none")
            }
            if ($("#facebook").val() == "") {
              $(".userfacebook").css("display", "none")
            } else {
              $(".userfacebook").css("display", "flex")
            }
            if ($("#twitter").val() == "") {
              $(".usertwitter").css("display", "none")
            } else {
              $(".usertwitter").css("display", "flex")
            }
            if ($("#linkedin").val() == "") {
              $(".userlinkedin").css("display", "none")
            } else {
              $(".userlinkedin").css("display", "flex")
            }
            if ($("#website").val() == "") {
              $(".userwebsite").css("display", "none")
            } else {
              $(".userwebsite").css("display", "flex")
            }
            $(".user-facebook").text($("#facebook").val());
            $(".user-facebook").parent("a").attr("href", $("#facebook").val());
            $(".user-twitter").text($("#twitter").val());
            $(".user-twitter").parent("a").attr("href", $("#twitter").val());
            $(".user-linkedin").text($("#linkedin").val());
            $(".user-linkedin").parent("a").attr("href", $("#linkedin").val());
            $(".user-website").text($("#website").val());
            $(".user-website").parent("a").attr("href", $("#website").val())
          }
          displayErrorMsg(i.message, "success");
          $(this).html("Change");
          $(".btnhide").click()
        } else {
          $(this).html("Change");
          if (e == "userlink") {
            $(".btnhide").click();
            displayErrorMsg("Link Not Change..!!", "success");
            return false
          }
          displayErrorMsg(i.message)
        }
      },
      error: function(h) {
        console.log(h);
        displayErrorMsg("There is an error with AJAX!")
      }
    })
  })
});
$(".checkbox__tick").click(function() {
  var a = $(this).attr("data-name").slice(1);
  $(this).parent().toggleClass("active");
  if ($(this).parent().hasClass("active")) {
    $($(this).attr("data-name")).attr("checked", true);
    notificationdata = "notify=" + a + "&" + a + "=true"
  } else {
    $($(this).attr("data-name")).attr("checked", false);
    notificationdata = "notify=" + a + "&" + a + "="
  }
  $.ajax({
    type: "post",
    url: base_url + "DefaultController/NotificationSetting/",
    data: notificationdata,
    success: function(b) {
      var c = JSON.parse(b);
      if (c.result == "true") {
        displayErrorMsg(c.message, "success")
      } else {
        displayErrorMsg(c.message)
      }
    }
  })
});
$(function() {
  $("#imageUploadProfile").change(function(c) {
    var d = $(this).val();
    var b = d.split(".");
    b = b[b.length - 1].toLowerCase();
    if (b != "jpg" && b != "jpeg" && b != "png" && b != "JPG" && b != "JPEG" && b != "PNG") {
      displayErrorMsg("please select only jpg, jpeg, png files.");
      $("#imageUploadProfile").val("");
      return false
    } else {
      if (this.files && this.files[0]) {
        var a = new FileReader();
        a.onload = function(f) {
          $("#userPreviewImage").css("background-image", "url(" + f.target.result + ")")
        };
        a.readAsDataURL(this.files[0])
      }
      if (d != "") {
        $("#uploadUserProfile").css("display", "block")
      } else {
        $("#uploadUserProfile").css("display", "none")
      }
    }
  });
  $("#upload_profileimage_form").submit(function(a) {
    a.preventDefault();
    if ($("#imageUploadProfile").val() != "") {
      $.ajax({
        type: "post",
        url: base_url + "changeProfilePhoto",
        data: new FormData(this),
        cache: false,
        contentType: false,
        processData: false,
        beforeSend: function() {
          $("#uploadUserProfile").html("please wait..").attr("disabled", "disabled");
          $("#imageUploadProfile").attr("disabled", "disabled");
          $(".loader-img").addClass("loader_image")
        },
        success: function(b) {
          $("#uploadUserProfile").html("Confirm").removeAttr("disabled");
          $("#imageUploadProfile").removeAttr("disabled");
          $(".loader-img").removeClass("loader_image");
          $("#uploadUserProfile").css("display", "none");
          var c = JSON.parse(b);
          if (c.success == "success") {
            window.location.reload()
          } else {
            displayErrorMsg("Oops something went wrong please try again to upload image.")
          }
        }
      })
    } else {
      return false
    }
  });
  $("#btndeactive").click(function() {
    $.ajax({
      type: "post",
      url: base_url + "deactive",
      data: {
        type: "deactive"
      },
      beforeSend: function() {
        $("#btndeactive").html("Please Wait..!!")
      },
      success: function(a) {
        $("#btndeactive").html("Ok");
        var b = JSON.parse(a);
        if (b.success == "success") {
          window.location.href = base_url + "login"
        }
      }
    })
  })
});
/*$("#updateEmailBtn").click(function() {
  if ($("#user_email").val() == "") {
    displayErrorMsg("Please Insert Email...!!")
  } else {
    var a = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (a.test($("#user_email").val()) == false) {
      displayErrorMsg("Please Valid Email Address...!!")
    } else {
      $.ajax({
        type: "post",
        url: base_url + "changeEmail",
        data: "email=" + $("#user_email").val(),
        beforeSend: function() {
          $("#updateEmailBtn").html("please wait..")
        },
        success: function(b) {
          $("#updateEmailBtn").html("Change");
          var c = JSON.parse(b);
          if (c.success == "exist") {
            displayErrorMsg("This Email Address Already Exist...!!")
          } else {
            if (c.success == "success") {
              $("#elem-email").text($("#user_email").val());
              $(".btnhide").click();
              displayErrorMsg("You Have Successfully Changed Your Email Address...", "success")
            } else {
              displayErrorMsg("Oops..Something Went Wrong Please Try Again...!!")
            }
          }
        }
      })
    }
  }
});
*/
function displayErrorMsg(msg, type = 'error') {
  $('#message-div').removeClass();
  $('#message-div').addClass('toast toast-' + type);
  $('#message-div').css('display', 'block');
  $('#profile-message').text(msg);
  $('#message-div').delay(3000).fadeOut('slow');
}

/*Sticky Header*/
$(window).scroll(function() {    
  var scroll = $(window).scrollTop();
  if (scroll >= 50) {
    $(".header").addClass("sticky");
  } else {
    $(".header").removeClass("sticky");
  }
});
/*Sticky Header*/


/* Add Field */
$(document).ready(()=>{
let randId =1;
    $('.add').click(function(){
        let str = `<div class="form-group add-form-field">
              <label>Key Point</label>
              <input type="text" name="" class="form-control part-field adp-input" placeholder="Enter Key title">
              <input type="text" name="" class="form-control part-field adp-input" placeholder="Enter Key velue">
              <div class="add-btn-group">
                <a href="javascript:;" class="add_btn remove"><i class="fas fa-minus"></i> Remove</a>
              </div>
            </div>
    </div>`;
    $('.form-keypoint').append(str);
    let currentVal = $(this).parent().siblings().val();
    console.log($(this).parent().siblings().val());
    $('#adpElem'+randId).val(currentVal).focus();
    $(this).parent().siblings().val('');
    $('.remove').click(function(){
        console.log($(this));
        $(this).parents().eq(1).remove();
    });
    randId++;
    })
})