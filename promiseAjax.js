function ajaxSending(url){
    return new Promise((resolve,reject)=>{
        const p = new XMLHttpRequest();
        //p.responseType = 'json';
        p.open("GET",url);
        p.send();

        //发送结果
        p.onreadystatechange = function(){
            if(p.readyState === 4)
            {
                if(p.status >= 200&&p.status<300)
                {
                    resolve(p.response);
                }
                else
                {
                    reject(p.status);
                }
            }
        }
    })
}