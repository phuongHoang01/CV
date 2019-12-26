var template = ChooseTemplate(1);
//  Hoc Vấn
let hocVan = data.DanhSachHocVan;
for (let i = 0; i < hocVan.length; i++) {
    $("#_HocVan_").append(template.hocVan(hocVan[i].ThoiGian, hocVan[i].TenTruong, hocVan[i].MoTaHocVan, hocVan[i].ChuyenNganh, hocVan[i].GPA));
}



// Kinh Nghiem
let kinhghiems = data.DanhSachKinhNghiem;
for (let i = 0; i < kinhghiems.length; i++) {
    $("#_KinhNghiem_").append(template.kinhNghiem(kinhghiems[i].TenCongTy, kinhghiems[i].ChucVu, kinhghiems[i].MoTa, kinhghiems[i].ThoiGian));
}

// Kĩ năng


// Dự án
let duAn = data.DanhSachDuAn;
for (let i = 0; i < duAn.length; i++) {
    $("#_ChiTietDuAn_").append(template.chiTietDuAn(duAn[i].TieuDe, duAn[i].ViTri, duAn[i].MoTa, duAn[i].ThoiGian));

}

// Kỹ năng mền
let kyNangMem = data.KyNangMem;
for (let i = 0; i < kyNangMem.length; i++) {
    $("#_KyNangMem_").append(template.kyNangMem(kyNangMem[i]));

}

// Thong tin

$("._HoTen_").html(` ${data.ThongTinCaNhan.HoTen}`);
$("._Email_").html(` ${data.ThongTinCaNhan.Email}`);
$("._SoDT_").html(` ${data.ThongTinCaNhan.SoDT}`);

// Ki Nang
let kiNang = data.KyNang;
let sumArr = [];
let arrNgonNgu = [];
let arrNgonNguOK = [];
let map = new Map();
for (let [key, value] of Object.entries(kiNang)) {
    if (key !== "NgoaiNgu") {
        sumArr = [...sumArr, ...value]
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
        let res = { ...arrNgonNgu[i] };
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


function ChooseTemplate(template) {
    const section = {};
    switch (template) {
        case 1:
            return {
                hocVan: (ThoiGian, TenTruong, MoTaHocVan, ChuyenNganh, GPA) => `
                <h2>${TenTruong}</h2>
            <h3  style="margin-bottom: 20px;">${ChuyenNganh}<strong> — ${GPA} GPA</strong> </h3>
		`,

                kinhNghiem: (TenCongTy, ChucVu, MoTa, ThoiGian) => `
                <div class="job">
                <h2>${TenCongTy}</h2>
                <h3>${ChucVu}</h3>
                <h4>${ThoiGian}</h4>
                <p>${MoTa}</p>
            </div>
        `,
                kiNang: (TenKiNang, MoTa) => `
                <div class="talent">
                <h2>${TenKiNang}</h2>
                <p>${MoTa}</p>
                </div>

            `,

                chiTietDuAn: (TieuDe, ViTri, MoTa, ThoiGian) =>
                    `<div class="job">
                    <h2>${TieuDe}</h2>
                    <h3>${ViTri}</h3>
                    <h4>${ThoiGian}</h4>
                    <p>${MoTa}</p>
                </div>`,

                kyNangMem: (MoTa) =>
                    `<p class="enlarge">
                    ${MoTa}
            </p><br/>`,

            ngonNgu(ten, sumText) {
                return `
                <div class="talent">
                <h2>${ten}</h2>
                <p>${sumText}</p>
                </div>  
                `;
            },




            };
        case 2:
            break;

        default:
            break;
    }
}


function customIframe(customContent) {
    $("._LinkYoutube_").fancybox({
        afterShow: function () {
            console.log("hello there")
            $('.fancybox-content').append(customContent);
        }
    });
}