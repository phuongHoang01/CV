var template = ChooseTemplate(1);


//  Hoc Vấn
function renderHocVan() {
  let DanhSachHocVan = data.DanhSachHocVan
  for (var i = 0; i < DanhSachHocVan.length; i++) {
    $("#_HocVan_").append(hocVan(DanhSachHocVan[i].ThoiGian, DanhSachHocVan[i].TenTruong, DanhSachHocVan[i].MoTaHocVan, DanhSachHocVan[i].ChuyenNganh, i));
  }
}

// Học vấn này thay cho
function hocVan(ThoiGian, TenTruong, MoTaHocVan, ChuyenNganh, index) {
    return `<div class="post_header resume_post_header">
    <i class="fa fa-check-circle" aria-hidden="true"></i>
    <span id="_TenTruong_" class="post_subtitle">${TenTruong}</span>
    <div class="resume_period">

        <span id="_ThoiGian_" class="day period_from">${ThoiGian} </span>


    </div>
</div>
<div class="post_body resume_post_body" id="resume_textarea">
    <p id="_MoTaHocVan_">${MoTaHocVan}</p>
</div>`

}



// Kinh Nghiem
function renderKinhNghiem() {
  let DanhSachKinhNghiem = data.DanhSachKinhNghiem
  for (let i = 0; i < DanhSachKinhNghiem.length; i++) {
    $("#_KinhNghiem_").append(kinhnghiem(DanhSachKinhNghiem[i].TenCongTy, DanhSachKinhNghiem[i].ChucVu, DanhSachKinhNghiem[i].MoTa, DanhSachKinhNghiem[i].ThoiGian, i));
  }
}


function kinhnghiem(TenCongTy, ChucVu, MoTa, ThoiGian, index) {
  return `<div class="post_header resume_post_header">
  <i class="fa fa-check-circle" aria-hidden="true"></i>
  <span id="_TenCongTy_" class="post_subtitle">${TenCongTy}</span>
  <div class="resume_period">

      <span id="_ThoiGian_" class="day period_from">${ThoiGian}</span>

  </div>

</div>
<div class="post_body resume_post_body">
  <p id="_MoTa_">${MoTa}</p>
</div>`
}

// Kĩ năng
function renderKiNang() {
  console.log("ki nang")
  let DanhSachKiNang = data.KyNang
  for (let [key, value] of Object.entries(DanhSachKiNang)) {
    var data01 = JSON.parse(value)
    for (let i = 0; i < data01.length; i++) {
      console.log(key)
      if (key == "NgoaiNgu") {
        $("#_NgonNgu_").append(ngonNgu(data01[i].Ten, data01[i].TrinhDo));
      } else {
        $("#_KiNang_").append(kiNang(data01[i].Ten, data01[i].TrinhDo));
      }
    }
  }
}


function kiNang(TenKiNang, TrinhDoKiNang) {
  return `
  <h5 id="_TenCongNghe_">${TenKiNang}</h5>
  <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-
      valuenow="75" aria-valuemin="0" aria-valuemax="100"
      style="width: ${TrinhDoKiNang}%; border-radius: 20px;"><span id="_TrinhDo_">${TrinhDoKiNang}</span></div><br>`
}

function ngonNgu(TenNgonNgu, TrinhDoNgoaiNgu) {
  return `<div class="col-md-6">
  <h2 class="wow fadeInUp delay-02s animated">${TenNgonNgu}</h2>
  <p>${TrinhDoNgoaiNgu}</span></p>
  <p>${TrinhDoNgoaiNgu}</p>
</div>`;
}

function chiTietNgonNgu() {

}


// Dự án
function renderDuAn() {
  let DanhSachDuAn = data.DanhSachDuAn
  for (let i = 0; i < DanhSachDuAn.length; i++) {
    $("#_DuAn_").append(duAn(DanhSachDuAn[i].LinkYoutube, DanhSachDuAn[i].LinkHinhAnh));
    chiTietDuAn(i, DanhSachDuAn[i].TieuDe, DanhSachDuAn[i].ViTri, DanhSachDuAn[i].MoTa, DanhSachDuAn[i].KyNang);
  }
}

function duAn(LinkYoutube, LinkHinhAnh) {
  let embedYoutubeLink = LinkYoutube.replace("https://www.youtube.com/watch?v=", "https://www.youtube.com/embed/")
  return `<div class="col-md-3 _thumbnail_">
          <a class="_LinkYoutube_" data-fancybox data-type="iframe"
              data-src=${embedYoutubeLink} href="javascript:;">
              <img id="_LinkHinhAnh_" class="img-rounded"
                  src=${LinkHinhAnh}
                  alt="project6" style="width:100%">
          </a>
      </div>`
}

function chiTietDuAn(i, TieuDe, ViTri, MoTa, KyNang) {
 
  divKyNang = ""
  for (let val of KyNang.split(",")) {
    if (val !== "") {
      divKyNang += `
		<div class="col-md-6">
			<li>${val}</li>
				</div>
		`
    }
  }
  customContent =
    `<div class='customHTML' style="width: 100%; padding: 30px">
								<div style="margin-left: 10px;margin-right: 10px;">
									<p style="text-align: center; font-size: 20px;
									font-weight: 600;">${TieuDe}</p>
									<span style="display:block; text-align:center">${ViTri}</span>
									<hr style="border-top: 1px solid black;marigin-top:0;opacity=0.4"/>
									<div class="row">
										<p class="col-md-12" style="font-weight:600;margin-top:30px">SKills</p>
										<ul>
											${divKyNang}
										</ul>

										<p class="col-md-12" style="font-weight:600;margin-top:30px">Description</p>
										<div class="col-md-12">
											${MoTa}
										</div>

									</div>

								</div>
							</div>
							`
  return customIframe(i, customContent);
}

function customIframe(i, customContent) {
    $(document).ready(function () {
			console.log("hello there")
      $($("._LinkYoutube_")[i]).fancybox({
        afterShow: function () {
            console.log("run here")
            $('.fancybox-content').append(customContent);
        }
    });
		});
}

function renderMangXaHoi() {
  let mangXaHoiDanhSach = JSON.parse(data.ThongTinCaNhan.Urls)
  for (let i = 0; i < mangXaHoiDanhSach.length; i++) {
    switch (mangXaHoiDanhSach[i].type) {
      case "FaceBook":
        $("#_MangXaHoi_").append(mangXaHoi(mangXaHoiDanhSach[i].url, "facebook-official"));
        break;

      case "LinkedIn":
        $("#_MangXaHoi_").append(mangXaHoi(mangXaHoiDanhSach[i].url, "linkedin"));
        break;

      case "GitHub":
        $("#_MangXaHoi_").append(mangXaHoi(mangXaHoiDanhSach[i].url, "github"));
        break;
      default:
        break;
    }
  }
}

function mangXaHoi(url, icon) {
  return ` <a  href=${url}><i class="fa fa-${icon}"></i></a>`
}



// Thông tin cá nhân
function renderThongTinCaNhan() {
  let thongtinCaNhan = data.ThongTinCaNhan
  $("._HoTen_").html(thongtinCaNhan.HoTen)
  $("._Email_").html(thongtinCaNhan.Email)
  $("._SoDT_").html(thongtinCaNhan.SoDT)
  $("img-thumbnail").attr("src", thongtinCaNhan.Avatar ? thongtinCaNhan.Avatar : "../src/assets/user-default.png");
}

function runCV04() {
  renderDuAn();
  renderKinhNghiem();
  renderThongTinCaNhan();
  renderKiNang();
  renderHocVan();
}





function ChooseTemplate(template) {
  switch (template) {
    case 1:
      return runCV04();
    case 2:
      break;

    default:
      break;
  }
}



