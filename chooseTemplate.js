function ChooseTemplate(template) {
    switch (template) {
        case 2:
            return {
                kyNangMemAppend() {
                    return `
                        <div class="col-md-9 col-md-offset-3" style="margin-top:30px">
                            <h3 class="animated zoomInUp" style="margin-top:0px">Soft Skills</h3>
                            <p class="animated slideInRight SoftSkill">
                               
                            </p>
                        </div>
                    `
                },
                kyNangMemRender(value) {
                    return `
                        <ul style="list-style-type:none; padding:0">
                            ${value}
                        </ul>
                    `
                },
                hocVan(thoigian, TenTruong, MoTaHocVan, Degree, GPA, Specialized) {
                    return `
							<div class="row" style="margin-bottom:20px">
								<div class="col-md-9 col-md-offset-3">
									<p id="ThoiGian" class="titEdu wow slideInRight"><i class="fa fa-university"></i> ${TenTruong} &nbsp; &nbsp;  ${thoigian}</p>
									<p id="MoTaHocVan" class="wow slideInRight" data-wow-offset="10">${MoTaHocVan}</p>
								</div>
								<div class="col-md-9 col-md-offset-3">
									<h3 class="animated zoomInUp" style="margin-top:0px">Specialized</h3>
									<p class="animated slideInRight Specialized" style="font-weight:600">${Specialized}</p>
								</div>
								<div class="col-md-9 col-md-offset-3">
									<h3 class="animated zoomInUp" style="margin-top:0px">Degree</h3>
									<p class="animated slideInRight Degree" style="font-weight:600">${Degree}</p>
								</div>
								<div class="col-md-9 col-md-offset-3">
									<h3 class="animated zoomInUp" style="margin-top:0px">GPA</h3>
									<p class="animated slideInRight GPA" style="font-weight:600">${GPA}</p>
								</div>
							</div>
                        `;
                },
                kinhNghiem(TenCongTy, ThoiGian, ChucVu, MoTa) {
                    return `
						<div class="col-md-9 col-md-offset-3">
								<h3 id="_TenCongTy_" class="wow zoomInUp" data-wow-offset="10">${TenCongTy} &nbsp; &nbsp;  ${ThoiGian}</h3>
								<p id="_ChucVu_" class="titWork wow slideInRight"><i class="fa fa-briefcase"></i> ${ChucVu}</p>
								<p id="_MoTa_" class="wow slideInRight" data-wow-offset="10">${MoTa}</p>
						</div>
						
                    `;
                },
                kiNang(TenKiNang, TrinhDoKiNang) {
                    return `
						<div class="col-md-9 col-md-offset-3">
               				<div class="row rowSkl">
                    			<div class="col-md-4">
                        			<p id="_TenKiNang_">${TenKiNang}</p>
                    			</div>
								<div class="col-md-8">
									<div class="progress wow bounceInRight" data-wow-offset="10">
										<div class="progress-bar progress-bar-info progress-bar-striped active"
											role="progressbar" style="width:${TrinhDoKiNang}%"><span id="_TrinhDoKiNang_">${TrinhDoKiNang}%</span>
										</div>
									</div>
								</div>
                			</div>
						</div>
                    `;
                },
                ngonNgu(ten, sumText) {
                    return `
                <div class="col-md-9 col-md-offset-3" style="margin-top:30px">
				<h3 class="animated zoomInUp" style="margin-top:0px">${ten}</h3>
				<p class="animated slideInRight Specialized" style="font-weight:600">
					<ul style="list-style-type:none; padding:0">
						${sumText}
					</ul>
				</p>
			    </div>
                `;
                },
                duAn(LinkYoutube, LinkHinhAnh) {
                    let embedYoutubeLink = LinkYoutube.replace("https://www.youtube.com/watch?v=", "https://www.youtube.com/embed/")
                    return `
							<div class="col-md-3 _thumbnail_">
                				<a class="_LinkYoutube_" data-fancybox data-type="iframe"
                    			data-src=${embedYoutubeLink} href="javascript:;">
                    			<img id="_LinkHinhAnh_" class="img-rounded"
                        		src=${LinkHinhAnh}
                        		alt="project6" style="width:100%">
                				</a>
							</div>
                        `;
                },
                chiTietDuAn(i, TieuDe, ViTri, MoTa, KyNang) {
                    divKyNang = "";
                    for (let val of KyNang.split(",")) {
                        if (val !== "") {
                            divKyNang += `
										<div class="col-md-6">
											<li>${val}</li>
										</div>
									`;
                        }
                    }
                    customContent = `
							<div class='customHTML' style="width: 100%; padding: 30px">
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
							`;
                    return customIframe(i, customContent);
                }
            };

        case 1:
            return {
                kyNangMemAppend() {
                    return `
                        <div class="col-md-6" style="margin-top:30px">
                            <h3 class="animated zoomInUp" style="margin-top:0px">Soft Skills</h3>
                            <p class="animated slideInRight SoftSkill">
                               
                            </p>
                        </div>
                    `
                },
                kyNangMemRender(value) {
                    return `
                        <ul style="list-style-type:none; padding:0">
                            ${value}
                        </ul>
                    `
                },
                hocVan(ThoiGian, TenTruong, MoTaHocVan, ChuyenNganh, index) {
                    if (index % 2 === 0) {
                        return `
                        <div style="float:left">
                            <li class="timeline-inver">
                                <div class="timeline-badge1">
                                    <a><i class="fa fa-circle"></i></a>
                                </div>
                                
                                <div class="timeline-panel">
                                    <div class="timeline-heading">
                                        <h3 id="_ChuyenNganh_">${ChuyenNganh}</h3>
                                    </div>
                                    <div class="timeline-body">
                                        <span id="_TenTruong_"><i class="fa fa-building-o fix-building"></i>${TenTruong}</span>
                                        <p id="_MoTaHocVan_">${MoTaHocVan}</p>
                                    </div>
                                </div>
                            </li>
        
                            <li class="timeline-normal">
                                <div class="timeline-badge1">
                                    <a><i class="fa fa-circle inver"></i></a>
                                </div>
                                <div class="timeline-panel">
                                    <div class="timeline-heading">
                                        <h3 id="_ThoiGian_">${ThoiGian}</h3>
                                    </div>
                                </div>
                            </li>
                        </div>
                      `;
                    }
                    return `
                        <div style="float:left">
                        <li class="timeline-inver">
                            <div class="timeline-badge1">
                                <a><i class="fa fa-circle"></i></a>
                            </div>
                            <div class="timeline-panel">
                                <div class="timeline-heading">
                                    <h3 id="_ThoiGian_">${ThoiGian}</h3>
                                </div>
                            </div>
                        </li>
    
                        <li class="timeline-normal">
                            <div class="timeline-badge1">
                                <a><i class="fa fa-circle inver"></i></a>
                            </div>
                            <div class="timeline-panel">
                                <div class="timeline-heading">
                                    <h3 id="_ChuyenNganh_">${ChuyenNganh}</h3>
                                </div>
                                <div class="timeline-body">
                                    <span id="_TenTruong_"><i class="fa fa-building-o fix-building"></i>${TenTruong}</span>
                                    <p id="_MoTaHocVan_">${MoTaHocVan}</p>
                                </div>
                            </div>
                        </li>
                        </div>
                        
                      `;
                },
                kinhNghiem(TenCongTy, ChucVu, MoTa, ThoiGian, index) {
                    if (index % 2 === 0) {
                        return `
                        <div style="float:left">

                            <li class="timeline-inver">
                                <div class="timeline-badge">
                                    <a><i class="fa fa-circle"></i></a>
                                </div>
                                
                                <div class="timeline-panel">
                                    <div class="timeline-heading">
                                        <h3 id="_ChuyenNganh_">${ChucVu}</h3>
                                    </div>
                                    <div class="timeline-body">
                                        <span id="_TenTruong_"><i class="fa fa-building-o fix-building"></i>${TenCongTy}</span>
                                        <p id="_MoTaHocVan_">${MoTa}</p>
                                    </div>
                                </div>
                            </li>
        
                            <li class="timeline-normal">
                                <div class="timeline-badge">
                                    <a><i class="fa fa-circle inver"></i></a>
                                </div>
                                <div class="timeline-panel">
                                    <div class="timeline-heading">
                                        <h3 id="_ThoiGian_">${ThoiGian}</h3>
                                    </div>
                                </div>
                            </li>
                        </div>
                      `;
                    }
                    return `
                    <div style="float:left">

                        <li class="timeline-inver">
                            <div class="timeline-badge">
                                <a><i class="fa fa-circle"></i></a>
                            </div>
                            <div class="timeline-panel">
                                <div class="timeline-heading">
                                    <h3 id="_ThoiGian_">${ThoiGian}</h3>
                                </div>
                            </div>
                        </li>
    
                        <li class="timeline-normal">
                            <div class="timeline-badge">
                                <a><i class="fa fa-circle inver"></i></a>
                            </div>
                            <div class="timeline-panel">
                                <div class="timeline-heading">
                                    <h3 id="_ChuyenNganh_">${ChucVu}</h3>
                                </div>
                                <div class="timeline-body">
                                    <span id="_TenTruong_"><i class="fa fa-building-o fix-building"></i>${TenCongTy}</span>
                                    <p id="_MoTaHocVan_">${MoTa}</p>
                                </div>
                            </div>
                        </li>
                        </div>
                      `;

                },
                kiNang(TenKiNang, TrinhDoKiNang, checkLast) {
                    if (!checkLast) {
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
                  </div>`;
                    }
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
                  </div>
                    <div class="col-md-12"></div>
                  `

                        ;
                },
                ngonNgu(ten, sumText) {
                    return `
                            <div class="col-md-6" style="margin-top:30px">
                            <h3 class="animated zoomInUp" style="margin-top:0px">${ten}</h3>
                            <p class="animated slideInRight Specialized" style="font-weight:600">
                                <ul style="list-style-type:none; padding:0">
                                    ${sumText}
                                </ul>
                            </p>
                            </div>
                    `;
                },
                duAn(LinkYoutube, LinkHinhAnh) {
                    let embedYoutubeLink = LinkYoutube.replace(
                        "https://www.youtube.com/watch?v=",
                        "https://www.youtube.com/embed/"
                    );
                    return `<div class="col-md-3 _thumbnail_">
                            <a class="_LinkYoutube_" data-fancybox data-type="iframe"
                                data-src=${embedYoutubeLink} href="javascript:;">
                                <img id="_LinkHinhAnh_" class="img-rounded"
                                    src=${LinkHinhAnh}
                                    alt="project6" style="width:100%">
                            </a>
                        </div>`;
                },
                chiTietDuAn(i, TieuDe, ViTri, MoTa, KyNang) {
                    divKyNang = "";
                    for (let val of KyNang.split(",")) {
                        if (val !== "") {
                            divKyNang += `
                                                          <div class="col-md-6">
                                                              <li>${val}</li>
                                                          </div>
                                                      `;
                        }
                    }
                    customContent = `<div class='customHTML' style="width: 100%; padding: 30px">
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
                                              `;
                    return customIframe(i, customContent);
                }
            };

        case 3:
            return {
                kyNangMemAppend() {
                    return `
                            <div class="col-md-6" style="margin-top:30px">
                                <h3 class="animated zoomInUp" style="margin-top:0px">Soft Skills</h3>
                                <p class="animated slideInRight SoftSkill">
                                   
                                </p>
                            </div>
                        `
                },
                kyNangMemRender(value) {
                    return `
                            <ul style="list-style-type:none; padding:0">
                                ${value}
                            </ul>
                        `
                },
                hocVan(ThoiGian, TenTruong, MoTaHocVan, ChuyenNganh, index) {
                   
                },
                kinhNghiem(TenCongTy, ThoiGian, ChucVu, MoTa, index) {
                    console.log(ThoiGian)
                    if (index % 2 == 0) {
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
                },
                kiNang(TenKiNang, TrinhDoKiNang, checkLast) {
                    if (!checkLast) {
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
                  </div>`;
                    }
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
                  </div>
                    <div class="col-md-12"></div>
                  `

                        ;
                },
                ngonNgu(ten, sumText) {
                    return `
                            <div class="col-md-6" style="margin-top:30px">
                            <h3 class="animated zoomInUp" style="margin-top:0px">${ten}</h3>
                            <p class="animated slideInRight Specialized" style="font-weight:600">
                                <ul style="list-style-type:none; padding:0">
                                    ${sumText}
                                </ul>
                            </p>
                            </div>
                    `;
                },
                duAn(LinkYoutube, LinkHinhAnh) {
                    let embedYoutubeLink = LinkYoutube.replace(
                        "https://www.youtube.com/watch?v=",
                        "https://www.youtube.com/embed/"
                    );
                    return `<div class="col-md-3 _thumbnail_">
                                <a class="_LinkYoutube_" data-fancybox data-type="iframe"
                                    data-src=${embedYoutubeLink} href="javascript:;">
                                    <img id="_LinkHinhAnh_" class="img-rounded"
                                        src=${LinkHinhAnh}
                                        alt="project6" style="width:100%">
                                </a>
                            </div>`;
                },
                chiTietDuAn(i, TieuDe, ViTri, MoTa, KyNang) {
                    divKyNang = "";
                    for (let val of KyNang.split(",")) {
                        if (val !== "") {
                            divKyNang += `
                                                              <div class="col-md-6">
                                                                  <li>${val}</li>
                                                              </div>
                                                          `;
                        }
                    }
                    customContent = `<div class='customHTML' style="width: 100%; padding: 30px">
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
                                                  `;
                    return customIframe(i, customContent);
                }
            };
            case 5:
                return {
                    kyNangMemAppend() {
                        return `
                            <div class="col-md-9 col-md-offset-3" style="margin-top:30px">
                                <h2 class="animated zoomInUp" style="margin-top:0px;width:200px">Soft Skills</h2>
                                <p class="animated slideInRight SoftSkill">
                                   
                                </p>
                            </div>
                        `
                    },
                    kyNangMemRender(value) {
                        return `
                            <ul style="list-style-type:none; padding:0">
                               <li> ${value}</li>
                            </ul>
                        `
                    },
                    hocVan(ThoiGian, TenTruong, MoTaHocVan, Degree, GPA, Specialized) {
                        return `<div class="post_header resume_post_header">
                        <i class="fa fa-check-circle" aria-hidden="true"></i>
                        <span id="_TenTruong_" class="post_subtitle">${TenTruong}</span>
                        <div class="resume_period">
                    
                            <span id="_ThoiGian_" class="day period_from">${ThoiGian} </span>
                    
                    
                        </div>
                    </div>
                    <div class="post_body resume_post_body" id="resume_textarea">
                        <p id="_MoTaHocVan_">${MoTaHocVan}</p>
                    </div>
                        
                        `;
                    },
                    kinhNghiem(TenCongTy, ThoiGian, ChucVu, MoTa) {
                        return `
                        <div class="post_header resume_post_header">
                        <i class="fa fa-check-circle" aria-hidden="true"></i>
                        <span id="_TenCongTy_" class="post_subtitle">${TenCongTy}</span>
                        <div class="resume_period">
                      
                            <span id="_ThoiGian_" class="day period_from">${ThoiGian}</span>
                      
                        </div>
                      
                      </div>
                      <div class="post_body resume_post_body">
                        <p id="_MoTa_">${MoTa}</p>
                      </div>
                        `;
                    },
                    kiNang(TenKiNang, TrinhDoKiNang) {
                        return `
                        <h5 id="_TenCongNghe_">${TenKiNang}</h5>
                        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-
                            valuenow="75" aria-valuemin="0" aria-valuemax="100"
                            style="width: ${TrinhDoKiNang}%; border-radius: 20px;"><span id="_TrinhDo_">${TrinhDoKiNang}</span></div><br>`
                        ;
                    },
                
                    ngonNgu(TenNgonNgu, TrinhDoNgoaiNgu) {
                        return `<div class="col-md-6">
                        <h2 class="wow fadeInUp delay-02s animated">${TenNgonNgu}</h2>
                        <p>${TrinhDoNgoaiNgu}</p>
                      </div>
                    `;
                    },
                    duAn(LinkYoutube, LinkHinhAnh) {
                        return `
                                <div class="col-md-3 _thumbnail_">
                                    <a class="_LinkYoutube_" data-fancybox data-type="iframe"
                                    data-src=${LinkYoutube} href="javascript:;">
                                    <img id="_LinkHinhAnh_" class="img-rounded"
                                    src=${LinkHinhAnh}
                                    alt="project6" style="width:100%">
                                    </a>
                                </div>
                            `;
                    },
                    chiTietDuAn(i, TieuDe, ViTri, MoTa, KyNang) {
                        divKyNang = "";
                        for (let val of KyNang.split(",")) {
                            if (val !== "") {
                                divKyNang += `
                                            <div class="col-md-6">
                                                <li>${val}</li>
                                            </div>
                                        `;
                            }
                        }
                        customContent = `
                                <div class='customHTML' style="width: 100%; padding: 30px">
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
                                `;
                        return customIframe(i, customContent);
                    }
                };

            case 4:
                 return {
                        kyNangMemAppend() {
                            return `
                                <div class="col-md-9 col-md-offset-3" style="margin-top:30px">
                                    <h2 class="animated zoomInUp" style="margin-top:0px;width:200px">Soft Skills</h2>
                                    <p class="animated slideInRight SoftSkill">
                                       
                                    </p>
                                </div>
                            `
                        },
                        kyNangMemRender(value) {
                            return `
                                <ul style="list-style-type:none; padding:0">
                                   <li> ${value}</li>
                                </ul>
                            `
                        },
                        hocVan(ThoiGian, TenTruong, MoTaHocVan, Degree, GPA, Specialized) {
                            return `<div class="post_header resume_post_header">
                            <i class="fa fa-check-circle" aria-hidden="true"></i>
                            <span id="_TenTruong_" class="post_subtitle">${TenTruong}</span>
                            <div class="resume_period">
                        
                                <span id="_ThoiGian_" class="day period_from">${ThoiGian} </span>
                        
                        
                            </div>
                        </div>
                        <div class="post_body resume_post_body" id="resume_textarea">
                            <p id="_MoTaHocVan_">${MoTaHocVan}</p>
                        </div>
                            
                            `;
                        },
                        kinhNghiem(TenCongTy, ThoiGian, ChucVu, MoTa) {
                            return `
                            <div class="post_header resume_post_header">
                            <i class="fa fa-check-circle" aria-hidden="true"></i>
                            <span id="_TenCongTy_" class="post_subtitle">${TenCongTy}</span>
                            <div class="resume_period">
                          
                                <span id="_ThoiGian_" class="day period_from">${ThoiGian}</span>
                          
                            </div>
                          
                          </div>
                          <div class="post_body resume_post_body">
                            <p id="_MoTa_">${MoTa}</p>
                          </div>
                            `;
                        },
                        kiNang(TenKiNang, TrinhDoKiNang) {
                            return `
                            <h5 id="_TenCongNghe_">${TenKiNang}</h5>
                            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-
                                valuenow="75" aria-valuemin="0" aria-valuemax="100"
                                style="width: ${TrinhDoKiNang}%; border-radius: 20px;"><span id="_TrinhDo_">${TrinhDoKiNang}</span></div><br>`
                            ;
                        },
                    
                        ngonNgu(TenNgonNgu, TrinhDoNgoaiNgu) {
                            return `<div class="col-md-6">
                            <h2 class="wow fadeInUp delay-02s animated">${TenNgonNgu}</h2>
                            <p>${TrinhDoNgoaiNgu}</p>
                          </div>
                        `;
                        },
                        duAn(LinkYoutube, LinkHinhAnh) {
                            let embedYoutubeLink = LinkYoutube.replace("https://www.youtube.com/watch?v=", "https://www.youtube.com/embed/")
                            return `
                                    <div class="col-md-3 _thumbnail_">
                                        <a class="_LinkYoutube_" data-fancybox data-type="iframe"
                                        data-src=${embedYoutubeLink} href="javascript:;">
                                        <img id="_LinkHinhAnh_" class="img-rounded"
                                        src=${LinkHinhAnh}
                                         style="width:100%">
                                        </a>
                                    </div>
                                `;
                        },
                        chiTietDuAn(i, TieuDe, ViTri, MoTa, KyNang) {
                            divKyNang = "";
                            for (let val of KyNang.split(",")) {
                                if (val !== "") {
                                    divKyNang += `
                                                <div class="col-md-6">
                                                    <li>${val}</li>
                                                </div>
                                            `;
                                }
                            }
                            customContent = `
                                    <div class='customHTML' style="width: 100%; padding: 30px">
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
                                    `;
                            return customIframe(i, customContent);
                        }
                 };
    

        default:
            break;
    }
}