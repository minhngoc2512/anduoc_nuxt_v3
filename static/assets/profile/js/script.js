$(document).ready(function () {
    $('.select2').select2();

    //iCheck for checkbox and radio inputs
    $('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
        checkboxClass: 'icheckbox_minimal-blue',
        radioClass   : 'iradio_minimal-blue'
    });

    $('input[type="checkbox"]').on('ifChecked', function(event){
        ajaxQuickEditProActive(this, 1);
    });

    $('input[type="checkbox"]').on('ifUnchecked', function(event){
        ajaxQuickEditProActive(this, 0);
    });

    $('#list-product1_filter label input').attr('placeholder', 'Tìm kiếm sản phẩm');

    setInterval(function(){ $('#fix-box-message').slideUp("slow");}, 6000);

    // format number edit profile
    var pro_old_price = $('#pro_old_price').val();
    $('#pro_old_price').val(number_format(pro_old_price,0, ',', '.'));

    var pro_price = $('#pro_price').val();
    $('#pro_price').val(number_format(pro_price,0, ',', '.'));

    var pro_quantity = $('#pro_quantity').val();
    $('#pro_quantity').val(number_format(pro_quantity,0, ',', '.'));
});

function ajaxQuickEditProActive(_el, _value) {
    _id = $(_el).attr('data-id');
    _value = _value;
    $.ajax({
        url : '/profile/quick-edit-active-product',
        type : 'post',
        data : {pro_id:_id, value : _value},
        beforeSend : function () {
            $(_el).parents('.ld-active').addClass('active');
        },
        success : function (data) {
        },
        complete : function () {
            setTimeout(function(){ $(_el).parents('.ld-active').removeClass('active'); }, 200);
        }
    });
}

function closeImage (_el, _name) {
    pic = $('#pro_picture').attr('value');
    arr_pic = pic.split(',');
    name = _name;
    $.each(arr_pic, function( index, value ) {
        if (name == value) {
            arr_pic.splice(index, 1);
        }
    });
    $('#pro_picture').attr('value', arr_pic);
    $(_el).parent().remove();
}

function showNotification (_messages) {
    html = '<div class="box-notification">' +
                '<div class="box-notifi">' +
                    '<p>'+_messages+'</p>' +
                    '<i class="fa fa-close noti-close-box" onclick="closeBox(this)"></i>' +
                '</div>' +
            '</div>';
    $('.box-dang-ban').append(html);
}

function checkValue(_el) {
    value = $(_el).val();
    if (value < 0) {
        $(_el).val(0);
    }
}

$(function () {
    $('#list-product1').DataTable({
        'paging'      : false,
        'lengthChange': false,
        "lengthMenu": [[10, 30, 50, -1], [10, 30, 50, "All"]],
        'searching'   : false,
        'ordering'    : true,
        'info'        : false,
        'autoWidth'   : false
    });
});

function number_format( number, decimals, dec_point, thousands_sep ) {
    // http://kevin.vanzonneveld.net
    // + original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
    // + improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // + bugfix by: Michael White (http://crestidg.com)
    // + bugfix by: Benjamin Lupton
    // + bugfix by: Allan Jensen (http://www.winternet.no)
    // + revised by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
    // * example 1: number_format(1234.5678, 2, '.', '');
    // * returns 1: 1234.57

    var n = number, c = isNaN(decimals = Math.abs(decimals)) ? 2 : decimals;
    var d = dec_point == undefined ? "," : dec_point;
    var t = thousands_sep == undefined ? "." : thousands_sep, s = n < 0 ? "-" : "";
    var i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", j = (j = i.length) > 3 ? j % 3 : 0;

    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
}

function formatNumberProfile(_el) {
    var value = $(_el).val();
    if (parseInt(value) > 0) {
        var input = value.replace(/[\D\s\._\-]+/g, "");
        var result = number_format(input, 0, ',', '.');
        $(_el).val(result);
    }
}

function validateForm () {
    var pro_name = document.getElementById('pro_name').value;
    if (pro_name === '') {
        $('#pro_name_val').attr('style', 'display: block;');
        $('#pro_name').addClass('error-vali');
    } else {
        $('#pro_name_val').removeAttr('style');

        return true;
    }
    return false;
}

function checkValidate (_el) {
    _length = $(_el).val().length;
    if (_length > 3) {
        $(_el).removeClass('error-vali');
        $('#pro_name_val').removeAttr('style');
    }
}

function imgError(_el) {
    var _el=$(_el);
    _el.attr( "src", "/assets/images/noimage.png" );
}