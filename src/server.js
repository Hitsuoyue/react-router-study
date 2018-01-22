import $ from 'jquery';
const servers = {
    signUp: () => {
        $.ajax({
            url: '/login/signup',
            type: 'get',
            data: '',
            datatype: 'json',
            success:function (data) {
                console.log('success', data);
            },
            error:function (data) {
                console.log('error', data);
            }
        })
    },
    signIn: () => {
        $.ajax({
            url: '/index',
            type: 'get',
            data: '',
            datatype: 'json',
            success:function (data) {
                console.log('success', data);
            },
            error:function (data) {
                console.log('error', data);
            }
        })
    },
    Login: ()=>{
        $.ajax({
            url: '/login',
            type: 'get',
            data: '',
            datatype: 'json',
            success:function (data) {
                console.log('success', data);
            },
            error:function (data) {
                console.log('error', data);
            }
        })
    }
}
export default servers;