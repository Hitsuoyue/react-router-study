import $ from 'jquery';
const servers = {
    signUp: () => {
        let promise = new Promise(function(resolve, reject) {
            $.ajax({
                url: '/login/signup',
                type: 'get',
                data: '',
                datatype: 'json',
                success:function (data) {
                    console.log('success', data);
                    resolve(data);
                },
                error:function (data) {
                    console.log('error', data);
                    reject(error);
                }
            })
        });
        return promise;
    },
    signIn: () => {
        let promise = new Promise(function(resolve, reject) {
            $.ajax({
                url: '/login/signin',
                type: 'get',
                data: '',
                datatype: 'json',
                success:function (data) {
                    console.log('success', data);
                    resolve(data);
                },
                error:function (data) {
                    reject(error);
                }
            });
        });
        return promise;
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