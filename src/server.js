import $ from 'jquery';
const servers = {
    signUp: () => {
        $.ajax({
            url: '/v2/movie/in_theaters',
            type: 'get',
            data: '',
            dataType:'json',
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