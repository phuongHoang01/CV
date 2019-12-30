
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
let kiNang = data.KyNang
// for (let i = 0; i < kyNangMem.length; i++) {
//     $("#_KyNangMem_").append(template.kyNangMem(kyNangMem[i]));
// }
// Kĩ năng
let sumPro = ""
for(let i = 0; i < data.KyNang.ThanhThao.length; i++){
    i === 0 ? sumPro += data.KyNang.ThanhThao[i].Ten : sumPro = sumPro + ", " + data.KyNang.ThanhThao[i].Ten
}
$("#_KiNang_ .Proficient").append(`<span>${sumPro}</span>`);
// Hieu Biet
let sumFa = ""
for(let i = 0; i < data.KyNang.HieuBiet.length; i++){
    i === 0 ? sumFa += data.KyNang.HieuBiet[i].Ten : sumFa = sumFa + ", " + data.KyNang.HieuBiet[i].Ten
}
$("#_KiNang_ .Familiar").append(`<span>${sumFa}</span>`);
// Ngoai Ngu
let arrNgonNgu = [];
let arrNgonNguOK = [];
let map = new Map();
for (let [key, value] of Object.entries(kiNang)) {
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
let j = 0;
for (let val of arrNgonNguOK) {
    let sumText = ""
    let i = 0
    for (let val2 of val.TrinhDo) {
        sumText = i === 0 ? sumText + `<span class='bangcap'>${val2}</span>` : sumText + ', ' + `<span class='bangcap'>${val2}</span>`
        i++
    }
    sumNgoaiNgu += `
        <div style="margin-left:20px">
            <p>${val.Ten}:</p>${sumText}
        </div>
        `
}
$("#_KiNang_ .Languages").append(`<span>${sumNgoaiNgu}</span>`);

for(let val of data.KyNangMem){
    $("#_KyNangMem_").append(template.kyNangMem(val));
}

// Thong tin

$("._HoTen_").html(` ${data.ThongTinCaNhan.HoTen}`);
$("._Email_").html(` ${data.ThongTinCaNhan.Email}`);
$("._SoDT_").html(` ${data.ThongTinCaNhan.SoDT}`);


function ChooseTemplate(template) {
    const section = {};
    switch (template) {
        case 1:
            return {
                hocVan: (ThoiGian, TenTruong, MoTaHocVan, ChuyenNganh, GPA) => `
                <h2>${TenTruong}</h2>
                <h3 style="margin-bottom: 20px;">
                    ${ChuyenNganh}
                    <strong> — ${GPA} GPA</strong> 

                </h3>
		`,

                kinhNghiem: (TenCongTy, ChucVu, MoTa, ThoiGian) => `
                <div class="job">
                <h2>${TenCongTy}</h2>
                <h3>${ChucVu}</h3>
                <h4>${ThoiGian.split("-")[0] + ' - ' + ThoiGian.split("-")[1]}</h4>
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
                    <p>${MoTa}</p>
                </div>`,

                kyNangMem: (MoTa) =>
                    `<li>
                        <h3>${MoTa}</h3>
                    </li>
                    `,

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