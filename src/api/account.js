import fetch from '../utils/fetch';
export default {
    purefluids: function(data) {
        return fetch({
            url: '/v1/purefluids',
            method: 'post',
            data: data
        });
    },
    mixfluids: function(data) {
        return fetch({
            url: '/v1/mixfluids',
            method: 'post',
            data: data
        });
    },
    //点状态查询
    pointstate: function(url) {
        return fetch({
            url:url,
            // url: `/v1/pointstate?T=${data.T}&P=${data.P}&fluids=${data.fluids}`,
            method: 'get'
        });
    }
    
   
};