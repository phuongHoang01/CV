let thongTinCaNhan = JSON.parse(data.ThongTinCaNhan.Urls);
let hocVan = data.DanhSachHocVan;
let kinhghiems = data.DanhSachKinhNghiem;
let kiNang = data.KyNang;
let duAn = data.DanhSachDuAn;

console.log(data);

function RunCV() {
    renderThongTinCaNhan();
    renderMangXaHoi();
    renderKinhNghiem();
    renderHocVan();
    renderKiNang();
    renderDuAn();
}

function renderThongTinCaNhan() {
    $("._HoTen_").html(` ${data.ThongTinCaNhan.HoTen}`);
    $("._Email_").html(` ${data.ThongTinCaNhan.Email}`);
    $("._SoDT_").html(` ${data.ThongTinCaNhan.SoDT}`);
}

function renderMangXaHoi() {
    let sum = ""
    for (let val of thongTinCaNhan) {
        if (val.type === "LinkedIn") {
            sum += `<a class="_Linkedin_" href="${val.url}"><i class="fa fa-linkedin-square"></i></a>`
        }
        if (val.type === "FaceBook") {
            sum += `<a class="_Facebook_" href="${val.url}"><i class="fa fa-facebook-square"></i></a>`
        }
        if (val.type === "GitHub") {
            sum += `<a class="_Github_" href="${val.url}"><i class="fa fa-github-square"></i></a>`
        }
    }
    $("._Social_").append(sum);
}


//  Hoc Vấn
function renderHocVan() {
    for (let i = 0; i < hocVan.length; i++) {
        let thoigian = hocVan[i].ThoiGian.split("-")[0] + " - " + hocVan[i].ThoiGian.split("-")[1]
        $("._HocVan_").append(template.hocVan(thoigian, hocVan[i].TenTruong, hocVan[i].MoTa, hocVan[i].BangCap, hocVan[i].GPA, hocVan[i].ChuyenNganh, i));
    }
}



// Kinh Nghiem
function renderKinhNghiem() {
    for (let i = 0; i < kinhghiems.length; i++) {
        let thoigian = kinhghiems[i].ThoiGian.split("-")[0] + " - " + kinhghiems[i].ThoiGian.split("-")[1]
        $("._KinhNghiem_").append(template.kinhNghiem(kinhghiems[i].TenCongTy, thoigian, kinhghiems[i].ChucVu, kinhghiems[i].MoTa,i));
    }
}


// Kĩ năng
function renderKiNang() {
    let sumArr = [];
    let arrNgonNgu = [];
    let arrNgonNguOK = [];
    let map = new Map();
    for (let [key, value] of Object.entries(kiNang)) {
        if (key !== "NgoaiNgu") {
            sumArr = [...sumArr,...value]
        }
        if (key === "NgoaiNgu") {
            arrNgonNgu = [...value];
        }
    }
    for (let i = 0; i < arrNgonNgu.length; i++) {
        if (map.get(arrNgonNgu[i].Ten)) {
            let res = map.get(arrNgonNgu[i].Ten)
            for (let val of arrNgonNguOK) {
                if (val.Ten == arrNgonNgu[i].Ten) {
                    val.TrinhDo.push(arrNgonNgu[i].TrinhDo)
                }
            }
        } else {
            map.set(arrNgonNgu[i].Ten, arrNgonNgu[i]);
            let res = {...arrNgonNgu[i] };
            let save = res.TrinhDo
            res.TrinhDo = [];
            res.TrinhDo.push(save);
            arrNgonNguOK.push(res);
        }
    }
    let sumNgoaiNgu = "";
    let i = 0
    for (let val of arrNgonNguOK) {
        let sumText = ""
        for (let val2 of val.TrinhDo) {
            sumText += `<li><p id="_TenKiNang_">${val2}</p></li>`
        }
        sumNgoaiNgu += template.ngonNgu(val.Ten, sumText)
    }


    for (let val of sumArr) {
        $("._KiNang_").append(template.kiNang(val.Ten, val.TrinhDo, i + 1 === sumArr.length ? true : false));
        i++
    }
    $("._KiNang_").append(sumNgoaiNgu)

    // Ky nang mem
    $("._KiNang_").append(template.kyNangMemAppend());
    for(let val of data.KyNangMem){
        $("._KiNang_ .SoftSkill").append(template.kyNangMemRender(val));

    }
}



// Dự án
function renderDuAn() {
    for (let i = 0; i < duAn.length; i++) {
        $("._DuAn_").append(template.duAn(duAn[i].LinkYoutube, duAn[i].LinkHinhAnh));
        template.chiTietDuAn(i, duAn[i].TieuDe, duAn[i].ViTri, duAn[i].MoTa, duAn[i].KyNang);
    }
}


function customIframe(i, customContent) {
    $($("._LinkYoutube_")[i]).fancybox({
        afterShow: function() {
            $(".fancybox-content").css({ "width": "100%", "display": "flex", "overflow-y": "scroll", "height": "100vh" })
            $(".fancybox-content iframe").css({ "width": "100%", "display": "flex" })
            $('.fancybox-content').append(customContent);
        }
    });
}