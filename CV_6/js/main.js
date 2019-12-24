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


}



// Kinh Nghiem
function renderKinhNghiem() {
  let DanhSachKinhNghiem = data.DanhSachKinhNghiem
  for (let i = 0; i < DanhSachKinhNghiem.length; i++) {
    $("#_KinhNghiem_").append(kinhnghiem(DanhSachKinhNghiem[i].TenCongTy, DanhSachKinhNghiem[i].ChucVu, DanhSachKinhNghiem[i].MoTa, DanhSachKinhNghiem[i].ThoiGian, i));
  }
}


function kinhnghiem(TenCongTy, ChucVu, MoTa, ThoiGian, index) {
  console.log(ThoiGian)
  let beginTime = ThoiGian.slice()
  if (index % 2 == 0) {
    console.log("true")
    return ` 
        <li class="ikk">
                    <div class="resume-img wow fadeInUp delay-04s animated">
                        <h4 id="_ThoiGian_">${ThoiGian}</h4>
                    </div>
                    <div class="resume-panel wow fadeInUp delay-05s animated">
                        <div class="resume-heading">
                            <h4 id="_TenCongTy_">${TenCongTy}</h4>
                            <h4 id="_ChucVu_" class="subheading">${ChucVu}</h4>
                        </div>
                        <div class="resume-body">
                            <p id="_MoTa_">${MoTa}</p>
                        </div>
                    </div>
                </li> `
  }
  else {
    console.log("fail")
    return `
        <li class="resume-inverted">
                    <div class="resume-img wow fadeInUp delay-04s animated">
                        <h4 id="_ThoiGian_">${ThoiGian}</h4>
                    </div>
                    <div class="resume-panel wow fadeInUp delay-05s animated">
                        <div class="resume-heading">
                            <h4 id="_TenCongTy_">${TenCongTy}</h4>
                            <h4 id="_ChucVu_" class="subheading">${ChucVu}</h4>
                        </div>
                        <div class="resume-body">
                            <p id="_MoTa_">${MoTa}</p>
                        </div>
                    </div>
                </li>
        `
  }
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
  <div class="col-md-6 title_skill">
  <div class="skill">
    <ul>
    <li class="skill_col1">${TenKiNang}
    <div class="progress fix-progress">
       <div class="progress-bar wow fix-bar" role="progressbar" aria-valuenow=${TrinhDoKiNang} aria-valuemin="0" aria-valuemax="100" style="width:${TrinhDoKiNang}%">
         <span class="pct">${TrinhDoKiNang}</span>
       </div>
   </div>
 </li>
    </ul>
  </div>
</div>`
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
  return customIframe(i,customContent);
}

function customIframe(i,customContent) {
  $(document).ready(function () {
    $($("._LinkYoutube_")[i]).fancybox({
      afterShow: function () {
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

function runCV03() {
  renderDuAn();
  renderKinhNghiem();
  renderThongTinCaNhan();
  renderKiNang();
  renderMangXaHoi();
}





function ChooseTemplate(template) {
  switch (template) {
    case 1:
      return runCV03();
    case 2:
      break;

    default:
      break;
  }
}



