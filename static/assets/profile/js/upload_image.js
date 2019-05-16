var Upload = {
    currentImg: 0,
    path_upload : '',
    getFB: 0,
    dataFacebook: [],
    secret:'',
    type_picture: 'product',
    div_show:'#list_img',
    id_show: 0,
    id_show_upload: 0,
    pro_pic : [],
    uploadImg: function(opt,is_replace){
        Upload.path_upload = $(opt).parents('form').attr('action');
        var ajaxData = new FormData();
        ajaxData.append('typepicture', Upload.type_picture);
        $.each($(opt)[0].files, function (i, file) {
            if (i <= 7) {
                i = Upload.id_show;
                ajaxData.append('photo_'+i, file);
                var html = '<div id="upload_box_'+ i +'" class="img-upload-pro">' +
                    '<div class="uploadImgContent"><img src="/assets/images/load-report.gif" alt="loadding img"/></div>' +
                    '</div>';
                $(Upload.div_show).append(html);
                Upload.id_show++;
            }
        });
        this.postImages(ajaxData,is_replace);
    },
    postImages: function(data,type){
        $.ajax({
            url: Upload.path_upload,
            data: data,
            cache: false,
            contentType: false,
            processData: false,
            type: 'POST',
            dataType: 'json',
            beforeSend: function(){

            },
            success: function (respons) {
                if(type==1){
                    Upload.updateData(respons.photo_0);
                }else{
                    Upload.showData(respons);
                }

            }
        });
    },
    removeItem:function(ops){
        $(ops).parents('.item').remove();
    },
    updateCurrent: function(ops){
        Upload.currentImg = $(ops).parents('.item').attr('data-item');
    },
    updateData:function(data){
        var _error = data.error || 0;
        var _msg = data.message || '';
        checkError(data);
        var _this = $('#item_'+Upload.currentImg);
        _this.find('img').attr('src',data.url);
        _this.find('.filename').val(data.filename);
        _this.find('.w').val(data.w);
        _this.find('.h').val(data.h);
    },
    showData: function(data){
        arr_pic_old = $('#pro_picture').val();
        if (arr_pic_old !== '') {
            Upload.pro_pic = arr_pic_old.split(',');
        }
        $.each(data,function(i,row){
            i = Upload.id_show_upload;
            if (checkError(row, i)) {
                showNotification(row.message);
                $(Upload.div_show+ ' #upload_box_' + i ).remove();
            } else {
                var idData = row.id;
                var nameData = row.name;
                var objDataHtml = $("#" + idData);
                var html = '<i class="fa fa-fw fa-close edit-trash" title="Xóa" onclick="closeImage(this, \''+nameData+'\')"></i>';
                var img = '<img style="width: 100%; height: 100%; object-fit: cover" src="'+ row.url +'" />';
                if(objDataHtml.length <= 0){
                    $(Upload.div_show+ ' #upload_box_' + i ).append(html);
                    $(Upload.div_show+ ' #upload_box_' + i + " .uploadImgContent").html(img);
                    $(Upload.div_show+ ' #upload_box_' + i ).attr("id",idData);
                    Upload.pro_pic.push(row.name);
                }else{
                    $(Upload.div_show+ ' #upload_box_' + i).remove();
                    showNotification('Hình ảnh đã tồn tại!');
                }
            }
            Upload.id_show_upload++;
        });
        $('#pro_picture').val(Upload.pro_pic);
        Upload.indexPosition();
    },
    addTextBox:function(){
        var html = '<li class="item">'+
            '<div class="text"> '+

            '</div>'+
            '</li>';
        $('#box_upload').append(html);
        Upload.indexPosition();
    },
    addVideo:function(){
        var yUrl = prompt("Link youtube: ", "");
        if (yUrl != null) {
            iYoutube = Upload.getYoutubeId(yUrl);
            Upload.showVideo(iYoutube);
        }
    },

    showVideo: function(iYoutube){
        var html = '<li class="item">'+
            '<div class="">'+
            '<div class="title">'+
            '<label class="upl_control">'+
            '</label>'+
            '<span class="upl_control"><i>1</i></span>'+
            '<label class="upl_control" onclick="Upload.removeItem(this)">'+
            '<i class="mcon-bin" title="Xóa"></i>'+
            '</label>'+
            '</div>'+
            '<span class="img">'+
            '<img src="https://img.youtube.com/vi/'+iYoutube+'/sddefault.jpg" />'+
            '<span class="mcon-video"></span>'+
            '</span>'+
            '<div class="info">'+
            '<label class="form-field">'+
            '<textarea placeholder="Mô tả" name="teaser[]" onfocus="Upload.addClassName(this,\'full\')" onblur="Upload.removeClassName(this,\'full\')"></textarea>'+
            '</label>'+
            '<input type="hidden" class="filename" name="filename[]" value="'+iYoutube+'" />'+
            '<input type="hidden" class="w" name="w[]" value="0" />'+
            '<input type="hidden" class="h" name="h[]" value="0" />'+
            '<input type="hidden" class="type"  name="type[]" value="video" />'+
            '</div>'+
            '</div>'+
            '</li>';
        $('#box_upload').append(html);
        Upload.indexPosition();
    },
    getYoutubeId: function(url){
        var video_id = url.split('v=')[1];
        var ampersandPosition = video_id.indexOf('&');
        if(ampersandPosition != -1) {
            video_id = video_id.substring(0, ampersandPosition);
        }
        return video_id;
    },
    indexPosition: function(){
        var i=1;
        var has_img = 0;
        $('#box_upload > .item').each(function(){
            var _this = $(this);
            _this.attr('id','item_'+i).attr('data-item',i);
            if(has_img == 0){
                if(_this.find('.type').val() == 'photo'){
                    has_img = 1;
                    _this.find('.num_item').attr('title','Ảnh đại diện').html('<i class="mcon-home"></i>');
                }else{
                    _this.find('.num_item').attr('title','số: ' +i).text(i);
                }

            }else{
                _this.find('.num_item').attr('title','số: ' +i).text(i);
            }
            i++;
        })
    },getFeedPageFacebook: function(ops){
        var fb_url = $(ops).val();
        if($.trim(fb_url) !== ""){
            Upload.getFB = 0;
            Upload.getFeedFacebook(fb_url);
        }
    },
    getFeedFacebook: function(fb_url){
        $.ajax({
            url: '/ajax/getfacebookfeed?secret=' + Upload.secret,
            type: 'POST',
            data: {'fburl': fb_url},
            dataType: 'json',
            beforeSend: function(){

            },
            success: function (respons) {
                Upload.dataFacebook = respons;
                var html = '';
                $.each(respons,function (key,data) {
                    html += '<label class="item" onclick="Upload.fillDataFacebook('+key+')">' +
                        '<span class="img"><img src="'+data.picture+'" /> <span class="total">'+'</span> </span> ' +
                        '<span class="fb_title">'+data.message+'</span>' +
                        '</label>';

                });
                $('#fb_list').html(html);
            }
        });
        $('#box_suggest_fb').attr('open','true');
        hideModal('#select_fb');
        $('#btn_showlist').removeClass('show');
    },
    fillDataFacebook: function(key){
        if(typeof Upload.dataFacebook[key] === 'object'){
            $('#box_upload').html('');
            var data = Upload.dataFacebook[key];
            tinymce.get("cla_description").execCommand("mceSetContent", false, data.message);
            if(data.total_pictures <= 0){
                Upload.showDataImageFB(data.picture);
            }
            $.each(data.pictures,function(i,pic){
                Upload.showDataImageFB(pic.src);
            });
        }
        showMoreField();
        Upload.indexPosition();
        $('#box_suggest_fb').removeAttr('open');
        $('#btn_showlist').addClass('show');
    },
    showDataImageFB: function(url){
        var html = '<li class="item">'+
            '<div class="">'+
            '<div class="title">'+
            '<label class="upl_control" onclick="Upload.updateCurrent(this)" for="replace">'+
            '<i class="mcon-change" title="Đổi"></i>'+
            '</label>'+
            '<span class="upl_control"><i class="num_item">1</i></span>'+
            '<label class="upl_control" onclick="Upload.removeItem(this)">'+
            '<i class="mcon-bin" title="Xóa"></i>'+
            '</label>'+
            '</div>'+
            '<span class="img">'+
            '<img src="'+url+'"/>'+
            '</span>'+
            '<div class="info">'+
            '<label class="form-field">'+
            '<textarea name="teaser[]" placeholder="Mô tả" onfocus="Upload.addClassName(this,\'full\')" onblur="Upload.removeClassName(this,\'full\')"></textarea>'+
            '</label>'+
            '<input type="hidden" class="filename" name="filename[]" value="'+url+'" />'+
            '<input type="hidden" class="w" name="w[]" value="" />'+
            '<input type="hidden" class="h" name="h[]" value="" />'+
            '<input type="hidden" class="type"  name="type[]" value="photo" />'+
            '</div>'+
            '</div>'+
            '</li>';
        $('#box_upload').append(html);
    },
    addClassName: function(ops,className){
        $(ops).parents('.item').addClass(className);
    },
    removeClassName: function(ops,className) {
        $(ops).parents('.item').removeClass(className);
    }
}

function checkError (data, i) {
    var _i = parseInt(i);
    var _error = data.error || 0;
    _error = parseInt(_error);
    var _msg = data.message || '';
    var _id = data.id || '';
    if(_error === 1){
        return true;
    }
}