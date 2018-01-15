import $ from 'jquery';
const servers = {
    signUp: () => {
        $.ajax({
            url: 'http://localhost:3200/login',
            type: 'get',
            data: '',
            dataType:'jsonP',
            success: function (data) {
                console.log('success-data', data);
            },
            error: function (data) {
                console.log('error-data', data);
            }
        })
    }
}
export default servers;