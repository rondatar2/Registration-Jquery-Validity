$(document).ready(() => {
    $.validator.addMethod("dateITA", function (value, element) {
        var check = false,
            re = /^\d{1,2}\/\d{1,2}\/\d{4}$/,
            adata, gg, mm, aaaa, xdata;
        if (re.test(value)) {
            adata = value.split("/");
            mm = parseInt(adata[0], 10);
            gg = parseInt(adata[1], 10);
            aaaa = parseInt(adata[2], 10);
            xdata = new Date(Date.UTC(aaaa, mm - 1, gg, 12, 0, 0, 0));
            if ((xdata.getUTCFullYear() === aaaa) && (xdata.getUTCMonth() === mm - 1) && (xdata.getUTCDate() === gg)) {
                check = true;
            } else {
                check = false;
            }
        } else {
            check = false;
        }
        return this.optional(element) || check;
    }, $.validator.messages.date);
    $.validator.addMethod('courses', (value, ele, param) => {
        return value != '0';
    }, 'Select a course');
    $('form').validate({
        rules: {
            sn: {
                required: true,
                number: true,
                minlength: 5,
                maxlength: 12,
            },
            name: {
                required: true,
                minlength: 4,
                maxlength: 20,
            },
            date: {
                required: true,
                dateITA: true,
            },
            year: {
                required: true,
            },
            course: {
                courses: true,
            },
            subjects: {
                required: true,
            },
        }
    })
})